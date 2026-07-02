Agentic AI
==========

Purpose and Scope
-----------------
This Responsible AI content for the Agentic AI work group aligns to the CHAI Responsible AI Guide (RAIG) by establishing a Testing and Evaluation (T&E) Framework: a set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of agentic AI solutions.
Teams developing, deploying, or monitoring agentic AI solutions can use CHAI’s T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when browsing or submitting AI solutions on CHAI’s `Public Registry <https://registry.chai.org>`__


Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of agentic AI solutions. As such, these methods/metrics should be tailored to developers and implementers.

* Developer: individual(s) involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)
* Implementer: individual(s) responsible for the procurement, deployment, and/or overall realization of a system or component in accordance with a specified design (derived from IEEE 829 and IEEE 730)

Use Case Description
--------------------
The Agentic AI work group discussed and defined best practice considerations and methods/metrics across a series of use cases. Included below are the initial set:

* **General Healthcare:** Cross-cutting practices that apply to agentic AI across healthcare workflows regardless of the specific application. This category covers agent scoping and architecture, read/write access guardrails and human verification, provenance and audit logging, multi-source data reconciliation, evaluation and benchmarking frameworks, escalation and failure-mode handling, and ongoing monitoring.
* **Clinical Decision Support:** AI agents that assist clinicians by assembling patient context, generating evidence-informed recommendations, and supporting decisions across the encounter lifecycle. This category emphasizes standardized, interoperable transfer of patient context between AI components, stateful orchestration with the EHR, transparent and explainable clinical reasoning, and low-burden mechanisms for capturing clinician feedback. 
* **Voice-enabled Patient Scheduling:** Conversational voice agents that handle inbound and outbound patient scheduling by interpreting natural-language needs, mapping them to the correct visit types, and booking against operational rules. This category focuses on reliable caller identity verification, equitable speech recognition across accents and dialects, clear escalation triggers for sensitive or clinically urgent calls, and ongoing monitoring of accuracy and call outcomes. 
* **Contract Search:** AI agents that retrieve and reason over contract and policy documents to answer user queries. This category stresses configurable guardrails tailored to the deployment context, safeguards to ensure only current and authoritative document versions are used, and user education on the difference between semantic and literal keyword retrieval. 
* **Pre-visit Prep & Summarization:** AI agents that discover, retrieve, and synthesize patient information from across systems ahead of a visit. This category addresses cross-system data discovery, semantic reconciliation of conflicting data with proper temporal anchoring, interval summaries with fine-grained and verifiable citations, and tailoring summary content to the clinician's role and use case. 

**Primary End Users**

* Provider organizations adopting agent technology
* Health system compliance/risk teams 
* Vendors developing agents or agent-based solutions

**In-scope/Out-of-scope**

* In-scope: multi-step tool-using agents; agents with memory or state; EHR-integrated agents; agents that retrieve from clinical or administrative systems; agents that recommend or execute workflow actions; multi-agent orchestration.
* Out-of-scope: static predictive models; passive dashboards; one-shot summarization without tool use; conventional document search; basic chatbots that do not act on external systems.

**Important Note**

* Because an agent plans and executes steps dynamically, a single canonical workflow often cannot be defined. Where a workflow can be fully specified in advance, that reflects a narrower, more monitorable use case. For dynamic workflows, evaluate by auditing the steps in a proposed plan against expert review or a set of acceptable plans, rather than comparing to one canonical path.

