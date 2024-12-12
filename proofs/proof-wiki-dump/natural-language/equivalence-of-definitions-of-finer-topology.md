# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Finer_Topology



Theorem
Let $S$ be a set.
Let $\tau_1$ and $\tau_2$ be topologies on $S$.

The following definitions of the concept of Finer Topology are equivalent:

Definition 1
$\tau_1$ is finer than $\tau_2$ if and only if $\tau_1 \supseteq \tau_2$.


Definition 2
$\tau_1$ is finer than $\tau_2$ if and only if the identity mapping $(S, \tau_1) \to (S, \tau_2)$ is continuous.


Proof
Let $I_S: \struct {S, \tau_1} \to \struct {S, \tau_2}$ be the identity mapping on $S$.
Then:














\(\ds \tau_1\)

\(\supseteq\)







\(\ds \tau_2\)





Definition 1 of Finer Topology








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall U \subseteq S: \, \)



\(\ds U \in \tau_2\)

\(\implies\)







\(\ds U \in \tau_1\)





Definition of Superset








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall U \subseteq S: \, \)



\(\ds U \in \tau_2\)

\(\implies\)







\(\ds \map {I_S^{-1} } U \in \tau_1\)





as $\map {I_S^{-1} } U = U$: Definition of Identity Mapping



$\quad \; \leadstoandfrom \: \: I_S$ is continuous, by definition of a continuous mapping, which is Definition 2 of Finer Topology.
$\blacksquare$





