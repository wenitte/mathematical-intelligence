# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Sine



Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let:

$I_n := \ds \int \sin^n x \rd x$
Then:

$I_n = \dfrac {n - 1} n I_{n - 2} - \dfrac {\sin^{n - 1} x \cos x} n$
is a reduction formula for $\ds \int \sin^n x \rd x$.


Corollary
$\ds \int \sin^n a x \rd x = \dfrac {n - 1} n \int \sin^{n - 2} a x \rd x - \dfrac {\sin^{n - 1} a x \cos a x} {a n}$


Proof 1
Let $n \ge 2$.
Let:

$\ds I_n := \int \sin^n x \rd x$

Then:














\(\ds I_n\)

\(=\)







\(\ds \int \sin^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sin^{n - 1} x \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sin^{n - 1} x \map \rd {-\cos x}\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x - \int \paren {-\cos x} \map \rd {\sin^{n - 1} x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x - \int \paren {-\cos x} \paren {n - 1} \sin^{n - 2} x \cos x \rd x\)





Derivative of Power and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \cos^2 x \rd x\)





Linear Combination of Primitives and rearranging














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \paren {1 - \sin^2 x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \rd x - \paren {n - 1} \int \sin^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} I_{n - 2} - \paren {n - 1} I_n\)














\(\ds \leadsto \ \ \)





\(\ds n I_n\)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} I_{n - 2}\)





adding $\paren {n - 1} I_n$ to both sides








\(\ds \leadsto \ \ \)





\(\ds I_n\)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \dfrac {\sin^{n - 1} x \cos x} n\)





dividing by $n$ and rearranging



thus demonstrating the identity for all $n \ge 2$.

When $n = 1$ this degenerates to:














\(\ds \int \sin x \rd x\)

\(=\)







\(\ds \dfrac 0 1 \int \frac 1 {\sin x} \rd x - \dfrac {\sin^0 x \cos x} 1\)




















\(\ds \)

\(=\)







\(\ds 0 - 1 \cdot \cos x\)




















\(\ds \)

\(=\)







\(\ds -\cos x\)









From Primitive of Sine Function this shows that the identity still holds for $n = 1$.
$\blacksquare$


Proof 2
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


Also see
Reduction Formula for Integral of Power of Cosine
Reduction Formula for Integral of Power of Tangent


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.12$: Wallis's Product
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae




