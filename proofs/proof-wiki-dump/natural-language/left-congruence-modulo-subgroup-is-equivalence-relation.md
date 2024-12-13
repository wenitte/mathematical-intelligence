# 

Source: https://proofwiki.org/wiki/Left_Congruence_Modulo_Subgroup_is_Equivalence_Relation



Theorem
Let $G$ be a group, and let $H$ be a subgroup of $G$.
Let $x, y \in G$.
Let $x \equiv^l y \pmod H$ denote the relation that $x$ is left congruent modulo $H$ to $y$.
Then the relation $\equiv^l$ is an equivalence relation.


Proof
Let $G$ be a group whose identity is $e$.
Let $H$ be a subgroup of $G$.

For clarity of expression, we will use the notation:

$\tuple {x, y} \in \RR^l_H$
for:

$x \equiv^l y \pmod H$

From the definition of left congruence modulo a subgroup, we have:

$\RR^l_H = \set {\tuple {x, y} \in G \times G: x^{-1} y \in H}$

We show that $\RR^l_H$ is an equivalence:


Reflexive
We have that $H$ is a subgroup of $G$.
From Identity of Subgroup:

$e \in H$
Hence:

$\forall x \in G: x^{-1} x = e \in H \implies \tuple {x, x} \in \RR^l_H$
and so $\RR^l_H$ is reflexive.
$\Box$


Symmetric













\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR^l_H\)














\(\ds \leadsto \ \ \)





\(\ds x^{-1} y\)

\(\in\)







\(\ds H\)





Definition of Left Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x^{-1} y}^{-1}\)

\(\in\)







\(\ds H\)





Group Axiom $\text G 0$: Closure



But then:

$\tuple {x^{-1} y}^{-1} = y^{-1} x \implies \tuple {y, x} \in \RR^l_H$
Thus $\RR^l_H$ is symmetric.
$\Box$


Transitive













\(\ds \tuple {x, y}, \tuple {y, z}\)

\(\in\)







\(\ds \RR^l_H\)














\(\ds \leadsto \ \ \)





\(\ds x^{-1} y\)

\(\in\)







\(\ds H\)





Definition of Left Congruence Modulo $H$












\(\, \ds \land \, \)

\(\ds y^{-1} z\)

\(\in\)







\(\ds H\)





Definition of Left Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x^{-1} y} \tuple {y^{-1} z} = x^{-1} z\)

\(\in\)







\(\ds H\)





Group Properties








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds R^l_H\)





Definition of Left Congruence Modulo $H$



Thus $\RR^l_H$ is transitive.
$\Box$

So $\RR^l_H$ is an equivalence relation.
$\blacksquare$


Also see
Definition:Left Coset
Definition:Left Coset Space
Right Congruence Modulo Subgroup is Equivalence Relation


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.1$. The quotient sets of a subgroup: Lemma $\text {(ii)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Subgroups: Theorem $11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 37$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.1$ Another approach to cosets
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Proposition $5.3$




