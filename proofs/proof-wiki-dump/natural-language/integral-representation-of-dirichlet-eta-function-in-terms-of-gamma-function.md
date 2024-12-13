# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Dirichlet_Eta_Function_in_terms_of_Gamma_Function

Theorem
$\ds \map \eta s = \frac 1 {\map \Gamma s} \int_0^\infty \frac {x^{s - 1} } {e^x + 1} \rd x$
where: 

$s$ is a complex number with $\map \Re s > 0$
$\eta$ denotes the Dirichlet eta function
$\Gamma$ denotes the Gamma function.


Proof













\(\ds \int_0^\infty \frac {x^{s - 1} } {e^x + 1} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac {x^{s - 1} e^{-x} } {1 - \paren {-e^{-x} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s - 1} e^{-x} \paren {\sum_{n \mathop = 0}^\infty \paren {-e^{-x} }^n} \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\paren {-1}^n \int_0^\infty x^{s - 1} e^{-\paren {n + 1} x} \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \map \Gamma s \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {n + 1}^s}\)





Laplace Transform of Complex Power














\(\ds \)

\(=\)







\(\ds \map \Gamma s \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} } {n^s}\)





shifting the index














\(\ds \)

\(=\)







\(\ds \map \Gamma s \map \eta s\)





Definition of Dirichlet Eta Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.82$




