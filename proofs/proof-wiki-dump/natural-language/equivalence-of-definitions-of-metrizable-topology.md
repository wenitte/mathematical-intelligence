# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Metrizable_Topology


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following definitions of the concept of Metrizable Topology are equivalent:

Definition 1
$T$ is said to be metrizable if and only if there exists a metric $d$ on $S$ such that:

$\tau$ is the topology induced by $d$ on $S$.


Definition 2
$T$ is said to be metrizable if and only if there exists a metric space $M = \struct{A, d}$ such that:

$T$ is homeomorphic to the topological space $\struct{A, \tau_d}$
where $\tau_d$ is the topology induced by $d$ on $A$.


Proof
Definition 1 implies Definition 2
Let $d$ be a metric on $S$ such that $\tau$ is the topology induced by $d$.

From Identity Mapping is Homeomorphism:

$T$ is homeomorphic to a topological space with a topology induced by a metric.
$\Box$

Definition 2 implies Definition 1
Let $M = \struct{A, d}$ be a metric space such that $T$ is homeomorphic to $\struct{A,\tau_d}$ where $\tau_d$ is the topology induced by $d$.

Let $\phi : \struct{S, \tau} \to \struct{A, \tau_d}$ be a homeomorphism.

Let $d_\phi : S \times S \to \R_{\ge 0}$ be the mapping defined by:

$\forall s,t \in S: \map {d_\phi} {s,t} = \map d {\map \phi s, \map \phi t}$
Lemma 1
$d_\phi$ is a metric on $S$.
$\Box$

Lemma 2
$\forall U \subseteq S : U$ is open in $\struct{S, d_\phi}$ if and only if $\phi \sqbrk U$ is open in $\struct{A, d}$
$\Box$

It remains to show that $\tau$ is the topology induced by the metric $d_\phi$.
We have:














\(\ds U \text{ is open in } \struct{S, \tau}\)

\(\leadstoandfrom\)







\(\ds \phi \sqbrk U \text{ is open in } \struct{A, \tau_d}\)





Definition of Homeomorphism














\(\ds \)

\(\leadstoandfrom\)







\(\ds \phi \sqbrk U \text{ is open in } \struct{A, d}\)





Definition of Topology Induced by Metric














\(\ds \)

\(\leadstoandfrom\)







\(\ds U \text{ is open in } \struct{S, d_\phi}\)





Lemma 2




Hence $\tau$ is a topology induced by a metric by definition.
$\blacksquare$





