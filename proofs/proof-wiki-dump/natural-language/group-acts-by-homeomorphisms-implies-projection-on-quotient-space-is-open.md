# 

Source: https://proofwiki.org/wiki/Group_Acts_by_Homeomorphisms_Implies_Projection_on_Quotient_Space_is_Open

Theorem
Let $G$ be a group acting by homeomorphisms on a topological space $X$.

Then the projection map $\pi: X \to X / G$ is open.


Proof
Let $U \subset X$ be open.
We have to show that $\pi \sqbrk U$ is open.
By definition of quotient topology, this is the case if and only if $\pi^{-1} \sqbrk {\pi \sqbrk U}$ is open.
By definition of saturation under group action:

$\ds \pi^{-1} \sqbrk {\pi \sqbrk U} = \bigcup_{g \mathop \in G} g U$
Because $G$ acts by homeomorphisms, $\pi^{-1} \sqbrk {\pi \sqbrk U}$ is open.
$\blacksquare$


Also see
Projection of Subset is Open iff Saturation is Open




