# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Connected_Space/Definition_4_implies_Definition_3

Theorem
Let $T = \struct {S, \tau}$ be a topological space. 
Let the components of the open sets of $T$ are also open in $T$.

Then

$T$ has a basis consisting of connected sets in $T$.


Proof
Let $\BB = \set {U \in \tau : U \text{ is connected in } T}$.
Let $U$ be open in $T$.
By assumption, the components of $U$ are open in $T$.
From Connected Set in Subspace, the components of $U$ are connected in $T$.
By the definition of the components of a topological space, $U$ is the union of its components.
Hence $U$ is the union of open connected sets in $T$.
By definition, $\BB$ is an basis for $T$.
$\blacksquare$





