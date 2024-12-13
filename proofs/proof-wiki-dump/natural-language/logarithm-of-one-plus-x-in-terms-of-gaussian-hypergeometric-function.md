# 

Source: https://proofwiki.org/wiki/Logarithm_of_One_plus_x_in_terms_of_Gaussian_Hypergeometric_Function



Theorem
$\map \ln {1 + x} = x \map F {1, 1; 2; -x}$
where:

$x$ is a real number with $\size x < 1$
$F$ denotes the Gaussian hypergeometric function.


Proof













\(\ds x \map F {1, 1; 2; -x}\)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \frac {\paren {1^{\overline n} }^2} {2^{\overline n} } \frac {\paren {-x}^n} {n!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {n!}^2 \paren {\frac {\paren {2 - 1}!} {\paren {2 + n - 1}!} } \frac {x^{n + 1} } {n!}\)





Rising Factorial as Quotient of Factorials, One to Integer Rising is Integer Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {n!}^2} {\paren {n + 1}! n!} x^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {n!}^2} {\paren {n + 1} \paren {n!}^2} x^{n + 1}\)





Definition 1 of Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n\)





shifting the index














\(\ds \)

\(=\)







\(\ds \map \ln {1 + x}\)





Power Series Expansion for $\map \ln {1 + x}$



$\blacksquare$


Also presented as
Some sources give this as:

$\map F {1, 1; 2; -x} = \dfrac {\map \ln {1 + x} } x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Special Cases: $31.4$




