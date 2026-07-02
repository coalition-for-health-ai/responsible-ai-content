Testing and Evaluation (T&E) Framework
======================================

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Eligibility Improvement & Enrollment Uptake**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: A centralized patient screening system using structured EHR data, ML-extracted fields, and human abstraction improved eligibility identification for two oncology trials at three sites.
  - Intended Use: Evaluates the real-world operational impact of AI-supported protocol data extraction and criteria mapping tools; directly supports Clinical Trial Coordinators and Oncology Clinicians in validating multi-layered screening pipelines from free-text protocol ingestion to human abstraction verification.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Afghahi A, Frahm F, Kaur M, Lu Y, Kline Cipolla C, Leybovich B, Altomare I, Meropol NJ. A multi-modal EHR-based approach to screen patients for oncology clinical trials. JCO Oncology Practice. 2024;20(10_suppl):411. doi:10.1200/OP.2024.20.10_suppl.411.
  - Benchmark: per the Supporting Literature, >95% exclusion reduction from ML+abstraction over structured alone; 17% of surfaced patients consented in 10 days.

- **Enrollment Rate**

  - Responsible AI Principle: Usability
  - Description: Tracks enrollment change after implementation of ACTES, a real-time automated EHR screening system that uses structured data, NLP, and machine learning to identify potentially eligible patients.
  - Intended Use: Used after deployment to compare enrollment rate, screening time, and usability before and after real-time EHR screening integration; supports clinical research teams in assessing whether automated alerts improve recruitment workflow.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Ni Y, Bermudez M, Kennebeck S, Liddy-Hicks S, Dexheimer JW. A real-time automated patient screening system for clinical trials eligibility in an emergency department: design and evaluation. JMIR Medical Informatics. 2019;7(3):e14185. doi:10.2196/14185.
  - Benchmark: per the Supporting Literature, enrollment increase by 11.1%; screening time decrease by 34%; SUS usability score = 80

- **Patient-Criterion Fairness-Constrained Matching (Accuracy/F1/DP/EO)**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Evaluates FairPM, a patient-trial matching framework that adds patient-criterion level fairness constraints to reduce group disparities while preserving patient-criterion matching performance.
  - Intended Use: Used to assess whether an eligibility-matching model maintains acceptable accuracy and F1 while reducing demographic parity and equalized odds gaps across sensitive patient groups; supports pre-deployment fairness review of patient-criterion matching models.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Chang CY, Yuan J, Ding S, Tan Q, Zhang K, Jiang X, Hu X, Zou N. Towards fair patient-trial matching via patient-criterion level fairness constraint. AMIA Annual Symposium Proceedings. 2023:884-893. PMID:38222427.
  - Benchmark: per the Supporting Literature, reported metrics include accuracy, F1, demographic parity, and equalized odds across patient-criterion and patient-trial matching tasks; FairPM reduced group disparity with limited performance tradeoff.

- **Prognostic Covariate-Adjusted Mixed Models for Repeated Measures (PROCOVA-MMRM)**

  - Responsible AI Principle: Usefulness
  - Description: Uses digital-twin prognostic scores as covariates in mixed models for repeated measures to improve precision in longitudinal clinical trial outcome analyses.
  - Intended Use: Used during trial design or analysis planning to estimate whether prognostic covariate adjustment can reduce endpoint variance and required sample size for studies with repeated-measures outcomes.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Ross JL, Sabbaghi A, Zhuang R, Bertolini D, et al. Enhancing longitudinal clinical trial efficiency with digital twins and prognostic covariate-adjusted mixed models for repeated measures (PROCOVA-MMRM). arXiv. 2024. doi:10.48550/arXiv.2404.17576.
  - Benchmark: per the Supporting Literature, Alzheimer's trial estimated sample size reduction was 7.1% for ADAS-Cog11 and 13.0% for CDR-SB; ALS trial estimated sample size reduction was 15.3%, with lower endpoint treatment-effect variance versus unadjusted MMRM.

- **Relevance Explanation & Evidence Accuracy**

  - Responsible AI Principle: Usability
  - Description: Most of TrialGPT's outputs were rated as understandable and faithful by clinicians; highlighted evidence was consistent with ground truth.
  - Intended Use: Directly measures the faithfulness of natural language justifications and the accuracy of annotated patient record segments; essential for establishing transparency, safety, and user trust among Clinical Trial Coordinators and Oncology Clinicians auditing model outputs.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Jin Q, Wang Z, Floudas CS, Chen F, Gong C, Bracken-Clarke D, et al. Matching patients to clinical trials with large language models. Nature Communications. 2024;15:9074. doi:10.1038/s41467-024-53081-z.
  - Benchmark: per the Supporting Literature, 87.8% correct explanations; F1 = 88.6% for evidence retrieval

