Testing and Evaluation (T&E) Framework
======================================

Included below are the CHAI Agentic AI Work Group’s recommended methods/metrics. Methods/metrics are categorized across Responsible AI principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Business and Financial.

**Note:** The benchmark values listed are reference points drawn from the cited literature, not universal pass/fail cut points. Expected performance will vary by care setting, specialty, workflow, and patient population. Organizations should calibrate thresholds to a local baseline and revisit them as use intensity and case mix change.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Autonomy Index (AIx)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: A standardized metric quantifying how much of a predefined workflow the agent completes correctly without direct human intervention, while staying within defined oversight, permission, and safety boundaries. It is measured as the fraction of reference task steps (defined by expert review or a set of acceptable plans rather than a single canonical path) completed independently and correctly when the study or evaluation suite defines those steps.
  - Intended Use: Evaluate whether an agentic AI system can handle delegated portions of a multi-step workflow while preserving appropriate escalation paths, correctness checks, and human control points.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: AlShikh, W., Sayed Ali, M., Kennedy, B., and Mozolevskyi, D. "Towards Outcome-Oriented, Task-Agnostic Evaluation of AI Agents." arXiv preprint arXiv:2511.08242, 2025. doi:10.48550/arXiv.2511.08242; Feng, K. J. K., McDonald, D. W., and Zhang, A. X. "Levels of Autonomy for AI Agents." arXiv preprint arXiv:2506.12469, 2025. doi:10.48550/arXiv.2506.12469; Madkour, N., Newman, J., Raman, D., Jackson, K., Murphy, E. R., and Yuan, C. "Agentic AI Risk-Management Standards Profile." Center for Long-Term Cybersecurity, University of California, Berkeley, 2026.
  - Benchmark: No universal AIx threshold is reported in the cited literature. Report the study-defined AIx value by task domain, model architecture, and autonomy level, with unsafe, policy-violating, or incorrectly completed autonomous steps reported separately.

- **Evaluation Dimension Coverage**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures whether an evaluation protocol covers the dimensions identified in the cited agent evaluation literature, including task completion, trajectory or behavior quality, tool use, reliability, safety, human-centered factors, latency, and economic assessment. The cited systematic review reports that technical metrics dominate current evaluations while human-centered, safety, and economic assessments are less frequently included.
  - Intended Use: Evaluate whether the assessment plan for an agentic AI system includes the evaluation dimensions needed for deployment decisions, rather than relying only on final-answer or task-success metrics.
  - Lifecycle Phase: Pre-deployment
  - Persona: Implementer
  - Supporting Literature: Meimandi, K. J., Aránguiz-Dias, G., Kim, G. R., Saadeddin, L., Griffith, A., and Kochenderfer, M. J. "The Measurement Imbalance in Agentic AI Evaluation Undermines Industry Productivity Claims." arXiv preprint arXiv:2506.02064, 2025. doi:10.48550/arXiv.2506.02064; Mohammadi, M., Li, Y., Lo, J., and Yip, W. "Evaluation and Benchmarking of LLM Agents: A Survey." Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2, 2025. doi:10.1145/3711896.3736570; Yehudai, A., Eden, L., Li, A., Uziel, G., Zhao, Y., Bar-Haim, R., Cohan, A., and Shmueli-Scheuer, M. "A Survey on Evaluation of LLM-based Agents." arXiv preprint arXiv:2503.16416, 2026. doi:10.48550/arXiv.2503.16416.
  - Benchmark: The cited review reports technical metrics in 83% of studies, human-centered assessments in 30%, safety assessments in 53%, economic assessments in 30%, and both technical and human dimensions in 15%. No BECS score or 0-1 threshold is reported.

- **Goal Completion Rate (GCR)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: The proportion of tasks where an agentic system successfully achieves the intended user or system goal in a multi-step environment. A task is successful if the final outcome and, where applicable, the final environment state align with a predefined ground-truth objective or expert-defined target state without unsafe, unauthorized, or policy-violating actions.
  - Intended Use: Quantitatively assess whether autonomous agentic AI delivers intended outcomes across open-ended, multi-step tasks in realistic workflows. GCR should be reported with trajectory, policy-compliance, and safety metrics because final success alone can hide risky intermediate behavior.
  - Lifecycle Phase: Pre-deployment benchmarking & ongoing performance monitoring.
  - Persona: Developer and Implementer
  - Supporting Literature: AlShikh, W., Sayed Ali, M., Kennedy, B., and Mozolevskyi, D. "Towards Outcome-Oriented, Task-Agnostic Evaluation of AI Agents." arXiv preprint arXiv:2511.08242, 2025. doi:10.48550/arXiv.2511.08242; Yao, S., Shinn, N., Razavi, P., and Narasimhan, K. "tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains." arXiv preprint arXiv:2406.12045, 2024. doi:10.48550/arXiv.2406.12045; Levy, I., Wiesel, B., Marreed, S., Oved, A., Yaeli, A., Mashkif, N., and Shlomov, S. "ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents." International Conference on Learning Representations, 2026. arXiv:2410.06703. doi:10.48550/arXiv.2410.06703.
  - Benchmark: AlShikh et al. report an average GCR of 88.8% for the Hybrid Agent in their simulated multi-domain experiment. tau-bench reports that state-of-the-art function calling agents such as gpt-4o succeed on fewer than 50% of tasks and that pass^8 is below 25% in retail. ST-WebAgentBench reports Completion under Policy separately from raw task success.

- **Task Success Rate in Multi-Step Clinical Agent Tasks (MedAgentBench)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures how consistently an agentic AI completes complex, clinically meaningful tasks in a realistic virtual EHR environment. Success is defined as correctly completing clinician-specified task goals involving retrieval, reasoning, and action execution in a standardized FHIR-compliant setting.
  - Intended Use: Evaluate whether an agentic AI system can reliably execute goal-directed clinical workflows rather than producing isolated medical answers. A major value of agents is crossing system boundaries; where possible, the simulation should occur within the EHR plus all relevant external systems — including wearables, patient voice communication, and external documents.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer
  - Supporting Literature: Jiang, Y., Black, K. C., Geng, G., Park, D., Zou, J., Ng, A. Y., and Chen, J. H. "MedAgentBench: A Virtual EHR Environment to Benchmark Medical LLM Agents." NEJM AI, 2025, 2(9), AIdbp2500144. doi:10.1056/AIdbp2500144; Liu, R., Mohiuddin, I. Q., Schoeffler, A. J., Renduchintala, K., Nayak, A., Vemu, P. L., Vedak, S. C., Black, K. C., Havlik, J. L., Ogunmola, I., Ma, S. P., Dhatt, R., and Chen, J. H. "PhysicianBench: Evaluating LLM Agents in Real-World EHR Environments." arXiv preprint arXiv:2605.02240, 2026. doi:10.48550/arXiv.2605.02240.
  - Benchmark: MedAgentBench reports 300 patient-specific clinically derived tasks from 10 categories, with Claude 3.5 Sonnet v2 achieving a 69.67% success rate. PhysicianBench reports 100 long-horizon EHR tasks with 670 structured checkpoints, with the best-performing model achieving 46% pass@1 and open-source models reaching at most 19%.

- **Task Success Rate in WebArena Autonomous Task Benchmark**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the percentage of autonomous tasks successfully completed by an agent in a realistic web environment. Tasks span domains such as e-commerce actions, forum interactions, collaborative content management, and browsing activities. Success is defined as correct end-to-end task completion, not just isolated steps.
  - Intended Use: Evaluate whether an agentic AI can function reliably in real-world environments requiring planning, tool use, state tracking, and sequential decision-making. Use alongside policy-compliance and safety metrics when the environment includes rules, permissions, or enterprise constraints.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer
  - Supporting Literature: Zhou, S., Xu, F. F., Zhu, H., Zhou, X., Lo, R., Sridhar, A., Cheng, X., Ou, T., Bisk, Y., Fried, D., Alon, U., and Neubig, G. "WebArena: A Realistic Web Environment for Building Autonomous Agents." arXiv preprint arXiv:2307.13854, 2023. doi:10.48550/arXiv.2307.13854; Levy, I., Wiesel, B., Marreed, S., Oved, A., Yaeli, A., Mashkif, N., and Shlomov, S. "ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents." International Conference on Learning Representations, 2026. arXiv:2410.06703. doi:10.48550/arXiv.2410.06703.
  - Benchmark: WebArena reports that the best GPT-4-based agent achieved 14.41% end-to-end task success, compared with 78.24% human performance. ST-WebAgentBench evaluates 222 policy-paired tasks and reports Completion under Policy and Risk Ratio rather than a universal 50% target.

