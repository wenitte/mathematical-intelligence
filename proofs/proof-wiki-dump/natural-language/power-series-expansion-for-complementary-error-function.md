# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Complementary_Error_Function

Theorem
$\ds \map \erfc x = 1 - \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {n! \paren {2 n + 1} }$
where:

$\erfc$ is the complementary error function
$x$ is a real number.


Proof













\(\ds \map \erfc x\)

\(=\)







\(\ds 1 - \map \erf x\)





Definition of Complementary Error Function














\(\ds \)

\(=\)







\(\ds 1 - \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {n! \paren {2 n + 1} }\)





Power Series Expansion for Error Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Complementary Error Function $\ds\map \erfc x = 1 - \map \erf x = \frac 2 {\sqrt \pi} \int_x^\infty e^{-u^2} \rd u$: $35.4$




