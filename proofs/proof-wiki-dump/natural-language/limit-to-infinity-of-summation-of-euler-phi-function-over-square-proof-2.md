# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Summation_of_Euler_Phi_Function_over_Square/Proof_2

Theorem
$\ds \lim_{n \mathop \to \infty} \dfrac {\map \Phi n} {n^2} = \dfrac 3 {\pi^2}$
where:

$\map \Phi n = \ds \sum_{k \mathop = 1}^n \map \phi k$
$\map \phi k$ is the Euler $\phi$ function of $k$.

Numerically, this evaluates to:

$\dfrac 3 {\pi^2} \approx 0 \cdotp 30396 35509 \ldots$


Proof
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





