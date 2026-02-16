---
title: AI As Judge
description: "Using the outputs of one (trained) AI to measure the performance of another"
sidebar_position: 7
list_image: /img/icons/control.svg
tags:
  - Control
  - AI As Judge
gemara:
  id: AI-As-Judge
  title: AI As Judge
  objective: Using the outputs of one AI to evaluate and filter the outputs of another, enabling real-time content moderation, alignment enforcement, and safety constraints.
  mitigates:
    - reference-id: emergent-behaviour
      reason: Could catch early signs of unexpected AI behaviour by flagging responses that deviate from expected norms
    - reference-id: unintended-cascading-failures
      reason: Can act as a real-time filter to catch dangerous AI outputs before they propagate
    - reference-id: social-manipulation
      reason: Can prevent harmful misinformation and deepfakes by having a second AI fact-check content
    - reference-id: loss-of-human-control
      reason: Can enforce alignment principles by rejecting responses that optimise for harmful proxy goals
---

<ControlIntro fm={frontMatter} />
    
 - AI-As-Judge is a mitigation technique where one AI model generates responses while a second AI evaluates and filters them based on predefined rules, helping to enforce content moderation, alignment with ethical guidelines, and safety constraints.   
    
 - Compare with **Human In The Loop** practices, although once trained, the AI is always vigilant.
 
 - Requires extensive training and evaluation on its own, but potentially could be a service provided to enhance controls in 
 
 
## Sources

 - [Using LLM-As-A-Judge for an automated and versatile evaluation](https://huggingface.co/learn/cookbook/llm_judge)