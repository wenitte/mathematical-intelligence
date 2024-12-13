# 

Source: https://proofwiki.org/wiki/Initial_Segment_of_Natural_Numbers_forms_Complete_Residue_System

Theorem
Let $m \in \Z_{\ne 0}$ be a non-zero integer.
Let $\N_m = \set {0, 1, 2, \ldots, m - 1}$ denote the initial segment of $\N$

Then $\N_m$ is a complete residue system modulo $m$.


Proof
Let $n \in \Z$.
From the Division Theorem there exist unique integers $q$ and $u$ such that:

$n = m q + u$
such that $0 \le u < m$.
That is:

$n \equiv u \pmod m$
and $u$ is one of $0, 1, \ldots, m - 1$.
Also, since $\forall i, j \in \N_m: \size {i - j} < m$, no two elements of $\N_m$ are congruent.
Thus $\N_m = \set {0, 1, 2, \ldots, m - 1}$ is a complete residue system modulo $m$.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Corollary $\text {4-1}$




