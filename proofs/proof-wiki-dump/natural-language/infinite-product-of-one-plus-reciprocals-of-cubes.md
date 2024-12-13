# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_One_Plus_Reciprocals_of_Cubes

Theorem













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^3} }\)

\(=\)







\(\ds \paren {1 + \frac 1 1} \times \paren {1 + \frac 1 8} \times \paren {1 + \frac 1 {27} } \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \cosh {\dfrac {\sqrt 3 \pi} 2} } \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\paren {\dfrac {\sqrt 3 \pi} 2 } + e^\paren {-\dfrac {\sqrt 3 \pi} 2} } {2 \pi }\)











Proof













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^3 } }\)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n^3 + 1} {n^3}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n + 1} \paren {n^2 - n + 1} } {\paren {n - 0} \paren {n - 0} \paren {n - 0} }\)





factoring














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n + 1} \paren {n - \dfrac 1 2 + \dfrac {\sqrt 3} 2 i} \paren {n - \dfrac 1 2 - \dfrac {\sqrt 3} 2 i } } {\paren {n - 0} \paren {n - 0} \paren {n - 0} }\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1 \map \Gamma 1} {\map \Gamma 2 \map \Gamma {\dfrac 1 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 1 2 - \dfrac {\sqrt 3} 2 i } }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {0! \times 0!  \times 0! \map \sin {\dfrac \pi 2 - \dfrac {\sqrt 3} 2 i \pi} } {1! \times \pi}\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {\map \cos {\dfrac {\sqrt 3} 2 i \pi} } \pi\)





Sine of Complement equals Cosine, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac {\map \cosh {\dfrac {\sqrt 3 \pi} 2} } \pi\)





Hyperbolic Cosine in terms of Cosine














\(\ds \)

\(=\)







\(\ds \frac {e^\paren {\dfrac {\sqrt 3 \pi} 2 } + e^\paren {-\dfrac {\sqrt 3 \pi} 2} } {2 \pi }\)





Definition of Hyperbolic Cosine



$\blacksquare$





