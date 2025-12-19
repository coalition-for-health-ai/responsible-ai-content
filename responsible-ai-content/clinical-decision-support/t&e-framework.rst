Testing and Evaluation (T&E) Framework
======================================
Included below is the CHAI Clinical Decision Support Work Group's recommended, consensus-defined methods/metrics for the AI-enabled clinical decision support use case. Methods/metrics are categorized across Responsible AI Principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Transparency.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Task Completion Time**

  - Responsible AI Principle: Usability
  - Description: Measure how long it takes a user to complete a defined task when interacting with an AI-enabled clinical decision support system. This metric evaluates whether the system's interface, workflow integration, and learning curve enable users to perform tasks efficiently. By tracking efficiency over repeated use, this metric can identify improvements associated with user familiarity, system usability, or interface design.
  - Intended Use: This metric is intended to assess how effectively an AI-enabled CDS system streamlines clinical workflows and whether usability improves as users gain experience. Reductions in task completion time can indicate intuitive design, effective onboarding, and meaningful workflow integration. The metric is applicable across AI systems---including those leveraging LLMs or retrieval-augmented generation---to evaluate user learning curves, interface usability, adoption, and operational efficiency at the point of care.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Efficiency of Clinical Decision Support Systems Improves with Experience <https://pmc.ncbi.nlm.nih.gov/articles/PMC4720692/>`__


- **Evidence Concordance, Citation Accuracy, and Guideline Alignment**

  - Responsible AI Principle: Efficacy
  - Description: Measure how well AI-enabled CDS outputs align with specialty guidelines and reference evidence while ensuring that all cited sources are verifiable and correctly attributed. Evaluates factual alignment, reference traceability, and the percentage of outputs meeting specialty-specific evidence standards.
  - Intended Use: Ensure the clinical validity and trustworthiness of AI-enabled CDS recommendations, confirming they adhere to accepted medical guidelines and evidence hierarchies.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Suggested benchmarks include: ≥ 90% evidence concordance with specialty guidelines, 100% verifiable citations, <5% hallucinations in reference-linked outputs.
  - Supporting Literature:

    * `Use and accuracy of decision support systems using artificial intelligence for tumor diseases: a systematic review and meta-analysis <https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2023.1224347/full>`__


- **Detection Accuracy**

  - Responsible AI Principle: Efficacy
  - Description: Detection Accuracy measures an AI-supported CDS system's ability to correctly identify and classify clinically relevant issues---such as medication-related risks, adverse interactions, contraindications, or other domain-specific safety events---during real-time decision support. This metric typically evaluates precision, recall, and F1-score against expert-verified ground truth, providing a quantitative assessment of the system's clinical reliability.
  - Intended Use: This metric is intended to validate the accuracy and safety performance of AI-generated CDS insights by ensuring that the system reliably detects and flags clinically important risks. It can be used both before and after implementation to assess model performance, inform system tuning, monitor post-deployment reliability, and ensure alignment with clinical expectations. Applicable across AI modalities---including RAG-LLMs---it helps Developers refine models and retrieval pipelines, and helps Implementers verify that the CDS system supports safe and effective medication management or other clinical tasks.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Hybrid AI workflows that combine LLM-based generation with domain-specific retrieval and expert validation typically achieve higher detection accuracy---including improved F1-score and recall for clinically significant events---compared to LLM-only approaches, with minimal loss in precision.
  - Supporting Literature:

    * `Development and Testing of a Novel Large Language Model-Based Clinical Decision Support Systems for Medication Safety in 12 Clinical Specialties <https://arxiv.org/abs/2402.01741>`__


- **Hallucination Rate and Response Time**

  - Responsible AI Principle: Efficacy
  - Description: Measure the factual reliability and latency of CDS responses generated by LLMs. Quantifies hallucination frequency in clinical summaries or recommendations and the average time to produce accurate, guideline-consistent outputs.
  - Intended Use: Confirm operational readiness and efficiency of CDS systems in clinical workflows by ensuring low hallucination rates and acceptable generation latency relative to human review.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Suggested that AI-enabled CDS achieve near-zero hallucination rates, high factual accuracy (organizational dependent), and significantly faster response times than traditional human review---demonstrating strong reliability and operational efficiency in CDS contexts.
  - Supporting Literature:

    * `Medical Hallucination in Foundation Models and Their Impact on Healthcare <https://www.medrxiv.org/content/10.1101/2025.02.28.25323115v1>`__



Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Stratified Subgroup Performance**

  - Responsible AI Principle: Fairness
  - Description: This metric evaluates whether an AI-supported CDS system performs equitably across different demographic or clinically relevant subgroups. Stratified subgroup performance analysis measures error rates, accuracy, or other performance indicators across variables such as age, gender, race/ethnicity, insurance status, or health condition. When paired with Explainable AI (XAI) techniques, the method provides interpretable insights into the root causes of observed disparities, illuminating how model features, retrieval pathways, or training data contribute to uneven performance.
  - Intended Use: This metric is designed to systematically detect, quantify, and explain performance disparities before---and, if monitored, after---deployment. By combining subgroup error analysis with XAI, it enables Developers and Implementers to identify where a CDS system may introduce inequities, understand why these disparities occur, and prioritize corrective interventions such as data augmentation, prompt engineering, retrieval refinement, calibration, or workflow safeguards.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Artificial intelligence-based clinical decision support for liver transplant evaluation and considerations about fairness: A qualitative study <https://pubmed.ncbi.nlm.nih.gov/37695082/>`__
    * `FairLens: Auditing black-box clinical decision support systems <https://www.sciencedirect.com/science/article/pii/S030645732100145X?via%3Dihub>`__


