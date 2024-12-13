# 

Source: https://proofwiki.org/wiki/Power_Set_less_Empty_Set_has_no_Smallest_Element_iff_not_Singleton



Theorem
Let $S$ be a set which is non-empty.
Let $\CC = \powerset S \setminus \O$, that is, the power set of $S$ without the empty set.

Then the ordered structure $\struct {\CC, \subseteq}$ has no smallest element if and only if $S$ is not a singleton.


Proof
Necessary Condition
Let $S$ not be a singleton.
Then $\exists x, y \in S: x \ne y$.

Let $Z \in \CC$ be the smallest element of $\CC$.
Then:

$\forall T \in \CC: Z \subseteq T$
But by Singleton of Power Set less Empty Set is Minimal Subset, both $\set x$ and $\set y$ are minimal elements of $\struct {\CC, \subseteq}$.
Therefore it cannot be the case that $Z \subseteq \set x$ and $Z \subseteq \set y$.
Therefore $\struct {\CC, \subseteq}$ has no smallest element.
$\Box$


Sufficient Condition
Let the ordered structure $\struct {\CC, \subseteq}$ has no smallest element.
Aiming for a contradiction, suppose $S$ is a singleton.
Let $S = \set x$.
Then:

$\CC = \set {\set x}$
Then:

$\forall y \in \CC: y \subseteq \set x$
trivially.
Thus $\struct {\CC, \subseteq}$ has a smallest element which is $\set x$.
By Proof by Contradiction it follows that $S$ is not a singleton.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




