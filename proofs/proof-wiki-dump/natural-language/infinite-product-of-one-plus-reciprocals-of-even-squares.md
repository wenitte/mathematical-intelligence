# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_One_Plus_Reciprocals_of_Even_Squares

Theorem













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {\paren {2 n}^2} }\)

\(=\)







\(\ds \paren {1 + \frac 1 4} \times \paren {1 + \frac 1 {16} } \times \paren {1 + \frac 1 {36} } \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \map \sinh {\pi/2} } \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{\pi/2} - e^{-\pi/2} } \pi\)











Proof













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {\paren {2 n}^2} }\)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {4 n^2 + 1} {4 n^2}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n^2 + \frac 1 4} {n^2}\)





multiplying top and bottom by $\frac 1 4$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - \frac 1 2 i} \paren {n + \frac 1 2 i} } {\paren {n - 0} \paren {n - 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {\map \Gamma {1 - \frac 1 2 i} \map \Gamma {1 + \frac 1 2 i} }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {\frac 1 2 i \times \map \Gamma {1 - \frac 1 2 i} \map \Gamma {\frac 1 2 i} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {0! \times 0! \times \map \sin {i \pi/2}  } {\frac 1 2 i \times \pi }\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {2 i \map \sinh {\pi/2} } {i \pi}\)





Hyperbolic Sine in terms of Sine, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac {2 \map \sinh {\pi/2} } \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{\pi/2} - e^{-\pi/2} } \pi\)





Definition of Hyperbolic Sine



$\blacksquare$





