# 

Source: https://proofwiki.org/wiki/Laurent_Series_Expansion_for_Cotangent_Function

Theorem













\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} z^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \paren {\dfrac {\pi^2 } 6 z + \dfrac {\pi^4 } {90 } z^3 + \dfrac {\pi^6 } {945 } z^5 + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z - \dfrac {\pi^2 } 3 z - \dfrac {\pi^4 } {45 } z^3 - \dfrac {2 \pi^6 } {945 } z^5 - \cdots\)









where:

$z \in \C$ such that $\cmod z < 1$
$\zeta$ is the Riemann Zeta function.


Proof
From Mittag-Leffler Expansion for Cotangent Function:














\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \frac 1 z + 2 \sum_{k \mathop = 1}^\infty \frac z {z^2 - k^2}\)










Factoring $-\dfrac 1 {k^2}$: 














\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \frac 1 z + 2 \sum_{k \mathop = 1}^\infty \paren {\frac z {k^2} } \paren {\frac 1 {\frac {z^2} {k^2} - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{k \mathop = 1}^\infty \paren {\frac z {k^2} } \paren {\frac 1 {1 - \frac {z^2} {k^2} } }\)










Taking $\cmod z < 1$, and noting that $k \ge 1$, we have, by Sum of Infinite Geometric Sequence:

$\ds \pi \cot \pi z = \frac 1 z - 2 \sum_{k \mathop = 1}^\infty \frac z {k^2} \cdot \sum_{n \mathop = 1}^\infty \paren {\frac {z^2} {k^2} }^{n - 1}$
from which:














\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \frac 1 z - 2 \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty \frac {z^{2 n - 2} \cdot z} {k^{2 n - 2} \cdot k^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty \frac 1 {k^{2 n} } \cdot z^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty \frac 1 {k^{2 n} } \cdot z^{2 n - 1}\)





Product of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} z^{2 n - 1}\)





Definition of Riemann Zeta Function



$\blacksquare$


Also see
Power Series Expansion for Cotangent Function




