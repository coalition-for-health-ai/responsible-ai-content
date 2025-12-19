Testing and Evaluation (T&E) Framework
======================================
Included below is the CHAI General Health Advice Chatbot Work Group's recommended, consensus-defined methods/metrics for the general health advice chatbot use case. Methods/metrics are categorized across Responsible AI Principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Transparency.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **A/B Preference Agreement Rate; Alignment Score with Reference Answers; Open-Forum Response Usefulness Score**

  - Responsible AI Principle: Usefulness
  - Description: Evaluate chatbot response quality using structured A/B testing and open-forum feedback. Compares LLM variants or prompt configurations against pre-labeled reference answers and captures user preferences and trust signals. Also includes open feedback from real users or experts to identify gaps in clarity, accuracy, or tone.
  - Intended Use: This metric can be used to: (1) evaluate competing LLM models or prompts using human-centered metrics like usefulness and clarity, (2) guide instruction tuning and prompt engineering, (3) collect real-world feedback from diverse users post-interaction or in usability sessions, and (4) support ongoing model refinement aligned to end-user comprehension and satisfaction.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: use for tuning and evaluation; share pre-deployment results with clients; Implementer: use for post-pilot refinement or for local validation pre-deployment.
  - Benchmark: >70% A/B Preference Agreement with higher-quality variant; ≥85% Alignment with Reference Answers; actionable feedback collected across diverse user groups
  - Supporting Literature:

    * `A Deep Reinforcement Learning Chatbot <https://arxiv.org/pdf/1801.06700>`__


- **Crash Rate, Error Rate (per session); Failure-to-Progress Rate; Session Abandonment Rate**

  - Responsible AI Principle: Usability
  - Description: Evaluate technical reliability and robustness of the general health advice chatbot by measuring app crashes, malformed responses, repeated user rephrasing without resolution, and session abandonment. Ensures seamless interaction and supports user trust by tracking where conversations break down or fail to progress.
  - Intended Use: These metrics can be used to: (1) identify and debug points of failure in conversation flow or back-end infrastructure, (2) inform iterative improvements to model design, fallback logic, and knowledge base coverage, and (3) monitor post-deployment stability. The metrics can also support implementers in evaluating vendor solutions, flagging regressions, and validating minimum operational requirements.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: use to debug and improve systems; Implementer: use to monitor stability and vendor readiness.
  - Benchmark: <1% of sessions with crashes, malformed responses, or unresolved rephrasing attempts
  - Supporting Literature:

    * `Exploring Large Language Models in Resolving Environment-Related Crash Bugs: Localizing and Repairing <https://arxiv.org/abs/2312.10448>`__


- **C-SAT Score (Mean/Median)**

  - Responsible AI Principle: Usability
  - Description: Capture user satisfaction with chatbot responses through a post-interaction survey using a 1--5 Likert scale. Measures user-perceived quality, clarity, tone, and usefulness of chatbot output, often accompanied by optional free-text feedback.
  - Intended Use: This metric can be used to: (1) assess user sentiment and conversational quality from the layperson's perspective, (2) monitor longitudinal trends in usability and trust, (3) identify specific intents or flows causing user dissatisfaction, and (4) drive response tuning and content updates.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Implementer: captures real-world user satisfaction and supports ongoing quality monitoring.
  - Benchmark: ≥4.2 Mean C-SAT; monitor trends over time for degradation or improvement
  - Supporting Literature:

    * `Understanding Customer Satisfaction Score <https://www.researchgate.net/publication/381401905_Understanding_Customer_Satisfaction_Score>`__


- **Percentage (%) Uptime**

  - Responsible AI Principle: Efficacy
  - Description: Measure the availability and operational continuity of the general health advice chatbot by calculating the percentage of time it remains accessible over defined intervals (e.g., daily, weekly, monthly).
  - Intended Use: This metric can be used to: (1) support service-level agreements (SLAs) and procurement evaluation, (2) power real-time monitoring dashboards and automated alerting tools, (3) drive infrastructure scaling decisions during peak demand periods, and (4) provide post-deployment insights into chatbot accessibility.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Implementer: tracks system availability and supports SLA monitoring after deployment.
  - Benchmark: ≥99.5% uptime over a given evaluation period (e.g., monthly)
  - Supporting Literature:

    * `Comprehensive Framework for Evaluating Conversational AI Chatbots <https://arxiv.org/abs/2502.06105>`__


