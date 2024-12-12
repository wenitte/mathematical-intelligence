# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Connected_Space/Definition_1_implies_Definition_3

Theorem
Let $T = \struct{S, \tau}$ be a topological space. 
Let each point $x$ of $T$ have a local basis $\DD_x$ consisting entirely of connected sets in $T$.

Then

$T$ has a basis consisting of connected sets in $T$.


Proof
By definition of local basis, each of these connected sets in $\DD_x$ is open in $T$.
Consider the set $\ds \DD = \bigcup_{x \mathop \in S} \DD_x$.
From Union of Local Bases is Basis, $\DD$ is a basis for the topology $\tau$.
Since each $\DD_x$ consists entirely of connected sets, $\DD$ also consists entirely of connected sets.
$\blacksquare$





