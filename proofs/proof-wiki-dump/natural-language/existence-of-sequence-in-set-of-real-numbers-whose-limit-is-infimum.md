# 

Source: https://proofwiki.org/wiki/Existence_of_Sequence_in_Set_of_Real_Numbers_whose_Limit_is_Infimum

Theorem
Let $A \subseteq \R$ be a non-empty subset of the real numbers.
Let $b$ be an infimum of $A$.

Then there exists a sequence $\sequence {a_n}$ in $\R$ such that:

$(1): \quad \forall n \in \N: a_n \in A$
$(2): \quad \ds \lim_{n \mathop \to \infty} a_n = b$


Proof
From Infimum of Subset of Real Numbers is Arbitrarily Close:
For $\epsilon = \dfrac 1 n$ there exists an $a_n \in A$ such that:

$a_n - b < \dfrac 1 n$
Since $b$ is an infimum of $A$:

$0 \le a_n - b$
Therefore:

$\ds \lim_{n \mathop \to \infty} a_n = b$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Corollary $5.7$




