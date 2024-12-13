# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arccosecant_of_x

Theorem
$\ds \int x^m \arccsc x \rd x = \begin {cases}
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc x + \dfrac 1 {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : 0 < \arccsc x < \dfrac \pi 2 \\
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc x - \dfrac 1 {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : -\dfrac \pi 2 < \arccsc x < 0 \\
\end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\rd v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccsc x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \begin {cases} \dfrac {-1} {x \sqrt {x^2 - 1} } & : 0 < \arccsc x < \dfrac \pi 2 \\
\dfrac 1 {x \sqrt {x^2 - 1} } & : -\dfrac \pi 2 < \arccsc x < 0 \\
\end{cases}\)






Derivative of $\arccsc x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




First let $\arccsc x$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int x^m \arccsc x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccsc x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac {-1} {x \sqrt {x^2 - 1} } } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccsc x + \frac 1 {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - 1} }\)





Primitive of Constant Multiple of Function




Similarly, let $\arccsc \dfrac x a$ be in the interval $\openint {-\dfrac \pi 2}  0$.
Then:














\(\ds \int x^m \arccsc x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccsc x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac 1 {x \sqrt {x^2 - 1} } } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccsc x - \frac 1 {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - 1} }\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin x$
Primitive of $x^m \arccos x$
Primitive of $x^m \arctan x$
Primitive of $x^m \arccot x$
Primitive of $x^m \arcsec x$




