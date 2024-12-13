# 

Source: https://proofwiki.org/wiki/Metric_Space_is_T4

Theorem
Let $M = \struct {A, d}$ be a metric space.
Then $M$ is a $T_4$ space.


Proof 1
Let $H$ and $K$ be disjoint closed sets of $M$.
Let $g: A \to \R$ be defined as:

$g = f_K - f_H$
where:

$\forall x \in A: \map {f_K} x = \map d {x, K}$
$\forall x \in A: \map {f_H} x = \map d {x, H}$
where $\map d {x, K}$, $\map d {x, H}$ denotes the distance from $x$ to $K$ and from $x$ to $H$ respectively.
From Distance from Point to Subset is Continuous Function, both $\map {f_K} x$ and $\map {f_H} x$ are continuous mappings.
Hence $g$ itself is a continuous mapping.
Consider the disjoint open intervals $\openint 0 \to$ and $\openint \gets 0$.
Because $g$ is continuous, it follows that $g^{-1} \sqbrk {\openint 0 \to}$ and $g^{-1} \sqbrk {\openint \gets 0}$ are open in $M$ and disjoint.
Let $x \in H$.
Then:

$\map {f_H} x = 0$
Because $H$ and $K$ are disjoint:

$H \cap K = \O$
and so:

$x \notin K$
Because $K$ is closed sets in $M$, it follows from Point at Distance Zero from Closed Set is Element that:

$\map {f_K} x > 0$
It follows that:

$\map g x > 0$
that is:

$H \subseteq g^{-1} \sqbrk {\openint 0 \to}$
Similarly:

$K \subseteq g^{-1} \sqbrk {\openint \gets 0}$
The result follows.
$\blacksquare$


Proof 2
We have that a metric space is fully $T_4$.
Then we have that a fully $T_4$ space is $T_4$.
$\blacksquare$





