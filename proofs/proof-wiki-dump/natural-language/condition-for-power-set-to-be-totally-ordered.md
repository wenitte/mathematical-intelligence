# 

Source: https://proofwiki.org/wiki/Condition_for_Power_Set_to_be_Totally_Ordered

Theorem
Let $\powerset S$ be the power set of a set $S$.
Let $\struct {\powerset S, \subseteq}$ be the set $\powerset S$ ordered by $\subseteq$.

Then $\struct {\powerset S, \subseteq}$ is totally ordered if and only if $S$ is either the empty set or a singleton.


Proof
From Subset Relation on Power Set is Partial Ordering we have that $\struct {\powerset S, \subseteq}$ is an ordered set.
We now need to show that $\struct {\powerset S, \subseteq}$ is a totally ordered set exactly when $S = \O$ or $S$ has exactly one element.

When $S = \O$ then $\powerset S = \set \O$ and it follows trivially that $\struct {\powerset S, \subseteq}$ is totally ordered.
$\Box$

Let $S = \set x$.
Then $\powerset S = \set {\O, \set x}$.
From Empty Set is Subset of All Sets we have $\O \subseteq \set x$.
Again it follows by definition that $\struct {\powerset S, \subseteq}$ is totally ordered.
$\Box$

Now suppose $S$ is neither the empty set nor a singleton.
Then:

$\exists x, y \in S: x \ne y$
and so:

$\exists \set x, \set y \in \powerset S: \set x \ne \set y$
But further, $\set x \nsubseteq \set y$ and $\set y \nsubseteq \set x$.
That is, $\set x$ and $\set y$ are non-comparable by $\subseteq$.
Thus, by definition, $\struct {\powerset S, \subseteq}$ is not totally ordered.
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Exercise $5$




