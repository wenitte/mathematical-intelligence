# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_in_Subspace



Theorem
Let $T = \struct{S, \tau}$ be a topological space.
Let $H \subseteq S$ be an arbitrary subset of $S$.
Let $T_H = \struct {H, \tau_H}$ be the topological subspace on $H$.
Let $A \subseteq H$ be an arbitrary subset of $H$.

Then:

$\map {\cl_H} A = H \cap \map \cl A$
where:

$\map {\cl_H} A$ denotes the closure of $A$ in $T_H$
$\map \cl A$ denotes the closure of $A$ in $T$.


Corollary 1
Let $K \subseteq S$.
Let $\map {\cl_T} K$ denote the closure of $K$ in $T$.
Let $\map {\cl_H} {K \cap H}$ denote the closure of $K \cap H$ in $T_H$.

Then:

$\map {\cl_H} {K \cap H} \subseteq \map {\cl_T} K \cap H$


Corollary 2
Let $H$ be closed in $T$.
Then:

$\map {\cl_H} A = \map \cl A$


Proof













\(\ds \map {\cl_H} A\)

\(=\)







\(\ds \bigcap \set {K \subseteq H: A \subseteq K, K \text{ is closed in } T_H}\)





Definition of Closure (Topology)














\(\ds \)

\(=\)







\(\ds \bigcap \set {N \cap H: A \subseteq N, N \text{ is closed in } T}\)





Closed Set in Topological Subspace














\(\ds \)

\(=\)







\(\ds H \cap \bigcap \set {N: A \subseteq N, N \text{ is closed in } T}\)





Set Intersection is Self-Distributive over Family of Sets














\(\ds \)

\(=\)







\(\ds H \cap \map \cl A\)





Definition of Closure (Topology)



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 28 \ \text {(i)}$




