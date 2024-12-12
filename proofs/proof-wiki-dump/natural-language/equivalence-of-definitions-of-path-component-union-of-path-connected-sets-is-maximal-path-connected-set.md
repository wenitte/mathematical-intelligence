# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Path_Component/Union_of_Path-Connected_Sets_is_Maximal_Path-Connected_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.
Let $\CC_x = \left\{ {A \subseteq S : x \in A \land A } \right.$ is path-connected in $\left. {T} \right\}$
Let $C = \bigcup \CC_x$

Then $C$ is a maximal path-connected set of $T$.


Proof
Lemma
$C$ is path-connected in $T$ and  $C \in \CC_x$.

Let $\tilde C$ be any path-connected set such that:

$C \subseteq \tilde C$
Then $x \in \tilde C$.
Hence $\tilde C \in \CC_x$.
From Set is Subset of Union, 

$\tilde C \subseteq C$.
Hence $\tilde C = C$.
It follows that $C$ is a maximal path-connected set of $T$ by definition.
$\blacksquare$


Also see
Maximal Path-Connected Set is Union of Path-Connected Sets




