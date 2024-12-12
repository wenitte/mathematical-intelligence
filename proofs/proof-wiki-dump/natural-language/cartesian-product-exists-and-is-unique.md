# 

Source: https://proofwiki.org/wiki/Cartesian_Product_Exists_and_is_Unique

Theorem
Let $A$ and $B$ be classes.
Let $A \times B$ be the cartesian product of $A$ and $B$.

Then $A \times B$ exists and is unique.


Proof
Let $A \times B$ be the cartesian product of $A$ and $B$.
Let $\tuple {x, y} \in A \times B$ such that $\tuple {x, y}$ satisfies the Kuratowski ordered pair formulation.
By Binary Cartesian Product in Kuratowski Formalization contained in Power Set of Power Set of Union:

$A \times B \subseteq \powerset {\powerset {A \cup B} }$
By Axiom of Specification, there exists a set:

$C = \set {\tuple {x, y} \in \powerset {\powerset {A \cup B} }: x \in A \land y \in B}$
By definition, $C$ is the cartesian product of $A$ and $B$.
Thus $A \times B$ exists.
By Cartesian Product is Unique, $A \times B$ is unique.
$\blacksquare$


Sources
2002: Thomas Jech: Set Theory (3rd ed.) ... (previous) ... (next): Chapter $1$: Power Set
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 7$ Cartesian products




