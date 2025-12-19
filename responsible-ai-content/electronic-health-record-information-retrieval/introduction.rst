Introduction
============

Purpose and Scope
-----------------
This Responsible AI content for the EHR Information Retrieval use case aligns to the CHAI Responsible AI Guide (`RAIG <https://assets.ctfassets.net/7s4afyr9pmov/6e7PrdrsNTQ5FjZ4uyRjTW/c4070131c523d4e1db26105aa51f087d/CHAI_Responsible-AI-Guide.pdf>`__) by establishing a Testing and Evaluation (T&E) Framework: a consensus-defined set of methods, metrics, and/or benchmarks for developers and implementers to more concretely evaluate the responsible use of AI-enabled EHR information retrieval solutions.

Teams developing, deploying, or monitoring AI-enabled EHR information retrieval solutions can use CHAI's consensus-defined T&E Framework to guide evaluation. Additionally, organizations should review use case-specific T&E Frameworks for recommended CHAI-endorsed methods/metrics when completing the CHAI `Applied Model Card <https://www.chai.org/workgroup/applied-model>`__.


Audience
--------
This document is intended for stakeholders involved in the development, implementation, and governance of AI-enabled EHR information retrieval solutions. As such, these methods/metrics should be tailored to developers and implementers.

* Developers: individuals involved in the software development process,
  including requirements gathering, design, coding, testing, and
  maintenance of software applications (derived from IEEE, 12207:2017)

* Implementers: individuals responsible for the procurement,
  deployment, and/or overall realization of a system or component in
  accordance with a specified design (derived from IEEE 829 and IEEE
  730)


Use Case Description
--------------------
This use case outlines a workflow for retrieving, standardizing, and processing diverse data formats from Electronic Health Records (EHRs) and related databases. The goal is to transform structured and unstructured healthcare data into a standardized format for further analysis and decision-making. Effective downstream tasks (e.g., summarization, inference) require clean, well-structured data, making early data processing and quality checks essential for meaningful analysis.

**Primary End Users**

* Healthcare Providers: access real-time patient insights for improved decision-making

**Secondary End Users**

* Quality & Patient Safety Teams: track and trend safety events and quality misses
* Health Researchers: create high-fidelity cohorts and registries for hypothesis testing
* Patients: personalized search of medical events using natural language

**Workflow**


The below is an example workflow for an AI-enabled EHR information retrieval solution:

#. Data Retrieval

   * Extract information from EHRs and related databases, including:

     * FHIR resources (structured and unstructured - binary FHIR resources contain unstructured data)
     * CDA documents (semi-structured)
     * PDFs, TIFs, and images (unstructured)
     * HL7v2 messages (structured)

#. Data Standardization

   * CDA Processing (e.g., utilize the Microsoft GitHub repository for CDA-to-FHIR transformation or parse the XML)
   * OCR Processing for PDFs/Images:

     * Apply Optical Character Recognition (OCR) to extract text.
     * Capture and store metadata of the original documents.

   * FHIR Structured Data: JSON parsing to grab specific elements.

#. Data Consolidation

   * Convert all structured data into appropriate data format(s) for standardization. Examples may include: JSON, a hash table, docDB, or RDS depending on the application.
   * Feed data (structured/unstructured) directly into the processing pipeline.

     * Examples include: similarity searches, chunking, filtering, etc.
     * Parsing: Extract key information from unstructured text.
     * Rule-Based Processing: Integrate summarized content with structured data for final output determination.
     * Tokenization: e.g., entity extraction

#. Final Decision-Making

   * Combine structured and summarized unstructured data.
   * Generate the final output/decision, via rule-based logic or AI driven (e.g., EHR information extraction can create a vector of symptoms/findings which then goes to the sepsis prediction module).

This workflow ensures that all relevant healthcare data---structured and unstructured---is standardized, summarized, and processed efficiently, enabling better clinical and administrative decision-making.
