# 

Source: https://proofwiki.org/wiki/Mapping_to_Indiscrete_Space_is_Continuous

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be any topological space.
Let $T_2 = \struct {S_2, \tau_2}$ be the indiscrete topological space on $S_2$.
Let $\phi: S_1 \to S_2$ be a mapping.

Then $\phi$ is continuous.


Proof
From the definition of continuous:

$U \in \tau_2 \implies \phi^{-1} \sqbrk U \in \tau_1$
The only elements of $\tau_2$ are $S_2$ and $\O$, from which:

$\phi^{-1} \sqbrk {S_2} = S_1 \in \tau_1$
$\phi^{-1} \sqbrk \O = \O \in \tau_1$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 6$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $8$




