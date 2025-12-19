Introduction
============

Purpose and Scope
-----------------
This Responsible AI content for the Prior Authorization Criteria Matching use case aligns to the CHAI Responsible AI Guide (`RAIG <https://assets.ctfassets.net/7s4afyr9pmov/6e7PrdrsNTQ5FjZ4uyRjTW/c4070131c523d4e1db26105aa51f087d/CHAI_Responsible-AI-Guide.pdf>`__) by establishing a Testing and Evaluation (T&E) Framework: a consensus-defined set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of AI solutions for prior authorization criteria matching.

Teams developing, deploying, or monitoring an AI-enabled prior authorization criteria matching solution can use CHAI's consensus-defined T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when completing the CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__.


Audience
--------

This Responsible AI content is for developers and implementers of a
Prior Authorization AI-Supported Criteria Matching solution:

* Developers: individuals involved in the software development process,
  including requirements gathering, design, coding, testing, and
  maintenance of software applications (derived from IEEE, 12207:2017)

* Implementers: individuals responsible for the procurement,
  deployment, and/or overall realization of a system or component in
  accordance with a specified design (derived from IEEE 829 and IEEE
  730)

Use Case Description
--------------------
The criteria matching component of an AI-supported prior authorization (PA) system automates the process of assessing whether a healthcare service, procedure, or medication meets the payer's medical necessity guidelines. This step is critical in reducing administrative burdens on providers, improving turnaround times, and enhancing consistency in decision-making. AI facilitates the automatic extraction and alignment of clinical documentation with established coverage criteria, minimizing manual effort and reducing the potential for errors or variability in approvals. AI-supported solutions cannot be used to automatically deny prior authorization. AI is used as a tool to support, not replace, clinical decision making.

The AI-supported criteria matching component is limited to extracting and aligning documentation with coverage criteria. It does not determine approval or denial outcomes. Organizational routing rules (e.g., auto-approval pathways, triage logic, or manual review escalation) are separate, human-governed processes that may incorporate AI outputs but are not controlled by the AI model itself. All approval or denial decisions remain the responsibility of the implementing organization.

**Primary End Users**

* Payers & Health Plans: Organizations ensuring AI-supported PA aligns with coverage policies
* Utilization Review & Medical Management Teams: Clinicians and administrative staff making final determinations on flagged cases
* Healthcare Providers: Physicians, nurses, and care teams submitting PA requests and reviewing AI recommendations
