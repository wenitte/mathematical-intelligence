# 

Source: https://proofwiki.org/wiki/Ordinal_Membership_is_Trichotomy



Theorem
Let $\alpha$ and $\beta$ be ordinals.

Then:

$\paren {\alpha = \beta} \lor \paren {\alpha \in \beta} \lor \paren {\beta \in \alpha}$
where $\lor$ denotes logical or.


Corollary
Let $\alpha$ be an ordinal.
Let $x, y \in \alpha$ such that $x \ne y$.
Then either:

$x \in y$
or:

$y \in x$


Proof 1
From Class of All Ordinals is Well-Ordered by Subset Relation, $\On$ is a nest.
Hence:

$\forall \alpha, \beta \in \On: \paren {\alpha \subsetneqq \beta} \lor \paren {\beta \subsetneqq \alpha} \lor \paren {\alpha = \beta}$

From Transitive Set is Proper Subset of Ordinal iff Element of Ordinal, this is equivalent to:

$\forall \alpha, \beta \in \On: \paren {\alpha \in \beta} \lor \paren {\beta \in \alpha} \lor \paren {\alpha = \beta}$

Hence the result.
$\blacksquare$


Proof 2
By Relation between Two Ordinals, it follows that:

$\paren {\alpha = \beta} \lor \paren {\alpha \subset \beta} \lor \paren {\beta \subset \alpha}$
By Transitive Set is Proper Subset of Ordinal iff Element of Ordinal, the result follows.
$\blacksquare$





