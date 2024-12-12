# 

Source: https://proofwiki.org/wiki/Derivative_of_Generating_Function/General_Result



Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $m$ be a positive integer.
Then:

$\ds \dfrac {\d^m} {\d z^m} \map G z = \sum_{k \mathop \ge 0} \dfrac {\paren {k + m}!} {k!} a_{k + m} z^k$


Corollary
Let the coefficient of $z^n$ extracted from $\map G z$ be denoted:

$\sqbrk {z^n} \map G z := a_n$
Then:

$\sqbrk {z^m} \map G z = \dfrac 1 {m!} \map {G^{\paren m} } 0$
where $G^{\paren m}$ denotes the $m$th derivative of $G$.


Proof
Proof by induction:


Basis for the Induction
When $n = 0$, we have:

$\dfrac {\d^0} {\d z^0} \map G z = \map G z$
Also:

$\ds \sum_{k \mathop \ge 0} \dfrac {\paren {k + 0}!} {k!} a_{k + 0} z^k = \sum_{k \mathop \ge 0} a_k z^k$
This is the basis for the induction.


Induction Hypothesis
$\ds \forall n \in \N: n \ge 0: \dfrac {\d^n} {\d z^n} \map G z = \sum_{k \mathop \ge 0} \dfrac {\paren {k + n}!} {k!} a_{k + n} z^k$
This is the induction hypothesis.
It is to be demonstrated that:

$\ds \dfrac {\d^{n + 1} } {\d z^{n + 1} } \map G z = \sum_{k \mathop \ge 0} \dfrac {\paren {k + n + 1}!} {k!} a_{k + n + 1} z^k$


Induction Step
This is the induction step:
Consider $m = n + 1$.














\(\ds \dfrac {\d^{n + 1} } {\d z^{n + 1} } \map G z\)

\(=\)







\(\ds \dfrac \d {\d z} \paren {\frac {\d^n} {\d z^n} \map G z }\)




















\(\ds \)

\(=\)







\(\ds \dfrac \d {\d z} \paren {\sum_{k \mathop \ge 0} \dfrac {\paren {k + n}!} {k!} a_{k + n} z^k}\)





by induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {\dfrac \d {\d z} \dfrac {\paren {k + n}!} {k!} a_{k + n} z^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac {k \paren {k + n}!} {k!} a_{k + n} z^{k - 1}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {k \paren {k + n}!} {k!} a_{k + n} z^{k - 1}\)





as the zeroth term vanishes when $k = 0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {\paren {k + n}!} {\paren {k - 1}!} a_{k + n} z^{k - 1}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac {\paren {k + n + 1}!} {k!} a_{k + n + 1} z^k\)





Translation of Index Variable of Summation




Hence the result by induction.
$\blacksquare$





