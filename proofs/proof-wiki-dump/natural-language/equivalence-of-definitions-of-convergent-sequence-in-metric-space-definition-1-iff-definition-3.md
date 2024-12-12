# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Metric_Space/Definition_1_iff_Definition_3



Theorem
Let $M = \struct {A, d}$ be a metric space or a pseudometric space.
Let $\sequence {x_k}$ be a sequence in $A$.

The following definitions of the concept of Convergent Sequence in the context of Metric Spaces are equivalent:


Definition 1
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \map d {x_n, l} < \epsilon$


Definition 3
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, l} = 0$


Proof
By definition of a convergent real sequence:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, l} = 0$
if and only if

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: n > N \implies \size {\map d {x_n, l} - 0} < \epsilon$

From Distance in Pseudometric is Non-Negative:

$\forall x, y \in A: \map d {x, y} \ge 0$

Hence:

$\forall n \in \N: \map d {x_n, l} = \size {\map d {x_n, l}} = \size {\map d {x_n, l} - 0}$
The result follows.
$\blacksquare$





