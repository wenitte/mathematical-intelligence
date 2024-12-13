# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Gamma_Function



Theorem
For $\Re \paren s > 1$, the Riemann Zeta function is given by:

$\ds \map \zeta s = \frac 1 {\map \Gamma s} \int_0^\infty \frac {t^{s - 1}} {e^t - 1} \rd t$
where $\Gamma$ is the Gamma function.


Corollary
For $\Re \paren s > 1$, the Riemann Zeta function is given by:

$\ds \map \zeta s = \frac 1 {\map \Gamma s} \int_0^1 \frac {\paren {\map \ln {\dfrac 1 u} }^{s - 1} } {1 - u} \rd u$
where $\Gamma$ is the Gamma function.


Proof













\(\ds \int_0^\infty \frac {t^{s - 1} } {e^t - 1} \rd t\)

\(=\)







\(\ds \int_0^\infty \frac {t^{s - 1} } {e^t - 1} \times \dfrac {e^{-t} } {e^{-t} }\rd t\)





multiplying by 1














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {t^{s - 1} e^{-t} } {1 - e^{-t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty t^{s - 1} e^{-t} \sum_{n \mathop = 0}^\infty e^{-n t} \rd t\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \int_0^\infty t^{s - 1} \sum_{n \mathop = 0}^\infty e^{-\paren {n + 1} t} \rd t\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \int_0^\infty t^{s - 1} \sum_{n \mathop = 1}^\infty e^{-n t} \rd t\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_0^\infty t^{s - 1} e^{-n t} \rd t\)





interchange of sum and integral is valid by Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_0^\infty \paren {\dfrac u n}^{s - 1} e^{-u} \dfrac 1 n \rd u\)





substituting $n t \to u$; $t \to \dfrac u n$ and $\rd t \to \dfrac 1 n \rd u$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^s} \int_0^\infty u^{s - 1} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \map \zeta s \map \Gamma s\)





Definition of Riemann Zeta Function and Definition of Integral Form of Gamma Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.80$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Riemann Zeta Function $\map \zeta x = \dfrac 1 {1^x} + \dfrac 1 {2^x} + \dfrac 1 {3^x} + \cdots$: $35.24$




