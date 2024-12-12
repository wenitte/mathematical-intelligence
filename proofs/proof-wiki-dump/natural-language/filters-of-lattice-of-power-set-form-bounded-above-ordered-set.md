# 

Source: https://proofwiki.org/wiki/Filters_of_Lattice_of_Power_Set_form_Bounded_Above_Ordered_Set

Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \subseteq}$ be an inclusion lattice of power set of $X$.
Let $F = \struct {\map {\operatorname{Filt} } L, \subseteq}$ be an inclusion ordered set,
where $\map {\operatorname{Filt} } L$ denotes the set of all filters on $L$.

Then $F$ is bounded above and $\top_F = \powerset X$
where $\top_F$ denotes the greatest element of $F$.


Proof
By Power Set is Filter in Lattice of Power Set:

$\powerset X$ is a filter on $L$.
Let $A \in \map {\operatorname{Filt} } L$.
Thus by definition of filter:

$A \subseteq \powerset X$
Thus by definitions:

$F$ is bounded above and $\top_F = \powerset X$
$\blacksquare$


Sources
Mizar article WAYBEL16:13
Mizar article WAYBEL16:15




