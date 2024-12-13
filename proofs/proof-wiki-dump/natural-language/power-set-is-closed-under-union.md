# 

Source: https://proofwiki.org/wiki/Power_Set_is_Closed_under_Union



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then:

$\forall A, B \in \powerset S: A \cup B \in \powerset S$


Proof
Let $A, B \in \powerset S$.
Then by the definition of power set, $A \subseteq S$ and $B \subseteq S$.
We also have $A \cup B \subseteq S \iff A \subseteq S \land B \subseteq S$ from Union is Smallest Superset.
Thus $A \cup B \in \powerset S$, and closure is proved.
$\blacksquare$


Also see
Power Set is Closed under Intersection
Power Set is Closed under Set Difference


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.1$. Binary operations on a set: Example $60$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): algebra of sets




