# 

Source: https://proofwiki.org/wiki/Power_Set_with_Union_and_Superset_Relation_is_Ordered_Semigroup

Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Let $\struct {\powerset S, \cup, \supseteq}$ be the ordered structure formed from the set union operation and superset relation.

Then $\struct {\powerset S, \cup, \supseteq}$ is an ordered semigroup.


Proof
From Power Set with Union is Commutative Monoid, $\struct {\powerset S, \cup}$ is a fortiori a semigroup.
From Subset Relation is Ordering, $\struct {\powerset S, \subseteq}$ is an ordered set.
We have that $\supseteq$ is the dual to $\subseteq$.
Hence $\struct {\powerset S, \supseteq}$ is an ordered set.
It remains to be shown that $\supseteq$ is compatible with $\cup$.

Let $A, B \subseteq S$ be arbitrary such that $A \supseteq B$.
Thus:














\(\ds A\)

\(\supseteq\)







\(\ds B\)














\(\ds \leadsto \ \ \)

\(\ds \forall T \subseteq S: \, \)



\(\ds A \cup T\)

\(\supseteq\)







\(\ds B \cup T\)





Set Union Preserves Subsets: Corollary








\(\ds \leadsto \ \ \)

\(\ds \forall T \subseteq S: \, \)



\(\ds T \cup A\)

\(\supseteq\)







\(\ds T \cup B\)





Union is Commutative



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.8$




