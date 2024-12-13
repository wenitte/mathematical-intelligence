# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Error_Function

Theorem













\(\ds \map \erf x\)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {n! \paren {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \paren {x - \frac {x^3} {3 \times 1!} + \frac {x^5} {5 \times 2!} - \frac {x^7} {7 \times 3!} + \frac {x^9} {9 \times 4!} - \cdots}\)









where:

$\erf$ denotes the error function
$x$ is a real number.


Proof













\(\ds \map \erf x\)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \int_0^x e^{-u^2} \rd u\)





Definition of Error Function














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \int_0^x \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {u^{2 n} } {n!} } \rd u\)





Definition of Real Exponential Function














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {n!} \paren {\int_0^x u^{2 n} \rd u}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {n! \paren {2 n + 1} }\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Error Function $\ds \map \erf x = \frac 2 {\sqrt \pi} \int_0^x e^{-u^2} \rd u$: $35.1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): error function




