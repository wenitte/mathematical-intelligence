# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Secant

Theorem
The (real) area hyperbolic secant function has a Taylor series expansion:














\(\ds \arsech x\)

\(=\)







\(\ds \ln \frac 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}! x^{2 n} } {2^{2 n} \paren {n!}^2 \paren {2 n} } }\)




















\(\ds \)

\(=\)







\(\ds \ln \frac 2 x - \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots}\)









for $0 < x \le 1$.


Proof
From Power Series Expansion for Real Area Hyperbolic Cosine:














\(\ds \arcosh x\)

\(=\)







\(\ds \ln 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } }\)




















\(\ds \)

\(=\)







\(\ds \ln 2 x - \paren {\dfrac 1 2 \dfrac 1 {2 x^2} + \dfrac {1 \times 3} {2 \times 4} \dfrac 1 {4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac 1 {6 x^6} + \cdots}\)









for $x \ge 1$.
From Real Area Hyperbolic Cosine of Reciprocal equals Real Area Hyperbolic Secant:

$\map \arcosh {\dfrac 1 x} = \arsech x$

So:














\(\ds \arsech x\)

\(=\)







\(\ds \ln \frac 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}! x^{2 n} } {2^{2 n} \paren {n!}^2 \paren {2 n} } }\)




















\(\ds \)

\(=\)







\(\ds \ln \frac 2 x - \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots}\)









For $1 \le \dfrac 1 x$ we have that $0 < x \le 1$.
Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Real Area Hyperbolic Sine
Power Series Expansion for Real Area Hyperbolic Cosine
Power Series Expansion for Real Area Hyperbolic Tangent
Power Series Expansion for Real Area Hyperbolic Cotangent
Power Series Expansion for Real Area Hyperbolic Cosecant




