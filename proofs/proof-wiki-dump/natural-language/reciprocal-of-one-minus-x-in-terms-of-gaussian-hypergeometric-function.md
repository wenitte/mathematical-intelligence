# 

Source: https://proofwiki.org/wiki/Reciprocal_of_One_minus_x_in_terms_of_Gaussian_Hypergeometric_Function

Theorem
$\dfrac 1 {1 - x} = \map F {1, p; p; x}$
where:

$x$ and $p$ are real numbers with $\size x < 1$
$F$ denotes the Gaussian hypergeometric function.


Proof













\(\ds \map F {1, p; p; x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {1^{\bar n} p^{\bar n} } {p^{\bar n} } \frac {x^n} {n!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty n! \frac {x^n} {n!}\)





One to Integer Rising is Integer Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty x^n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - x}\)





Sum of Infinite Geometric Sequence, justified as $\size x < 1$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Special Cases: $31.10$




