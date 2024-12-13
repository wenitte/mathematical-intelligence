# 

Source: https://proofwiki.org/wiki/Intersection_of_Antisymmetric_Relations_is_Antisymmetric

Theorem
The intersection of two antisymmetric relations is also an antisymmetric relation.


Proof
Let $\RR_1$ and $\RR_2$ be antisymmetric relations on a set $S$.
Let $\RR_3 = \RR_1 \cap \RR_2$.
Hence we have:










\(\ds \forall \tuple {x, y} \in \RR_3: \, \)



\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_3\)
















\(\ds \forall \tuple {x, y} \in \RR_3: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR_1\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR_2\)










Aiming for a contradiction, suppose $\RR_3$ is not antisymmetric.
Then:










\(\ds \exists x, y \in S: x \ne y, \tuple {x, y} \in \RR_3: \, \)



\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_3\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_1\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_2\)









Hence we have:










\(\ds \exists x, y \in S, x \ne y, \tuple {x, y} \in \RR_1: \, \)



\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_1\)
















\(\ds \exists x, y \in S, x \ne y, \tuple {x, y} \in \RR_2: \, \)



\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR_2\)









That is, neither $\RR_1$ nor $\RR_2$ are antisymmetric.

From this contradiction it follows that $\RR_1 \cap \RR_2$ is an antisymmetric relation.
$\blacksquare$





