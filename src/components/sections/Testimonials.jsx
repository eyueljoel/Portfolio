import { Award, FileText, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            badge="Professional Standing"
            title="Endorsements &"
            highlight="References"
            subtitle="Verified academic standing at Haramaya University and professional developer internship reference from Tewos Company."
          />
        </Reveal>

        {/* Truth-first Reference Card */}
        <Reveal delay={100} className="mt-12">
          <SpotlightCard className="p-8 sm:p-10 border border-slate-200 dark:border-white/10 shadow-xl bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-cyan-500/[0.03]">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 size={13} /> References Available on Request
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Academic & Professional Endorsements
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  In adherence to professional confidentiality and honesty guidelines, written letters of recommendation, academic transcripts from <strong>Haramaya University</strong>, and internship supervisor verification from <strong>Tewos Company</strong> are provided directly upon request during interview stages.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Tewos Company</p>
                    <p className="text-[11px] text-indigo-500 font-mono mt-0.5">Software Internship Supervisor</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Covers HR/Payroll ERP contributions & team workflow.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Haramaya University</p>
                    <p className="text-[11px] text-emerald-500 font-mono mt-0.5">Faculty & Department Advisor</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Covers academic coursework, algorithms & systems.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl glass border border-slate-200 dark:border-white/10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-3">
                  <FileText size={24} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Request References</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
                  Delivered via email within 24 hours.
                </p>
                <a
                  href={`mailto:${profile.email}?subject=Reference%20Request%20-%20Eyuel%20Cherenet`}
                  className="btn-primary text-xs py-2 px-4 w-full justify-center"
                >
                  <Mail size={14} /> Request via Email
                </a>
              </div>

            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}
