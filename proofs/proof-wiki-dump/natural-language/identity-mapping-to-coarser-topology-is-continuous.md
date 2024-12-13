# 

Source: https://proofwiki.org/wiki/Identity_Mapping_to_Coarser_Topology_is_Continuous

Theorem
Let $S$ be a set.
Let $\tau_1$ and $\tau_2$ be topologies on $S$.
That is, let $T_1 = \struct {S, \tau_1}$ and $T_2 = \struct {S, \tau_2}$ be topological spaces.
Let $I_S: \struct {S, \tau_1} \to \struct {S, \tau_2}$ denote the identity mapping on $S$:

$\forall x \in S: \map {I_S} x = x$

Then:

$I_S: T_1 \to T_2$ is a continuous mapping
if and only if:

$\tau_2$ is coarser than $\tau_1$.


Proof









\(\ds \forall U \in \tau_2: \, \)



\(\ds I_S^{-1} \sqbrk U\)

\(\in\)







\(\ds \tau_1\)





Definition of Continuous Mapping (Topology)








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall U \in \tau_2: \, \)



\(\ds U\)

\(\in\)







\(\ds \tau_1\)





Definition of Identity Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \tau_2\)

\(\subseteq\)







\(\ds \tau_1\)









But $\tau_2 \subseteq \tau_1$ is the definition of $\tau_2$ being coarser than $\tau_1$.
$\blacksquare$





