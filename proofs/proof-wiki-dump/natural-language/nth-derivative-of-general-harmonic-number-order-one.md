# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_General_Harmonic_Number_Order_One

Theorem
Let $n \in \Z_{>0}$.
The $n$th derivative of $\harm 1 x$ with respect to $x$ is:

$\dfrac {\d^n} {\d x^n} \harm 1 x = \paren {-1}^{n + 1} n! \paren {\map \zeta {n + 1} - \harm {n + 1} x}$

where:

$\harm n x$ denotes the general harmonic number of order $n$ evaluated at $x$
$\map \zeta n$ is the Riemann zeta function
$x \in \C$ with $x \notin \Z_{<0}$


Proof













\(\ds \dfrac {\d^n} {\d x^n} \harm 1 x\)

\(=\)







\(\ds \dfrac {\d^n} {\d x^n} \paren {\sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^1} - \frac 1 {\paren {k + x}^1} } }\)





Definition of General Harmonic Numbers














\(\ds \)

\(=\)







\(\ds \dfrac {\d^n} {\d x^n} \paren {\sum_{k \mathop = 1}^\infty \frac 1 {k^1} } - \dfrac {\d^n} {\d x^n} \paren {\sum_{k \mathop = 1}^\infty \frac 1 {\paren {k + x}^1} }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} n! \paren {\sum_{k \mathop = 1}^\infty \frac 1 {\paren {k + x}^{n + 1} } }\)





Nth Derivative of Reciprocal of Mth Power: Corollary














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} n! \paren {\paren {\sum_{k \mathop = 1}^\infty \frac 1 {k^{n + 1} } - \sum_{k \mathop = 1}^\infty \frac 1 {k^{n + 1} } } + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {k + x}^{n + 1} } }\)





add $0$














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} n! \paren {\sum_{k \mathop = 1}^\infty \frac 1 {k^{n + 1} } - \sum_{k \mathop = 1}^\infty \paren {\frac 1 {k^{n + 1} } - \frac 1 {\paren {k + x}^{n + 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} n! \paren {\map \zeta {n + 1} - \harm {n + 1} x}\)





Definition of Riemann Zeta Function



$\blacksquare$





