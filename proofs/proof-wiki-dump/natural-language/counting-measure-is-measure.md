# 

Source: https://proofwiki.org/wiki/Counting_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.

Then the counting measure $\size {\,\cdot\,}$ on $\struct {X, \Sigma}$ is a measure.


Proof
Let us verify the measure axioms $(1)$, $(2)$ and $(3')$ for $\size {\,\cdot\,}$.


Proof of $(1)$
The values that $\size {\,\cdot\,}$ can take are the natural numbers $\N$ and $+\infty$.
All of these are positive, whence:

$\forall S \in \Sigma: \size S \ge 0$
$\Box$


Proof of $(2)$
It is to be shown that (for a sequence $\sequence {S_n}_{n \mathop \in \N}$ of pairwise disjoint sets):

$\ds \sum_{n \mathop = 1}^\infty \size {S_n} = \size {\bigcup_{n \mathop = 1}^\infty S_n}$

Suppose that the cardinality of at least one $S_i$ is infinite.
Then the cardinality of:

$\ds \bigcup_{n \mathop = 1}^\infty S_n$
is infinite by Subset of Finite Set is Finite.
Hence:

$\ds \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = +\infty$
Now as:

$\map \mu {S_i} = +\infty$
it follows by the definition of extended real addition that:

$\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n} = +\infty$

Suppose now that all $S_i$ are finite, and $\ds \sum_{n \mathop = 1}^\infty \size {S_n}$ converges.
Then by Convergent Series of Natural Numbers, it follows that for some $N \in \N$:

$\forall m \ge N: \size {S_m} = 0$
which by Cardinality of Empty Set means $S_m = \O$.

Therefore we conclude that:

$\ds \sum_{n \mathop = 1}^\infty \size {S_n} = \sum_{n \mathop = 1}^N \size {S_n}$
and by Union with Empty Set:

$\ds \bigcup_{n \mathop = 1}^\infty S_n = \bigcup_{n \mathop = 1}^N S_n$
By Cardinality of Set Union: Corollary:

$\ds \size {\bigcup_{n \mathop = 1}^N S_n} = \sum_{n \mathop = 1}^N \size {S_n}$
and combining this with the above yields the desired identity.

Suppose finally that $\ds \sum_{n \mathop = 1}^\infty \size {S_n}$ diverges.
To establish the desired identity, it is to be shown that $\ds \bigcup_{n \mathop = 1}^\infty S_n$ is infinite.
Suppose to the contrary that it has finite cardinality, say $k$.
By Cardinality of Set Union: Corollary, for each $N \in \N$:

$\ds \sum_{n \mathop = 1}^N \size {S_n} = \size {\bigcup_{n \mathop = 1}^N S_n}$
Now since:

$\ds \bigcup_{n \mathop = 1}^N S_n \subseteq \bigcup_{n \mathop = 1}^\infty S_n$
it follows by Cardinality of Subset of Finite Set that, for each $N \in \N$:

$\ds \size {\bigcup_{n \mathop = 1}^N S_n} \le k$
which contradicts the assumption that $\ds \sum_{n \mathop = 1}^\infty \size {S_n}$ diverges.

Therefore $\ds \bigcup_{n \mathop = 1}^\infty S_n$ is infinite and the identity follows.
$\Box$


Proof of $(3')$
By Cardinality of Empty Set:

$\size \O = 0$
$\Box$

Having verified the axioms, it follows that $\size {\,\cdot\,}$ is a measure.
$\blacksquare$





