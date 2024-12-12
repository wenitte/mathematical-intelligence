# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_by_Logarithm_of_One_minus_x_over_One_minus_x/Proof_1

Theorem
$\ds \int_0^1 \dfrac {\ln x \map \ln {1 - x} } {\paren {1 - x} } \rd x = \map \zeta 3$
where $\map \zeta 3$ is Apéry's constant: the Riemann $\zeta$ function of $3$.


Proof













\(\ds \int_0^1 \dfrac {\ln x \map \ln {1 - x} } {\paren {1 - x} } \rd x\)

\(=\)







\(\ds \int_1^0 \dfrac {\map \ln {1 - u} \ln u } u \paren {-\rd u}\)





$x \to \paren {1 - u}$ and $\rd x \to -\rd u$














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac {\map \ln {1 - u} \ln u } u \rd u\)





reversing limits of integration














\(\ds \)

\(=\)







\(\ds -\int_0^1 \frac {\ln u} u \paren {\sum_{n \mathop = 1}^\infty \frac {u^n} n}\)





Power Series Expansion for $\map \ln {1 + x}$: Corollary














\(\ds \)

\(=\)







\(\ds -\int_0^1 \ln u \paren {\sum_{n \mathop = 1}^\infty \frac {u^{n - 1} } n}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac 1 n \paren {\int_0^1 u^{n - 1} \ln u \rd u}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \paren {-1}^2 \sum_{n \mathop = 1}^\infty \frac 1 n \paren {\frac {\map \Gamma 2} {\paren {\paren {n - 1} + 1}^2} }\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds 1! \sum_{n \mathop = 1}^\infty \frac 1 {n^3}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \map \zeta {3}\)





Definition of Apéry's Constant



$\blacksquare$





