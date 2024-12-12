# 

Source: https://proofwiki.org/wiki/Fort_Space_is_Zero_Dimensional

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on an infinite set $S$.

Then $T$ is a zero dimensional space.


Proof
Let $q \in S$ such that $q \ne p$.
Then from Clopen Points in Fort Space, $\set q$ is clopen.
So $\forall q \in S, q \ne p: \set {\set q}$ is a local basis for $q$.

If we take the open neighborhoods of $p$ we get a local basis $\UU_p$ with the following property:

Since $p \in U \in \UU_p$, its complement does not contain $p$ and so it is open.
This implies that $U$ is also closed.
The union of the local basis forms a basis for the topology.
This basis is formed with clopen sets.
So, by definition, $T$ is a zero dimensional space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $23 \text { - } 24$. Fort Space: $9$




