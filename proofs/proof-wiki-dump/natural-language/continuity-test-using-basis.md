# 

Source: https://proofwiki.org/wiki/Continuity_Test_using_Basis



Theorem
Let $\struct {X_1, \tau_1}$ and $\struct {X_2, \tau_2}$ be topological spaces.
Let $f: X_1 \to X_2$ be a mapping.
Let $\BB$ be an analytic basis for $\tau_2$.
Suppose that:

$\forall B \in \BB: f^{-1} \sqbrk B \in \tau_1$
where $f^{-1} \sqbrk B$ denotes the preimage of $B$ under $f$.

Then $f$ is continuous.


Proof
Let $U \in \tau_2$.
By the definition of an analytic basis, it follows that:

$\ds \exists \AA \subseteq \BB: U = \bigcup \AA$
Hence:














\(\ds f^{-1} \sqbrk U\)

\(=\)







\(\ds f^{-1} \sqbrk {\bigcup \AA}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{B \mathop \in \AA} f^{-1} \sqbrk B\)





Preimage of Union under Mapping: General Result














\(\ds \)

\(\in\)







\(\ds \tau_1\)





by hypothesis, and by the definition of a topology



The result follows from the definition of continuity.
$\blacksquare$


Also see
Continuity Test using Sub-Basis for a general version.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.2$: Bases: Application $3.2.5$




