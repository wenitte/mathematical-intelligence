# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Spence%27s_Function

Theorem
Spence's function has a power series expansion: 

$\ds \map {\Li_2} z = \sum_{n \mathop = 1}^\infty \frac {z^n} {n^2}$
for $z \in \C$.

This converges for $\size z \le 1$.


Proof













\(\ds \map {\Li_2} z\)

\(=\)







\(\ds -\int_0^z \frac {\map \ln {1 - t} } t \rd t\)





Definition of Spence's Function














\(\ds \)

\(=\)







\(\ds -\int_0^z \frac 1 t \sum_{n \mathop = 1}^\infty \paren {-\frac {t^n} n} \rd t\)





Power Series Expansion for Logarithm of 1 + x: Corollary














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_0^z \frac {t^{n - 1} } n \rd t\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {z^n} {n^2}\)





Primitive of Power



$\blacksquare$





