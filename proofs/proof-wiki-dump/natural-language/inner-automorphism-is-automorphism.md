# 

Source: https://proofwiki.org/wiki/Inner_Automorphism_is_Automorphism



Theorem
Let $G$ be a group.
Let $x \in G$.
Let $\kappa_x$ be the inner automorphism of $x$ in $G$.

Then $\kappa_x$ is an automorphism of $G$.


Proof
By definition, $\kappa_x: G \to G$ is a mapping defined as:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$

We need to show that $\kappa_x$ is an automorphism.

First we show $\kappa_x$ is a homomorphism.










\(\ds \forall g, h \in G: \, \)



\(\ds \map {\kappa_x} g \map {\kappa_x} h\)

\(=\)







\(\ds \paren {x g x^{-1} } \paren {x h x^{-1} }\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds x g \paren {x^{-1} x} h x^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \paren {g e h} x^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds x \paren {g h} x^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \map {\kappa_x} {g h}\)





Definition of $\kappa_x$




Thus the morphism property is demonstrated.

Next we show that $\kappa_x$ is injective.














\(\ds \map {\kappa_x} g\)

\(=\)







\(\ds \map {\kappa_x} h\)














\(\ds \leadsto \ \ \)





\(\ds x g x^{-1}\)

\(=\)







\(\ds x h x^{-1}\)





Definition of $\kappa_x$








\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds h\)





Cancellation Laws




So $\kappa_x$ is injective.

Finally we show that $\kappa_x$ is surjective.
Note that $\forall h \in G: x^{-1} h x \in G$ from fact that $G$ is a group and therefore closed. So:










\(\ds \forall h \in G: \, \)



\(\ds \map {\kappa_x} {x^{-1} h x}\)

\(=\)







\(\ds x \paren {x^{-1} h x} x^{-1}\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds \paren {x x^{-1} } h \paren {x x^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e h e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds h\)





Group Axiom $\text G 2$: Existence of Identity Element




Thus every element of $G$ is the image of some element of $G$ under $\kappa_x$ (that is, of $x^{-1} h x$), and surjectivity is proved.
$\blacksquare$


Also see
Conjugate of Subgroup is Subgroup: Performing an inner automorphism of a subgroup
Definition:Inner Automorphism Group


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.1$. Homomorphisms: Example $131$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.8 \ \text{(a)}$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $27$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{AA}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $25$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(10)$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Proposition $8.17$




