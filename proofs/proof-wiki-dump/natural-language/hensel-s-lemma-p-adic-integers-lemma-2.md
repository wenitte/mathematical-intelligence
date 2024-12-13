# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_2

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $\alpha \in \Z_p$ be a $p$-adic number with $p$-adic expansion:

$\alpha = \ds \sum_{n \mathop = 0}^\infty d_n p^n$

Let $\alpha_0 \in \Z_p$ be a $p$-adic integer.

Let $p \Z_p$ denote the principal ideal of $\Z_p$ generated by $p$.
For all $x, y \in \Z_p$, let:

$x \equiv y \pmod {p \Z_p}$
denote congruence modulo the ideal $p \Z_p$.

For all $k \in \N$, let the partial sum $a_k = \ds \sum_{n \mathop = 0}^k d_n p_n$ satisfy:

$a_k \equiv \alpha_0 \pmod {p \Z_p}$

Then:

$\alpha \equiv \alpha_0 \pmod {p\Z_p}$


Proof
From Ideals of P-adic Integers:

$p \Z_p$ is an ideal of the ring $\Z_p$
By Definition of Congruence Modulo an Ideal:

$\forall k \in \N: a_k - \alpha_0 \in p \Z_p$
By Definition of $p$-adic Expansion:

$\alpha = \ds \lim_{k \mathop \to \infty} a_k$
From Sum Rule for Sequences in Normed Division Ring:

$\alpha - \alpha_0 = \ds \lim_{k \mathop \to \infty} a_k - \alpha_0$
From Closed Subgroups of P-adic Integers:

$p \Z_p$ is a closed set in the $p$-adic metric
From Subset of Metric Space contains Limits of Sequences iff Closed:

$\alpha - \alpha_0 \in p \Z_p$
By Definition of Congruence Modulo an Ideal:

$\alpha \equiv \alpha_0 \pmod {p \Z_p}$
$\blacksquare$