- **Cache Hit Rate; Intent Mapping Accuracy; Response Time Reduction; LLM Call Reduction Rate**

  - Responsible AI Principle: Efficacy
  - Description: Evaluate the chatbot's ability to generalize across varied user queries by implementing an intent-based caching system that reuses LLM-generated responses for semantically similar queries. This reduces latency and computational load while improving consistency and response time for common health-related intents.
  - Intended Use: These metrics can be used to: (1) reduce redundant LLM calls and lower infrastructure costs, (2) improve latency and user satisfaction for frequently asked general health questions, (3) test the robustness of intent mapping systems across varied linguistic patterns, and (4) monitor semantic consistency in responses across diverse phrasing.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: optimize model efficiency and latency; Implementer: monitor real-world performance and resource use.
  - Benchmark: >60% Cache Hit Rate; Measurable improvement in response time (≥30% reduction); >90% Intent Mapping Accuracy
  - Supporting Literature:

    * `GPT Semantic Cache: Reducing LLM Costs and Latency via Semantic Embedding Caching <https://arxiv.org/html/2411.05276v3>`__


- **Low-Confidence Trigger Rate; Escalation Success Rate**

  - Responsible AI Principle: Efficacy
  - Description: Measure the chatbot's ability to detect and handle low-confidence responses through fallback logic or escalation pathways. When confidence falls below a threshold, the system avoids autonomous replies and either asks clarifying questions or redirects the user to a non-clinical professional.
  - Intended Use: These metrics can be used to: (1) detect and respond to uncertain or incomplete answers during chatbot interactions, (2) configure fallback logic to ask clarifying questions or escalate to human triage agents, (3) log and monitor low-confidence cases to improve future performance, and (4) ensure safety and clarity in health advice, especially when user intent or data is ambiguous.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: refine fallback logic; Implementer: monitor safety and escalation effectiveness post-deployment.
  - Benchmark: <5% Low-Confidence Trigger Rate; >90% Escalation Success Rate
  - Supporting Literature:

    * `Error Correction and Adaptation in Conversational AI: A Review of Techniques and Applications in Chatbots <https://www.mdpi.com/2673-2688/5/2/41>`__


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Toxicity Rate; Bias Detection Rate**

  - Responsible AI Principle: Fairness
  - Description: Measure the integrity and safety of chatbot responses by tracking how often outputs include unfair, biased, or toxic content. Supports safeguards like scoped prompts, prohibited content rules, and post-processing filters to keep the chatbot's domain restricted to general health advice.
  - Intended Use: These metrics can be used to: (1) establish guardrails for acceptable topics and tone, (2) enforce a zero-tolerance policy for harmful content through both proactive and reactive controls, (3) continuously audit conversations for biased or culturally inappropriate framing, and (4) ensure the chatbot remains inclusive, respectful, and safe across diverse demographics and health contexts.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: implement safeguards and filters; Implementer: audit live conversations for safety and inclusivity.
  - Benchmark: <0.01% of conversations with toxic, biased, or unfair content
  - Supporting Literature:

    * `OpenAI Platform - Moderation <https://platform.openai.com/docs/guides/moderation>`__


- **Expected Calibration Error (ECE) - stratified by subgroup**

  - Responsible AI Principle: Fairness
  - Description: Measure how well the model's predicted confidence aligns with actual accuracy, particularly across demographic and linguistic subgroups. Poor calibration can mask bias and disproportionately affect underrepresented users.
  - Intended Use: This metric can be used to: (1) assess whether confidence scores are trustworthy across all users, (2) identify and correct subgroup disparities in model calibration, and (3) evaluate downstream parity using equalized odds and confusion matrix-based subgroup analysis.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: evaluate and improve model confidence calibration and fairness during development.
  - Benchmark: ECE < 5% overall; subgroup ECE parity (≤2% variation across groups)
  - Supporting Literature:

    * `On Calibration of Modern Neural Networks <https://arxiv.org/pdf/1706.04599>`__


- **Intersectional Fairness Score**

  - Responsible AI Principle: Fairness
  - Description: Evaluate consistency in chatbot outcomes across overlapping sociodemographic identities (e.g., race × gender × age). Surfaces inequities that may be hidden when analyzing single-axis metrics.
  - Intended Use: This metric can be used to: (1) detect disparities in chatbot performance across compound subgroups, (2) validate whether model confidence, response quality, and escalation are consistent at intersectional levels, and (3) go beyond traditional fairness metrics to capture systemic inequities
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: detect and mitigate compound subgroup disparities during model development.
  - Benchmark: Intersectional Fairness Score ≥ 0.90 across key subgroups; no subgroup >10% below group average
  - Supporting Literature:

    * `Intersectional Fairness: A Fractal Approach <https://arxiv.org/pdf/2302.12683>`__


