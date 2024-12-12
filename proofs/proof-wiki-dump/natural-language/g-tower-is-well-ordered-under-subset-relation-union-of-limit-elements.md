# 

Source: https://proofwiki.org/wiki/G-Tower_is_Well-Ordered_under_Subset_Relation/Union_of_Limit_Elements

Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x \in M$ be a limit element of $M$.
Then:

$x = \bigcup x^\subset$
where $\bigcup x^\subset$ denotes the union of the lower section of $x$.


Proof
We have that $g$-Tower is Well-Ordered under Subset Relation.
Let $x \in M$ be a limit element of $M$.
Then by definition $x$ is not an immediate successor element.
Hence by $g$-Tower is Well-Ordered under Subset Relation: Successor of Non-Greatest Element:

there exists no $y \in M$ such that $x = \map g y$
otherwise $x$ would be the immediate successor of $y$.
Hence there is no $y \in x^\subset$ such that $x = \map g y$.
Thus condition $(\text C 1)$ of $g$-Tower is Well-Ordered under Subset Relation: Corollary does not hold.
Hence condition $(\text C 2)$ of $g$-Tower is Well-Ordered under Subset Relation: Corollary does hold.
That is:

$\bigcup x^\subset = x$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 3$ The well ordering of $g$-towers: Theorem $3.3 \ (3)$




