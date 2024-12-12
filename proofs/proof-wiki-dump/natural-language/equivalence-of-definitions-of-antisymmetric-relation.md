# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Antisymmetric_Relation



Theorem
The following definitions of the concept of Antisymmetric Relation are equivalent:

Definition 1
$\RR$ is antisymmetric if and only if:

$\tuple {x, y} \in \RR \land \tuple {y, x} \in \RR \implies x = y$
that is:

$\set {\tuple {x, y}, \tuple {y, x} } \subseteq \RR \implies x = y$
Definition 2
$\RR$ is antisymmetric if and only if:

$\tuple {x, y} \in \RR \land x \ne y \implies \tuple {y, x} \notin \RR$


Proof
Definition 1 implies Definition 2
Let $\RR$ be a relation which fulfils the condition:

$\tuple {x, y} \in \RR \land \tuple {y, x} \in \RR \implies x = y$

Let $\tuple {x, y} \in \RR$ such that $x \ne y$.
Aiming for a contradiction, suppose that $\tuple {y, x} \in \RR$.
Then $\tuple {x, y} \in \RR \land \tuple {y, x} \in \RR$.
This implies by hypothesis that $x = y$.
From this contradiction it is concluded that $\tuple {y, x} \notin \RR$.

It follows that the condition:

$\tuple {x, y} \in \RR \land x \ne y \implies \tuple {y, x} \notin \RR$
holds for $\RR$.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the condition:

$\tuple {x, y} \in \RR \land x \ne y \implies \tuple {y, x} \notin \RR$

Let $\tuple {x, y} \in \RR$ such that $\tuple {y, x} \in \RR$ also.
Aiming for a contradiction, suppose that $x \ne y$.
This implies by hypothesis that $\tuple {y, x} \notin \RR$.
From this contradiction it is concluded that $\tuple {y, x} \notin \RR$.

It follows that the condition:

$\tuple {x, y} \in \RR \land \tuple {y, x} \in \RR \implies x = y$
holds for $\RR$.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: Exercise $1 \ \text{(a)}$




