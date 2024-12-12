# 

Source: https://proofwiki.org/wiki/Complement_of_Symmetric_Relation

Theorem
Let $\RR \subseteq S \times S$ be a relation.
Then $\RR$ is symmetric if and only if its complement $\relcomp {S \times S} \RR \subseteq S \times S$ is also symmetric.


Proof
Let $\RR \subseteq S \times S$ be symmetric.
Then from Symmetry of Relations is Symmetric:

$\tuple {x, y} \in \RR \iff \tuple {y, x} \in \RR$

Aiming for a contradiction, suppose $\relcomp {S \times S} \RR \subseteq S \times S$ is not symmetric.
Then:

$\exists \tuple {x, y} \in \relcomp {S \times S} \RR: \tuple {y, x} \notin \relcomp {S \times S} \RR$
But then by definition of complement of $\RR$:

$\tuple {y, x} \in \RR$
As $\RR$ is symmetric it follows that:

$\tuple {x, y} \in \RR$
This contradicts the premise that $\tuple {x, y} \in \relcomp {S \times S} \RR$.
Hence by Proof by Contradiction it follows that $\relcomp {S \times S} \RR$ is symmetric.
$\blacksquare$

The converse follows similarly.





