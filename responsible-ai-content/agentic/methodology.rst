Methodology for T&E Framework Development
=========================================

Methodology for Literature Review
---------------------------------

**1. Objective and Scope**
The objective of this literature review was to systematically identify, evaluate, and synthesize peer-reviewed and authoritative grey literature related to the use of agentic artificial intelligence systems in healthcare and health-adjacent contexts. For the purposes of this review, agentic AI systems are defined as AI systems that can autonomously plan, sequence, and execute multi-step actions, potentially interacting with tools, data sources, or downstream systems with limited real-time human intervention. 
The review focused on evidence relevant to responsible AI evaluation, with particular emphasis on safety and reliability, oversight and controllability, fairness and bias management, usefulness and efficacy, and failure modes unique to autonomous or semi-autonomous systems. 
The scope included agentic systems used for clinical operations, administrative automation, decision support orchestration, and workflow execution. Fully manual decision-support tools without autonomous action capabilities were excluded. 

**2. Review Design**
A structured narrative literature review methodology was employed. This approach was selected due to the emerging nature of agentic AI, the relative scarcity of large-scale clinical outcome studies, and the diversity of evidence types spanning technical research, applied case studies, simulations, and governance or safety analyses. 
The review prioritized conceptual clarity and risk identification over quantitative meta-analysis, enabling synthesis of findings across heterogeneous study designs and deployment contexts. 
The review was conducted iteratively, allowing refinement of scope as common risk patterns, control strategies, and evaluation gaps were identified. 

**3. Information Sources**
Literature was identified using the following sources: 

* Biomedical and Health Informatics Databases 
  * PubMed / MEDLINE 
  * Embase 
* Technical and Interdisciplinary Databases 
  * IEEE Xplore 
  * ACM Digital Library 
  * Google Scholar 
* Grey Literature and Governance Sources 
  * Health AI safety and evaluation frameworks 
  * Regulatory discussion papers and technical reports 
  * Industry and academic white papers on autonomous AI systems 
  * Conference proceedings and preprints where peer-reviewed evidence was limited 

Manual reference list review was conducted for highly cited foundational papers. 

**4. Search Strategy**
Search strategies combined controlled vocabulary and free-text keywords across three core concept domains: 

* Agentic and Autonomous AI Concepts 
  * “agentic AI,” “autonomous AI,” “AI agents,” “multi-agent systems,” “tool-using AI,” “task-planning AI” 
* Healthcare and Operational Contexts 
  * “healthcare workflows,” “clinical operations,” “care coordination,” “decision support,” “clinical automation” 
* Evaluation and Risk Concepts 
  * “safety,” “reliability,” “oversight,” “control,” “human-in-the-loop,” “failure modes,” “bias,” “governance” 

Search strings were adapted per database and limited to English-language publications. 

**5. Inclusion and Exclusion Criteria**
Inclusion Criteria 

* Direct relevance to agentic or autonomous AI systems in healthcare or health-adjacent domains 
* Empirical evaluations, simulations, or applied case studies 
* Explicit discussion of system behavior, autonomy boundaries, or oversight mechanisms 
* Relevance to responsible AI evaluation dimensions such as safety, fairness, or reliability 
* Peer-reviewed publications or authoritative grey literature  
* Articles (via arxiv.org or similar) which are preprints/postprints in scientific fields, acting as a free, open-access repository for immediate sharing of research papers, often before formal peer-reviewed journal publication 

Exclusion Criteria

* Static decision-support tools without autonomous action 
* Opinion pieces without analytic or empirical grounding 
* Non-healthcare autonomous systems with no transferable evaluation insights 
* Studies focused solely on low-level algorithmic performance without system-level behavior analysis 

**6. Screening and Selection Process**
Titles and abstracts were screened for relevance to agentic AI behavior rather than general AI capability. Full-text review was conducted for sources meeting initial inclusion criteria. 

Priority was given to studies that: 

* Evaluated system-level behavior across multiple steps or actions 
* Identified failure modes, error propagation, or unintended actions 
* Examined human oversight, intervention points, or control mechanisms 
* Discussed risks related to autonomy, delegation, or system misuse 

Sources were retained even in the absence of clinical deployment if they provided meaningful insight into safety, control, or governance challenges applicable to healthcare contexts. 

**7. Data Extraction and Synthesis**
For each included source, the following information was extracted: 
  
* Description of the agentic AI system and its autonomy level 
* Intended use case and operational context 
* Evaluation or testing methodology 
* Identified risks, failure modes, or unintended behaviors 
* Mitigation strategies such as guardrails, escalation pathways, or human oversight 
* Implications for safe deployment in healthcare settings 

Findings were synthesized thematically, with particular attention to cross-cutting risk patterns and evaluation gaps relevant to agentic systems. 
  
**8. Quality and Relevance Assessment**
Studies were assessed using a pragmatic relevance-focused framework. Evaluation criteria included: 
  
* Transparency of system design and autonomy boundaries 
* Realism of evaluation scenarios or simulations 
* Explicit treatment of safety, control, and oversight 
* Applicability of findings to healthcare workflows 

Given the nascent state of agentic AI in healthcare, conceptual rigor and risk analysis were weighted more heavily than traditional performance benchmarks. 

**9. Limitations**
The literature on agentic AI in healthcare remains limited, with many studies focusing on simulated environments or early-stage prototypes. Proprietary evaluations and internal safety testing are largely inaccessible, and real-world outcome data is scarce. 
As a result, the review emphasizes risk identification and governance considerations rather than definitive performance conclusions. 

**10. Output and Use**
The findings of this literature review are intended to inform: 

* Responsible AI metric development for agentic systems 
* Identification of autonomy-specific risks and safeguards 
* Governance and oversight recommendations 
* Cross-use-case comparison with other healthcare AI deployments 

Methodology for CHAI Member Submissions
---------------------------------------
In addition to the literature review conducted to gather published methods/metrics, the CHAI Program Management team queried members of the Agentic AI Work Group asking for additional methods/metrics. The methodology of this approach is included below. Work Group members:
  
1. Reviewed the use case charter and a standardized PowerPoint (PPT) template (developed by CHAI Program Management) to understand the scope of the agentic AI work group.
2. Identified methods and metrics that can be used by Developers and/or Implementers to objectively evaluate AI solutions within this work group.
3. Populated the PPT template with:

   * Methods and metrics currently used within the member organization, and/or
   * Relevant methods and metrics identified through published literature, industry guidance, or other credible sources.

4. Followed the instructions provided within the PPT template for documenting each method and metric, including any supporting details, definitions, benchmarks, or references.
5. Submitted the completed PPT template for consolidation, generalization, and anonymization into the work group's T&E Framework.
