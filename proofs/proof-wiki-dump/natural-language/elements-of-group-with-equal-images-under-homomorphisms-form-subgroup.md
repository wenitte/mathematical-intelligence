# 

Source: https://proofwiki.org/wiki/Elements_of_Group_with_Equal_Images_under_Homomorphisms_form_Subgroup

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $f: G \to H$ and $g: G \to H$ be group homomorphisms.

Then the set:

$S = \set {x \in G: \map f x = \map g x}$
is a subgroup of $G$.


Proof
Let the identities of $\struct {G, \circ}$ and $\struct {H, *}$ be $e_G$ and $e_H$ respectively.
By Homomorphism to Group Preserves Identity:

$\map f {e_G} = \map g {e_G} = e_H$
Thus $e_G \in S$, and so $S \ne \O$.

Similarly, from Homomorphism to Group Preserves Inverses, $x \in S \implies x^{-1} \in S$.

Let $x, y \in S$. Then:














\(\ds \map f {x \circ y}\)

\(=\)







\(\ds \map f x * \map f y\)





Morphism Property














\(\ds \)

\(=\)







\(\ds \map g x * \map g y\)





Definition of $S$














\(\ds \)

\(=\)







\(\ds \map g {x \circ y}\)





Morphism Property




Thus $x \circ y \in S$.

So, by the Two-Step Subgroup Test:

$S \le G$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.8$




