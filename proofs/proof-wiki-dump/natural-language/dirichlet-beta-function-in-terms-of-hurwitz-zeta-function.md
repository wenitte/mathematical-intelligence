# 

Source: https://proofwiki.org/wiki/Dirichlet_Beta_Function_in_terms_of_Hurwitz_Zeta_Function

Theorem
$\map \beta s = \dfrac 1 {4^s} \paren {\map \zeta {s, \dfrac 1 4} - \map \zeta {s, \dfrac 3 4} }$
where:

$\map \beta s$ is the Dirichlet beta function
$\map \zeta {s, x}$ is the Hurwitz zeta function
$s$ is a complex number with $\map \Re s > 1$


Proof













\(\ds \map \beta s\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^s}\)





Definition of Dirichlet Beta Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {\paren {4 n + 1}^s} - \sum_{n \mathop = 0}^\infty \frac 1 {\paren {4 n + 3}^s}\)





splitting summation into positive and negative parts














\(\ds \)

\(=\)







\(\ds \frac 1 {4^s} \paren {\sum_{n \mathop = 0}^\infty \frac 1 {\paren {n + \frac 1 4 }^s} - \sum_{n \mathop = 0}^\infty \frac 1 {\paren {n + \frac 3 4}^s} }\)





factoring out $\dfrac 1 {4^s}$














\(\ds \)

\(=\)







\(\ds \frac 1 {4^s} \paren {\map \zeta {s, \frac 1 4} - \map \zeta {s, \frac 3 4} }\)





Definition of Hurwitz Zeta Function




Our reliance upon the Hurwitz zeta function requires that $s \in \C$ and $\map \Re s > 1$.
$\blacksquare$





