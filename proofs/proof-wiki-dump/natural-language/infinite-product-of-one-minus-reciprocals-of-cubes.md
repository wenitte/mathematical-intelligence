# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_One_Minus_Reciprocals_of_Cubes

Theorem













\(\ds \prod_{n \mathop = 2}^\infty \paren {1 - \frac 1 {n^3} }\)

\(=\)







\(\ds \paren {1 - \frac 1 8} \times \paren {1 - \frac 1 {27} } \times \paren {1 - \frac 1 {64 } } \times  \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \cosh {\dfrac {\sqrt 3 \pi} 2} } {3 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\paren {\dfrac {\sqrt 3 \pi} 2 } + e^\paren {-\dfrac {\sqrt 3 \pi} 2} } {6 \pi }\)











Proof













\(\ds \prod_{n \mathop = 2}^\infty \paren {1 - \frac 1 {n^3 } }\)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {n^3 - 1} {n^3}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n - 1} \paren {n^2 + n + 1} } {\paren {n - 0} \paren {n - 0} \paren {n - 0} }\)





factoring














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {\paren {n + 1} - 1} \paren {\paren {n + 1}^2 + \paren {n + 1} + 1} } {\paren {\paren {n + 1} - 0} \paren {\paren {n + 1} - 0} \paren {\paren {n + 1} - 0} }\)





$n \to n + 1$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n \paren {n^2 + 3 n + 3} } {\paren {n + 1} \paren {n + 1} \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n \paren {n + \dfrac 3 2 + \dfrac {\sqrt 3} 2 i} \paren {n + \dfrac 3 2 - \dfrac {\sqrt 3} 2 i } } {\paren {n + 1} \paren {n + 1} \paren {n + 1} }\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 2 \map \Gamma 2 \map \Gamma 2} {\map \Gamma 1 \map \Gamma {\dfrac 5 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 5 2 - \dfrac {\sqrt 3} 2 i } }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 2 \map \Gamma 2 \map \Gamma 2} {\map \Gamma 1 \paren {\dfrac 3 2 + \dfrac {\sqrt 3} 2 i } \paren {\dfrac 1 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 1 2 + \dfrac {\sqrt 3} 2 i } \paren {\dfrac 3 2 - \dfrac {\sqrt 3} 2 i } \paren {\dfrac 1 2 - \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 1 2 - \dfrac {\sqrt 3} 2 i } }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {1! \times 1!  \times 1! \map \sin {\dfrac \pi 2 - \dfrac {\sqrt 3} 2 i \pi} } {0! \times 1 \times 3 \times \pi}\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {\map \cos {\dfrac {\sqrt 3} 2 i \pi} } {3 \pi}\)





Sine of Complement equals Cosine, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac {\map \cosh {\dfrac {\sqrt 3 \pi} 2} } {3 \pi}\)





Hyperbolic Cosine in terms of Cosine














\(\ds \)

\(=\)







\(\ds \frac {e^\paren {\dfrac {\sqrt 3 \pi} 2 } + e^\paren {-\dfrac {\sqrt 3 \pi} 2} } {6 \pi }\)





Definition of Hyperbolic Cosine



$\blacksquare$