- **User Satisfaction and Human-Centered Feedback Measures**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Captures whether the evaluation includes user-facing measures such as satisfaction, perceived usefulness, workload, usability, or structured qualitative feedback. The cited review identifies human-centered assessment as underrepresented in agentic AI evaluations, rather than reporting a universal CSAT or NPS threshold.
  - Intended Use: Evaluate whether the agent's outputs and behaviors are assessed from the user perspective and identify usability issues that technical benchmarks miss. User feedback should be interpreted alongside correctness, safety, and policy adherence, not as a substitute for them. Satisfaction is dynamic, and because of hedonic adaptation, it should be measured longitudinally rather than at a single point.
  - Lifecycle Phase: Post-deployment monitoring
  - Persona: Implementer
  - Supporting Literature: Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awadallah, A. H., White, R. W., Burger, D., and Wang, C. "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation." arXiv preprint arXiv:2308.08155, 2023. doi:10.48550/arXiv.2308.08155; Meimandi, K. J., Aránguiz-Dias, G., Kim, G. R., Saadeddin, L., Griffith, A., and Kochenderfer, M. J. "The Measurement Imbalance in Agentic AI Evaluation Undermines Industry Productivity Claims." arXiv preprint arXiv:2506.02064, 2025. doi:10.48550/arXiv.2506.02064.
  - Benchmark: The cited review reports human-centered assessments in 30% of studies and both technical and human dimensions in 15%. No CSAT >= 80%, NPS, or USS >= 0.8 threshold is reported.

- **End-to-End Clinical Agent Response Latency (seconds)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures elapsed time between user case submission and receipt of AI-generated case-specific psychological first aid recommendations in a deployed recommendation app for rescue and first responders. The study reports live-system response times rather than simulated inference-only latency.
  - Intended Use: Evaluate whether a deployed clinical or emergency-response recommendation agent returns outputs quickly enough for operational use and monitor whether infrastructure delay changes after deployment.
  - Lifecycle Phase: Both
  - Persona: Implementer
  - Supporting Literature: Schwartz Tayri, T. M., Cohen-Inger, N., Seadia, O., Gal, A., and Vilenchik, D. "A Case-Specific Psychological First Aid AI Recommendations App for Rescue and First Responders." European Journal of Psychotraumatology, 16(1), Article 2591567, 2025. doi:10.1080/20008066.2025.2591567.
  - Benchmark: Observed end-to-end response time ranged from 5 to 7 seconds under live deployment conditions.

- **Triage Appropriateness Rate**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the proportion of AI-assisted emergency triage decisions that correctly prioritized patient urgency compared with traditional triage and clinical outcome assessment. The study compared 150 AI-assisted triage cases with 150 traditional triage cases.
  - Intended Use: Evaluate whether an AI triage tool assigns patients to appropriate urgency levels before integration into emergency department workflows.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Paul, N., Jani, P., Pandya, N., Podder, A., Singh, M., and Chango Rodriguez, C. A. "Evaluation of AI Tools for Triage and Risk Stratification in Emergency Medicine." Bioinformation, 21(10), 3804-3808, 2025. doi:10.6026/973206300213804.
  - Benchmark: AI-assisted triage accuracy was 89.3% compared with 74.7% for traditional triage, p < 0.001.

- **Summarization Editing Effort Reduction**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures editing effort required for resident physicians to revise large language model-generated hospital course summaries compared with physician-generated summaries. Editing effort was reported as the mean percentage of text changed during revision toward a predefined quality standard.
  - Intended Use: Evaluate whether EHR-based summarization reduces physician editing burden while preserving hospital course summary quality requirements.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Small, W. R., Austrian, J., O'Donnell, L., et al. "Evaluating Hospital Course Summarization by an Electronic Health Record-Based Large Language Model." JAMA Network Open, 8(8), e2526339, 2025. doi:10.1001/jamanetworkopen.2025.26339.
  - Benchmark: LLM-generated hospital course drafts required 31.5% mean editing compared with 44.8% for physician-generated drafts.

- **Proportion of Errors Auto-Corrected**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the share of objective mistakes identified in published AI papers for which an AI checker proposed a correct fix. The cited paper evaluates paper-level research integrity checking, not clinical documentation correction.
  - Intended Use: Evaluate automated error-detection workflows where a system flags objective errors and proposes corrections for expert review.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Bianchi, F., Kwon, Y., Izzo, Z., Zhang, L., and Zou, J. "To Err Is Human: Systematic Quantification of Errors in Published AI Papers via LLM Analysis." arXiv preprint arXiv:2512.05925, 2025. doi:10.48550/arXiv.2512.05925.
  - Benchmark: Human experts confirmed 263 of 316 AI Checker-flagged mistakes as actual mistakes, giving 83.2% precision. The AI Checker proposed correct fixes for 75.8% of identified mistakes.

- **Claim Recall for Summary Factual Coverage**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures completeness of generated medical aspect-based summaries against annotated claim or aspect content, paired with sentence-level traceability to source evidence. The cited TracSum benchmark contains 500 medical abstracts and 3.5K summary-citation pairs.
  - Intended Use: Evaluate whether generated clinical or biomedical summaries cover required factual claims and provide traceable source support.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Chu, B., Li, M., Frihat, S., Gu, C., Lodde, G., Livingstone, E., and Fuhr, N. "TracSum: A New Benchmark for Aspect-Based Summarization with Sentence-Level Traceability in Medical Domain." Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, 2025. doi:10.18653/v1/2025.emnlp-main.43.
  - Benchmark: The study reports TracSum as a benchmark with 500 annotated medical abstracts and 3.5K summary-citation pairs. No universal Claim Recall threshold is reported.

- **Number of Integrated Wearable / RPM Device Types**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Counts the types of remote monitoring data streams integrated into an autonomous health monitoring prototype. REMONI processes vital signs, accelerometer data from a wearable device, and visual data from patient video clips.
  - Intended Use: Evaluate whether a remote patient monitoring agent ingests the sensor modalities required for the intended monitoring workflow.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Ho, T. C., Kharrat, F., Abid, A., and Karray, F. "REMONI: An Autonomous System Integrating Wearables and Multimodal Large Language Models for Enhanced Remote Health Monitoring." 2024 IEEE International Symposium on Medical Measurements and Applications, 2024. doi:10.1109/MeMeA60663.2024.10596778.
  - Benchmark: The prototype integrates vital signs, wearable accelerometer data, and visual camera or video data. No minimum device-count threshold is reported.

- **Per-Record Processing Time (seconds)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures computational efficiency for a web-based machine learning model by timing prediction latency, memory use, and per-record processing time during repeated batch testing.
  - Intended Use: Evaluate whether a deployed clinical prediction model can process patient records within operational latency constraints.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Li, J., He, M., et al. "Development and Validation of a Web-Based Machine Learning Model for Predicting Early Neurological Deterioration Following Stroke Thrombolysis: Multicenter Study." Journal of Medical Internet Research, 27, e77858, 2025. doi:10.2196/77858.
  - Benchmark: Mean prediction latency was 0.0177 seconds with SD 0.0021, memory utilization was 88.80 MB with SD 0.01, per-record processing time was 0.18 ms, and coefficient of variation was <5%.

