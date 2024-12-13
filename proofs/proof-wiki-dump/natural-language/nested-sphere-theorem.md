# 

Source: https://proofwiki.org/wiki/Nested_Sphere_Theorem

Theorem
Let $M = \struct {A, d}$ be a complete metric space.
Let $\sequence {S_n}$ be a sequence of closed balls in $M$ defined by:

$S_n = \map {B^-_{\rho_n} } {x_n}$
where $\rho_n \to 0$ as $n \to \infty$ and:

$S_1 \supseteq S_2 \supseteq \cdots \supseteq S_n \supseteq \cdots$

Then there exists $x \in A$ such that:

$\ds \bigcap_{n \mathop = 1}^\infty S_n = \set x$


Proof
Let $S_n = \map {B^-_{\rho_n} } {x_n}$ be the closed ball of radius $\rho_n$ about the point $x_n$.
That is, let $S_n = \set {x \in A: \map d {x_n, x} \le \rho_n}$.
Then the sequence $\sequence {x_n}$ forms a Cauchy sequence:

$\map d {x_n, x_{n + p} } < \rho_n$
for any $p \ge 0$ since $S_{n + p} \subseteq S_n$.
However, $\rho_n \to 0$ as $n \to \infty$ and therefore $\map d {x_n, x_{n + p} } \to 0$ as $n \to \infty$ for any $p \ge 0$.

Since the space $M$ is complete, there exists $x \in X$ such that $x_n \to x$ as $n \to \infty$.
Then since the subsequence $\sequence {x_k}_{k \mathop = n}^\infty$ is contained entirely in $S_n$ and converges to $x$, $x$ is a member of the closure of $S_n$ by Closure of Subset of Metric Space by Convergent Sequence.
Since $S_n$ is closed, by Closed Set Equals its Closure, we have:

$\forall n \in \N: x \in S_n$
Hence:

$\ds x \in \bigcap_{n \mathop = 1}^\infty S_n$

Suppose now that $y \ne x$.
Then it follows that $\map d {x, y} > 0$, and hence that for some $n$:

$\map d {x, y} > 2 \rho_n$
Since $x, x_n \in S_n$, it then follows that:

$\map d {x, x_n} \le \rho_n$
Now:














\(\ds 2 \rho_n\)

\(<\)







\(\ds \map d {x, y}\)




















\(\ds \)

\(\le\)







\(\ds \map d {x, x_n} + \map d {x_n, y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \rho_n + \map d {x_n, y}\)









From the above, it follows that:

$\map d {x_n, y} > \rho_n$
so that $y \notin S_n$, and consequently:

$\ds y \notin \bigcap_{i \mathop = 1}^\infty S_n$

Hence:

$\ds \bigcap_{n \mathop = 1}^\infty S_n = \set x$
$\blacksquare$





