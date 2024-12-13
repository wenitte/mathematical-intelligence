# 

Source: https://proofwiki.org/wiki/Inner_Automorphisms_form_Subgroup_of_Automorphism_Group

Theorem
Let $G$ be a group.

Then the set $\Inn G$ of all inner automorphisms of $G$ forms a normal subgroup of the automorphism group $\Aut G$ of $G$:

$\Inn G \le \Aut G$


Proof
Let $G$ be a group whose identity is $e$.
Let $\kappa_x: G \to G$ be the inner automorphism defined as:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$
We see that:

$\Inn G \ne \O$
as $\kappa_x$ is defined for all $x \in G$.

We show that:

$\kappa_x, \kappa_y \in \Inn G: \kappa_x \circ \paren {\kappa_y}^{-1} \in \Inn G$

So:










\(\ds \forall g \in G: \, \)



\(\ds \map {\paren {\kappa_x \circ \paren {\kappa_y}^{-1} } } g\)

\(=\)







\(\ds \map {\kappa_x} {\map {\paren {\kappa_y}^{-1} } g}\)




















\(\ds \)

\(=\)







\(\ds \map {\kappa_x} {\map {\kappa_{y^{-1} } } g}\)





Inverse of Inner Automorphism














\(\ds \)

\(=\)







\(\ds \map {\kappa_x} {y^{-1} g y}\)




















\(\ds \)

\(=\)







\(\ds x y^{-1} g y x^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {x y^{-1} } g \paren {x y^{-1} }^{-1}\)





Inverse of Product














\(\ds \)

\(=\)







\(\ds \map {\kappa_{x y^{-1} } } g\)









As $x y^{-1} \in G$, it follows that:

$\kappa_{x y^{-1} } \in \Inn G$
By the One-Step Subgroup Test:

$\Inn G \le \Aut G$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Example $134$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{AA}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $25$




