# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Summation_of_Euler_Phi_Function_over_Square/Proof_1

Theorem
$\ds \lim_{n \mathop \to \infty} \dfrac {\map \Phi n} {n^2} = \dfrac 3 {\pi^2}$
where:

$\map \Phi n = \ds \sum_{k \mathop = 1}^n \map \phi k$
$\map \phi k$ is the Euler $\phi$ function of $k$.

Numerically, this evaluates to:

$\dfrac 3 {\pi^2} \approx 0 \cdotp 30396 35509 \ldots$


Proof













\(\ds \map \Phi n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map \phi k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\sum_{d \mathop \divides k} \map \mu d \frac k d}\)





Euler Phi Function in terms of Möbius Function














\(\ds \)

\(=\)







\(\ds \sum_{d d' \mathop \le n} d' \map \mu d\)





taking $d d' = k$














\(\ds \)

\(=\)







\(\ds \sum_{d \mathop = 1}^n \map \mu d \sum_{d' \mathop = 1}^{\floor {n / d} } d'\)





$d'$ takes value from $1$ to $\floor {\frac n d}$ for each $d$














\(\ds \)

\(=\)







\(\ds \sum_{d \mathop = 1}^n \map \mu d \paren {\frac 1 2 \paren {\floor {\frac n d}^2 + \floor {\frac n d} } }\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{d \mathop = 1}^n \map \mu d \paren {\paren {\frac n d}^2 + \map \OO {\frac n d} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 n^2 \sum_{d \mathop = 1}^n \frac {\map \mu d} {d^2} + \map \OO {\sum_{d \mathop = 1}^n \frac n d}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 n^2 \sum_{d \mathop = 1}^\infty \frac {\map \mu d} {d^2} + \map \OO {n^2 \sum_{d \mathop = n + 1}^\infty \frac 1 {d^2} } + \map \OO {n \ln n}\)





Approximate Size of Sum of Harmonic Series














\(\ds \)

\(=\)







\(\ds \frac 1 2 n^2 \times \frac 1 {\map \zeta 2}+ \map \OO {\frac {n^2} n} + \map \OO {n \ln n}\)





Reciprocal of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \frac {3 n^2} {\pi^2} + \map \OO {n \ln n}\)





Basel Problem








\(\ds \leadsto \ \ \)





\(\ds \frac {\map \Phi n} {n^2}\)

\(=\)







\(\ds \frac 3 {\pi^2} + \map \OO {n^{-1} {\ln n} }\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \to \infty} \frac {\map \Phi n} {n^2}\)

\(=\)







\(\ds \frac 3 {\pi^2}\)





Powers Drown Logarithms



$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.): $\text {XVI}$. THE ARITHMETICAL FUNCTIONS $\map \phi n$, $\map d n$, $\map \sigma n$, $\map r n$: $18.5$ The average order of $\map \phi n$




