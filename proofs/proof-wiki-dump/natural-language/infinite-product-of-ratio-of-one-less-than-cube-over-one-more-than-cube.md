# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_Ratio_of_One_Less_Than_Cube_Over_One_More_Than_Cube

Theorem













\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n^3 - 1 } } {\paren {n^3 + 1 } }\)

\(=\)







\(\ds \frac 7 9 \times \frac {26} {28} \times \frac {63} {65} \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac 2 3\)











Proof













\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n^3 - 1 } } {\paren {n^3 + 1 } }\)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n - 1} \paren {n^2 + n + 1} } {\paren {n + 1} \paren {n^2 - n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {\paren {n + 1} - 1} \paren {\paren {n + 1}^2 + \paren {n + 1} + 1} } {\paren {\paren {n + 1} + 1} \paren {\paren {n + 1}^2 - \paren {n + 1} + 1} }\)





$n \to n + 1$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - 0} \paren {n^2 + 3 n + 3} } {\paren {n + 2} \paren {n^2 + n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - 0} \paren {n + \dfrac 3 2 + \dfrac {\sqrt 3} 2 i} \paren {n + \dfrac 3 2 - \dfrac {\sqrt 3} 2 i } } {\paren {n + 2} \paren {n + \dfrac 1 2 + \dfrac {\sqrt 3} 2 i} \paren {n + \dfrac 1 2 - \dfrac {\sqrt 3} 2 i } }\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 3 \map \Gamma {\dfrac 3 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 3 2 - \dfrac {\sqrt 3} 2 i } }  {\map \Gamma 1 \map \Gamma {\dfrac 5 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 5 2 - \dfrac {\sqrt 3} 2 i } }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 3 \map \Gamma {\dfrac 3 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 3 2 - \dfrac {\sqrt 3} 2 i } }  {\map \Gamma 1 \paren {\dfrac 3 2 + \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 3 2 + \dfrac {\sqrt 3} 2 i } \paren {\dfrac 3 2 - \dfrac {\sqrt 3} 2 i } \map \Gamma {\dfrac 3 2 - \dfrac {\sqrt 3} 2 i } }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {2! } {0! \times 3  }\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \frac 2 3\)





Factorial of Zero



$\blacksquare$





