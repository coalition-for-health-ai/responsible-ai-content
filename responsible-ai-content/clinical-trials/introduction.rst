Use Case: Clinical Trials: AI-Supported Protocol Data Extraction and Criteria Mapping
=====================================================================================

Purpose and Scope
-----------------
This Responsible AI content for the Clinical Trials use case aligns to the CHAI Responsible AI Guide (RAIG) by establishing a Testing and Evaluation (T&E) Framework: a set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of AI-enabled protocol data extraction and criteria mapping solutions. 

Teams developing, deploying, or monitoring AI-enabled clinical trials solutions can use CHAI’s T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when browsing or submitting AI solutions on CHAI’s `Public Registry <https://registry.chai.org>`__

Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of AI-enabled clinical trials solutions. As such, these methods/metrics should be tailored to developers and implementers.

* Developer: individual(s) involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)
* Implementer: individual(s) responsible for the procurement, deployment, and/or overall realization of a system or component in accordance with a specified design (derived from IEEE 829 and IEEE 730)

Use Case Description
--------------------
Patient recruitment for oncology clinical trials often involves manually reviewing complex eligibility criteria across hundreds of protocols and matching these against diverse patient data sources. This process is time-intensive, error-prone, and highly dependent on the interpretive skill of human reviewers, which contributes to high screening costs and delays in trial enrollment. A significant portion of this work could be automated using large language models (LLMs) to understand and align eligibility criteria with patient health records. In addition to reducing time and cost, an AI-enabled approach can increase reliability and safety by standardizing decision-making across trials and minimizing human bias. By making inclusion and exclusion decisions based on structured and unstructured clinical data, these models can improve time to enrollment and potentially enhance patient retention. Clearly defining how eligibility decisions are made based on the data may not only strengthen the transparency and trust of the model among stakeholders but also reinforce its role in enhancing both clinical outcomes and operational efficiency. 

**Primary End Users**

* Clinical Trial Coordinators: responsible for patient screening and matching within oncology clinical trials (licensed nurses and clinical research professionals) 
* Oncology Clinicians and Principal Investigators: Interested in efficient patient identification for enrolling into suitable trials 
* Health Informatics and Data Engineers: Support data integration between trial protocols, EHR systems, and LLM pipelines 
* Clinical Researchers: Review eligibility determinations and assisting in data validation workflows 