- **Screening & Abstraction Efficiency: Abstraction Time, EHR Alerts**

  - Responsible AI Principle: Usability
  - Description: Measures operational feasibility of an EHR-integrated oncology trial screening workflow using automated alerts, prioritization, and abstraction dashboards.
  - Intended Use: Used after deployment to monitor abstraction turnaround time, alert routing, and dashboard workflow integration for clinical trial screening teams.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Afghahi A, Frahm F, Kaur M, Lu Y, Kline Cipolla C, Leybovich B, Altomare I, Meropol NJ. A multi-modal EHR-based approach to screen patients for oncology clinical trials. JCO Oncology Practice. 2024;20(10_suppl):411. doi:10.1200/OP.2024.20.10_suppl.411.
  - Benchmark: per the Supporting Literature, Abstraction median = 13.3 hrs (priority 3.0–9.9 hrs); EHR-integrated alerting system

- **Screening & Abstraction Efficiency: Screening Time Reduction**

  - Responsible AI Principle: Usefulness
  - Description: TrialGPT reduced the time clinicians spent screening trial eligibility by 42.6% in a simulated oncology workflow at NCI.
  - Intended Use: Measures the concrete reduction in active screening workload achieved by Clinical Trial Coordinators and clinical research professionals using LLM assistance; validates the operational efficiency gains of automated protocol parsing and record interpretation (Steps 1–3).
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Jin Q, Wang Z, Floudas CS, Chen F, Gong C, Bracken-Clarke D, et al. Matching patients to clinical trials with large language models. Nature Communications. 2024;15:9074. doi:10.1038/s41467-024-53081-z.
  - Benchmark: per the Supporting Literature, 42.6% avg time reduction across 36 patient-trial cases.

- **Screening Efficiency: Funnel yield, Review time**

  - Responsible AI Principle: Efficacy
  - Description: Reports the incremental yield of each screening stage, structured EHR filtering, machine-learning extraction, and human abstraction, across large oncology patient cohorts.
  - Intended Use: Used to compare structured-only screening against ML-assisted and abstraction-assisted workflows, allowing teams to quantify how each stage changes exclusion rate, final eligibility yield, and review time.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer
  - Supporting Literature: Afghahi A, Frahm F, Kaur M, Lu Y, Kline Cipolla C, Leybovich B, Altomare I, Meropol NJ. A multi-modal EHR-based approach to screen patients for oncology clinical trials. JCO Oncology Practice. 2024;20(10_suppl):411. doi:10.1200/OP.2024.20.10_suppl.411.
  - Benchmark: per the Supporting Literature, structured exclusions: ~99%; final eligibility yield: 3.0% / 4.0%; 13.3 hr median

- **Sensitivity/Specificity (with Probability Calibration)**

  - Responsible AI Principle: Efficacy
  - Description: Quantifies how well a trial-matching/eligibility classifier correctly identifies eligible (sensitivity/recall) and excludes ineligible (specificity) patient-trial pairs. Reported both pre-deployment (model validation) and post-deployment (live screening). Include probability calibration (isotonic/Platt) so thresholded decisions reflect true risks and maintain stable sensitivity/specificity across cohorts and sites. (Sensitivity = recall of positive class; specificity = recall of negative class).
  - Intended Use: Benchmarks and monitors the semantic classification accuracy of LLM contextual reasoning over patient-criterion pairs; ensures the system minimizes missed opportunities for oncology trials (high sensitivity) while preventing wasted manual chart review by Clinical Trial Coordinators (high specificity).
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Verlingue L, Boyer C, Olgiati L, Brutti Mairesse C, Morel D, Blay JY. Artificial intelligence in oncology: ensuring safe and effective integration of language models in clinical practice. The Lancet Regional Health - Europe. 2024;46:101064. doi:10.1016/j.lanepe.2024.101064; Chow R, Ruele B, Bessa N, et al. Use of artificial intelligence for cancer clinical trial enrollment. JNCI Cancer Spectrum. 2023;7(2):pkad015. doi:10.1093/jncics/pkad015; Gueguen L, Olgiati L, Brutti-Mairesse C, Sans A, Le Texier V, et al. A prospective pragmatic evaluation of automatic trial matching tools in a molecular tumor board. npj Precision Oncology. 2025;9:28. doi:10.1038/s41698-025-00806-y; Wiess C, Kunz PL, Gong G. Automated patient pre-screening using a clinical trials patient matching algorithm. Poster presented at: Association of American Cancer Institutes Clinical Research Innovation Meeting; 2023.
  - Benchmark: per the Supporting Literature, meta-analysis (oncology, auto-matching): pooled sensitivity ≈ 90.5%, specificity ≈ 99.3% (retrospective); prospective/pragmatic eval (4 tools, 3,800 patients): mean sensitivity ≈ 0.32 (illustrates real-world degradation vs. retrospective results; motivates calibration/operations monitoring)

