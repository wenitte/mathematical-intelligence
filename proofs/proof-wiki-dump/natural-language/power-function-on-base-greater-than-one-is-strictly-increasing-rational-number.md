# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_Greater_than_One_is_Strictly_Increasing/Rational_Number

Theorem
Let $a \in \R$ be a real number such that $a > 1$.
Let $f: \Q \to \R$ be the real-valued function defined as:

$\map f q = a^q$
where $a^q$ denotes $a$ to the power of $q$.

Then $f$ is strictly increasing.


Proof
Let $\dfrac r s, \dfrac t u \in \Q$, where $r, t \in \Z$ are integers and $s, u \in \Z_{>0}$ are strictly positive integers.
Let $\dfrac r s < \dfrac t u$.

From Ordering of Reciprocals:

$0 < \dfrac 1 a < 1$

So:














\(\ds \paren {\frac 1 a}^{t / u}\)

\(<\)







\(\ds \paren {\frac 1 a}^{r / s}\)





Power Function on Base between Zero and One is Strictly Decreasing: Rational Number








\(\ds \leadsto \ \ \)





\(\ds \sqrt [u] {\paren {\frac 1 a}^t}\)

\(<\)







\(\ds \sqrt [s] {\paren {\frac 1 a}^r}\)





Definition of Rational Power








\(\ds \leadsto \ \ \)





\(\ds \sqrt [u] {\paren {\frac 1 {a^t} } }\)

\(<\)







\(\ds \sqrt [s] {\paren {\frac 1 {a^r} } }\)





Real Number to Negative Power: Integer








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\sqrt [u] {a^t} }\)

\(<\)







\(\ds \frac 1 {\sqrt [s] {a^r} }\)





Root of Reciprocal is Reciprocal of Root








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^{t / u} }\)

\(<\)







\(\ds \frac 1 {a^{r / s} }\)





Definition of Rational Power








\(\ds \leadsto \ \ \)





\(\ds a^{r / s}\)

\(<\)







\(\ds a^{t / u}\)





Ordering of Reciprocals




Hence the result.
$\blacksquare$





