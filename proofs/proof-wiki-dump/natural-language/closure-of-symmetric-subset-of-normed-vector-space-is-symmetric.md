# 

Source: https://proofwiki.org/wiki/Closure_of_Symmetric_Subset_of_Normed_Vector_Space_is_Symmetric

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $A \subseteq X$ be symmetric.

Then the topological closure of $A$ is symmetric.


Proof
Let $A^-$ be the topological closure of $A$.
Let $a \in A^-$.
Then from Point in Closure of Subset of Metric Space iff Limit of Sequence, we have: 

there exists a sequence $\sequence {a_n}_{n \mathop \in \N}$ in $A$ such that $a_n \to a$.
Since $A$ is symmetric, we have: 

$-a_n \in A$ for each $n \in \N$.
We also have, from Multiple Rule for Sequences in Normed Vector Space:

$-a_n \to -a$
So we have: 

$-a \in A^-$
$\blacksquare$





