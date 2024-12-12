# 

Source: https://proofwiki.org/wiki/G-Tower_is_Properly_Well-Ordered_under_Subset_Relation

Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Then $M$ is properly well-ordered under the subset relation.


Proof
From $g$-Tower is Well-Ordered under Subset Relation, $\subseteq$ is a well-ordering on $M$.
Let $L$ be a proper lower section of $M$.
From Proper Lower Section under Well-Ordering is Initial Segment, $L$ is an initial segment $x^\subset$ of $M$ for some $x \in M$.
By the definition of the structure of a $g$-tower, each element of $x$ is a subset of $x$.
Hence:

$x^\subset \subseteq \powerset x$
From the Axiom of Powers, $\powerset x$ is a set.
Hence from Subclass of Set is Set, $x^\subset$ is also a set.
The result follows from the definition of properly well-ordered.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries: Proposition $1.3$




