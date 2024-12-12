# 

Source: https://proofwiki.org/wiki/Continuity_of_Composite_with_Inclusion/Inclusion_on_Mapping



Theorem
Let $T = \struct {A, \tau}$ and $T' = \struct {A', \tau'}$ be topological spaces.
Let $H \subseteq A$.
Let $T_H = \struct {H, \tau_H}$ be a topological subspace of $T$.
Let $i: H \to A$ be the inclusion mapping.
Let $g: A' \to H$ be a mapping.

$g$ is $\tuple {\tau', \tau_H}$-continuous if and only if $i \circ g$ is $\tuple {\tau', \tau}$-continuous.


Proof
Necessary Condition
Suppose $g$ is $\tuple {\tau', \tau_H}$-continuous.
From Inclusion Mapping is Continuous, $i$ is $\tuple {\tau_H, \tau}$-continuous.
It follows from Composite of Continuous Mappings is Continuous that $i \circ g$ is $\tuple {\tau', \tau}$-continuous.


Sufficient Condition
Suppose $i \circ g$ is $\tuple {\tau', \tau}$-continuous.
Let $V \in \tau_H$.
Then from the definition of topological subspace:

$V = U \cap H$ for some $U \in \tau$
and by Preimage of Subset under Inclusion Mapping:

$U \cap H = i^{-1} \sqbrk U$
So by Preimage of Subset under Composite Mapping:

$g^{-1} \sqbrk V = g^{-1} \sqbrk {i^{-1} \sqbrk U} = \paren {i \circ g}^{-1} \sqbrk U$
Thus:

$g^{-1} \sqbrk V \in \tau'$
by continuity of $i \circ g$.
Hence $g$ is $\tuple {\tau', \tau_H}$-continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.4$: Subspaces: Proposition $3.4.2 \ \text{(b)}$




