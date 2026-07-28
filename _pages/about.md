---
permalink: /
title: "About Me"
author_profile: true
---
I build and benchmark large language models on **NVIDIA DGX A100 supercomputers**. As a **[Postdoctoral Fellow](https://www.smu.edu/provost/odonnell-institute/about/people/inam)** at **Southern Methodist University's [O'Donnell Data Science and Research Computing Institute (ODSRCI)](https://www.smu.edu/provost/odonnell-institute)**, I work under **[Dr. Neena Imam](https://www.smu.edu/provost/odonnell-institute/about/people/neena)** (Peter O'Donnell Jr. Director of ODSRCI), which co-manages **[SMU's NVIDIA DGX SuperPOD](https://www.smu.edu/oit/services/superpod)**, a 20-node, 160-GPU A100 AI supercomputer among the most powerful research computing platforms in the United States.

My recent work spans **distributed LLM fine-tuning with multi-node DDP** (1 to 12 A100 GPUs, including heterogeneous Slurm hetjob configurations), **graph neural networks** for innovation ecosystem analysis, and **applied AI for critical infrastructure**, smart grids, transportation electrification, and grid security.

## Technical Focus

- **Large Language Models** — distributed pretraining and fine-tuning of encoder models (RoBERTa, BERT family) using PyTorch DDP, HuggingFace Transformers, and NCCL over InfiniBand. Benchmarked 1-, 2-, 4-, 8-, and 12-GPU configurations on DGX A100, including heterogeneous Slurm `hetjob`.

- **Graph Neural Networks** — large-scale graph learning for innovation ecosystem analysis across U.S. county-level patent data.

- **Time-Series & Forecasting ML** — short-term electric load forecasting (Kolmogorov-Arnold stacked ensembles), electricity theft detection (PFSC framework, deployed at State Grid Corporation of China), and BEV driving-range prediction (GBRP framework, IEEE T-ITS).

- **HPC & Distributed Systems** — NVIDIA DGX SuperPOD, Slurm scheduling, mixed-precision training (bf16/fp16), CUDA 12.x toolchains, and end-to-end data pipelines from preprocessing to checkpointed model artifacts.

## Selected Engineering Work

- **Distributed LLM fine-tuning on SuperPOD.** Fine-tuned RoBERTa-base (125M params) with masked language modeling on the enwiki9 corpus using PyTorch DDP via Slurm. Benchmarked scaling from 1 → 12 A100 GPUs, including heterogeneous multi-node configurations (8 + 4 across two nodes via Slurm `hetjob` with NCCL over InfiniBand). Final eval perplexity: **3.80**.

- **Electricity theft detection at scale.** Built end-to-end ML pipelines (preprocessing, imputation, outlier detection, ANN-based classification, evaluation with Accuracy / Precision / Recall / F1 / AUC) for **58,000 smart-meter users**. The underlying PFSC framework was deployed at **State Grid Corporation of China** and has 10,000+ downloads on IEEE Xplore.

- **DFW 2050 Mobility Planning panel dataset.** Constructed a longitudinal panel covering **239 cities across 12 counties** in the Dallas–Fort Worth region (2011–2024), with 22 feature groups — supporting transportation electrification and infrastructure research.

- **Graph neural networks for U.S. innovation ecosystems.** Designed a GNN framework that models county-level patent flows to map innovation productivity across U.S. cities. Published in IEEE Transactions on Engineering Management and IEEE Transactions on Computational Social Systems.

- **BEV driving-range forecasting (GBRP framework).** Gradient Boosting Range Predictor for battery electric vehicle range under varying driving conditions; manuscript under preparation for IEEE Transactions on Intelligent Transportation Systems.
## Selected Publications

**25 peer-reviewed papers · 500+ citations**

Full lists:
[Google Scholar](https://scholar.google.com/citations?user=Rjj2sDMAAAAJ&hl=en) · 
[ORCID](https://orcid.org/0000-0002-8130-3016) · 
[Lancaster Research Portal](https://www.research.lancs.ac.uk/portal/en/people/inam-ullah-khan(3bbefee2-0e6c-4869-8974-265b232520e0).html)

Recent highlights:

- **[Data-Driven Insights: Boosting Algorithms to Uncover Electricity Theft Patterns in AMI](https://ieeexplore.ieee.org/document/10628648).** *IEEE Transactions on Instrumentation and Measurement*, 2025.
- **[A Novel Stacked Ensemble Framework with the Kolmogorov–Arnold Network for Short-Term Electric Load Forecasting](https://doi.org/10.1016/j.energy.2025.137216).** *Elsevier Energy*, 2025.
- **[A Predictive Analytics Framework for Policy-Driven Benchmarking and Promotion of Innovation Productivity in U.S. Cities](https://ieeexplore.ieee.org/document/11296910).** *IEEE Transactions on Engineering Management*, 2026.
- **[From Deserts to Hubs: A Data-Driven Framework for Mapping Innovation Productivity in the U.S.](https://ieeexplore.ieee.org/document/11303866).** *IEEE Transactions on Computational Social Systems*, 2026.

## Code & Demos

- **GitHub:** [github.com/dr-inamullahkhan](https://github.com/dr-inamullahkhan) — open-source code for distributed LLM fine-tuning on HPC, stacked ensemble forecasting, and graph neural networks for innovation analytics.
- **Personal site:** [dr-inamullahkhan.github.io](https://dr-inamullahkhan.github.io)

## Open To
I am open to **research collaborations** and **industry roles** — particularly in foundation models, distributed training, applied AI for critical infrastructure, and AI/ML for systems engineering.

For research collaborations: please use the subject line **"Collaboration Proposal"** and include your CV and a concise research outline.

For recruiters / industry inquiries: please use the subject line **"Industry Inquiry"**.

## Beyond Research
Based in **Dallas, Texas** — open to relocation. Outside work I mentor early-career researchers and led an AI/ML Bootcamp at the **Texas Governor's Science & Technology Champions' Academy** at SMU.
<div style="width: 100%; margin: 0 auto; text-align: center;">
  <img src="/images/StackedModel.png" alt="Smart Grid Visualization" title="Smart Grid Research" style="width: 32%;">
  <img src="/images/StackedModel2.png" alt="Machine Learning Models" title="Machine Learning" style="width: 32%;">
  <img src="/images/RobustModel.png" alt="Renewable Energy" title="Renewable Energy" style="width: 32%;">
  <sub><em>
    Left: Smart grid simulations. Middle: Machine learning model visualizations. Right: Renewable energy integration.
  </figcaption>
</figure>
