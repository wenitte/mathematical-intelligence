# 

Source: https://proofwiki.org/wiki/Mapping_from_Discrete_Space_is_Continuous

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be the discrete topological space on $S_1$.
Let $T_2 = \struct {S_2, \tau_2}$ be any other topological space.
Let $\phi: S_1 \to S_2$ be a mapping.

Then $\phi$ is continuous.


Proof
From the definition of continuous:

$U \in \tau_2 \implies \phi^{-1} \sqbrk U \in \tau_1$
But as $\phi^{-1} \sqbrk U \subseteq S_1$ it follows from the definition of discrete space that $\phi^{-1} \sqbrk U \in \tau_1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 6$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $5$




