# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Separation_iff_No_Clopen_Sets



Theorem
The following definitions of the concept of Connected Topological Space are equivalent:
Let $T = \struct {S, \tau}$ be a topological space.

Definition by Separation
$T$ is connected if and only if it admits no separation.

Definition by No Clopen Sets
$T$ is connected if and only if its only clopen sets are $S$ and $\O$.


Proof
Definition by No Clopen Sets implies Definition by Separation
Let $T$ be connected by having no clopen sets.
Aiming for a contradiction, suppose $T$ admits a separation, $A \mid B$ say.
Then both $A$ and $B$ are clopen sets of $T$, neither of which is either $S$ or $\O$.
From this contradiction it follows that $T$ can admit no separation
$\Box$


Definition by Separation implies Definition by No Clopen Sets
Let $T$ be connected by admitting no separation.
Suppose $\exists H \subseteq S$ which is clopen.
Then $\relcomp S H$ is also clopen.
Hence $H \mid \relcomp S H$ is a separation of $T$.
From this contradiction it follows that $T$ can have no non-empty proper subsets which are clopen.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Corollary $6.2.4$




