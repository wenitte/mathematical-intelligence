# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_1



Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
By Riemann Zeta Function as a Multiple Integral, 

$\ds \map \zeta 2 = \int_0^1 \int_0^1 \frac 1 {1 - x y} \rd x\rd y$
Let $\tuple {u, v} = \tuple {\dfrac {x + y} 2, \dfrac{y - x} 2}$ so that:

$\tuple {x, y} = \tuple {u - v, u + v}$
The Jacobian is:

$\size J = \size {\dfrac {\partial \tuple {x, y} } {\partial \tuple {u, v} } } = 2$
Then, by Change of Variables Theorem (Multivariable Calculus):

$\map \zeta 2 = \ds 2 \iint \limits_S \frac {\d u \rd v} {1 - u^2 + v^2}$
where $S$ is the square defined by the coordinates:

$\tuple {0, 0}, \ \tuple {\dfrac 1 2, -\dfrac 1 2}, \ \tuple {1, 0}, \ \tuple {\dfrac 1 2, \dfrac 1 2}$
Exploiting the symmetry of the square and the function over the $u$-axis, we have:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \! \int_0^u \frac {\d v \rd u} {1 - u^2 + v^2} + \int_{\frac 1 2}^1 \! \int_0^{1 - u} \frac {\d v \rd u} {1 - u^2 + v^2} }$
Factoring $1 - u^2$ gives us:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \! \int_0^u \frac 1 {1 - u^2} \frac {\d v \rd u} {\frac {v^2} {1 - u^2} + 1} + \int_{\frac 1 2}^1 \! \int_0^{1 - u} \frac 1 {1 - u^2} \frac {\d v \rd u} {\frac {v^2} {1 - u^2} + 1} }$
and letting:

$s = \dfrac v {\sqrt {1 - u^2} }, \rd s = \dfrac 1 {\sqrt {1 - u^2} }$
allows us to make a substitution into each integral, giving:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \frac 1 {\sqrt {1 - u^2} } \map \arctan {\frac u {\sqrt {1 - u^2} } } \rd u + \int_{\frac 1 2}^1 \frac 1 {\sqrt {1 - u^2} } \map \arctan {\frac {1 - u} {\sqrt {1 - u^2} } } \rd u}$
Consider the right triangle with sides $1$, $x$ and $\sqrt {1 - x^2}$.
Applying Pythagoras's Theorem:

$\arcsin x = \arctan \dfrac x {\sqrt {1 - x^2} }$
Let:














\(\ds \theta\)

\(=\)







\(\ds \map \arctan {\dfrac{1 - u} {\sqrt{1 - u^2} } }\)














\(\ds \leadsto \ \ \)





\(\ds \tan^2 \theta\)

\(=\)







\(\ds \frac {1 - u} {1 + u}\)














\(\ds \leadsto \ \ \)





\(\ds \sec^2 \theta\)

\(=\)







\(\ds \frac 2 {1 + u}\)





Difference of Squares of Secant and Tangent








\(\ds \leadsto \ \ \)





\(\ds \cos 2 \theta\)

\(=\)







\(\ds u\)





Double Angle Formula for Cosine: Corollary $1$








\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \dfrac 1 2 \arccos u\)





taking arccosines of both sides














\(\ds \)

\(=\)







\(\ds \frac \pi 4 - \frac {\arcsin u} 2\)





Sine of Complement equals Cosine




This allows us to convert the arctangents from the integrals into arcsines:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} {\frac {\arcsin u} {\sqrt {1 - u^2} } \rd u} + \int_{\frac 1 2}^1 {\frac 1 {\sqrt {1 - u^2} } \paren {\frac \pi 4 - \frac {\arcsin u} 2} \rd u} }$
Substituting:

$s = \arcsin u$, $\rd s = \dfrac 1 {\sqrt{1 - u^2} }$
into the arcsines, and splitting the second integral:

$\map \zeta 2 = 4 \paren {\dfrac {\pi^2} {72} + \dfrac {\pi^2} {36} } = \dfrac {\pi^2} 6$
$\blacksquare$


Historical Note
The Basel Problem was first posed by Pietro Mengoli in $1644$.
Its solution is generally attributed to Leonhard Euler , who solved it in $1734$ and delivered a proof in $1735$.
However, it has also been suggested that it was in fact first solved by Nicolaus I Bernoulli.
Jacob Bernoulli had earlier established that the series was convergent, but had failed to work out what to.
The problem is named after Basel, the home town of Euler as well as of the Bernoulli family.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.24$: Euler's Formula $\ds \sum \limits_1^\infty \frac 1 {n^2} = \frac {\pi^2} 6$ by Double Integration




