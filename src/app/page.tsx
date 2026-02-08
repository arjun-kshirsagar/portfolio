import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* 1. Hero */}
      <section>
        <h1 className="text-2xl mb-4">Arjun Kshirsagar</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Backend engineer in the making. Systems &gt; syntax.
          <br />
          I build APIs, pipelines, and infra-heavy projects.
          <br />
          Currently obsessed with databases, distributed systems, and real-world scale.
        </p>
        <p className="text-sm italic">
          Focus: High-performance data ingestion &amp; distributed observability.
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

      {/* 3. Projects */}
      <section>
        <h2 className="text-lg mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Projects</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-md font-bold mb-2">Anno-tex (2025)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              End-to-end CI/CD pipeline for backend annotation services.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Manual deployments were slow and error-prone. Needed a zero-touch system for Kubernetes.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: AWS EKS, Docker, GitHub Actions.</li>
                <li>Trade-off: Chose EKS over ECS for better control over networking and service mesh.</li>
                <li>Learned: Managing secrets across environments is the hardest part of CI/CD.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-2">Reporting Microservice @ Wealthy (2023–2024)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Modular generation of complex investment reports.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Monolithic reporting was hitting memory limits and timing out.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: Python, ETL pipelines, Microservices.</li>
                <li>Impact: Streamlined data flow across reporting and analytics features.</li>
                <li>Constraint: Had to maintain 100% data accuracy while improving speed by 3x.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-2">SIP Analytics Engine (2024–2025)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Real-time analytics for Systematic Investment Plans.
            </p>
            <div className="text-sm space-y-3">
              <p><strong>Why:</strong> Traditional RDBMS couldn't handle the aggregation queries over millions of rows in real-time.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Tech: ClickHouse, FastAPI, Celery.</li>
                <li>Result: Reduced server load by 40% using exponential backoff and Redis caching.</li>
                <li>What broke: Initial ingestion patterns caused "too many parts" errors in ClickHouse; solved via batching.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Beliefs */}
      <section>
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Things I believe</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>I prefer boring tech at scale.</li>
          <li>I don’t trust systems I can’t explain from first principles.</li>
          <li>Side projects are for learning, not hype.</li>
          <li>LLMs are tools, not substitutes for fundamentals.</li>
        </ul>
      </section>

      {/* 5. Roadmap */}
      <section>
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Roadmap (2025–2026)</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly checked className="accent-black" /> 
            <span>Master database internals (LSM Trees, B-Trees)</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly className="accent-black" /> 
            <span>Ship 2 infra-heavy side projects</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly className="accent-black" /> 
            <span>Write 5 deep-dive technical blogs</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" readOnly className="accent-black" /> 
            <span>Contribute to an open-source data engine</span>
          </li>
        </ul>
      </section>

      {/* 6. Contact */}
      <section className="mt-12">
        <h2 className="text-lg mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Contact</h2>
        <div className="flex gap-4 text-sm">
          <Link href="https://github.com/arjun-kshirsagar">GitHub</Link>
          <Link href="https://linkedin.com/in/arjun-kshirsagar">LinkedIn</Link>
          <Link href="/resume.pdf" target="_blank">Resume (PDF)</Link>
          <Link href="mailto:arjun.dev2025@gmail.com">Email</Link>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          If you like serious systems or boring tech done right — reach out.
        </p>
      </section>
    </main>
  );
}