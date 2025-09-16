Testing and Evaluation (T&E) Framework
======================================

*(use as guidance when completing the CHAI Applied Model Card for a note
summarization - patient discharge summary use case)*

Pre-Deployment
--------------

*(additional detail for pre-deployment stages of the AI lifecycle, can
be found in the CHAI RAIG)*

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Usefulness,
Usability, and Efficacy can be found in the CHAI RAIG)*

**Recommended Methods/Metrics:**

- **Physician Documentation Quality Instrument, Nine-item tool
  (PDQI-9)**

  - Intended Use: 9 part questionnaire that surveys aspects of
    usefulness.
  - Rationale: in the context of note summarization, PDQI-9 is best used
    for obtaining human feedback on note quality (v. QNOTE or other
    related instruments)
  - Reference: `Physician Documentation Quality Instrument
    (PDQI-9) <https://pmc.ncbi.nlm.nih.gov/articles/instance/3633322/bin/ACI-03-0164-s001.pdf>`__
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **DocLens**

  - Intended Use: Assesses coverage of known assertions, or facts,
    represented in human expert "ground truth" summaries. (1) Extract
    important facts from ground-truth summaries, either manually or
    using the LLM-as-a-judge approach (2) extract important facts from
    AI-generated summaries, either manually or using the LLM-as-a-judge
    approach (3) calculate accuracy, sensitivity, specificity, PPV, NPV
    of AI-extracted facts as compared to ground-truth facts.
  - Rationale: Recommend use of LLM-as-judge ways of generating claims
    from reference summaries and comparing those claims against the
    LLM-generated summary. One such implementation is DocLens, which
    captures completeness (i.e., claim recall -- requires reference),
    conciseness (i.e., claim precision -- requires reference), and
    attribution accuracy (reference-free). Other implementations include
    SummaQA.
  - Reference: `DocLens: Multi-aspect Fine-grained Medical Text
    Evaluation <https://aclanthology.org/2024.acl-long.39/>`__
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

**Acknowledged/Optional Methods/Metrics:**

- **ROUGE (Recall-Oriented Understudy for Gisting Evaluation)**

  - Intended Use: N-gram or Longest Common Subsequence overlap can be
    measured when reference summary is available.
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization (and not extractive summarization) so
    ROUGE is not helpful.
  - Reference: `ROUGE: A Package for Automatic Evaluation of
    Summaries <https://aclanthology.org/W04-1013.pdf>`__
  - Open-source tooling:

- **BERTScore**

  - Intended Use: BertScore computes similarity scores by aligning
    generated and reference summaries on a token-level. Token alignments
    are computed greedily to maximize the cosine similarity between
    contextualized token embeddings from BERT. Precision, recall, and F1
    measure using BERT-based text embeddings
  - Rationale: Acknowledge but optional because hard to interpret for a
    single summary, may be useful to compare LLMs. Modern summarization
    systems use abstractive summarization -- token-level comparisons,
    even relying on embeddings, is too coarse.
  - Reference: `BERTScore: Evaluating Text Generation with
    BERT <https://arxiv.org/abs/1904.09675>`__
  - Open-source tooling:
    `here <https://github.com/Tiiiger/bert_score#readme>`__

- **MoverScore**

  - Intended Use: MoverScore (Zhao et al., 2019) measures the semantic
    distance between a summary and reference text by making use of the
    Word Mover's Distance (Kusner et al., 2015) operating over n-gram
    embeddings pooled from BERT representations.
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization -- token-level comparisons, even
    relying on embeddings, is too coarse.
  - Reference: `MoverScore: Text Generation Evaluating with
    Contextualized Embeddings and Earth Mover
    Distance <https://aclanthology.org/D19-1053.pdf>`__
  - Open-source tooling:

- **Sentence Mover's Similarity**

  - Intended Use: Sentence Mover's Similarity (SMS) (Clark et al., 2019)
    extends Word Mover's Distance to view documents as a bag of sentence
    embeddings as well as a variation which represents documents as both
    a bag of sentences and a bag of words.
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization -- token-level comparisons, even
    relying on embeddings, is too coarse.
  - Reference: `Sentence Mover's Similarity: Automatic Evaluation for
    Multi-Sentence Texts <https://aclanthology.org/P19-1264/>`__
  - Open-source tooling:

- **SummaQA**

  - Intended Use: SummaQA (Scialom et al., 2019) applies a BERT-based
    question-answering model to answer cloze-style questions using
    generated summaries. Questions are generated by masking named
    entities in source documents associated with evaluated summaries.
    The metric reports both the F1 overlap score and QA-model
    confidence.
  - Rationale: Recommend DocLens instead.
  - Reference: `Answers Unite! Unsupervised Metrics for Reinforced
    Summarization Models <https://aclanthology.org/D19-1320/>`__
  - Open-source tooling:

