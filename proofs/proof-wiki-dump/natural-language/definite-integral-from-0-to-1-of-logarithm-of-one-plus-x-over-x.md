# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_One_plus_x_over_x

Theorem
$\ds \int_0^1 \frac {\map \ln {1 + x} } x \rd x = \frac {\pi^2} {12}$


Proof













\(\ds \int_0^1 \frac {\map \ln {1 + x} } x \rd x\)

\(=\)







\(\ds \int_0^1 \frac 1 x \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n} \rd x\)





Power Series Expansion for $\map \ln {1 + x}$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac {\paren {-1}^{n - 1} } n \int_0^1 x^{n - 1} \rd x}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } {n^2}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\pi^2} {12}\)





Sum of Reciprocals of Squares Alternating in Sign



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.93$




