# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_minus_a_squared/Logarithm_Form



Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $0 < a < \size x$.


Corollary
$\ds \int \frac {\d x} {-\sqrt {x^2 - a^2} } = \ln \size {x - \sqrt {x^2 - a^2} } + C$


Proof
We have that $\sqrt {x^2 - a^2}$ is defined only when $x^2 > a^2$, that is, either:

$x > a$
or:

$x < -a$
where it is assumed that $a > 0$.

Consider the arcsecant substitution:

$u = \arcsec {\dfrac x a}$
which is defined for all $x$ such that $\size {\dfrac x a} \ge 1$.
That is:

$\size x \ge a$
Hence from Shape of Secant Function, this substitution is valid for all for all $x$ such that $\size {\dfrac x a} > 1$.















\(\ds u\)

\(=\)







\(\ds \arcsec {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sec u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sec u \tan u\)





Derivative of Secant Function




Let $x > a$.
Then:














\(\ds \int \frac 1 {\sqrt {x^2 - a^2} } \rd x\)

\(=\)







\(\ds \int \frac {a \sec u \tan u} {\sqrt {a^2 \sec^2 u - a^2} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a a \int \frac {\sec u \tan u} {\sqrt {\sec^2 u - 1} } \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \sec u \frac {\tan u} {\sqrt {\tan^2 u} } \rd u\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \sec u \rd u\)





as $x > 1$ both $\sec u$ and $\tan u$ are greater than $0$














\(\ds \)

\(=\)







\(\ds \ln \size {\sec u + \tan u} + C\)





Primitive of $\sec x$: Secant plus Tangent Form














\(\ds \)

\(=\)







\(\ds \map \ln {\sec u + \tan u} + C\)





as both $\sec u$ and $\tan u$ are greater than $0$














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\frac {x^2} {a^2} - 1} } + C\)





substituting back: $\sec u = \dfrac x a$ and Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\frac {x^2 - a^2} {a^2} } } + C\)





rearrangement














\(\ds \)

\(=\)







\(\ds \map \ln {\frac {x + \sqrt {x^2 - a^2} } a} + C\)





rearrangement














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - a^2} - \ln a} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - a^2} } + C\)





subsuming $-\ln a$ into constant














\(\ds \)

\(=\)







\(\ds \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as $x + \sqrt {x^2 - a^2} > 0$ for $x > a$




Now suppose $x < -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:














\(\ds \int \frac {\d x} {\sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {-\d z} {\sqrt {\paren {-z}^2 - a^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\d z} {\sqrt {z^2 - a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds -\map \ln {z + \sqrt {z^2 - a^2} } + C\)





from above














\(\ds \)

\(=\)







\(\ds \map \ln {z - \sqrt {z^2 - a^2} } - \map \ln {a^2} + C\)





Negative of $\map \ln {z + \sqrt {z^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \map \ln {z - \sqrt {z^2 - a^2} } + C\)





subsuming $-\map \ln {a^2}$ into constant














\(\ds \)

\(=\)







\(\ds \map \ln {-x - \sqrt {\paren {-x}^2 - a^2} } + C\)





substituting back for $x$














\(\ds \)

\(=\)







\(\ds \map \ln {-\paren {x + \sqrt {x^2 - a^2} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as $x + \sqrt {x^2 - a^2} < 0$ for $x < -a$



The result follows.
$\blacksquare$


Also presented as
Some sources present this in the form:

$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \ln \size {\dfrac {x + \sqrt {x^2 - a^2} } a} + C$
which is the same as above, except that the constant $a$ has not been subsumed into the arbitrary constant $C$.


Also see
Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$: Logarithm Form
Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $15$.
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.40$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.44$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.210$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $36$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $24$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $26$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




