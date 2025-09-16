Testing and Evaluation (T&E) Framework
======================================

*(use as guidance when completing the CHAI Applied Model Card for a
sepsis risk prediction use case)*

Pre-Deployment
--------------

*(additional detail for pre-deployment stages of the AI lifecycle, can
be found in the CHAI RAIG)*

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Usefulness,
Usability, and Efficacy can be found in the CHAI RAIG)*

**Method/Metric:**

- **Sequential Organ Failure Assessment (SOFA) score**

  - Intended Use: numerically quantifies the number and severity of
    failed organs.
  - Rationale: The primary purpose of the SOFA score is, as far as
    is possible, to objectively describe organ (dys)function rather than
    to predict outcome, so no associated equation was developed for
    mortality prediction.
  - Reference: `The Sequential Organ Failure Assessment score for
    predicting outcome in patients with severe sepsis and evidence of
    hypoperfusion at the time of emergency department
    presentation <https://pmc.ncbi.nlm.nih.gov/articles/PMC2703722/>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Risk Ratio**

  - Intended Use: risk of outcome rate if exposed to sepsis risk
    prediction AI model over outcome rate if not exposed to sepsis risk
    prediction AI model
  - Rationale:
  - Reference: `The Relative Merits of Risk Ratios and Odds
    Ratios <https://jamanetwork.com/journals/jamapediatrics/fullarticle/381459>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Area under the curve (AUC)—receiver operating characteristic (ROC)
  (AUC-ROC)**

  - Intended Use: metric computes the area under the curve (AUC) for the
    Receiver Operating Characteristic Curve (ROC). The return values
    represent how well the model used is predicting the correct classes,
    based on the input data. A score of 0.5 means that the model is
    predicting exactly at chance
  - Rationale: Evaluates tradeoff between true positive and false
    positive. Useful for binary classification with clear positive and
    negative classes, imbalanced datasets where one class is
    significantly underrepresented (accuracy inflates), and threshold
    independent evaluation (evaluates across all thresholds to identify
    optimal performance for specific application/population); useful
    depending on whether false positives, or in the case of sepsis,
    false negatives, carry higher consequences.
  - Reference: `Classification: ROC and
    AUC <https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Area under the curve (AUC)—precision recall curve (PRC) (AUC-PRC)**

  - Intended Use: model performance metric for binary responses that is
    appropriate for rare events and not dependent on model specificity
  - Rationale:
  - Reference: `The relationship between Precision-Recall and ROC
    curves <https://dl.acm.org/doi/abs/10.1145/1143844.1143874>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Precision (or Positive Predictive Value, PPV)**

  - Intended Use: the fraction of correctly labeled positive examples
    out of all of the examples that were labeled as positive. It is
    computed via the equation: Precision = TP / (TP + FP) where TP is
    the True positives (i.e. the examples correctly labeled as positive)
    and FP is the False positive examples (i.e. the examples incorrectly
    labeled as positive). Retrospective cohort studies: recommended PPV
    at Sensitivity = 0.9
  - Rationale: calculate metrics with respect to: ED attending
    diagnoses; internal criteria from ACCM guidelines; ICU admission
    meeting Goldstein sepsis criteria. Measure of accuracy for a positive
    result (proportion of true positives for all positive predictions),
    useful when false positives are costly or undesirable. Valuable in
    datasets with strong class imbalance, where positive cases are rare
    (medical diagnosis). Traditional accuracy can be misleading because
    it would be biased towards majority class. Also helpful when wanting
    to minimize false positives (cost = stress, unnecessary medical
    procedures, alarm fatigue)
  - Reference: See Eisenberg, M. A. & Balamuth, F. Pediatric sepsis
    screening in US hospitals. Pediatr Res 91, 351-358 (2022).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Recall (or Sensitivity)**

  - Intended Use: Recall is the fraction of the positive examples that
    were correctly labeled by the model as positive. It can be computed
    with the equation: Recall = TP / (TP + FN) Where TP is the number of
    true positives and FN is the number of false negatives.
    Retrospective cohort studies: Recommended PPV at Sensitivity = 0.9
  - Rationale: calculate metrics with respect to: ED attending
    diagnoses; internal criteria from ACCM guidelines; ICU admission
    meeting Goldstein sepsis criteria. Useful when it's important to
    capture all positive cases (e.g. sepsis), even if it means
    tolerating some false positives. (e.g. cost of false negatives is
    really high). This is also appropriate for imbalanced datasets with
    rare positive cases, mainly for binary classification. Evaluated
    often alongside precision.
  - Reference: See Eisenberg, M. A. & Balamuth, F. Pediatric sepsis
    screening in US hospitals. Pediatr Res 91, 351--358 (2022).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Specificity**

  - Intended Use: measure performance in external validation cohort;
    measure performance on different floors / inpatient services.
    Recommended PPV at Sensitivity = 0.9
  - Rationale: calculate metrics with respect to: ED attending
    diagnoses; internal criteria from ACCM guidelines; ICU admission
    meeting Goldstein sepsis criteria
  - Reference: See Eisenberg, M. A. & Balamuth, F. Pediatric sepsis
    screening in US hospitals. Pediatr Res 91, 351--358 (2022).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **F1 score**

  - Intended Use: calculated from the precision and recall of the test,
    where the precision is the number of true positive results divided
    by the number of all positive results, including those not
    identified correctly, and the recall is the number of true positive
    results divided by the number of all samples that should have been
    identified as positive.
  - Rationale: Combines precision and recall into a single value,
    provide balance view of accuracy in all positive predictions and
    completeness in capturing positives. It's useful when there is class
    imbalance and the positive class is rare. (the ability of the model
    to correctly predict the minority class without being overly
    affected by more prevalent class), good when there is a high cost of
    false negatives and/or false positives (eg. healthcare/sepsis),
    binary or multi-class classification prioritizing positive class,
    provides trade off between precision and recall. While F1 gives
    equal weight to precision and recall, F2 or F0.5 can be used if
    putting more weight on recall or precision, respectively.
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Root Mean Squared Error (RMSE)**

  - Intended Use: measure of the differences between values (sample or
    population values) predicted by a model or an estimator and the
    values observed. The RMSE represents the square root of the second
    sample moment of the differences between predicted values and
    observed values or the quadratic mean of these differences.
  - Rationale:
  - Reference: `Root-mean-square error (RMSE) or mean absolute error
    (MAE): when to use them or
    not <https://gmd.copernicus.org/articles/15/5481/2022/gmd-15-5481-2022-discussion.html>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Coefficient of Determination (R-squared)**

  - Intended Use: the proportion of the variance in the dependent
    variable that is predictable from the independent variables.
  - Rationale:
  - Reference: `The Coefficient of Determination: Understanding r
    squared and R
    squared <https://pubs.nctm.org/view/journals/mt/93/3/article-p230.xml>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Time-to-Event**

  - Intended Use: Assessment of the time between prediction and
    event/outcome. For example, the average number of hours between an
    alert and administration of antibiotics.
  - Rationale: Measures the usefulness of the prediction; alerts are
    less useful after infectious workup has begun or if they are too
    early in the diagnostic process.
  - Reference: `Reyna, M. A., Josef, C. S., Jeter, R., Shashikumar, S.
    P., Westover, M. B., Nemati, S., ... & Sharma, A. (2020). Early
    prediction of sepsis from clinical data: the PhysioNet/Computing in
    Cardiology Challenge 2019. Critical care medicine, 48(2), 210-217.`
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Inclusion / Exclusion Analysis**

  - Intended Use: Assessment of model performance after applying
    conditions of use. For example, measuring performance
    characteristics following exclusion of patients on antibiotics,
    patients with invasive surgery in the last 24 hours, bone marrow
    transplant patients, etc.  
  - Rationale: Vanilla classification metrics may overestimate model
    performance within its conditions of use.
  - Reference: `Wong, A., Otles, E., Donnelly, J. P., Krumm, A.,
    McCullough, J., DeTroyer-Cooley, O., ... & Singh, K. (2021).
    External validation of a widely implemented proprietary sepsis
    prediction model in hospitalized patients. JAMA internal medicine,
    181(8), 1065-107`
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Ground Theory Analysis**

  - Intended Use: Use this qualitative research method to develop theories based on systematically gathered and analyzed        data. Conduct semi-structured interviews with clinicians or relevant end-users to gather insights. Focus on themes such     as how clinicians perceive the AI system’s accuracy and trustworthiness and how well the AI system fits into existing       clinical workflows. Use iterative coding and constant comparison to analyze interview data. Generate theories that are      grounded in the actual experiences and needs of end-users.
  - Rationale: Focus on real-world evidence rather than forcing data to fit existing models.
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer): 
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Fairness and Bias Management can be found in the CHAI RAIG)*

