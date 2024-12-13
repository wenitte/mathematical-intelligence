# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Even_Integers/Lemma

Lemma
Let $x \in \R$ be such that $\size x < 1$.
Then:

$\ds \pi x \cot {\pi x} = 1 - 2  \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}$
where $\zeta$ denotes the Riemann zeta function.


Proof 1













\(\ds \frac {\sin \pi x} {\pi x}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^\infty \paren {1 - \frac {x^2} {k^2} }\)





Euler Formula for Sine Function








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\frac {\sin \pi x} {\pi x} }\)

\(=\)







\(\ds \ln \prod_{k \mathop = 1}^\infty \paren {1 - \frac {x^2} {k^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\sin {\pi x} }\)

\(=\)







\(\ds \map \ln {\pi x} + \sum_{k \mathop = 1}^\infty \map \ln {1 - \frac {x^2} {k^2} }\)





Laws of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \pi \frac {\cos {\pi x} } {\sin {\pi x} }\)

\(=\)







\(\ds \frac 1 x + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {1 - \frac {x^2} {k^2} } } \paren {-\frac {2 x} {k^2} }\)





differentiating with respect to $x$








\(\ds \leadsto \ \ \)





\(\ds \pi x \cot {\pi x}\)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {1 - \frac {x^2} {k^2} } } \paren {-\frac {2 x^2} {k^2} }\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 0}^\infty \paren {\frac {x^2} {k^2} }^n \paren {-\frac {2 x^2} {k^2} }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty \paren {\frac {x^2} {k^2} }^n\)




















\(\ds \)

\(=\)







\(\ds 1 - 2  \sum_{n \mathop = 1}^\infty \paren {\sum_{k \mathop = 1}^\infty \frac 1 {k^{2 n} } } x^{2 n}\)





interchanging order of summation is valid by Tonelli's Theorem














\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}\)









$\blacksquare$


Proof 2
From Laurent Series Expansion for Cotangent Function:

$\ds \pi \cot \pi z = \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} z^{2 n - 1}$
where:

$z \in \C$ such that $\cmod z < 1$
$\zeta$ is the Riemann Zeta function.

Letting $x \in \R$ replace $z$, and multiplying through by $x$:














\(\ds \pi x \cot \pi x\)

\(=\)







\(\ds x \paren {\frac 1 x - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n - 1} }\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 x \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}\)









$\blacksquare$





