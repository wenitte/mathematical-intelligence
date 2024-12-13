# 

Source: https://proofwiki.org/wiki/Restriction_of_Homeomorphism_is_Homeomorphism

Theorem
Let $T_1 = \struct {S_1, \tau_1}$, $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a homeomorphism between $T_1$ and $T_2$.
Let $S$ be a subset of $S_1$.
Let $f {\restriction_{S \times f \sqbrk S} } : S \to f \sqbrk S$ be the restriction of $f$ to $S \times f \sqbrk S$.
Let $S$ and $f \sqbrk S$ bear their respective subspace topologies.

Then $f {\restriction_{S \times f \sqbrk S} }$ is a homeomorphism.


Proof
By Restriction of Continuous Mapping is Continuous, $f {\restriction_{S \times f \sqbrk S} }$ is continuous.
By Restriction of Inverse is Inverse of Restriction, $\left({f {\restriction_{S \times f \sqbrk S} } }\right)^{-1}$ is well-defined and equal to $f^{-1} {\restriction_{f \sqbrk S \times S} }$.
By Restriction of Continuous Mapping is Continuous, $f^{-1} {\restriction_{f \sqbrk S \times S} }$ is continuous.
Since $\paren {f {\restriction_{S \times f \sqbrk S} } }^{-1} = f^{-1} {\restriction_{f \sqbrk S \times S} }$, $\paren {f {\restriction_{S \times f \sqbrk S} } }^{-1}$ is continuous.
Hence, $f {\restriction_{S \times f \sqbrk S} }$ is a homeomorphism.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces: $3$: Continuity generalized: topological spaces: Exercise $3.9 : 17$




