# 

Source: https://proofwiki.org/wiki/Lattice_of_Subgroups_forming_Totally_Ordered_Set_is_Indecomposable



Theorem
Let $\struct {G, \circ}$ be a Group.
Let $\mathbb G$ be the set of subgroups of $G$.
Let $\struct {\mathbb G, \subseteq}$ be the complete lattice formed by the subset ordering on $\mathbb G$.

Let $\struct {\mathbb G, \subseteq}$ be totally ordered.
Then $\struct {G, \circ}$ is an indecomposable group.


Proof
First we note that from Set of Subgroups forms Complete Lattice, $\struct {\mathbb G, \subseteq}$ is indeed a complete lattice.
As postulated, let $\struct {\mathbb G, \subseteq}$ be totally ordered.
Aiming for a contradiction, suppose there exists a decomposition of $\struct {G, \circ}$.
Then:

$\exists H, K \in \mathbb G: H \cap K = \set e$
where $\struct {H, \circ}$ and $\struct {K, \circ}$ are non-trivial normal subgroups of $\struct {G, \circ}$.
But then neither $H \subseteq K$ nor $K \subseteq H$.
That is, $\struct {\mathbb G, \subseteq}$ is not totally ordered.
Hence the result by Proof by Contradiction.
$\blacksquare$


Also see
Indecomposable Lattice of Subgroups does not necessarily form Totally Ordered Set: the converse does not hold.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.16 \ \text {(a)}$




