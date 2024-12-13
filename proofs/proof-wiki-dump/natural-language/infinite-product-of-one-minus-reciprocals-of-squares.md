# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_One_Minus_Reciprocals_of_Squares

Theorem













\(\ds \prod_{n \mathop = 2}^\infty \paren {1 - \frac 1 {n^2} }\)

\(=\)







\(\ds \paren {1 - \frac 1 4} \times \paren {1 - \frac 1 9} \times \paren {1 - \frac 1 {16} } \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2\)











Proof













\(\ds \prod_{n \mathop = 2}^\infty \paren {1 - \frac 1 {n^2} }\)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {n^2 - 1} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 2}^\infty \frac {\paren {n - 1} \paren {n + 1} } {\paren {n - 0} \paren {n - 0} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {\paren {n + 1} - 1} \paren {\paren {n + 1} + 1} } {\paren {\paren {n + 1} - 0} \paren {\paren {n + 1} - 0} }\)





$n \to n + 1$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - 0} \paren {n + 2} } {\paren {n + 1} \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 2 \map \Gamma 2} {\map \Gamma 1 \map \Gamma 3}\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {1! \times 1! } {0! \times 2!}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \frac 1 2\)









$\blacksquare$





