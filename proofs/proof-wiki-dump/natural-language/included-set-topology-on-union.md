# 

Source: https://proofwiki.org/wiki/Included_Set_Topology_on_Union

Theorem
Let $T = \struct {S, \tau}$ be a topological space on a set $S$.
Let $\family {A_i}_{i \mathop \in I}$ be a family of subsets of $S$ indexed by the indexing set $I$:

$\forall i \in I: A_i \subseteq S$
Let $\forall i \in I: \map T {A_i} = \struct {S, \tau_{A_i} }$ be the included set spaces on $S$ by $A_i$.

Let:

$\forall i \in I: \map T {A_i} \ge T$
where $\map T {A_i} \ge T$ denotes that $\map T {A_i}$ is finer than $T$.
Then:

$\ds \map T {\bigcup A_i} \ge T$
where $\ds \map T {\bigcup A_i}$ is the included set space on $S$ by $\ds \bigcup_{i \mathop \in I} A_i$.


Proof
For ease of notation, define:

$A := \ds \bigcup_{i \mathop \in I} A_i$
and let $\tau_A$ denote the included set topology on $S$ by $A$.

Let $U \in \tau$ be nonempty.
As $\map T {A_i}$ is finer than $T$ it follows by definition that:

$\forall i \in I: \tau \subseteq \tau_{A_i}$
Thus:

$\forall i \in I: U \in \tau_{A_i}$
Hence for all $i$ there is a subset $Z_i \subseteq S$ of $S$, such that $U = A_i \cup Z_i$; that is:

$\ds U = \bigcup_{i \mathop \in I} \paren {A_i \cup Z_i} = \paren {\bigcup_{i \mathop \in I} A_i} \cup \paren {\bigcup_{i \mathop \in I} Z_i}$
where the latter equality follows from associativity and commutativity of set union.
That is:

$U = A \cup Z$
where:

$\ds Z = \paren {\bigcup_{i \mathop \in I} Z_i}$

Hence $U \in \tau_A$. by definition of the included set topology.

This comes down to $\tau \subseteq \tau_A$, and hence $\ds \map T {\bigcup A_i} \ge T$, by definition of a finer topology.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Exercise $1 \ \text{(c)}$




