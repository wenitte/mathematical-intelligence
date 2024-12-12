# 

Source: https://proofwiki.org/wiki/Derivative_of_Riemann_Zeta_Function

Theorem
The derivative of the Riemann zeta function is:

$\ds \map {\zeta'} z = \frac {\d \zeta} {\d z} = -\sum_{n \mathop = 2}^\infty \frac {\map \ln n} {n^z}$


Proof













\(\ds \frac {\d \zeta} {\d z}\)

\(=\)







\(\ds \map {\frac \d {\d z} } {\sum_{n \mathop = 1}^\infty n^{-z} }\)





Definition of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\frac \d {\d z} } {n^{-z} }\)





Sum Rule for Derivatives/General Result














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-\map \ln n n^{-z} }\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {\map \ln n} {n^z}\)





Exponent Combination Laws/Negative Power














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 2}^\infty \frac {\map \ln n} {n^z}\)





Natural Logarithm of 1 is 0



$\blacksquare$


Also see
Logarithmic Derivative of Riemann Zeta Function




