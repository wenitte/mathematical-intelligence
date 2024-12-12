# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Distance_to_Nearest_Integer_Function



Theorem
The following definitions of the distance to nearest integer function $\norm \cdot: \R \to \closedint 0 {\dfrac 1 2}$ are equivalent:

Definition 1
$\norm \alpha:= \min \set {\size {n - \alpha}: n \in \Z}$
Definition 2
$\norm \alpha:= \min \set {\set \alpha, 1 - \set \alpha}$
where $\set \alpha$ is the fractional part of $\alpha$.


Proof
Let $\alpha \in \R$, $n \in \Z$.
From Real Number is between Floor Functions:

$\floor \alpha \le \alpha < \floor \alpha + 1$

For any $n < \floor \alpha \le \alpha$:














\(\ds \size {n - \alpha}\)

\(=\)







\(\ds \alpha - n\)





Definition of Absolute Value














\(\ds \)

\(>\)







\(\ds \alpha - \floor \alpha\)




















\(\ds \)

\(=\)







\(\ds \size {\alpha - \floor \alpha}\)





Definition of Absolute Value



For any $n > \floor \alpha + 1 > \alpha$:














\(\ds \size {n - \alpha}\)

\(=\)







\(\ds n - \alpha\)





Definition of Absolute Value














\(\ds \)

\(>\)







\(\ds \floor \alpha + 1 - \alpha\)




















\(\ds \)

\(=\)







\(\ds \size {\floor \alpha + 1 - \alpha}\)





Definition of Absolute Value



Thus:














\(\ds \min \set {\size {n - \alpha}: n \in \Z}\)

\(=\)







\(\ds \min \set {\size {\floor \alpha - \alpha}, \size {\floor \alpha + 1 - \alpha} }\)





Other $n$'s are disregarded by above














\(\ds \)

\(=\)







\(\ds \min \set {\alpha - \floor \alpha, \floor \alpha + 1 - \alpha}\)




















\(\ds \)

\(=\)







\(\ds \min \set {\set \alpha, 1 - \set \alpha}\)





Definition of Fractional Part



which shows that the definitions are indeed equivalent.
$\blacksquare$





