# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Relation_Compatible_with_Group_Operation_is_Compatible/Proof_1

Theorem
Let $\struct {S, \circ}$ be a group.
Let $\RR$ be a relation on $S$ which is compatible with $\circ$.
Let $\RR^\ne$ be the reflexive reduction of $\RR$.

Then $\RR^\ne$ is compatible with $\circ$.


Proof
By definition of reflexive reduction, for all $a, b \in S$:

$a \mathrel {\RR^\ne} b$ if and only if $a \mathrel \RR b$ but $a \ne b$.
By definition of the diagonal relation $\Delta_S$:

$a \ne b$ if and only if $\tuple {a, b} \notin \Delta_S$
Thus, considered as subsets of $S \times S$, we have:

$\RR^\ne = \RR \setminus \Delta_S$

By Diagonal Relation is Universally Compatible, $\Delta_S$ is compatible with $\circ$.

Thus by Set Difference of Relations Compatible with Group Operation is Compatible, $\RR^\ne$ is compatible with $\circ$.
$\blacksquare$





