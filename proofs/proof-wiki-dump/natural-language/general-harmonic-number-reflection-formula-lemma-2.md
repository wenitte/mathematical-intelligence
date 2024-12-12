# 

Source: https://proofwiki.org/wiki/General_Harmonic_Number_Reflection_Formula/Lemma_2

General Harmonic Number Reflection Formula: Lemma 2
$\ds \harm 1 {x - 1} - \harm 1 {-x} = -\pi \map \cot {\pi x}$
where:

$\harm 1 x$ denotes the general harmonic number of order $1$ evaluated at $x$
$\map \zeta r$ is the Riemann zeta function
$x \in \C$ and $x \notin \Z$


Proof













\(\ds \harm 1 {x - 1} - \harm 1 {-x}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^1} - \frac 1 {\paren {k + \paren {x - 1} }^1} } - \sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^1} - \frac 1 {\paren {k + \paren {-x} }^1} }\)





Definition of General Harmonic Numbers














\(\ds \)

\(=\)







\(\ds \paren {1 - 1} \sum_{k \mathop = 1}^\infty \frac 1 {k^1} - \sum_{k \mathop = 1}^\infty \frac 1 {\paren {x + k - 1}^1} - \sum_{k \mathop = 1}^\infty \frac {\paren {-1}^1} {\paren {k - x }^1}\)




















\(\ds \)

\(=\)







\(\ds -\paren {\frac 1 {x^1} + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {x + k}^1} + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {x - k }^1} }\)





Definition of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds -\paren {\frac 1 {x^1} + \sum_{k \mathop = 1}^\infty \frac {2 x} {\paren {x^2 - k^2}^1} }\)




















\(\ds \)

\(=\)







\(\ds -\pi \map \cot {\pi x}\)





Mittag-Leffler Expansion for Cotangent Function



$\blacksquare$





