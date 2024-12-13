# 

Source: https://proofwiki.org/wiki/Null_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.

Then the null measure $\mu$ on $\struct {X, \Sigma}$ is a measure.


Proof
Let us verify the measure axioms $(1)$, $(2)$ and $(3')$ for $\mu$.


Proof of $(1)$
Let $S \in \Sigma$.
Then $\map \mu S = 0 \ge 0$.
$\Box$


Proof of $(2)$
It is to be shown that (for a sequence $\sequence {S_n}_{n \in \N}$ of pairwise disjoint sets):

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n}$
Now by definition of $\mu$:

$\ds \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = 0$

Thus, the desired equation becomes:

$\ds \sum_{n \mathop = 1}^\infty 0 = 0$
which trivially holds.
$\Box$


Proof of $(3')$
Note that $\O \in \Sigma$ as $\Sigma$ is a $\sigma$-algebra.
Hence $\map \mu \O = 0$.
$\Box$

The axioms are fulfilled, and it follows that $\mu$ is a measure.
$\blacksquare$





