# Generation Notes

Mode: ai

Model: gemini / gemini-2.5-flash

Fallback reason: OpenAI limit reached. Automatically switched to Gemini.

Architecture: Real Estate Policy Assistant

Template path: templates/simple-rag/real-estate-policy-assistant

Short description:

A beginner-friendly Retrieval-Augmented Generation (RAG) project designed to help real estate operations teams quickly triage and understand escalation scenarios based on internal policies and incident reports. Utilizes local document embedding, vector search, and a locally-runnable Large Language Model (LLM) for context-aware responses.

Architecture notes:

- This architecture is chosen for its beginner-friendliness and ease of local setup. The React frontend provides a clear UI. FastAPI is a lightweight and performant web framework. ChromaDB offers a simple, embeddable vector store perfect for local development without needing a separate database server. Ollama enables running open-source LLMs locally, reducing dependency on external APIs and providing a hands-on experience with LLMs. The `all-MiniLM-L6-v2` embedding model is small, fast, and performs well for semantic search tasks on a CPU. This setup demonstrates a complete RAG flow with minimal infrastructure complexity, making it ideal for learning and local development.

Project planner agent workflow:

- Architecture Agent: Define app boundaries, data flow, runtime stack, and integration points. Outputs: This architecture is chosen for its beginner-friendliness and ease of local setup. The React frontend provides a clear UI. FastAPI is a lightweight and performant web framework. ChromaDB offers a simple, embeddable vector store perfect for local development without needing a separate database server. Ollama enables running open-source LLMs locally, reducing dependency on external APIs and providing a hands-on experience with LLMs. The `all-MiniLM-L6-v2` embedding model is small, fast, and performs well for semantic search tasks on a CPU. This setup demonstrates a complete RAG flow with minimal infrastructure complexity, making it ideal for learning and local development.
- Backend Agent: Design FastAPI modules, service contracts, validation, and error handling. Outputs: main.py: FastAPI application entry point, defines routes and orchestrates RAG pipeline.; api/v1/documents.py: Endpoints for document management (upload, list, delete). Handles file parsing and ingestion into ChromaDB.; api/v1/query.py: Endpoint for processing user queries. Orchestrates retrieval from ChromaDB and interaction with the LLM.; services/rag_pipeline.py: Core RAG logic: initializes embedding model, ChromaDB, and LLM client; contains methods for document embedding, retrieval, and LLM query generation.; models/schema.py: Pydantic models for request/response validation (e.g., QueryRequest, QueryResponse, DocumentUploadResponse).
- Frontend Agent: Design React screens, state flow, controls, and user feedback states. Outputs: Document Upload Area: Drag-and-drop or file input for uploading PDF/TXT policy documents.; Uploaded Documents List: Displays names of currently indexed documents.; Chat Interface: Text input for user queries.; Response Display Area: Shows the AI's generated response, clearly indicating if context was retrieved.; Loading Indicators: Visual feedback during document processing and query execution.; Clear Chat Button: Resets the conversation history.
- Database Agent: Design persistence models, sample data, indexes, and audit records. Outputs: Run history; Source document metadata; Generated workflow audit records
- Testing Agent: Define contract tests, smoke tests, and generated project validation. Outputs: Unit Tests (Pytest): For individual backend functions (e.g., document parsing, embedding generation, ChromaDB interactions, LLM client calls).; Integration Tests: Test API endpoints (e.g., POST /api/v1/documents/upload, POST /api/v1/query) to ensure backend modules work together correctly.; End-to-End Tests (Playwright/Cypress - optional for beginner): Simulate user flow from document upload to querying and validating AI responses in the UI.; RAG Evaluation: Manual review of query responses against expected outcomes, especially for critical escalation scenarios, to ensure accuracy and relevance of retrieved context.
- DevOps Agent: Define environment variables, Docker workflow, and repository packaging. Outputs: Docker-ready project; Environment sample file; GitHub repository upload
- Reviewer Agent: Review the generated plan for completeness, security, and portfolio quality. Outputs: 1. Setup Environment: User installs Docker, Ollama, and project dependencies.; 2. Start Services: User runs `docker compose up` to start backend, frontend, and Ollama.; 3. Access UI: User navigates to `localhost:3000` (or configured frontend port).; 4. Document Ingestion: User uploads relevant policy documents (e.g., PDF of 'Escalation Matrix v3.1', 'Tenant Handbook 2024', 'Vendor Payment Policy').; 5. Indexing: Backend processes documents: parses text, generates embeddings, and stores them in ChromaDB.; 6. User Query: User types a question into the chat interface (e.g., 'What's the process for a major HVAC breakdown?').
