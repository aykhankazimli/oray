"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Globe,
  GraduationCap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Ana səhifə", href: "#ana" },
  { label: "Xidmətlər", href: "#xidmetler" },
  { label: "Proqramlar", href: "#proqramlar" },
  { label: "Üstünlüklər", href: "#ustunlukler" },
  { label: "Əlaqə", href: "#elaqe" },
];

const services = [
  {
    icon: GraduationCap,
    title: "Buraxılış imtahanına hazırlıq",
    desc: "Azərbaycan dili, riyaziyyat və digər istiqamətlər üzrə sistemli hazırlıq. Məktəb proqramına uyğun, nəticəyönümlü yanaşma.",
  },
  {
    icon: BookOpen,
    title: "SAT hazırlığı",
    desc: "Reading, Writing & Math bölmələri üçün strategiya, sınaq imtahanları və fərdi inkişaf planı.",
  },
  {
    icon: Globe,
    title: "İngilis dili kursları",
    desc: "Ümumi ingilis dili, danışıq, qrammatika və akademik yazı üzrə səviyyəli proqramlar (A1–C1).",
  },
];

const programs = [
  {
    title: "Buraxılış Focus",
    subtitle: "9-cu və 11-ci siniflər üçün",
    details: [
      "Həftədə 3–4 dərs",
      "Aylıq sınaq imtahanı",
      "Mövzu-mövzu analiz",
      "Valideyn üçün nəticə hesabatı",
    ],
  },
  {
    title: "SAT Elite",
    subtitle: "Hədəf bal üçün intensiv proqram",
    details: [
      "Rəsmi formatda practice test",
      "Zəif mövzular üzrə xüsusi plan",
      "Time management strategiyaları",
      "Essay/reading dəstəyi (istəyə bağlı)",
    ],
  },
  {
    title: "English Everyday",
    subtitle: "Ümumi və praktiki ingilis dili",
    details: [
      "Danışıq klubları",
      "Səviyyəyə uyğun qruplar",
      "Canlı tapşırıq sistemi",
      "Aylıq progress qiymətləndirmə",
    ],
  },
];

const features = [
  "Peşəkar müəllim heyəti və fərdi yanaşma",
  "Minimalist və rahat öyrənmə mühiti",
  "Daimi sınaqlar və ölçülə bilən nəticələr",
  "Online və offline dərs seçimləri",
  "Motivasiya və mentor dəstəyi",
  "Şəffaf qiymətləndirmə sistemi",
];

const testimonials = [
  {
    name: "Nərmin H.",
    text: "ORAY-də buraxılış hazırlığı ilə nəticəm xeyli yüksəldi. Müəllimlər çox sistemli işləyirlər.",
  },
  {
    name: "Murad A.",
    text: "SAT proqramı çox güclü idi. Xüsusilə sınaqlar və səhv analizi mənə çox kömək etdi.",
  },
  {
    name: "Aysel K.",
    text: "İngilis dili dərsləri sadə və effektivdir. Danışıq klubunda özüməinamım artdı.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-black/60">{eyebrow}</p>
      <h2 className="font-serif text-2xl tracking-tight text-black md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">{text}</p>}
    </div>
  );
}

