Testing and Evaluation (T&E) Framework
======================================
Included below is the CHAI Prior Authorization Work Group's recommended, consensus-defined methods/metrics for the prior authorization criteria matching use case. Methods/metrics are categorized across Responsible AI Principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Transparency.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Reduce Turnaround Time (TAT)**

  - Responsible AI Principle: Usefulness
  - Description: Measure efficiency and effectiveness in healthcare delivery by reducing turnaround time (TAT) for prior authorization (PA), benefiting both providers and patients. TAT in this context means from a prior authorization submitted to an initial decision.
  - Intended Use: Measure if TAT for PA reviews is reduced by automating clinical documentation analysis and aligning documentation with medical necessity criteria. Organizations should consider separately evaluating TAT for auto-approved prior authorizations v. manual reviews of non-auto-approved prior authorizations. This will help reduce conflated average TAT times.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: National average TAT for PA decisions is approximately 3-5 business days; Organizations should track % difference in improvement for TAT between non-AI v. AI PA solutions; Align to CMS Final Rule CMS-0057-F ("decisions within 72 hours for expedited requests and seven calendar days for standard requests""; and relevant state laws (e.g., CA, WA)
  - Supporting Literature:

    * American Medical Association. `2022 AMA Prior Authorization Physician Survey <https://www.ama-assn.org/system/files/prior-authorization-survey.pdf>`__


- **Policy Coverage Completeness**

  - Responsible AI Principle: Usefulness
  - Description: Evaluate whether the AI solution captures non-judgment policy coverage criteria (i.e., data fields in a payer policy such as inclusion/exclusion rules, eligibility thresholds, contraindications) and flags any gaps or omissions in coverage.
  - Intended Use: Validate that AI outputs map directly to each policy coverage criteria and confirm alignment with clinician judgment on whether policy coverage criteria are fully met in practice.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: ≥ 90% of required, non-judgment policy coverage criteria accurately represented in benchmark datasets; ≤ 10% of objective policy coverage criteria (e.g., contraindications, lab thresholds) missing or mis-mapped.
  - Supporting Literature:

    * Amann et al. (2020), The Lancet Digital Health; Chen et al. (2021), npj Digital Medicine


- **Time-on-Task**

  - Responsible AI Principle: Usability
  - Description: Measure how long it takes users to complete PA criteria-matching tasks (e.g., verifying documentation against payer rules) when supported by the AI solution.
  - Intended Use: Assess efficiency gains by comparing AI-assisted task completion times against manual review, with focus on reducing provider administrative workload
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: ≥ ~15-30% reduction in time compared to baseline manual process is considered meaningful in utilization management operations
  - Supporting Literature:

    * Preece et al. (2015), Interaction Design
    * Kushniruk et al. (2009), Journal of Biomedical Informatics


- **Out-of-Task Question Handling**

  - Responsible AI Principle: Efficacy
  - Description: Validate whether the AI solution properly rejects, redirects, or flags prompts or queries that fall outside the scope of the trained PA criteria matching task.
  - Intended Use: Prevent erroneous or misleading outputs by confirming that the AI solution does not attempt to answer prompts beyond its intended use (e.g., making clinical judgments outside coverage criteria alignment).
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: ≥ 95% correct rejection or redirection of out-of-scope queries in controlled testing scenarios
  - Supporting Literature:

    * Bender et al. (2021), Stochastic Parrots
    * Lin et al. (2022), TruthfulQA
    * Weidinger et al. (2022), Ethical and Social Risks of Language Models


- **Change in Performance due to Policy Updates**

  - Responsible AI Principle: Efficacy
  - Description: Evaluate how AI solution performance (e.g., precision, recall, F1 score) changes after implementation of new or revised prior authorization policies or coverage policies. This method quantifies the solution's adaptability and continued clinical alignment over time.
  - Intended Use: Ensure the AI-supported criteria matching system remains accurate and clinically relevant following frequent payer or policy updates by comparing pre- and post-policy performance on aligned test cases.
  - Pre- or Post-Implementation (or Both): Post-Implementation
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: No single benchmark; Developers should track any decline in key performance metrics post-policy update
  - Supporting Literature:

    * Rajkomar et al. (2019), NEJM, doi:10.1056/NEJMra1814259
    * Kelly et al. (2019), JAMA, doi:10.1001/jama.2019.10232
    * Breck et al. (2017), doi:10.1109/BigData.2017.8258038.
  - Additional Notes: For governance purposes, organizations should define when a model will be retrained post-policy updates. Organizations should define what types, and at what frequency, of policy changes trigger an evaluation.


- **Appeal Overturn Rate**

  - Responsible AI Principle: Efficacy
  - Description: The change, pre- vs. post-implementation of the AI-supported prior authorization solution, in the proportion of claims where payment was made only after a successful patient or provider appeal. This metric captures whether AI recommendations are leading to a higher rate of denials that are later overturned, indicating potential harm to patients or added administrative burden for providers. Note: an appeal is sometimes overturned because certain information either wasn't given or incomplete - this metric focuses exclusively on the AI components of the appeal evaluation.
  - Intended Use: Track changes in the proportion of claims paid only after a successful appeal following deployment of the AI-supported PA solution. Compare post-implementation Appeal Overturn Rate to historical baselines and stratify by clinical area or patient subgroup to identify unintended increases in inappropriate denials. Note: there is a risk of automation bias using this method to track.
  - Pre- or Post-Implementation (or Both): Pre- and Post-Implementation
  - Persona (Developer, Implementer, or Both): Implementer
  - Benchmark: The goal is to keep the Appeal Overturn Rate from rising above historical baselines during early adoption and to reduce it below pre-AI levels over time, showing that the AI solution decreases inappropriate denials and appeals.
  - Supporting Literature:

    * TBD
  - Additional Notes: This metric evaluates the downstream impact of organizational routing logic informed by AI outputs, not the AI's decision-making, as the model does not render approvals or denials.

Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Predictive Parity (Positive Predictive Value Parity)**

  - Responsible AI Principle: Fairness
  - Description: An AI solution satisfies predictive parity when the Positive Predictive Value (PPV) --- the proportion of positive predictions that are correct --- is equivalent across protected and unprotected groups. In the context of AI-supported prior authorization (PA), this means that when the model predicts that a service or request meets medical necessity criteria, the rate of correct predictions (validated by human reviewers or ground truth labels) is consistent across demographic subgroups (e.g., by race/ethnicity, sex, age, language, disability status).
  - Intended Use: Test whether prediction accuracy and error rates differ systematically across protected classes, isolating predictor-level bias from potential downstream user or process bias. Validate that the AI solution's criteria-matching predictions are equally reliable for all subgroups, reducing risk of inequitable outcomes in manual review or appeal.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: If subgroup PPV difference > 0.05, trigger review of training data composition, criteria mapping, or thresholding.
  - Supporting Literature:

    * TBD
  - Additional Notes: Recommend requiring clinical-context stratification to avoid misattributing population-level differences as model bias.


- **Toxicity Language Score**

  - Responsible AI Principle: Bias Management
  - Description: Applies natural language processing (NLP) models to flag presence of potentially harmful or biased language in generative model outputs. For example, there are automated guardrails that remove/filter toxicity from language model outputs, such as AWS `Bedrock <https://aws.amazon.com/blogs/aws/amazon-bedrock-guardrails-now-supports-multimodal-toxicity-detection-with-image-support/>`__  or Anthropic's `Responsible Scaling Policy <https://www.anthropic.com/rsp-updates>`__.
  - Intended Use: Evaluate the presence of harmful, offensive, or biased language in AI-generated text outputs, such as rationale summaries explaining approval decisions. In a prior authorization setting, ensuring that generated content is free of toxic language is critical because patients, providers, and payers may review these summaries. While violent or sexual content may often be flagged as toxic, such language can in some cases serve a legitimate and clinically appropriate purpose (e.g., in describing medical conditions or scenarios). Therefore, toxicity detection mechanisms should be calibrated to distinguish between harmful language and contextually necessary terminology, rather than categorically suppressing all flagged content.
    * The objective is to extend existing toxicity measurement frameworks to this use case by capturing subtler forms of potentially harmful language. While overtly toxic content (e.g., hate or sexual speech) is unlikely in prior authorization decisions, language perceived as condescending, dismissive, or minimizing patient suffering may occur. The toxicity measurement should therefore account for such nuanced expressions within the Toxicity Language Score.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Developer
  - Benchmark: Suggest a toxicity score < 0.1 (or 10%) generally indicates a low likelihood of the output being perceived as toxic, offensive, or biased by the average user; the goal is to have 0 toxic language.
  - Supporting Literature:

    * TBD


- **Auto-Approval vs. Manual Review Outcome Disparity**

  - Responsible AI Principle: Bias Management
  - Description: Compare health and access outcomes for patients whose prior auth requests were auto-approved versus those that required manual review. Stratify by demographic and clinical subpopulations to detect disparities that may not be visible in overall metrics. This approach addresses the "Symptoms Paradox,"  where seemingly appropriate use of manual review in high-risk or ambiguous cases can unintentionally concentrate delays or burdens on vulnerable subgroups.
  - Intended Use: Identify subpopulations that experience differential access, approval, or clinical outcomes based on how their requests are routed (auto vs. manual). Surface cases where routing logic may exacerbate disparities or clinical risks. Support refinement of triage thresholds or review escalation rules. Note: "identify subpopulations" should be done within clinical conditions to avoid confounding by condition.
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No specific recommended benchmark value; the goal is to have transparency of this metric being evaluated and reported; no need to report if under a certain threshold, as defined by the organization; additionally, all human review examples should be given more weight than AI output
  - Supporting Literature:

    * Washington HA. "The Symptoms Paradox: Structural Bias in Algorithmic Medical Triage." JAMA, 2022.
  - Additional Notes: This metric evaluates the downstream impact of organizational routing logic informed by AI outputs, not the AI's decision-making, as the model does not render approvals or denials.


- **Demographic Appeal Delay Difference**

  - Responsible AI Principle: Bias Management
  - Description: Evaluate claims based on expected time to approval, or on appeal, by demographic group within clinical categories of care. A process may have parity in percentage approved, but that process may auto-approve without appeal at a rate different than another demographic group's claims that experience a higher appeals rate.
  - Intended Use: Evaluate whether the AI-supported prior authorization process produces equitable turnaround times and appeal experiences across demographic groups. This metric identifies if certain populations face longer delays or higher reliance on appeals to achieve approval, even when overall approval rates appear similar. It ensures that efficiency gains from automation do not introduce administrative inequities.
  - Pre- or Post-Implementation (or Both): Pre-Implementation for Developers; Post-Implementation for Implementers
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: No recommended benchmark
  - Supporting Literature:

    * TBD


Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Failure Analysis**

  - Responsible AI Principle: Safety
  - Description: Software failure analysis involves identifying the root cause of software failures to improve reliability and prevent future occurrences. Common types of software failure analysis include: Fault Tree Analysis (FTA), Failure Modes and Effects Analysis (FMEA), and Root Cause Analysis. These techniques help analyze potential failure scenarios, their impact, and the underlying reasons for failure.
  - Intended Use: Identify and mitigate risks in AI-supported criteria matching prior to live deployment. This means systematically evaluating where and how the AI might fail, such as misalignment with payer criteria, and determining how severe these failures would be if they occurred in real-world use. As an example in this context, FMEA is adapted to the AI lifecycle to account for unique risks like data drift, model bias, and hallucinations in generated outputs. Each identified failure mode is scored based on Severity (S), Occurrence (O), and Detection (D), producing a Risk Priority Number (RPN = S×O×D).
    * Example scenario: in an AI-enabled prior authorization system, model performance can rapidly degrade when payer medical policies change, rendering historical approval/denial patterns obsolete. Failure Analysis (FMEA) helps identify this as a high-severity failure mode, assess its likelihood, and implement mitigations such as automated policy-change alerts, shadow model testing, and timely retraining. This ensures the AI remains aligned with current payer rules, avoiding non-compliant decisions and care delays.
  - Pre- or Post-Implementation (or Both): Pre-Implementation
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Example benchmark includes: Risk Priority Number (RPN) < 100; the RPN scale typically ranges from 1 to 1000 (S, O, D each rated 1--10). A value of 100 (e.g., 5×5×4) indicates a moderate level of risk. Keeping all critical failure modes below 100 ensures that the AI solution does not go live with any unacceptably high-risk scenarios.
  - Supporting Literature:

    * Anjalee, J. A. L., et al. (2021). Application of Failure Mode and Effect Analysis (FMEA) to Improve Medication Safety: A Systematic Review.
    * DeRosier, J., Stalhandske, E., Bagian, J. P., & Nudell, T. (2002). Using Health Care Failure Mode and Effect Analysis: The VA National Center for Patient Safety's Prospective Risk Analysis System. Joint Commission Journal on Quality Improvement, 28(5), 248--267.


- **Uptime Ratio / System Reliability**

  - Responsible AI Principle: Reliability
  - Description: Quantifies system reliability by measuring the proportion of time AI services are available and functional.
  - Intended Use: Ensure AI-based criteria matching services are consistently operational within clinical workflows. An example is Google's `Cloud Healthcare Service Level Agreement (SLA) <https://cloud.google.com/healthcare/sla>`__
  - Pre- or Post-Implementation (or Both): Both
  - Persona (Developer, Implementer, or Both): Both
  - Benchmark: Vendor organizations should strive for system uptime ≥ 99.9%
  - Supporting Literature:

    * TBD


Transparency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CHAI recommends all Developer organizations complete a CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__, or similar, for transparency. For additional  best practice guidance and potential metrics related to transparency, see the associated `Best Practice Guide <https://www.chai.org/workgroup/use-case/ai-supported-prior-authorization-criteria-matching>`__.
