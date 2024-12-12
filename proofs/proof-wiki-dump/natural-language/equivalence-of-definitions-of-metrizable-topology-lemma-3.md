# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Metrizable_Topology/Lemma_3

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $M = \struct {A, d}$ be a metric space.
Let $\tau_d$ be the topology induced by $d$ on $A$.
Let $\phi : \struct{S, \tau} \to \struct{A, \tau_d}$ be a homeomorphism between topological spaces $\struct{S, \tau}$ and $\struct{A, \tau_d}$.
Let $d_\phi : S \times S \to \R_{\ge 0}$ be the metric defined by:

$\forall s,t \in S: \map {d_\phi} {s,t} = \map d {\map \phi s, \map \phi t}$

Then:

$\forall s \in S, \epsilon \in \R_{\ge 0} : \phi \sqbrk {\map {B_\epsilon} s} = \map {B_\epsilon} {\map \phi s}$
where 

$(1) \quad \map {B_\epsilon} s$ is the open ball in $\struct{S, d_\phi}$ with center $s$ and radius $\epsilon$
$(2) \quad \map {B_\epsilon} {\map \phi s}$ is the open ball in $\struct{A, d}$ with center $\map \phi s$ and radius $\epsilon$


Proof
Let $s \in S$.
Let $\epsilon \in \R_{\ge 0}$.

We have:














\(\ds x \in \map {B_\epsilon} s\)

\(\leadstoandfrom\)







\(\ds \map {d_\phi} {s, x} < \epsilon\)





Definition of Open Ball in $\struct{S, d_\phi}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map d {\map \phi s, \map \phi x} < \epsilon\)





Definition of $d_\phi$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi x \in \map {B_\epsilon} {\map \phi s}\)





Definition of Open Ball in $\struct{A, d}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \phi^{-1} \sqbrk {\map {B_\epsilon} {\map \phi s} }\)





Definition of Preimage of Mapping




By set equality:

$\map {B_\epsilon} s = \phi^{-1} \sqbrk {\map {B_\epsilon} {\map \phi s}}$
Hence:

$\phi \sqbrk {\map {B_\epsilon} s} = \phi \sqbrk {\phi^{-1} \sqbrk {\map {B_\epsilon} {\map \phi s}}}$

By definition of homeomorphism:

$\phi$ is a surjection
From Image of Preimage of Subset under Surjection equals Subset:

$\phi \sqbrk {\phi^{-1} \sqbrk {\map {B_\epsilon} {\map \phi s}}} = \map {B_\epsilon} {\map \phi s}$

The result follows.
$\blacksquare$