- **Bias-Induced Divergence Rate; Group Fairness Gap**

  - Responsible AI Principle: Bias Management: Anti-classification
  - Description: Measure whether chatbot outputs differ when sociodemographic details are included vs. omitted. Evaluates if protected attributes like race, gender, or age influence the quality, tone, or recommendations in responses---despite not being clinically relevant.
  - Intended Use: These metrics can be used to: (1) test whether protected attributes systematically affect chatbot outputs, (2) detect unintended stereotyping or risk exaggeration/minimization, (3) validate prompt robustness to sociodemographic variation, and (4) guide prompt tuning, filtering, or retraining to mitigate biased behavior.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: detect and mitigate bias from protected attributes during prompt and model development.
  - Benchmark: Bias-Induced Divergence Rate <1%; Group Fairness Gap ≤0.2 on 1--5 response quality scale
  - Supporting Literature:

    * `Fairness and Machine Learning: Limitations and Opportunities <https://fairmlbook.org/pdf/fairmlbook.pdf>`__


- **Mean Response Quality Score by Group; Disparity Index**

  - Responsible AI Principle: Bias Management: General Bias
  - Description: Measure differences in chatbot response quality across sociodemographic groups using human-annotated scores. Helps detect population-specific bias and response inconsistency.
  - Intended Use: These metrics can be used to: (1) conduct statistical hypothesis testing of quality gaps across groups, (2) inform re-ranking mechanisms that optimize for fairness and subgroup performance, and (3) validate output consistency in multilingual, culturally diverse, or underserved patient populations. Grounding responses in structured knowledge sources like RAG systems is encouraged to improve equity.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: assess and correct response quality disparities across groups during model development.
  - Benchmark: Disparity Index ≤ 0.5 on 1--5 quality scale; Mean score ≥4.0 across all groups
  - Supporting Literature:

    * `Towards detecting unanticipated bias in Large Language Models <https://arxiv.org/html/2404.02650v1>`__

- **F1 Score (with Precision and Recall) - stratified F1 Score by subgroup**

  - Responsible AI Principle: Bias Management: Parity
  - Description: Evaluate the balance between Precision and Recall in chatbot outputs, especially in intent classification, information retrieval, or triage tagging. When stratified by subgroup, it helps assess parity in system performance across diverse user populations.
  - Intended Use: This metric can be used to: (1) evaluate core classification performance of chatbot components, (2) stratify performance by sociodemographic subgroup to detect disparities, and (3) diagnose precision-recall imbalances that may indicate over- or under-support for certain populations
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: measure and address subgroup performance gaps in classification tasks during development.
  - Benchmark: F1 ≥ 0.85 overall; ≤ 0.05 variation in F1 between subgroups
  - Supporting Literature:

    * `Intent Detection and Slots Prompt in a Closed-Domain Chatbot <https://arxiv.org/abs/1812.10628>`__


Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Unsafe Conversation Rate**

  - Responsible AI Principle: Safety
  - Description: Measure the proportion of chatbot interactions flagged as unsafe due to harmful, misleading, toxic, or inappropriate outputs. Flags may come from automated detection systems or human reviewers. Captures critical risks such as misinformation, inappropriate tone, triage failure, or emotional harm.
  - Intended Use: This metric can be used to: (1) detect content that poses risks to users, especially vulnerable populations, (2) trigger review processes for unsafe interactions, (3) evaluate robustness of content moderation systems, and (4) align chatbot behavior with harm-reduction principles in general health contexts.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer: improve safety filters; Implementer: monitor live interactions for harmful outputs.
  - Benchmark: <0.01% of conversations flagged as unsafe
  - Supporting Literature:

    * `Bot-Adversarial Dialogue for Safe Conversational Agents <https://aclanthology.org/2021.naacl-main.235/>`__


- **Self-Reported Adverse Experience Rate**

  - Responsible AI Principle: Safety
  - Description: Measure how often users report that their interaction with the chatbot resulted in a concerning, distressing, or harmful experience. Captures subjective harms not easily detected by automated tools, especially in sensitive or identity-related contexts.
  - Intended Use: This metric can be used to: (1) capture human-reported issues missed by adversarial detectors, (2) inform redesign of response flows that frequently cause distress, (3) improve trust by offering transparent, anonymous reporting, and (4) prioritize qualitative user feedback for refinement in general health scenarios.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Implementer: capture real-world user-reported harms to guide post-deployment improvements.
  - Benchmark: <1% of users report an adverse experience during a defined timeframe
  - Supporting Literature:

    * `Managerial framework for evaluating AI chatbot integration: Bridging organizational readiness and technological challenges <https://www.sciencedirect.com/science/article/pii/S0007681324000648>`__


Transparency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CHAI recommends all Developer organizations complete a CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__, or similar, for transparency. For additional  best practice guidance and potential metrics related to transparency, see the associated `Best Practice Guide <https://www.chai.org/workgroup/use-case/general-health-advice-ai-chatbot>`__.
