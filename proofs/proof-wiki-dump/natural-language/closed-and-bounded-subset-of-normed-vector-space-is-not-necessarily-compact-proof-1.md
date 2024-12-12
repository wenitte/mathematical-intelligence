# 

Source: https://proofwiki.org/wiki/Closed_and_Bounded_Subset_of_Normed_Vector_Space_is_not_necessarily_Compact/Proof_1

Theorem
Let $\struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $K \subset X$ be a closed and bounded subset.

Then $K$ is not necessarily compact.


Proof
Let $\struct {\ell^2, \norm {\, \cdot \,}}_2$ be the 2-sequence space.
Let $K$ be a closed unit ball in $\struct {\ell^2, \norm {\, \cdot \,}}_2$:

$K := \set {\mathbf x \in \ell^2 : \norm {\mathbf x}_2 \le 1}$
$K$ is bounded and closed.
Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ be a sequence such that:

$\mathbf x_n := \tuple {0, \ldots 0, 1, 0, \ldots}$
where $1$ is in the $n$-th component of $\mathbf x_n$.
Then:

$\forall n \in \N : \mathbf x_n \in K \subset \ell^2$
However:

$\forall n, m \in \N : n \ne m : \norm {\mathbf x_n - \mathbf x_m}_2 = \sqrt 2$
In other words, $\sequence {\mathbf x_n}$ is not a Cauchy sequence.
By Convergent Subsequence of Cauchy Sequence, $\sequence {\mathbf x_n}$ has no convergent subsequence.
Therefore, a closed and bounded space $K$ has a sequence $\sequence {\mathbf x_n}_{n \mathop \in \N}$ which contains a non-convergent subsequence.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




