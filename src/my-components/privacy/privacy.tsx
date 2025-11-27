import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const effectiveDate = "2025-11-23"; // update if needed

  return (
    <main className="min-h-screen bg-surface-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Privacy Policy</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">BackwardEmail — Effective date: {effectiveDate}</p>
          </CardHeader>

          <CardContent className="mt-4 space-y-6">
            <section>
              <h2 className="text-lg font-semibold">Introduction</h2>
              <p className="mt-2 text-sm leading-relaxed">
                BackwardEmail ("we", "our", "the Service") respects your privacy. This Privacy Policy explains how we
                access and use data when you sign in with Google to view your Gmail inbox. The app displays email
                subjects, senders, and dates from oldest to newest. We do <strong>not</strong> store your email data on any
                database or server.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Data we access</h2>
              <p className="mt-2 text-sm leading-relaxed">
                The Service only requests the minimum Google Gmail scope required to read inbox metadata: 
                <code className="rounded bg-muted px-1 py-0.5 text-xs">https://www.googleapis.com/auth/gmail.readonly</code>.
                With your permission we access:
              </p>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed">
                <li>Email subject lines</li>
                <li>Sender (From) display name / email</li>
                <li>Date and time of the message</li>
                <li>Message ID / thread ID used only to fetch and display the message metadata</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold">What we do NOT do</h2>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed">
                <li>We do not store your email content or metadata in any database or third-party storage.</li>
                <li>We do not share your Gmail data with third parties for marketing or analytics.</li>
                <li>We do not send emails on your behalf or modify your mailbox.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold">How the data is used</h2>
              <p className="mt-2 text-sm leading-relaxed">
                When you sign in, BackwardEmail uses your OAuth consent and a refresh token (stored securely in the
                browser/session) to fetch your mailbox metadata from Google and display it in the app UI. The data is
                used solely to render your inbox from oldest to newest.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Storage and retention</h2>
              <p className="mt-2 text-sm leading-relaxed">
                We do not persist your Gmail data on any server or database. Any tokens or session information are kept
                only in the browser or the session storage used by the client. If you sign out or revoke app access from
                your Google account, the Service will no longer be able to access your Gmail data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Security</h2>
              <p className="mt-2 text-sm leading-relaxed">
                We take standard precautions to protect data in transit using HTTPS and follow recommended OAuth best
                practices. However, no system is completely secure — please protect your Google account credentials and
                revoke access if you suspect any issue.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Third-party services</h2>
              <p className="mt-2 text-sm leading-relaxed">
                BackwardEmail integrates with Google APIs to retrieve your Gmail metadata. Google&apos;s privacy policy
                and practices apply when the Google platform is used.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Cookies and similar technologies</h2>
              <p className="mt-2 text-sm leading-relaxed">
                The Service may use cookies or browser storage for session management and preferences. These are not used
                to store email content and are kept to a minimum necessary for the app to function.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Children</h2>
              <p className="mt-2 text-sm leading-relaxed">
                The Service is not intended for children under 13. We do not knowingly collect personal data from
                children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Changes to this policy</h2>
              <p className="mt-2 text-sm leading-relaxed">
                We may update this policy from time to time. We will post the updated policy on this page with an updated
                effective date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Contact</h2>
              <p className="mt-2 text-sm leading-relaxed">
                For questions about this policy or to request data removal, contact us at <a href="mailto:dev.mazharul@gmail.com" className="underline">dev.mazharul@gmail.com</a>.
              </p>
            </section>

            <div className="flex flex-col items-start gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">By using BackwardEmail you agree to the practices described above.</p>
              <div className="flex-col md:flex gap-2">
                <Button size="sm" onClick={() => window.print()}>Print / Save</Button>
                <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Back to top
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
