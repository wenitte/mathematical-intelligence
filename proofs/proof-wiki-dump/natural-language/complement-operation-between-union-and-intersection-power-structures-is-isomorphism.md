# 

Source: https://proofwiki.org/wiki/Complement_Operation_between_Union_and_Intersection_Power_Structures_is_Isomorphism

Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Let $\struct {\powerset S, \cap, \subseteq}$ be the ordered semigroup formed from the set intersection operation and subset relation.
Let $\struct {\powerset S, \cap, \supseteq}$ be the ordered semigroup formed from the set intersection operation and superset relation.
Let $\struct {\powerset S, \cup, \subseteq}$ be the ordered semigroup formed from the set union operation and subset relation.
Let $\struct {\powerset S, \cup, \supseteq}$ be the ordered semigroup formed from the set union operation and superset relation.

Let $\complement: \powerset S \to \powerset S$ be the complement operation on $\powerset S$:

$\forall X \in \powerset S: \map \complement X = S \setminus X$
where $S \setminus X$ denotes the set difference of $X$ with $S$.

Then $\complement$ is an ordered semigroup isomorphism from:

$\struct {\powerset S, \cap, \subseteq}$ to $\struct {\powerset S, \cup, \supseteq}$
and:

$\struct {\powerset S, \cap, \supseteq}$ to $\struct {\powerset S, \cup, \subseteq}$


Proof
From:

Power Set with Intersection and Subset Relation is Ordered Semigroup
Power Set with Intersection and Superset Relation is Ordered Semigroup
Power Set with Union and Subset Relation is Ordered Semigroup
Power Set with Union and Superset Relation is Ordered Semigroup
each of the given ordered structures is indeed an ordered semigroup.
From Relative Complement Mapping on Powerset is Bijection, $\complement$ is a bijection.
From Relative Complement of Relative Complement it follows that $\complement$ is an involution.
From De Morgan's Laws for Relative Complements:

$\map \complement {T_1 \cap T_2} = \map \complement {T_1} \cup \map \complement {T_2}$
and:

$\map \complement {T_1 \cup T_2} = \map \complement {T_1} \cap \map \complement {T_2}$
hence demonstrating that $\complement$ exhibits the morphism property from both $\struct {\powerset S, \cap}$ to $\struct {\powerset S, \cup}$ and back again.
Then from Relative Complement inverts Subsets we have that $\complement$ is an order isomorphism between $\struct {\powerset S, \subseteq}$ and $\struct {\powerset S, \supseteq}$ in both directions.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.8$




