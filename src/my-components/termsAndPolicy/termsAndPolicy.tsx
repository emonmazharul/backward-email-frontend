import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


export default function TermsAndPolicySite() {
  const [page, setPage] = useState<'privacy' | 'terms'>('privacy');
  const effectiveDate = '2025-11-23';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <header className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">BackwardEmail</h1>
            <p className="text-sm text-muted-foreground">Privacy & Terms center</p>
          </div>

          <nav className="flex-col md:flex gap-2">
            <Button variant={page === 'privacy' ? 'default' : 'ghost'} size="sm" onClick={() => setPage('privacy')}>
              Privacy Policy
            </Button>
            <Button variant={page === 'terms' ? 'default' : 'ghost'} size="sm" onClick={() => setPage('terms')}>
              Terms of Service
            </Button>
          </nav>
        </div>
      </header>

      <div className="mx-auto mt-8 max-w-5xl">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">
              {page === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
          </CardHeader>

          <CardContent className="mt-4">
            {page === 'privacy' ? <PrivacyPolicyShort effectiveDate={effectiveDate} /> : <TermsOfServiceShort effectiveDate={effectiveDate} />}

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">Questions? Email <a className="underline" href="mailto:dev.mazharul@gmail.com">dev.mazharul@gmail.com</a></div>
              <div className="flex-col md:flex-row gap-2">
                <Button size="sm" onClick={() => window.print()}>Print</Button>
                <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BackwardEmail — All rights reserved.
        </footer>
      </div>
    </main>
  );
}

function PrivacyPolicyShort({ effectiveDate }: { effectiveDate: string }) {
  return (
    <section className="space-y-4 text-sm leading-relaxed">
      <p>
        BackwardEmail ("we", "us", "the Service") respects your privacy. This application accesses your Gmail inbox
        metadata to display email subjects, senders, and dates from oldest to newest. The Service only requests the
        Gmail "readonly" scope and does not store email content or metadata on any server-side database.
      </p>

      <h3 className="font-semibold">Data we access</h3>
      <p>
        We only request and use the minimum Gmail scope required: 
        <br className='md:hidden'/>
        <code className='wrap-break-word'>https://www.googleapis.com/auth/gmail.readonly</code>.
        With your permission we may access email subject lines, sender display names/emails, message dates, and IDs used
        to fetch metadata.
      </p>

      <h3 className="font-semibold">No storage or sharing</h3>
      <p>
        We do not persist your Gmail data on servers or in third-party storage. We do not sell or share Gmail data with
        third parties for advertising or analytics. Any tokens or session information used by the client are kept to the
        minimum necessary.
      </p>

      <h3 className="font-semibold">Security</h3>
      <p>
        We use HTTPS and follow OAuth best practices. However, no system is perfectly secure — please secure your Google
        account and revoke app access if you suspect unauthorized use.
      </p>

      <h3 className="font-semibold">Cookies and session storage</h3>
      <p>
        The app may use browser cookies or local/session storage for session state and preferences. These are not used
        to store email content.
      </p>

      <h3 className="font-semibold">Contact</h3>
      <p>
        For questions regarding this privacy policy, or to request the removal of any stored tokens or session data,
        contact <a className="underline" href="mailto:dev.mazharul@gmail.com">dev.mazharul@gmail.com</a>.
      </p>

      <p className="text-xs text-muted-foreground">Effective date: {effectiveDate}</p>
    </section>
  );
}

function TermsOfServiceShort({ effectiveDate }: { effectiveDate: string }) {
  return (
    <section className="space-y-4 text-sm leading-relaxed">
      <p>
        These Terms of Service ("Terms") govern your access to and use of BackwardEmail ("Service"). By using the
        Service you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <h3 className="font-semibold">Use of the Service</h3>
      <p>
        BackwardEmail provides a client-side interface to view your Gmail inbox metadata from oldest to newest. You
        must have a Google account and grant the app access via OAuth to use the Service.
      </p>

      <h3 className="font-semibold">Account & OAuth</h3>
      <p>
        The Service relies on Google OAuth. You are responsible for maintaining the confidentiality of your Google
        credentials and for any activity that occurs under your account. You may revoke access at any time via your
        Google account settings.
      </p>

      <h3 className="font-semibold">Prohibited uses</h3>
      <ul className="ml-5 list-disc">
        <li>Do not use the Service to access accounts that are not yours without permission.</li>
        <li>Do not attempt to circumvent Google API rate limits or terms of service.</li>
        <li>Do not attempt to store or redistribute Gmail data obtained from the Service without explicit user consent.</li>
      </ul>

      <h3 className="font-semibold">Limitation of liability</h3>
      <p>
        To the maximum extent permitted by law, BackwardEmail and its maintainers are not liable for any indirect,
        incidental, special, consequential or punitive damages arising from your use of the Service, loss of data,
        or interruptions in service.
      </p>

      <h3 className="font-semibold">Disclaimer</h3>
      <p>
        The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee
        uninterrupted or error-free operation.
      </p>

      <h3 className="font-semibold">Changes to Terms</h3>
      <p>
        We may modify these Terms at any time. Updated Terms will be posted on this page with an updated effective
        date. Continued use after changes constitutes acceptance of the updated Terms.
      </p>

      <h3 className="font-semibold">Governing law</h3>
      <p>
        These Terms are governed by the laws of the United Kingdom (or replace with your jurisdiction). Any disputes
        will be subject to the courts of that jurisdiction.
      </p>

      <h3 className="font-semibold">Contact</h3>
      <p>
        Questions about these Terms should be sent to <a className="underline" href="mailto:dev.mazharul@gmail.com">dev.mazharul@gmail.com</a>.
      </p>

      <p className="text-xs text-muted-foreground">Effective date: {effectiveDate}</p>
    </section>
  );
}
