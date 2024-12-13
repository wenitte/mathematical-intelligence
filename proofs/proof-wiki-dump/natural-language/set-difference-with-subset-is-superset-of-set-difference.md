# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Subset_is_Superset_of_Set_Difference

Theorem
Let $A, B, S$ be sets or classes.
Suppose that $A \subseteq B$.

Then:

$S \setminus B \subseteq S \setminus A$
where $\setminus$ represents set difference.


Proof
Let $x \in S \setminus B$.
Then by definition of set difference:

$x \in S$ and $x \notin B$
Aiming for a contradiction, suppose $x \in A$.
Then since $A$ is a subset (or subclass) of $B$, $x \in B$, a contradiction.
Thus $x \notin A$.
Since $x \in S$ and $x \notin A$, we conclude that $x \in S \setminus A$.
As this holds for all $x \in S \setminus B$:

$S \setminus B \subseteq S \setminus A$
$\blacksquare$





