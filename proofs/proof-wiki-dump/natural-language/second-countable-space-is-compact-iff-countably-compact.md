# 

Source: https://proofwiki.org/wiki/Second-Countable_Space_is_Compact_iff_Countably_Compact



Theorem
Let $T = \struct {S, \tau}$ be a second-countable space.

Then $T$ is compact if and only if $T$ is countably compact.


Proof
Necessary Condition
We have that a compact space is countably compact (whether the space is second-countable or not).
$\Box$


Sufficient Condition
Let $T$ be countably compact.
Since $T$ is second-countable, we can choose a countable (analytic) basis $\BB$ for $\tau$.
Let $\CC$ be an open cover for $S$.

Define:

$\CC' = \set {B \in \BB: \exists C \in \CC: B \subseteq C}$
Then $\CC' \subseteq \BB$, and so $\CC'$ is countable.
By the definition of an analytic basis, we have $\BB \subseteq \tau$; since $\subseteq$ is a transitive relation, it therefore follows that $\CC' \subseteq \tau$.
From Equivalence of Definitions of Analytic Basis:

$\forall C \in \CC: \forall x \in C: \exists B \in \CC': x \in B$
That is, by the definition of set union:

$\ds \forall C \in \CC: C \subseteq \bigcup \CC'$
Hence, by Union is Smallest Superset:

$\ds S \subseteq \bigcup \CC \subseteq \bigcup \CC'$
Since $\subseteq$ is a transitive relation, it follows that $\CC'$ is an open cover for $S$.

Since $T$ is countably compact, there exists a finite subcover $\FF$ of $\CC'$ for $S$.
By the Principle of Finite Choice, there exists an indexed family $\family {C_B}_{B \mathop \in \FF}$ such that:

$\forall B \in \FF: B \subseteq C_B \in \CC$
Note that $\set {C_B: B \in \FF}$ is a finite subcover of $\CC$ for $X$.
Hence, $T$ is compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Countability Axioms and Separability




