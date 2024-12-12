# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Path-Connected_Space/Definition_4_implies_Definition_3

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let the path components of open sets of $T$ be also open in $T$.

Then

$T$ has a basis consisting of path-connected sets in $T$.


Proof
Let $\BB = \set {U \in \tau : U \text{ is path-connected in } T}$.
Let $U$ be open in $T$.
By assumption, the path components of $U$ are open in $T$.
From Path-Connected Set in Subspace, the path components of $U$ are path-connected in $T$.
By the definition of the path components of a topological space, $U$ is the union of its path components.
Hence $U$ is the union of open path-connected sets in $T$.
By definition, $\BB$ is an basis for $T$.
$\blacksquare$