**Method/Metric:**

- **HOUsing-based SocioEconomic Status measure (HOUSES) Index**

  - Intended Use: compare balanced error rate (BER) against different
    socioeconomic status (SES) levels
  - Rationale:
  - Reference: `Assessing socioeconomic bias in machine learning
    algorithms in health care: a case study of the HOUSES
    index <https://pubmed.ncbi.nlm.nih.gov/35396996/>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Differential Missingness**

  - Intended Use: probability of data being missing varies across
    different groups or conditions within a study. This can lead to
    biased estimates and affect the validity of the study's conclusions.
  - Rationale: Target label of interest might be collected differently
    as function of vulnerable subgroups
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Equality of Opportunity Difference (EOD)**

  - Intended Use: measures the deviation from the equality of
    opportunity, which means that the same proportion of each population
    receives the favorable outcome. This measure must be equal to 0 to
    be fair.
  - Rationale: depends only on the joint statistics of the predictor,
    the target and the protected attribute, but not on interpretation of
    individual features.
  - Reference: `Equality of Opportunity in Supervised
    Learning <https://arxiv.org/abs/1610.02413>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Confusion Matrix**

  - Intended Use: a table that is used to define the performance of a
    classification algorithm. A confusion matrix visualizes and
    summarizes the performance of a classification algorithm.
  - Rationale:
  - Reference: `Confusion
    Matrix <https://www.sciencedirect.com/topics/engineering/confusion-matrix>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Potential Differential Performance Across Socioeconomic Statuses
  (SES)**

  - Intended Use:
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Use of interviews or qualitative approach to understand how biases
  could be introduced into the workflow**

  - Intended Use:
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Equalized Odds**

  - Intended Use: prediction errors are distributed equally across
    different groups
  - Rationale: use to evaluate Parity; Equalized Odds Criterion ensures
    similar True Positive Rates and False Positive Rates across all
    demographic groups
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Slice Finding**

  - Intended Use: Automatically identify subgroups in the data where the
    model is underperforming (e.g. based on demographics, comorbidities,
    etc.)
  - Rationale: Pre-specified subgroups may miss underperforming slices.
    For example, the model may not achieve acceptable performance on
    cirrhosis patients.
  - Reference: https://research.google/pubs/slice-finder-automated-data-slicing-for-model-validation/
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Safety and
Reliability can be found in the CHAI RAIG)*

**Method/Metric:**

- **Accuracy**

  - Intended Use: Evaluate the correctness of the AI model's predictions
    (e.g., percentage of correct predictions). Accuracy = (TP + TN) /
    (TP + TN + FP + FN) , where: TP = True Positive; TN = True Negative;
    FP = False Positive; FN = False Negative.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Risk Framework**

  - Intended Use: assess the safety and reliability of predictive AI
    algorithms using a risk framework.
  - Rationale:
  - Reference: examples include National Institute of Standards and
    Technology (NIST) Artificial Intelligence Risk Management Framework
    (AI RMF 1.0), ISO/IEC 23894:2024, ISO/IEC 42001:2023, CHAI
    Responsible AI Guide
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Task Analysis**

  - Intended Use: Conduct a task analysis, failure modes and effects
    analysis (FMEA), or detailed walkthroughs to identify potential
    failure points.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Non-Inferiority Assessment**

  - Intended Use: Compare the AI system to clinician experts,
    particularly in cases where prioritization tools are used, to ensure
    adequacy.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Likelihood of Failure at Identified Failure Points**

  - Intended Use: measure developed and evaluated during
    pre-implementation.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Number of Successful Predictions**

  - Intended Use: quantitative measure of reliability (e.g., number of
    correct predictions over total cases).
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Percentage of Errors**

  - Intended Use: Quantitative measure of errors over a given number of
    cases.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Predetermined Change Control Plan**

  - Intended Use: Identify performance metrics that will be monitored
    and their corresponding control limits to trigger model updates.
  - Rationale: Model performance may deteriorate over time necessitating
    retraining, etc. Changes to clinical systems should be protocolized
    to prevent disruptions. 
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Transparency, Intelligibility, and Accountability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Transparency,
Intelligibility, and Accountability can be found in the CHAI RAIG)*

**Method/Metric:**

- **Saliency Maps**

  - Intended Use: highlight the important regions of the input data,
    such as images, that influenced the model's decisions, but also
    consider the reliability of these maps and the rational for that
    region of the data being included
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Locally Interpretable Model-Agnostic Explanations (LIME)**

  - Intended Use: method developed to enhance the explainability and
    transparency of machine learning models, particularly those that are
    complex and difficult to interpret. The core idea of LIME is to
    approximate the behavior of a complex model with a simpler, more
    interpretable model in the context of a specific prediction.
  - Rationale:
  - Reference: `"Why Should I Trust You?": Explaining the Predictions of
    Any Classifier <https://arxiv.org/abs/1602.04938>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Shapley Additive Explanation (SHAP)**

  - Intended Use: method that quantifies the contribution of each
    feature to the output of a predictive model. Rooted in cooperative
    game theory, SHAP values provide a theoretically sound approach for
    interpreting complex models by distributing the prediction
    difference fairly among the input features.
  - Rationale:
  - Reference: `A unified approach to interpreting model
    predictions <https://dl.acm.org/doi/10.5555/3295222.3295230>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Prototypical Explanations**

  - Intended Use: identify which parts of the model are contributing to
    the model's decisions. This approach relies on human experts to
    identify prototypes for the explanation to use as a comparison,
    which can be a limitation of the approach
  - Rationale:
  - Reference:
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
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Determine who on the care team is receiving alerts (components of
  screening)**

  - Intended Use: Automated alert followed by manual screening allows
    for additional transparency relative to completely automated
    solutions.
  - Rationale: 
  - Reference: 
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Security and Privacy
~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Security and
Privacy can be found in the CHAI RAIG)*

**Method/Metric:**

- **Locality of the assessment**

  - Intended Use: observe and characterize the stakeholders receiving
    information on patient. 
  - Rationale: human assessment of "minimum necessary" criteria. Only
    the care team of the patient review and receive information on
    sepsis alerts; the manual screen contains minimum necessary survey
    of patient data; and the action plan is a team huddle. All data
    stays in EHR system.
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Consult security experts**

  - Intended Use: this may include folks such as Data Protection Officer
    in the planning phase to develop a data governance strategy.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Leverage industry security guidelines**

  - Intended Use: use security guidelines (e.g., NIST, ISO/IEC, OECD)
    and refine them with nuanced expert judgment.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Data Protection Impact Assessments (DPIA)**

  - Intended Use: conducting Data Protection Impact Assessments (DPIA)
    during the design phase.
  - Rationale:
  - Reference: `Data Protection Impact Assessments
    (DPIA) <https://gdpr.eu/data-protection-impact-assessment-template/>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Threat Modeling**

  - Intended Use: anticipate and prepare for potential breaches,
    including attacker incentives and impact evaluations.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Evaluation of the likelihood and impact of various attack vectors**

  - Intended Use:
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Data Provenance Tracking**

  - Intended Use: ensure data integrity.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Numeric results from risk assessments**

  - Intended Use:
  - Rationale:
  - Reference: e.g., likelihood and severity of attack scenarios
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Outcomes of privacy preservation evaluations**

  - Intended Use:
  - Rationale:
  - Reference: e.g., degree of compliance from DPIA
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Post-Deployment
---------------

