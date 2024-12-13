# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_Constant



Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 + k} } = \ln \size {x + \sqrt {x^2 + k} } + C$


Proof
Positive Constant
Let $k > 0$.
Then $k = a^2$ for some $a \in \R$.
Hence from Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$: Logarithm Form:

$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \map \ln {x + \sqrt {x^2 + a^2} } + C$

from which the result follows.
$\Box$


Negative Constant
Let $k < 0$.
Then $k = -a^2$ for some $a \in \R$.
Hence from Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$: Logarithm Form:

$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $0 < a < \size x$.

from which the result follows.
$\Box$


Zero Constant
Let $k = 0$.
Then we have:














\(\ds \int \frac {\d x} {\sqrt {x^2 + k} }\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt {x^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x\)




















\(\ds \)

\(=\)







\(\ds \ln \size x + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size x + \ln 2 + C'\)





where $C'  - C - \ln 2$














\(\ds \)

\(=\)







\(\ds \ln \size {2 x} + C'\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \ln \size {x + x} + C'\)




















\(\ds \)

\(=\)







\(\ds \ln \size {x + \sqrt {x^2 + 0} } + C'\)









The result follows.
$\blacksquare$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration




