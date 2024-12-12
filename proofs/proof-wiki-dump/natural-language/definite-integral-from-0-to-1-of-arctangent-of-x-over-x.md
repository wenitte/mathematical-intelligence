# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Arctangent_of_x_over_x

Theorem
$\ds \int_0^1 \frac {\arctan x} x \rd x = G$
where $G$ denotes Catalan's constant.


Proof













\(\ds \int_0^1 \frac {\arctan x} x \rd x\)

\(=\)







\(\ds \int_0^1 \frac 1 x \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {2 n + 1} } \rd x\)





Power Series Expansion for Real Arctangent Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {2 n + 1} \int_0^1 x^{2 n} \rd x\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {2 n + 1} \intlimits {\frac {x^{2 n + 1} } {2 n + 1} } 0 1 \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^2}\)





evaluation of definite integral














\(\ds \)

\(=\)







\(\ds G\)





Definition of Catalan's Constant



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.63$




