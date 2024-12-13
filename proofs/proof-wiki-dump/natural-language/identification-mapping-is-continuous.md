# 

Source: https://proofwiki.org/wiki/Identification_Mapping_is_Continuous

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ be a set.
Let $f: S_1 \to S_2$ be a mapping.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$.

Then the identification mapping $f$ is continuous.


Proof
By definition of identification topology:

$\tau_2 = \set {V \in \powerset {S_2}: f^{-1} \sqbrk V \in \tau_1}$
That is:

$V \in \tau_2 \implies f^{-1} \sqbrk V \in \tau_1$
This is precisely the definition of a continuous mapping.
$\blacksquare$





