# 

Source: https://proofwiki.org/wiki/Set_Intersection/Examples/Set_of_Unbounded_Above_Open_Real_Intervals

Example of Intersection of Set of Sets
Let $\R$ denote the set of real numbers.
For a given $a \in \R$, let $S_a$ denote the (real) interval:

$S_a = \openint a \to = \set {x \in \R: x > a}$
Let $\SS$ denote the family of sets indexed by $\R$:

$\SS := \family {S_a}_{a \mathop \in \R}$

Then:

$\bigcap \SS = \O$


Proof
Aiming for a contradiction, suppose there exists $x \in \R$ such that $x \in \SS$.
Then by definition of set intersection:

$\forall a \in \R: x \in S_a$
That is:

$\forall a \in \R: x > a$
But then we have:

$x + 1 \in \R$
leading to:

$x > x + 1$
which contradicts the properties of real numbers, which lead to:

$x < x + 1$
Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Unions and Intersections




