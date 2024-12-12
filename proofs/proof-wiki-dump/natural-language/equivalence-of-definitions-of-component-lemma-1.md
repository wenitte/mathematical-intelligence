# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component/Lemma_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text{ is connected in } T}$
Let $\ds C = \bigcup \CC_x$

Then:

$C$ is connected in $T$ and $C \in \CC_x$.
Proof
From Singleton is Connected in Topological Space, $\set{x}$ is a connected set of $T$ containing $x$.
It follows that $x \in C$.
From Union of Connected Sets with Common Point is Connected, $C$ is a  connected set of $T$.
Hence $C \in \CC_x$.
$\blacksquare$





