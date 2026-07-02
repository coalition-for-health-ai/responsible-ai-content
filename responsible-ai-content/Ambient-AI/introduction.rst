Ambient AI
==========

Purpose and Scope
-----------------
This Responsible AI content for the Ambient AI work group aligns to the CHAI Responsible AI Guide (RAIG) by establishing a Testing and Evaluation (T&E) Framework: a set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of ambient AI technology.
Teams developing, deploying, or monitoring ambient AI can use CHAI’s T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when browsing or submitting AI solutions on CHAI’s `Public Registry <https://registry.chai.org>`__

Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of ambient AI. As such, these methods/metrics should be tailored to developers (secondary) and implementers (primary).

* Developer: individual(s) involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)
* Implementer: individual(s) responsible for the procurement, deployment, and/or overall realization of a system or component in accordance with a specified design (derived from IEEE 829 and IEEE 730)

Use Case Description
--------------------
Health systems of every size and type—from pediatric practices, community health centers, medium and large health systems, and academic medical centers—are rapidly adopting ambient AI technologies to ease documentation burden and restore clinician focus to the patient. Because this adoption is moving faster than shared standards can keep up, a multi-stakeholder work group was convened to bring these diverse organizational perspectives together in one place. Participants shared real-world implementation experience and surfaced evaluation methods and metrics.

**Primary End Users**

* Health system implementation teams; Clinical informatics and digital health leadership; Risk, safety and compliance officers; Clinicians using or piloting ambient AI solutions; Education leaders developing AI competency curricula; Vendor technical teams. 

**Additional Note**

* The metrics were derived primarily from narrative clinical note generation use cases. Many remain relevant to other ambient outputs (e.g., flowsheets, orders, structured data capture), but some will apply differently or not at all. This guide will be updated as evidence for additional documentation types matures.
* Safety, fairness, and privacy should not be established once and assumed indefinitely. Pre-deployment controls do not reliably predict real-world behavior (MHRA AI Airlock Phase 2, 2026), so metrics should be monitored continuously through shadow-run and post-deployment evaluation, aligned with NIST AI RMF and EU AI Act post-market monitoring expectations.
* Ambient AI is not currently regulated as a medical device by the US FDA, but obligations differ abroad and some organizations operate internationally. In the UK, NHS England guidance requires AVT solutions with summarization functionality to hold at least MHRA Class I registration (Class IIa for diagnostic or management-plan generation). In the EU, under EU MDR and MDCG 2019-11, ambient AI that generates or shapes clinical records qualify as medical device software (Rule 11, Annex VIII), and the EU AI Act is moving toward continuous monitoring.