- **BLANC**

  - Intended Use: BLANC (Vasilyev et al., 2020) is a reference-less
    metric that measures the performance gains of a pre-trained language
    model given access to a document summary while carrying out language
    understanding tasks on the source document's text.
  - Rationale: Recommend DocLens instead.
  - Reference: `Fill in the BLANC: Human-free quality estimation of
    document summaries <https://aclanthology.org/2020.eval4nlp-1.2/>`__
  - Open-source tooling:

- **SUPERT**

  - Intended Use: SUPERT (Gao et al., 2020) is a reference-less metric,
    originally designed for multi-document summarization, which measures
    the semantic similarity of model outputs with pseudo-reference
    summaries created by extracting salient sentences from the source
    documents, using soft token alignment techniques.
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization -- token-level comparisons, even
    relying on embeddings, is too coarse.
  - Reference: `SUPERT: Towards New Frontiers in Unsupervised Evaluation
    Metrics for Multi-Document
    Summarization <https://aclanthology.org/2020.acl-main.124/>`__
  - Open-source tooling:

- **BARTScore**

  - Intended Use: BARTScore is an evaluation metric for assessing the
    quality of text generated by natural language processing (NLP)
    models. Unlike traditional metrics that rely on direct comparisons
    between generated text and reference texts, BARTScore treats
    evaluation as a text generation task itself. It leverages BART, a
    pre-trained sequence-to-sequence model, to estimate the likelihood
    of generating the candidate text from the source or reference text.
    Higher likelihoods indicate better quality, as the model considers
    the generated text more probable given the source or reference.
  - Rationale: Acknowledge but optional.
  - Reference: `BARTScore: Evaluating Generated Text as Text
    Generation <https://arxiv.org/abs/2106.11520>`__
  - Open-source tooling:

- **ACUEval**

  - Intended Use: Another LLM breaks down document to atomic content
    units (Liu et al., 2023b, ACUs), facts that can be verified and
    cannot be broken down further. ACUEVAL first generates these atomic
    facts from the system summary, and then validates each extracted
    fact against the source document.
  - Rationale: Recommend DocLens instead.
  - Reference: `ACUEVAL: Fine-grained Hallucination Evaluation and
    Correction for Abstractive
    Summarization <https://openreview.net/pdf/9e1df04bb2315384aa8dbaf47373b833670ae7ff.pdf>`__
  - Open-source tooling:

- **Bilingual Evaluation Understudy (BLEU)**

  - Intended Use:
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization (and not extractive summarization) so
    BLEU is not helpful.
  - Reference: `BLEU: a Method for Automatic Evaluation of Machine
    Translation <https://aclanthology.org/P02-1040.pdf>`__
  - Open-source tooling:

- **METEOR**

  - Intended Use: Accuracy measure primarily used in machine translation
    but relevant for summarization, improves over BLEU to account for
    matching synonyms/stemming. Accuracy score similar to but improving
    on BLEU.
  - Rationale: Acknowledge but do not recommend. Modern summarization systems
    use abstractive summarization (and not extractive summarization) so
    METEOR is not helpful.
  - Reference: `METEOR: An Automatic Metric for MT Evaluation with
    Improved Correlation with Human
    Judgments <https://aclanthology.org/W05-0909.pdf>`__
  - Open-source tooling:

Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Fairness and
Bias Management can be found in the CHAI RAIG)*

**Recommended Methods/Metrics:**

- **Counterfactual Physician Documentation Quality Instrument, Nine-item
  tool (PDQI-9)**

  - Intended Use: recommend implementer stratify by actual categories and evaluate PDQI-9.
  - Rationale: given collection of PDQI-9 information from above, via
    Usefulness principle, stratify to assess similarities/differences
    across different patient groups.
  - Reference: `Physician Documentation Quality Instrument
    (PDQI-9) <https://pmc.ncbi.nlm.nih.gov/articles/instance/3633322/bin/ACI-03-0164-s001.pdf>`__
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Counterfactual DocLens**

  - Intended Use: recommend developer change out the actual source text.
    Recommend implementer evaluate DocLens stratified by actual patient
    category.
  - Rationale: given collection of DocLens information from above, via
    Usefulness principle, stratify to assess similarities/differences
    across different patient groups.
  - Reference: `DocLens: Multi-aspect Fine-grained Medical Text
    Evaluation <https://aclanthology.org/2024.acl-long.39/>`__
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Counterfactual Sentiment Parity**

  - Intended Use: Measure the sentiment consistency across
    counterfactually generated pairs of output. Use a pre-trained
    sentiment classifier :math:`Sm : \mathcal{Y} \rightarrow [0, 1]`.
    Defined as the difference in predicted sentiment rates by a sentiment
    classifier applied to counterfactually generated LLM output pairs.
    See citation for full equation. This allows for some variation in the
    sentiment output when the sensitive attributes are altered, as long
    as the change is not significant. It measures more lenient parity in
    sentiment behavior across counterfactuals.
  - Rationale: include for developer and implementer. For implementer,
    compare sentiment analysis for subpopulations. Appreciate this is
    partially a healthcare organization problem but should be surfaced.
    We recommend "Weak" Counterfactual Sentiment Parity but "Strict"
    Counterfactual Sentiment Parity is optional.
  - Reference: `An Actionable Framework for Assessing Bias and Fairness in Large Language Model Use Cases <https://arxiv.org/pdf/2407.10853>`__
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Safety and
Reliability can be found in the CHAI RAIG)*

