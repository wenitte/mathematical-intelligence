# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Division_Ring_is_Bounded/Proof_3

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then $\sequence {x_n}$ is bounded.


Proof
Let $\sequence {x_n}$ be convergent to the limit $l$ in $\struct {R, \norm {\,\cdot\,} }$.
By modulus of limit in normed division ring, $\sequence {\norm {x_n} }$ is a convergent sequence in $\R$.
By Convergent Real Sequence is Bounded, $\sequence {\norm {x_n} }$ is bounded.
That is:

$\exists M \in \R_{> 0}: \forall n, \norm {x_n} = \size {\norm {x_n} } \le M$
Thus, by definition, $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11$ $(1)$




