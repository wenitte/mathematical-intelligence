# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_over_One_minus_x


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
$\ds \int_0^1 \frac {\ln x} {1 - x} \rd x = -\frac {\pi^2} 6$


Proof













\(\ds \int_0^1 \frac {\ln x} {1 - x} \rd x\)

\(=\)







\(\ds \int_0^1 \ln x \paren {\sum_{n \mathop = 0}^\infty x^n} \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\int_0^1 x^n \ln x \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 0}^\infty \frac {\map \Gamma 2} {\paren {n + 1}^2}\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$: $n \gets 1$, $m \gets n$














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)





shifting the index, Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds -\frac {\pi^2} 6\)





Basel Problem



$\blacksquare$


Also see
Definite Integral $\ds \int_0^1 \frac {\map \ln {1 - x} } x \rd x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.92$




