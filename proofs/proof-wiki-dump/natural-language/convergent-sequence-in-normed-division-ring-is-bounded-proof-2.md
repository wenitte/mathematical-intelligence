# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Division_Ring_is_Bounded/Proof_2

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then $\sequence {x_n}$ is bounded.


Proof
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be convergent to the limit $l$ in $\struct {R, \norm {\,\cdot\,}}$.
By the definition of a convergent sequence in a normed division ring, $\sequence {x_n} $ is convergent to the limit $l$ in $\struct {R, d}$.
By Convergent Sequence in Metric Space is Bounded, $\sequence {x_n} $ is a bounded sequence in $\struct {R, d}$.
By Sequence is Bounded in Norm iff Bounded in Metric, $\sequence {x_n} $ is a bounded sequence in $\struct {R, \norm {\,\cdot\,} }$.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$: Normed Fields, Exercise $11 \ (1)$




