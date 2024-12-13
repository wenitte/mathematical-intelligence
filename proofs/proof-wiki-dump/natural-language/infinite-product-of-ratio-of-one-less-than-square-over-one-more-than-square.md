# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_Ratio_of_One_Less_Than_Square_Over_One_More_Than_Square

Theorem













\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n^2 - 1 } } {\paren {n^2 + 1 } }\)

\(=\)







\(\ds \frac 3 5 \times \frac 8 {10} \times \frac {15} {17} \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \pi \csch \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {e^\pi - e^{-\pi} }\)











Proof













\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n^2 - 1 } } {\paren {n^2 + 1 } }\)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n - 1} \paren {n + 1} } {\paren {n - i} \paren {n + i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {\paren {n + 1} - 1} \paren {\paren {n + 1} + 1} } {\paren {\paren {n + 1} - i} \paren {\paren {n + 1} + i} }\)





$n \to n + 1$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - 0} \paren {n + 2} } {\paren {n + 1 - i} \paren {n + 1 + i} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {2 - i} \map \Gamma {2 + i} } {\map \Gamma 1 \map \Gamma 3}\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - i} \map \Gamma {1 - i} i \paren {1 + i} \map \Gamma i } {\map \Gamma 1 \map \Gamma 3}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {2 i \pi } {0! \times 2! \times \map \sin {i \pi} }\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {i \pi } { i \map \sinh \pi }\)





Factorial of Zero, Hyperbolic Sine in terms of Sine














\(\ds \)

\(=\)







\(\ds \pi \csch \pi\)





Definition of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {e^\pi - e^{-\pi} }\)





Definition of Hyperbolic Cosecant



$\blacksquare$





