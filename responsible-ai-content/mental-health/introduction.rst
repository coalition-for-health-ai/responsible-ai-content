Wellness Applications
=====================

Purpose and Scope
-----------------
This Responsible AI content for the Mental Health work group aligns to the CHAI Responsible AI Guide (RAIG) by establishing a Testing and Evaluation (T&E) Framework: a set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of wellness applications.
Teams developing, deploying, or monitoring ambient AI can use CHAI’s T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when browsing or submitting AI solutions on CHAI’s `Public Registry <https://registry.chai.org>`__

Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of wellness applications. As such, these methods/metrics should be tailored to developers (primary).

* Developer: individual(s) involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)

Use Case Description
--------------------
Consumer-facing generative AI enabled applications and chatbots are increasingly being used by individuals for emotional support, general wellness guidance, or coping assistance. Below is a taxonomy of the kinds of solutions that fall under this general category. 
(a) General-purpose models: broad chatbots/foundation models not built for wellness, which users nonetheless adopt as de facto support
(b) Companion AI: products designed primarily for ongoing social or relational engagement
(c) Purpose-built generative AI wellness applications (focus of this guide): designed for general wellness and coping support; this category spans a spectrum from independently validated, to evidence-informed, to marketed-only
(d) Clinical tools under FDA regulation: diagnostic or therapeutic software, the named out-of-scope boundary for this guide.
This guide's practices apply most directly to category (c), with several practices (harm reduction, scope definition, safety architecture) also relevant where a category-(a) tool functions as de facto wellness support. This guidance also focuses on adults only, however it should be noted that how this boundary is operationalized and enforced varies by solution and is not currently standardized (e.g. age assurance) (see APA Health Advisory: Use of generative AI chatbots and wellness applications for mental health).

**Primary Stakeholder**

•	Developers (and product teams) of generative AI enabled wellness applications.
Developers: individuals involved in the software development process, including requirements gathering, design, coding, testing, and maintenance of software applications (derived from IEEE, 12207:2017) 

**Impacted Stakeholders**

•	Implementers of genAI-enabled wellness applications (e.g., organizations that offer wellness application services to employees)

**Protected Stakeholder**
•	Consumers/End-users (adults-only): Individuals who use generative AI wellness applications for emotional support, wellness guidance, or coping assistance. Metrics and measures described here are not addressed to them, and the evaluation framework not assume they understand AI's limitations, or self-manage their own safety. 

