# 

Source: https://proofwiki.org/wiki/Ceiling_defines_Equivalence_Relation



Theorem
Let $\RR$ be the relation defined on $\R$ such that:

$\forall x, y, \in \R: \tuple {x, y} \in \RR \iff \ceiling x = \ceiling y$
where $\ceiling x$ is the ceiling of $x$.

Then $\RR$ is an equivalence, and $\forall n \in \Z$, the $\RR$-class of $n$ is the half-open interval $\hointl {n - 1} n$.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
$\forall x \in \R: \ceiling x = \ceiling x$
Thus the ceiling function is reflexive.
$\Box$


Symmetry
$\forall x, y \in \R: \ceiling x = \ceiling y \implies \ceiling y = \ceiling x$
Thus the ceiling function is symmetric.
$\Box$


Transitivity
Let:

$\ceiling x = \ceiling y$
$\ceiling y = \ceiling z$
Let:

$n = \ceiling x = \ceiling y = \ceiling z$
which follows from transitivity of $=$.
Thus:

$x = n - t_x, y = n - t_y, z = n - t_z: t_x, t_y, t_z \in \hointr 0 1$
from Real Number is Ceiling minus Difference‎.
So:

$x = n - t_x$
and:

$z = n - t_z$
and so:

$\ceiling x = \ceiling z$
Thus the ceiling function is transitive.
$\Box$

Thus we have shown that $\RR$ is an equivalence.

Now we show that the $\RR$-class of $n$ is the interval $\hointl {n - 1} n$.

Defining $\RR$ as above, with $n \in \Z$:














\(\ds x\)

\(\in\)







\(\ds \eqclass n \RR\)














\(\ds \leadsto \ \ \)





\(\ds \ceiling x\)

\(=\)







\(\ds \ceiling n = n\)














\(\ds \leadsto \ \ \)

\(\ds \exists t \in \hointr 0 1: \, \)



\(\ds x\)

\(=\)







\(\ds n - t\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \hointl {n - 1} n\)









$\blacksquare$


Also see
Floor defines Equivalence Relation




