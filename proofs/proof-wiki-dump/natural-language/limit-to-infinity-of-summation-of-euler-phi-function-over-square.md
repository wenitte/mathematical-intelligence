# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Summation_of_Euler_Phi_Function_over_Square



Theorem
$\ds \lim_{n \mathop \to \infty} \dfrac {\map \Phi n} {n^2} = \dfrac 3 {\pi^2}$
where:

$\map \Phi n = \ds \sum_{k \mathop = 1}^n \map \phi k$
$\map \phi k$ is the Euler $\phi$ function of $k$.

Numerically, this evaluates to:

$\dfrac 3 {\pi^2} \approx 0 \cdotp 30396 35509 \ldots$
This sequence is A104141 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof 1













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


Proof 2
We find the probability that the two random numbers not less than $n$ is coprime.
We pick randomly $x, y \in \set {1, \dots, n}$.
There are $n^2$ ways to do this.
There are three cases:

If $x > y$, for each $x$, there are $\map \phi x$ values of $y$ so that $x \perp y$.
Since $1 \le x \le n$, there are a total of $\map \phi 1 + \dots + \map \phi n = \map \Phi n$ valid values of $y$.
If $x < y$, the result is similar: there are $\map \Phi n$ valid values of $x$.
If $x = y$, $x \perp y$ only if $x = y = 1$.

Therefore the probability that the two random numbers not less than $n$ is coprime is:

$\dfrac {\map \Phi n + \map \Phi n + 1} {n^2}$

Taking limit to infinity and using Probability of Two Random Integers having no Common Divisor:














\(\ds \frac 6 {\pi^2}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\map \Phi n + \map \Phi n + 1} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {2 \map \Phi n} {n^2} + \lim_{n \mathop \to \infty} \frac 1 {n^2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {2 \map \Phi n} {n^2}\)





Basic Null Sequences








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \frac {\map \Phi n} {n^2}\)

\(=\)







\(\ds \frac 3 {\pi^2}\)









$\blacksquare$


Historical Note
This result was cited by Leonard Eugene Dickson in his History of the Theory of Numbers, Volume I of $1919$.
He attributed it to J. Perrot about whom nothing can be found.


Sources
1881: J. Perrot: Sur la sommation des nombres $\phi$ (Bull. des Sc. Math. et Astr. Ser. 2 Vol. 5, no. 1: pp. 37 – 40)
1919: Leonard Eugene Dickson: History of the Theory of Numbers: Volume $\text { I }$: Chapter $\text V$. Euler's $\phi$-Function, Generalizations, Farey Series
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,30396 35509 \ldots$




