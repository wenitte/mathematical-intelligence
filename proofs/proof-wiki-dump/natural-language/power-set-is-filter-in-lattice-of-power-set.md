# 

Source: https://proofwiki.org/wiki/Power_Set_is_Filter_in_Lattice_of_Power_Set



Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \subseteq}$ be a inclusion lattice of power set of $X$.

Then $\powerset X$ is a filter on $L$.


Proof
Filtered
By Set is Element of its Power Set:

$X \in \powerset X$
Thus by definition:

$\powerset X$ is a non-empty set.
Let $x, y \in \powerset X$.
By Intersection is Subset:

$x \cap y \subseteq x$ and $x \cap y \subseteq y$
By Subset Relation is Transitive:

$x \cap y \in \powerset X$
Thus

$\exists z \in \powerset X: z \subseteq x \land z \subseteq y$
$\Box$


Upper
Thus we have:

$\forall x, y \in \powerset X: x \subseteq y \implies y \in \powerset X$
$\Box$
Thus by definition of filter in ordered set:

$\powerset X$ is a filter on $L$.
$\blacksquare$


Sources
Mizar article WAYBEL16:11