export default function OraySite() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <div className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs text-black/70">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Phone size={14} /> +994 50 000 00 00
            </span>
            <span className="hidden items-center gap-1 sm:inline-flex">
              <Mail size={14} /> info@oray.edu.az
            </span>
          </div>
          <div className="inline-flex items-center gap-1">
            <MapPin size={14} /> Bakı, Azərbaycan
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#ana" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-black text-sm font-semibold">O</div>
            <div>
              <div className="text-lg font-serif tracking-wide">ORAY</div>
              <div className="-mt-0.5 text-[10px] uppercase tracking-[0.2em] text-black/60">Education</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-black/80 transition-colors hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#elaqe"
            className="inline-flex items-center gap-2 border border-black px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white"
          >
            Qeydiyyat <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="ana" className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-black/60">Ağıllı hazırlıq, real nəticə</p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              ORAY ilə <span className="italic">təhsildə</span> yeni mərhələ
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-black/70">
              Buraxılış imtahanı, SAT və ingilis dili kursları üçün klassik üslubda, nəticəyönümlü və müasir tədris mərkəzi.
              Sadə, zövqlü və etibarlı yanaşma ilə öyrənmə prosesini daha güclü edirik.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proqramlar" className="bg-black px-5 py-3 text-sm text-white transition-opacity hover:opacity-90">
                Proqramlara bax
              </a>
              <a
                href="#xidmetler"
                className="border border-black px-5 py-3 text-sm transition-colors hover:bg-black hover:text-white"
              >
                Xidmətlər
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["500+", "Tələbə"],
                ["90%+", "Məmnunluq"],
                ["3", "Əsas istiqamət"],
              ].map(([num, label]) => (
                <div key={String(label)} className="border border-black/10 p-4">
                  <div className="font-serif text-xl md:text-2xl">{num}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-black/60">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative border border-black p-5 md:p-7"
          >
            <div className="absolute -top-3 left-6 bg-white px-2 text-[10px] uppercase tracking-[0.18em] text-black/60">ORAY</div>
            <div className="grid h-full grid-rows-2 gap-5">
              <div className="flex flex-col justify-between border border-black/10 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">İmtahan hazırlığı</p>
                  <h3 className="mt-2 font-serif text-2xl">Buraxılış & SAT</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    Strateji proqram, sınaqlar və nəticə analizi ilə hədəfə addım-addım yaxınlaş.
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} /> Sistemli tədris planı
                </div>
              </div>
              <div className="flex flex-col justify-between border border-black/10 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">Dil inkişafı</p>
                  <h3 className="mt-2 font-serif text-2xl">English Courses</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    Ümumi ingilis dili, danışıq və akademik bacarıqlar üçün praktik dərs modeli.
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} /> Səviyyəyə uyğun qruplar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="xidmetler" className="border-y border-black/10 bg-black/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Xidmətlər"
            title="Təhsil xidmətləri"
            text="ORAY müxtəlif yaş qrupları və məqsədlər üçün hazırlanmış çevik və keyfiyyətli proqramlar təqdim edir."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-serif text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proqramlar" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Proqramlar"
          title="Sizə uyğun seçimlər"
          text="Hər proqram məqsədə uyğun planlaşdırılır. Qrup və ya fərdi formatda iştirak mümkündür."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {programs.map((program, idx) => (
            <div key={program.title} className="flex flex-col border border-black p-6 md:p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-black/60">0{idx + 1}</div>
              <h3 className="mt-3 font-serif text-2xl">{program.title}</h3>
              <p className="mt-1 text-sm text-black/60">{program.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {program.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-black/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#elaqe"
                className="mt-8 inline-flex items-center gap-2 border-t border-black/10 pt-4 text-sm transition-all hover:gap-3"
              >
                Müraciət et <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="ustunlukler" className="border-y border-black/10">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Üstünlüklər"
              title="Sadə dizayn, güclü nəticə"
              text="ORAY klassik və zərif yanaşmanı funksionallıqla birləşdirir — həm tədrisdə, həm də mühitdə."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2 border border-black/10 p-4 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Mini qeydiyyat</p>
            <h3 className="mt-2 font-serif text-2xl">Sınaq dərsinə yazılın</h3>
            <p className="mt-3 text-sm text-black/70">Məlumatlarınızı qeyd edin, komandamız sizinlə əlaqə saxlasın.</p>

            <form className="mt-6 space-y-3">
              <input className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black" placeholder="Ad və soyad" />
              <input className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black" placeholder="Telefon nömrəsi" />
              <select className="w-full bg-white border border-black/20 px-4 py-3 text-sm outline-none focus:border-black">
                <option>Proqram seçin</option>
                <option>Buraxılış hazırlığı</option>
                <option>SAT hazırlığı</option>
                <option>İngilis dili</option>
              </select>
              <button type="button" className="w-full bg-black py-3 text-sm text-white transition-opacity hover:opacity-90">
                Göndər
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Rəylər" title="Tələbələr nə deyir" text="Nəticələr və məmnuniyyət bizim üçün əsas göstəricidir." />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="mb-3 flex items-center gap-1 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-black/75">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black bg-black text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">ORAY Education</p>
            <h3 className="mt-2 font-serif text-2xl md:text-4xl">Uğurlu nəticəyə bu gün başlayın</h3>
            <p className="mt-3 max-w-2xl text-sm text-white/75">
              Buraxılış imtahanı, SAT və ingilis dili üzrə düzgün yol xəritəsi ilə irəliləmək üçün ORAY komandası ilə əlaqə saxlayın.
            </p>
          </div>
          <a
            href="#elaqe"
            className="inline-flex items-center gap-2 border border-white px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black"
          >
            Əlaqə saxla <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <footer id="elaqe" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-black text-sm font-semibold">O</div>
              <div>
                <div className="text-lg font-serif tracking-wide">ORAY</div>
                <div className="-mt-0.5 text-[10px] uppercase tracking-[0.2em] text-black/60">Education</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/70">
              Azərbaycanda buraxılış imtahanı, SAT və ingilis dili üzrə keyfiyyətli təhsil xidmətləri təqdim edən müasir tədris mərkəzi.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">Səhifələr</h4>
            <ul className="space-y-2 text-sm text-black/70">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-black">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">Əlaqə</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>+994 50 000 00 00</li>
              <li>info@oray.edu.az</li>
              <li>Bakı, Azərbaycan</li>
              <li>B.e.–Ş.: 09:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-black/10 pt-6 text-xs text-black/60 sm:flex-row">
          <span>© {new Date().getFullYear()} ORAY Education. Bütün hüquqlar qorunur.</span>
          <span>Minimal • Elegant • Nəticəyönümlü</span>
        </div>
      </footer>
    </div>
  );
}
