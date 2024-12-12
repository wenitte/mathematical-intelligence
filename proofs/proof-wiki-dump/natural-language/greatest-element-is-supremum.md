# 

Source: https://proofwiki.org/wiki/Greatest_Element_is_Supremum



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.
Let $T$ have a greatest element $M$.

Then $M$ is the supremum of $T$ in $S$.


Proof
Let $M$ be the greatest element of $T$.
Then by definition:

$\forall x \in T: x \preceq M$
By definition of supremum, it is necessary to show that:

$(1): \quad M$ is an upper bound of $T$ in $S$
$(2): \quad M \preceq U$ for all upper bounds $U$ of $T$ in $S$.

By Greatest Element is Upper Bound, $M$ is an upper bound of $T$ in $S$.
It remains to be shown that:

$M \preceq U$ for all upper bounds $U$ of $T$ in $S$.

Let $U \in S$ be an upper bound of $T$ in $S$.
By definition of upper bound:

$\forall t \in T: t \preceq U$
We have that $M \in T$.
Therefore:

$M \preceq U$
Hence the result.
$\blacksquare$


Examples
Arbitrary Example $1$
Let $S$ be the subset of the real numbers $\R$ defined as:

$S = \set {1, 2, 3}$
Then the greatest element of $S$ is $3$.
From Greatest Element is Supremum it follows that:

$\sup S = 3$


Arbitrary Example $2$
Let $V$ be the subset of the real numbers $\R$ defined as:

$V := \set {x \in \R: x > 0}$
From Supremum of Subset of Real Numbers: Example 3, $V$ has no supremum.
It follows from Greatest Element is Supremum that $V$ has no greatest element either.


Also see
Smallest Element is Infimum


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.7$: Maximum and Minimum




