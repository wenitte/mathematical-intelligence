# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component/Union_of_Connected_Sets_is_Maximal_Connected_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text{ is connected in } T}$
Let $\ds C = \bigcup \CC_x$

Then $C$ is a maximal connected set of $T$.

Proof
Lemma
$C$ is connected in $T$ and $C \in \CC_x$.

Let $\tilde C$ be any connected set such that:

$C \subseteq \tilde C$
Then $x \in \tilde C$.
Hence $\tilde C \in \CC_x$.
From Set is Subset of Union, 

$\tilde C \subseteq C$.
Hence $\tilde C = C$.
It follows that $C$ is a maximal connected set of $T$ by definition.
$\blacksquare$

Also see
Maximal Connected Set is Union of Connected Sets