- **Milestone Achievement Rate (Multi-Agent Coordination KPI)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures whether multi-agent coordination processes reach predefined intermediate milestones during collaborative task execution. The supplied source describes multi-agent coordination evaluation rather than establishing a universal milestone threshold.
  - Intended Use: Evaluate progress in multi-agent workflows where final task success depends on staged coordination checkpoints.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Zhang, H., et al. "A Survey of Multi-Agent Coordination for LLM-Based Agents." arXiv preprint arXiv:2503.01935, 2025. doi:10.48550/arXiv.2503.01935.
  - Benchmark: No universal numeric threshold is reported in the cited source. Use task-defined milestones and report the proportion achieved.

- **Cost-per-Success (Cost-of-Pass)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Average operational cost required for an agent to successfully complete one task, computed as total inference, retry, tool, and infrastructure cost divided by number of successfully completed tasks. Captures whether an agentic system is economically sustainable at scale rather than only technically capable.
  - Intended Use: Evaluate whether an agentic AI system can achieve required task success rates under realistic production constraints, including tool use, multi-step planning, retries, and monitoring overhead.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Wang, N., Hu, X., Liu, P., Zhu, H., Hou, Y., Huang, H., Zhang, S., Yang, J., Liu, J., Zhang, G., Zhang, C., Wang, J., Jiang, Y. E., and Zhou, W. "Efficient Agents: Building Effective Agents While Reducing Cost." arXiv preprint arXiv:2508.02694, 2025. doi:10.48550/arXiv.2508.02694; Meimandi, K. J., Aránguiz-Dias, G., Kim, G. R., Saadeddin, L., Griffith, A., and Kochenderfer, M. J. "The Measurement Imbalance in Agentic AI Evaluation Undermines Industry Productivity Claims." arXiv preprint arXiv:2506.02064, 2025. doi:10.48550/arXiv.2506.02064.
  - Benchmark: The cited Efficient Agents study reports cost-of-pass of $0.228 in its evaluation setting. Outside that setting, establish a local baseline and require cost-per-success to improve without reducing safety, fairness, or policy-compliant task completion.

- **Slot Extraction F1 Score (SEF1)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the harmonic mean of precision and recall for entity-level slot extraction by a conversational agent, computed as 2 x precision x recall / (precision + recall). The cited study evaluates lenient precision, recall, and F1 for LLM-based slot filling over conversational dialogue datasets after inverse text normalization.
  - Intended Use: Evaluate whether a voice scheduling agent captures structured patient information, such as name, date of birth, insurance information, and requested scheduling details, before downstream booking actions.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Rana, M., Hacioglu, K., Gopalan, S., and Boothalingam, M. "Zero-shot Slot Filling in the Age of LLMs for Dialogue Systems." arXiv preprint arXiv:2411.18980, 2024. doi:10.48550/arXiv.2411.18980.
  - Benchmark: Fine-tuned Llama 3 8B achieved average F1 of 0.77 across the main test datasets and 0.78 when trained with both LLM-generated and human annotations. The study reports a 26 percentage-point absolute F1 increase over vanilla LLMs and a 34% relative F1 improvement over off-the-shelf extractive models. No healthcare-scheduling-specific SEF1 threshold is reported.

- **Call Abandonment Rate (CAR)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the proportion of inbound patient calls in which the caller disconnects before task completion, computed as abandoned calls divided by total inbound calls handled by the agent. The supplied citation evaluates e-health service use and does not measure call abandonment.
  - Intended Use: Monitor whether a deployed voice scheduling agent loses callers before appointment booking, information delivery, or handoff completion.
  - Lifecycle Phase: Post-implementation
  - Persona: Implementer
  - Supporting Literature: Hsu, J., Huang, J., Kinsman, J., Fireman, B., Miller, R., Selby, J., and Ortiz, E. "Use of e-Health Services between 1999 and 2002: A Growing Digital Divide." Journal of the American Medical Informatics Association, 2005, 12(2), 164-171. doi:10.1197/jamia.M1672.
  - Benchmark: The supplied citation does not report call abandonment rate or the 5% and 8% thresholds. A different peer-reviewed call-center or healthcare access study is required before using a numeric benchmark.

- **Top-k Symptom-to-Visit Type Mapping Accuracy (Workflow Gap)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures whether the correct visit type derived from patient-described natural language input appears within the top k predicted outputs. The cited study evaluates classification of patient self-reported symptom and need text into structured clinical categories; it supports text-to-category classification as a proxy, not visit-type matching directly.
  - Intended Use: Evaluate whether a voice scheduling agent maps patient-described symptoms to the correct scheduling category, visit type, or routing queue.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Naved, B. A., Ravishankar, S., Colbert, G. E., Johnston, A., Slott, Q. M., and Luo, Y. "LLM Enabled Classification of Patient Self-Reported Symptoms and Needs in Health Systems across the USA." npj Digital Medicine, 2025, 8(1), Article 390. doi:10.1038/s41746-025-01779-9.
  - Benchmark: The study reports classification performance for patient self-reported symptom and need text, but it does not define a top-k visit-type benchmark. Use top-k accuracy only against locally annotated scheduling labels; the cited study should be treated as proxy evidence for the text-classification task.

- **Legal Agent Intermediate Progress Rate (LAIPR)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the proportion of intermediate reasoning and tool-use steps completed before a final answer on multi-hop legal tasks. The cited benchmark defines legal-agent tasks over corpora and tools and reports intermediate progress rates to capture partial completion beyond final success.
  - Intended Use: Evaluate step-level progress in legal agent workflows, such as case retrieval, rule identification, judgment prediction, and regulatory cross-reference tasks.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Li, H., Chen, J., Yang, J., Ai, Q., Jia, W., Liu, Y., Lin, K., Wu, Y., Yuan, G., Hu, Y., Wang, W., Liu, Y., and Huang, M. "LegalAgentBench: Evaluating LLM Agents in Legal Domain." Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics, 2025, 2322-2344. doi:10.18653/v1/2025.acl-long.116.
  - Benchmark: LegalAgentBench reports 300 annotated tasks spanning 17 legal corpora and 37 tools and computes intermediate progress rate through keyword-based intermediate-step analysis. The cited source reports progress by model and task setting, not a universal deployment threshold.

- **Patient-Reported Experience Score (Post-Call Voice Survey)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures patient-reported ratings after an agent interaction across domains such as ease of scheduling, clarity of communication, and perceived request resolution. The cited systematic review evaluates survey administration strategies for response rates and representativeness, not AI voice-agent experience scores directly.
  - Intended Use: Compare post-call patient experience across agent-handled, human-handled, and mixed scheduling workflows and detect experience degradation after deployment changes.
  - Lifecycle Phase: Post-implementation
  - Persona: Implementer
  - Supporting Literature: Price, R. A., Quigley, D. D., Hargraves, J. L., Sorra, J., Becerra-Ornelas, A. U., Hays, R. D., Cleary, P. D., Brown, J., and Elliott, M. N. "A Systematic Review of Strategies to Enhance Response Rates and Representativeness of Patient Experience Surveys." Medical Care, 2022, 60(12), 910-918. doi:10.1097/MLR.0000000000001784.
  - Benchmark: The cited review reports evidence on patient-experience survey administration methods, response rates, and representativeness. It does not report an AI voice-agent top-box threshold or validate a post-call IVR score benchmark.

- **Provider Preference Match Rate (Workflow Gap)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures the proportion of scheduled appointments where the assigned provider matches the patient's stated or historically inferred provider preference. The cited scheduling study evaluates appointment scheduling under patient preferences and no-show behavior, not a standardized provider-match-rate metric.
  - Intended Use: Evaluate whether a scheduling agent incorporates patient provider, location, continuity-of-care, or provider-type preferences when booking appointments.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Feldman, J., Liu, N., Topaloglu, H., and Ziya, S. "Appointment Scheduling under Patient Preference and No-Show Behavior." Operations Research, 2014, 62(4), 794-811. doi:10.1287/opre.2014.1286.
  - Benchmark: The cited study supports preference-aware scheduling as an optimization problem. It does not report a fixed provider preference match-rate benchmark.

