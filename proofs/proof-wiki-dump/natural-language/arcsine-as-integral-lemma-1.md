# 

Source: https://proofwiki.org/wiki/Arcsine_as_Integral/Lemma_1

Lemma
Let $\sin_A$ be the analytic sine function for real numbers.
Let $\arcsin_A$ denote the real arcsine function.
Then:

$\ds \map {\arcsin_A} x = \int_0^x \frac {\d x} {\sqrt {1 - x^2} }$


Proof
For this proof only, let $\sin_A$ be the analytic sine function.

Consider:

$\ds \int_0^x \frac {\d x} {\sqrt {1 - x^2} }$
Let:

$x = \sin_A \theta \iff \theta = \map {\arcsin_A} x$

Then:














\(\ds \d x\)

\(=\)







\(\ds \cos_A \theta \rd \theta\)





Derivative of Sine Function














\(\ds \int \frac {\d x} {\sqrt {1 - x^2} }\)

\(=\)







\(\ds \int \frac {\cos_A \theta \rd \theta } {\sqrt {1 - \sin_A^2 \theta} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {\cos_A \theta \rd \theta } {\sqrt {\cos_A^2 \theta} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int 1 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \theta + C\)




















\(\ds \)

\(=\)







\(\ds \map {\arcsin_A} x + C\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^x \frac {\d x} {\sqrt {1 - x^2} }\)

\(=\)







\(\ds \map {\arcsin_A} x\)





Fundamental Theorem of Calculus: Second Part



$\blacksquare$





