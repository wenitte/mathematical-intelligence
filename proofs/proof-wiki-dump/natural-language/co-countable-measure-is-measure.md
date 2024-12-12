# 

Source: https://proofwiki.org/wiki/Co-Countable_Measure_is_Measure



Theorem
Let $X$ be an uncountable set.
Let $\Sigma$ be the $\sigma$-algebra of countable sets on $X$.

Then the co-countable measure $\mu$ on $X$ is a measure.


Proof
Let us verify the measure axioms $(1)$, $(2)$ and $(3')$ for $\mu$.


Proof of $(1)$
For all $S \in \Sigma$, $\map \mu S$ is $0$ or $1$.
In either case, $\map \mu S \ge 0$.
$\Box$


Proof of $(2)$
It is to be shown that (for a sequence $\sequence {S_n}_{n \mathop \in \N}$ of pairwise disjoint sets):

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = \map \mu {\bigcup_{n \mathop = 1}^\infty S_n}$

Suppose that at least one $S_n$ is co-countable, say $S_N$.
Since the $S_n$ are pairwise disjoint, it follows that, for all $n \in \N$, $n \ne N$:

$S_n \subseteq X \setminus S_N$
by Empty Intersection iff Subset of Complement.
From Subset of Countably Infinite Set is Countable, the $S_n$ with $n \ne N$ are all countable, as $S_N$ is co-countable.

Therefore:

$\map \mu {S_n} = \begin{cases} 1 & : \text {if $n = N$} \\ 0 & : \text {if $n \ne N$} \end {cases}$
and subsequently:

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = 1$

From Superset of Co-Countable Set, $\ds \bigcup_{n \mathop = 1}^\infty S_n$ is co-countable.
Hence:

$\ds \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = 1$
verifying $(2)$ for $\mu$ in this case.

If on the other hand, all $S_n$ are countable, then for all $n \in \N$:

$\map \mu {S_n} = 0$
and so:

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = 0$

From Countable Union of Countable Sets is Countable:

$\ds \bigcup_{n \mathop = 1}^\infty S_n$
is also countable, hence:

$\ds \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = 0$
verifying $(2)$ for $\mu$ in this case as well.

Hence $(2)$ holds for $\mu$, from Proof by Cases.
$\Box$


Proof of $(3')$
Note that $\O \in \Sigma$ as $\Sigma$ is a $\sigma$-algebra.
By Empty Set is Countable, $\O$ is countable, whence:

$\map \mu \O = 0$
$\Box$

Having verified the axioms, it follows that $\mu$ is a measure.
$\blacksquare$





