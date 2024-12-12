# 

Source: https://proofwiki.org/wiki/Floor_defines_Equivalence_Relation



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor function of $x$.
Let $\RR$ be the relation defined on $\R$ such that:

$\forall x, y, \in \R: \tuple {x, y} \in \RR \iff \floor x = \floor y$

Then $\RR$ is an equivalence, and $\forall n \in \Z$, the $\RR$-class of $n$ is the half-open interval $\hointr n {n + 1}$.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
$\forall x \in \R: \floor x = \floor x$
Thus the floor function is reflexive.
$\Box$


Symmetry
$\forall x, y \in \R: \floor x = \floor y \implies \floor y = \floor x$
Thus the floor function is symmetric.
$\Box$


Transitivity
Let $\floor x = \floor y$ and $\floor y = \floor z$.
Let $n = \floor x = \floor y = \floor z$, which follows from transitivity of $=$.
Thus from Real Number is Floor plus Difference‎:

$x = n + t_x, y = n + t_y, z = n + t_z: t_x, t_y, t_z \in \hointr 0 1$
Thus:

$x = n + t_x, z = n + t_z$
and:

$\floor x = \floor z$

Thus the floor function is transitive.
$\Box$

Thus we have shown that $\RR$ is an equivalence relation.
$\Box$

Now we show that the $\RR$-class of $n$ is the interval $\hointr n {n + 1}$.

Defining $\RR$ as above, with $n \in \Z$:














\(\ds x\)

\(\in\)







\(\ds \eqclass n \RR\)














\(\ds \leadsto \ \ \)





\(\ds \floor x\)

\(=\)







\(\ds \floor n\)




















\(\ds \)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)

\(\ds \exists t \in \hointr 0 1: \, \)



\(\ds x\)

\(=\)







\(\ds n + t\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \hointr n {n + 1}\)









$\blacksquare$


Also see
Ceiling defines Equivalence Relation


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $2$. Equivalence Relations: Exercise $2$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.4$: Decomposition of a set into classes. Equivalence relations: Example $3$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $1$




