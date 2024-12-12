# 

Source: https://proofwiki.org/wiki/Convergence_a.u._Implies_Convergence_a.e.

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f_n: D \to \R$ be a sequence of $\Sigma$-measurable functions for $D \in \Sigma$.
Let $f_n$ converge a.u. to a function $f$ on $D$.

Then $f_n$ converges a.e. to $f$.


Proof
Assume $f_n$ converge a.u. to $f$ on $D$.
Then for each $\epsilon > 0$ there is a $B_\epsilon \subseteq D$ with $\map \mu {B_\epsilon} < \epsilon$ outside of which $f_n$ converges uniformly to $f$.
Thus, $f_n$ converges pointwise to $f$ outside of each $B_\epsilon$.

Next, define $\ds B \equiv \bigcap_{n \mathop \in \N} B_{\frac 1 n}$.
First, $B \in \Sigma$ since $\Sigma$ is a sigma-algebra, so that $\map \mu B$ is defined.
Second, note that since the measure is monotonic:

$\forall n \in \N: \map \mu B \le \map \mu {B_{\frac 1 n} } < \frac 1 n$
Hence:

$\map \mu B = 0$
But $x \in D - B$ only if $x \notin B_{\frac 1 k}$ for some $k \in \N$.
So by the above:

$\map {f_n} x \to \map f x$

It follows by definition that $f_n$ converges a.e. to $f$.
$\blacksquare$


Sources
1981: G. de Barra: Measure Theory and Integration: $\S 7.2$: Almost Uniform Convergence: Theorem $8$




