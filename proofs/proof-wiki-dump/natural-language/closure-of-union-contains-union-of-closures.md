# 

Source: https://proofwiki.org/wiki/Closure_of_Union_contains_Union_of_Closures

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Let $\mathbb H$ be a set of subsets of $S$.
That is, let $\mathbb H \subseteq \powerset S$ where $\powerset S$ denotes the power set of $S$.

Then the union of the closures of the elements of $\mathbb H$ is a subset of the closure of the union of $\mathbb H$:

$\ds \bigcup_{H \mathop \in \mathbb H} \map \cl H \subseteq \map \cl {\bigcup_{H \mathop \in \mathbb H} H}$


Proof
Let $\ds K = \bigcup_{H \mathop \in \mathbb H} \map \cl H$ and $\ds L = \bigcup_{H \mathop \in \mathbb H} H$.
We have:

$\forall H \in \mathbb H: H \subseteq L$
so from Topological Closure of Subset is Subset of Topological Closure:

$\map \cl H \subseteq \map \cl L$
It follows from Union is Smallest Superset: General Result that:

$K \subseteq \map \cl L$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (next): Problems: Section $1: \ 1$




