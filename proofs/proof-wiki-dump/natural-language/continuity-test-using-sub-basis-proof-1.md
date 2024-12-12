# 

Source: https://proofwiki.org/wiki/Continuity_Test_using_Sub-Basis/Proof_1

Theorem
Let $\struct {X_1, \tau_1}$ and $\struct {X_2, \tau_2}$ be topological spaces.
Let $f: X_1 \to X_2$ be a mapping.
Let $\SS$ be an analytic sub-basis for $\tau_2$.
Suppose that:

$\forall S \in \SS: f^{-1} \sqbrk S \in \tau_1$
where $f^{-1} \sqbrk S$ denotes the preimage of $S$ under $f$.

Then $f$ is continuous.


Proof
Define:

$\ds \BB = \set {\bigcap \AA: \AA \subseteq \SS, \AA \text{ is finite} } \subseteq \powerset {X_2}$
Let $B \in \BB$.
Then there exists a finite subset $\AA \subseteq \SS$ such that:

$\ds B = \bigcap \AA$
Hence:














\(\ds f^{-1} \sqbrk B\)

\(=\)







\(\ds f^{-1} \sqbrk {\bigcap \AA}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{S \mathop \in \AA} f^{-1} \sqbrk S\)





Preimage of Intersection under Mapping: General Result














\(\ds \)

\(\in\)







\(\ds \tau_1\)





General Intersection Property of Topological Space




Define:

$\ds \tau = \set {\bigcup \AA: \AA \subseteq \BB} \subseteq \powerset {X_2}$
By the definition of an analytic sub-basis, we have $\tau_2 \subseteq \tau$.
Let $U \in \tau_2$.
Then $U \in \tau$; therefore:

$\ds \exists \AA \subseteq \BB: U = \bigcup \AA$
Hence:














\(\ds f^{-1} \sqbrk U\)

\(=\)







\(\ds f^{-1} \sqbrk {\bigcup \AA}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{S \mathop \in \AA} f^{-1} \sqbrk S\)





Preimage of Union under Mapping: General Result














\(\ds \)

\(\in\)







\(\ds \tau_1\)





because $\forall B \in \BB: f^{-1} \sqbrk B \in \tau_1$, and by Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets applied to $\tau_1$



That is, $f$ is continuous.
$\blacksquare$





