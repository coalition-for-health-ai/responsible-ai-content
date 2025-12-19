Introduction
============

Purpose and Scope
-----------------

This Responsible AI content for the General Health Advice Chatbot use case aligns to the CHAI Responsible AI Guide (`RAIG <https://assets.ctfassets.net/7s4afyr9pmov/6e7PrdrsNTQ5FjZ4uyRjTW/c4070131c523d4e1db26105aa51f087d/CHAI_Responsible-AI-Guide.pdf>`__) by establishing a Testing and Evaluation (T&E) Framework: a consensus-defined set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of AI solutions for general health advice chatbots.

Teams developing, deploying, or monitoring an AI-enabled general health advice chatbot can use CHAI's consensus-defined T&E Framework to guide evaluation. Teams should first identify which AI lifecycle stage (per CHAI's RAIG) fits their context, then work to apply the T&E Framework's methods, metrics, and/or benchmarks to assess responsible use of AI.

Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when completing the CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__.


Audience
--------

This Responsible AI content is for developers and implementers of a
General Health Advice Chatbot:

* Developers: individuals involved in the software development process,
  including requirements gathering, design, coding, testing, and
  maintenance of software applications (derived from IEEE, 12207:2017)

* Implementers: individuals responsible for the procurement,
  deployment, and/or overall realization of a system or component in
  accordance with a specified design (derived from IEEE 829 and IEEE
  730)

Use Case Description
--------------------
The general health advice chatbot is designed to provide users with reliable, non-clinical health information and personalized guidance, promoting informed decision-making and enhancing health literacy. It operates as a virtual assistant to support both patients and providers. Information output via the general health advice AI chatbot is escalated to a non-clinical professional, such as a scheduler, nutritionist, trial coordinator, etc. Note, the general health advice AI chatbot won't make any clinical recommendation but can triage appointments based on severity, and it will provide general health advice (e.g., "stay hydrated"). The workflow for this chatbot includes user initiation, query input, information processing, response generation, user interaction, data collection, and triage to appointments based on severity. The goals of this chatbot include empowering users and non-clinical providers, enhancing health literacy, facilitating engagement, collecting data for improvement, and promoting preventative health.

**End Users**

* Patients/Consumers (primary): individuals seeking non-clinical recommendations that might be delivered by a scheduler, nutritionist, trial coordinator, etc.
* Health Providers (secondary): doctors, nurses, or other healthcare professionals using the AI solution for preliminary patient assessments.

