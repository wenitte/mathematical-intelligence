# 

Source: https://proofwiki.org/wiki/Second-Countability_is_not_Continuous_Invariant

Theorem
Let $T_A = \struct {A, \tau_A}$ and $T_B = \struct {B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a continuous mapping.

If $T_A$ is a second-countable space, then it does not necessarily follow that $T_B$ is also second-countable.


Proof
Let $T_S = \struct {S, \tau_S}$ be the Arens-Fort space.
Let $T_D = \struct {S, \tau_D}$ be the discrete space, also on $S$.
As $S$ is countable, from Arens-Fort Space is Expansion of Countable Fort Space, it follows that $T_D = \struct {S, \tau_D}$ is a countable discrete space.

Let $I_S: S \to S$ be the identity mapping on $S$.
From Mapping from Discrete Space is Continuous, we have that $I_S$ is a continuous mapping.
Then we have that a Countable Discrete Space is Second-Countable.
We have that the Arens-Fort Space is not First-Countable.
It follows from Second-Countable Space is First-Countable that the Arens-Fort space is not second-countable either.
Thus we have demonstrated a continuous mapping from a second-countable space to a space which is not second-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $6$




