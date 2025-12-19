Definitions
============

The below content is a list of definitions relevant to CHAI's Testing & Evaluation (T&E) Frameworks.

Method
-----------------
A method is the overarching approach or procedure used to evaluate a model or system. It encompasses the steps, techniques, and sometimes algorithms employed to carry out the evaluation. Methods guide how metrics and measures are applied and interpreted within an evaluation context. Note: methods can be formal/structured or informal/unstructured.

Examples: Cross-validation, A/B testing, or hold-out testing are all evaluation methods. For example, in a machine learning context, cross-validation is a method where data is split into multiple subsets to train and test the model repeatedly, providing a robust assessment of model performance.

Metric
-----------------
A metric is a specific quantitative or qualitative criterion or standard used to evaluate a particular aspect of performance. Metrics are derived values that help to summarize and communicate certain qualities of a model or system. Each metric corresponds to a measurable aspect of the performance and is selected based on the goals of the evaluation. Note: metrics can be quantitative or qualitative.

Examples: Accuracy, precision, recall, F1 score, mean squared error, and AUC (Area Under the Curve) are all metrics. For example, precision measures the proportion of true positive predictions among all positive predictions, making it useful for evaluating models where the cost of false positives is high.

Pre-Implementation
------------------
Pre-Implementation consists of the first four stages listed in the Assurance Standards Guide. These stages are Stage 1: Define Problem and Plan, Stage 2: Design the AI System, Stage 3: Engineer the AI System, and Stage 4: Assess the AI System. Each of these stages takes place prior to the AI system being implemented.

Stage 1 focuses on identifying the problem, stakeholder engagement, and a final decision and plan to build, buy, or partner for a solution. Stage 2 involves capturing system details, including technical requirements and deployment strategies. Stage 3 is the engineering phase, where the AI solution is created, configured, or modified, with a focus on preparing the data and training the AI model. Stage 4 consists of assessments and validations to determine readiness for piloting, including local validation, risk management, user training, and regulatory compliance checks. Across all stages, pre-implementation teams must collaborate across functional areas to evaluate the AI system to ensure a successful implementation.

Post-Implementation
-------------------
Post-Implementation consists of the last two stages listed in the Assurance Standards Guide. These stages are Stage 5: Pilot, and Stage 6: Deploy and Monitor. Both stages take place after the AI system is deployed and implemented.

Stage 5 is the first real-world use of the AI solution by the implementer team to inform large-scale deployment plans. Prior to the general deployment of an AI system, careful review and consideration must be made by the health system   to decide whether to deploy an AI model into production. Based on this pilot stage, success criteria are reviewed to inform the decision on whether to deploy the AI system. Stage 6 is the process of making the AI solution and system broadly available to the healthcare system or relevant specialty. Once deployed by the implementer team, the AI solution is often handed over to a model operations team (when available) to provide ongoing monitoring, retraining, and governance of models to ensure strong performance and that decisions are transparent.

Usefulness
-----------------
AI solution must provide a specific benefit to patients and/or healthcare delivery, and it must prove to be not only valid and reliable but usable and effective

Usability
-----------------
Connotes the quality of the user's experience, including effectiveness, efficiency, and satisfaction with the technology

Efficacy
-----------------
The ability to produce a desired or intended result

Fairness
-----------------
Measures whether an algorithm's output is equitable, impartial, and free from harmful stereotypes or biases

Bias Management
-----------------
General Bias: Distortion towards a particular perspective, outcome, or interpretation that can result from systemic, social, emotional, operational, or statistical tendencies and limitations  
Population Bias: When solutions duplicate social stereotypes, particularly toward protected groups -- based on gender, age, race, religion, social status, or others -- in a way that leads to reasoning errors
Data Bias: Skew in data collection (measured, unmeasured, unmeasurable, and more), sampling, transcriptions, or observer/interpretation which can lead to a limited and biased reflection of facts
Algorithmic or model bias: When an algorithm produces results that are systematically prejudiced due to improper feature selection or engineering, flawed assumptions in the algorithm's design, and improper training approaches, all of which can lead to unfair or discriminatory outcomes
Automation Bias: When a user defaults to the recommendations of a model without integration of additional (but necessary) information. This may result from time pressures, low energy levels, or workflow constraints

Safety
-----------------
Avoidance, prevention, and amelioration of AI-related adverse outcomes affecting patients, clinicians, and health systems

Reliability
-----------------
Extent the AI system can perform as required without failure, incorporating backup plans that ensure continuity, resilience, communication, accountability, and responsive action in the event of any issues

Energy/Resources
-----------------
Evaluate energy efficiency and resource optimization, minimizing environmental impact while balancing performance and cost-effectiveness

Developer
-----------------
Individuals involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)

Implementer
-----------------
Individuals responsible for the procurement, deployment, and/or overall realization of a system or component in accordance with a specified design (derived from IEEE 829 and IEEE 730)
