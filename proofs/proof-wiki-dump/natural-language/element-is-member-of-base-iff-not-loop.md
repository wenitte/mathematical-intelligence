# 

Source: https://proofwiki.org/wiki/Element_is_Member_of_Base_iff_Not_Loop



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $\mathscr B$ denote the set of all bases of $M$.
Let $x \in S$.

Then:

$\exists B \in \mathscr B: x \in B$ if and only if $x$ is not a loop


Proof
Necessary Condition
Let $B \in \mathscr B$ such that $x \in B$.

From Singleton of Element is Subset:

$\set x \subseteq B$
By definition of a base:

$B \in \mathscr I$
From matroid axiom $(\text I 2)$:

$\set x \in \mathscr I$

Then $\set x$ is not a dependent subset by definition.
It follows that $x$ is not a loop by definition.
$\Box$


Sufficient Condition
Let $x$ not be a loop.
By definition of a loop:

$x$ is not a dependent subset
By definition of a dependent subset:

$x \in \mathscr I$
From Independent Subset is Contained in Base:

$\exists B \in \mathscr B: \set x \subseteq B$
By definition of a subset:

$x \in B$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




