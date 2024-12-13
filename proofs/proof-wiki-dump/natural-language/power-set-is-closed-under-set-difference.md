# 

Source: https://proofwiki.org/wiki/Power_Set_is_Closed_under_Set_Difference



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then:

$\forall A, B \in \powerset S: A \setminus B \in \powerset S$
where $A \setminus B$ denotes the set difference of $A$ and $B$.


Proof
Let $A, B \in \powerset S$.
Then by the definition of power set, $A \subseteq S$ and $B \subseteq S$.
We also have $A \setminus B \subseteq A$ from Set Difference is Subset.
Thus by Subset Relation is Transitive, $A \setminus B \subseteq S$.
Thus $A \setminus B \in \powerset S$, and closure is proved.
$\blacksquare$


Also see
Power Set is Closed under Intersection
Power Set is Closed under Union


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.1$. Binary operations on a set: Example $60$




