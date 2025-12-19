Testing and Evaluation (T&E) Framework
======================================
Included below is the CHAI EHR Information Retrieval Work Group's recommended, consensus-defined methods/metrics for the AI-enabled EHR information retrieval use case. Methods/metrics are categorized across Responsible AI Principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Transparency.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Accuracy -- Document Extraction**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: Measure how effectively NLP or LLM-based pipelines extract key structured fields (e.g., medications, dosage, frequency, and lab results) from raw, unstructured clinical text prior to FHIR or OMOP normalization. Evaluates field-level correctness, recall of relevant entities, and the model's ability to capture complete medication or laboratory information across diverse patient notes.
  - Intended Use: Validate the reliability of upstream data capture before standardization, ensuring the extracted information feeding downstream decision support, analytics, and cohort discovery systems is accurate, complete, and clinically meaningful. High extraction accuracy is a prerequisite for successful mapping and model trust.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: No specific benchmark; Suggest using metrics (1) AUROC, (2) F1, and/or (3) Document Accuracy to calculate accuracy; Document Accuracy = (# of documents correctly extracted) / (# of documents in test set)
  - Supporting Literature:

    * `Deep learning-based NLP data pipeline for EHR-scanned document information extraction <https://pubmed.ncbi.nlm.nih.gov/35702624/>`__
  - Additional Notes: To enhance data quality terminology, apply the framework: `A Harmonized Data Quality Assessment Terminology and Framework for the Secondary Use of Electronic Health Record Data <https://pmc.ncbi.nlm.nih.gov/articles/PMC5051581/>`__. Specifically, this metric could be specified as assessing Value Conformance (*do extracted fields match expected formats?*) and Computational Conformance (*do derived values match specifications?*) with verification against local metadata and validation against external standards as distinct test types.


- **Accuracy -- Data Mapping**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: Measure how effectively an AI-enabled system---such as an NLP pipeline, LLM, or hybrid EHR information retrieval workflow---converts extracted clinical entities into standardized representations aligned with canonical healthcare data models (e.g., FHIR, OMOP). The metric evaluates precision, recall, F1-score, and completeness across key structured elements (e.g., medication coding, dosage timing, laboratory value formats) to ensure that transformed data reflects the original clinical meaning and is interoperable across downstream systems.
  - Intended Use: This metric is intended to validate the interoperability, consistency, and reliability of structured data produced by AI-enabled EHR retrieval and processing systems. Accurate mapping into FHIR or OMOP is foundational for safe and meaningful use in downstream applications such as clinical decision support (CDS), population health analytics, cohort discovery, patient summarization, and automated phenotyping. By ensuring that raw clinical data---especially unstructured text---is correctly normalized and standardized prior to use, this metric helps Developers confirm that the system supports accurate inference and minimizes data quality risks.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: Data mapping accuracy typically varies across structured data elements, with high performance on simpler elements (e.g., coded medication fields) and lower performance on more complex temporal or contextual attributes (e.g., dosage timing, medication form). Published results show F1-scores ranging widely (e.g., ~0.71--0.99), underscoring the need for targeted model tuning and validation for clinically complex FHIR/OMOP fields.
  - Supporting Literature:

    * `Integrating Structured and Unstructured EHR Data Using an FHIR-based Type System: A Case Study with Medication Data <https://pubmed.ncbi.nlm.nih.gov/29888045/>`__
  - Additional Notes: To enhance data quality terminology, apply the framework: `A Harmonized Data Quality Assessment Terminology and Framework for the Secondary Use of Electronic Health Record Data <https://pmc.ncbi.nlm.nih.gov/articles/PMC5051581/>`__. Specifically, this metric aligns with Relational Conformance (*foreign key relationships to terminology standards*) and Atemporal Plausibility (*believability of mapped values*). The cited framework provides operational definitions for each.


- **Deterministic Reproducibility of LLM Inference**

  - Responsible AI Principle: Efficacy
  - Description: Evaluate the degree to which an EHR-integrated LLM produces consistent outputs when given identical inputs across runs, hardware, or parallelization settings. This metric ensures that clinicians, auditors, and regulators can rely on stable, reproducible outputs for the same patient record or query. Variability in inference undermines trust, complicates evaluation, and increases clinical risk.
  - Intended Use: This metric benchmarks the reliability and efficacy of LLM-based EHR tools, enabling validation of downstream tasks (e.g., summarization of patient notes, guideline-based recommendations, clinical decision support). High reproducibility strengthens model efficacy by ensuring that model evaluations remain valid across time and infrastructure.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Suggested benchmark (per cited study): Output stability >99% exact-match rate across 100 repeated inference runs with fixed seeds and identical input prompts; semantic variability <1% using embedding-based similarity metrics (cosine > 0.99).
  - Supporting Literature:

    * `Defeating Nondeterminism in LLM Inference <https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/>`__



Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Demographic Parity Ratio + Equality of Opportunity Difference**

  - Responsible AI Principle: Fairness
  - Description: These metrics evaluate whether an AI-enabled system that learns EHR-based representations---such as embeddings used for patient summarization, retrieval, clustering, cohort discovery, or predictive triage---performs equitably across demographic subgroups.

    * Demographic Parity Ratio measures whether different demographic groups (e.g., race, gender, age, ethnicity, insurance status) experience similar rates of positive predictions or classifications.
    * Equality of Opportunity Difference measures subgroup differences in false negative rates, ensuring that one group is not disproportionately overlooked or under-identified for clinically important signals.
  - Intended Use: These metrics are intended to detect, quantify, and mitigate bias in EHR-based representation learning before deployment. Because embeddings often feed downstream tasks---such as clinical summarization, retrieval, risk scoring, phenotyping, cohort selection, or decision-support---bias at the representation level can propagate through an entire system. Applying demographic parity and equality of opportunity measures enables Developers and Implementers to identify performance disparities early, evaluate the fairness of learned representations, and guide corrective actions such as data balancing, re-weighting, retrieval adjustments, prompt engineering, or subgroup-specific calibration.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Fair Patient Model: Mitigating Bias in the Patient Representation Learned from the Electronic Health Records <https://arxiv.org/pdf/2306.03179>`__


- **Structural Missingness Disparity Assessment**

  - Responsible AI Principle: Bias Management
  - Description: Structural Missingness Disparity Assessment evaluates whether patterns of missing or sparsely collected clinical data---such as vital sign frequency, laboratory ordering patterns, documentation gaps, or sparse measurement timing---vary systematically across demographic subgroups. These disparities can reflect structural inequities in healthcare delivery (e.g., who gets monitored more often) and can encode bias into EHR-derived AI systems.

    * The metric quantifies (1) measurement frequency disparities across sensitive attributes (2) missingness patterns and temporal sparsity, (3) predictive bias signals, such as the extent to which missingness patterns alone (without clinical values) can predict outcomes.
    * The metric reveals whether the data collection process itself introduces structural bias before any modeling occurs.
  - Intended Use: This metric is used to identify demographic disparities in data collection---such as unequal measurement frequency or missingness---early in the AI pipeline, preventing structural bias from propagating into model training and downstream predictions.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: Supporting literature demonstrates that demographic subgroups often show large disparities in measurement frequency (e.g., vital sign monitoring), and that missingness patterns alone can significantly predict outcomes (e.g., mortality AUC ≈ 0.76 in ICU populations).
  - Supporting Literature:

    * `Implicit bias in ICU electronic health record data: measurement frequencies and missing data rates of clinical variables <https://link.springer.com/article/10.1186/s12911-025-03058-9>`__
  - Additional Notes: To enhance data quality terminology, apply the framework: `A Harmonized Data Quality Assessment Terminology and Framework for the Secondary Use of Electronic Health Record Data <https://pmc.ncbi.nlm.nih.gov/articles/PMC5051581/>`__. Specifically, this metric maps to the framework's Completeness category.



Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Incidence of Reporting Errors Before and After Standardization**

  - Responsible AI Principle: Safety
  - Description: This metric measures the change in EHR data reporting errors before and after applying a structured standardization process---such as harmonizing data definitions, implementing validation rules, applying automated error detection, and correcting inconsistencies. By quantifying reductions in extraction or reporting errors, the metric evaluates whether the standardization pipeline improves the accuracy and reliability of EHR data used for quality measurement and clinical decision support.
  - Intended Use: This metric is used to confirm that implementing a standardized EHR data extraction and validation process reduces reporting errors, thereby improving the safety and reliability of data used in downstream analytics and decision support.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Evaluating the Reliability of EHR-Generated Clinical Outcomes Reports: A Case Study <https://pubmed.ncbi.nlm.nih.gov/25848626/>`__


- **Inter-rater Reliability (IRR)**

  - Responsible AI Principle: Safety
  - Description: The PDSQI-9 is a human evaluation instrument assessing the quality of LLM-generated clinical summaries across 9 key dimensions (e.g., Accuracy, Comprehensibility, Stigmatization). Inter-rater reliability includes metrics such as: ICC and Krippendorff's α
  - Intended Use: These metrics (ICC and Krippendorff's α) ensure consistent and reliable human assessment of LLM summaries before deployment. Can be used to validate summary quality, catch hallucinations or omissions, and establish clinical readiness of LLMs.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Development and validation of the provider documentation summarization quality instrument for large language models <https://pubmed.ncbi.nlm.nih.gov/40323321/>`__


- **Error Rate**

  - Responsible AI Principle: Safety, Reliability
  - Description: Measure the degree to which post-extraction structured EHR data accurately represents the original source records. Evaluate discrepancies introduced during normalization or mapping, as well as missing or misclassified values across core fields (e.g., laboratory results, medication attributes, encounter details).
  - Intended Use: Ensure that standardized EHR datasets used for analytics or CDS reflect original clinical intent without data loss or distortion. Reduce the risk of downstream safety issues and incorrect model inferences
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark
  - Supporting Literature:

    * `Impact of Electronic Health Record Systems on Information Integrity: Quality and Safety Implications <https://pmc.ncbi.nlm.nih.gov/articles/PMC3797550/>`__


- **Correctness & Completeness**

  - Responsible AI Principle: Safety, Reliability
  - Description: This metric evaluates whether EHR-derived data are both correctly extracted and fully populated after normalization and post-processing, ensuring alignment with predefined clinical criteria. It assesses the accuracy and completeness of structured fields---such as laboratory results, diagnostic codes, medications, and vital signs---against rule-based or domain-specific definitions (e.g., metabolic thresholds, lipid criteria, disease classifications).
  - Intended Use: This metric is used to validate the integrity of standardized EHR data, ensuring that downstream analytics, phenotyping pipelines, cohort-generation workflows, and research applications operate on accurate and comprehensive records. By quantifying correctness and completeness, it strengthens the reliability of secondary use cases and reduces safety risks associated with inaccurate or incomplete clinical data.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific benchmark -- correctness & completeness is use case dependent and varies based on clinical context/clinical criteria.
  - Supporting Literature:

    * `Normalization and standardization of electronic health records for high-throughput phenotyping: the SHARPn consortium <https://pmc.ncbi.nlm.nih.gov/articles/PMC3861933/>`__



Transparency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CHAI recommends all Developer organizations complete a CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__, or similar, for transparency. For additional  best practice guidance and potential metrics related to transparency, see the associated `Best Practice Guide <https://www.chai.org/workgroup/use-case/ehr-information-retrieval>`__.
