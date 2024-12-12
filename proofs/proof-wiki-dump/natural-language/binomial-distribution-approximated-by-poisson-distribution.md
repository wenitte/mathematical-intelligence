# 

Source: https://proofwiki.org/wiki/Binomial_Distribution_Approximated_by_Poisson_Distribution

Theorem
Let $X$ be a discrete random variable which has the binomial distribution with parameters $n$ and $p$.
Then for $\lambda = n p$, $X$ can be approximated by a Poisson distribution with parameter $\lambda$:


$\ds \lim_{n \mathop \to \infty} \binom n k p^k \paren {1 - p}^{n - k} = \frac {\lambda^k} {k!}  e^{-\lambda}$


Proof
Let $X$ be as described.
Let $k \in \Z_{\ge 0}$ be fixed.
We write $p = \dfrac \lambda n$ and suppose that $n$ is large.

Then:














\(\ds \lim_{n \mathop \to \infty} \binom n k p^k \paren {1 - p}^{n - k}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \binom n k \paren {\frac \lambda n}^k \paren {1 - \frac \lambda n}^n \paren {1 - \frac \lambda n}^{-k}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {n^k} {k!} \paren {\frac \lambda n}^k \paren {1 - \frac \lambda n}^n \paren {1 - \frac \lambda n}^{-k}\)





Limit to Infinity of Binomial Coefficient over Power














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac 1 {k!} \lambda^k \paren {1 + \frac {-\lambda} n}^n \paren {1 - \frac \lambda n}^{-k}\)





dividing numerator and denominator by $n^k$














\(\ds \)

\(=\)







\(\ds \dfrac {\lambda^k} {k!} \lim_{n \mathop \to \infty} \paren {1 + \frac {-\lambda} n}^n \paren {1 - \frac \lambda n}^{-k}\)





moving $\dfrac {\lambda^k} {k!}$ outside of the limit














\(\ds \)

\(=\)







\(\ds \dfrac {\lambda^k} {k!} \lim_{n \mathop \to \infty} \paren {1 + \frac {-\lambda} n}^n \lim_{n \mathop \to \infty} \paren {1 - \frac \lambda n}^{-k}\)





Product Rule for Limits of Functions














\(\ds \)

\(=\)







\(\ds \dfrac {\lambda^k} {k!} \lim_{n \mathop \to \infty} \paren {1 + \frac {-\lambda} n}^n \lim_{n \mathop \to \infty} \paren {1 - \frac k n}^{-k}\)





$\lambda = n p$














\(\ds \)

\(=\)







\(\ds \frac {\lambda^k} {k!} e^{-\lambda} \paren {1 }\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {\lambda^k} {k!} e^{-\lambda}\)










Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): binomial distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): binomial distribution




