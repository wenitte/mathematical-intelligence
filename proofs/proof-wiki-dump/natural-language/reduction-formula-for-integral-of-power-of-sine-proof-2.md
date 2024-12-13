# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Sine/Proof_2

Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let:

$I_n := \ds \int \sin^n x \rd x$
Then:

$I_n = \dfrac {n - 1} n I_{n - 2} - \dfrac {\sin^{n - 1} x \cos x} n$
is a reduction formula for $\ds \int \sin^n x \rd x$.


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin^{n - 1} x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {n - 1} \sin ^{n - 2} x \cos x\)





Chain Rule for Derivatives, Derivative of Sine Function, Derivative of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sin x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\cos x\)





Primitive of Sine Function




Then:














\(\ds \int \sin^n x \rd x\)

\(=\)







\(\ds \int \sin^{n - 1} x \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sin^{n - 1} x \paren {-\cos x} - \int \paren {-\cos x} \paren {\paren {n - 1} \sin^{n - 2} x \cos x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \int \paren {n - 1} \sin^{n - 2} x \cos^2 x \rd x - \sin^{n - 1} x \cos x\)





rearranging














\(\ds \)

\(=\)







\(\ds \int \paren {n - 1} \sin^{n - 2} x \paren {1 - \sin^2 x} \rd x - \sin^{n - 1} x \cos x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \paren {n - 1} \int \sin^{n - 2} x \rd x - \paren {n - 1} \int \sin^n x \rd x - \sin^{n - 1} x \cos x\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds n \int \sin^n x \rd x\)

\(=\)







\(\ds \paren {n - 1} \int \sin^{n - 2} x \rd x - \sin^{n - 1} x \cos x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int \sin^n x \rd x\)

\(=\)







\(\ds \dfrac {n - 1} n \int \sin^{n - 2} x \rd x - \dfrac {\sin^{n - 1} x \cos x} n\)





dividing both sides by $n$



$\blacksquare$





