# 

Source: https://proofwiki.org/wiki/Preimage_of_Subgroup_under_Epimorphism_is_Subgroup

Theorem
Let $\struct {G_1, \circ}$ and $\struct {G_2, *}$ be groups.
Let $\phi: \struct {G_1, \circ} \to \struct {G_2, *}$ be a group epimorphism.
Let $H$ be a subgroup of $\struct {G_2, *}$.
Then:

$\phi^{-1} \sqbrk H$ is a subgroup of $\struct {G_1, \circ}$
where $\phi^{-1} \sqbrk H$ denotes the preimage of $H$ under $\phi$.


Proof
Let $H$ be a subgroup of $\struct {G_2, *}$.
First note that from Null Relation is Mapping iff Domain is Empty Set:

$\phi^{-1} \sqbrk H = \O \implies H = \O$
But $H \ne \O$.
Hence $\phi^{-1} \sqbrk H$ is not empty.

Next, let $x, y \in \phi^{-1} \sqbrk H$.
Then:

$\exists h_1, h_2 \in H: h_1 = \map \phi x, h_2 = \map \phi y$
From the definition of Group Homomorphism, we have:

$\map \phi {x^{-1} \circ y} = h_1^{-1} * h_2$
Since $H$ is a subgroup:

$h_1^{-1} * h_2 \in H$
Hence:

$x^{-1} \circ y \in \phi^{-1} \sqbrk H$

Thus from the One-Step Subgroup Test:

$\phi^{-1} \sqbrk H$ is a subgroup of $G_1$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.20 \ \text {(b)}$




