# 

Source: https://proofwiki.org/wiki/Independent_Subset_is_Contained_in_Base

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ denote the set of all bases of $M$.
Let $A \in \mathscr I$.

Then:

$\exists B \in \mathscr B : A \subseteq B$


Proof
Consider the ordered set $\struct {\mathscr I, \subseteq}$.
From Element of Finite Ordered Set is Between Maximal and Minimal Elements:

$\exists B \in \mathscr I : A \subseteq B$ and $B$ is maximal in $\struct {\mathscr I, \subseteq}$.
By definition of a base:

$B \in \mathscr B$
$\blacksquare$





