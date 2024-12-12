# 

Source: https://proofwiki.org/wiki/Finite_Subgroup_Test/Proof_2



Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a non-empty finite subset of $G$.

Then:

$H$ is a subgroup of $G$
if and only if:

$\forall a, b \in H: a \circ b \in H$

That is, a non-empty finite subset of $G$ is a subgroup if and only if it is closed.


Proof
Sufficient Condition
Let $H$ be a subgroup of $G$.
Then:

$\forall a, b \in H: a \circ b \in H$
by definition of subgroup.
$\Box$


Necessary Condition
Let $H$ be a non-empty finite subset of $G$ such that:

$\forall a, b \in H: a \circ b \in H$
Let $x \in H$.
We have by hypothesis that $H$ is closed under $\circ$.
Thus all elements of $\set {x, x^2, x^3, \ldots}$ are in $H$.
But $H$ is finite.
Therefore it must be the case that:

$\exists r, s \in \N: x^r = x^s$
for $r < s$.
So we can write:














\(\ds x^r\)

\(=\)







\(\ds x^s\)














\(\ds \leadsto \ \ \)





\(\ds x^r \circ e\)

\(=\)







\(\ds x^r \circ x^{s - r}\)





Definition of Identity Element, Powers of Group Elements: Sum of Indices




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds x^{s - r}\)





Cancellation Laws








\(\ds \leadsto \ \ \)





\(\ds e\)

\(\in\)







\(\ds H\)





as $H$ is closed under $\circ$



Then we have:















\(\ds e\)

\(=\)







\(\ds x^{s - r}\)





which is $(1)$








\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds x \circ x^{s - r - 1}\)





as $H$ is closed under $\circ$








\(\ds \leadsto \ \ \)





\(\ds x^{-1} \circ e\)

\(=\)







\(\ds x^{-1} \circ x \circ x^{s - r - 1}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(=\)







\(\ds x^{s - r - 1}\)





Definition of Inverse Element, Definition of Identity Element




But we have that:














\(\ds r\)

\(<\)







\(\ds s\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds s - r\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds s - r - 1\)

\(\le\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x^{s - r - 1}\)

\(\in\)







\(\ds \set {e, x, x^2, x^3, \ldots}\)














\(\ds \leadsto \ \ \)





\(\ds x^{s - r - 1}\)

\(\in\)







\(\ds H\)





as all elements of $\set {e, x, x^2, x^3, \ldots}$ are in $H$




So from $(2)$:

$x^{-1} = x^{s - r - 1}$
it follows that:

$x^{-1} \in H$
and from the Two-Step Subgroup Test it follows that $H$ is a subgroup of $G$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 36.5$: Subgroups
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Subgroups: Lemma $7$




