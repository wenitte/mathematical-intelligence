# 

Source: https://proofwiki.org/wiki/Infinite_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.

Then the infinite measure $\mu$ on $\struct {X, \Sigma}$ is a measure.


Proof
Let us verify the measure axioms $(1)$, $(2)$ and $(3')$ for $\mu$.


Proof of $(3')$
We have by definition $\map \mu \O = 0$.
$\Box$


Proof of $(1)$
Let $S \in \Sigma$.
Then:

$\map \mu S = + \infty > 0$ for $S \ne \O$
$\map \mu S = 0 \ge 0$ for $S = \O$
So $\map \mu S \ge 0$ for all $S \in \Sigma$.
$\Box$


Proof of $(2)$
It is to be shown that (for a sequence $\sequence {S_n}_{n \in \N}$ of pairwise disjoint sets):

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n}$

Suppose $S_n = \O$ for all $n \in \N$.
Then by definition of $\mu$:

$\ds \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = \map \mu \O = 0$

Thus, the desired equation becomes:

$\ds \sum_{n \mathop = 1}^\infty 0 = 0$
which trivially holds.

Suppose $S_n \ne \O$ for some $n \in \N$.
Then $S_n \subseteq \ds \bigcup_{n \mathop = 1}^\infty S_n \ne \O$.

$\ds \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = + \infty$
$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = \map \mu {S_n} = + \infty = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n}$

Thus $\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n}$.
$\Box$

The axioms are fulfilled, and it follows that $\mu$ is a measure.
$\blacksquare$





