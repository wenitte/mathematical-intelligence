# 

Source: https://proofwiki.org/wiki/Closure_of_Topological_Closure_equals_Closure

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Then:

$\map \cl {\map \cl H} = \map \cl H$
where $\cl$ denotes the closure of $H$.


Proof
It follows directly from Set is Subset of its Topological Closure that:

$\map \cl H \subseteq \map \cl {\map \cl H}$
$\Box$

Let $x \in \map \cl {\map \cl H}$.
Then from Condition for Point being in Closure, any $U$ which is open in $T$ such that $x \in U$ contains some $y \in \map \cl H$.
If we consider $U$ as an open set containing $y$, it follows that:

$U \cap H \ne \O$
Hence $x \in \map \cl H$.
Hence by definition of subset:

$\map \cl {\map \cl H} \subseteq \map \cl H$
$\Box$

Hence the result by definition of set equality.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.15 \ \text{(c)}$




