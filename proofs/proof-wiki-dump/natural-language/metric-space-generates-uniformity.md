# 

Source: https://proofwiki.org/wiki/Metric_Space_generates_Uniformity

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\UU$ be the set of sets defined as:

$\UU := \set {u \in A \times A: \exists \epsilon \in \R_{>0}: u_\epsilon \subseteq u}$
where:

$\R_{>0}$ is the set of strictly positive real numbers
$u_\epsilon$ is defined as:
$u_\epsilon := \set {\tuple {x, y}: \map d {x, y} < \epsilon}$

Then $\UU$ is a uniformity on $A$ which generates a uniform space with the same topology as the topology induced by $d$.


Proof
From definition it is clear that a metric space is a pseudometric space.
The result then follows from Pseudometric Space generates Uniformity.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Metric Uniformities




