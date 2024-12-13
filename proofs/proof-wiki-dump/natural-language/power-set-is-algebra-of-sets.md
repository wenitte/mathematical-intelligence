# 

Source: https://proofwiki.org/wiki/Power_Set_is_Algebra_of_Sets

Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then $\powerset S$ is an algebra of sets where $S$ is the unit.


Proof
From Power Set is Closed under Intersection and Power Set is Closed under Symmetric Difference, we have that:

$(1): \quad \forall A, B \in \powerset S: A \cap B \in \powerset S$
$(2): \quad \forall A, B \in \powerset S: A * B \in \powerset S$
From the definition of power set:

$\forall A \in \powerset S: A \subseteq S$
and so $S$ is the unit of $\powerset S$.
Thus we see that $\powerset S$ is a ring of sets with a unit.
Hence the result, by definition of an algebra of sets.
$\blacksquare$





