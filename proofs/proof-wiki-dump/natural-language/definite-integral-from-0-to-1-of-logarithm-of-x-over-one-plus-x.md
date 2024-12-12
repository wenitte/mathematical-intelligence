# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_over_One_plus_x

Theorem
$\ds \int_0^1 \frac {\ln x} {1 + x} \rd x = -\frac {\pi^2} {12}$


Proof













\(\ds \int_0^1 \frac {\ln x} {1 + x} \rd x\)

\(=\)







\(\ds \int_0^1 \frac {\ln x} {1 - \paren {-x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 \ln x \paren {\sum_{n \mathop = 0}^\infty \paren {-x}^n} \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \int_0^1 x^n \ln x \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n + 1} \map \Gamma 2} {\paren {n + 1}^2}\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n 1!} {n^2}\)





Gamma Function Extends Factorial, shifting the index














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {n^2}\)





writing $-\paren {-1}^{n + 1} = \paren {-1}^{n + 2} = \paren {-1}^2 \paren {-1}^n = \paren {-1}^n$














\(\ds \)

\(=\)







\(\ds -\frac {\pi^2} {12}\)





Sum of Reciprocals of Squares Alternating in Sign



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.91$




