# 

Source: https://proofwiki.org/wiki/Complete_Residue_System_Modulo_m_has_m_Elements

Theorem
Let $m \in \Z_{\ne 0}$ be a non-zero integer.
Let $S := \set {r_1, r_2, \dotsb, r_s}$ be a complete residue system modulo $m$.

Then $s = m$.


Proof
Let:

$t_0 = 0, t_1 = 1, \dots, t_{m - 1} = m - 1$
Let $n \in \Z$.

Then from the Division Theorem there exist unique integers $q$ and $u$ such that:

$n = m q + u$
such that $0 \le u < m$.
That is:

$n \equiv u \pmod m$
and $u$ is one of $t_0, t_1, \ldots, t_{m - 1}$.
Also, since $\size {t_i - t_j} < m$, no two elements of $\set {t_0, t_1, \ldots, t_{m - 1} }$ are congruent.
Thus $\set {t_0, t_1, \ldots, t_{m - 1} }$ is a complete residue system modulo $m$.

So each $r_i$ is congruent to exactly one element of $\set {t_0, t_1, \ldots, t_{m - 1} }$.
So:

$s \le m$
And since $\set {r_1, r_2, \dotsb, r_s}$ forms a complete residue system modulo $m$, every element of $\set {t_0, t_1, \ldots, t_{m - 1} }$ is congruent to exactly one element of $S$.
So:

$m \le s$

Hence the result.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $4$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Theorem $\text {4-4}$