- **System Explainability Scale (SES)**

  - Responsible AI Principle: Usability
  - Description: A 13-item clinician questionnaire measuring understandability, trust, and usability of an explainable AI clinical decision-support prototype.
  - Intended Use: Used to evaluate whether clinicians find an AI tool's explanations understandable, trustworthy, and usable before broader clinical workflow integration.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Kibria MG, Kucirka L, Mostafa J. Assessing AI explainability: a usability study using a novel framework involving clinicians. In: 2025 IEEE 13th International Conference on Healthcare Informatics (ICHI). 2025:553-564. doi:10.1109/ICHI64645.2025.00069.
  - Benchmark: per the Supporting Literature, clinician scores: Usability = 4.71, Trust = 4.53, Understandability = 4.51 (out of 5); SES reliability: Cronbach’s alpha of 0.84; Spearman’s rho of 0.81.

- **Trial Matching & Ranking Evaluation: Accuracy (NDCG@10, AUROC, Accuracy)**

  - Responsible AI Principle: Efficacy
  - Description: TrialGPT outperformed baselines in trial ranking and eligibility prediction.
  - Intended Use: Validates the LLM's capacity to perform complex contextual reasoning and mirror expert clinical judgment across semantic classification tasks; helps Implementers ensure that aggregated criteria-level decisions yield highly accurate, transparent trial choices for clinical review.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Jin Q, Wang Z, Floudas CS, Chen F, Gong C, Bracken-Clarke D, et al. Matching patients to clinical trials with large language models. Nature Communications. 2024;15:9074. doi:10.1038/s41467-024-53081-z.
  - Benchmark: per the Supporting Literature, Accuracy = 87.3% (expert range of 88.7–90.0%); AUROC = 0.7979 (vs. baseline of 0.6176)

- **Trial Matching & Ranking Evaluation: Match Accuracy**

  - Responsible AI Principle: Usefulness
  - Description: Measures the accuracy of identifying eligible patients for trials using 8 structured EHR variables (e.g., age, cancer type, stage).
  - Intended Use: Evaluates the baseline performance of mapping structured patient variables to extracted trial protocol criteria; helps informatics teams and related roles establish a database baseline for patient-trial semantic matching before scaling to complex, unstructured text interpretation.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Shriver SP, Arafat W, Potteiger C, Butler DL, Beg MS, Hullings M, et al. Feasibility of institution-agnostic, EHR-integrated regional clinical trial matching. Cancer. 2024;130(1):60-67. doi:10.1002/cncr.35022.
  - Benchmark: per the Supporting Literature, 45.7% of returned trials were valid matches; 91% increase in match rate when expanding radius to 20 miles.

- **Trial Matching & Ranking Evaluation: Matching Accuracy & Ranking Quality**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: Prospectively evaluates four automatic trial-matching tools in a molecular tumor board setting using precision, sensitivity, AP@3, and NDCG@3 against expert review.
  - Intended Use: Used to assess real-world matching accuracy and ranking quality of automatic trial-matching tools before clinical adoption; helps teams set human-review thresholds and identify tools that may over-solicit or miss eligible patients.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Gueguen L, Olgiati L, Brutti-Mairesse C, Sans A, Le Texier V, et al. A prospective pragmatic evaluation of automatic trial matching tools in a molecular tumor board. npj Precision Oncology. 2025;9:28. doi:10.1038/s41698-025-00806-y.
  - Benchmark: per the Supporting Literature, mean precision = 0.33, mean sensitivity = 0.32, AP@3 = 0.45, and NDCG@3 = 0.34 across the four evaluated trial-matching tools; Klineo achieved mean precision = 0.52 and sensitivity = 0.50.

