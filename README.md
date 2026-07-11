# Real Estate Escalation Triage RAG Assistant

## Project Overview

Real Estate Escalation Triage RAG Assistant is a complete full-stack AI project for **Simple RAG** at **Beginner** difficulty. It includes a FastAPI backend, a React frontend, sample documents, vector search with ChromaDB support, source citations, timeline logs, structured run storage, Docker files, and tests.

Real estate operations frequently deal with incidents requiring escalation, such as critical maintenance failures, tenant disputes, lease violations, or vendor issues. Timely and accurate triage is crucial to mitigate risks, ensure tenant satisfaction, and maintain property value. This project aims to centralize internal knowledge documents (e.g., escalation matrices, policy manuals) and provide an AI assistant to guide operations staff on appropriate actions and urgency levels for various incidents.

Difficulty controls project complexity, architecture depth, AI model selection, and how advanced the generated codebase is.

- Architecture depth: minimal backend, simple folder structure, easy README, low-cost/free model
- Selected architecture: Real Estate Policy Assistant
- Template path: templates/simple-rag/real-estate-policy-assistant
- Generated stack: FastAPI backend, React UI, local vector fallback, simple tests
- README style: beginner-friendly setup and clear expected output

## Tech Stack

- Backend: Python, FastAPI, Pydantic, SQLAlchemy
- AI/RAG: LangChain-ready prompt layer, ChromaDB vector storage, local deterministic fallback model
- Workflow: Agent pipeline with planner, retrieval, tool, reasoning, and final answer steps
- Frontend: React and Vite
- Database: SQLite by default, PostgreSQL through Docker Compose
- Testing: pytest
- Difficulty: Beginner

## Generation Method

This project was generated with a template-based architecture engine. AI is used only for the blueprint, domain customization, sample data, prompts, and documentation. The codebase is produced from tested FastAPI/React/Docker templates rather than raw LLM source output.

## Why This Project Satisfies Simple RAG

This repository satisfies **Simple RAG** because it includes runnable implementation evidence, domain-specific workflow steps, validation gates, and portfolio documentation instead of only describing the idea.

## Project Type Satisfaction Map

This generated project satisfies **Simple RAG** through the runtime path below. The implementation is not only a README claim: the files listed after the diagram are generated in the repository and validated before GitHub push.

```text
[User]
  |
  | question / task details / tone / constraints
  v
[React Frontend]
  |
  | POST /api/ask
  v
[FastAPI Backend]
  |
  +--> [Vector Store / Sample Docs]
  |        |
  |        +-- retrieved context / cited sources
  |
  v
[Retriever]
  |
  v
[Citation Answer Builder]
  |
  v
[Final Answer Builder]
  |
  | answer + sources + timeline steps
  v
[React Frontend]
  |
  v
[User sees final output + agent timeline]
```

Runtime proof points:

- `frontend/src/App.jsx` renders the user workspace, starter prompts, answer panel, cited sources, and timeline.
- `backend/app/main.py` exposes `POST /api/ask` and returns the final answer, sources, timeline steps, and project type.
- `backend/app/services/pipeline.py` orchestrates the project-type flow: Retriever, Citation Answer Builder.
- `backend/app/services/vector_store.py` loads sample documents and retrieves relevant cited context.
- `backend/app/domain.py` contains the generated topic-specific workflow steps, business rules, tools, persona, and starter questions.
- `backend/app/db.py` stores each run so the generated app behaves like a real workflow tool instead of a static prompt demo.
- `backend/tests/test_project_contract.py` validates the API contract and project-type behavior.

Type-specific behavior:

- Flow style: User question -> load documents -> split chunks -> embed -> Chroma similarity search -> answer with citations.
- Visible output: final answer, cited sources, timeline steps, and project type.
- Validation gate: pytest, frontend build, Docker Compose config, and Docker build before repository upload.

## Folder Structure

```text
ai-simple-rag-real-estate-operations-escalation-triage-simple-rag-beginner-custom-18/
  backend/
app/
  main.py
  config.py
  db.py
  schemas.py
  data/sample_docs/
  services/
text.py
vector_store.py
llm.py
tools.py
pipeline.py
tests/
  test_project_contract.py
requirements.txt
Dockerfile
  frontend/
src/
  App.jsx
  main.jsx
  styles.css
package.json
Dockerfile
  docker-compose.yml
  .env.example
  README.md
  ARCHITECTURE.md
  SYSTEM_DESIGN.md
  DATABASE_DESIGN.md
  API_DESIGN.md
  DFD_LEVEL_0.md
  DFD_LEVEL_1.md
  DFD_LEVEL_2.md
  ER_DIAGRAM.md
  SEQUENCE_DIAGRAMS.md
  SECURITY.md
  SCALABILITY.md
  TESTING_STRATEGY.md
  INTERVIEW_GUIDE.md
  WHY_THIS_PROJECT.md
  DEPLOYMENT.md
  docs/screenshots/app-preview.svg
```

