# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Normed_Division_Ring/Proof_3

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Every Cauchy sequence in $R$ is bounded.


Proof
Let $\sequence {x_n} $ be a Cauchy sequence in $R$.
By Norm Sequence of Cauchy Sequence has Limit, $\sequence {\norm {x_n} }$ is a convergent sequence in $\R$.
By Convergent Real Sequence is Bounded, $\sequence {\norm {x_n} }$ is bounded.
That is:

$\exists M \in \R_{\gt 0}: \forall n \in \N: \norm {x_n} = \size {\norm {x_n} } \le M$
Thus, by definition, $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11 \ (2)$




