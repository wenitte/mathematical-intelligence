# 

Source: https://proofwiki.org/wiki/Arcsine_Function_in_terms_of_Gaussian_Hypergeometric_Function



Theorem
$\arcsin x = x \map F {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; x^2}$
where:

$x$ is a real number with $\size x \le 1$
$\arcsin$ denotes the arcsine function
$F$ denotes the Gaussian hypergeometric function.


Proof













\(\ds x \map F {\frac 1 2, \frac 1 2; \frac 3 2; x^2}\)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \frac {\paren {\paren {\frac 1 2}^{\bar n} }^2} {\paren {\frac 3 2}^{\bar n} } \frac {x^{2 n} } {n!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {\map \Gamma {\frac 1 2 + n} }^2 \map \Gamma {\frac 3 2} } {\paren {\map \Gamma {\frac 1 2} }^2 \map \Gamma {\frac 3 2 + n} } \frac {x^{2 n + 1} } {n!}\)





Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {\map \Gamma {\frac 1 2 + n} }^2 \map \Gamma {\frac 1 2} } {2 \paren {\map \Gamma {\frac 1 2} }^2 \paren {\frac 1 2 + n} \map \Gamma {\frac 1 2 + n} } \frac {x^{2 n + 1} } {n!}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\map \Gamma {\frac 1 2 + n} } {\paren {2 n + 1} \sqrt \pi} \frac {x^{2 n + 1} } {n!}\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\paren {\frac {\paren {2 n}!} {2^{2 n} n!} \sqrt \pi} \times \frac 1 {\paren {2 n + 1} \sqrt \pi} \times \frac 1 {n!} x^{2 n + 1} }\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \arcsin x\)





Power Series Expansion for Real Arcsine Function



$\blacksquare$


Also presented as
This result can also be seen presented in the form:

$\map F {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; x^2} = \dfrac {\arcsin x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Special Cases: $31.8$




