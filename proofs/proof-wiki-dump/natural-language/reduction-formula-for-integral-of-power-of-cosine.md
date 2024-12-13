# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Cosine



Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let:

$I_n := \ds \int \cos^n x \rd x$
Then:

$I_n = \dfrac {\cos^{n - 1} x \sin x} n + \dfrac {n - 1} n I_{n - 2}$
is a reduction formula for $\ds \int \cos^n x \rd x$.


Corollary
$\ds \int \cos^n a x \rd x = \dfrac {\cos^{n - 1} a x \sin a x} {a n} + \dfrac {n - 1} n \int \cos^{n - 2} a x \rd x$


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\rd v} {\rd x} \rd x = u v - \int v \frac {\rd u} {\rd x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cos^{n - 1} x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\rd u} {\rd x}\)

\(=\)







\(\ds -\paren {n - 1} \cos ^{n - 2} x \sin x\)





Chain Rule for Derivatives, Derivative of Cosine Function, Derivative of Power




and let:














\(\ds \frac {\rd v} {\rd x}\)

\(=\)







\(\ds \cos x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sin x\)





Primitive of Cosine Function




Then:














\(\ds I_n\)

\(=\)







\(\ds \int \cos^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \cos^{n - 1} x \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds \cos^{n - 1} x \sin x - \int \sin x \paren {-\paren {n - 1} \cos^{n - 2} x \sin x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \cos^{n - 1} x \sin x + \int \paren {n - 1} \cos^{n - 2} x \sin^2 x \rd x\)





rearranging














\(\ds \)

\(=\)







\(\ds \cos^{n - 1} x \sin x + \int \paren {n - 1} \cos^{n - 2} x \paren {1 - \cos^2 x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \cos^{n - 1} x \sin x + \paren {n - 1} \int \cos^{n - 2} x \rd x - \int \paren {n - 1} \cos^n x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \cos^{n - 1} x \sin x + \paren {n - 1} I_{n - 2} - \paren {n - 1} I_n\)





substituting for $I_n$ and $I_{n - 2}$








\(\ds \leadsto \ \ \)





\(\ds n I_n\)

\(=\)







\(\ds \cos^{n - 1} x \sin x + \paren {n - 1} I_{n - 2}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds I_n\)

\(=\)







\(\ds \frac {\cos^{n - 1} x \sin x} n + \dfrac {n - 1} n I_{n - 2}\)





dividing both sides by $n$



$\blacksquare$


Also see
Reduction Formula for Integral of Power of Sine
Reduction Formula for Integral of Power of Tangent


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae




