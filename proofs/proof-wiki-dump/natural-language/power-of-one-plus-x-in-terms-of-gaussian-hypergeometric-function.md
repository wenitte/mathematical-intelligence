# 

Source: https://proofwiki.org/wiki/Power_of_One_plus_x_in_terms_of_Gaussian_Hypergeometric_Function

Theorem
$\map F {-p, 1; 1; -x} = \paren {1 + x}^p$
where:

$x$ and $p$ are real numbers with $\size x < 1$
$F$ denotes the Gaussian hypergeometric function.


Proof













\(\ds \map F {-p, 1; 1; -x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-p}^{\overline n} 1^{\overline n} } {1^{\overline n} } \frac {\paren {-x}^n} {n!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\prod_{j \mathop = 0}^{n - 1} \paren {-p + j} } \frac {x^n} {n!}\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\prod_{j \mathop = 0}^{n - 1} \paren {-1} } \paren {\prod_{j \mathop = 0}^{n - 1} \paren {-p + j} } \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\prod_{j \mathop = 0}^{n - 1} \paren {p - j} } \frac {x^n} {n!}\)





Product of Products














\(\ds \)

\(=\)







\(\ds \paren {1 + x}^p\)





General Binomial Theorem



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Special Cases: $31.3$




