# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Bounded_Subsets

Theorem
Let $M = \struct {A, d}$ be a metric space.

Then the union of any finite number of bounded subsets of $M$ is itself bounded.


Proof
It is sufficient to prove this for two subsets, as the general result follows by induction.
Suppose $S_1$ and $S_2$ are bounded subsets of $M = \struct {A, d}$.
Let $a_1, a_2 \in A$.
Let $K_1, K_2 \in \R$ such that:

$(1): \quad \forall x \in S_1: \map d {x, a_1} \le K_1$
$(2): \quad \forall x \in S_2: \map d {x, a_2} \le K_2$
Without loss of generality, let $a = a_1$ and $K = \max \set {K_1, K_2 + \map d {a_1, a_2} }$.
Then $\forall x \in S_1 \cup S_2$:
Either:

$x \in S_1$ and so $\map d {x, a} \le K_1 \le K$
or:

$x \in S_2$ and so $\map d {x, a} = \map d {x, a_1} \le \map d {x, a_2} + \map d {a_2, a_1} \le K_2 + \map d {a_2, a_1} \le K$
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Proposition $2.2.15$




