# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Metrizable_Topology/Lemma_2



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $M = \struct {A, d}$ be a metric space.
Let $\tau_d$ be the topology induced by $d$ on $A$.
Let $\phi : \struct{S, \tau} \to \struct{A, \tau_d}$ be a homeomorphism between topological spaces $\struct{S, \tau}$ and $\struct{A, \tau_d}$.
Let $d_\phi : S \times S \to \R_{\ge 0}$ be the metric defined by:

$\forall s,t \in S: \map {d_\phi} {s,t} = \map d {\map \phi s, \map \phi t}$

Then:

$\forall U \subseteq S : U$ is open in $\struct{S, d_\phi}$ if and only if $\phi \sqbrk U$ is open in $\struct{A, d}$


Proof
Lemma 3
$\forall s \in S, \epsilon \in \R_{\ge 0} : \phi \sqbrk {\map {B_\epsilon} s} = \map {B_\epsilon} {\map \phi s}$
where 

$(1) \quad \map {B_\epsilon} s$ is the open ball in $\struct{S, d_\phi}$ with center $s$ and radius $\epsilon$
$(2) \quad \map {B_\epsilon} {\map \phi s}$ is the open ball in $\struct{A, d}$ with center $\map \phi s$ and radius $\epsilon$
$\Box$

Let $U \subseteq S$.

Necessary Condition
Let $U$ be open in $\struct{S, d_\phi}$.

By definition of open set:

$\forall s \in U: \exists \epsilon_s : \map {B_{\epsilon_s}} s \subseteq U$
From Lemma 3:

$\forall s \in U: \exists \epsilon_s : \map {B_{\epsilon_s}} {\map \phi s} = \phi \sqbrk {\map {B_{\epsilon_s}} s} \subseteq \phi \sqbrk U$
By definition of open set:

$\phi \sqbrk U$ is open in $\struct{A, d}$.
$\Box$

Sufficient Condition
Let $\phi \sqbrk U$ be open in $\struct{A, d}$.

By definition of open set:

$\forall s \in U: \exists \epsilon_s : \map {B_{\epsilon_s}} {\map \phi s}  \subseteq \phi \sqbrk U$
From Lemma 3:

$\forall s \in U: \exists \epsilon_s : \phi \sqbrk {\map {B_{\epsilon_s}} s} = \map {B_{\epsilon_s}} {\map \phi s}  \subseteq \phi \sqbrk U$
From Preimage of Subset is Subset of Preimage:

$\forall s \in U: \exists \epsilon_s : \phi^{-1} \sqbrk {\phi \sqbrk {\map {B_{\epsilon_s}} s}} \subseteq \phi^{-1} \sqbrk {\phi \sqbrk {U}}$
By definition of homeomorphism:

$\phi$ is an injection
From Preimage of Image of Subset under Injection equals Subset:

$\forall s \in U: \exists \epsilon_s : \map {B_{\epsilon_s}} s = \phi^{-1} \sqbrk {\phi \sqbrk {\map {B_{\epsilon_s}} s}} \subseteq \phi^{-1} \sqbrk {\phi \sqbrk {U}} = U$
By definition of open set:

$U$ is open in $\struct{S, d_\phi}$.
$\blacksquare$





