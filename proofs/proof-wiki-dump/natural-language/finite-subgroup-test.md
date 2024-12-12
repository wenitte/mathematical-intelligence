# 

Source: https://proofwiki.org/wiki/Finite_Subgroup_Test



Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a non-empty finite subset of $G$.

Then:

$H$ is a subgroup of $G$
if and only if:

$\forall a, b \in H: a \circ b \in H$

That is, a non-empty finite subset of $G$ is a subgroup if and only if it is closed.


Proof 1
Let $H$ be a finite subset of $G$ such that $a, b \in H \implies a \circ b \in H$.
From the Two-Step Subgroup Test, it follows that we only need to show that $a \in H \implies a^{-1} \in H$.
So, let $a \in H$.
First it is straightforward to show by induction that $\set {x \in G: x = a^n: n \in \N} \subseteq H$.
That is, $a \in H \implies \forall n \in \N: a^n \in H$.

Now, since $H$ is finite, we have that the order of $a$ is finite.
Let the order of $a$ be $m$.
From Inverse Element is Power of Order Less 1 we have that $a^{m-1} = a^{-1}$.
As $a^{m-1} \in H$ (from above) the result follows.
$\blacksquare$


Proof 2
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
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $15$




