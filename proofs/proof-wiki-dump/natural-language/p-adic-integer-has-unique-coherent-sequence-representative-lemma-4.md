# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative/Lemma_4

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$ such that $\norm a _p \le 1$.
Let $\sequence {\alpha_j}$ be a coherent sequence that represents $a$.

Then:

$\sequence {\alpha_j}$ is the only coherent sequence that represents $a$.


Proof
Let $\sequence {\alpha'_j}$ be a coherent sequence not equal to $\sequence {\alpha_j}$.

From Representatives of same P-adic Number iff Difference is Null Sequence, it needs only to be shown that $\sequence {\alpha_j - \alpha'_j}$ is not a null sequence.

Since $\sequence {\alpha'_j} \ne \sequence{\alpha_j}$ then:

$\exists i_0 \in \N : \alpha'_{i_0} \ne \alpha_{i_0}$
By definition of coherent sequences:

$0 \le \alpha_{i_0}, \alpha'_{i_0} < p^{i_0 + 1}$
From Reduced Residue System Modulo Prime:

$\alpha_{i_0} \not \equiv \alpha'_{i_0} \pmod {p^{i_0 + 1} }$

By definition of a coherent sequence, for all $i > i_0$:

$\alpha_i \equiv \alpha_{i_0} \pmod {p^{i_0 + 1} }$
$\alpha'_i \equiv \alpha'_{i_0} \pmod {p^{i_0 + 1} }$
Then:

$\forall i > i_0: \alpha_i \equiv \alpha_{i_0} \not \equiv \alpha'_{i_0}  \equiv \alpha'_i \pmod {p^{i_0 + 1} }$
That is:

$\forall i > i_0: p^{i_0 + 1} \nmid \alpha_i - \alpha'_i$

By definition of the $p$-adic norm on integers:

$\forall i > i_0: \norm {\alpha_i - \alpha'_i} > \dfrac 1 {p^{i_0 + 1} }$
By definition of convergence, $\sequence {\alpha_j - \alpha'_j}$ is not a null sequence.
The result follows.
$\blacksquare$





