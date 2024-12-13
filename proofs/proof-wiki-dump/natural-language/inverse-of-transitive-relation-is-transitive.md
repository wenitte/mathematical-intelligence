# 

Source: https://proofwiki.org/wiki/Inverse_of_Transitive_Relation_is_Transitive



Theorem
Let $\RR$ be a relation on a set $S$.
Let $\RR$ be transitive.

Then its inverse $\RR^{-1}$ is also transitive.


Proof 1
Let $\RR$ be transitive.
Then:

$\tuple {x, y}, \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$
Thus:

$\tuple {y, x}, \tuple {z, y} \in \RR^{-1} \implies \tuple {z, x} \in \RR^{-1}$
and so $\RR^{-1}$ is transitive.
$\blacksquare$


Proof 2
Let $\RR$ be transitive.
Thus by definition:

$\RR \circ \RR \subseteq \RR$
Thus:














\(\ds \RR^{-1} \circ \RR^{-1}\)

\(=\)







\(\ds \paren {\RR \circ \RR}^{-1}\)





Inverse of Composite Relation














\(\ds \)

\(\subseteq\)







\(\ds \RR^{-1}\)





Inverse of Subset of Relation is Subset of Inverse



$\blacksquare$
Hence the result by definition of transitive relation.


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.19$: Some Important Properties of Relations: Exercise $7$




