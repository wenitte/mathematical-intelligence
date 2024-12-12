# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_in_Subspace/Corollary_2

Corollary to Closure of Subset in Subspace
Let $T = \struct {S, \tau}$ be a topological space.
Let $H$ be a subset of $S$.
Let $T_H = \struct {H, \tau_H}$ be the topological subspace on $H$.
Let $A$ be a subset of $H$.

Let $H$ be closed in $T$.
Then:

$\map {\cl_H} A = \map \cl A$
where:

$\map {\cl_H} A$ denotes the closure of $A$ in $T_H$
$\map \cl A$ denotes the closure of $A$ in $T$.


Proof
From Closure of Subset in Subspace:

$\map {\cl_H} A = \map \cl A \cap H$
From Intersection is Subset:

$\map {\cl_H} A \subseteq \map \cl A$

From Topological Closure is Closed:

$\map \cl A$ is closed in $T$
From Intersection of Closed Sets is Closed in Topological Space:

$\map {\cl_H} A$ is closed in $T$

From Set is Subset of its Topological Closure:

$A \subseteq \map {\cl_H} A$
From Set Closure is Smallest Closed Set in Topological Space:

$\map \cl A \subseteq \map {\cl_H} A$

By definition of set eqality:

$\map {\cl_H} A = \map \cl A$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 28 \ \text {(ii)}$




