# 

Source: https://proofwiki.org/wiki/Existence_of_Interval_of_Convergence_of_Power_Series



Theorem
Let $\xi \in \R$ be a real number.
Let $\ds \map S x = \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about $\xi$.

Then the interval of convergence of $\map S x$ is a real interval whose midpoint is $\xi$.


Corollary 1
A power series converges absolutely at all points of its interval of convergence with the possible exception of its end points.
At the end points nothing can be said: it could be absolutely convergent, or conditionally convergent, or divergent.


Corollary 2
Let $\ds \map S x = \sum_{n \mathop = 0}^\infty a_n x^n$ be a power series.
Let $\map S x$ be convergent at $x = x_0$.

Then $\map S x$ is convergent for all $x$ such that $\sequence x < \sequence {x_0}$.


Proof
Suppose $\map S x$ converges when $x = y$.
We need to show that it converges for all $x$ which satisfy $\size {x - \xi} < \size {y - \xi}$.

So, let $\map S x$ converge when $x = y$.
Then from Terms in Convergent Series Converge to Zero:

$a_n \paren {y - \xi}^n \to 0$ as $n \to \infty$
Hence, from Convergent Sequence is Bounded:

$\sequence {a_n \paren {y - \xi}^n}$ is bounded
Thus:

$\exists H \in \R: \forall n \in \N_{>0}: \size {a_n \paren {y - \xi}^n} \le H$

Now suppose $\size {x - \xi} < \size {y - \xi}$.
Then:

$\rho = \dfrac {\size {x - \xi} } {\size {y - \xi} } < 1$
(Note that if $\size {x - \xi} < \size {y - \xi}$ then $\size {y - \xi} > 0$ and the above fraction always exists.)
Hence:

$\forall n \in \N_{>0} \size {a_n \paren {x - \xi}^n} = \rho^n \size {a_n \paren {y - \xi}^n} \le H \rho^n$
By Sequence of Powers of Number less than One:

$\ds \sum_{n \mathop = 1}^\infty \rho^n$ converges
Thus $\ds \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ converges by the Comparison Test.
The result follows.
$\blacksquare$


Also see
Existence of Radius of Convergence of Complex Power Series for a proof of the same result in complex numbers.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.2$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series: Theorem $1.11$




