# 

Source: https://proofwiki.org/wiki/Restriction_of_Continuous_Mapping_is_Continuous/Topological_Spaces

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $M_1 \subseteq S_1$ be a subset of $S_1$.
Let $f: S_1 \to S_2$ be a mapping which is continuous.
Let $M_2 \subseteq S_2$ be a subset of $S_2$ such that $f \sqbrk {M_1} \subseteq M_2$.
Let $f \restriction_{M_1 \times M_2}: M_1 \to M_2$ be the restriction of $f$ to $M_1 \times M_2$.

Then $f \restriction_{M_1 \times M_2}$ is continuous, where $M_1$ and $M_2$ are equipped with the respective subspace topologies.


Proof
Let $V \subseteq M_2$ be an open set with respect to the subspace topology of $M_2$.
By definition of subspace topology, $V = U \cap M_2$ for an open set $U \in \tau_2$.
We have that:














\(\ds \paren {f \restriction_{M_1 \times M_2} }^{-1} \sqbrk V\)

\(=\)







\(\ds \set {x \in M_1 : \map {f \restriction_{M_1 \times M_2} } x \in V}\)





Definition of Preimage of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {x \in M_1 : \map {f \restriction_{M_1 \times M_2} } x \in U}\)





$f \sqbrk {M_1} \subseteq M_2$














\(\ds \)

\(=\)







\(\ds \set {x \in M_1 : \map f x \in U}\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \set {x \in S_1 : \map f x \in U} \cap M_1\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds f^{-1} \sqbrk U \cap M_1\)





Definition of Preimage of Subset under Mapping



By definition of continuous mapping, $f^{-1} \sqbrk U$ is open in $T_1$.
By definition of subspace topology, $f^{-1} \sqbrk U \cap M_1$ is open with respect to the subspace topology of $M_1$.
As $f^{-1} \sqbrk U \cap M_1 = {f \restriction_{M_1 \times M_2} }^{-1} \sqbrk V$ it follows that ${f \restriction_{M_1 \times M_2} }^{-1} \sqbrk V$ is open with respect to the subspace topology of $M_1$.
Since $V \subseteq M_2$ was an arbitrary open set, $f$ is continuous.
$\blacksquare$





