# 

Source: https://proofwiki.org/wiki/Discrete_Group_Acts_Continuously_iff_Acts_by_Homeomorphisms

Theorem
Let $G$ be a discrete group acting on a topological space $X$.

Then the following are equivalent:

$G$ acts continuously
$G$ acts by homeomorphisms


Proof
If $G$ acts continuously, then by Continuous Group Action is by Homeomorphisms, $G$ acts by homeomorphisms

Let $G$ act by homeomorphisms
Let $\phi: G \times X \to X$ denote the group action.
For $g \in G$, denote $\phi_g : X \to X : x \mapsto \map \phi {g, x}$
Let $U \subset X$ be open.
Then:














\(\ds \phi^{-1} \sqbrk U\)

\(=\)







\(\ds \set { \tuple {g, x} \in G \times X : \map \phi {g, x} \in U }\)





Definition of Preimage of Mapping with respect to $\phi$














\(\ds \)

\(=\)







\(\ds \set { \tuple {g, x} \in G \times X : \map {\phi _g} x \in U }\)




















\(\ds \)

\(=\)







\(\ds \set { \tuple {g, x} \in G \times X : x \in \phi _g^{-1} \sqbrk U }\)





Definition of Preimage of Mapping with respect to $\phi _g$














\(\ds \)

\(=\)







\(\ds \bigcup _{g \in G} \paren { \set g \times {\phi _g^{-1} } \sqbrk U }\)









Since each $\set g \times {\phi _g^{-1} \sqbrk U }$ is open by Definition of Product Topology, $\phi^{-1} \sqbrk U$ is open.
Thus $\phi$ is continuous.
$\blacksquare$


Also see
Continuous Group Action is by Homeomorphisms




