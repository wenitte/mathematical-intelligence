# 

Source: https://proofwiki.org/wiki/Existence_of_Sequence_in_Subset_of_Metric_Space_whose_Limit_is_Infimum

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $S \subseteq A$ be a non-empty subset of $A$.

Then there exists a sequence $\sequence {a_n}$ of points of $S$ such that:

$\ds \lim_{n \mathop \to \infty} \map d {a, a_n} = \map d {a, S}$


Proof
From Existence of Sequence in Set of Real Numbers whose Limit is Infimum:

$\ds \lim_{n \mathop \to \infty} \map d {a, a_n} = b$
where $b$ is an infimum of $\map d {a, a_n}$.
Hence the result by definition of distance to a subset of a metric space.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Corollary $5.9$




