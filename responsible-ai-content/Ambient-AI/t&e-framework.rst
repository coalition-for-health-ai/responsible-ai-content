Testing and Evaluation (T&E) Framework
======================================

Included below are the recommended methods/metrics for ambient AI. Methods/metrics are categorized across Responsible AI principles: (1) Usefulness, Usability, and Efficacy (2) Fairness and Bias Management (3) Safety and Reliability (4) Privacy (5) Business and Financial.

**Note:** The benchmark values listed are reference points drawn from the cited literature, not universal pass/fail cut points. Expected performance will vary by care setting, specialty, workflow, and patient population. Organizations should calibrate thresholds to a local baseline and revisit them as use intensity and case mix change.

Usefulness, Usability, and Efficacy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **AI-Generated Documentation Conciseness / Length Change**

  - Responsible AI Principle: Usefulness, Usability
  - Description: Measures whether AI-generated clinical notes or summaries are longer, shorter, or comparable in length to clinician-written notes. Documentation length should be treated as a usability and quality-risk signal, not as proof that a note is better. Longer notes may capture more detail, but they can also add review burden, note bloat, and make clinically relevant information harder to find.
  - Intended Use: To monitor whether ambient AI creates documentation that is too long, redundant, or difficult to review, especially when added detail does not clearly improve clinical completeness or usefulness.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Applied Artificial Intelligence in Healthcare Consortium, Schoonbeek RC, Workum JD, Schuit SCE, Hoekman AH, Mehri T, Doornberg JN, van der Laan TP, Bootsma-Robroeks CMHHT. Quality and efficiency of integrating customised large language model-generated summaries versus physician-written summaries: a validation study. BMJ Open. 2025;15(9):e099301. doi:10.1136/bmjopen-2025-099301; Laranjo L, Tudor Car L, Payne RE, Neves AL, Kidd M, Miranda JJ. Artificial intelligence in primary care: innovation at a crossroads. The Lancet Primary Care. 2026;2(3):100078. doi:10.1016/j.lanprc.2025.100078.
  - Benchmark: External pass/fail threshold not established. Use clinician-written or finalized notes as the local baseline. Report: Length Change = (AI note word count - physician note word count) / physician note word count, plus clinician-rated conciseness. Flag material length increases for qualitative review, especially if conciseness ratings drop or added content does not improve completeness or correctness.

- **Clinician Work Satisfaction Improvement**

  - Responsible AI Principle: Usefulness, Usability
  - Description: Measures change in clinician satisfaction at work after implementation of an ambient AI documentation platform. This captures whether the tool improves day-to-day clinical work, even when objective EHR time savings are modest or uneven across clinicians.
  - Intended Use: To evaluate whether ambient AI improves clinician experience enough to support sustainable adoption, while still keeping documentation accuracy and safety as separate evaluation requirements.
  - Lifecycle Phase: Post-implementation
  - Persona: Implementer
  - Supporting Literature: Stults CD, Deng S, Martinez MC, et al. Evaluation of an Ambient Artificial Intelligence Documentation Platform for Clinicians. JAMA Netw Open. 2025;8(5):e258614. doi:10.1001/jamanetworkopen.2025.8614.
  - Benchmark: Per the Supporting Literature, benchmark as a statistically significant improvement in clinician-reported satisfaction from baseline to post-implementation, measured with a named, validated instrument rather than an ad hoc item. Recommended instruments: the AMA Mini-Z 2.0 satisfaction items or the Stanford Professional Fulfillment Index (PFI) professional-fulfillment subscale. Report mean pre-post change, response rate, and subgroup results by specialty or usage intensity where available.


