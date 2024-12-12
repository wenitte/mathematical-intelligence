# 

Source: https://proofwiki.org/wiki/Closed_Sets_of_Closed_Extension_Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then the closed sets of $T^*_p$ (apart from $S^*_p$) are the closed sets of $T$.

This explains why $\tau^*_p$ is called the closed extension topology of $\tau$.


Proof
By definition:

$\tau^*_p = \set {U \cup \set p: U \in \tau} \cup \set \O$

Let $V \subseteq S^*_p$ be closed in $T^*_p$.
Then $S^*_p \setminus V$ is open in $T^*_p$.
Then $\struct {S^*_p \setminus V} \setminus \set p$ is open in $T$.
From Set Difference with Union we have:

$\struct {S^*_p \setminus V} \setminus \set p = S^*_p \setminus \struct {V \cup \set p}$
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $20$




