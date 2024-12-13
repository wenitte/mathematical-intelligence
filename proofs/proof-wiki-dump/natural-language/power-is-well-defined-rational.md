# 

Source: https://proofwiki.org/wiki/Power_is_Well-Defined/Rational

Theorem
Let $x \in \R_{> 0}$ be a (strictly) positive real number.
Let $q$ be a rational number.

Then $x^q$ is  well-defined.


Proof
Let $x \in \R_{>0}$ be fixed.
Let $q \in \Q \setminus \set 0$.
Let $\dfrac r s$ and $\dfrac t u$ be two representations of $q$.
That is, $r, s, t, u$ are non-zero integers.
We now show that:

$\dfrac r s = \dfrac t u \implies x^{r / s} = x^{t / u}$

So:














\(\ds \dfrac r s\)

\(=\)







\(\ds \dfrac t u\)














\(\ds \leadsto \ \ \)





\(\ds r u\)

\(=\)







\(\ds t s\)














\(\ds \leadsto \ \ \)





\(\ds x^{r u}\)

\(=\)







\(\ds x^{s t}\)





Power is Well-Defined: Integer








\(\ds \leadsto \ \ \)





\(\ds \paren {x^r}^u\)

\(=\)







\(\ds \paren {x^t}^s\)





Product of Indices of Real Number: Integers








\(\ds \leadsto \ \ \)





\(\ds \sqrt [u] {\paren {x^r}^u}\)

\(=\)







\(\ds \sqrt [u] {\paren {x^t}^s}\)





Existence and Uniqueness of Positive Root of Positive Real Number








\(\ds \leadsto \ \ \)





\(\ds x^r\)

\(=\)







\(\ds \sqrt [u] {\paren {x^t}^s}\)





Definition of Root of Number








\(\ds \leadsto \ \ \)





\(\ds \sqrt [s] {\paren {x^r} }\)

\(=\)







\(\ds \sqrt [s] {\sqrt [u] {\paren {x^t}^s} }\)





Existence and Uniqueness of Positive Root of Positive Real Number








\(\ds \leadsto \ \ \)





\(\ds \sqrt [s] {\paren {x^r} }\)

\(=\)







\(\ds \sqrt [u] {\sqrt [s] {\paren {x^t}^s} }\)





Root is Commutative








\(\ds \leadsto \ \ \)





\(\ds \sqrt [s] {\paren {x^r} }\)

\(=\)







\(\ds \sqrt [u] {\paren {x^t} }\)





Definition of Root of Number








\(\ds \leadsto \ \ \)





\(\ds x^{r / s}\)

\(=\)







\(\ds x^{t / u}\)





Definition of Rational Power



Hence the result.
$\blacksquare$