- **Cost per Successful Task (CLEAR Framework)**

  - Responsible AI Principle: Usefulness, Usability, and Efficacy
  - Description: Measures total computational or monetary cost incurred to achieve successful task outcomes, computed as total cost across task executions divided by the number of successfully completed tasks. CLEAR evaluates cost alongside latency, efficacy, accuracy, and reliability.
  - Intended Use: Compare agentic systems that achieve similar task success but require different inference, retry, tool-use, or infrastructure cost.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Mehta, S. "CLEAR: Cost, Latency, Efficacy, Accuracy, and Reliability in Agent Evaluation." arXiv preprint arXiv:2511.14136, 2025. doi:10.48550/arXiv.2511.14136.
  - Benchmark: The study does not define a fixed numeric cost threshold. It reports up to 50-fold cost variation and that cost-aware alternatives can be 4.4x to 10.8x less expensive than accuracy-only choices under comparable evaluation settings.


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Counterfactual Unfairness Level**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Measures policy unfairness in sequential decision-making as the degree to which the agent's action allocation would change under a counterfactual change to a protected attribute, holding causal non-sensitive drivers constant. Evaluated at the policy or trajectory level, not only at the level of isolated predictions.
  - Intended Use: Assess whether an agentic AI policy, such as an offline reinforcement learning (RL) or sequential decision agent, allocates actions fairly across protected groups in settings where decisions compound over time.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Zhang, J., Wang, J., Shi, C., Piette, J. D., Zeng, D., and Wu, Z. "PyCFRL: A Python library for counterfactually fair offline reinforcement learning via sequential data preprocessing." arXiv preprint arXiv:2510.06935, 2025.
  - Benchmark: per the Supporting Literature, Counterfactual Unfairness Level <= 0.05. PyCFRL example: baseline policies reported unfairness 0.407 "Full" and 0.446 "Unaware", while the counterfactually fair method achieved 0.042.

- **Fairness Constraint Evaluation**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Assesses whether defined fairness constraints are incorporated into the multi-agent decision framework and empirically evaluated for equitable outcomes. The cited paper discusses fairness constraints, bias mitigation strategies, and incentive mechanisms, but does not define a decision-level Fairness Constraint Satisfaction Rate threshold.
  - Intended Use: Assess whether agentic AI systems include explicit fairness constraints during autonomous decision processes and whether those constraints are evaluated during testing.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Ranjan, R., Gupta, S., and Singh, S. N. "Fairness in Agentic AI: A Unified Framework for Ethical and Equitable Multi-Agent System." arXiv preprint arXiv:2502.07254, 2025. doi:10.48550/arXiv.2502.07254.
  - Benchmark: No specific FCSR benchmark is reported. Report the fairness constraints evaluated, the decision context, protected attributes, and observed constraint violations where the study or evaluation protocol defines them.

- **Multi-Agent Demographic Parity Fairness Score**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Quantifies fairness across groups of agents, or outcomes for populations influenced by agentic decisions, by measuring whether protected attributes have no systematic advantage in expected rewards, outcomes, or benefits assigned by agent actions. Adapted from demographic parity definitions into a multi-agent interaction context.
  - Intended Use: Assess whether an agentic AI's policies create systemic outcome disparities across groups when executing multi-step decision processes, such as resource allocation, triage, routing, or recommendation actions.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: La Malfa, G., Zhang, J. M., Luck, M., and Black, E. "Using Protected Attributes to Consider Fairness in Multi-Agent Systems." arXiv preprint arXiv:2410.12889, 2024. doi:10.48550/arXiv.2410.12889.
  - Benchmark: The cited paper adapts demographic parity, counterfactual fairness, and conditional statistical parity to multi-agent systems. It does not report a universal +/-5% tolerance threshold.

- **Predictive Parity Ratio**

  - Responsible AI Principle: Fairness and Bias Management
  - Description: Ratio of positive predictive values (PPV) for a key binary agentic decision outcome across protected groups. PPV is defined as the proportion of correct positive outcomes among all positive decisions for each group. The PPR = min(PPV_i / PPV_j) across all group pairs for a protected attribute.
  - Intended Use: Assess whether positive decisions made autonomously by an agentic AI are equally reliable across demographic subgroups, especially when agent actions produce clinically or operationally meaningful binary outcomes.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Chen, R. J., Wang, J. J., Williamson, D. F. K., Chen, T. Y., Lipkova, J., Lu, M. Y., Sahai, S., and Mahmood, F. "Algorithmic fairness in artificial intelligence for medicine and healthcare." Nature Biomedical Engineering, 2023, 7(6), 719-742. doi:10.1038/s41551-023-01056-8.
  - Benchmark: No PPR >= 0.9 threshold is reported in the cited article. Report PPV by group and the resulting predictive parity ratio or disparity across prespecified protected attributes.


Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

- **Human Oversight and Intervention Configuration**

  - Responsible AI Principle: Safety and Reliability
  - Description: Documents whether an agentic system is configured to use human input, correction, approval, or oversight during task execution. The cited literature supports human-in-the-loop modes and risk controls for agentic AI, but does not report a quantitative Human Intervention Rate benchmark.
  - Intended Use: Identify where human input or review is required to keep an agentic AI system functional, controlled, and aligned with workflow permissions. Human intervention should not be treated as uniformly undesirable in healthcare. Distinguish (1) required policy-based review, (2) appropriate safety- or uncertainty-driven escalation, and (3) failure-related rescue or correction. Report these categories separately.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awadallah, A. H., White, R. W., Burger, D., and Wang, C. "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation." arXiv preprint arXiv:2308.08155, 2023. doi:10.48550/arXiv.2308.08155; Madkour, N., Newman, J., Raman, D., Jackson, K., Murphy, E. R., and Yuan, C. "Agentic AI Risk-Management Standards Profile." Center for Long-Term Cybersecurity, University of California, Berkeley, 2026.
  - Benchmark: No specific benchmark

