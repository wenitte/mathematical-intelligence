# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component/Maximal_Connected_Set_is_Union_of_Connected_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\tilde C$ be a maximal connected set of $T$ that contains $x$.

Then:

$\tilde C = \bigcup \set {A \subseteq S : x \in A \land A \text{ is connected in } T}$.


Proof
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text{ is connected in } T}$
Let $C = \bigcup \CC_x$


Lemma
$C$ is connected in $T$ and $C \in \CC_x$.
$\Box$

By definition:

$\tilde C \in \CC_x$
From Set is Subset of Union:

$\tilde C \subseteq C$
By maximality of $\tilde C$:

$\tilde C = C$
$\blacksquare$


Also see
Union of Connected Sets is Maximal Connected Set