**Recommended Methods/Metrics:**

- **Expected Maximum Toxicity**

  - Intended Use: This measures the highest likelihood of encountering
    toxic content in a given model. It reflects the worst-case scenario
    of experiencing toxicity during interaction. Estimates the maximum
    predicted toxicity probability among the top m generations. Per
    original paper, the standard choice of m for this metric is m = 25
  - Rationale: For developer only because the metric requires multiple
    generated summaries (m = 25)
  - Reference: `LangFair: A Python Package for Assessing Bias and Fairness in Large Language Model Use Cases <https://arxiv.org/html/2501.03112v1#bib.bib4>`__ ; `REALTOXICITYPROMPTS: Evaluating Neural Toxic
    Degeneration in Language
    Models <https://aclanthology.org/2020.findings-emnlp.301.pdf>`__
  - Open-source tooling:
    `LangFair <https://github.com/cvs-health/langfair/tree/main/examples/evaluations/text_generation>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Reliability of DocLens**

  - Intended Use: For nondeterministic algorithm, assess accuracy
    measures (from the T&A accuracy section) over multiple evaluations
    for the same prompt contemporaneously. Regardless, assess accuracy
    over time on same metrics.
  - Rationale: For developer only. Recommend DocLens with multiple generations
    to assess the 3 metrics of (1) completeness (2) conciseness and (3)
    attribution. Recommend m = 25, run the DocLens metric 25 times on the same generated summary.
  - Reference:
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Toxic Fraction**

  - Intended Use: The proportion of outputs from a model that are
    considered toxic, indicating the prevalence of toxic behavior across
    all generated output. Toxic Fraction is defined as the fraction of
    generations that are classified as toxic. This metric effectively
    estimates the likelihood that responses generated by M on prompts
    from PX contain toxic text. Note that while the standard choice of
    m for this metric is m = 1, a larger value of m may be preferred in
    practice if sampling a large N is infeasible.
  - Rationale: optional for developer and implementer.
  - Reference: `An Actionable Framework for Assessing Bias and Fairness in Large Language Model Use Cases <https://arxiv.org/pdf/2407.10853>`__ ; `Holistic Evaluation of Language
    Models <https://arxiv.org/pdf/2211.09110>`__
  - Open-source tooling:
    `LangFair <https://github.com/cvs-health/langfair/tree/main/examples/evaluations/text_generation>`__

**Acknowledged/Optional Methods/Metrics:**

- **Toxicity Probability**

  - Intended Use: The probability that any given model output will
    contain toxic content, providing a general likelihood of
    encountering toxicity on any interaction. Toxicity Probability is
    calculated as the empirical probability of having at least one toxic
    prediction (:math:`T(\hat{Y}) \geq 0.5`) among the top m generations.
    Per original paper, the standard choice of m for this metric is m =
    25.
  - Rationale: optional for developer and implementer.
  - Reference: `An Actionable Framework for Assessing Bias and Fairness in Large Language Model Use Cases <https://arxiv.org/pdf/2407.10853>`__ ; `REALTOXICITYPROMPTS: Evaluating Neural Toxic
    Degeneration in Language Models <https://arxiv.org/pdf/2009.11462>`__
  - Open-source tooling:
    `LangFair <https://github.com/cvs-health/langfair/tree/main/examples/evaluations/text_generation>`__

- **Holistic Evaluation of Language Models (HELM)**

  - Intended Use: Applies to underlying language model but does not
    assess the output of the model in DC summary generation. Should
    request vendor provide data on safety prior to use of model.
  - Rationale: Acknowledge, but not relevant to asssessing individual summaries.
  - Reference: `Holistic Evaluation of Language Models <https://arxiv.org/abs/2211.09110>`__
  - Open-source tooling:

