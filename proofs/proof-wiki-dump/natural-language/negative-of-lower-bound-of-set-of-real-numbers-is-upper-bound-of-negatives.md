# 

Source: https://proofwiki.org/wiki/Negative_of_Lower_Bound_of_Set_of_Real_Numbers_is_Upper_Bound_of_Negatives



Theorem
Let $S$ be a subset of the real numbers $\R$.
Let $T = \set {x \in \R: -x \in S}$ be the set of negatives of the elements of $S$.

Then:

$B$ is a lower bound of $S$
if and only if:

$-B$ is an upper bound of $T$.


Proof
Let $B$ be a lower bound of $S$.
That is:

$\forall x \in S: x \ge B$

Let $x \in T$ be arbitrary.














\(\ds x\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(\ge\)







\(\ds B\)





as $B$ is a lower bound for $S$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\le\)







\(\ds -B\)





Ordering of Real Numbers is Reversed by Negation



As $x$ is arbitrary it follows that:

$\forall x \in T: x \le -B$
That is, $-B$ is an upper bound for $T$.
$\Box$


Necessary Condition
Let $U$ be an upper bound for $T$.

$\forall x \in T: x \le U$

Let $x \in S$ be arbitrary.














\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(\le\)







\(\ds U\)





as $U$ is an upper bound for $S$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\ge\)







\(\ds -U\)





Ordering of Real Numbers is Reversed by Negation



As $x$ is arbitrary it follows that:

$\forall x \in S: x \ge -U$
That is, $-U$ is a lower bound for $S$.
$\blacksquare$


Also see
Negative of Upper Bound of Set of Real Numbers is Lower Bound of Negatives