- **Policy-Compliant Task Completion Rate (Completion under Policies)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the share of tasks the agent completes while also satisfying required policies, permissions, and workflow constraints. A task only counts as successful if the final outcome is correct and the agent's intermediate actions, tool calls, and state changes comply with applicable rules.
  - Intended Use: Evaluate whether an agent can achieve goals without cutting corners, bypassing controls, exposing data, or violating enterprise or clinical workflow rules during multi-step execution.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Levy, I., Wiesel, B., Marreed, S., Oved, A., Yaeli, A., Mashkif, N., and Shlomov, S. "ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents." International Conference on Learning Representations, 2026. arXiv:2410.06703. doi:10.48550/arXiv.2410.06703; Yao, S., Shinn, N., Razavi, P., and Narasimhan, K. "tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains." arXiv preprint arXiv:2406.12045, 2024. doi:10.48550/arXiv.2406.12045.
  - Benchmark: ST-WebAgentBench reports Completion under Policy across 222 tasks and Risk Ratio across safety and trustworthiness dimensions. Report CuP as (# tasks completed with zero policy violations) / (total evaluated tasks), with violations stratified by severity and policy category.

- **Constraint Violation Rate (CVR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures how often an agentic AI violates formal outcome, safety, legal, ethical, or workflow constraints during multi-step tasks where certain behaviors are prohibited. A lower CVR indicates stronger adherence to constraints under realistic task pressure.
  - Intended Use: Empirically quantify the frequency at which an autonomous agent breaches critical rules when optimizing for task goals, capturing misalignment between performance incentives and compliant behavior.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Li, M. Q., Fung, B. C. M., Weiss, M., Xiong, P., Al-Hussaeni, K., and Fachkha, C. "A Benchmark for Evaluating Outcome-Driven Constraint Violations in Autonomous AI Agents." arXiv preprint arXiv:2512.20798, 2025. doi:10.48550/arXiv.2512.20798; Levy, I., Wiesel, B., Marreed, S., Oved, A., Yaeli, A., Mashkif, N., and Shlomov, S. "ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents." International Conference on Learning Representations, 2026. arXiv:2410.06703. doi:10.48550/arXiv.2410.06703.
  - Benchmark: Li et al. report outcome-driven constraint violation rates ranging from 0.0% to 62.8% across 12 LLMs, with most evaluated models at or above 25%. No universal CVR <= 0.10 threshold is reported.

- **Safety Risk Category Coverage**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures whether agent safety evaluation covers defined risk categories and failure modes such as unsafe actions, harmful outputs, privacy violations, robustness failures, and risk-unaware behavior. The cited preprint proposes harm-reduction indices conceptually, while Agent-SafetyBench operationalizes safety evaluation through risk categories and test cases.
  - Intended Use: Evaluate whether an agentic AI safety test suite includes the risk categories and failure modes needed to characterize unsafe outputs and actions before deployment.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Shukla, M. "Evaluating Agentic AI Systems: A Balanced Framework for Performance, Robustness, Safety and Beyond." Preprints.org, 2025. doi:10.20944/preprints202508.1847.v1; Zhang, Z., Cui, S., Lu, Y., Zhou, J., Yang, J., Wang, H., and Huang, M. "Agent-SafetyBench: Evaluating the Safety of LLM Agents." arXiv preprint arXiv:2412.14470, 2024. doi:10.48550/arXiv.2412.14470.
  - Benchmark: No validated HRI >= 0.90 threshold is reported. Agent-SafetyBench evaluates 2,000 test cases across 349 environments, 8 safety-risk categories, and 10 common failure modes.

- **Safety Score (Agent-SafetyBench)**

  - Responsible AI Principle: Safety and Reliability
  - Description: A safety metric derived from Agent-SafetyBench that evaluates agentic systems across realistic interactive environments. It measures the percentage of tasks completed without triggering defined safety failure modes such as unsafe actions, harmful outputs, privacy violations, or risk-unsound behavior.
  - Intended Use: Empirically quantify how reliably an agentic AI avoids unsafe behavior while performing multi-turn interactive tasks and tool use in diverse scenarios.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Zhang, Z., Cui, S., Lu, Y., Zhou, J., Yang, J., Wang, H., and Huang, M. "Agent-SafetyBench: Evaluating the Safety of LLM Agents." arXiv preprint arXiv:2412.14470, 2024. doi:10.48550/arXiv.2412.14470.
  - Benchmark: Agent-SafetyBench contains 2,000 test cases across 349 environments, evaluates 8 categories of safety risks, and covers 10 common failure modes. The study reports that none of the 16 evaluated LLM agents achieved a safety score above 60%, so 60% should not be treated as a target threshold.

- **Clinical Agent Task Success and Checkpoint Completion**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures whether clinical LLM agents complete EHR-grounded clinical tasks and intermediate checkpoints defined by benchmark authors or clinician reviewers. The cited clinical agent studies report task success, pass@1, and structured checkpoint completion rather than a combined TLSCAS metric.
  - Intended Use: Evaluate whether agentic AI systems for clinical workflows can retrieve data, reason over patient records, execute required actions, and complete clinician-defined workflow objectives before deployment or during benchmark comparison.
  - Lifecycle Phase: Pre-deployment & ongoing monitoring
  - Persona: Developer and Implementer
  - Supporting Literature: Gorenshtein, A., Omar, M., Glicksberg, B. S., Nadkarni, G. N., and Klang, E. "AI Agents in Clinical Medicine: A Systematic Review." medRxiv preprint, 2025. doi:10.1101/2025.08.22.25334232; Jiang, Y., Black, K. C., Geng, G., Park, D., Zou, J., Ng, A. Y., and Chen, J. H. "MedAgentBench: A Virtual EHR Environment to Benchmark Medical LLM Agents." NEJM AI, 2025, 2(9), AIdbp2500144. doi:10.1056/AIdbp2500144; Liu, R., Mohiuddin, I. Q., Schoeffler, A. J., Renduchintala, K., Nayak, A., Vemu, P. L., Vedak, S. C., Black, K. C., Havlik, J. L., Ogunmola, I., Ma, S. P., Dhatt, R., and Chen, J. H. "PhysicianBench: Evaluating LLM Agents in Real-World EHR Environments." arXiv preprint arXiv:2605.02240, 2026. doi:10.48550/arXiv.2605.02240.
  - Benchmark: MedAgentBench reports Claude 3.5 Sonnet v2 at 69.67% success on 300 clinically derived EHR tasks. PhysicianBench reports 100 long-horizon EHR tasks with 670 structured checkpoints, with the best model achieving 46% pass@1 and open-source models reaching at most 19%. No TLSCAS >= 0.95 benchmark is reported.

- **Plan Adherence Score (PAS)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures whether agent plans and actions remain aligned with stated goals using the Agent GPA framework. The cited study evaluates goal, plan, and action alignment with LLM judges across public and enterprise agent settings.
  - Intended Use: Evaluate whether an agent follows its intended goal-plan-action structure during multi-step execution and identify where failures occur.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Jia, A. S., Huang, D., Vytla, N., Yoo, S. W., Choudhury, N., Sen, S., Mitchell, J. C., and Datta, A. "What Is Your Agent's GPA? A Framework for Evaluating Agent Goal-Plan-Action Alignment." arXiv preprint arXiv:2510.08847, 2026. doi:10.48550/arXiv.2510.08847.
  - Benchmark: The cited study reports that Agent GPA identified 95% of human-annotated errors, localized 86% of human-annotated errors, and achieved 76% to 86% error coverage for GPA judges. No PAS >= 0.85 threshold is reported.

- **Step Correctness Rate (SCR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures step-level process quality in tool-using agent trajectories using human-labeled step annotations. AgentProcessBench evaluates 1,000 trajectories with 8,509 human-labeled steps and 89.1% inter-annotator agreement.
  - Intended Use: Evaluate whether intermediate tool-use steps are correct before relying on final task completion as the only performance measure.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Fan, S., Ye, X., Huo, Y., Chen, Z.-Y., Guo, Y., Yang, S., Yang, W., Ye, S., Chen, J., Chen, H., Cong, X., and Lin, Y. "AgentProcessBench: Diagnosing Step-Level Process Quality in Tool-Using Agents." arXiv preprint arXiv:2603.14465, 2026. doi:10.48550/arXiv.2603.14465.
  - Benchmark: AgentProcessBench reports 1,000 trajectories, 8,509 human-labeled step annotations, and 89.1% inter-annotator agreement. No SCR >= 0.80 deployment threshold is reported.

- **Planning Efficiency Index (PEI)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the efficiency of an agent trajectory by comparing the number of steps or tool calls used against a task-specific reference path. The supplied source could not be verified as a peer-reviewed paper from the provided download link.
  - Intended Use: Evaluate whether an agent completes tasks without unnecessary planning or tool-use overhead when a task-specific reference path is available.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Citation could not be verified from the supplied Preprints.org download link. The row was retained as a candidate metric and the benchmark was rewritten to avoid unsupported thresholds.
  - Benchmark: No verified benchmark could be extracted from the supplied source link. Do not use the PEI >= 0.70 threshold without a supporting study.

- **Goal Adherence Score (GAS)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures whether a language model agent maintains adherence to its assigned objective over extended autonomous execution. The cited report evaluates goal drift by exposing agents to competing objectives and measuring deviation from the original goal.
  - Intended Use: Evaluate whether long-horizon agent behavior remains consistent with the assigned goal when environmental pressure creates competing objectives.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Arike, R., Donoway, E., Bartsch, H., and Hobbhahn, M. "Technical Report: Evaluating Goal Drift in Language Model Agents." arXiv preprint arXiv:2505.02709, 2025. doi:10.48550/arXiv.2505.02709.
  - Benchmark: The cited report does not define a universal GAS threshold. Report the study-specific goal drift or deviation measure for each agent and task setting.

- **Intraclass Correlation Coefficient (ICC) for Agent Consistency**

  - Responsible AI Principle: Safety and Reliability
  - Description: Uses intraclass correlation coefficient to quantify evaluation inconsistency in repeated agentic benchmark runs by decomposing variance into between-query and within-query components.
  - Intended Use: Assess whether reported agent performance is stable across repeated evaluations rather than driven by stochastic variation.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Mustahsan, Z., Lim, A., Anand, M., Jain, S., and McCann, B. "Stochasticity in Agentic Evaluations: Quantifying Inconsistency with Intraclass Correlation." arXiv preprint arXiv:2512.06710, 2025. doi:10.48550/arXiv.2512.06710.
  - Benchmark: The cited study proposes ICC for agentic evaluation reliability. No universal ICC >= 0.70 or ICC >= 0.80 threshold for agent deployment is reported.

- **Standard Deviation of Task Success Rate (SD-TSR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the variability in an agent's task success rate across repeated independent runs of the same evaluation set. In the study, success rates (pass@1) are computed over multiple runs per task, and standard deviation quantifies run-to-run variability caused by stochastic generation and environment interaction.
  - Intended Use: Quantify how much an agent's performance fluctuates across repeated executions so reported success rates can be interpreted with variance estimates rather than single-run point estimates.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Bjarnason, B. H., Silva, A., and Monperrus, M. "On Randomness in Agentic Evals." Published at ICLR 2026 Workshop on Agents in the Wild. arXiv preprint arXiv:2602.07150, 2026. doi:10.48550/arXiv.2602.07150.
  - Benchmark: The study reports that single-run pass@1 estimates vary by 2.2 to 6.0 percentage points depending on the selected run, with standard deviations exceeding 1.5 percentage points even at temperature 0. No universal SD-TSR pass/fail threshold is reported.

- **Tool Selection Accuracy (TSA)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures an agent's ability to select appropriate tools from candidate lists that include distractor tools. MCPAgentBench evaluates real-world MCP tool definitions, authentic tasks, simulated MCP tools, task completion rates, and execution efficiency.
  - Intended Use: Evaluate whether a tool-using agent selects the correct external tool before invocation in realistic tool environments.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Liu, W., Liu, Z., Dai, E., Yu, W., Yu, L., Yang, T., Han, J., and Gao, H. "MCPAgentBench: A Real-World Task Benchmark for Evaluating LLM Agent MCP Tool Use." arXiv preprint arXiv:2512.24565, 2026. doi:10.48550/arXiv.2512.24565.
  - Benchmark: MCPAgentBench introduces authentic tasks, simulated MCP tools, distractor tool lists, task completion rates, and execution efficiency metrics. No universal TSA >= 0.80 threshold is reported.

- **Tool Invocation Correctness (TIC)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures correctness of function or API calls generated by a language model using benchmark-defined evaluation methods such as abstract syntax tree comparison across real-world function-calling settings.
  - Intended Use: Evaluate whether an agent produces valid and correct tool invocations before connecting it to production APIs or clinical tools.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Patil, S. G., Mao, H., Yan, F., Ji, C. C.-J., Suresh, V., Stoica, I., and Gonzalez, J. E. "The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models." Proceedings of the 42nd International Conference on Machine Learning, PMLR 267:48371-48392, 2025.
  - Benchmark: BFCL evaluates serial and parallel function calls across programming languages using AST-based evaluation. No universal TIC >= 0.85 threshold is reported.

- **TESR (Tool Execution Success Rate)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures whether tool-augmented agent runs execute required tools successfully in a real-world runnable benchmark. The cited FinToolBench study evaluates 760 executable financial tools and 295 tool-required queries.
  - Intended Use: Evaluate whether an agent can complete required tool executions in domains where tool calls must be auditable and runnable.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Lu, J., Wang, K., Wang, Y., Tang, Q., Zeng, H., Chen, X., Pi, J., Deng, S., Chen, L., Fu, Y., Yang, K., and Sun, X. "FinToolBench: Evaluating LLM Agents for Real-World Financial Tool Use." arXiv preprint arXiv:2603.08262, 2026. doi:10.48550/arXiv.2603.08262.
  - Benchmark: FinToolBench reports 760 executable financial tools and 295 tool-required queries. No universal TESR >= 0.90 threshold is reported.

- **Task Completion Rate with Tool Use (TCR-T)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures task completion in settings where an agent must use tools to complete multi-step tasks. The cited survey describes agent evaluation objectives and processes rather than reporting a fixed task-completion benchmark.
  - Intended Use: Evaluate whether a tool-using agent completes benchmark tasks that require interaction with external tools or environments.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Mohammadi, M., Li, Y., Lo, J., and Yip, W. "Evaluation and Benchmarking of LLM Agents: A Survey." Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2, 2025. doi:10.1145/3711896.3736570.
  - Benchmark: The cited survey does not report a universal TCR-T threshold. Use benchmark-specific task completion rate definitions and report tool-use failures separately.

- **Noise-Induced Performance Degradation (NIPD)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the change in tool-using agent performance under noisy conditions compared with idealized benchmark conditions. AgentNoiseBench evaluates robustness of tool-using LLM agents under controlled noise conditions.
  - Intended Use: Assess whether agent performance remains stable when user inputs, tool outputs, or execution environments contain realistic noise.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Wang, R., Chen, Y., Wang, Y., Wu, C., Fang, J., Cai, X., Gu, Q., Su, H., Zhang, A., Wang, X., Cai, X., and Chua, T.-S. "AgentNoiseBench: Benchmarking Robustness of Tool-Using LLM Agents Under Noisy Condition." arXiv preprint arXiv:2602.11348, 2026. doi:10.48550/arXiv.2602.11348.
  - Benchmark: The cited study introduces AgentNoiseBench for noisy-condition evaluation. No universal <=10 percentage point degradation threshold is reported in the source metadata.

- **Pass@1 Task Completion Rate**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the share of benchmark tasks solved on the first attempt. APEX-SWE evaluates economically valuable software engineering tasks, including 100 integration tasks and 100 observability tasks.
  - Intended Use: Evaluate first-attempt task completion for complex real-world agentic tasks where repeated retries would mask operational unreliability.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Kottamasu, A., Mahapatra, C., Lee, S., Pan, B., Barthwal, A., Datta, A., Gupta, A., Mehta, P., Arun, A., Alberti, S., Hiremath, A., Foody, B., and Vidgen, B. "APEX-SWE." arXiv preprint arXiv:2601.08806, 2026. doi:10.48550/arXiv.2601.08806.
  - Benchmark: APEX-SWE includes 100 integration tasks and 100 observability tasks. The supplied citation does not support using pass@1 >= 0.40 as a general benchmark for non-software domains.

- **Epistemic Verification Behavior Rate**

  - Responsible AI Principle: Safety and Reliability
  - Description: Captures whether an agent verifies information before taking action in complex software engineering tasks. The cited APEX-SWE abstract supports evaluation of real-world integration and observability tasks, but does not define a quantitative verification behavior rate.
  - Intended Use: Evaluate whether an agent checks evidence or system state before executing consequential actions.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Kottamasu, A., Mahapatra, C., Lee, S., Pan, B., Barthwal, A., Datta, A., Gupta, A., Mehta, P., Arun, A., Alberti, S., Hiremath, A., Foody, B., and Vidgen, B. "APEX-SWE." arXiv preprint arXiv:2601.08806, 2026. doi:10.48550/arXiv.2601.08806.
  - Benchmark: No standardized threshold is reported in the cited source. Report verification behaviors using task-specific annotation criteria if used.

- **Decision Accuracy Under Incomplete Information**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures decision accuracy on finance research tasks requiring information retrieval, analysis of recent SEC filings, and reasoning under incomplete or evolving information. The cited benchmark contains 537 expert-authored finance research questions across nine task categories.
  - Intended Use: Evaluate agent decision accuracy in high-information-load research tasks where the system must gather relevant evidence before answering.
  - Lifecycle Phase: Both
  - Persona: Developer and Implementer
  - Supporting Literature: Bigeard, A., Nashold, L., Krishnan, R., and Wu, S. "Finance Agent Benchmark: Benchmarking LLMs on Real-World Financial Research Tasks." arXiv preprint arXiv:2508.00828, 2025. doi:10.48550/arXiv.2508.00828.
  - Benchmark: Finance Agent Benchmark reports 537 expert-authored questions across nine financial task categories. No universal accuracy threshold is reported.

- **Escalation Rate (ESR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of agent-handled interactions transferred to a live human agent, computed as escalated interactions divided by total interactions handled by the agent. Escalations should be stratified as (1) required policy-based review, (2) appropriate safety/uncertainty escalation, and (3) failure-related rescue on an otherwise resolvable task. Only category (3) should be counted as agent failure.
  - Intended Use: Monitor whether a voice scheduling agent identifies its task boundaries and hands off to human staff when needed.
  - Lifecycle Phase: Post-implementation
  - Persona: Implementer
  - Supporting Literature: Yao, S., Shinn, N., Razavi, P., and Narasimhan, K. "tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains." International Conference on Learning Representations, 2025. arXiv:2406.12045. doi:10.48550/arXiv.2406.12045.
  - Benchmark: tau-bench reports that state-of-the-art agents still fail more than 50% of tasks in some customer-service domains and that pass^8 can drop below 25% in the retail setting. The study does not report an escalation-rate threshold for healthcare voice scheduling.

- **Platform Reliability Score (PRS)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures operational stability of the AI voice-agent platform using system uptime, mean time between failures, and unplanned incident rate across telephony, LLM inference, and EHR integration components. The cited healthcare IT studies evaluate downtime procedures and patient-safety event reports, not AI voice-agent reliability directly.
  - Intended Use: Assess whether the deployed scheduling platform remains available for patient-facing operations and identify infrastructure failures that prevent scheduling access.
  - Lifecycle Phase: Post-implementation
  - Persona: Implementer
  - Supporting Literature: Larsen, E., Fong, A., Wernz, C., and Ratwani, R. M. "Implications of Electronic Health Record Downtime: An Analysis of Patient Safety Event Reports." Journal of the American Medical Informatics Association, 2018, 25(2), 187-191. doi:10.1093/jamia/ocx057; Lyon, R., Jones, A., Burke, R., and Baysari, M. T. "What Goes Up, Must Come Down: A State-of-the-Art Electronic Health Record Downtime and Uptime Procedure in a Metropolitan Health Setting." Applied Clinical Informatics, 2023, 14(3), 513-520. doi:10.1055/s-0043-1768995.
  - Benchmark: Larsen et al. analyzed 80,381 patient safety event reports and identified 76 events associated with healthcare IT downtime. The cited sources do not report an AI voice-agent platform reliability score or validate a 99.9% uptime threshold.

- **Real-Time Oversight Layer / Independent Output Monitoring Rate (Guard Rail)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of calls or agent turns evaluated by a secondary oversight layer against predefined dangerous-output patterns. The cited study frames oversight as an error-detection problem using signal detection theory and evaluates sensitivity and response bias concepts, not a healthcare voice-agent coverage threshold.
  - Intended Use: Evaluate whether agent outputs are independently screened for harmful, out-of-scope, or policy-violating content before delivery or review.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Langer, M., Baum, K., and Schlicker, N. "Effective Human Oversight of AI-Based Systems: A Signal Detection Perspective on the Detection of Inaccurate and Unfair Outputs." Minds and Machines, 2025, 35, Article 1. doi:10.1007/s11023-024-09701-0.
  - Benchmark: The cited study supports measuring oversight error detection through sensitivity and response bias. It does not report a 100% monitoring coverage benchmark for healthcare voice agents.

- **Hard Turn Limit Compliance Rate (Guard Rail)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of calls in which the agent triggers handoff or graceful termination before or at a predefined conversation-turn ceiling. The cited study evaluates how language-model performance varies with relevant information position in long contexts; it does not define a healthcare scheduling turn limit.
  - Intended Use: Prevent unbounded conversation loops and evaluate whether stalled voice-agent calls exit through a controlled handoff or termination path.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., and Liang, P. "Lost in the Middle: How Language Models Use Long Contexts." Transactions of the Association for Computational Linguistics, 2024, 12, 157-173. doi:10.1162/tacl_a_00638.
  - Benchmark: The cited study reports degradation when models must use information located in the middle of long contexts. It does not report a 15 to 20 turn ceiling or a 100% compliance benchmark.

- **Output Constraint Violation Rate (Guard Rail)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of audited agent turns containing content that violates a predefined output-boundary policy, such as disallowed clinical statements, system-prompt disclosure, internal reasoning disclosure, or inappropriate sensitive-data exposure. The cited study evaluates contextual privacy failures in language-model outputs.
  - Intended Use: Track policy-violating output during pre-deployment red-teaming and post-deployment transcript review.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Mireshghallah, N., Kim, H., Zhou, X., Tsvetkov, Y., Sap, M., Shokri, R., and Choi, Y. "Can LLMs Keep a Secret? Testing Privacy Implications of Language Models via Contextual Integrity Theory." International Conference on Learning Representations, 2024. arXiv:2310.17884. doi:10.48550/arXiv.2310.17884.
  - Benchmark: CONFAIDE reports that GPT-4 and ChatGPT reveal private information in 39% and 57% of evaluated cases, respectively. The study does not report a healthcare voice-scheduling constraint-violation threshold or validate a 0% benchmark.

- **Node-Level Regression Test Coverage Rate (Guard Rail)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of defined workflow decision nodes with an active, versioned regression test suite. The cited evaluation-driven development study describes lifecycle evaluation practices for agentic AI systems, but does not validate a node-level coverage threshold.
  - Intended Use: Evaluate whether workflow nodes such as intent recognition, identity verification, eligibility checks, visit-type mapping, provider selection, and confirmation remain testable across model or prompt updates.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Xia, B., Lu, Q., Zhu, L., Xing, Z., Zhao, D., and Zhang, H. "Towards Evaluation-Driven Development for Agentic AI Systems." arXiv preprint arXiv:2411.13768, 2024. doi:10.48550/arXiv.2411.13768.
  - Benchmark: The cited source supports evaluation-driven lifecycle testing for agentic AI systems. It does not report a 100% node coverage benchmark or a healthcare voice-scheduling threshold.

- **End-to-End Trace Coverage Rate (Guard Rail)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of sessions with a complete trace from intake through terminal state, including tool calls, webhook calls, slot actions, escalations, confirmations, timestamps, and outputs. The cited AgentOps paper focuses on observability concepts and trace artifacts for LLM agents.
  - Intended Use: Support debugging, incident review, and reliability analysis by checking whether deployed agent sessions can be replayed from complete traces.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Dong, L., Lu, Q., and Zhu, L. "AgentOps: Enabling Observability of LLM Agents." arXiv preprint arXiv:2411.05285, 2024. doi:10.48550/arXiv.2411.05285.
  - Benchmark: The cited source supports observability and tracing for LLM-agent systems. It does not report a 100% trace-coverage benchmark or a HIPAA retention benchmark.

- **Pass@k Reliability for Agentic Financial Tasks**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the probability that an agent successfully completes a task at least once across k independent runs with identical inputs. In financial workflows, it captures stochastic reliability across repeated executions rather than single-run task success alone.
  - Intended Use: Evaluate reliability of agentic financial analysis, reporting, or decision-support tasks across repeated runs.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Mehta, S. "CLEAR: Cost, Latency, Efficacy, Accuracy, and Reliability in Agent Evaluation." arXiv preprint arXiv:2511.14136, 2025. doi:10.48550/arXiv.2511.14136.
  - Benchmark: CLEAR reports that single-run reliability of 60% can drop to 25% under 8-run consistency and documents large cost differences across systems. It does not report pass@5 greater than or equal to 0.90 as a validated threshold.

- **Intermediate Step Correctness Rate**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of intermediate reasoning steps within an agentic workflow judged correct against task-specific criteria. The cited legal-agent benchmark reports intermediate progress tracking, but uses keyword-based progress analysis rather than correctness judgments for every step.
  - Intended Use: Evaluate whether agents maintain correct reasoning and tool-use steps during complex workflows, rather than only producing a final answer.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Li, H., Chen, J., Yang, J., Ai, Q., Jia, W., Liu, Y., Lin, K., Wu, Y., Yuan, G., Hu, Y., Wang, W., Liu, Y., and Huang, M. "LegalAgentBench: Evaluating LLM Agents in Legal Domain." Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics, 2025, 2322-2344. doi:10.18653/v1/2025.acl-long.116.
  - Benchmark: The cited study reports intermediate progress tracking for legal-agent tasks, but it does not define a correctness-based threshold.

- **Decontaminated Task Success Rate**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of tasks successfully completed on evaluation datasets curated to exclude overlap with training data. The supplied source could not be verified as a peer-reviewed study or stable academic citation, so the row is retained with benchmark support flagged.
  - Intended Use: Evaluate whether software-engineering agents solve contamination-controlled tasks rather than relying on memorized training-data patterns.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Academic citation could not be verified from the supplied Emergent Mind page for paper identifier 2512.10218.
  - Benchmark: The supplied source does not provide a verified peer-reviewed benchmark. Use only after replacing the citation with a verifiable paper that reports decontaminated task success results.

- **Cumulative Risk Exposure (Multi-Agent System Safety Metric)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures aggregate safety risk experienced by a multi-agent system over time by summing expected risk contributions across agents and time steps. The cited study introduces cumulative risk exposure for gatekeeping and coordination in multi-agent systems.
  - Intended Use: Evaluate whether multi-agent systems maintain safe collective behavior rather than only minimizing individual-agent failure outcomes.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Walters, M., Kaufmann, R., Sefas, J., and Kopinski, T. "Free Energy Risk Metrics for Systemically Safe AI: Gatekeeping Multi-Agent Study." arXiv preprint arXiv:2502.04249, 2025. doi:10.48550/arXiv.2502.04249.
  - Benchmark: The cited study defines and demonstrates cumulative risk exposure but does not report a universal numeric safety threshold. Lower cumulative risk exposure is used for comparative evaluation.

- **Regression Non-Introduction Rate (RNIR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of agent-generated code patches that resolve the target issue without breaking previously passing tests. The cited SWE-bench paper evaluates real GitHub issues using repository tests, including fail-to-pass behavior, but does not validate the RNIR threshold described in the CSV.
  - Intended Use: Evaluate whether software-engineering agents introduce unintended regressions while autonomously modifying codebases.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Supporting Literature: Jimenez, C. E., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., and Narasimhan, K. "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" International Conference on Learning Representations, 2024. arXiv:2310.06770. doi:10.48550/arXiv.2310.06770.
  - Benchmark: SWE-bench contains 2,294 real GitHub issues and reports Claude 2 resolving 1.96% in the original evaluation. The cited paper does not report a 500-instance SWE-bench Verified threshold or a 70% resolve-rate benchmark.

- **Business Policy Adherence Rate (BPAR)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of multi-turn agent interactions where the final database or system state matches the annotated goal state without actions that violate domain-specific operational policies. It separates task completion from policy-compliant task completion.
  - Intended Use: Evaluate whether enterprise agents follow domain-specific business rules during autonomous multi-turn tool-use workflows.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Yao, S., Shinn, N., Razavi, P., and Narasimhan, K. "tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains." International Conference on Learning Representations, 2025. arXiv:2406.12045. doi:10.48550/arXiv.2406.12045.
  - Benchmark: tau-bench evaluates retail, airline, and telecom tasks with domain-specific policies and annotated goal states. The paper reports that state-of-the-art agents can achieve less than 50% pass^1 in the retail domain and pass^8 below 25%; it does not report a universal BPAR threshold.

- **PPE Non-Compliance Alert Precision-Recall F1 (PNA-F1)**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the harmonic mean of precision and recall for autonomous detection and alerting of personal protective equipment non-compliance events in construction or industrial video. Precision is true PPE violation alerts divided by all issued alerts, and recall is true PPE violation alerts divided by all annotated PPE violations.
  - Intended Use: Evaluate detection fidelity for agentic computer-vision safety monitoring systems that scan worksite video for PPE violations.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: Badhan, S. J., and Samsami, R. "Artificial Intelligence (AI) in Construction Safety: A Systematic Literature Review." Buildings, 2025, 15(22), Article 4084. doi:10.3390/buildings15224084.
  - Benchmark: The cited study reports PPE detection mAP@50 of 83.1% for a YOLOv5 hybrid dataset and reports model-specific precision, recall, and F1 values in construction footage experiments. It does not validate a universal PNA-F1 greater than or equal to 0.90 deployment threshold.

- **Errors-of-Omission Rate**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the proportion of tasks where the agent fails to surface, act on, or flag information or actions it should have — omissions that can carry significant clinical and operational impact even when committed (commission) errors are low. 
  - Intended Use: Evaluate whether evaluation captures what the agent failed to do, not only incorrect actions taken. Report alongside commission-error and constraint-violation metrics.
  - Lifecycle Phase: Both
  - Persona: Both
  - Supporting Literature: doi: 10.1016/j.landig.2026.100982
  - Benchmark: No specific benchmark.

- **Automation Bias / Overreliance**

  - Responsible AI Principle: Safety and Reliability
  - Description: Measures the degree to which users accept agent outputs without appropriate scrutiny, e.g., override rate on incorrect outputs, time-to-review, and acceptance of seeded erroneous recommendations in evaluation.
  - Intended Use: Assess downstream human-agent team effects, not just standalone agent accuracy.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Romeo, G., Conti, D. Exploring automation bias in human–AI collaboration: a review and implications for explainable AI. AI & Soc 41, 259–278 (2026).
  - Benchmark: No specific benchmark.

Business and Financial
~~~~~~~~~~~~~~~~~~~~~~

- **Cost-per-Success (Cost-of-Pass)**

  - Responsible AI Principle: Business and Financial
  - Description: Average operational cost required for an agent to successfully complete one task, computed as total inference, retry, tool, and infrastructure cost divided by number of successfully completed tasks. Captures whether an agentic system is economically sustainable at scale rather than only technically capable.
  - Intended Use: Evaluate whether an agentic AI system can achieve required task success rates under realistic production constraints, including tool use, multi-step planning, retries, and monitoring overhead.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: arXiv:2508.02694v1 [cs.AI] 24 Jul 2025; arXiv:2506.02064 [cs.CY]
  - Benchmark: per the Supporting Literature, Cost-per-success <= $0.228 per task where comparable to the cited Efficient Agents setting; Otherwise, establish a local baseline and require cost-per-success to improve without reducing safety, fairness, or policy-compliant task completion.

- **Economically Valuable Administrative Task Success Rate (HealthAdminBench)**

  - Responsible AI Principle: Business and Financial
  - Description: Measures whether an agent completes end-to-end healthcare administrative workflows that carry direct financial consequence, such as prior authorization, appeals and denials management, and durable medical equipment (DME) order processing. Healthcare administration accounts for over $1 trillion in annual spending, which is what makes these workflows an economically meaningful target for agentic automation. HealthAdminBench evaluates computer-use agents across four simulated GUI environments (an EHR, two payer portals, and a fax system) using 135 expert-defined tasks decomposed into 1,698 verifiable evaluation points, so end-to-end task success is reported separately from subtask success.
  - Intended Use: Evaluate whether an agentic AI system can carry an economically valuable administrative or revenue-cycle workflow all the way to completion, rather than only answering clinical questions or completing isolated steps. Report end-to-end success separately from subtask success, because strong subtask performance can coexist with low end-to-end reliability. Pair with cost-per-success so economic value is assessed on both the benefit and the cost side, and with policy-compliance and safety metrics, since actions such as submitting an authorization or an appeal are consequential and often difficult to reverse.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Bedi, S., Welch, R., Steinberg, E., Wornow, M., Kim, T. M., Ahmed, H., Sterling, P., Purohit, B., Akram, Q., Acosta, A., Nubla, E., Sharma, P., Pfeffer, M. A., Koyejo, S., and Shah, N. H. "HealthAdminBench: Evaluating Computer-Use Agents on Healthcare Administration Tasks." arXiv preprint arXiv:2604.09937, 2026. doi:10.48550/arXiv.2604.09937.
  - Benchmark: HealthAdminBench reports 135 expert-defined tasks and 1,698 evaluation points across four simulated administrative environments, evaluating seven agent configurations. The best-performing agent (Claude Opus 4.6 CUA) reached 36.3% end-to-end task success, while GPT-5.4 CUA reached the highest subtask success rate at 82.8%. No universal deployment threshold is reported. Establish a local baseline by workflow type and report end-to-end success separately from subtask success.
