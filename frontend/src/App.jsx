import { useState } from "react";
import "./styles.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const PROJECT_TYPE = "Simple RAG";
const PROJECT_SUBJECT = "Real Estate Operations Escalation Triage Simple RAG - Beginner Custom 18";
const DOMAIN_SUMMARY = "Real estate operations frequently deal with incidents requiring escalation, such as critical maintenance failures, tenant disputes, lease violations, or vendor issues. Timely and accurate triage is crucial to mitigate risks, ensure tenant satisfaction, and maintain property value. This project aims to centralize internal knowledge documents (e.g., escalation matrices, policy manuals) and provide an AI assistant to guide operations staff on appropriate actions and urgency levels for various incidents.";
const USER_PERSONA = "Property Manager Assistant or Junior Operations Coordinator: A new or entry-level team member who needs quick, reliable information on how to handle specific real estate operational escalations, understand company policies, and determine appropriate next steps without extensive senior oversight or manual policy lookup.";
const STARTER_QUESTIONS = ["How do I escalate a critical water leak affecting multiple units?", "What is the procedure for handling a repeated noise complaint against a tenant?", "A vendor invoice is overdue by 60 days, what's the next step?"];

export default function App() {
  const [question, setQuestion] = useState(STARTER_QUESTIONS[0]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch(`${API_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Request failed");
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">{PROJECT_TYPE}</p>
        <h1>{PROJECT_SUBJECT}</h1>
        <p>{DOMAIN_SUMMARY}</p>
        <p className="persona">Built for: {USER_PERSONA}</p>
      </section>

      <section className="workspace">
        <form onSubmit={submit} className="panel question-panel">
          <label htmlFor="question">Question or task</label>
          <textarea
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows="7"
          />
          <button disabled={loading}>{loading ? "Running..." : "Run assistant"}</button>
          <div className="starter-list">
            {STARTER_QUESTIONS.map((item) => (
              <button type="button" key={item} className="starter" onClick={() => setQuestion(item)}>{item}</button>
            ))}
          </div>
          {error && <p className="error">{error}</p>}
        </form>

        <div className="panel result-panel">
          <h2>Answer</h2>
          {!result && <p className="muted">The answer, sources, and agent timeline will appear here.</p>}
          {result && (
            <>
              <p className="answer">{result.answer}</p>
              <h3>Sources</h3>
              <div className="source-list">
                {result.sources.map((source) => (
                  <article key={`${source.title}-${source.score}`} className="source">
                    <strong>{source.title}</strong>
                    <span>Score {source.score}</span>
                    <p>{source.snippet}</p>
                  </article>
                ))}
              </div>
              <h3>Agent timeline</h3>
              <ol className="timeline">
                {result.steps.map((step) => (
                  <li key={step.step}>
                    <strong>{step.step}</strong>
                    <span>{step.status}</span>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
