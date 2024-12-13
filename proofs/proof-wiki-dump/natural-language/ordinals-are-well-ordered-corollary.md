# 

Source: https://proofwiki.org/wiki/Ordinals_are_Well-Ordered/Corollary

Theorem
Let $A$ be a set of ordinals.
Let $\Epsilon {\restriction_A}$ denote the epsilon restriction on $A$.

Then $A$ is strictly well-ordered by $\Epsilon {\restriction_A}$.


Proof
Let $A$ be a set of ordinals.
Let $\Epsilon {\restriction_A}$ denote the epsilon restriction on $A$.

It is to be shown that $\Epsilon {\restriction_A}$ is antireflexive.
Suppose there is a $a \in A$ such that $a \in a$.
Then by ordinal is element of ordinal iff proper subset of ordinal, we have $a \subsetneq a$.
And so:

$\exists x \in a: x \notin a$

But this is a contradiction, so $\Epsilon {\restriction_A}$ must be antireflexive.
By Strict Subset Relation is Transitive, it follows that $\Epsilon {\restriction_A}$ is transitive.

By Ordinals are Well-Ordered, it follows that for any non-empty subset $B \subseteq A$ there is a smallest element $x \in B$ such that:

$\forall y \in B: x \in y \lor x = y$

It has been shown that $\Epsilon {\restriction_A}$ is a strict ordering such that every non-empty subset of $A$ has a smallest element.
Hence the result.
$\blacksquare$