- **Subgroup Accuracy Across Sensitive Attributes**

  - Responsible AI Principle: Fairness
  - Description: This metric assesses whether an AI-enabled CDS system provides equally accurate clinical responses across subgroups defined by sensitive attributes---such as race, gender, age, or other protected characteristics. By evaluating accuracy, linguistic patterns, or response quality across standardized clinical question--answer (QA) scenarios, the metric identifies subgroup-specific disparities that may indicate underlying model bias. It may also incorporate evaluation of how different prompting strategies influence fairness and accuracy.
  - Intended Use: This metric is intended to provide a systematic approach for detecting and minimizing bias in LLM-powered CDS systems. By comparing subgroup accuracy across diverse clinical vignettes and testing alternative prompt designs, it enables Developers and Implementers to identify which models and prompting methods yield more equitable performance.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark. Specific attributes are organization-dependent.
  - Supporting Literature:

    * `Bias patterns in the application of LLMs for clinical decision support: A comprehensive study <https://arxiv.org/pdf/2404.15149>`__


- **Cross-Site Generalizability and Calibration Gap**

  - Responsible AI Principle: Bias Management
  - Description: Measure how much model performance (e.g., accuracy, calibration) changes when tested on a new hospital or population compared to its training data.
  - Intended Use: Identify bias or poor generalizability before deployment, ensuring consistent performance across diverse clinical sites and patient populations.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No universal threshold established. Aim for minimal performance degradation (e.g., ≤5--10% difference in accuracy or calibration slope) when evaluated across sites or demographic groups; Significant deviation should prompt bias investigation and potential retraining.
  - Supporting Literature:

    * `Bias recognition and mitigation strategies in artificial intelligence healthcare applications <https://pubmed.ncbi.nlm.nih.gov/40069303/>`__



Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Multidimensional Human-in-the-Loop Evaluation (Helpfulness, Comprehension, Correctness, Completeness, Clinical Harmfulness)**

  - Responsible AI Principle: Safety
  - Description: A framework for evaluating generative AI in health care. The framework was applied to ClinicalKey AI, a retrieval-augmented generation (RAG) tool, across 426 query-response pairs from real user logs, a benchmark dataset, and SME-created queries. Board-certified clinicians scored responses on helpfulness, query comprehension, factual correctness, completeness, and potential harm, with multi-reviewer consensus and tie-breaker methods.
  - Intended Use: This multidimensional framework is intended to bridge the gap between purely automated evaluation (e.g., BLEU or ROUGE) and human-centered, safety-critical evaluation of medical AI systems. The metrics target the most pressing questions for deploying generative AI in health: Is it helpful to the clinician? Does it correctly understand medical questions? Is the information factually accurate? Does it fully answer the question? Could it harm patients if blindly followed? These dimensions are highly transferable to other AI systems beyond question-answering-such as AI-generated discharge summaries, education materials, or even radiology reports-since any clinical AI output must address (1) usability and perceived helpfulness, (2) correct comprehension of medical context, (3) factual accuracy, (4) comprehensiveness, and (5) potential to cause harm. The rigorous SME-in-the-loop, consensus-driven scoring and reproducible process is particularly valuable for standard-setting in regulated environments where patient safety and clinical validity cannot rely solely on automated metrics. The methodology supports scalable yet clinically grounded oversight of generative AI tools in other specialties, other languages, or even public-facing consumer health applications.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Reproducible generative artificial intelligence evaluation for health care: a clinician-in-the-loop approach <https://academic.oup.com/jamiaopen/article/8/3/ooaf054/8163901>`__


- **Safety-related Overrides**

  - Responsible AI Principle: Safety
  - Description: Proportion (or count) of AI-enabled CDS outputs that are tagged with safety-related override reasons, such as when clinicians reject or modify a recommendation due to potential harm or contraindication.
  - Intended Use: Capture and analyze instances where clinicians identify an AI output as potentially unsafe.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark but recommend tracking rate and trend over time and prioritizing corrective actions that reduce recurrence.
  - Supporting Literature:

    * `CDS Standards and Regulatory Frameworks Workgroup: Approaches to Standardizing Override Reasons for Patient-Centered Clinical Decision Support <https://pubmed.ncbi.nlm.nih.gov/40991757/>`__


- **Stress and Adversarial Scenario Evaluation**

  - Responsible AI Principle: Safety, Reliability
  - Description: Evaluation of the CDS system using challenging or problematic inputs to see how it responds. This includes testing with incomplete or confusing queries, unusual clinical scenarios, and inputs that deliberately try to trigger unsafe or inappropriate recommendations. The focus is on whether the system stays safe, gives appropriate refusals or clarifications, and avoids producing harmful/hallucinatory guidance with incomplete/incorrect/purposefully antagonistic information.
  - Intended Use: Identify safety issues that may not appear during routine testing. This helps determine whether the system can handle difficult or inappropriate inputs in a safe and reliable way, and whether its safeguards work as intended. Results can guide improvements before and after deployment.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * TBD



Transparency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CHAI recommends all Developer organizations complete a CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__, or similar, for transparency. For additional  best practice guidance and potential metrics related to transparency, see the associated `Best Practice Guide <https://www.chai.org/workgroup/use-case/clinical-decision-support>`__.
