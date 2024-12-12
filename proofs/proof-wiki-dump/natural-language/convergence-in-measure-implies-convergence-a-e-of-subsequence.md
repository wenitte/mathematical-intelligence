# 

Source: https://proofwiki.org/wiki/Convergence_in_Measure_Implies_Convergence_a.e._of_Subsequence

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $D \in \Sigma$. 
Let $f : D \to \R$ be a $\Sigma$-measurable function.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of $\Sigma$-measurable functions $f_n : D \to \R$ such that: 

$\sequence {f_n}_{n \mathop \in \N}$ converges in measure to $f$.

Then there is a subsequence $\sequence {f_{n_k} }_{k \mathop \in \N}$ of $\sequence {f_n}_{n \mathop \in \N}$ that converges a.e. to $f$.


Proof
For each $n, k \ge 1$, define:

$\ds B_{n, k} = \set {x \in X : \size {\map {f_n} x - \map f x} > \frac 1 k}$
Since $\sequence {f_n}_{n \mathop \in \N}$ converges in measure to $f$, we have: 

$\ds \lim_{n \mathop \to \infty} \map \mu {\set {x \in X : \size {\map {f_n} x - \map f x} > \frac 1 k} } = 0$
Then from the definition of convergence, for each $k$ we can select $n_k$ such that: 

$\ds \map \mu {\set {x \in X : \size {\map {f_{n_k} } x - \map f x} > \frac 1 k} } < \frac 1 {2^k}$
That is: 

$\ds \map \mu {B_{n_k, k} } < \frac 1 {2^k}$
We then have: 














\(\ds \sum_{k \mathop = 1}^\infty \map \mu {B_{n_k, k} }\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {2^k}\)




















\(\ds \)

\(=\)







\(\ds 1\)





Sum of Infinite Geometric Progression














\(\ds \)

\(<\)







\(\ds \infty\)









By the Borel-Cantelli Lemma, we therefore have: 

$\ds \map \mu {\limsup_{k \mathop \to \infty}  B_{n_k, k} } = 0$
By Equivalence of Definitions of Limit Superior of Sequence of Sets:

$\map \mu {\set {x \in X : \size {\map {f_{n_k} } x - \map f x} > \dfrac 1 k \text { for infinitely many } k} } = 0$

Let: 

$N = \set {x \in X : \size {\map {f_{n_k} } x - \map f x} > \dfrac 1 k \text { for infinitely many } k}$
Then, for $x \not \in N$, we have: 

$\size {\map {f_{n_k} } x - \map f x} > \dfrac 1 k$ holds for only finitely many $k$.
That is, there exists $K \in \N$ such that: 

$\size {\map {f_{n_k} } x - \map f x} \le \dfrac 1 k$ for $k \ge K$.
Then from the Squeeze Theorem, we have: 

$\size {\map {f_{n_k} } x - \map f x} \to 0$
so:

$\map {f_{n_k} } x \to \map f x$
So if $x \notin N$: 

$\map {f_{n_k} } x \to \map f x$
Since $\map \mu N = 0$: 

$\sequence {f_{n_k}}_{n_k \mathop \in \N}$ converges a.e. to $f$.
$\blacksquare$


Sources
2014: Loukas Grafakos: Classical Fourier Analysis (3rd ed.) ... (previous) ... (next): $1.1.2$: Convergence in Measure




