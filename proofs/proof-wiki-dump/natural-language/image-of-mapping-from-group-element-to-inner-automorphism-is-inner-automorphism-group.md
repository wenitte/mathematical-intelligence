# 

Source: https://proofwiki.org/wiki/Image_of_Mapping_from_Group_Element_to_Inner_Automorphism_is_Inner_Automorphism_Group

Theorem
Let $G$ be a group.
Let $\kappa: G \to \Aut G$ be the mapping from $G$ to the automorphism group of $G$ defined as:

$\forall x \in G: \map \kappa x := \kappa_x$
where $\kappa_x$ is the inner automorphism on $x$:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$

Then $\Img \kappa$ is the inner automorphism group of $G$.


Proof
Let $\Inn G$ denote the inner automorphism group of $G$.

For all $x \in G$, $\map \kappa x = \kappa_x \in \Inn G$.
Hence $\Img \kappa \subseteq \Inn G$. 

Let $\phi \in \Inn G$. Then:

$\exists y \in G: \forall g \in G: \map \phi g = y g y^{-1}$
Then $\map \kappa y = \phi$.
Hence $\Inn G \subseteq \Img \kappa$. 

Therefore $\Img \kappa = \Inn G$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $10$




