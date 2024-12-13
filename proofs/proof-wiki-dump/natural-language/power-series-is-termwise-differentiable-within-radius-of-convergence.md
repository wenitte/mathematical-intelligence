# 

Source: https://proofwiki.org/wiki/Power_Series_is_Termwise_Differentiable_within_Radius_of_Convergence

Theorem
Let $\ds \map f x := \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about a point $\xi$.
Let $R$ be the radius of convergence of the series.

Then:

$\ds \frac \d {\d x} \map f x = \sum_{n \mathop = 0}^\infty \frac \d {\d x} a_n \paren {x - \xi}^n = \sum_{n \mathop = 1}^\infty  n a_n \paren {x - \xi}^{n - 1}$
for $\size {x - \xi} < R$.


Proof
Let $\rho \in \R$ such that $0 \le \rho < R$.
From Power Series Converges Uniformly within Radius of Convergence, $\map f x$ is uniformly convergent on $\set {x: \size {x - \xi} \le \rho}$.
From Real Polynomial Function is Continuous, each of $\map {f_n} x = a_n \paren {x - \xi}^n$ is a continuous function of $x$.
From Power Rule for Derivatives:

$\dfrac \d {\d x} \paren {x - \xi}^n = n \paren {x - \xi}^{n - 1}$
and again from Real Polynomial Function is Continuous, each of $\dfrac \d {\d x} \map {f_n} x = n a_n \paren {x - \xi}^{n - 1}$ is a continuous function of $x$.

Then from Derivative of Uniformly Convergent Series of Continuously Differentiable Functions:














\(\ds \frac \d {\d x} \map f x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac \d {\d x} a_n \paren {x - \xi}^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty n a_n \paren {x - \xi}^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n a_n \paren {x - \xi}^{n - 1}\)





as $n a_n \paren {x - \xi}^{n - 1} = 0$ when $n = 0$



$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power series




