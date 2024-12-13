# 

Source: https://proofwiki.org/wiki/Indecomposable_Lattice_of_Subgroups_does_not_necessarily_form_Totally_Ordered_Set



Theorem
Let $\struct {G, \circ}$ be a Group.
Let $\mathbb G$ be the set of subgroups of $G$.
Let $\struct {\mathbb G, \subseteq}$ be the complete lattice formed by the subset ordering on $\mathbb G$.

Let $\struct {G, \circ}$ be an indecomposable group.
Then it is not necessarily the case that $\struct {\mathbb G, \subseteq}$ is totally ordered.


Proof
First we note that from Set of Subgroups forms Complete Lattice, $\struct {\mathbb G, \subseteq}$ is indeed a complete lattice.


Proof by Counterexample
Let $D_4$ denote the dihedral group of order $8$, also known as the symmetry group of the square.
From Internal Group Direct Product Examples: $D_4$, it is seen that $D_4$ is indecomposable group.

But from the Hasse diagram, we see:


it is seen that $\struct {\mathbb G, \subseteq}$, where $\mathbb G$ denotes the set of subsets of $D_4$, is not totally ordered.

Hence the result.
$\blacksquare$


Also see
Lattice of Subgroups forming Totally Ordered Set is Indecomposable: the converse


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.16 \ \text {(b)}$




