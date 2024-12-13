# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arcsecant_of_x

Theorem
$\ds \int x^m \arcsec x \rd x = \begin {cases}
\dfrac {x^{m + 1} } {m + 1} \arcsec x - \dfrac 1 {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : 0 < \arcsec x < \dfrac \pi 2 \\
\dfrac {x^{m + 1} } {m + 1} \arcsec x + \dfrac 1 {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : \dfrac \pi 2 < \arcsec x < \pi \\
\end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsec x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \begin {cases} \dfrac 1 {x \sqrt {x^2 - 1^2} } & : 0 < \arcsec x < \dfrac \pi 2 \\
\dfrac {-1} {x \sqrt {x^2 -1} } & : \dfrac \pi 2 < \arcsec x < \pi \\
\end {cases}\)






Derivative of $\arcsec x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




First let $\arcsec x$ be in the interval $\openint 0 {\dfrac \pi 2}$.
Then:














\(\ds \int x^m \arcsec x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac 1 {x \sqrt {x^2 - 1} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec x - \frac 1 {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - 1} } + C\)





Primitive of Constant Multiple of Function




Similarly, let $\arcsec x$ be in the interval $\openint {\dfrac \pi 2} \pi$.
Then:














\(\ds \int x^m \arcsec x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac {-1} {x \sqrt {x^2 - 1} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcsec x + \frac 1 {m + 1} \int \frac {x^m \rd x} {\sqrt {x^2 - 1} } + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin x$
Primitive of $x^m \arccos x$
Primitive of $x^m \arctan x$
Primitive of $x^m \arccot x$
Primitive of $x^m \arccsc x$




