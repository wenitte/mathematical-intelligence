# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Connected_Space/Definition_3_implies_Definition_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space. 
Let $T$ have a basis $\BB$ consisting of connected sets in $T$.

Then each point $x$ of $T$ has a local basis $\BB_x$ consisting entirely of connected sets in $T$.


Proof
For each $x \in S$ we define:

$\BB_x = \set {B \in \BB: x \in B}$
From Basis induces Local Basis, $\BB_x$ is a local basis.
As each element of $\BB_x$ is also an element of $\BB$, it follows that $\BB_x$ is also formed of connected sets.
Thus, for each point $x \in S$, there is a local basis which consists entirely of connected sets.
$\blacksquare$





