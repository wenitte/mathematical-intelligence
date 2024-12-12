# 

Source: https://proofwiki.org/wiki/Closed_Set_of_Uncountable_Finite_Complement_Topology_is_not_G-Delta

Theorem
Let $T = \struct {S, \tau}$ be a finite complement topology on an uncountable set $S$.
Let $V \in \tau$ be a closed set of $T$.

Then $V$ is not a $G_\delta$ set.


Proof
Let $V$ be a closed set of $T$.
Aiming for a contradiction, suppose $V$ is $G_\delta$ set.
Then by Complement of $G_\delta$ Set is $F_\sigma$ Set:

$S \setminus V$ is an $F_\sigma$ set.
By definition of closed set, $S \setminus V$ is an open set of $T$.
But by Open Set of Uncountable Finite Complement Topology is not $F_\sigma$:

$S \setminus V$ is not an $F_\sigma$ set.
It follows by Proof by Contradiction that $V$ is not a $G_\delta$ set.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $19$. Finite Complement Topology on an Uncountable Space: $3$




