# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_by_Logarithm_of_One_plus_x

Theorem
$\ds \int_0^1 \ln x \map \ln {1 + x} \rd x = 2 - 2 \ln 2 - \frac {\pi^2} {12}$


Proof













\(\ds \int_0^1 \ln x \map \ln {1 + x} \rd x\)

\(=\)







\(\ds \int_0^1 \ln x \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n} \rd x\)





Power Series Expansion for $\map \ln {1 + x}$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } n \paren {\int_0^1 x^n \ln x \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} n \paren {\frac {\map \Gamma 2} {\paren {n + 1}^2} }\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds 1! \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {n \paren {n + 1}^2}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} n - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {n + 1} - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {\paren {n + 1}^2}\)





partial fraction expansion














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } n - \sum_{n \mathop = 2}^\infty \frac {\paren {-1}^{n - 1} } n - \sum_{n \mathop = 2}^\infty \frac {\paren {-1}^{n - 1} } {n^2}\)





shifting indexes














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } n - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } n - 1} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } {n^2} - 1}\)




















\(\ds \)

\(=\)







\(\ds 2 - 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } n - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } {n^2}\)




















\(\ds \)

\(=\)







\(\ds 2 - 2 \ln 2 - \frac {\pi^2} {12}\)





Newton-Mercator Series for $\ln 2$, Sum of Reciprocals of Squares Alternating in Sign



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.95$




