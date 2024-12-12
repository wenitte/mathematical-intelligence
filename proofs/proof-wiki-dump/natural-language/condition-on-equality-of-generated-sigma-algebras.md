# 

Source: https://proofwiki.org/wiki/Condition_on_Equality_of_Generated_Sigma-Algebras

Theorem
Let $X$ be a set.
Let $\GG$, $\HH$ be sets of subsets of $X$.

Suppose that:

$\GG \subseteq \HH \subseteq \map \sigma \GG$
where $\sigma$ denotes generated $\sigma$-algebra.

Then:

$\map \sigma \GG = \map \sigma \HH$


Proof
From Generated Sigma-Algebra Preserves Subset, it follows that:

$\map \sigma \GG \subseteq \map \sigma \HH$

Since $\map \sigma \GG$ is a $\sigma$-algebra containing $\HH$:

$\map \sigma \HH \subseteq \map \sigma \GG$
from the definition of generated $\sigma$-algebra.

Hence the result, from the definition of set equality.
$\blacksquare$





