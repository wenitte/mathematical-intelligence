# 

Source: https://proofwiki.org/wiki/Irrationality_of_Logarithm

Theorem
Let $a, b \in \N_{>0}$ such that both $\nexists m, n \in \N_{>0}: a^m = b^n$.
Then $\log_b a$ is irrational.


Proof
Aiming for a contradiction, suppose $\log_b a$ is rational.
Then:

$\exists p, q \in \N_{>0} : \log_b a = \dfrac p q$
where $p \perp q$.

Then:














\(\ds \log_b a\)

\(=\)







\(\ds \dfrac p q\)














\(\ds \leadsto \ \ \)





\(\ds b^{\frac p q}\)

\(=\)







\(\ds a\)





Definition of Real General Logarithm








\(\ds \leadsto \ \ \)





\(\ds \sqrt [q] {\paren {b^p} }\)

\(=\)







\(\ds a\)





Definition of Rational Power








\(\ds \leadsto \ \ \)





\(\ds b^p\)

\(=\)







\(\ds a^q\)





Definition of Root of Number



which contradicts the initial assumption:

$\nexists m, n \in \N: a^m = b^n$
Hence the result by Proof by Contradiction.
$\blacksquare$





