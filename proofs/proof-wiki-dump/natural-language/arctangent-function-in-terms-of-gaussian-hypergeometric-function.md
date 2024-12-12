# 

Source: https://proofwiki.org/wiki/Arctangent_Function_in_terms_of_Gaussian_Hypergeometric_Function



Theorem
$\arctan x = x \map F {\dfrac 1 2, 1; \dfrac 3 2; -x^2}$
where:

$x$ is a real number with $\size x < 1$
$\arctan$ denotes the arctangent function
$F$ denotes the Gaussian hypergeometric function.


Proof













\(\ds x \map F {\frac 1 2, 1; \frac 3 2; -x^2}\)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \frac {\paren {\frac 1 2}^{\bar n} 1^{\bar n} } {\paren {\frac 3 2}^{\bar n} } \frac {\paren {-x^2}^n} {n!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \frac {\map \Gamma {\frac 1 2 + n} } {\map \Gamma {\frac 1 2} } \times \frac {\map \Gamma {\frac 3 2} } {\map \Gamma {\frac 3 2 + n} } n! \frac {\paren {-x^2}^n} {n!}\)





Rising Factorial as Quotient of Factorials, One to Integer Rising is Integer Factorial














\(\ds \)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \frac {\map \Gamma {\frac 1 2 + n} } {\map \Gamma {\frac 1 2 + n} } \times \frac {\map \Gamma {\frac 1 2} } {\map \Gamma {\frac 1 2} } \times \frac 1 {2 \paren {n + \frac 1 2} } \paren {-1}^n x^{2 n}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \arctan x\)





Power Series Expansion for Real Arctangent Function



$\blacksquare$


Also presented as
This result can also be seen presented in the form:

$\map F {\dfrac 1 2, 1; \dfrac 3 2; -x^2} = \dfrac {\arctan x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Special Cases: $31.9$




