# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Path_Component/Lemma_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\CC_x = \leftset {A \subseteq S : x \in A \land A}$ is path-connected in $\rightset T$
Let $C = \bigcup \CC_x$

Then:

$C$ is path-connected in $T$ and  $C \in \CC_x$.


Proof
From Point is Path-Connected to Itself, $\set x$ is a path-connected subset of $T$ containing $x$.
It follows that $x \in C$.
From Union of Path-Connected Sets with Common Point is Path-Connected, $C$ is a  path-connected subset of $T$.
Hence $C \in \CC_x$.
$\blacksquare$





