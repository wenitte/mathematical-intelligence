# 

Source: https://proofwiki.org/wiki/G-Tower_is_G-Ordered

Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.

Let $M$ be a $g$-tower.
Then $M$ is $g$-ordered.


Proof
Recall the definition of a $g$-ordered class:
$M$ is a $g$-ordered class if and only if $M$ is well-ordered by the subset relation such that:




\((1)\)  

$:$  













the smallest element of $M$ is $\O$   

  


\((2)\)  

$:$  













every immediate successor $y$ is $\map g x$, where $x$ is the immediate predecessor of $y$   

  


\((3)\)  

$:$  













every limit element $x$ of $M$ is the union of the set of all predecessor elements of $x$   

  


So, let $M$ be a $g$-tower.

From $g$-Tower is Well-Ordered under Subset Relation:

$M$ is well-ordered under the subset relation.

From $g$-Tower is Well-Ordered under Subset Relation: Empty Set:

$\O$ is the smallest element of $M$.

From $g$-Tower is Well-Ordered under Subset Relation: Successor of Non-Greatest Element:

Let $x \in M$ such that $x$ is not the greatest element of $M$.
Then the immediate successor of $x$ is $\map g x$.

From $g$-Tower is Well-Ordered under Subset Relation: Union of Limit Elements:

Let $x \in M$ be a limit element of $M$.
Then:
$x = \bigcup x^\subset$
where $\bigcup x^\subset$ denotes the union of the lower section of $x$.

The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 8$ Another characterization of $g$-sets




