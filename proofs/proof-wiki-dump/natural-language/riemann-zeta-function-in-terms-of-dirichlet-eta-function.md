# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_in_terms_of_Dirichlet_Eta_Function

Theorem
Let $\zeta$ be the Riemann zeta function.
Let $\eta$ be the Dirichlet eta function.
Let $s \in \C$ be a complex number with real part $\sigma > 1$.

Then:

$\map \zeta s = \dfrac 1 {1 - 2^{1 - s} } \map \eta s$


Proof













\(\ds \map \zeta s - \map \eta s\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^s} - \sum_{n \mathop = 1}^\infty \frac{\paren {-1}^{n - 1} } {n^s}\)





Definition of Riemann Zeta Function, Definition of Dirichlet Eta Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac 1 {n^s} + \frac {\paren {-1}^n} {n^s} }\)





Sum of Summations equals Summation of Sum














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac 1 {\paren {2 n}^s}\)




















\(\ds \)

\(=\)







\(\ds 2^{1 - s} \sum_{n \mathop = 1}^\infty \frac 1 {n^s}\)




















\(\ds \)

\(=\)







\(\ds 2^{1 - s} \map \zeta s\)





Definition of Riemann Zeta Function








\(\ds \leadsto \ \ \)





\(\ds \paren {1 - 2^{1 - s} } \map \zeta s\)

\(=\)







\(\ds \map \eta s\)














\(\ds \leadsto \ \ \)





\(\ds \map \zeta s\)

\(=\)







\(\ds \frac 1 {1 - 2^{1 - s} } \map \eta s\)









$\blacksquare$


Also see
Analytic Continuation of Riemann Zeta Function using Dirichlet Eta Function




