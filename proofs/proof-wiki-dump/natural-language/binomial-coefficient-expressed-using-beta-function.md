# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_expressed_using_Beta_Function

Theorem
Let $\dbinom r k$ denote a binomial coefficient.
Then:

$\dbinom r k = \dfrac 1 {\paren {r + 1} \map B {k + 1, r - k + 1} }$


Proof













\(\ds \dbinom r k\)

\(=\)







\(\ds \dfrac {r!} {k! \, \paren {r - k}!}\)





Definition 1 of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {r + 1} } {\map \Gamma {k + 1} \map \Gamma {r - k + 1} }\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {r + 2} } {r + 1} \dfrac 1 {\map \Gamma {k + 1} \map \Gamma {r - k + 1} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r + 1} \dfrac {\map \Gamma {r + 2} } {\map \Gamma {k + 1} \map \Gamma {r - k + 1} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r + 1} \dfrac 1 {\map B {k + 1, r - k + 1} }\)





Definition 3 of Beta Function



$\blacksquare$

Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$