- **Trial Matching & Ranking Evaluation: Matching Concordance & Speed**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: Evaluated a rule-based NLP tool for matching de-identified oncology patients to trials, comparing automated output to manual review and measuring processing speed.
  - Intended Use: Evaluates the system's runtime scalability and alignment with expert decisions during text extraction and semantic matching; validates the fidelity of the LLM's criteria-level eligibility annotations against a manual baseline while tracking processing speeds to resolve screening cost bottlenecks.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Beattie J, Neufeld S, Yang D, et al. Utilizing large language models for enhanced clinical trial matching: a study on automation in patient screening. Cureus. 2024;16(5):e60044. doi:10.7759/cureus.60044.
  - Benchmark: per the Supporting Literature, 97.9% concordance; 0.04s median match time; zero false positives

- **Generated Narrative Quality (PDSQI-9)**

  - Responsible AI Principle: Usefulness, Usability
  - Description: The Provider Documentation Summarization Quality Instrument (PDSQI-9) is a validated instrument that scores AI-generated clinical summaries across nine attributes (accuracy / freedom from hallucination, thoroughness, usefulness, organization, comprehensibility, succinctness, synthesis across sources, internal consistency, and attribution/citation), each on a Likert scale. It is applied to the system's free-text narrative outputs (per-criterion eligibility rationale, clinical reasoning artifacts, audience-appropriate summary reports), not to the underlying match/no-match classification, which is evaluated separately (sensitivity/specificity, NDCG, calibration).
  - Intended Use: Gives Developers and Implementers a validated measure of the quality of generated text surfaced to Clinicians, Clinical Trial Coordinators, and patients. Serves two roles: (1) a validation-grade quality gate at go-live, and (2) the periodic human-calibration reference for any automated (LLM-based) narrative scoring used in high-throughput monitoring.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: https://pubmed.ncbi.nlm.nih.gov/40323321/
  - Benchmark: per the Supporitng Literature, PDSQI-9 was validated on clinical note / discharge summarization, not on trial-eligibility rationale or patient-facing trial summaries. Reported source-study scores and inter-rater reliability are observed values in that context and should be re-baselined locally.


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **AEq (Accessibility Equity)**

  - Responsible AI Principle: Bias Management
  - Description: Measures ease-of-learning parity across demographic groups by comparing model performance at low sample sizes, using learning-curve gaps as a bias-detection signal.
  - Intended Use: Used during dataset and model validation to identify whether underrepresented groups require more data or mitigation before an AI model is deployed in a healthcare workflow.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Gulamali FF, Sawant AS, Liharska L, Horowitz CR, Chan L, Kovatch PH, et al. An AI-guided data centric strategy to detect and mitigate biases in healthcare datasets. arXiv. 2023. doi:10.48550/arXiv.2311.03425.
  - Benchmark: per the Supporting Literature, Chest X-rays: AEq gap between White and Black patient groups reduced from 0.25 to 0.05 after mitigation.

- **Fairness via Equalized Odds**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Proposes FairPM, a deep learning model with a task-specific fairness constraint to minimize predictive inequities at both criterion-level and trial-level matching tasks.
  - Intended Use: Ensures that LLM semantic classification and contextual reasoning remain equitable across sensitive patient demographic groups; provides Implementers with a mechanism to build fairness monitoring into dashboards, mitigating systemic selection bias in automated eligibility evaluations.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Chang CY, Yuan J, Ding S, Tan Q, Zhang K, Jiang X, Hu X, Zou N. Towards fair patient-trial matching via patient-criterion level fairness constraint. AMIA Annual Symposium Proceedings. 2023:884-893. PMID:38222427.
  - Benchmark: per the Supporting Literature, FairPM achieved significantly lower disparity (demographic parity and equalized odds) with minimal performance drop: Patient-criterion: Accuracy ≈ 0.913, F1 ≈ 0.936 (vs baseline 0.959/0.970); Patient-trial: Accuracy ≈ 0.801–0.833, F1 ≈ 0.889–0.909 with DP ≈ 0.008–0.009, EO ≈ 0.008–0.009

