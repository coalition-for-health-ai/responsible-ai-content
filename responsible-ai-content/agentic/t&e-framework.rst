Testing and Evaluation (T&E) Framework
======================================

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Autonomy Index (AIx)**

  - Responsible AI Principle: Usefulness / Efficacy (Agentic AI)
  - Description: A standardized metric quantifying an agentic AI’s degree of autonomous decision-making , measuring fraction of task steps the system completes independently (without human intervention or fallback) relative to the total steps in a predefined task suite. Higher AIx indicates fuller operational autonomy while still meeting correctness criteria.
  - Intended Use: Evaluate how effectively an agentic AI system functions without human supervision while accomplishing intended outcomes in multi-step real or simulated workflows.
  - Relevancy: High , directly captures agent autonomy as a proxy for usefulness and real-world efficacy in completing complex tasks.
  - Lifecycle Phase: Pre-deployment
  - Persona: Both
  - Benchmark: AIx ? 0.8 across a representative task benchmark; defined as: (# steps completed autonomously and correctly) / (total # of canonical task steps) over N?50 varied tasks.
  - Supporting Literature: https://arxiv.org/pdf/2511.08242

- **Balanced Evaluation Coverage Score (BECS)**

  - Responsible AI Principle: Usefulness & Efficacy (Agentic AI)
  - Description: A standardized score that quantifies how well an evaluation protocol covers multiple dimensions that matter for real-world adoption (technical, human-centered, safety, and economic). It is calculated by assigning coverage weights to categories (technical performance, human experience, safety indicators, cost/benefit measures) and computing a weighted sum over an evaluation suite. High BECS indicates evaluations that align better with deployment realities rather than narrow technical metrics only.
  - Intended Use: To measure whether the chosen evaluation methods for an agentic AI represent the full spectrum of value and risk factors that matter for actual usefulness and efficacy in practice.
  - Relevancy: High, because it directly assesses whether the evaluation approach itself reflects real-world priorities, correcting the measurement imbalance that undermines deployment value claims.
  - Lifecycle Phase: Pre
  - Persona: Implementer
  - Benchmark: A target BECS threshold (for example ?0.75 on a 0-1 scale) indicating broad coverage; compare against baseline evaluations that focus primarily on technical metrics (often <0.50).
  - Supporting Literature: https://arxiv.org/abs/2506.02064

- **Goal Completion Rate (GCR)**

  - Responsible AI Principle: Usefulness & Efficacy (Agentic AI)
  - Description: The proportion of tasks where an agentic system successfully achieves the intended user or system goal in multi-step environments. A task is successful if the final outcome aligns with a pre-defined ground-truth objective or expert-defined target state without human override.
  - Intended Use: Quantitatively assess whether autonomous agentic AI actually delivers intended outcomes across open-ended, multi-step tasks in realistic workflows.
  - Relevancy: High , directly measures the utility of agents across dynamic task sequences.
  - Lifecycle Phase: Pre-deployment benchmarking & ongoing performance monitoring.
  - Persona: Both
  - Benchmark: GCR ? 0.85 across a representative task suite with clear success criteria; compute as (# tasks successfully completed) / (total # of tasks tested) over at least N=100 diverse scenarios.
  - Supporting Literature: https://arxiv.org/abs/2511.08242

- **Human Intervention Rate (HIR)**

  - Responsible AI Principle: Usefulness & Efficacy (Agentic AI)
  - Description: Measures the proportion of agent-executed steps or episodes that require human correction, override, or manual intervention during task execution. In agent evaluations, intervention is triggered when the agent deviates from acceptable behavior, fails to progress, or produces unsafe or unusable intermediate actions. Lower intervention rates indicate higher practical usefulness and reliability of the agent in real workflows.
  - Intended Use: To assess how independently an agentic AI can operate in realistic settings and to compare agent designs based on how much human effort they require to remain functional.
  - Relevancy: High, captures real-world utility beyond task success by measuring human workload reduction, which is a core value proposition of agentic systems even when tasks are partially completed.
  - Lifecycle Phase: Both
  - Persona: Implementer
  - Benchmark: Compared against human-only workflows and baseline agents; studies report intervention frequency per task episode or per decision step.
  - Supporting Literature: https://arxiv.org/abs/2308.08155

- **Task Success Rate in Multi-Step Clinical Agent Tasks (MedAgentBench)**

  - Responsible AI Principle: Efficacy (Agentic Performance)
  - Description: Measures how consistently an agentic AI completes complex multi-step, clinically meaningful tasks in a realistic virtual EHR environment. Success is defined as correctly completing clinician-specified task goals (retrieval, decision making, and action execution) in a standardized FHIR-compliant setting.
  - Intended Use: Evaluate whether an agentic AI system can reliably execute goal-directed, multi-step clinical workflows rather than producing isolated or reactive outputs. Used for pre-deployment benchmarking and comparative evaluation of agent configurations.
  - Relevancy: High. Directly measures whether agentic behavior results in successful autonomous task completion, which is foundational for real-world deployment.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Benchmark: Target ?65% overall task success rate, with no individual task category consistently below 50%, reflecting performance levels achieved by top-performing agents in the benchmark.
  - Supporting Literature: https://arxiv.org/abs/2501.14654

- **Task Success Rate in WebArena Autonomous Task Benchmark**

  - Responsible AI Principle: Efficacy (Agentic AI)
  - Description: Measures the percentage of autonomous tasks successfully completed by an agent in a realistic web environment. Tasks span domains such as e-commerce actions, forum interactions, collaborative content management, and browsing activities. Success is defined as correct end-to-end task completion, not just isolated steps.
  - Intended Use: Evaluate whether an agentic AI can function reliably as an autonomous agent in real-world environments requiring planning, tool use, and sequential decision-making. Used for pre-deployment evaluation and comparative model assessment.
  - Relevancy: Evaluate whether an agentic AI can function reliably as an autonomous agent in real-world environments requiring planning, tool use, and sequential decision-making. Used for pre-deployment evaluation and comparative model assessment.
  - Lifecycle Phase: Both
  - Persona: Developer
  - Benchmark: Target ?50 % end-to-end task success across diverse environments, reflecting realistic agent capability needs and the stark gap observed between current top systems and human benchmarks.
  - Supporting Literature: https://arxiv.org/abs/2307.13854

- **User Satisfaction Score (USS)**

  - Responsible AI Principle: Usefulness & Efficacy (Agentic AI)
  - Description: A standardized user-centric metric capturing how end users rate an agentic AI’s performance on usefulness, clarity, responsiveness, and alignment with task goals, typically collected via post-interaction surveys (e.g., CSAT/NPS scales) or structured feedback tools. This measures subjective perception of value delivered by the system, separate from technical success metrics.
  - Intended Use: To evaluate whether the agent’s outputs and behaviors are useful from the user’s perspective and to capture dimensions of experience not reflected in purely technical benchmarks.
  - Relevancy: High, directly measures perceived usefulness and effectiveness, addressing the systematic gap in human-centred evaluation noted in agentic AI research and balancing technical metrics with user experience
  - Lifecycle Phase: Post-deployment monitoring
  - Persona: Implementer
  - Benchmark: Target USS ? 0.8 (on a 0–1 scale) or CSAT ? 80%, indicating user perception of usefulness and satisfaction consistent with successful product adoption; compared against baseline (no agent or non-agentic system).
  - Supporting Literature: https://arxiv.org/abs/2308.08155


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Counterfactual Unfairness Level (policy-level counterfactual fairness in RL)**

  - Responsible AI Principle: Fairness & Bias Management
  - Description: Measures policy unfairness in sequential decision-making as the degree to which the agent’s action allocation would change under a counterfactual change to a protected attribute, holding causal non-sensitive drivers constant. Evaluated at the policy level over trajectories, not individual predictions.
  - Intended Use: To assess whether an agentic AI policy (offline RL or sequential decision agent) allocates actions equitably across protected groups in settings where decisions compound over time.
  - Relevancy: High, this is explicitly designed for sequential policies and addresses fairness failure modes unique to agentic systems
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: Counterfactual Unfairness Level ? 0.05 (PyCFRL example: baseline policies reported unfairness 0.407 “Full” and 0.446 “Unaware”, while the counterfactually fair method achieved 0.042).
  - Supporting Literature: https://arxiv.org/pdf/2510.06935

- **Fairness Constraint Satisfaction Rate (FCSR)**

  - Responsible AI Principle: Fairness & Bias Management
  - Description: Measures the proportion of agentic AI decisions that satisfy defined fairness constraints embedded into the multi-agent decision framework. Each decision is evaluated against constraint criteria designed to enforce equitable treatment across defined groups or outcomes as specified in the fairness framework.
  - Intended Use: To assess whether agentic AI systems observe explicit fairness constraints during autonomous decision processes, quantifying bias mitigation effectiveness rather than only disparity metrics post-hoc.
  - Relevancy: High — aligns with fairness framework research showing that incorporating fairness constraints yields more equitable outcomes in multi-agent AI
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: FCSR ? 0.90; computed as (# decisions meeting all fairness constraints) / (total decisions evaluated) across a representative test suite.
  - Supporting Literature: https://arxiv.org/abs/2502.07254

- **Multi-Agent Demographic Parity Fairness Score**

  - Responsible AI Principle: Fairness & Bias Management
  - Description: Quantifies fairness across groups of agents (or outcomes for populations influenced by agentic decisions) by measuring whether protected attributes (e.g., demographic categories) have no systematic advantage in expected rewards, outcomes, or benefits assigned by agent actions. Adapted from classic demographic parity definitions into a multi-agent interaction context.
  - Intended Use: To assess whether an agentic AI’s policies create systemic outcome disparities across groups defined by protected attributes when executing multi-step decision processes (e.g., resource allocation, recommendation actions).
  - Relevancy: High,  directly measures whether the system’s autonomous decisions produce equitable outcomes across groups, capturing bias propagation from decentralized agent actions.
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: (Expected Outcome for Group A) ? (Expected Outcome for Group B) within an ? tolerance (e.g., ±5%), where protected groups are defined a priori and outcomes represent normalized rewards, decisions, or service levels.
  - Supporting Literature: https://arxiv.org/abs/2410.12889

- **Predictive Parity Ratio**

  - Responsible AI Principle: Fairness & Bias Management
  - Description: Ratio of positive predictive values (PPV) for a key binary agentic decision outcome across protected groups. PPV is defined as proportion of correct positive outcomes among all positive decisions for each group. The PPR = min(PPV_i / PPV_j) across all group pairs for a protected attribute.
  - Intended Use: To assess whether positive decisions made autonomously by an agentic AI are equally reliable across demographic subgroups, indicating reduced bias in outcome quality.
  - Relevancy: High, directly measures outcome equity as used in clinical prediction fairness research, applicable where agent decisions yield actionable binary outcomes.
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: PPR ? 0.9 for all group pairs (differences within ±10%). Compute PPV per group, then PPR across groups over a representative test set.
  - Supporting Literature: https://pmc.ncbi.nlm.nih.gov/articles/PMC10632090/


Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Constraint Violation Rate (CVR)**

  - Responsible AI Principle: Safety & Reliability
  - Description: A metric that measures how often an agentic AI violates formal outcome-driven safety and ethical constraints in multi-step tasks where certain behaviours are prohibited. A lower CVR indicates stronger adherence to safety constraints under realistic, incentive-bound conditions.
  - Intended Use: To empirically quantify the frequency at which an autonomous agent breaches critical safety or ethical rules when optimizing for task goals, capturing real misalignment between performance and compliant behaviour.
  - Relevancy: High - uses a realistic autonomous agent benchmark that explicitly includes safety and ethical constraint testing under KPI pressures.
  - Lifecycle Phase: Both
  - Persona: Both
  - Benchmark: CVR ? 0.10 across a diverse set of 40 benchmark scenarios with clearly defined constraint violations; compute as (# constraint violations) / (total evaluated episodes).
  - Supporting Literature: https://arxiv.org/abs/2512.20798

- **Harm-Reduction Index (HRI)**

  - Responsible AI Principle: Safety & Reliability
  - Description: A composite metric that quantifies the reduction in harmful or unsafe behaviors of an agentic AI system. It aggregates multiple safety sub-metrics, including hallucination rate, harmful content generation, and other domain-specific violations (e.g., unsafe actions), into a single normalized score indicating how effectively the system avoids or mitigates safety risks during autonomous task execution.
  - Intended Use: To evaluate whether an agentic AI system reliably avoids unsafe outputs and actions and reflects measurable safety improvements relative to baseline or risk thresholds.
  - Relevancy: High — directly measures safety-relevant behaviors in autonomous decision processes over long-horizon tasks.
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: HRI ? 0.90 over a standardized evaluation suite; computed as 1 ? normalized weighted sum of risk indicators (e.g., hallucination, harmful outputs, unsafe decisions) where each component is normalized 0–1 before aggregation.
  - Supporting Literature: https://www.preprints.org/manuscript/202508.1847

- **Safety Score (Agent-SafetyBench)**

  - Responsible AI Principle: Safety & Reliability
  - Description: A safety metric derived from the Agent-SafetyBench benchmark that evaluates agentic systems across realistic interactive environments. It measures the percentage of tasks completed without triggering any of 10 defined safety failure modes, such as unsafe actions, harmful outputs, or risk-unsound behavior.
  - Intended Use: To empirically quantify how reliably an agentic AI avoids unsafe behavior when performing multi-turn interactive tasks and tool use in diverse scenarios.
  - Relevancy: High - uses a comprehensive benchmark designed specifically to uncover safety vulnerabilities in autonomous agents.
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: Safety Score ? 0.60 across 2,000 test cases in 349 environments; defined as (# tasks without safety violations) / (total tasks evaluated).
  - Supporting Literature: https://arxiv.org/abs/2412.14470

- **Task-Level Safety & Clinical Accuracy Score (TLSCAS)**

  - Responsible AI Principle: Safety & Efficacy (Agentic AI CDS)
  - Description: Measures the percentage of agentic AI actions within Clinical Decision Support (CDS) that are both clinically safe (no harmful actions) and clinically accurate (aligned with expert decisions) across a standardized test set of real or synthetic patient cases. Safety violations include inappropriate orders, harmful recommendations, or actions without clinician approval when required.
  - Intended Use: Quantitatively assess whether an agentic AI system for CDS performs decisions that are clinically appropriate and safe before deployment or in continuous monitoring.
  - Relevancy: High , directly reflects harm-relevant behaviors of autonomous decision-making in clinical settings.
  - Lifecycle Phase: Pre-deployment evaluation & ongoing monitoring.
  - Persona: Both
  - Benchmark: TLSCAS ? 0.95; defined as: (True Safe & Accurate Actions) / (Total Actions) evaluated over a validated clinical scenario set with clinician consensus labels & safety violations flagged by experts or guidelines.
  - Supporting Literature: https://pubmed.ncbi.nlm.nih.gov/40909853/


Other
~~~~~

**Recommended, Consensus-defined Methods/Metrics**

- **Cost-per-Success (Cost-of-Pass), $/task**

  - Description: Average operational cost required for an agent to successfully complete one task, computed as total inference/tooling cost divided by number of successfully completed tasks. Captures whether an agentic system is economically sustainable at scale rather than only accurate.
  - Intended Use: To evaluate whether an agentic AI system can achieve required task success rates under realistic cost constraints for production deployment (tool use, multi-step planning).
  - Relevancy: High, cost-per-success is agent-specific because it penalizes over-planning, excessive tool calls, and retries, which are common failure modes in autonomous agents.
  - Lifecycle Phase: Pre
  - Persona: Both
  - Benchmark: Cost-per-success ? $0.228 per task (Efficient Agents reduced operational costs from $0.398 to $0.228 while retaining 96.7% of baseline performance, establishing an empirical cost benchmark).
  - Supporting Literature: https://arxiv.org/html/2508.02694v1
