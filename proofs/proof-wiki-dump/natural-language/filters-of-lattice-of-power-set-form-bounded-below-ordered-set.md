# 

Source: https://proofwiki.org/wiki/Filters_of_Lattice_of_Power_Set_form_Bounded_Below_Ordered_Set

Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \subseteq}$ be an inclusion lattice of power set of $X$.
Let $F = \struct {\map {\operatorname {Filt} } L, \subseteq}$ be an inclusion ordered set,
where $\map {\operatorname {Filt} } L$ denotes the set of all filters on $L$.

Then $F$ is bounded below and $\bot_F = \set X$
where $\bot_F$ denotes the smallest element of $F$.


Proof
By Singleton of Set is Filter in Lattice of Power Set:

$\set X$ is a filter on $L$.
Let $A \in \map {\operatorname {Filt} } L$.
By definition of non-empty set:

$\exists x: x \in A$
By definition of power set:

$x \subseteq X$
By definition of upper section:

$X \in A$
Thus by definitions of singleton and subset:

$\set X \subseteq A$
Thus by definitions:

$F$ is bounded below and $\bot_F = \set X$
$\blacksquare$


Sources
Mizar article WAYBEL16:14
Mizar article WAYBEL16:16