- **Patient-Trial Fairness Gap (Demographic Parity/Equalized Odds)**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Measures whether fairness-constrained patient-trial matching reduces demographic parity and equalized odds gaps across sensitive groups while preserving trial-level matching accuracy and F1.
  - Intended Use: Used after model validation to monitor subgroup disparity in patient-trial recommendations and determine whether a fairness-constrained matching approach reduces biased eligibility predictions.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Chang CY, Yuan J, Ding S, Tan Q, Zhang K, Jiang X, Hu X, Zou N. Towards fair patient-trial matching via patient-criterion level fairness constraint. AMIA Annual Symposium Proceedings. 2023:884-893. PMID:38222427.
  - Benchmark: per the Supporting Literature, FairPM reported reduced demographic parity and equalized odds gaps on patient-trial matching while maintaining trial-level accuracy and F1 within the reported performance range.

- **Representativeness Ratio**

  - Responsible AI Principle: Fairness
  - Description: Percentage of trial participants from target underrepresented groups (e.g., rural residents, racial/ethnic minorities) compared to their proportion in the disease’s affected population.
  - Intended Use: Monitors the real-world downstream impact of the AI-supported screening tool; ensures that automated protocol criteria mapping and patient interpretation surface a diverse cohort of eligible patients matching the broader disease burden demographics.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Cotliar J, Cummins G, Beg S, Kutnik K, Lu Y, Xu C, et al. Decentralized trial recruitment methods to facilitate broad coverage across urban and rural counties for a blood-based test in early colorectal cancer detection. Journal of Clinical Oncology. 2024;42(16_suppl):1607. doi:10.1200/JCO.2024.42.16_suppl.1607.
  - Benchmark: per the Supporting Literature, Direct-to-Participant recruitment: 27.8% rural vs. site-based: 13.5% rural; rural Direct-to-Participant participants: 12.5% Black vs. 9.6% site-based.

Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

- **Deployment & Structured Output Capability (via GPT-OSS)**

  - Responsible AI Principle: Reliability
  - Description: Evaluates whether an open-weight model supports structured outputs, function calling, and self-hosted deployment patterns needed for downstream integration.
  - Intended Use: Used as an infrastructure-readiness check before selecting a model for clinical trial matching workflows; separates deployment capability from downstream clinical validation, which must be measured with task-specific safety and accuracy metrics.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: OpenAI. Introducing gpt-oss. OpenAI. Published August 5, 2025.
  - Benchmark: Infrastructure capability benchmark; per the Supporting Literature, gpt-oss supports structured outputs and function calling for developer workflows.

- **Failure Mode Analysis (Qualitative Adverse Event & Bias Review)**

  - Responsible AI Principle: Safety / Reliability
  - Description: This commentary evaluates real-world use cases of LLMs in oncology, including trial matching, prognostic tools, and adverse event detection. It highlights major gaps in data provenance, model transparency, hallucination, and ethical use.
  - Intended Use: Assists Developers and Implementers in conducting safety audits of LLM contextual reasoning; systematically identifies safety gaps such as hallucinated exclusions or discrepancies in clinical notes, ensuring rigorous risk mitigation before tools reach live oncology workflows.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Corti C, Celi LA. Can we ensure a safe and effective integration of language models in oncology? The Lancet Regional Health - Europe. 2024;46:101081. doi:10.1016/j.lanepe.2024.101081.
  - Benchmark: Qualitative framework; no quantitative benchmark reported in the Supporting Literature

- **Failure Mode Taxonomy & Mitigation Strategies**

  - Responsible AI Principle: Safety / Reliability
  - Description: Thorough review of LLM-specific issues and broader AI reliability concerns in clinical contexts, offering a structured approach to evaluating risks across training, inference, and deployment stages.
  - Intended Use: Provides Developers and Implementers a structured taxonomy to stress-test LLMs against specific deployment failure modes (e.g., hallucinated exclusions, ambiguous criteria interpretation, or clinical notes data drift); enforces layered validation and clinician-in-the-loop oversight protocols.
  - Lifecycle Phase: Pre- and Post-deployment
  - Supporting Literature: Wang X, Zhang NX, He H, Nguyen T, Yu KH, Deng H, et al. Safety challenges of AI in medicine in the era of large language models. arXiv. 2024. doi:10.48550/arXiv.2409.18968.
  - Benchmark: Qualitative framework; no quantitative benchmark reported in the Supporting Literature

