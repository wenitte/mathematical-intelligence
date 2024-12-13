# 

Source: https://proofwiki.org/wiki/Metric_Space_is_Lindel%C3%B6f_iff_Second-Countable



Theorem
Let $M = \struct {A, d}$ be a metric space.
Then $M$ is Lindelöf if and only if $M$ is second-countable.


Proof
Sufficient Condition
We have from Second-Countable Space is Lindelöf that second-countability implies Lindelöf in all topological spaces, regardless of whether they are metric spaces or not.
$\Box$


Necessary Condition
Suppose $M = \struct {A, d}$ is Lindelöf.
Let us define the open covers on $A$:

$\CC_k = \set {\map {N_{1/k} } x: x \in S}$
for all $k \in \N_{>0}$.
As $M$ is Lindelöf, each one of these has a countable subcover.
The union of all these subcovers is a countable basis for the topology on $A$.
Hence the result, by definition of second-countable space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces




