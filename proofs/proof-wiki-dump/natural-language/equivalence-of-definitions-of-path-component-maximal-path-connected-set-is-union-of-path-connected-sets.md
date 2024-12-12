# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Path_Component/Maximal_Path-Connected_Set_is_Union_of_Path-Connected_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\tilde C$ be a maximal path-connected set of $T$ that contains $x$.

Then:

$\tilde C = \bigcup \set {A \subseteq S : x \in A \land A \text{ is path-connected in } T}$.


Proof
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text{ is path-connected in } T}$
Let $C = \bigcup \CC_x$


Lemma
$C$ is path-connected in $T$ and  $C \in \CC_x$.

By definition:

$\tilde C \in \CC_x$
From Set is Subset of Union:

$\tilde C \subseteq C$
By maximality of $\tilde C$:

$\tilde C = C$
$\blacksquare$


Also see
Union of Path-Connected Sets is Path-Maximal Connected Set




