import { useState } from 'react';
import { createFeedbackMailto, savePendingFeedback } from '../../services/feedbackService';

export default function FeedbackSection({ text, lang, feedbacks }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackNotice, setFeedbackNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const message = formData.message.trim();
    if (!name || !email || !message) return;

    const item = { name, email, message, role: lang === 'en' ? 'User Feedback' : 'مستخدم', status: 'pending', timestamp: new Date().toISOString() };
    savePendingFeedback(item);
    window.location.href = createFeedbackMailto({ item, lang });
    setFormData({ name: '', email: '', message: '' });
    setFeedbackNotice(text.feedback_pending);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">{lang === 'en' ? 'Feedback' : 'ملاحظات'}</p>
          <h2 className="text-3xl font-bold text-white">{text.feedback_heading}</h2>
        </div>
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">{text.feedback_tag}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/20">
          <div className="mb-5"><label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_name}</label><input type="text" value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500" placeholder={lang === 'en' ? 'Enter your name' : 'اكتب اسمك'} required /></div>
          <div className="mb-5"><label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_email}</label><input type="email" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500" placeholder="you@example.com" required /></div>
          <div className="mb-5"><label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_message}</label><textarea value={formData.message} onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))} rows="5" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500" placeholder={lang === 'en' ? 'Leave a message' : 'اكتب تعليقك'} required /></div>
          <button type="submit" className="w-full rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">{text.send_feedback}</button>
          {feedbackNotice && <p className="mt-4 text-sm leading-relaxed text-emerald-300">{feedbackNotice}</p>}
        </form>

        <div className="space-y-5">
          {feedbacks.map((item) => (
            <article key={`${item.name}-${item.message}`} className="rounded-[28px] border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-bold text-indigo-300">{item.name.slice(0, 1).toUpperCase()}</div><div><h3 className="font-semibold text-white">{item.name}</h3><p className="text-xs text-slate-400">{item.role}</p></div></div>
              <p className="text-sm leading-relaxed text-slate-300">“{item.message}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
