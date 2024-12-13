# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_equals_Limit_of_Sequence/Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $A$.
Let $l \in A$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\ds \lim_{r \mathop \to \infty} x_{n_r} = l$

That is, the limit of a convergent sequence equals the limit of a subsequence of it.


Proof
Let $\epsilon > 0$.
Since $\ds \lim_{n \mathop \to \infty} x_n = l$, it follows from the definition of limit that:

$\exists N: \forall n > N: \map d {x_n, l} < \epsilon$

Now let $R = N$.
Then from Strictly Increasing Sequence of Natural Numbers‎:

$\forall r > R: n_r \ge r$
Thus $n_r > N$ and so:

$\map d {x_n, l} < \epsilon$

The result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $3$
although the question calls for a separate proof for each of $3$ specific metrics on a specific space.




