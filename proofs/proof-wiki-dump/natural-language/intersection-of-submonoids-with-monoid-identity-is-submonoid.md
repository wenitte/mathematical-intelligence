# 

Source: https://proofwiki.org/wiki/Intersection_of_Submonoids_with_Monoid_Identity_is_Submonoid



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of submonoids of $S$.
For each $S_\alpha \in \family {S_\alpha}_{\alpha \mathop \in I}$, let $e_S \in S_\alpha$.
Let $\ds \bigcap_{\alpha \mathop \in I} S_\alpha$ denote the intersection of $\family {S_\alpha}$

Then $\ds \bigcap_{\alpha \mathop \in I} S_\alpha$ is a submonoid of $S$.


Proof
First we show that $\struct {\ds \bigcap_{\alpha \mathop \in I} S_\alpha, \circ}$ is a semigroup:


Semigroup Axiom $\text S 0$: Closure













\(\ds a, b\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} S_\alpha\)














\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds a, b\)

\(\in\)







\(\ds S_\alpha\)





Definition of Intersection of Family








\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds a \circ b\)

\(\in\)







\(\ds S_\alpha\)





Semigroup Axiom $\text S 0$: Closure for all $S_\alpha$








\(\ds \leadsto \ \ \)





\(\ds a \circ b\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} S_\alpha\)









$\Box$


Semigroup Axiom $\text S 1$: Associativity
From the above we have that $\ds \bigcap_{\alpha \mathop \in I} S_\alpha$ is closed under $\circ$.
From Restriction of Associative Operation is Associative we have that $\circ$ is associative on $\ds \bigcap_{\alpha \mathop \in I} S_\alpha$.
Hence we have that $\struct {\ds \bigcap_{\alpha \mathop \in I} S_\alpha, \circ}$ is a semigroup.
$\Box$


Identity Element
We are given that:

$\forall \alpha \in I: e_S \in S_\alpha$









\(\ds \forall a \in S: \, \)



\(\ds a \circ e_S\)

\(=\)







\(\ds e_S\)





Definition of Identity Element










\(\ds \forall \alpha \in I: \, \)



\(\ds e_S\)

\(\in\)







\(\ds S_\alpha\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \forall a \in S_\alpha: \, \)



\(\ds a \circ e_S\)

\(=\)







\(\ds e_S\)





by hypothesis



That is, for all $S_\alpha$, $e_S$ is the identity element of $S_\alpha$
Thus for all $S_\alpha$, $\struct {S_\alpha, \circ}$ is a monoid.
$\blacksquare$


Sources
1999: J.C. Rosales and P.A. García-Sánchez: Finitely Generated Commutative Monoids ... (previous) ... (next): Chapter $1$: Basic Definitions and Results




