# 

Source: https://proofwiki.org/wiki/1-Sequence_Space_is_Separable

Theorem
$\ell^1$ space is a separable space.


Proof
Let $D$ be the set of all finitely supported sequences with rational terms:

$D = \set {\sequence {q_i}_{i \mathop \in \N} : n \in \N : i \le n : q_i \in \Q}$
We have that:

Rational Numbers are Countably Infinite
A finite set is countable
$D$ is a union of finite sets indexed by $n$, which is countable
By Countable Union of Countable Sets is Countable, $D$ is countable.
Let $\mathbf x := \tuple {x_n}_{n \mathop \in \N} \in \ell^1$
By definition of $\ell^1$:

$\ds \sum_{n \mathop = 1}^\infty \size {x_n} < \infty$
Let $\ds s_n := \sum_{i \mathop = 0}^n \size {x_i}$ be a sequence of partial sums of $\ds s = \sum_{i \mathop = 0}^\infty \size {x_i}$.
Then $s$ is a convergent sequence:

$\forall \epsilon' \in \R_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies \size {s_n - s} < \epsilon'$
Note that:














\(\ds \size {s_n - s}\)

\(=\)







\(\ds \size {\sum_{i \mathop = 0}^n \size {x_i} - \sum_{i \mathop = 0}^\infty \size {x_i} }\)




















\(\ds \)

\(=\)







\(\ds \size {\sum_{i \mathop = n \mathop + 1}^\infty \size {x_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = n \mathop + 1}^\infty \size {x_i}\)





Definition of Absolute Value



Let $\epsilon' = \dfrac \epsilon 2$.
Let $\ds N \in \N : \sum_{n \mathop = N + 1}^\infty \size {x_n} < \frac \epsilon 2$.
We have that $\Q$ is dense in $\R$.

$\forall x \in \R : \exists \epsilon \in \R_{\mathop > 0} : \exists q \in \Q : \size {x - q} < \epsilon$
Then:

$\ds \forall i \in \N : 1 \le i \le N : q_i \in \Q : \sum_{n \mathop = 1}^N \size {x_n - q_n} < \frac \epsilon 2$
where

$\ds \frac \epsilon 2 = \sum_{i \mathop = 1}^N \epsilon_i$
Let $\mathbf x' := \tuple {q_1, \ldots, q_N, 0, \ldots} \in D$.
Then:

$\ds \norm {\mathbf x - \mathbf x '} = \sum_{n \mathop = 1}^N \size {x_n - q_n} + \sum_{n \mathop = N + 1}^\infty \size {x_n} < \epsilon$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




