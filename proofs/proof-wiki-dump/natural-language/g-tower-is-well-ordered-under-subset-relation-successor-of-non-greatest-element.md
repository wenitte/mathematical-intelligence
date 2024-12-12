# 

Source: https://proofwiki.org/wiki/G-Tower_is_Well-Ordered_under_Subset_Relation/Successor_of_Non-Greatest_Element

Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x \in M$ such that $x$ is not the greatest element of $M$.
Then the immediate successor of $x$ is $\map g x$.


Proof
We have that $g$-Tower is Well-Ordered under Subset Relation.
Let $x \in M$ such that $x$ is not the greatest element of $M$.
Then from Fixed Point of $g$-Tower is Greatest Element:

$x \ne \map g x$
Hence:

$x \subsetneqq \map g x$
Hence by the Sandwich Principle for $g$-Towers, there is no $y \in M$ such that:

$x \subsetneqq y \subsetneqq \map g x$
Hence $\map g x$ is the immediate successor of $x$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 3$ The well ordering of $g$-towers: Theorem $3.3 \ (2)$




