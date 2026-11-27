import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';

export default function Contact({ email }) {
  const [copyStatus, setCopyStatus] = useState('idle');
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }

    timerRef.current = setTimeout(() => {
      setCopyStatus('idle');
    }, 2500);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-800/80 py-24 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s Build Something Great</h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-400">
        Looking for a frontend engineer who cares about clean architecture, performance, and user
        experience? Reach out anytime.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Send an Email
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {copyStatus === 'copied' && (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Email Copied!
            </>
          )}
          {copyStatus === 'error' && 'Unable to Copy — Use Send Email'}
          {copyStatus === 'idle' && 'Copy Email Address'}
        </button>
      </div>
    </section>
  );
}
