# 

Source: https://proofwiki.org/wiki/Multiple_of_Pi_as_Infinite_Product

Theorem













\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac n {n - \frac 1 2} }^2 \paren {\frac {n - 1 + z} {n + z} }\)

\(=\)







\(\ds \paren {\frac 1 {1 - \frac 1 2} }^2 \paren {\frac {1 - 1 + z} {1 + z} } \times \paren {\frac 2 {2 - \frac 1 2} }^2 \paren {\frac {2 - 1 + z} {2 + z} } \times \paren {\frac 3 {3 - \frac 1 2} }^2 \paren {\frac {3 - 1 + z} {3 + z} } \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 2 1 }^2 \paren {\frac z {1 + z} } \times \paren {\frac 4 3 }^2 \paren {\frac {1 + z} {2 + z} } \times \paren {\frac 6 5 }^2 \paren {\frac {2 + z} {3 + z} } \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \pi z\)











Proof













\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac n {n - \frac 1 2} }^2 \paren {\frac {n - 1 + z} {n + z} }\)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n + 0} \paren {n + 0} \paren {n - 1 + z} } {\paren {n - \dfrac 1 2} \paren {n - \dfrac 1 2} \paren {n + z} }\)




















\(\ds \)

\(=\)







\(\ds \frac { \map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} \map \Gamma {z + 1} } {\map \Gamma 1 \map \Gamma 1 \map \Gamma z }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac { \sqrt \pi \sqrt \pi z \map \Gamma z } {0! \times 0! \times \map \Gamma z }\)





Gamma Function of One Half, Gamma Difference Equation, Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \pi z\)





Factorial of Zero




$\blacksquare$





