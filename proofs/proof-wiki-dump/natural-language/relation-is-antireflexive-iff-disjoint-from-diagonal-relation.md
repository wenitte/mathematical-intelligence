# 

Source: https://proofwiki.org/wiki/Relation_is_Antireflexive_iff_Disjoint_from_Diagonal_Relation



Theorem
Let $\RR \subseteq S \times S$ be a relation on a set $S$.
Then:

$\RR$ is antireflexive
if and only if

$\Delta_S \cap \RR = \O$
where $\Delta_S$ is the diagonal relation.


Proof
Necessary Condition
Let $\RR$ be an antireflexive relation.
Let $\tuple {x, y} \in \Delta_S \cap \RR$.
By definition:

$\tuple {x, y} \in \Delta_S \implies x = y$
Likewise, by definition:

$\tuple {x, y} \in \RR \implies x \ne y$.
Thus:

$\Delta_S \cap \RR = \set {\tuple {x, y}: x = y \land x \ne y}$
and so:

$\Delta_S \cap \RR = \O$
$\Box$


Sufficient Condition
Let $\Delta_S \cap \RR = \O$.
Then by definition:

$\forall \tuple {x, y} \in \RR: \tuple {x, y} \notin \Delta_S$
Thus:

$\not \exists \tuple {x, y} \in \RR: x = y$
Thus by definition, $\RR$ is antireflexive.
$\blacksquare$