*(additional detail for post-deployment stages of the AI lifecycle, can
be found in the CHAI RAIG)*

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Usefulness,
Usability, and Efficacy can be found in the CHAI RAIG)*

**Method/Metric:**

- **System Usability Scale (SUS)**

  - Intended Use: ten-item scale giving a global view of subjective
    assessments of usability; SUS is a Likert Scale which can be
    conducted to measure end-user satisfaction
  - Rationale:
  - Reference: `SUS - A quick and dirty usability
    scale <https://digital.ahrq.gov/sites/default/files/docs/survey/systemusabilityscale%2528sus%2529_comp%255B1%255D.pdf>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Potential Differential Performance Across Socioeconomic Statuses
  (SES)**

  - Intended Use: this metric refers to the possibility that an AI model
    or system performs differently based on the socioeconomic background
    of the users or subjects. It evaluates whether individuals from
    different SES levels (e.g., income, education, occupation)
    experience varying levels of accuracy, error rates, or outcomes from
    the system, potentially highlighting biases or inequities in how the
    system treats different socioeconomic groups
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Equalized Odds**

  - Intended Use: prediction errors are distributed equally across
    different groups
  - Rationale: use to evaluate Parity; Equalized Odds Criterion ensures
    similar True Positive Rates and False Positive Rates across all
    demographic groups
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Usability Testing and Heuristic Evaluation**

  - Intended Use: In addition to the intrinsic and extrinsic evaluation
    conducted in the pre-implementation stages, one must consider the
    user's interaction with the system. Use usability testing and
    heuristic evaluation to evaluate the AI system's interface.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **User Satisfaction Survey**

  - Intended Use:
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Sensitivity, Specificity, PPV**

  - Intended Use: measure performance in external validation cohort;
    measure performance on different floors / inpatient service. PPV at
    Sensitivity = 0.9
  - Rationale: retrospective cohort study in patients before and after
    tool is implemented
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Pre-post implementation differences in usefulness metrics**

  - Intended Use: calculate pre-post rate differences in before and
    after cohorts:
    - Proportion of positives leading to treatment
    - % treaded for sepsis
    - Time to first IV antibiotic
    - Time to first IVF bolus
    - Volume of IVF
    - ICU-free d to d 30
    - 30-day mortality
    - Rates of systolic hypotension in ED
    - Rates of Intubation 
    - Rates of CPR required
    - Rates of required pressor
    - Median initial serum lactic acid
    - Positive blood culture
    - Time from arrival to hypotension
  - Rationale:
  - Reference: Eisenberg, M. A. et al. Outcomes of Patients with Sepsis
    in a Pediatric Emergency Department after Automated Sepsis
    Screening. The Journal of Pediatrics 235, 239-245.e4 (2021).
  - Reference: Eisenberg, M. et al. Comparison of Manual and Automated
    Sepsis Screening Tools in a Pediatric Emergency Department.
    Pediatrics 147, e2020022590 (2021).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Fairness and
Bias Management can be found in the CHAI RAIG)*

**Method/Metric:**

- **HOUsing-based SocioEconomic Status measure (HOUSES) Index**

  - Intended Use: compare balanced error rate (BER) against different
    socioeconomic status (SES) levels
  - Rationale:
  - Reference: `Assessing socioeconomic bias in machine learning
    algorithms in health care: a case study of the HOUSES
    index <https://pubmed.ncbi.nlm.nih.gov/35396996/>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Equality of Opportunity Difference (EOD)**

  - Intended Use: measures the deviation from the equality of
    opportunity, which means that the same proportion of each population
    receives the favorable outcome. This measure must be equal to 0 to
    be fair.
  - Rationale: depends only on the joint statistics of the predictor,
    the target and the protected attribute, but not on interpretation of
    individual features.
  - Reference: `Equality of Opportunity in Supervised
    Learning <https://arxiv.org/abs/1610.02413>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **balanced error rate (BER)**

  - Intended Use: average of the errors on each class: BER =
    0.5*(FP/(TN+FP) + FN/(FN+TP)), where: TP = True Positive; TN = True
    Negative; FP = False Positive; FN = False Negative.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Comparative Biases**

  - Intended Use: compare the biases of the general population, the
    specific population, and the data used
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Implement a process for identifying and recognizing model drift**

  - Intended Use: three main types of drift that should be acknowledged,
    monitored and mitigated: concept drift, data drift, label drift.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Safety and
Reliability can be found in the CHAI RAIG)*

**Method/Metric:**

- **False alarm rate**

  - Intended Use: probability that a detection decision of "yes" is made
    when the phenomena of interest is absent; specific quantitative
    measure of how often the algorithm generates false positives.
  - Rationale:
  - Reference: `False Alarm
    Rate <https://www.sciencedirect.com/topics/engineering/false-alarm-rate#:~:text=False%20alarm%20rate%20refers%20to,phenomena%20of%20interest%20is%20absent>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **False negative rate**

  - Intended Use: number of false negatives, divided by the number of
    all samples that are actually positives; specific quantitative
    measure of how often the algorithm fails to detect sepsis
  - Rationale:
  - Reference: `False Negative
    Rate <https://www.sciencedirect.com/topics/engineering/false-negative>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Proportion of patients who received IV antibiotics**

  - Intended Use: Retrospective cohort study comparing patients of a
    predefined age presenting to an ED who triggered a false-positive
    sepsis alert during 2 different n-month time periods: a silent alert
    period when alerts were generated but not visible to clinicians and
    an active alert period when alerts were visible.
  - Rationale: we recommend including this method/metric.
  - Reference: Baker, A. H. et al. Effect of a Sepsis Screening
    Algorithm on Care of Children with False-Positive Sepsis Alerts. The
    Journal of Pediatrics 231, 193-199.e1 (2021).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Admissions and LOS differences**

  - Intended Use 
  - Rationale:
  - Reference: Baker, A. H. et al. Effect of a Sepsis Screening
    Algorithm on Care of Children with False-Positive Sepsis Alerts. The
    Journal of Pediatrics 231, 193--199.e1 (2021).
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

  - **Model Interaction Data**

  - Intended Use: Assess user engagement with the model recommendations.
    For example, the acknowledgement reasons on a Best Practice
    Advisory.
  - Rationale: Drifts in user response to model recommendations may
    signal performance deterioration.
  - Reference: 
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Technical Support**

  - Intended Use: Point(s) of contact for clinical end-users to escalate
    model issues.
  - Rationale: Changes in the EHR may lead to critical failures in
    clinical decision support that are not identified via automated
    controls.
  - Reference: 
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):


Transparency, Intelligibility, and Accountability
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Transparency,
Intelligibility, and Accountability can be found in the CHAI RAIG)*

**Method/Metric:**

- **Random Forest**

  - Intended Use: identify the 10 most important features used in
    predictions and send those features to users to determine where to
    start the evaluation to explain output; users can focus on the data
    elements that can change the least to impact the prediction class.
    Store all predictions of the model for a specified time period to
    allow for ongoing monitoring of performance degradation
  - Rationale:
  - Reference: `Random
    Forest <https://meridian.allenpress.com/jim/article/47/1/31/131479/Random-Forest>`__
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Determine who on the care team is receiving alerts (components of screening)**

  - Intended Use: Automated alert followed by manual screening allows
    for additional transparency relative to completely automated
    solutions.
  - Rationale: 
  - Reference: 
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

