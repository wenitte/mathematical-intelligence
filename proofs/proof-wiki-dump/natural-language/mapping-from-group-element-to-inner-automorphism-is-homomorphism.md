# 

Source: https://proofwiki.org/wiki/Mapping_from_Group_Element_to_Inner_Automorphism_is_Homomorphism

Theorem
Let $G$ be a group.
Let $\kappa: G \to \Aut G$ be the mapping from $G$ to the automorphism group of $G$ defined as:

$\forall x \in G: \map \kappa x := \kappa_x$
where $\kappa_x$ is the inner automorphism on $x$:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$

Then $\kappa$ is a homomorphism.


Proof
Let $x, y \in G$.
By definition of automorphism group, we have that:

$\map \kappa x \map \kappa y = \kappa_x \circ \kappa_y$
where $\circ$ denotes composition of mappings.

Then $\forall g \in G$:














\(\ds \map {\kappa_x \circ \kappa_y} g\)

\(=\)







\(\ds \map {\kappa_x} {\map {\kappa_y} g}\)





for all $g \in G$














\(\ds \)

\(=\)







\(\ds \map {\kappa_x} {y g y^{-1} }\)





Definition of $\kappa_y$














\(\ds \)

\(=\)







\(\ds x \paren {y g y^{-1} } x^{-1}\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds \paren {x y} g \paren {y^{-1} x^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {x y} g \paren {x y}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map {\kappa_{x y} } g\)





Definition of $\kappa_{x y}$



And so:

$\forall g \in G: \map {\kappa_{x y} } g = \map {\kappa_x \circ \kappa_y} g$
Thus by definition of $\kappa$:

$\map \kappa x \map \kappa y = \map \kappa{x y}$
demonstrating that $\kappa$ is a homomorphism.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $10$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $25$