## Environment Variables

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
USE_CREWAI_RUNTIME=false
PINECONE_API_KEY=
PINECONE_INDEX_NAME=
DATABASE_URL=sqlite:///./app.db
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
VITE_API_URL=http://localhost:8000
```

The app runs without an OpenAI key by using a deterministic local answer model. Add `OPENAI_API_KEY` to use LangChain with OpenAI. For CrewAI projects, set `USE_CREWAI_RUNTIME=true` after installing dependencies to run the live CrewAI Agent/Task/Crew workflow; otherwise the app uses a deterministic CrewAI-shaped fallback.

For Pinecone projects, add `PINECONE_API_KEY` and `PINECONE_INDEX_NAME` to use a live Pinecone index. Without them, the repo still runs using local ChromaDB/local retrieval fallback.

## Installation

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

```bash
cd ../frontend
npm install
```

## Run Backend

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

## Run Frontend

```bash
cd frontend
npm run dev
```

## Run With Docker

```bash
docker compose up --build
```

## Example API Request

```bash
curl -X POST http://localhost:8000/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"question\": \"What is the refund policy?\"}"
```

## Example User Question

```text
What should I do if a customer asks for a refund without an order id?
```

## Expected Output

The API returns:

- `answer`: a grounded answer generated from retrieved context
- `sources`: cited document chunks with similarity scores
- `steps`: planner, retriever, reasoning, tool-call, and final-answer timeline logs
- `project_type`: `Simple RAG`

## How The RAG/Agent Flow Works

User question -> load documents -> split chunks -> embed -> Chroma similarity search -> answer with citations.

## Project Documentation

- [System Design](SYSTEM_DESIGN.md)
- [Architecture](ARCHITECTURE.md)
- [Database Design](DATABASE_DESIGN.md)
- [API Design](API_DESIGN.md)
- [DFD Level 0](DFD_LEVEL_0.md)
- [DFD Level 1](DFD_LEVEL_1.md)
- [DFD Level 2](DFD_LEVEL_2.md)
- [ER Diagram](ER_DIAGRAM.md)
- [Sequence Diagrams](SEQUENCE_DIAGRAMS.md)
- [Deployment](DEPLOYMENT.md)
- [Security](SECURITY.md)
- [Scalability](SCALABILITY.md)
- [Testing Strategy](TESTING_STRATEGY.md)
- [Interview Guide](INTERVIEW_GUIDE.md)

## Project Planner Agent Workflow

User -> React Dashboard -> FastAPI -> Project Planner Agent -> Specialist Agents -> Generated Project -> Auto Testing -> GitHub Repository Creation -> Push Code -> Return GitHub URL

- **Architecture Agent**: Define app boundaries, data flow, runtime stack, and integration points. Outputs: This architecture is chosen for its beginner-friendliness and ease of local setup. The React frontend provides a clear UI. FastAPI is a lightweight and performant web framework. ChromaDB offers a simple, embeddable vector store perfect for local development without needing a separate database server. Ollama enables running open-source LLMs locally, reducing dependency on external APIs and providing a hands-on experience with LLMs. The `all-MiniLM-L6-v2` embedding model is small, fast, and performs well for semantic search tasks on a CPU. This setup demonstrates a complete RAG flow with minimal infrastructure complexity, making it ideal for learning and local development..
- **Backend Agent**: Design FastAPI modules, service contracts, validation, and error handling. Outputs: main.py: FastAPI application entry point, defines routes and orchestrates RAG pipeline.; api/v1/documents.py: Endpoints for document management (upload, list, delete). Handles file parsing and ingestion into ChromaDB.; api/v1/query.py: Endpoint for processing user queries. Orchestrates retrieval from ChromaDB and interaction with the LLM.; services/rag_pipeline.py: Core RAG logic: initializes embedding model, ChromaDB, and LLM client; contains methods for document embedding, retrieval, and LLM query generation.; models/schema.py: Pydantic models for request/response validation (e.g., QueryRequest, QueryResponse, DocumentUploadResponse)..
- **Frontend Agent**: Design React screens, state flow, controls, and user feedback states. Outputs: Document Upload Area: Drag-and-drop or file input for uploading PDF/TXT policy documents.; Uploaded Documents List: Displays names of currently indexed documents.; Chat Interface: Text input for user queries.; Response Display Area: Shows the AI's generated response, clearly indicating if context was retrieved.; Loading Indicators: Visual feedback during document processing and query execution.; Clear Chat Button: Resets the conversation history..
- **Database Agent**: Design persistence models, sample data, indexes, and audit records. Outputs: Run history; Source document metadata; Generated workflow audit records.
- **Testing Agent**: Define contract tests, smoke tests, and generated project validation. Outputs: Unit Tests (Pytest): For individual backend functions (e.g., document parsing, embedding generation, ChromaDB interactions, LLM client calls).; Integration Tests: Test API endpoints (e.g., POST /api/v1/documents/upload, POST /api/v1/query) to ensure backend modules work together correctly.; End-to-End Tests (Playwright/Cypress - optional for beginner): Simulate user flow from document upload to querying and validating AI responses in the UI.; RAG Evaluation: Manual review of query responses against expected outcomes, especially for critical escalation scenarios, to ensure accuracy and relevance of retrieved context..
- **DevOps Agent**: Define environment variables, Docker workflow, and repository packaging. Outputs: Docker-ready project; Environment sample file; GitHub repository upload.
- **Reviewer Agent**: Review the generated plan for completeness, security, and portfolio quality. Outputs: 1. Setup Environment: User installs Docker, Ollama, and project dependencies.; 2. Start Services: User runs `docker compose up` to start backend, frontend, and Ollama.; 3. Access UI: User navigates to `localhost:3000` (or configured frontend port).; 4. Document Ingestion: User uploads relevant policy documents (e.g., PDF of 'Escalation Matrix v3.1', 'Tenant Handbook 2024', 'Vendor Payment Policy').; 5. Indexing: Backend processes documents: parses text, generates embeddings, and stores them in ChromaDB.; 6. User Query: User types a question into the chat interface (e.g., 'What's the process for a major HVAC breakdown?')..

## AI-Customized Domain Workflow

- 1. Setup Environment: User installs Docker, Ollama, and project dependencies.
- 2. Start Services: User runs `docker compose up` to start backend, frontend, and Ollama.
- 3. Access UI: User navigates to `localhost:3000` (or configured frontend port).
- 4. Document Ingestion: User uploads relevant policy documents (e.g., PDF of 'Escalation Matrix v3.1', 'Tenant Handbook 2024', 'Vendor Payment Policy').
- 5. Indexing: Backend processes documents: parses text, generates embeddings, and stores them in ChromaDB.
- 6. User Query: User types a question into the chat interface (e.g., 'What's the process for a major HVAC breakdown?').
- 7. Retrieval: Backend receives query, generates embedding, performs a similarity search in ChromaDB to find top-k relevant document chunks.
- 8. LLM Interaction: Backend constructs a prompt with the user's query and the retrieved document context, sends it to the local Ollama LLM.

## Business Rules

- Maximum document size for upload is 10MB.
- Only PDF and TXT file types are accepted for document ingestion.
- If the RAG system cannot find sufficiently relevant information (similarity score below a threshold) for a user query, the LLM should clearly state that it lacks information on the topic and suggest uploading more relevant documents.
- LLM responses should be concise and actionable, focusing on the 'next steps' or 'who to contact' where applicable, as per the persona's needs.
- Automatically identify and highlight keywords related to 'escalation level' (e.g., Critical, Urgent, Standard) in the LLM's response if inferred from the retrieved context.
- All document processing (embedding generation) should occur asynchronously to not block the UI during uploads.

1. The backend loads sample documents from `backend/app/data/sample_docs`.
2. Documents are split into chunks.
3. Chunks are embedded and stored in ChromaDB when available, with a local fallback for development.
4. User questions are matched against relevant chunks.
5. Agent-specific steps run: planner, retriever, tool call, reasoning, reviewer, or graph nodes.
6. The final answer is returned with source citations and a timeline.

## Testing

```bash
cd backend
pytest
```

## Validation Gates Before GitHub Push

The SaaS validates generated projects before creating and pushing the GitHub repository:

- `pytest`
- `npm install`
- `npm run build`
- `docker compose config`
- `docker compose build`

## Portfolio Proof Files

- `WHY_THIS_PROJECT.md`: explains why this repo satisfies the selected project type.
- `SYSTEM_DESIGN.md`, `ARCHITECTURE.md`, and DFD files: document the design, runtime flow, data movement, and validation strategy.
- `DATABASE_DESIGN.md`, `ER_DIAGRAM.md`, and `API_DESIGN.md`: connect generated code to data and API contracts.
- `SECURITY.md`, `SCALABILITY.md`, and `TESTING_STRATEGY.md`: explain production hardening and quality checks.
- `INTERVIEW_GUIDE.md`: helps students explain the project in interviews.
- `DEPLOYMENT.md`: gives Render, Railway, Vercel, and Docker deployment options.
- `docs/screenshots/app-preview.svg`: generated UI preview image for README/profile use.

## Deployment

See `DEPLOYMENT.md` for Render, Railway, Vercel, and Docker deployment steps.
