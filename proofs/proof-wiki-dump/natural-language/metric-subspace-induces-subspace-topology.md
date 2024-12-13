# 

Source: https://proofwiki.org/wiki/Metric_Subspace_Induces_Subspace_Topology

Theorem
Let $M = \struct {A,d}$ be a metric space.
Let $H \subseteq A$.
Let $\tau$ be the topology induced by the metric $d$.
Let $\tau_H$ be the subspace topology induced by $\tau$ on $H$.
Let $d_H$ be the subspace metric induced by $d$ on $H$.
Let $\tau_{d_H}$ be the topology induced by the metric $d_H$.

Then:

$\tau_{d_H} = \tau_H$


Proof
Let $\BB$ be the set of open $\epsilon$-balls in $M$.
Let $\BB_H$ be the set of open $\epsilon$-balls in $\struct {H, d_H}$.

Let $U \in \tau_{d_H}$.
By the definition of the topology induced by the metric $d_H$:

$\exists \AA_H \subseteq \BB_H: U = \bigcup \AA_H$
Let $\AA = \set {B': B' \in \BB, B' \cap H \in \AA_H}$.
Let $V = \bigcup \set {B' : B' \in \AA}$.
By the definition of the topology induced by the metric $d$:

$V \in \tau$

By the definition of the subspace metric:

$\forall B \in \BB_H: \exists B' \in \BB: B = B' \cap H$
Hence:














\(\ds U\)

\(=\)







\(\ds \bigcup \set {B' \cap H : B' \in \AA}\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup \set {B' : B' \in \AA} } \cap H\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds V \cap H\)









By the definition of the subspace topology induced by $\tau$ on $H$:

$U \in \tau_H$
Hence:

$\tau_{d_H} \subseteq \tau_H$.
$\Box$

Let $U \in \tau_H$.
By the definition of the subspace topology induced by $\tau$ on $H$:

$\exists V \in \tau : U = V \cap H$
By the definition of the topology induced by the metric $d$:

$\exists \AA \subseteq \BB: V = \bigcup \set {B' : B' \in \AA}$
Hence:














\(\ds U\)

\(=\)







\(\ds \paren {\bigcup \set {B' : B' \in \AA} } \cap H\)




















\(\ds \)

\(=\)







\(\ds \bigcup \set {B' \cap H : B' \in \AA}\)





Intersection Distributes over Union



By the definition of the subspace metric:

$\forall B' \in \BB: B' \cap H \in \BB_H$
By the Definition of the topology induced by the metric $d_H$:

$U \in \tau_{d_H}$
Hence:

$\tau_H \subseteq \tau_{d_H}$

By Equivalence of Definitions of Set Equality:

$\tau_H = \tau_{d_H}$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 13$




