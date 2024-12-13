# 

Source: https://proofwiki.org/wiki/Power_Series_Converges_Uniformly_within_Radius_of_Convergence

Theorem
Let $\ds S := \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about a point $\xi$.
Let $R$ be the radius of convergence of $S$.
Let $\rho \in \R$ such that $0 \le \rho < R$.

Then $S$ is uniformly convergent on $D = \set {x: \size {x - \xi} \le \rho}$.


Proof
We shall make use of the Weierstrass M-Test to prove this result.

To begin with, for each $n \in N$, define for $x \in D$:

$\map {f_n} x = a_n \paren {x - \xi}^n$
We have:














\(\ds \size {\map {f_n} x}\)

\(=\)







\(\ds \size {a_n \paren {x - \xi}^n}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n \rho^n}\)





$x \in D$



Define $M_n = \size {a_n \rho^n}$.
Then $M_n$ is an upper bound for $\size {\map {f_n} x}$.
So, by the definition of a supremum:

$\ds \sup_{x \mathop \in D} \size {\map {f_n} x} \le M_n$

Next, to apply the Weierstrass M-Test, it remains to be shown that $\ds \sum_{n \mathop = 0}^\infty M_n = \sum_{n \mathop = 0}^\infty \size {a_n \rho^n}$ converges.
Choose $x = \xi + \rho$ and note that:

$\size {x - \xi} = \size \rho = \rho < R$
Hence, by definition of radius of convergence, $x$ falls within the interval of convergence of $S$.
Thus $\ds S = \sum_{n \mathop = 0}^\infty a_n (x - \xi)^n = \sum_{n \mathop = 0}^\infty a_n \rho^n$ converges.
By Existence of Interval of Convergence of Power Series, a power series always converges absolutely at all points in its interval of convergence.
Hence $\ds \sum_{n \mathop = 0}^\infty M_n = \sum_{n \mathop = 0}^\infty \size {a_n \rho^n}$ also converges.

Finally then, having satisfied all the requirements to use Weierstrass M-Test, we can conclude that $\ds \sum_{n \mathop = 0}^\infty \map {f_n} x = \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ converges uniformly in $D$.
$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series




