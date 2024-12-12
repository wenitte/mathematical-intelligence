# 

Source: https://proofwiki.org/wiki/Exponential_of_Real_Number_is_Strictly_Positive/Proof_1

Theorem
Let $x$ be a real number.
Let $\exp$ denote the (real) exponential function.

Then:

$\forall x \in \R : \exp x > 0$


Proof
This proof assumes the series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{n \mathop = 0}^\infty \dfrac {x^n} {n!}$

First, suppose $0 < x$.

Then:














\(\ds 0\)

\(<\)







\(\ds x^n\)





Power Function is Strictly Increasing over Positive Reals: Natural Exponent








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {x^n} {n!}\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)





Ordering of Series of Ordered Sequences








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \exp x\)





Definition of $\exp$




So $\exp$ is strictly positive on $\R_{>0}$.

From Exponential of Zero, $\exp 0 = 1$.

Finally, suppose that $x < 0$.

Then:














\(\ds 0\)

\(<\)







\(\ds -x\)





Order of Real Numbers is Dual of Order of their Negatives








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \map \exp {-x}\)





from above








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac 1 {\exp x}\)





Reciprocal of Real Exponential








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \exp x\)





Ordering of Reciprocals




So $\exp$ is strictly positive on $\R_{<0}$.

Hence the result.
$\blacksquare$





