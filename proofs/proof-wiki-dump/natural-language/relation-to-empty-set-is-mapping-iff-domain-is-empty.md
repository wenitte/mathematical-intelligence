# 

Source: https://proofwiki.org/wiki/Relation_to_Empty_Set_is_Mapping_iff_Domain_is_Empty

Theorem
Let $S$ be a set
Let $S \times \O$ denote the cartesian product of $S$ with the empty set $\O$.
Let $\RR \subseteq S \times \O$ be a relation in $S$ to $\O$.

Then $\RR$ is a mapping if and only if $S = \O$.


Proof
Let $S \ne \O$.
Then $\exists s \in S$.
But there exists no $t \in \O$.
Hence there is no $\tuple {s, t} \in \RR$.
So $\RR$ is not a mapping by definition.

Let $S = \O$.
Then $\RR$ is the empty mapping by definition.
From Empty Mapping is Mapping, it is demonstrated that $\RR$ is indeed a mapping.

Hence the result.
$\blacksquare$





