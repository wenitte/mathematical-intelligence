# 

Source: https://proofwiki.org/wiki/Right_Congruence_Modulo_Subgroup_is_Equivalence_Relation



Theorem
Let $G$ be a group, and let $H$ be a subgroup of $G$.
Let $x, y \in G$.
Let $x \equiv^r y \pmod H$ denote the relation that $x$ is right congruent modulo $H$ to $y$
Then the relation $\equiv^r$ is an equivalence relation.


Proof
Let $G$ be a group whose identity is $e$.
Let $H$ be a subgroup of $G$.

For clarity of expression, we will use the notation:

$\tuple {x, y} \in \RR^r_H$
for:

$x \equiv^r y \pmod H$

From the definition of right congruence modulo a subgroup, we have:

$\RR^r_H = \set {\tuple {x, y} \in G \times G: x y^{-1} \in H}$

We show that $\RR^r_H$ is an equivalence:


Reflexive
We have that $H$ is a subgroup of $G$.
From Identity of Subgroup:

$e \in H$
Hence:

$\forall x \in G: x x^{-1} = e \in H \implies \tuple {x, x} \in \RR^r_H$
and so $\RR^r_H$ is reflexive.
$\Box$


Symmetric













\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR^r_H\)














\(\ds \leadsto \ \ \)





\(\ds x y^{-1}\)

\(\in\)







\(\ds H\)





Definition of Right Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x y^{-1} }^{-1}\)

\(\in\)







\(\ds H\)





Group Axiom $\text G 0$: Closure



But then:

$\tuple {x y^{-1} }^{-1} = y x^{-1} \implies \tuple {y, x} \in \RR^r_H$
Thus $\RR^r_H$ is symmetric.
$\Box$


Transitive













\(\ds \tuple {x, y}, \tuple {y, z}\)

\(\in\)







\(\ds \RR^r_H\)














\(\ds \leadsto \ \ \)





\(\ds x y^{-1}\)

\(\in\)







\(\ds H\)





Definition of Right Congruence Modulo $H$












\(\, \ds \land \, \)

\(\ds y z^{-1}\)

\(\in\)







\(\ds H\)





Definition of Right Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x y^{-1} } \tuple {y z^{-1} } = x z^{-1}\)

\(\in\)







\(\ds H\)





Group Properties








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds R^r_H\)





Definition of Right Congruence Modulo $H$



Thus $\RR^r_H$ is transitive.
$\Box$

So $\RR^r_H$ is an equivalence relation.
$\blacksquare$


Also see
Definition:Right Coset
Definition:Right Coset Space
Left Congruence Modulo Subgroup is Equivalence Relation


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.1$. The quotient sets of a subgroup: Lemma $\text {(ii)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Subgroups: Theorem $11$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.1$ Another approach to cosets
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem




