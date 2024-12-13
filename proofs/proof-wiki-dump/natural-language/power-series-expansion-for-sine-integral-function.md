# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Sine_Integral_Function

Theorem
$\ds \map \Si x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1} \times \paren {2 n + 1}!}$
where:

$\Si$ denotes the sine integral function
$x$ is a real number.


Proof













\(\ds \map \Si x\)

\(=\)







\(\ds \int_0^x \frac {\sin u} u \rd u\)





Definition of Sine Integral Function














\(\ds \)

\(=\)







\(\ds \int_0^x \frac {\paren {-1}^n} u \paren {\sum_{n \mathop = 0}^\infty \frac {u^{2 n + 1} } {\paren {2 n + 1}!} } \rd u\)





Power Series Expansion for Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\int_0^x \frac {u^{2 n} } {\paren {2 n + 1}!} \rd u}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1} \times \paren {2 n + 1}!}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Sine Integral $\ds \map \Si x = \int_0^x \frac {\sin u} u \rd u$: $35.11$