- **Mean Time Between Failures (MTBF) + Failure Rate Framework**

  - Responsible AI Principle: Reliability
  - Description: Applies reliability engineering concepts, including Mean Time Between Failures, failure rate, resilience, and human-factor analysis, to assess trustworthy AI system operation.
  - Intended Use: Used after deployment to define log-based reliability monitoring for AI screening pipelines, including incident frequency, recovery time, failover planning, and human escalation procedures.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Mishra S, Rao A, Krishnan R, Ayyub B, Aria A, Zio E. Reliability, resilience and human factors engineering for trustworthy AI systems. arXiv. 2024. doi:10.48550/arXiv.2411.08981.
  - Benchmark: Deployment-specific metric; compute MTBF as total uptime divided by number of failures and failure rate as failures per operating time using production system logs.

- **Observed Detection Rate per 1,000**

  - Responsible AI Principle: Safety / Reliability
  - Description: In a nationwide AI-supported mammography screening implementation, detection rate per 1,000 screened measured population-level diagnostic yield compared with a control screening workflow.
  - Intended Use: Used as a post-deployment yield-monitoring template for high-volume AI screening systems; for clinical trial screening, teams can analogously track confirmed eligible candidates per 1,000 screened by site, subgroup, or time period.
  - Lifecycle Phase: Post-deployment
  - Supporting Literature: Eisemann N, Bunk S, Mukama T, Baltus H, Elsner SA, Gomille T, et al. Nationwide real-world implementation of AI for cancer detection in population-based mammography screening. Nature Medicine. 2025;31:917-924. doi:10.1038/s41591-024-03408-6.
  - Benchmark: per the Supporting Literature, Ductal Carcinoma in Situ (DCIS): 1.4 vs 0.8 per 1,000; Invasive: 5.2 vs 4.8 per 1,000 (AI vs baseline)

- **Predictive Reliability**

  - Responsible AI Principle: Reliability
  - Description: Measures pointwise reliability of ML predictions by combining out-of-distribution detection through autoencoder reconstruction error with local performance estimates from similar samples.
  - Intended Use: Used to decide whether an individual clinical AI prediction should be accepted, rejected, or routed to human review; for trial matching, reliability thresholds should be validated on patient-trial data before deployment.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Peracchio L, Nicora G, Parimbelli E, Buonocore TM, Bergamaschi R, Tavazzi E, Dagliati A, Bellazzi R. Evaluation of predictive reliability to foster trust in artificial intelligence: a case study in multiple sclerosis. arXiv. 2024. doi:10.48550/arXiv.2402.17554.
  - Benchmark: per the Supporting Literature, Simulation: AUC 0.87 vs 0.71 (reliable vs unreliable cases); Real-world MS dataset: predictive reliability successfully separated low- vs high-confidence predictions (validated in relAI package).

- **QUEST Human Evaluation Framework: 5 scoring domains – Quality, Understanding & Reasoning, Expression, Safety, Trust**

  - Responsible AI Principle: Safety / Reliability
  - Description: This scoping review of 142 studies found inconsistent human evaluation practices in healthcare LLMs and proposed QUEST as a structured protocol for clinician or domain-expert evaluation.
  - Intended Use: Guides Developers and Implementers in designing human evaluation forms for healthcare LLM outputs, including quality, reasoning, expression, safety, and trust ratings for trial-matching explanations or eligibility summaries.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Tam TYC, Sivarajkumar S, Kapoor S, Stolyar AV, Polanska K, McCarthy KR, et al. A framework for human evaluation of large language models in healthcare derived from literature review. npj Digital Medicine. 2024;7:258. doi:10.1038/s41746-024-01258-7.
  - Benchmark: Qualitative framework; no quantitative benchmark reported in the Supporting Literature

- **Recall@3 (Human-in-the-Loop)**

  - Responsible AI Principle: Safety
  - Description: Percentage of cases where the correct clinical trial appears within the top three AI-ranked suggestions after clinician refinement.
  - Intended Use: Measures the workflow reliability of the automated screening system during pilot deployment; ensures that the aggregated trial rankings successfully surface appropriate protocols within the top suggestions to minimize missed enrollment opportunities for clinicians.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Wong C, Zhang S, Gu Y, Moung C, Abel J, Usuyama N, Weerasinghe R, Piening B, Naumann T, Bifulco C, Poon H. Scaling clinical trial matching using large language models: a case study in oncology. Proceedings of the 8th Machine Learning for Healthcare Conference. PMLR. 2023;219:846-862.
  - Benchmark: Recall@3 (Human-in-the-Loop, HITL): per the Supporting Literature, 67.3%; Recall@1 (HITL): 55.4%; Recall@5 (HITL): 77.9%.

