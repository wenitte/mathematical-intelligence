# 

Source: https://proofwiki.org/wiki/Included_Set_Topology_on_Finite_Intersection

Theorem
Let $T = \struct {S, \tau}$ be a topological space on a set $S$.
Let $A_1, A_2, \ldots, A_n$ be a finite set of subsets of $S$:

$\forall i \in \closedint 1 n: A_i \subseteq S$
Let $\forall i \in \closedint 1 n: \map T {A_i} = \struct {S, \tau_{A_i} }$ be the included set spaces on $S$ by $A_i$.

Let:

$\forall i \in \closedint 1 n: \map T {A_i} \le T$
where $\map T {A_i} \le T$ denotes that $\map T {A_i}$ is coarser than $T$.
Then:

$\ds \map T {\bigcap A_i} \le T$
where $\ds \map T {\bigcap A_i}$ is the included set space on $S$ by $\ds \bigcap_{i \mathop = 1}^n A_i$.


Proof
For ease of notation, define:

$A := \ds \bigcap_{i \mathop = 1}^n A_i$
and let $\tau_A$ denote the included set topology on $S$ by $A$.

Let $U \in \tau_A$ be nonempty.
Then by definition, $A \subseteq U$.
Hence there is a subset $Z \subseteq S$ of $S$, such that $U = A \cup Z$; that is:

$U = \ds \paren {\bigcap_{i \mathop = 1}^n A_i} \cup Z = \bigcap_{i \mathop = 1}^n \paren {A_i \cup Z}$
where the latter equality follows from Union Distributes over Intersection.

For every $i \in \closedint 1 n$, one has $A_i \cup Z \in \tau_{A_i}$ by definition of included set topology.
Further, by assumption, $\map T {A_i} \le T$, that is $\tau_{A_i} \subseteq \tau$.
It follows that $A_i \cup Z \in \tau$ for all $i \in \closedint 1 n$.
Hence $U = \ds \bigcap_{i \mathop = 1}^n \paren {A_i \cup Z}$ is in $\tau$, because $\tau$ is a topology.

This comes down to:

$\tau_A \subseteq \tau$
Hence by definition of coarser topology:

$\map T {\bigcap A_i} \le T$
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Exercise $1 \ \text{(b)}$




