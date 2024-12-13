# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_is_Continuous

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T_H = \struct {H, \tau_H}$ be a topological subspace of $T$ where $H \subseteq S$.
Let $i_H: H \to S$ be the inclusion mapping on $H$.

Then $i_H$ is a $\struct {\tau_H, \tau}$-continuous mapping.


Proof
Let $U \in \tau$.
Then from Preimage of Subset under Inclusion Mapping:

$\map {i_H^{-1} } U = U \cap H$
From the definition of the subspace topology:

$U \cap H \in \tau_H$
Hence the result by definition of a continuous mapping.
$\blacksquare$





