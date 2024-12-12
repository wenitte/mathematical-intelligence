# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_by_Logarithm_of_One_minus_x

Theorem
$\ds \int_0^1 \ln x \map \ln {1 - x} \rd x = 2 - \frac {\pi^2} 6$


Proof













\(\ds \int_0^1 \ln x \map \ln {1 - x} \rd x\)

\(=\)







\(\ds -\int_0^1 \ln x \paren {\sum_{n \mathop = 1}^\infty \frac {x^n} n} \rd x\)





Power Series Expansion for $\map \ln {1 + x}$: Corollary














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac 1 n \paren {\int_0^1 x^n \ln x \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \paren {-1}^2 \sum_{n \mathop = 1}^\infty \frac 1 n \paren {\frac {\map \Gamma 2} {\paren {n + 1}^2} }\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds 1! \sum_{n \mathop = 1}^\infty \frac 1 {n \paren {n + 1}^2}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n + 1} } - \sum_{n \mathop = 1}^\infty \paren {\frac 1 {\paren {n + 1}^2} }\)





partial fraction expansion














\(\ds \)

\(=\)







\(\ds 1 - \paren {\sum_{n \mathop = 1}^\infty \frac 1 {n^2} - 1}\)





Telescoping Series: Example 1














\(\ds \)

\(=\)







\(\ds 2 - \frac {\pi^2} 6\)





Basel Problem



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.96$