- **Clinician Preference for AI-Generated Clinical Summaries**

  - Responsible AI Principle: Usefulness
  - Description: Measures the proportion of clinician reviewers who prefer AI-generated clinical summaries over clinician-written summaries when both are evaluated side-by-side under blinded or structured review conditions. Preference can show usefulness and acceptance, but it should not be used as a proxy for clinical correctness, safety, or downstream patient benefit.
  - Intended Use: To assess whether clinicians find AI-generated summaries useful enough for real documentation workflows, while separately checking whether those summaries are accurate, complete, and safe.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Van Veen D, Van Uden C, Blankemeier L, et al. Adapted large language models can outperform medical experts in clinical text summarization. Nat Med. 2024;30:1134-1142. doi:10.1038/s41591-024-02855-5.
  - Benchmark: Per the Supporting Literature, AI-generated summaries should be preferred by clinicians in >50% of blinded head-to-head comparisons against clinician-written summaries. Report as: Preference Rate = (# AI summaries preferred) / (# total paired comparisons), and report correctness, completeness, and safety separately.

- **Documentation Efficiency Improvement**

  - Responsible AI Principle: Usefulness
  - Description: Quantifies the change in clinician documentation time per appointment after implementation of an ambient AI documentation system. This should include objective EHR time measures when available and should be interpreted together with clinician review burden, note quality, and safety-error rates.
  - Intended Use: To measure whether ambient AI reduces real documentation workload in clinical settings without treating time savings alone as evidence of a better or safer documentation process.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Stults CD, Deng S, Martinez MC, et al. Evaluation of an Ambient Artificial Intelligence Documentation Platform for Clinicians. JAMA Netw Open. 2025;8(5):e258614. doi:10.1001/jamanetworkopen.2025.8614.
  - Benchmark: Per the Supporting Literature, benchmark as approximately >=15% reduction, or >=0.9 minutes saved, in documentation time per appointment relative to pre-deployment baseline across a representative clinician sample. Compute as: ((baseline time - post-deployment time) / baseline time).

- **Patient-Clinician Engagement Improvement**

  - Responsible AI Principle: Usefulness
  - Description: Measures whether ambient AI documentation improves the patient-clinician interaction by reducing the need for clinicians to type, navigate the EHR, or divide attention during the visit. This can be assessed through patient surveys, clinician surveys, observation, or qualitative interviews.
  - Intended Use: To evaluate whether ambient AI improves the encounter experience, not just documentation throughput or time spent in the EHR.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Shah SJ, Crowell T, Jeong Y, et al. Physician Perspectives on Ambient AI Scribes. JAMA Netw Open. 2025;8(3):e251904. doi:10.1001/jamanetworkopen.2025.1904; Laranjo L, Tudor Car L, Payne RE, Neves AL, Kidd M, Miranda JJ. Artificial intelligence in primary care: innovation at a crossroads. The Lancet Primary Care. 2026;2(3):100078. doi:10.1016/j.lanprc.2025.100078.
  - Benchmark: External pass/fail threshold not established. Use positive change in patient or clinician-reported attention, communication, or engagement as the primary benchmark. As a study-derived reference point, Shah et al. reported 68% positive physician comments for patient engagement, so results near or below that level should be reviewed with qualitative feedback and patient survey data.


- **Practitioner Burnout Reduction (Stanford Professional Fulfillment Index - Work Exhaustion / Interpersonal Disengagement Subscale)**

  - Responsible AI Principle: Usefulness, Efficacy
  - Description: Measures change in clinician burnout using the validated Stanford Professional Fulfillment Index (PFI). The work exhaustion / interpersonal disengagement subscale captures emotional exhaustion and depersonalization on a 5-point Likert scale, with lower scores indicating improvement. This metric reflects whether ambient AI reduces real administrative and cognitive burden, rather than only feeling easy to use during a pilot.
  - Intended Use: To evaluate whether ambient AI systems deliver measurable benefit to clinicians in real workflows and whether those benefits persist over time after the initial implementation period.
  - Lifecycle Phase: Post-deployment
  - Persona: Implementer
  - Supporting Literature: Afshar M, Baumann MR, Resnik F, et al. A pragmatic randomized controlled trial of ambient artificial intelligence to improve health practitioner well-being. NEJM AI. 2025;2(12). doi:10.1056/AIoa2500945.
  - Benchmark: Per the Supporting Literature, benchmark as mean reduction in work exhaustion / interpersonal disengagement >=0.44 points on a 5-point scale; Number Needed to Treat (NNT): 1.68 clinicians to achieve a clinically meaningful burnout reduction; sustained effect over 24 weeks with no detected performance drift.

- **Reduction in Cognitive Task Load (NASA-TLX Change)**

  - Responsible AI Principle: Usefulness, Usability, Efficacy
  - Description: Measures the pre- to post-deployment change in clinician cognitive workload using the NASA Task Load Index (NASA-TLX) for documentation tasks supported by ambient AI. A larger decrease indicates lower mental demand, effort, and temporal pressure during documentation.
  - Intended Use: To assess whether ambient AI meaningfully lowers the cognitive load of clinical documentation, rather than only shifting work from note-writing to note-review.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Stults CD, Deng S, Martinez MC, et al. Evaluation of an Ambient Artificial Intelligence Documentation Platform for Clinicians. JAMA Netw Open. 2025;8(5):e258614. doi:10.1001/jamanetworkopen.2025.8614.
  - Benchmark: Per the Supporting Literature, benchmark as statistically significant reduction in the NASA-TLX domains used for documentation workload. For operational monitoring, target >=20% relative reduction in the audited workload domain without increased documentation error burden. Compute as: (baseline TLX - post TLX) / baseline TLX.

- **Same-Day Note Closure Rate Increase**

  - Responsible AI Principle: Usefulness
  - Description: Measures the change in the percentage of clinical encounters where documentation is completed on the same day of service after the introduction of an ambient AI. Same-day completion can reflect improved workflow fit, but should be interpreted alongside note quality and clinician review requirements.
  - Intended Use: To quantify whether ambient AI reduces documentation delays that contribute to clinician workload, delayed chart completion, and weaker continuity of care.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Duggan MJ, Gervase J, Schoenbaum A, Hanson W, Howell JT, Sheinberg M, Johnson KB. Clinician Experiences With Ambient Scribe Technology to Assist With Documentation Burden and Efficiency. JAMA Netw Open. 2025;8(2):e2460637. doi:10.1001/jamanetworkopen.2024.60637.
  - Benchmark: Per the Supporting Literature, benchmark as an increase of about >=6 percentage points, or >=9% relative improvement, in same-day note closure compared with baseline. Compute as: post-AI same-day documentation rate - pre-AI same-day documentation rate.


Fairness and Bias Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Automatic Speech Recognition (ASR) Demographic Word Error Parity (DWEP)**

  - Responsible AI Principle: Fairness, Bias Management
  - Description: Measures parity in transcription word error rates (WER) across demographic subgroups relevant to ambient AI documentation, such as race, language, dialect, accent, age cohort, or speaker role. Compute WER for each subgroup and assess whether disparities exceed a pre-specified threshold.
  - Intended Use: To assess whether the speech recognition component of ambient AI captures diverse patient and clinician speech with comparable accuracy, since transcription disparities can carry forward into the clinical note.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Zolnoori M, Vergez S, Xu Z, et al. Decoding disparities: evaluating automatic speech recognition system performance in transcribing Black and White patient verbal communication with nurses in home healthcare. JAMIA Open. 2024;7(4):ooae130. doi:10.1093/jamiaopen/ooae130.
  - Benchmark: No universal clinical cut point is established. Report max absolute WER gap and WER ratio across demographic subgroups. Use <=0.10 absolute WER gap as a practical remediation trigger for key groups, and require subgroup review when one group has materially higher WER than the best-performing group.
  - Action Threshold & Response: If the absolute WER gap exceeds organizational threshold for any key subgroup, trigger documented remediation (model/vocabulary tuning, additional training data, or vendor escalation) and re-test before continued use; monitor continuously rather than only at evaluation.

- **Cross-Demographic Automatic Speech Recognition (ASR) Gender & Accent Error Gap (CDAEG)**

  - Responsible AI Principle: Fairness, Bias Management
  - Description: Measures absolute differences in ASR word error rates (WER) across key demographic categories such as gender, dialect, and accent groups. Compute WER for each subgroup and calculate the maximum observed gap. A smaller gap indicates more equitable transcription performance.
  - Intended Use: To detect systematic disparities in speech transcription quality that could affect the fairness and reliability of downstream ambient AI documentation.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Harris C, Mgbahurike C, Kumar N, Yang D. Modeling Gender and Dialect Bias in Automatic Speech Recognition. Findings of the Association for Computational Linguistics: EMNLP 2024. 2024:15166-15184. doi:10.18653/v1/2024.findings-emnlp.890.
  - Benchmark: No universal clinical cut point is established. Report max WER gap across defined gender, dialect, and accent groups. Use <=0.15 max WER gap as a practical internal guardrail, with remediation required when the gap is exceeded or concentrated in a protected or clinically important subgroup. Compute as: CDAEG = max(|WER_group_i - WER_group_j|).
  - Action Threshold & Response: If the max WER gap exceeds organizational threshold, or any gap is concentrated in a protected or clinically important subgroup, pause expansion to affected populations and initiate remediation; document the action taken.

- **Demographic Transcription Equity Rate (DTER)**

  - Responsible AI Principle: Fairness, Bias Management
  - Description: Measures parity in automatic speech recognition (ASR) accuracy across protected or operationally relevant demographic groups, such as race, ethnicity, age, gender, dialect, or accent. Compute WER or a similar transcription accuracy measure for each group and report the minimum accuracy ratio relative to the best-performing group.
  - Intended Use: To evaluate whether an ambient AI documentation system transcribes speech with similar accuracy across diverse speakers, reducing inequitable errors in clinical records.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Zolnoori M, Vergez S, Xu Z, et al. Decoding disparities: evaluating automatic speech recognition system performance in transcribing Black and White patient verbal communication with nurses in home healthcare. JAMIA Open. 2024;7(4):ooae130. doi:10.1093/jamiaopen/ooae130.
  - Benchmark: No universal clinical cut point is established. per the Supporting Literature, use DTER >=0.90 as an internal equity guardrail across defined demographic pairs, such as Black vs White speakers or gender groups. Compute as: DTER = min(subgroup transcription accuracy) / max(subgroup transcription accuracy).
  - Action Threshold & Response: If DTER falls below organizational threshold for any demographic pair, flag for subgroup review and remediation before relying on transcription for the affected group.


Safety and Reliability
~~~~~~~~~~~~~~~~~~~~~~

- **Contextual and Relationship-Building Omission Rate**

  - Responsible AI Principle: Safety, Reliability
  - Description: Measures the proportion of AI-generated notes that omit non-clinical but contextually important patient information, such as social context, patient concerns, relationship-building details, or longitudinal information that may matter for continuity of care. This should be evaluated separately from biomedical omissions because information that appears nonessential may still support trust, adherence, and follow-up.
  - Intended Use: To assess whether ambient AI remove context that clinicians consider important for patient-centered care or longitudinal care planning.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Dahlberg A, Kaenniemi T, Winther-Jensen T, Tapiola O, Luisto R, Puranen T, Gordon M, Sanmark E, Vartiainen V. Measuring the quality of AI-generated clinical notes: A systematic review and experimental benchmark of evaluation methods. Artificial Intelligence in Medicine. 2026;177:103421. doi:10.1016/j.artmed.2026.103421; Laranjo L, Tudor Car L, Payne RE, Neves AL, Kidd M, Miranda JJ. Artificial intelligence in primary care: innovation at a crossroads. The Lancet Primary Care. 2026;2(3):100078. doi:10.1016/j.lanprc.2025.100078.
  - Benchmark: No universal benchmark is established. Compute as: (# important contextual elements omitted from AI note) / (# important contextual elements present in transcript or reference documentation). Target a downward trend over time and manually review all omitted contextual elements classified as clinically or relationally important.

- **Audio and Transcript Data Retention Control Assessment**

  - Responsible AI Principle: Safety, Reliability
  - Description: Evaluates whether an ambient AI scribes minimizes storage of session audio and transcripts and gives the organization clear control over retention duration, deletion, and secondary use. Assessment should use vendor documentation, contracts, and configuration review.
  - Intended Use: To confirm that ambient AI scribes follow data minimization practices and reduce exposure of sensitive audio, transcript, and clinical information.
  - Lifecycle Phase: Pre-implementation
  - Persona: Implementer
  - Supporting Literature: Cohen IG, Ritzman J, Cahill RF. Ambient Listening, Legal and Ethical Issues. JAMA Netw Open. 2025;8(2):e2460642. doi:10.1001/jamanetworkopen.2024.60642; Lawrence K, Kuram VS, Levine DL, et al. Informed Consent for Ambient Documentation Using Generative AI in Ambulatory Care. JAMA Netw Open. 2025;8(7):e2522400. doi:10.1001/jamanetworkopen.2025.22400.
  - Benchmark: No quantitative benchmark is established. Pre-implementation pass condition is documented retention period, deletion process, access control, model-training restriction, patient opt-out or consent workflow, and legal/privacy approval. Because vendor retention practices vary widely and are sometimes undisclosed (e.g., audio from immediate deletion to ~90 days; transcripts from 7 days to "never delete"), recommend the approved retention/deletion policy to be evidenced by primary-source documentation (configuration export, contract language) rather than vendor attestation alone. Post-deployment audits — including periodic independent third-party audit — should verify that vendor and local workflows match the approved policy on a continuous basis.

- **Clinical Summary Completeness and Correctness Non-Inferiority**

  - Responsible AI Principle: Safety, Reliability
  - Description: Evaluates whether AI-generated clinical summaries are non-inferior to clinician-written summaries on completeness and correctness. Completeness measures whether relevant clinical information is included. Correctness measures whether included information is factually and clinically accurate. Ratings should be performed by blinded clinician reviewers using a structured rubric or Likert scale.
  - Intended Use: To determine whether AI-generated summaries preserve core clinical content quality before being used in documentation, handoff, review, or patient-care workflows.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Applied Artificial Intelligence in Healthcare Consortium, Schoonbeek RC, Workum JD, Schuit SCE, Hoekman AH, Mehri T, Doornberg JN, van der Laan TP, Bootsma-Robroeks CMHHT. Quality and efficiency of integrating customised large language model-generated summaries versus physician-written summaries: a validation study. BMJ Open. 2025;15(9):e099301. doi:10.1136/bmjopen-2025-099301.
  - Benchmark: Per the Supporting Literature, AI-generated summaries should be statistically non-inferior to physician-written summaries on completeness and correctness ratings, using a pre-specified non-inferiority margin. If using a 5-point Likert quality scale, report mean score difference and confidence interval, and separately report conciseness because non-inferiority on completeness and correctness does not guarantee brevity.


- **Clinical Note Safety Error Rate (CNSER)**

  - Responsible AI Principle: Safety, Reliability
  - Description: Measures the rate of clinically relevant content errors in AI-generated clinical documentation that have potential to cause moderate-to-severe patient harm, based on standardized error classification against professional transcriptions and expert review. A lower CNSER indicates safer and more reliable ambient AI output.
  - Intended Use: To quantify real-world safety risk in ambient AI clinical documentation by identifying how often the system introduces or preserves errors with potential clinical harm.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Anderson TN, Mohan V, Dorr DA, Ratwani RM, Biro JM, Gold JA. Evaluating the Quality and Safety of Ambient Digital Scribe Platforms Using Simulated Ambulatory Encounters. Mayo Clinic Proceedings: Digital Health. 2025;3(4):100292. doi:10.1016/j.mcpdig.2025.100292.
  - Benchmark: No validated universal threshold is established. Before go-live, notes should be clinician-reviewed and the uncorrected draft error burden should be materially below the simulated-platform reference point of 3.0 moderate-to-severe harm-potential errors per case. Any moderate-to-severe harm-potential error found in a finalized note should trigger safety review.
  - Action Threshold & Response: Pair CNSER with a pre-specified threshold and defined response. Any moderate-to-severe harm-potential error in a finalized note triggers safety review and root-cause analysis.

- **Clinically Significant Error Proportion (CSEP)**

  - Responsible AI Principle: Safety, Reliability
  - Description: Measures the proportion of ambient AI-generated clinical notes that contain at least one clinically significant documentation error, where errors are identified through professional review and classified as having potential to affect patient care. A lower CSEP reflects stronger documentation safety.
  - Intended Use: To evaluate whether ambient AI documentation systems produce clinically safe outputs by measuring meaningful documentation errors rather than generic typo or formatting counts.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Anderson TN, Mohan V, Dorr DA, Ratwani RM, Biro JM, Gold JA. Evaluating the Quality and Safety of Ambient Digital Scribe Platforms Using Simulated Ambulatory Encounters. Mayo Clinic Proceedings: Digital Health. 2025;3(4):100292. doi:10.1016/j.mcpdig.2025.100292.
  - Benchmark: No validated universal threshold is established. Report the share of notes with at least one clinically significant error and compare against the simulated ambient-scribe reference finding of 26.3% mean key-element error rate. For finalized notes, target zero known clinically significant errors at sign-off and investigate any recurring error pattern.
  - Action Threshold & Response: Set a pre-specified maximum acceptable CSEP for finalized notes (target zero known clinically significant errors at sign-off); exceeding it triggers investigation of the recurring error pattern and a documented corrective action.

- **Informed Consent and Documentation Review Compliance Rate**

  - Responsible AI Principle: Safety, Reliability
  - Description: Measures whether clinicians using an AI scribe have a documented process for obtaining informed consent before recording sessions and for reviewing, editing, and signing AI-generated clinical notes before they are finalized in the health record. Assessment should use policy review, workflow review, and audit logs where available.
  - Intended Use: To verify that ambient AI scribes are deployed with basic safeguards for patient awareness, consent, and clinician oversight.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Lawrence K, Kuram VS, Levine DL, et al. Informed Consent for Ambient Documentation Using Generative AI in Ambulatory Care. JAMA Netw Open. 2025;8(7):e2522400. doi:10.1001/jamanetworkopen.2025.22400; Leiserowitz G, Mansfield J, MacDonald S, Jost M. Patient Attitudes Toward Ambient Voice Technology: Preimplementation Patient Survey in an Academic Medical Center. JMIR Med Inform. 2025;13:e77901. doi:10.2196/77901.
  - Benchmark: Benchmark as 100% audited compliance for encounters where ambient recording is used: patient notice or consent documented before use, consent exceptions recorded where allowed by policy, and clinician review completed before note finalization. As needed, retain per-encounter evidence (consent/notice record, any consent exception, and review-completed flag) sufficient to reconstruct, after the fact, that consent and review obligations were met for a specific encounter.

- **Usability-Adjusted Safety Reliability Score (UASRS)**

  - Responsible AI Principle: Safety, Reliability
  - Description: A composite metric combining System Usability Scale (SUS) scores with after-hours documentation burden change to evaluate whether ambient AI is both usable and operationally safe in clinical workflow. SUS captures perceived usability; after-hours burden reduction captures whether the tool reduces delayed work rather than pushing effort later.
  - Intended Use: To assess whether ambient AI can be integrated into clinical workflow without creating usability friction, delayed review work, or fatigue that could indirectly affect safety.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Duggan MJ, Gervase J, Schoenbaum A, Hanson W, Howell JT, Sheinberg M, Johnson KB. Clinician Experiences With Ambient Scribe Technology to Assist With Documentation Burden and Efficiency. JAMA Netw Open. 2025;8(2):e2460637. doi:10.1001/jamanetworkopen.2024.60637.
  - Benchmark: UASRS is an internal composite, not an externally validated benchmark. If used, require SUS >=68 or the organization-specific usability target, plus non-worsening after-hours documentation work. Report SUS, after-hours work change, and safety-error measures separately so the composite does not hide poor performance in any component.

- **Medical Term Recall Rate**

  - Responsible AI Principle: Safety
  - Description: Measures the fraction of clinically relevant medical terms in the reference transcript that are correctly captured by the AI system. These terms may include diagnoses, medications, procedures, symptoms, labs, and other details that are important for safe clinical documentation.
  - Intended Use: To evaluate how accurately an ambient AI transcription or documentation system captures medically meaningful language before that content is used to generate clinical notes.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Wang H, Yang R, Alwakeel M, Kayastha A, Chowdhury A, Biro JM, et al. An evaluation framework for ambient digital scribing tools in clinical applications. npj Digit Med. 2025;8:358. doi:10.1038/s41746-025-01622-1; Palm E, Manikantan A, Mahal H, Belwadi SS, Pepin ME. Assessing the quality of AI-generated clinical notes: validated evaluation of a large language model ambient scribe. Front Artif Intell. 2025;8:1691499. doi:10.3389/frai.2025.1691499.
  - Benchmark: No universal threshold is established. Evaluate against human-annotated clinical transcripts and report recall for diagnoses, medications, procedures, labs, symptoms, and allergies separately. Use >=0.90 as a local pre-deployment target only when annotation quality is high, and escalate any missed high-risk medication, allergy, diagnosis, or follow-up instruction.

- **Clinician Review and Sign-Off Enforcement Rate**

  - Responsible AI Principle: Safety
  - Description: Assesses whether AI-generated clinical notes require mandatory clinician review, editing, and sign-off before being finalized in the medical record, verified through workflow configuration review and audit logs.
  - Intended Use: To ensure that clinical responsibility and accountability remain with licensed clinicians when using ambient AI scribes.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Cohen IG, Ritzman J, Cahill RF. Ambient Listening, Legal and Ethical Issues. JAMA Netw Open. 2025;8(2):e2460642. doi:10.1001/jamanetworkopen.2024.60642; Palm E, Manikantan A, Mahal H, Belwadi SS, Pepin ME. Assessing the quality of AI-generated clinical notes: validated evaluation of a large language model ambient scribe. Front Artif Intell. 2025;8:1691499. doi:10.3389/frai.2025.1691499.
  - Benchmark: Benchmark as 100% of AI-generated clinical notes requiring clinician review, editing where needed, and sign-off before finalization in the medical record. Verify using workflow configuration and audit logs, and measure the enforcement rate longitudinally (not only at go-live) with per-encounter evidence retained for reconstruction.

- **Per-Encounter Control Evidence Retention**

  - Responsible AI Principle: Safety, Reliability
  - Description: Assesses whether, for each encounter, the developer/implementer retains sufficient evidence to reconstruct which safety-critical controls were in force — consent scope and notice, clinician review/sign-off, retention/deletion actions, PHI-handling configuration, and the model/version and guardrail settings applied.
  - Intended Use: Support post-event review, root-cause analysis, and litigation defense, given active ambient documentation litigation and narrowing AI insurance coverage.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Anderson TN, Sinha MS, Cohen IG, Jones RL. NEJM AI 2026;3(6); Biro J, Jabbarpour Y, Ratwani R. Lancet Primary Care 2026;2.
  - Benchmark: No quantitative benchmark established. Pass condition is a retention design under which the listed per-encounter control evidence is captured, tamper-evident, and retrievable for the organization's defined retention window; verify by audit.


Privacy
~~~~~~~

- **LLM Training Data Use Disclosure and Control Assessment**

  - Responsible AI Principle: Privacy
  - Description: Evaluates whether the AI scribe vendor discloses whether session data are used for model training, whether such use is opt-in or opt-out, and whether the organization can restrict secondary data use. Assessment should use vendor policy, contract language, and configuration review.
  - Intended Use: To ensure transparency and organizational control over secondary use of sensitive clinical data in ambient AI systems.
  - Lifecycle Phase: Pre-implementation
  - Persona: Implementer
  - Supporting Literature: Cohen IG, Ritzman J, Cahill RF. Ambient Listening, Legal and Ethical Issues. JAMA Netw Open. 2025;8(2):e2460642. doi:10.1001/jamanetworkopen.2024.60642; Lawrence K, Kuram VS, Levine DL, et al. Informed Consent for Ambient Documentation Using Generative AI in Ambulatory Care. JAMA Netw Open. 2025;8(7):e2522400. doi:10.1001/jamanetworkopen.2025.22400.
  - Benchmark: No quantitative benchmark is established. Pass condition is written vendor disclosure covering secondary data use, model training, retention, deletion, opt-out or restriction controls, and contract language prohibiting model training on clinical data unless explicitly approved by the deploying organization.

- **PHI Redaction / Output Guardrail Verification**

  - Responsible AI Principle: Privacy
  - Description: Verifies that PHI redaction or output guardrails are active and effective — e.g., that PHI is appropriately handled at output and unintended PHI exposure is detected.
  - Intended Use: Confirm privacy guardrails operate in real use, not just in vendor claims.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Gerke S, Simon DA. NEJM AI 2026;3(6); Anderson TN, et al. NEJM AI 2026;3(6).
  - Benchmark: No universal threshold established. Test against representative samples; report detected PHI-exposure incidents and confirm guardrails were active per encounter where feasible.

- **Data Residency & Sub-Processor Control**

  - Responsible AI Principle: Privacy
  - Description: Evaluates evidence that session data did not leave declared geographies or approved sub-processors.
  - Intended Use: Confirm contractual and regulatory data-locality commitments are honored in practice.
  - Lifecycle Phase: Pre-implementation and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Gerke S, Simon DA. NEJM AI 2026;3(6).
  - Benchmark: No quantitative benchmark. Pass condition is documented data-flow/sub-processor inventory plus audit evidence (logs, attestations, or third-party audit) that data remained within declared boundaries.

- **Per-Encounter Consent Scope Evidence**

  - Responsible AI Principle: Privacy
  - Description: Verifies that the consent scope actually obtained (e.g., all-party recording consent where required) is recorded and retrievable per encounter, and matches what was relied upon for recording and transmission.
  - Intended Use: Ensure recording and vendor transmission stay within the consent granted, and to enable reconstruction of consent scope after the fact.
  - Lifecycle Phase: Pre- and Post-deployment
  - Persona: Implementer
  - Supporting Literature: Anderson TN, et al. NEJM AI 2026;3(6); Lawrence K, et al. JAMA Netw Open. 2025;8(7):e2522400.
  - Benchmark: Recorded encounters have retrievable, per-encounter consent-scope evidence consistent with applicable state all-party consent and CMIA-type requirements.

Business and Financial
~~~~~~~~~~~~~~~~~~~~~~

- **Incremental Cost-Effectiveness Ratio (ICER), $/QALY**

  - Responsible AI Principle: Financial
  - Description: ICER quantifies the additional cost required to gain one additional quality-adjusted life year (QALY) when adopting an AI system versus standard of care: ICER = (Cost_AI - Cost_SOC) / (QALY_AI - QALY_SOC).
  - Intended Use: To determine whether deploying an AI system is economically justified relative to alternatives, while avoiding claims of patient outcome improvement unless QALY or outcome gains are directly measured.
  - Lifecycle Phase: Pre-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Wu WT, Chao YW, Lin TK, Huang CK, Hsieh PH. Economic evaluation of AI-assisted technologies in healthcare: A systematic review. Journal of Food and Drug Analysis. 2025;33(4):487-500. doi:10.38212/2224-6614.3570.
  - Benchmark: Benchmark ICER against the organization or payer decision threshold. For US-facing evaluation, $50,000-$150,000 per QALY gained is a common reference range, but it should not be treated as universal. Report all AI implementation, maintenance, monitoring, and clinician review costs used in the calculation.

- **Weekly Relative Value Units (RVU) Uplift (% change)**

  - Responsible AI Principle: Financial
  - Description: Percent change in clinician weekly relative value units (RVUs) after ambient AI scribe access compared with baseline or controls. RVUs represent billable clinical output and are a standard health system revenue metric.
  - Intended Use: To quantify whether ambient AI documentation systems are associated with measurable financial productivity gains, while still monitoring documentation quality, patient safety, and clinician review burden.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Holmgren AJ, Fenton CL, Thombley R, Soleimani H, Croci R, DeMasi O, et al. Ambient Artificial Intelligence Scribes and Physician Financial Productivity. JAMA Netw Open. 2026;9(1):e2553233. doi:10.1001/jamanetworkopen.2025.53233.
  - Benchmark: Per the Supporting Literature, benchmark as >=+5.8% weekly RVU increase or about +1.81 RVUs per clinician per week, compared with matched controls or local baseline. Report productivity gains alongside note quality, safety review burden, and clinician workload.

- **Weekly Encounter Volume Uplift (% change)**

  - Responsible AI Principle: Financial
  - Description: Percent change in clinician encounters per week after ambient AI scribe adoption compared with baseline or controls. This captures operational throughput but does not by itself establish improved care quality.
  - Intended Use: To quantify whether ambient scribe deployment is associated with increased clinical capacity or throughput.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Holmgren AJ, Fenton CL, Thombley R, Soleimani H, Croci R, DeMasi O, et al. Ambient Artificial Intelligence Scribes and Physician Financial Productivity. JAMA Netw Open. 2026;9(1):e2553233. doi:10.1001/jamanetworkopen.2025.53233.
  - Benchmark: Per the Supporting Literature, benchmark as >=+2.8% encounters per week or about +0.80 encounters per clinician per week, compared with matched controls or local baseline. Interpret as throughput only, not as evidence of improved care quality.

- **Documentation Time Reduction (minutes/day)**

  - Responsible AI Principle: Business
  - Description: Median change in total EHR time per day after ambient scribe introduction. Time saved can support ROI modeling, but it should not be treated as sufficient evidence of safety, quality, or patient benefit.
  - Intended Use: To support ROI modeling for ambient scribes using measurable clinician time savings.
  - Lifecycle Phase: Post-deployment
  - Persona: Developer and Implementer
  - Supporting Literature: Ma SP, Liang AS, Shah SJ, Smith M, Jeong Y, Devon-Sand A, Crowell T, Delahaie C, Hsia C, Lin S, Shanafelt T, Pfeffer MA, Sharp C, Garcia P. Ambient artificial intelligence scribes: utilization and impact on documentation time. J Am Med Inform Assoc. 2025;32(2):381-385. doi:10.1093/jamia/ocae304.
  - Benchmark: Per the Supporting Literature, benchmark as >=19.95 minutes/day reduction in total EHR time after implementation versus baseline. Report total EHR time, note time, after-hours time, and adoption rate because time savings can vary with use intensity.

