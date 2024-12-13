# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosecant_of_x_over_a_over_x_squared



Theorem
$\ds \int \dfrac 1 {x^2} \arccsc \frac x a \rd x = \begin{cases}
-\dfrac 1 x \arccsc \dfrac x a - \dfrac {\sqrt{x^2 - a^2} } {a x} + C & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
-\dfrac 1 x \arccsc \dfrac x a + \dfrac {\sqrt{x^2 - a^2} } {a x} + C & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
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







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




First let $\arccsc \dfrac x a$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int \dfrac 1 {x^2} \arccsc \frac x a\)

\(=\)







\(\ds \frac {-1} x \arccsc \frac x a - \int \frac {-1} x \paren {\frac {-a} {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a - a \int \frac {\d x} {x \sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a - a \paren {\frac {\sqrt {x^2 - a^2} } {a^2 x} } + C\)





Primitive of $\dfrac 1 {x^2 \sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a - \frac {\sqrt{x^2 - a^2} } {a x} + C\)





simplifying




Similarly, let $\arccsc \dfrac x a$ be in the interval $\openint {-\dfrac \pi 2} 0$.
Then:














\(\ds \int \dfrac 1 {x^2} \arccsc \frac x a\)

\(=\)







\(\ds \frac {-1} x \arccsc \frac x a - \int \frac {-1} x \paren {\frac a {x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a + a \int \frac {\d x} {x \sqrt {x^2 - a^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a + a \paren {\frac {\sqrt {x^2 - a^2} } {a^2 x} } + C\)





Primitive of $\dfrac 1 {x^2 \sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds -\dfrac 1 x \arccsc \dfrac x a + \frac {\sqrt {x^2 - a^2} } {a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2} \arcsin \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccos \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arctan \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccot \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arcsec \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.502$




