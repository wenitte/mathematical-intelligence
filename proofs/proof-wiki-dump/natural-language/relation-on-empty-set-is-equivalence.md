# 

Source: https://proofwiki.org/wiki/Relation_on_Empty_Set_is_Equivalence



Theorem
Let $S = \O$, that is, the empty set.
Let $\RR \subseteq S \times S$ be a relation on $S$.

Then $\RR$ is the null relation and is an equivalence relation.


Proof
As $S = \O$, we have from Cartesian Product is Empty iff Factor is Empty that $S \times S = \O$.
Then it follows that $\RR \subseteq S \times S = \O$.


Reflexivity
From the definition:

$\RR = \O \implies \forall x \in S: \tuple {x, x} \notin \RR$
But as $\neg \, \exists x \in S$ it follows vacuously that $\RR$ is reflexive.
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
$\Box$
It follows from the definition that $\RR$ is an equivalence relation.
$\blacksquare$





