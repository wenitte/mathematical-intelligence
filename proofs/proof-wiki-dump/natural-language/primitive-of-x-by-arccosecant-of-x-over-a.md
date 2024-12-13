# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Arccosecant_of_x_over_a



Theorem
$\ds \int x \arccsc \frac x a \rd x = \begin{cases}
\dfrac {x^2} 2 \arccsc \dfrac x a + \dfrac {a \sqrt {x^2 - a^2} } 2 + C & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac {x^2} 2 \arccsc \dfrac x a - \dfrac {a \sqrt {x^2 - a^2} } 2 + C & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}$


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







\(\ds \begin {cases} \dfrac {-a} {x \sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac a {x \sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end {cases}\)





Derivative of $\arccsc \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^2} 2\)





Primitive of Power




First let $\arccsc \dfrac x a$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int x \arccsc \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a - \int \frac {x^2} 2 \paren {\frac {-a} {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a + \frac a 2 \int \frac {x \rd x} {\sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a + \frac a 2 \sqrt {x^2 - a^2} + C\)





Primitive of $\dfrac x {\sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a + \frac {a \sqrt{x^2 - a^2} } 2 + C\)





simplifying




Similarly, let $\arccsc \dfrac x a$ be in the interval $\openint {-\dfrac \pi 2} 0$.
Then:














\(\ds \int x \arccsc \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a - \int \frac {x^2} 2 \paren {\frac {-a} {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a - \frac a 2 \int \frac {x \rd x} {\sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a - \frac a 2 \sqrt {x^2 - a^2} + C\)





Primitive of $\dfrac x {\sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccsc \frac x a - \frac {a \sqrt{x^2 - a^2} } 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \arcsin \dfrac x a$
Primitive of $x \arccos \dfrac x a$
Primitive of $x \arctan \dfrac x a$
Primitive of $x \arccot \dfrac x a$
Primitive of $x \arcsec \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.499$




