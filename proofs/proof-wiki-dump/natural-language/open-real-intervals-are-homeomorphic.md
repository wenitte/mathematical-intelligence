# 

Source: https://proofwiki.org/wiki/Open_Real_Intervals_are_Homeomorphic

Theorem
Let $\R$ be the real number line with the Euclidean topology.
Let $I_1 := \openint a b$ and $I_2 := \openint c d$ be non-empty open real intervals.

Then $I_1$ and $I_2$ are homeomorphic.


Proof
By definition of open real interval, for $I_1$ and $I_2$ to be non-empty it must be the case that $a < b$ and $c < d$.
In particular it is noted that $a \ne b$ and $c \ne d$.
Thus $a - b \ne 0$ and $c - d \ne 0$.
Consider the real function $f: I_1 \to I_2$ defined as:

$\forall x \in I_1: \map f x = c + \dfrac {\paren {d - c} \paren {x - a} } {b - a}$
Then after some algebra:

$\forall x \in I_2: \map {f^{-1} } x = a + \dfrac {\paren {b - a} \paren {x - c} } {d - c}$
Both of these are defined as $a - b \ne 0$ and $c - d \ne 0$.
By the Combination Theorem for Continuous Real Functions, both $f$ and $f^{-1}$ are continuous on the open real intervals on which they are defined.
Hence the result by definition of homeomorphic.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Exercise $2$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms: Examples $3.6.2 \ \text{(a)}$




