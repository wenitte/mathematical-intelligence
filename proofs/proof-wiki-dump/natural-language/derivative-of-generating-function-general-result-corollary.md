# 

Source: https://proofwiki.org/wiki/Derivative_of_Generating_Function/General_Result/Corollary

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $m$ be a positive integer.
Let the coefficient of $z^n$ extracted from $\map G z$ be denoted:

$\sqbrk {z^n} \map G z := a_n$
Then:

$\sqbrk {z^m} \map G z = \dfrac 1 {m!} \map {G^{\paren m} } 0$
where $G^{\paren m}$ denotes the $m$th derivative of $G$.


Proof













\(\ds \dfrac {\d^m} {\d z^m} \map G z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac {\paren {k + m}!} {k!} a_{k + m} z^k\)





Derivative of Generating Function: General Result














\(\ds \)

\(=\)







\(\ds \dfrac {m!} {0!} a_m + \sum_{k \mathop \ge 1} \dfrac {\paren {k + m}!} {k!} a_{k + m} z^k\)




















\(\ds \)

\(=\)







\(\ds m! a_m + \sum_{k \mathop \ge 1} \dfrac {\paren {k + m}!} {k!} a_{k + m} z^k\)





Factorial of Zero








\(\ds \leadsto \ \ \)





\(\ds \map {G^{\paren m} } 0\)

\(=\)







\(\ds m! a_m\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {m!} \map {G^{\paren m} } 0\)

\(=\)







\(\ds a_m\)









$\blacksquare$





