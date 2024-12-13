# 

Source: https://proofwiki.org/wiki/Homeomorphic_Image_of_Local_Basis_is_Local_Basis

Theorem
Let $T_\alpha = \struct{S_\alpha, \tau_\alpha}$ and $T_\beta = \struct{S_\beta, \tau_\beta}$ be topological spaces.
Let $\phi: T_\alpha \to T_\beta$ be a homeomorphism.
Let $s \in S_\alpha$.
Let $\BB$ be a local basis of $s$ in $T_\alpha$.

Then:

$\BB' = \set{ \phi \sqbrk B : B \in \BB}$ is a local basis of $\map \phi s$ in $T_\beta$


Proof
By definition of homeomorphism:

$\forall U \in \tau_\alpha : \phi \sqbrk U \in \tau_\beta$
Hence:

$\BB'$ is a set of open sets in $T_\beta$ containing $\map \phi s$

Let $U \in \tau_\beta$ containing $\map \phi s$.

By definition of homeomorphism:

$\phi^{-1} \sqbrk U \in \tau_\alpha$ containing $s$
By definition of local basis:

$\exists V \in \BB: s \in V \subseteq \phi^{-1} \sqbrk U$

By definition of image of subset:

$\map \phi s \in \phi \sqbrk V$
From Subset Maps to Subset:

$\phi \sqbrk V \subseteq \phi \sqbrk {\phi^{-1} \sqbrk U}$
From Image of Preimage under Mapping:

$\phi \sqbrk {\phi^{-1} \sqbrk U} \subseteq U$
From Subset Relation is Transitive]:

$\phi \sqbrk V \subseteq U$

Hence:

$\exists \phi \sqbrk V \in \BB': \map \phi s \in \phi \sqbrk V \subseteq U$
$\blacksquare$


Also see
Homeomorphic Image of Neighborhood Basis is Neighborhood Basis




