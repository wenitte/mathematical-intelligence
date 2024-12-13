# 

Source: https://proofwiki.org/wiki/Homeomorphic_Topology_of_Initial_Topology_is_Initial_Topology

Theorem
Let $\struct {X_\alpha, \tau_\alpha}, \struct {X_\beta, \tau_\beta}$ be topological spaces.

Let $\ds \family {\struct {Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds \family {f_i: X_\beta \to Y_i}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.
Let $\tau_\beta$ be the initial topology on $X_\beta$ with respect to $\ds \family {f_i}_{i \mathop \in I}$.

Let $\phi : \struct {X_\alpha, \tau_\alpha} \to \struct {X_\beta, \tau_\beta}$ be a homeomorphism.

Then:

$\tau_\alpha$ is the initial topology on $X_\alpha$ with respect to $\ds \family {f_i \circ \phi : X_\alpha \to Y_i}_{i \mathop \in I}$


Proof
Let $\SS_\beta = \set {f_i^{-1} \sqbrk U: i \in I, U \in \tau_i}$.
By definition  of initial topology:

$\SS_\beta$ is a sub-basis for $\tau_\beta$

From Inverse of Homeomorphism is Homeomorphism:

$\phi^{-1}$ is a homeomorphism
From Homeomorphic Image of Sub-Basis is Sub-Basis:

$\SS_\alpha = \set {\phi^{-1} \sqbrk {f_i^{-1} \sqbrk U} : i \in I, U \in \tau_i}$ is a sub-basis for $\tau_\alpha$

From Preimage of Subset under Composite Mapping:

$\forall i \in I, U \in \tau_i : \phi^{-1} \sqbrk {f_i^{-1} \sqbrk U} = \paren{f_i \circ \phi}^{-1} \sqbrk U$
Hence:

$\SS_\alpha = \set {\paren {f_i \circ \phi}^{-1} \sqbrk U : i \in I, U \in \tau_i}$ is a sub-basis for $\tau_\alpha$

By definition, $\tau_\alpha$ is the initial topology on $X_\alpha$ with respect to $\ds \family {f_i \circ \phi}_{i \mathop \in I}$
$\blacksquare$





