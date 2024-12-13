# 

Source: https://proofwiki.org/wiki/Rational_Number_plus_Irrational_Number_is_Irrational

Theorem
Rational number plus irrational number is irrational.
That is, let $x \in \Q$, $y \in \R \setminus \Q$ and $x + y = z$.

Then $z \in \R \setminus \Q$.


Proof
Aiming for a contradiction, suppose $z \in \Q$.
By definition of rational numbers:

$\exists a, b \in \Z, b \ne 0: x = \dfrac a b$
$\exists c, d \in \Z, d \ne 0: z = \dfrac c d$
Then:














\(\ds x + y\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac a b + y\)

\(=\)







\(\ds \dfrac c d\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {b c - a d} {b d}\)





by rearrangement



This shows that $y$ is  rational, which is a contradiction.
By Proof by Contradiction, $z$ is irrational.
$\blacksquare$





