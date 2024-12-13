# 

Source: https://proofwiki.org/wiki/Power_Set_with_Intersection_and_Subset_Relation_is_Ordered_Semigroup

Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Let $\struct {\powerset S, \cap, \subseteq}$ be the ordered structure formed from the set intersection operation and subset relation.

Then $\struct {\powerset S, \cap, \subseteq}$ is an ordered semigroup.


Proof
From Power Set with Intersection is Commutative Monoid, $\struct {\powerset S, \cap}$ is a fortiori a semigroup.
From Subset Relation is Ordering, $\struct {\powerset S, \subseteq}$ is an ordered set.

It remains to be shown that $\subseteq$ is compatible with $\cap$.

Let $A, B \subseteq S$ be arbitrary such that $A \subseteq B$.
Thus:














\(\ds A\)

\(\subseteq\)







\(\ds B\)














\(\ds \leadsto \ \ \)

\(\ds \forall T \subseteq S: \, \)



\(\ds A \cap T\)

\(\subseteq\)







\(\ds B \cap T\)





Set Intersection Preserves Subsets: Corollary








\(\ds \leadsto \ \ \)

\(\ds \forall T \subseteq S: \, \)



\(\ds T \cap A\)

\(\subseteq\)







\(\ds T \cap B\)





Intersection is Commutative



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.8$




