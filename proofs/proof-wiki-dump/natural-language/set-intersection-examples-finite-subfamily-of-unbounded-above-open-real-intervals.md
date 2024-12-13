# 

Source: https://proofwiki.org/wiki/Set_Intersection/Examples/Finite_Subfamily_of_Unbounded_Above_Open_Real_Intervals

Example of Intersection of Set of Sets
Let $\R$ denote the set of real numbers.
For a given $a \in \R$, let $S_a$ denote the (real) interval:

$S_a = \openint a \to = \set {x \in \R: x > a}$
Let $\SS$ denote the family of sets indexed by $\R$:

$\SS := \family {S_a}_{a \mathop \in \R}$
Let $\TT$ be a finite subfamily of $\SS$.
Then:

$\bigcap \TT$ is not empty.


Proof
According to the definition of subfamily, let $\TT$ be the family of sets indexed by $U$, where $U \subseteq \R$ is a finite subset of $\R$.
By construction it is seen that $\TT \subseteq \R$
By definition, $\R$ is totally ordered by $>$.
By Subset of Toset is Toset, $U$ is also totally ordered by $>$.
From Finite Totally Ordered Set is Well-Ordered, $U$ has a greatest element $M$, say.
Thus:

$\TT = \set {x \in \R: x > M}$
Let $N \in \R$ such that $N > M$.
Then it is seen that $N \in \TT$ and the result follows.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Unions and Intersections




