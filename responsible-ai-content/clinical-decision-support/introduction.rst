Introduction
============

Purpose and Scope
-----------------
This Responsible AI content for the Clinical Decision Support use case aligns to the CHAI Responsible AI Guide (`RAIG <https://assets.ctfassets.net/7s4afyr9pmov/6e7PrdrsNTQ5FjZ4uyRjTW/c4070131c523d4e1db26105aa51f087d/CHAI_Responsible-AI-Guide.pdf>`__) by establishing a Testing and Evaluation (T&E) Framework: a consensus-defined set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of AI-enabled clinical decision support.

Teams developing, deploying, or monitoring AI-enabled clinical decision support can use CHAI's consensus-defined T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when completing the CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__.


Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of AI-enabled clinical decision support. As such, these methods/metrics should be tailored to developers and implementers.

* Developer: individual(s) involved in the software development process, including requirements gathering, designing, coding, testing, and maintaining software applications (derived from IEEE, 12207:2017)
* Implementer: individual(s) responsible for the procurement, deployment, and/or overall realization of a system or component in accordance with a specified design (derived from IEEE 829 and IEEE 730)


Use Case Description
--------------------
While there are many different clinical decision support (CDS) use cases, this chosen focus area describes a CDS solution that leverages a large language model (LLM) using a retrieval-augmented generation (RAG) approach to process and deliver evidence-based medical information. By integrating with curated medical content, the AI system provides rapid and personalized clinical insights at the point of care. When a healthcare professional queries a clinical topic, the system generates an AI-driven response displayed alongside conventional search results. These responses reduce the need for clinicians to navigate through multiple sources. The system ensures transparency by displaying reference information alongside AI-generated responses, allowing users to assess and verify sources effectively. Ultimately, clinicians retain full responsibility for evaluating and integrating AI-provided insights into their decision-making process.

**Primary End Users**

* Healthcare professionals (anyone from students to experienced professionals), clinicians, and medical researchers seeking rapid access to clinical information.

**Secondary End Users**

* Clinical informaticians, hospital administrators, and medical librarians facilitating AI integration in healthcare settings.
