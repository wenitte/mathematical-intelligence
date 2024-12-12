# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Metric_Space/Definition_1_iff_Definition_2



Theorem
Let $M = \struct {A, d}$ be a metric space or a pseudometric space.
Let $\sequence {x_k}$ be a sequence in $A$.

The following definitions of the concept of Convergent Sequence in the context of Metric Spaces are equivalent:


Definition 1
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \map d {x_n, l} < \epsilon$


Definition 2
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
where $\map {B_\epsilon} l$ is the open $\epsilon$-ball of $l$.


Proof
By definition of an open ball:

$\forall n \in \N: \map d {x_n, l} < \epsilon \iff x_n \in \map {B_\epsilon} l$
The result follows.
$\blacksquare$





