# 

Source: https://proofwiki.org/wiki/Group/Examples/Linear_Functions



Theorem
Let $G$ be the set of all real functions $\theta_{a, b}: \R \to \R$ defined as:

$\forall x \in \R: \map {\theta_{a, b} } x = a x + b$
where $a, b \in \R$ such that $a \ne 0$.

The algebraic structure $\struct {G, \circ}$, where $\circ$ denotes composition of mappings, is a group.
$\struct {G, \circ}$ is specifically non-abelian.


Proof
We verify the group axioms, in the following order (for convenience):


Group Axiom $\text G 0$: Closure
Let $\theta_{a, b}$ and $\theta_{c, d}$ be elements of $G$.
From Composition of Linear Real Functions:

$\theta_{c, d} \circ \theta_{a, b} = \theta_{a c, b c + d}$
As $a \ne 0$ and $c \ne 0$ it follows that $a c \ne 0$.
Thus $\theta_{a c, b c + d} \in G$
This proves closure of $\circ$.
$\Box$


Group Axiom $\text G 1$: Associativity
We have that Composition of Mappings is Associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
We assert that $\theta_{1, 0}$ is the identity with respect to $\circ$.














\(\ds \theta_{a, b} \circ \theta_{1, 0}\)

\(=\)







\(\ds \theta_{1 \times a, \, 0 \times a + b}\)





Composition of Linear Real Functions














\(\ds \)

\(=\)







\(\ds \theta_{a, b}\)




















\(\ds \)

\(=\)







\(\ds \theta_{a \times 1, \, b \times 1 + 0}\)




















\(\ds \)

\(=\)







\(\ds \theta_{1, 0} \circ \theta_{a, b}\)





Composition of Linear Real Functions



So indeed $\theta_{1, 0}$ is the identity for $\circ$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
For any element $\theta_{a, b} \in S$, we claim that $\theta_{1 / a, \, -b / a}$ is the inverse for $\theta_{a, b}$.
From Inverse of Linear Function on Real Numbers:

$\theta^{-1}_{a, b} = \theta_{1 / a, \, -b / a}$

Verifying this:














\(\ds \theta_{1 / a, \, -b / a} \circ \theta_{a, b}\)

\(=\)







\(\ds \theta_{a \times 1 / a, \, b \times 1 / a + \paren {-b / a} }\)





Composition of Linear Real Functions














\(\ds \)

\(=\)







\(\ds \theta_{1, 0}\)










and:














\(\ds \theta_{a, b} \circ \theta_{1 / a, \, -b / a}\)

\(=\)







\(\ds \theta_{\paren {1 / a} \times a, \, \paren {-b / a} \times a + b}\)





Composition of Linear Real Functions














\(\ds \)

\(=\)







\(\ds \theta_{1, 0}\)










We conclude that $\theta_{1 / a, \, -b / a}$ is indeed the inverse for $\theta_{a, b}$.
$\Box$

It follows that $\struct {G, \circ}$ is indeed a group.
$\Box$


Non-Abelian
Let $\theta_{a, b}$ and $\theta_{c, d}$ be elements of $G$.
From Condition for Composition of Linear Real Functions to be Commutative, it is not true in general that $\theta_{c, d} \circ \theta_{a, b} = \theta_{a, b} \circ \theta_{c, d}$.
Thus $\struct {G, \circ}$ is non-abelian by definition.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $15$