Business and Financial
~~~~~~~~~~~~~~~~~~~~~~

- **AI-Assisted Data Cleaning Cost Savings**

  - Responsible AI Principle: Financial
  - Description: In a 2025 preprint economic analysis of a representative Phase III oncology trial with about 1,100 patients over about 4 years, AI-assisted data cleaning reduced estimated operational costs, mainly through faster database lock, improved medical review efficiency, and reduced query-management burden.
  - Intended Use: Quantifies the financial and operational impact of AI-assisted data validation workflows for clinical data management teams; supports business-case development for data cleaning automation after deployment.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Purri M, Patel A, Deurrell E. Leveraging AI to accelerate medical data cleaning: a comparative study of AI-assisted vs. traditional methods. arXiv. 2025. doi:10.48550/arXiv.2508.05519.

- **AI-Assisted Prescreening Cost per Patient-Trial Pair**

  - Responsible AI Principle: Financial
  - Description: In an MSK-MATCH preprint, an AI-assisted breast cancer trial eligibility workflow reduced manual review time for triaged cases from 20 minutes to 43 seconds and reported an average cost of $0.96 per patient-trial pair.
  - Intended Use: Benchmarks the unit operational cost of AI-assisted eligibility prescreening for patient-trial pairs; helps Implementers estimate screening workload, human-review savings, and deployment costs for similar oncology trial workflows.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Rosenthal JT, Hahesy E, Chalise S, Zhu M, Sabuncu MR, Braunstein LZ, Li A. AI-assisted workflow enables rapid, high-fidelity breast cancer clinical trial eligibility prescreening. arXiv. 2025. doi:10.48550/arXiv.2511.05696.

- **Database Lock Timeline and Data Cleaning Cost Reduction**

  - Responsible AI Principle: Financial
  - Description: Measures timeline and cost impacts of AI-assisted clinical data cleaning, including faster database lock, improved medical review efficiency, and reduced query-management burden in a representative Phase III oncology trial model.
  - Intended Use: Used by clinical operations and data-management teams to estimate whether AI-assisted data cleaning reduces database-lock delay, manual review workload, and query-management costs after deployment.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Purri M, Patel A, Deurrell E. Leveraging AI to accelerate medical data cleaning: a comparative study of AI-assisted vs. traditional methods. arXiv. 2025. doi:10.48550/arXiv.2508.05519.

- **Screening Labor Cost Avoidance: Ineligible Chart Review Reduction**

  - Responsible AI Principle: Financial
  - Description: In EHR-based trial recruitment, an ensemble ML screen using structured billing codes plus NLP-extracted note concepts reduced the number of ineligible patients sent to manual chart review by 40.5% at a tertiary care center and 57.0% at a community hospital, while maintaining eligibility capture (unlike a rule-based filter that reduced reviews more but excluded 22% to 27% of eligible patients).
  - Intended Use: Quantifies direct operational labor savings achieved by filtering out clearly incompatible candidates during initial criteria structuring and mapping; justifies the financial ROI of deploying the LLM solution to minimize non-productive manual chart review for Clinical Trial Coordinators.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Cai T, Cai F, Dahal KP, Cremone G, Lam E, Golnik C, et al. Improving the efficiency of clinical trial recruitment using an ensemble machine learning to assist with eligibility screening. ACR Open Rheumatology. 2021;3(9):593-600. doi:10.1002/acr2.11289.


Energy and Resources
~~~~~~~~~~~~~~~~~~~~~~

- **Energy Consumption Index**

  - Responsible AI Principle: Energy
  - Description: Quantifies deep learning energy use by combining direct hardware measurements with software estimates from CarbonTracker and CodeCarbon across model architectures and GPUs.
  - Intended Use: Used by Developers and Implementers to compare model-training or evaluation jobs on energy per unit of performance, helping select more resource-efficient configurations before scaling AI workloads.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Aquino-Britez S, Garcia-Sanchez P, Ortiz A, Aquino-Britez D. Towards an energy consumption index for deep learning models: a comparative analysis of architectures, GPUs, and measurement tools. Sensors. 2025;25(3):846. doi:10.3390/s25030846.
  - Benchmark: per the Supporting Literature, CodeCarbon-estimated training energy on TITAN Xp was approximately ResNet18 = 0.1155 kWh and EfficientNet-B3 = 0.1160 kWh.
