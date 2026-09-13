import { SITE } from '../config/site';

export interface LeadParams {
  name: string;
  email: string;
  phone: string;
  org: string;
  assessment: string;
}

// Posts assessment leads to the same Formspree endpoint as the main contact form,
// tagged with an `Assessment` field so submissions are distinguishable in the inbox.
//
// Uses FormData (multipart), matching ContactForm.astro's proven-working submission —
// not a JSON body. `Content-Type: application/json` is not a CORS "simple" request header,
// so it forces a preflight OPTIONS request; if that preflight isn't handled the way the
// browser expects, the POST never fires and the whole call just fails silently. FormData
// with only the `Accept` header stays a simple request with no preflight, avoiding that class
// of failure entirely — this is the fix for leads not arriving after finishing an assessment.
export async function submitLead(params: LeadParams): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.set('_subject', `${params.assessment} Lead — ${params.org}`);
    formData.set('Name', params.name);
    formData.set('Email', params.email);
    formData.set('Phone', params.phone);
    formData.set('Organisation', params.org);
    formData.set('Assessment', params.assessment);
    formData.set('Date', new Date().toLocaleString('en-AU'));

    const res = await fetch(SITE.formspreeAction, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    return res.ok;
  } catch {
    return false;
  }
}
