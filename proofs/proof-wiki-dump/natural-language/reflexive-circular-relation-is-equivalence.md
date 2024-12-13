# 

Source: https://proofwiki.org/wiki/Reflexive_Circular_Relation_is_Equivalence



Theorem
Let $\RR \subseteq S \times S$ be a reflexive and circular relation in $S$.

Then $\RR$ is an equivalence relation.


Proof
To prove a relation is an equivalence, we need to prove it is reflexive, symmetric and transitive.
So, checking in turn each of the criteria for equivalence:


Reflexive
We have by hypothesis that $\RR$ is reflexive.
$\Box$


Symmetric
By reflexivity:

$\tuple {x, x} \in \RR$

If $\tuple {x, y} \in \RR$ then by the definition of circular relation $\tuple {y, x} \in \RR$.

Hence $\RR$ is symmetric.
$\Box$


Transitive
Let $\tuple {x, y}, \tuple {y, z} \in \RR$.
By definition of circular relation:

$\tuple {z, x} \in \RR$
By $\RR$ being symmetric:

$\tuple {x, z} \in \RR$

Hence $\RR$ is transitive.
$\Box$

Thus is $\RR$ is reflexive, symmetric and transitive, and therefore by definition an equivalence.
$\blacksquare$


Sources
1967: Saunders Mac Lane and Garrett Birkhoff: Algebra: $\S 1.3$ Exercise $2$




