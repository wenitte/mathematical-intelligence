# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_minus_a_squared/Logarithm_Form

Theorem
$\ds \int \sqrt {x^2 - a^2} \rd x = \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $\size x \ge a$.


Proof
We have that $\sqrt {x^2 - a^2}$ is defined only when $x^2 \ge a^2$, that is, either:

$x \ge a$
or:

$x \le -a$
where it is assumed that $a > 0$.

First let $x \ge a$.














\(\ds x\)

\(=\)







\(\ds a \cosh u\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sinh u\)





Derivative of Hyperbolic Cosine




Also:














\(\ds x\)

\(=\)







\(\ds a \cosh u\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - a^2\)

\(=\)







\(\ds a^2 \cosh^2 u - a^2\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {\cosh^2 u + 1}\)




















\(\ds \)

\(=\)







\(\ds a^2 \sinh^2 u\)





Difference of Squares of Hyperbolic Cosine and Sine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt {x^2 - a^2}\)

\(=\)







\(\ds a \sinh u\)










and:














\(\ds x\)

\(=\)







\(\ds a \cosh u\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds \arcosh \frac x a\)





Definition of Real Area Hyperbolic Cosine




Thus:














\(\ds \int \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \sqrt {x^2 - a^2} \, a \sinh u \rd u\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \int a^2 \sinh^2 u \rd u\)





substituting for $\sqrt {x^2 - a^2}$ from $(2)$














\(\ds \)

\(=\)







\(\ds a^2 \int \sinh^2 u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^2 \frac {\sinh u \cosh u - u} 2 + C\)





Primitive of $\sinh^2 u$: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 a \sinh u a \cosh u - \frac {a^2 u} 2 + C\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac 1 2 x a \sinh u - \frac {a^2 u} 2 + C\)





substituting $x = a \cosh u$














\(\ds \)

\(=\)







\(\ds \frac 1 2 x \sqrt {x^2 - a^2} - \frac {a^2 u} 2 + C\)





substituting $\sqrt {x^2 - a^2} = a \sinh u$ from $(2)$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \cosh^{-1} \frac x a + C\)





substituting for $\theta$ from $(3)$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \paren {\map \ln {x + \sqrt {x^2 - a^2} } - \ln a} + C\)





$\arcosh \dfrac x a$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \map \ln {x + \sqrt {x^2 - a^2} } + \frac {a^2} 2 \ln a + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \map \ln {x + \sqrt {x^2 - a^2} } + C\)





subsuming $\dfrac {a^2} 2 \ln a$ into arbitrary constant














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } + C\)





Definition of Absolute Value



Now suppose $x \le -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:














\(\ds \int \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds -\int \sqrt {\paren {-z}^2 - a^2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \sqrt {\paren z^2 - a^2} \rd z\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {z \sqrt {z^2 - a^2} } 2 + \frac {a^2} 2 \map \ln {z + \sqrt {z^2 - a^2} } + C\)





from above














\(\ds \)

\(=\)







\(\ds -\frac {z \sqrt {z^2 - a^2} } 2 - \frac {a^2} 2 \paren {\map \ln {z - \sqrt {z^2 - a^2} } - \map \ln {a^2} } + C\)





Negative of $\map \ln {z + \sqrt {z^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds -\frac {z \sqrt {z^2 - a^2} } 2 - \frac {a^2} 2 \map \ln {z - \sqrt {z^2 - a^2} } + C\)





subsuming $-\dfrac {a^2 \map \ln {a^2} } 2$ into constant














\(\ds \)

\(=\)







\(\ds -\frac {\paren {-x} \sqrt {\paren {-x}^2 - a^2} } 2 - \frac {a^2} 2 \map \ln {\paren {-x} - \sqrt {\paren {-x}^2 - a^2} } + C\)





substituting back for $x$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \map \ln {-x - \sqrt {x^2 - a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as $-x - \sqrt {x^2 - a^2} > 0$: Definition of Absolute Value



The result follows.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.41$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.216$
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $27$.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




