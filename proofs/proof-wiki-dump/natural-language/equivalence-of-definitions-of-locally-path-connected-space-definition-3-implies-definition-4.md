# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Path-Connected_Space/Definition_3_implies_Definition_4

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T$ have a basis consisting of path-connected sets in $T$.

Then

the path components of open sets of $T$ are also open in $T$.


Proof
Let $U$ be an open subset of $T$.
From Open Set is Union of Elements of Basis, $U$ is a union of open path-connected sets in $T$.
From Open Set in Open Subspace and Path-Connected Set in Subspace, $U$ is a union of open path-connected sets in $U$.
From Path Components are Open iff Union of Open Path-Connected Sets, the path components of $U$ are open in $U$.
From Open Set in Open Subspace then the path components of $U$ are open in $T$.
$\blacksquare$





