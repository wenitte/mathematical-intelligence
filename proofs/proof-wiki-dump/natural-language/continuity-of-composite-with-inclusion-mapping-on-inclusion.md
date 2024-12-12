# 

Source: https://proofwiki.org/wiki/Continuity_of_Composite_with_Inclusion/Mapping_on_Inclusion

Theorem
Let $T = \struct {A, \tau}$ and $T' = \struct {A', \tau'}$ be topological spaces.
Let $H \subseteq A$.
Let $T_H = \struct {H, \tau_H}$ be a topological subspace of $T$.
Let $i: H \to A$ be the inclusion mapping.

Let $f: A \to A'$ be a mapping.

If $f$ is $\tuple {\tau, \tau'}$-continuous, then $f \circ i$ is $\tuple {\tau_H, \tau'}$-continuous


Proof
From Inclusion Mapping is Continuous, $i$ is $\tuple {\tau_H, \tau}$-continuous.
It follows from Composite of Continuous Mappings is Continuous that $f \circ i$ is $\tuple {\tau_H, \tau'}$-continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.4$: Subspaces: Proposition $3.4.2 \ \text{(a)}$




