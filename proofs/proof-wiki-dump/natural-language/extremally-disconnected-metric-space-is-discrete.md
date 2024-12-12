# 

Source: https://proofwiki.org/wiki/Extremally_Disconnected_Metric_Space_is_Discrete

Theorem
Let $M = \struct {A, d}$ be a metric space which is extremally disconnected.
Then $M$ is the discrete topology.


Proof
Let $M = \struct {A, d}$ be extremally disconnected.
Let $p \in A$.
As $M$ is a metric space, $\set p$ can be expressed as:

$\set p = \ds \bigcap_{n \mathop \in \N_{>0} } \paren {\map {B_{1 / n} } p}^-$
where:

$\map {B_{1 / n} } p$ denotes the open $1 / n$-ball of $p$
$\paren {\map {B_{1 / n} } p}^-$ denotes the closure of $\map {B_{1 / n} } p$
That is, as the intersection of the closures of the open $1 / n$-ball of $p$ for all non-zero natural numbers.
Now let:

$\ds U = \bigcup_{n \mathop \in \N_{>0} } \map {B_{1 / 2 n} } p \setminus \paren {\map {B_{1 / \paren {2 n + 1} } } p}^-$
Then either $U$ or the complementary set of annuli is an open set which has $p$ as a non-interior limit point provided $\set p$ is not open.


This article, or a section of it, needs explaining.In particular: Take another run at that last sentence, it needs amplification.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So if $M$ is not the discrete topology, it cannot be extremally disconnected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces




