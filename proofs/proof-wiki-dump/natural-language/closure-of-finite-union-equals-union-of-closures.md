# 

Source: https://proofwiki.org/wiki/Closure_of_Finite_Union_equals_Union_of_Closures



Theorem
Let $T$ be a topological space.
Let $n \in \N$.

Let:

$\forall i \in \set {1, 2, \ldots, n}: H_i \subseteq T$

Then:

$\ds \bigcup_{i \mathop = 1}^n \map \cl {H_i} = \map \cl {\bigcup_{i \mathop = 1}^n H_i}$
where $\map \cl {H_i}$ denotes the closure of $H_i$.


Proof
From Closure of Union contains Union of Closures we have that:

$\ds \bigcup_{i \mathop = 1}^n \map \cl {H_i} \subseteq \map \cl {\bigcup_{i \mathop = 1}^n H_i}$

We need now to show that: 

$\ds \bigcup_{i \mathop = 1}^n \map \cl {H_i} \supseteq \map \cl {\bigcup_{i \mathop = 1}^n H_i}$

Let $\ds K = \bigcup_{i \mathop = 1}^n \map \cl {H_i}$ and $\ds H = \bigcup_{i \mathop = 1}^n H_i$.
From Topological Closure is Closed, all of $\map \cl {H_i}$ are closed.
So $K$ is the union of a finite number of closed sets.
So $K$ is itself closed, from Topology Defined by Closed Sets.
From Set is Subset of its Topological Closure:

$\forall i \in \closedint 1 n: H_i \subseteq \map \cl {H_i}$
and so $H \subseteq K$.
So from Topological Closure of Subset is Subset of Topological Closure:

$\map \cl H \subseteq \map \cl K$
The result follows.
$\blacksquare$


Also see
Closure of Infinite Union may not equal Union of Closures


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.18$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




