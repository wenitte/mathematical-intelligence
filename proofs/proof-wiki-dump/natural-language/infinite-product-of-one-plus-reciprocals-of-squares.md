# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_One_Plus_Reciprocals_of_Squares



Theorem













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^2} }\)

\(=\)







\(\ds \paren {1 + \frac 1 1} \times \paren {1 + \frac 1 4} \times \paren {1 + \frac 1 9} \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {\sinh \pi} \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\pi - e^{-\pi} } {2 \pi}\)











Proof













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^2 } }\)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n^2 + 1} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - i} \paren {n + i} } {\paren {n - 0} \paren {n - 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {\map \Gamma {1 + i} \map \Gamma {1 - i} }\)





Infinite Product of Product of Sequence of $n + \alpha$ over Sequence of $n + \beta$














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {i \map \Gamma i \map \Gamma {1 - i} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {0! \times 0! \map \sin {i \pi} } {i \pi}\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {i \map \sinh {\pi} } {i \pi}\)





Hyperbolic Sine in terms of Sine, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac {\map \sinh {\pi} } \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\pi - e^{-\pi} } {2 \pi}\)





Definition of Hyperbolic Sine



$\blacksquare$





