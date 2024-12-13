# 

Source: https://proofwiki.org/wiki/Power_Series_is_Termwise_Integrable_within_Radius_of_Convergence

Theorem
Let $\ds \map f x := \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about a point $\xi$.
Let $R$ be the radius of convergence of $S$.

Then:

$\ds \int_a^b \map f x \rd x = \sum_{n \mathop = 0}^\infty \int_a^b a_n x^n \rd x = \sum_{n \mathop = 0}^\infty a_n \frac {x^{n + 1} } {n + 1}$


Proof
Let $\rho \in \R$ such that $0 \le \rho < R$.
From Power Series Converges Uniformly within Radius of Convergence, $\map f x$ is uniformly convergent on $\set {x: \size {x - \xi} \le \rho}$.
From Real Polynomial Function is Continuous, each of $\map {f_n} x = a_n x^n$ is a continuous function of $x$.
Then from Definite Integral of Uniformly Convergent Series of Continuous Functions:

$\ds \int_a^b \map f x \rd x = \sum_{n \mathop = 0}^\infty \int_a^b a_n x^n \rd x$

The final result follows from Integral of Power.
$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power series




