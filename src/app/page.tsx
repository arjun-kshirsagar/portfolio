import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* 1. Hero */}
      <section>
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl">Arjun Kshirsagar</h1>
          <ThemeToggle />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Backend engineer focused on systems &gt; syntax.
          <br />
          I build APIs, data pipelines, and infra-heavy backend services.
          <br />
          Currently obsessed with databases, distributed systems, and real-world scale.
        </p>
        <p className="text-sm italic">
          Current focus: High-performance data ingestion &amp; distributed observability.
        </p>
      </section>

      {/* 2. Now */}
      <section>
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Now</h2>
        <ul className="space-y-2 text-sm">
          <li>📍 Based in India</li>
          <li>🎯 Goal: Scaling reporting infra at Wealthy.in</li>
          <li>🧠 Learning: ClickHouse internals &amp; storage engines</li>
          <li>🏋️ Training: Improving consistency in the gym</li>
        </ul>
      </section>

      {/* 3. Experience */}
      <section>
        <h2 className="text-lg mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-8">
          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -left-[6.5px] top-1.5" />
            <h3 className="text-sm font-bold">SDE 1 — Wealthy.in</h3>
            <p className="text-xs text-gray-500 mb-2">2025 — Present</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scaling production reporting systems and backend analytics infra.
            </p>
          </div>
          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -left-[6.5px] top-1.5" />
            <h3 className="text-sm font-bold">Backend Intern — Wealthy.in</h3>
            <p className="text-xs text-gray-500 mb-2">2024 — 2025</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Worked on production reporting systems, analytics pipelines, and backend services used at scale.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Projects */}
      <section>
        <h2 className="text-lg mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Projects</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-md font-bold mb-2">Anno-tex (2026)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              End-to-end CI/CD pipeline for backend annotation services.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Manual deployments were slow and error-prone. A zero-touch Kubernetes deployment system was needed.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: AWS EKS, Docker, GitHub Actions</li>
                <li>Trade-off: Chose EKS over ECS for finer control over networking and future service-mesh adoption.</li>
                <li>Learned: Managing secrets across environments is the hardest part of CI/CD at scale.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-2">Reporting Microservice @ Wealthy (2024–2025)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Modular generation of complex investment reports.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Monolithic reporting workflows were hitting memory limits and timing out under load.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: Python, ETL pipelines, Microservices</li>
                <li>Impact: Streamlined data flow across reporting and analytics features, while delivering <strong>2× more reports than before</strong>.</li>
                <li>Constraint: Maintained 100% data accuracy under increased throughput.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-2">CRM Analytics Engine (2024–2025)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Real-time analytics across investment transactions.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Traditional RDBMS systems couldn’t handle aggregation queries over large volumes of transactional data in real time.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: ClickHouse, FastAPI, Celery</li>
                <li>Result: Reduced server load by 40% using exponential backoff and Redis caching.</li>
                <li>What broke: Early ingestion patterns caused “too many parts” errors in ClickHouse; fixed via batching and ingestion tuning.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-2">Gradonix (2025)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Backend platform for academic workflows and data management.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Existing systems were fragmented and hard to scale across institutions.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: NexJS, MongoDB, Redis</li>
                <li>Focus: Clean domain modeling, role-based access, and extensible data workflows.</li>
                <li>Learned: Getting schemas and permissions right early saves massive refactors later.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Beliefs */}
      <section>
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Things I believe</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>I prefer boring tech at scale.</li>
          <li>I don’t trust systems I can’t explain from first principles.</li>
          <li>Side projects are for learning, not hype.</li>
          <li>LLMs are tools, not substitutes for fundamentals.</li>
        </ul>
      </section>

      {/* 6. Roadmap */}
      <section>
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Roadmap (2026)</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly disabled className="accent-black cursor-not-allowed" />
            <span className="text-gray-700 dark:text-gray-300">Master database internals (LSM Trees, B-Trees)</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly disabled className="accent-black cursor-not-allowed" />
            <span className="text-gray-700 dark:text-gray-300">Ship 2 infra-heavy side projects</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly disabled className="accent-black cursor-not-allowed" />
            <span className="text-gray-700 dark:text-gray-300">Write 5 deep-dive technical blogs</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly disabled className="accent-black cursor-not-allowed" />
            <span className="text-gray-700 dark:text-gray-300">Contribute to an open-source data engine</span>
          </li>
        </ul>
      </section>

      {/* 7. Contact */}
      <section className="mt-12">
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Contact</h2>
        <div className="flex gap-4 text-sm">
          <Link href="https://github.com/arjun-kshirsagar" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://linkedin.com/in/arjunkshirsagar" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="/Arjun_Kshirsagar_SDE.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</Link>
          <Link href="mailto:arjun.dev2025@gmail.com" target="_blank" rel="noopener noreferrer">Email</Link>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          If you like serious systems or boring tech done right — reach out.
        </p>
      </section>
    </main>
  );
}
