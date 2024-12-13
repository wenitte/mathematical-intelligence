# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arcsecant_of_x_over_a



Theorem
$\ds \int x^m \arcsec \frac x a \rd x = \begin {cases}
\dfrac {x^{m + 1} } {m + 1} \arcsec \dfrac x a - \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \\
\dfrac {x^{m + 1} } {m + 1} \arcsec \dfrac x a + \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \\
\end {cases}$


Proof 1
Recall:




\(\text {(1)}: \quad\)









\(\ds \int x^m \arcsec x \rd x\)

\(=\)







\(\ds \begin {cases}
\dfrac {x^{m + 1} } {m + 1} \arcsec x - \dfrac 1 {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : 0 < \arcsec x < \dfrac \pi 2 \\
\dfrac {x^{m + 1} } {m + 1} \arcsec x + \dfrac 1 {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : \dfrac \pi 2 < \arcsec x < \pi \\
\end {cases}\)






Primitive of $x^m \arcsec x$




Then:














\(\ds \int x^m \arcsec \frac x a \rd x\)

\(=\)







\(\ds \int a^m \paren {\dfrac x a}^m \arcsec \frac x a \rd x\)





manipulating into appropriate form














\(\ds \)

\(=\)







\(\ds a^m \int \paren {\dfrac x a}^m \arcsec \frac x a \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^m \paren {\dfrac 1 {1 / a} \paren {\begin {cases}
\dfrac 1 {m + 1} \paren {\dfrac x a}^{m + 1} \arcsec \dfrac x a - \dfrac 1 {m + 1} \ds \int \paren {\dfrac x a}^m \frac {\d x} {\sqrt {\paren {\dfrac x a}^2 - 1} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \\
\dfrac 1 {m + 1} \paren {\dfrac x a}^{m + 1} \arcsec \dfrac x a + \dfrac 1 {m + 1} \ds \int \paren {\dfrac x a}^m \frac {\d x} {\sqrt {\paren {\dfrac x a}^2 - 1} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \\
\end {cases} } }\)






Primitive of Function of Constant Multiple, from $(1)$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac {x^{m + 1} } {m + 1} \arcsec \dfrac x a - \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \\
\dfrac {x^{m + 1} } {m + 1} \arcsec \dfrac x a + \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \\
\end {cases}\)






simplifying



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsec \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \begin {cases} \dfrac a {x \sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \\
\dfrac {-a} {x \sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \\
\end {cases}\)






Derivative of $\arcsec \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




First let $\arcsec \dfrac x a$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int x^m \arcsec \frac x a \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec \frac x a - \int \frac {x^{m + 1} } {m + 1} \paren {\frac a {x \sqrt {x^2 - a^2} } } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec \frac x a - \frac a {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - a^2} }\)





Primitive of Constant Multiple of Function




Similarly, let $\arcsec \dfrac x a$ be in the interval $\openint {\dfrac \pi 2} \pi$.
Then:














\(\ds \int x^m \arcsec \frac x a \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec \frac x a - \int \frac {x^{m + 1} } {m + 1} \paren {\frac {-a} {x \sqrt {x^2 - a^2} } } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec \frac x a + \frac a {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - a^2} }\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin \dfrac x a$
Primitive of $x^m \arccos \dfrac x a$
Primitive of $x^m \arctan \dfrac x a$
Primitive of $x^m \arccot \dfrac x a$
Primitive of $x^m \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.507$




