# 

Source: https://proofwiki.org/wiki/General_Harmonic_Numbers_in_terms_of_Riemann_Zeta_and_Hurwitz_Zeta_Functions

Theorem
$\harm r x = \map \zeta r - \map \zeta {r, x + 1}$
where:

$\harm r x$ denotes the general harmonic number of order $r$ evaluated at $x$
$\map \zeta r$ is the Riemann zeta function
$\map \zeta {r, x}$ is the Hurwitz zeta function
$r$ and $x$ are complex numbers with $\map \Re r > 1$ and $x \notin \Z_{<0}$


Proof













\(\ds \harm r x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^r} - \frac 1 {\paren {k + x}^r} }\)





Definition of General Harmonic Numbers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^r} - \sum_{k \mathop = 1}^{\infty} \frac 1 {\paren {k + x}^r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^r} - \sum_{k \mathop = 0}^{\infty} \frac 1 {\paren {k + \paren {x + 1} }^r}\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds \map \zeta r - \map \zeta {r, x + 1}\)





Definition of Hurwitz Zeta Function and Definition of Riemann Zeta Function



$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $7$. Sums of Powers, Bernoulli Numbers, and the Gamma Function




