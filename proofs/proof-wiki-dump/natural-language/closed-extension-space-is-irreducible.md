# 

Source: https://proofwiki.org/wiki/Closed_Extension_Space_is_Irreducible



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then $T^*_p$ is irreducible.


Proof 1
Trivially, by definition, every open set in $T^*_p$ contains $p$.
So:

$\forall U_1, U_2 \in \tau^*_p: p \in U_1 \cap U_2$
for $U_1, U_2 \ne \O$.
$\blacksquare$


Proof 2
From Closure of Open Set of Closed Extension Space we have that:

$\forall U \in \tau^*_p: U \ne \O \implies U^- = S$
where $U^-$ is the closure of $U$.
The result then follows by definition of irreducible space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




