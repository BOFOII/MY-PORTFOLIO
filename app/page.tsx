import { Github, Linkedin, Mail, Twitter, ExternalLink, ArrowRight, Instagram } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-24 py-12 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Fixed-ish on desktop */}
          <aside className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit flex flex-col justify-between">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">RISKI RAHMAND</h1>
              <h2 className="text-xl lg:text-2xl font-medium text-slate-200 mb-6">Programmer Honda Babel</h2>
              <p className="text-muted-foreground leading-relaxed max-w-xs mb-12">
                Saya membangun aplikasi web yang tangguh dan skalabel dengan fokus pada pengalaman pengguna yang luar biasa dan kode yang bersih.
              </p>

              <nav className="hidden lg:block space-y-4 mb-16">
                <Link
                  href="#about"
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-[1px] bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                  Tentang Saya
                </Link>
                <Link
                  href="#experience"
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-[1px] bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                  Pengalaman
                </Link>
                <Link
                  href="#projects"
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-[1px] bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                  Projects
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-5 pt-8 lg:pt-0">
              <Link
                href="https://github.com/BOFOII"
                target="_blank"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://instagram.com/riskirahmand._"
                target="_blank"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="mailto:it.riski.rahmand@gmail.com"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Mail size={24} />
              </Link>
            </div>
          </aside>

          {/* Right Column - Content */}
          <main className="lg:w-2/3 space-y-24">
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <div className="lg:hidden mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Tentang Saya</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>Saya seorang insinyur perangkat lunak yang bersemangat menjembatani kesenjangan antara desain dan teknologi. Perjalanan saya dimulai dengan rasa ingin tahu tentang cara kerja sesuatu, yang kemudian berkembang menjadi karier membangun aplikasi web berkinerja tinggi untuk perusahaan rintisan dan perusahaan mapan.</p>

                <p>
                  Saat ini, saya berspesialisasi dalam <span className="text-white font-medium">Laravel, Vue, Nuxt.js, React, Next.js, Node.js dan Odoo</span>, dengan fokus pada pola arsitektur yang dapat diskalakan. Saya percaya bahwa kode yang baik tidak hanya fungsional tetapi juga mudah dipelihara dan intuitif.
                </p>

                <p>
                  Ketika saya tidak berada di meja kerja, Anda mungkin akan menemukan saya menjelajahi jalur pendakian, bereksperimen dengan resep roti sourdough, atau berkontribusi pada proyek open-source.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <div className="lg:hidden mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Pengalaman</h3>
              </div>
              <div className="space-y-12">
                {[
                  {
                    period: "2021 — SEKARANG",
                    role: "Senior Full-Stack Engineer",
                    company: "Free Lancer",
                    description:
                      "Sejak 2021, saya aktif berkarier sebagai Full-Stack Freelance Developer. Saya membangun solusi teknologi yang disesuaikan dengan kebutuhan klien, mencakup frontend, backend, hingga pekerjaan tingkat sistem. Salah satu area minat saya adalah pengembangan plugin server Minecraft untuk komunitas PocketMine, di mana saya dikenal dengan nama BOFOI.",
                    skills: ["PHP", "Laravel", "TypeScript", "React", "Next", "Vue", "Nuxt"],
                  },
                  {
                    period: "2024 — SEKARANG",
                    role: "Senior Full-Stack Engineer",
                    company: "Honda BABEL",
                    description:
                      "Memegang peran sebagai Senior Programmer di PT. Asia Surya Perkasa (Honda Babel). Bertanggung jawab penuh dalam siklus pengembangan perangkat lunak, meliputi pengembangan aplikasi mobile (Flutter), pembuatan backend API, pengembangan antarmuka frontend, serta konfigurasi dan pemeliharaan infrastruktur server.",
                    skills: ["Python", "Odoo", "Django", "Dart", "Flutter", "SQL"],
                  },
                  {
                    period: "2022 - 2024",
                    role: "Junior Full-Stack Engineer",
                    company: "Honda BABEL",
                    description: "Bergabung dengan PT. Asia Surya Perkasa (Honda Babel), salah satu perusahaan dalam Tunas Group, sebagai Mobile App Developer. Fokus utama pada pengembangan aplikasi seluler menggunakan Flutter dan integrasi REST API dengan sistem Odoo.",
                    skills: ["Python", "Odoo", "Django", "Dart", "Flutter", "SQL"],
                  },
                  {
                    period: "2019 — 2022",
                    role: "Junior Web Developer",
                    company: "SMK",
                    description:
                      "Dengan fokus mengikuti kompetisi programming di tingkat Provinsi Kepulauan Bangka Belitung, saya berhasil menyabet gelar Juara Pertama LKS Web Programming dan Juara Pertama LKS IT Software for Business. Kedua pencapaian tersebut menjadi portofolio konkret yang akhirnya menarik perhatian dan tawaran rekrutmen dari perusahaan-perusahaan besar.",
                    skills: ["JavaScript", "PHP", "Laravel", "Vue", "React", "SQL"],
                  },
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 -mx-4 rounded-xl transition-all hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                  >
                    <header className="md:col-span-1 text-xs font-semibold text-slate-500 pt-1">{exp.period}</header>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1">
                        {exp.role} · {exp.company}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-none text-[10px] font-bold px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button
                  variant="link"
                  className="group p-0 text-white font-semibold hover:text-primary transition-colors"
                >
                  View Full Resume
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <div className="lg:hidden mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Projects</h3>
              </div>
              <div className="space-y-12">
                {[
                  {
                    title: "SIPINDAI",
                    image: "/sipindai.png",
                    description:
                      "SIPINDAI adalah solusi pemindaian dokumen yang mengotomatiskan ekstraksi data dari dokumen identitas (seperti KTP, KK, Paspor, SIM) ke dalam skema JSON yang telah ditentukan. Aplikasi ini mengintegrasikan teknologi Artificial Intelligence (AI) untuk mengoptimalkan akurasi pembacaan karakter (OCR), menghasilkan analisis data yang terstruktur, andal, dan siap digunakan untuk berbagai keperluan sistem.",
                    link: "https://sipindai.com",
                    tech: ["Laravel", "Filament", "NodeJS", "SQL"],
                  },
                  {
                    title: "SMM PANEL",
                    image: "/yusuf-pedia.png",
                    description:
                      "SMM Panel merupakan sebuah platform berbasis website yang menyediakan layanan peningkatan performa media sosial (seperti penambahan follower, like, dan lainnya). Sistem ini dilengkapi dengan beragam metode pembayaran terintegrasi serta fitur pelacakan data finansial yang komprehensif untuk memantau profit dan loss secara real-time.",
                    link: "https://yusufpedia.id",
                    tech: ["Laravel", "Filament", "SQL"],
                  },
                  {
                    title: "HONDA SALES",
                    image: "/honda-sales-website.png",
                    description:
                      "Honda Sales Website adalah sebuah platform portfolio profesional yang dirancang khusus untuk membantu Sales Executive Honda di wilayah Bangka Belitung (Babel) dalam meningkatkan performa penjualan kendaraan Honda. Website ini berfungsi sebagai alat pemasaran digital yang memamerkan kredibilitas, pengalaman, dan prestasi sales dalam membantu pelanggan menemukan kendaraan Honda yang tepat.",
                    link: "https://honda-sales-website.vercel.app",
                    tech: ["Next"],
                  },
                ].map((project, i) => (
                  <div
                    key={i}
                    className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 p-4 -mx-4 rounded-xl transition-all hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                  >
                    <div className="md:col-span-1">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="rounded border border-slate-200/10 group-hover:border-slate-200/30 transition-colors w-full aspect-video md:aspect-auto object-cover"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1">
                        {project.title}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-none text-[10px] font-bold px-3 py-1"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-24 pb-12 text-sm text-muted-foreground border-t border-white/5">
              <p>
                Built with <span className="text-white">Next.js</span>, <span className="text-white">Tailwind CSS</span>
                , and <span className="text-white">Framer Motion</span>. Deployed on{" "}
                <span className="text-white border-b border-white/20 hover:border-primary cursor-pointer transition-colors">
                  Vercel
                </span>
                .
              </p>
              <p className="mt-2">© 2025 RISKI RAHMAND. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
