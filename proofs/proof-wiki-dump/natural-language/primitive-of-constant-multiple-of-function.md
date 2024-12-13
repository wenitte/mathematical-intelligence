# 

Source: https://proofwiki.org/wiki/Primitive_of_Constant_Multiple_of_Function



Theorem
Let $f$ be a real function which is integrable.
Let $c$ be a constant.

Then:

$\ds \int c \map f x \rd x = c \int \map f x \rd x$


Proof 1
From Linear Combination of Primitives:

$\ds \int \paren {\lambda \map f x + \mu \map g x} \rd x = \lambda \int \map f x \rd x + \mu \int \map g x \rd x$
The result follows by setting $\lambda = c$ and $\mu = 0$.
$\blacksquare$


Proof 2
From Derivative of Constant Multiple:

$\map {\dfrac \d {\d x} } {c \map f x} = c \map {\dfrac \d {\d x} } {\map f x}$
The result follows from the definition of primitive.


Examples
Primitive of $2 \cos x$
$\ds \int 2 \cos x \rd x = 2 \sin x + C$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: General Rules: $\text {II}$.
1967: Michael Spivak: Calculus ... (previous) ... (next): Part $\text {III}$: Derivatives and Integrals: Chapter $18$: Integration in Elementary Terms
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.2$
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (next): Appendix $\text I$: Table of Indefinite Integrals $1$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $3$.