- **Medsafetybench**

  - Intended Use: Applies to underlying language model but does not
    assess the output of the model in DC summary generation. Should
    request vendor provide data on safety prior to use of model.
  - Rationale: Acknowledge, but not relevant to asssessing individual
    summaries.
  - Reference: `MedSafetyBench: Evaluating and Improving the Medical
    Safety of Large Language
    Models <https://arxiv.org/html/2403.03744v4>`__
  - Open-source tooling:

- **Calibration**

  - Intended Use: Adequate sequential order of events is captured: "The
    text coherently documents the key findings from the conversation in
    a sequential matter from the patient's symptoms to their allergies
    and family history and then to the examination and plan". Overall
    evaluation could also capture lack of follow up information,
    management plan. Basically seems like a weighted version of accuracy
    metrics.
  - Rationale: Acknowledge but not yet something we can recommend.
    Implementer does not have access to token probabilities, and how
    best to average token probabilities is a developing area of
    research.
  - Reference: `Expert evaluation of large language models for clinical
    dialogue
    summarization. <https://www.nature.com/articles/s41598-024-84850-x>`__
  - Open-source tooling:

Transparency, Intelligibility, and Accountability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Transparency,
Intelligibility, and Accountability can be found in the CHAI RAIG)*

**Recommended Methods/Metrics:**

- **Proportion of Uses Disclosed to Patients**

  - Intended Use: Proportion of summaries for which use of the LLM is
    disclosed to the patient in a deployed system.
  - Rationale: Implementer only.
  - Reference:
  - Open-source tooling:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Availability of AI System Facts**

  - Intended Use: Include information from CHAI Applied Model Card.
    Binary (yes/no) response.
  - Rationale: There are more comprehensive evaluations but for
    pragmatic reasons we recommend the same evaluation metric for
    predictive and generative use cases.
  - Reference: `CHAI Applied Model
    Card <https://chai.org/draft-chai-applied-model-card/>`__
  - Open-source tooling:
    `here <https://github.com/coalition-for-health-ai/mc-schema>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

**Acknowledged/Optional Methods/Metrics**

- **Transparent Reporting of a Multivariable Model for Individual
  Prognosis or Diagnosis-Large Language Model (TRIPOD-LLM)**

  - Intended Use: The Transparent Reporting of a Multivariable Model for
    Individual Prognosis or Diagnosis-Large Language Model (TRIPOD-LLM)
    guideline may serve as a way to transparently communicate GenAI
    evaluation methods and results. Multistep checklist assessing
    underlying data, training process, evaluation
  - Rationale: Acknowledge.
  - Reference: `The TRIPOD-LLM Statement: A Targeted Guideline For
    Reporting Large Language Models
    Use <https://pmc.ncbi.nlm.nih.gov/articles/PMC11361247/>`__
  - Open-source tooling:

- **Clinical-Grade Evaluation of Large Language Models**

  - Intended Use: Evaluate presence/absence of reported elements in an
    evaluation. Checklist primarily intended for reproducibility, but
    has elements that can be surfaced for transparency, e.g., Model
    versioning
  - Rationale: Acknowledge.
  - Reference: `Toward Clinical-Grade Evaluation of Large Language
    Models <https://pmc.ncbi.nlm.nih.gov/articles/PMC11221761/>`__
  - Open-source tooling:

Security and Privacy
~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Security and
Privacy can be found in the CHAI RAIG)*

**Recommended Methods/Metrics:**

- **Model Uptime/Failed Generations when Deployed**

  - Intended Use: Use existing red teaming/attack toolkits to evaluate
    for privacy leaks.
  - Rationale:
  - Reference:
  - Open-source tooling:

- **Data Retention and Reuse Policies**

  - Intended Use: Document the threat model used in security/privacy
    analysis and provide clear justifications for which attacks are in
    scope vs. out of scope.
  - Rationale:
  - Reference:
  - Open-source tooling:

- **Minimum Data Access**

  - Intended Use: If commercial, how much data a vendor/model has access
    to, compared to how much data is needed for task.
  - Rationale:
  - Reference:
  - Open-source tooling:

Post-Deployment
---------------

*(additional detail for post-deployment stages of the AI lifecycle, can
be found in the CHAI RAIG)*

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Usefulness,
Usability, and Efficacy can be found in the CHAI RAIG)*

Method:

Metric:

Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Fairness and
Bias Management can be found in the CHAI RAIG)*

Method:

Metric:

Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Safety and
Reliability can be found in the CHAI RAIG)*

Method:

Metric:

Transparency, Intelligibility, and Accountability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Transparency,
Intelligibility, and Accountability can be found in the CHAI RAIG)*

Method:

Metric:

Security and Privacy
~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Security and
Privacy can be found in the CHAI RAIG)*

Method:

Metric:
