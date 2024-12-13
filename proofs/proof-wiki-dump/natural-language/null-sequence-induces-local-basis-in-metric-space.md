# 

Source: https://proofwiki.org/wiki/Null_Sequence_induces_Local_Basis_in_Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\sequence {x_n}$ be a real null sequence such that:

$\forall n \in N: x_n > 0$
Let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$ in $M$.

Then:

$\BB_{\sequence {x_n} } = \set{\map {B_{x_n} } a : n \in \N}$ is a local basis at $a$.


Corollary
$\BB = \set {\map {B_{1/n}} a : n \in \N}$ is a local basis at $a$.


Proof
By Open Ball of Metric Space is Open Set, every element of $\BB_{\sequence {x_n} }$ is an open neighborhood of $a$.

Let $U$ be an open neighborhood of $a$.
By definition of an open set, there exists a strictly positive real number $\epsilon$ such that $\map {B_\epsilon} a \subseteq U$.
By definition of a real null sequence:

$\exists N \in \N : \forall n > N : \size {x_n} < \epsilon$

Let $m = N + 1$.
Then $\size {x_m} < \epsilon$.
Since $x_m > 0$ then $x_m = \size {x_m} < \epsilon$, and so $\map {B_{x_m} } a \subseteq \map {B_\epsilon} a \subseteq U$.
The result follows from Subset Relation is Transitive.
$\blacksquare$





