# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Sine/Corollary



Corollary to Reduction Formula for Integral of Power of Sine
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let $a \in \R_{\ne 0}$ be a non-zero real number
Then:

$\ds \int \sin^n a x \rd x = \dfrac {n - 1} n \int \sin^{n - 2} a x \rd x - \dfrac {\sin^{n - 1} a x \cos a x} {a n}$
is a reduction formula for $\ds \int \sin^n a x \rd x$.


Proof













\(\ds \int \sin^n a x \rd x\)

\(=\)







\(\ds \frac 1 a \int \sin^n a x \map \rd {a x}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\dfrac {n - 1} n \int \sin^{n - 2} a x \map \rd {a x} - \dfrac {\sin^{n - 1} a x \cos a x} n}\)





Reduction Formula for Integral of Power of Sine














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {a \dfrac {n - 1} n \int \sin^{n - 2} a x \rd x} - \dfrac {\sin^{n - 1} a x \cos a x} {a n}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n \int \sin^{n - 2} a x \rd x - \dfrac {\sin^{n - 1} a x \cos a x} {a n}\)





simplification



$\blacksquare$


Also see
Primitive of $\cos^n a x$
Primitive of $\tan^n a x$
Primitive of $\cot^n a x$
Primitive of $\sec^n a x$
Primitive of $\csc^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.366$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $60$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae




