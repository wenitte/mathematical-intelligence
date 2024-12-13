# 

Source: https://proofwiki.org/wiki/Power_Series_Converges_to_Continuous_Function

Theorem
Let $\ds \map f x := \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about a point $\xi$.
Let $R$ be the radius of convergence of $S$.

Then $\map f x$ is a continuous function on $\set {x: \size {x - \xi} < R}$.


Proof
Let $\rho \in \R$ such that $0 \le \rho < R$.
From Power Series Converges Uniformly within Radius of Convergence, $\map f x$ is uniformly convergent on $\set {x: \size {x - \xi} \le \rho}$.
From Real Polynomial Function is Continuous, each of $\map {f_n} x = a_n x^n$ is a continuous function of $x$.
The result follows from Uniformly Convergent Series of Continuous Functions is Continuous.
$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series




