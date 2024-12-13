# 

Source: https://proofwiki.org/wiki/Lowest_Common_Multiple_of_Integers_with_Common_Divisor

Theorem
Let $b, d \in \Z_{>0}$ be (strictly) positive integers
Then:

$\lcm \set {a b, a d} = a \lcm \set {b, d}$
where:

$a \in \Z_{>0}$
$\lcm \set {b, d}$ denotes the lowest common multiple of $m$ and $n$.


Proof
We have that:














\(\ds b\)

\(\divides\)







\(\ds \lcm \set {b, d}\)





Definition of Lowest Common Multiple of Integers












\(\, \ds \land \, \)

\(\ds d\)

\(\divides\)







\(\ds \lcm \set {b, d}\)














\(\ds \leadsto \ \ \)





\(\ds r b\)

\(=\)







\(\ds \lcm \set {b, d}\)





for some $r \in \Z$












\(\, \ds \land \, \)

\(\ds s d\)

\(=\)







\(\ds \lcm \set {b, d}\)





for some $s \in \Z$








\(\ds \leadsto \ \ \)





\(\ds r \paren {a b}\)

\(=\)







\(\ds a \lcm \set {b, d}\)


















\(\, \ds \land \, \)

\(\ds s \paren {a d}\)

\(=\)







\(\ds a \lcm \set {b, d}\)














\(\ds \leadsto \ \ \)





\(\ds a b\)

\(\divides\)







\(\ds a \lcm \set {b, d}\)





Definition of Divisor of Integer












\(\, \ds \land \, \)

\(\ds a d\)

\(\divides\)







\(\ds a \lcm \set {b, d}\)










Suppose $n \in \Z$ such that $a b \divides n$ and $a d \divides n$.
It will be shown that $a \lcm \set {b, d} \divides n$.
So:














\(\ds a b\)

\(\divides\)







\(\ds n\)





by hypothesis












\(\, \ds \land \, \)

\(\ds a d\)

\(\divides\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds a r b\)

\(=\)







\(\ds n\)





for some $r \in \Z$












\(\, \ds \land \, \)

\(\ds a s d\)

\(=\)







\(\ds n\)





for some $s \in \Z$








\(\ds \leadsto \ \ \)





\(\ds r b\)

\(=\)







\(\ds \dfrac n a\)


















\(\, \ds \land \, \)

\(\ds s d\)

\(=\)







\(\ds \dfrac n a\)














\(\ds \leadsto \ \ \)





\(\ds b\)

\(\divides\)







\(\ds \dfrac n a\)





Definition of Divisor of Integer












\(\, \ds \land \, \)

\(\ds d\)

\(\divides\)







\(\ds \dfrac n a\)














\(\ds \leadsto \ \ \)





\(\ds \lcm \set {b, d}\)

\(\divides\)







\(\ds \dfrac n a\)





LCM Divides Common Multiple












\(\, \ds \land \, \)

\(\ds a \lcm \set {b, d}\)

\(\divides\)







\(\ds n\)










Thus we have:

$a b \divides a \lcm \set {b, d} \land a d \divides a \lcm \set {b, d}$
and:

$a b \divides n \land a d \divides n \implies a \lcm \set {b, d} \divides n$
It follows from LCM iff Divides All Common Multiples that:

$\lcm \set {a b, a d} = a \lcm \set {b, d}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $6$