Security and Privacy
~~~~~~~~~~~~~~~~~~~~

*(additional detail for the Responsible AI Principle of Security and
Privacy can be found in the CHAI RAIG)*

**Method/Metric:**

- **Locality of the assessment**

  - Intended Use: observe and characterize the stakeholders receiving
    information on patient. 
  - Rationale: human assessment of "minimum necessary" criteria. Only
    the care team of the patient review and receive information on
    sepsis alerts; the manual screen contains minimum necessary survey
    of patient data; and the action plan is a team huddle. All data
    stays in EHR system.
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Dynamic Post-implementation Audits**

  - Intended Use: include regularly updated security protocols based on
    new threats and emerging vulnerabilities.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Limiting Access to AI Models**

  - Intended Use: to mitigate privacy attacks, ensuring only authorized
    users have access to sensitive parts of the model and its output.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Intercepting AI Model Outputs**

  - Intended Use: leverage to counter security threats and prevent
    adversarial data extraction.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Input Filtering**

  - Intended Use: leverage to mitigate adversarial attacks, though
    acknowledging its potential weaknesses.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):

- **Authenticated Inputs or Inputs with Provenance**

  - Intended Use: leverage to defend against adversarial attacks,
    particularly in sensitive applications like imaging.
  - Rationale:
  - Reference:
  - Monitoring Cadence (Time Interval, Frequency, etc.):
  - Recommended Responsible Party for Monitoring
    (Developer/Implementer):
  - Recommended Notification of Significant Changes (Yes/No, Describe
    when notification of other party is recommended):
