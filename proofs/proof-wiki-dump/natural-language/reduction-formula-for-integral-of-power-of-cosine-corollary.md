# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Cosine/Corollary



Corollary to Reduction Formula for Integral of Power of Cosine
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let $a \in \R_{\ne 0}$ be a non-zero real number
Then:

$\ds \int \cos^n a x \rd x = \dfrac {\cos^{n - 1} a x \sin a x} {a n} + \dfrac {n - 1} n \int \cos^{n - 2} a x \rd x$
is a reduction formula for $\ds \int \cos^n a x \rd x$.


Proof













\(\ds \int \cos^n a x \rd x\)

\(=\)







\(\ds \frac 1 a \int \cos^n a x \map \rd {a x}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac {\cos^{n - 1} a x \sin a x} n + \frac {n - 1} n \int \cos^{n - 2} a x \map \rd {a x} }\)





Reduction Formula for Integral of Power of Cosine














\(\ds \)

\(=\)







\(\ds \frac {\cos^{n-1} a x \sin a x} {a n} + \frac 1 a \paren {a \frac {n - 1} n \int \cos^{n - 2} a x \rd x}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\cos^{n-1} a x \sin a x} {a n} + \frac {n - 1} n \int \cos^{n - 2} a x \rd x\)





simplification



$\blacksquare$


Also see
Primitive of $\sin^n a x$
Primitive of $\tan^n a x$
Primitive of $\cot^n a x$
Primitive of $\sec^n a x$
Primitive of $\csc^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.396$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $61$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae




