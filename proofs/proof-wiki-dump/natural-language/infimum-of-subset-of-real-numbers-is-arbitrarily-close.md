# 

Source: https://proofwiki.org/wiki/Infimum_of_Subset_of_Real_Numbers_is_Arbitrarily_Close



Theorem
Let $A \subseteq \R$ be a subset of the real numbers.
Let $b$ be an infimum of $A$.
Let $\epsilon \in \R_{>0}$.

Then:

$\exists x \in A: x - b < \epsilon$


Proof
Note that $A$ is non-empty as the empty set does not admit an infimum (in $\R$).

Suppose $\epsilon \in \R_{>0}$ such that:

$\forall x \in A: x - b \ge \epsilon$
Then:

$\forall x \in A: b + \epsilon \le x$
and so $b + \epsilon$ would be a lower bound of $A$ which is greater than $b$.
But since $b$ is an infimum of $A$ there can be no such $b + \epsilon$.
From that contradiction it follows that:

$\exists x \in A: x - b < \epsilon$
$\blacksquare$


Also see
Supremum of Subset of Real Numbers is Arbitrarily Close


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Lemma $5.6$




