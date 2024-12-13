# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosecant_of_x_over_a



Theorem
$\ds \int \arccsc \frac x a \rd x = \begin {cases}
x \arccsc \dfrac x a + a \map \ln {x + \sqrt {x^2 - a^2} } + C & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
x \arccsc \dfrac x a - a \map \ln {x + \sqrt {x^2 - a^2} } + C & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccsc \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \begin{cases} \dfrac {-a} {x \sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac a {x \sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}\)






Derivative of $\arccsc \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




First let $\arccsc \dfrac x a$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int \arccsc \frac x a \rd x\)

\(=\)







\(\ds x \arccsc \frac x a - \int x \paren {\frac {-a} {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccsc \frac x a + a \int \frac {\d x} {\sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arccsc \frac x a + a \map \ln {x + \sqrt {x^2 - a^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$




Similarly, let $\arccsc \dfrac x a$ be in the interval $\openint {-\dfrac \pi 2} 0$.
Then:














\(\ds \int \arccsc \frac x a \rd x\)

\(=\)







\(\ds x \arccsc \frac x a - \int x \paren {\frac a {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccsc \frac x a - a \int \frac {\d x} {\sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arccsc \frac x a - a \map \ln {x + \sqrt {x^2 - a^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$



$\blacksquare$


Also see
Primitive of $\arcsin \dfrac x a$
Primitive of $\arccos \dfrac x a$
Primitive of $\arctan \dfrac x a$
Primitive of $\arccot \dfrac x a$
Primitive of $\arcsec \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.498$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions




