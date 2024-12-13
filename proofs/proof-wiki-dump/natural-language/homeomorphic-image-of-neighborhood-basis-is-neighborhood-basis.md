# 

Source: https://proofwiki.org/wiki/Homeomorphic_Image_of_Neighborhood_Basis_is_Neighborhood_Basis

Theorem
Let $T_\alpha = \struct {S_\alpha, \tau_\alpha}$ and $T_\beta = \struct {S_\beta, \tau_\beta}$ be topological spaces.
Let $\phi: T_\alpha \to T_\beta$ be a homeomorphism.
Let $s \in S_\alpha$.
Let $\NN$ be a neighborhood basis of $s$ in $T_\alpha$.

Then:

$\NN' = \set {\phi \sqbrk N : N \in \NN}$ is a neighborhood basis of $\map \phi s$ in $T_\beta$.


Proof
Let $N$ be a neighborhood of $s$ in $T_\alpha$.
By definition of neighborhood:

$\exists V \in \tau_\alpha : s \in V \subseteq N$
By definition of image of subset:

$\map \phi s \in \phi \sqbrk V$
From Subset Maps to Subset:

$\phi \sqbrk V \subseteq \phi \sqbrk N$
By definition of homeomorphism:

$\phi \sqbrk V \in \tau_\beta$
It follows that $\phi \sqbrk N$ is a neighborhood of $\map \phi s$ in $T_\beta$.
Hence:

$\NN' = \set{ \phi \sqbrk N : N \in \NN}$ is a set of neighborhoods of $\map \phi s$ in $T_\beta$

Let $M$ be a neighborhood of $\map \phi s$ in $T_\beta$.
By definition of neighborhood:

$\exists U \in \tau_\beta : \map \phi s \in U \subseteq M$
By definition of homeomorphism:

$\phi^{-1} \sqbrk U \in \tau_\alpha$ containing $s$
By definition of neighborhood basis:

$\exists N \in \NN: s \in N \subseteq \phi^{-1} \sqbrk U$

By definition of image of subset:

$\map \phi s \in \phi \sqbrk N$
From Subset Maps to Subset:

$\phi \sqbrk N \subseteq \phi \sqbrk {\phi^{-1} \sqbrk U}$
From Image of Preimage under Mapping:

$\phi \sqbrk {\phi^{-1} \sqbrk U} \subseteq U$
From Subset Relation is Transitive:

$\phi \sqbrk N \subseteq M$

Hence:

$\exists \phi \sqbrk N \in \BB': \map \phi s \in \phi \sqbrk N \subseteq M$
The result follows.
$\blacksquare$


Also see
Homeomorphic Image of Local Basis is Local Basis




