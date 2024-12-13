# 

Source: https://proofwiki.org/wiki/Null_Relation_is_Antireflexive,_Symmetric_and_Transitive



Theorem
Let $S$ be a set which is non-empty.
Let $\RR \subseteq S \times S$ be the null relation.

Then $\RR$ is antireflexive, symmetric and transitive.

If $S = \O$ then Relation on Empty Set is Equivalence applies.


Proof
From the definition of null relation:

$\RR = \O$


Antireflexivity
This follows directly from the definition:

$\RR = \O \implies \forall x \in S: \tuple {x, x} \notin \RR$
and so $\RR$ is antireflexive.
$\Box$


Symmetry
It follows vacuously that:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \in \RR$
and so $\RR$ is symmetric.
$\Box$


Transitivity
It follows vacuously that:

$\tuple {x, y}, \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$
and so $\RR$ is transitive.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $1$: Mathematical Models: $\S 1.3$: Graphs: Problem $24$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations: Problem Set $\text{A}.2$: $11$




