# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Complementary_Error_Function

Theorem
$\ds \lim_{x \mathop \to \infty} \map \erfc x = 0$
where $\erfc$ denotes the complementary error function.


Proof













\(\ds \lim_{x \mathop \to \infty} \map \erfc x\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \paren {1 - \map \erf x}\)





Definition of Complementary Error Function














\(\ds \)

\(=\)







\(\ds 1 - \lim_{x \mathop \to \infty} \map \erf x\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds 1 - 1\)





Limit to Infinity of Error Function














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Complementary Error Function $\ds \map \erfc x = 1 - \map \erf x = \frac 2 {\sqrt \pi} \int_x^\infty e^{-u^2} \rd u$: $35.6$




