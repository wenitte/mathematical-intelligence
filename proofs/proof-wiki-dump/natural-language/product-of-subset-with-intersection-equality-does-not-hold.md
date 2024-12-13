# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Intersection/Equality_does_not_Hold



Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y, Z \subseteq G$.
Let $X \circ Y$ denotes the subset product of $X$ and $Y$.

While it is the case that:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
it is not necessarily the case that:

$X \circ \paren {Y \cap Z} = \paren {X \circ Y} \cap \paren {X \circ Z}$


Proof
Proof by Counterexample:
Let $a \in G$ such that $a \ne a^{-1}$.
Let $X = \set {a, a^{-1} }, Y = \set a, Z = \set {a^{-1} }$.
Then:

$X \circ \paren {Y \cap Z} = X \circ \O = \O$
$\paren {X \circ Y} \cap \paren {X \circ Z} = \set {a^2, e} \cap \set {e, a^{-2} } \ne \O$
so:

$X \circ \paren {Y \cap Z} \ne \paren {X \circ Y} \cap \paren {X \circ Z}$
$\blacksquare$


Also see
Product of Subset with Intersection/Corollary: equality holds when $X$ is a singleton.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $4 \ \text{(ii)}$




