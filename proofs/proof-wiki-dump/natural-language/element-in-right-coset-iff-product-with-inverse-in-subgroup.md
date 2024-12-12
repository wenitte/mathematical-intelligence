# 

Source: https://proofwiki.org/wiki/Element_in_Right_Coset_iff_Product_with_Inverse_in_Subgroup



Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.
Let $x, y \in G$.
Let $H \circ y$ denote the right coset of $H$ by $y$.

Then:

$x \in H y \iff x y^{-1} \in H$


Proof
Let $\struct {G, *}$ be the opposite group of $G$.
Then:

$x \in H y \iff x \in y * H$
$x y^{-1} \in H \iff y^{-1} * x \in H$
Since $H$ is closed under inverses:

$x y^{-1} \in H \iff x^{-1} * y \in H$
By Element in Left Coset iff Product with Inverse in Subgroup:

$x \in y * H \iff x^{-1} * y \in H$
Hence the result.
$\blacksquare$


Also see
Element in Left Coset iff Product with Inverse in Subgroup


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.1$. The quotient sets of a subgroup: Lemma $\text{(i)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.6 \ \text {(1R)}$ Another approach to cosets




