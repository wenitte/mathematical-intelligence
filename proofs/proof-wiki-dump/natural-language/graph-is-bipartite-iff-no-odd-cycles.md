# 

Source: https://proofwiki.org/wiki/Graph_is_Bipartite_iff_No_Odd_Cycles



Theorem
Let $G$ be an undirected graph.

Then $G$ is bipartite if and only if it has no odd cycles.


Proof
Sufficient Condition
Let $G = \struct {V, E}$ be bipartite.
So, let $V = A \cup B$ such that $A \cap B = \O$ and that all edges $e \in E$ are such that $e$ is of the form $\set {a, b}$ where $a \in A$ and $b \in B$.
(This is the definition of a bipartite graph.)

Suppose $G$ has (at least) one odd cycle $C$.
Let the length of $C$ be $n$.
Let $C = \tuple {v_1, v_2, \ldots, v_n, v_1}$.
Without loss of generality, let $v_1 \in A$. It follows that $v_2 \in B$ and hence $v_3 \in A$, and so on.
Hence we see that $\forall k \in \set {1, 2, \ldots, n}$, we have:

$v_k \in \begin{cases}
A : & k \text{ odd} \\
B : & k \text{ even}
\end{cases}$
But as $n$ is odd, $v_n \in A$.
But $v_1 \in A$, and $v_n v_1 \in C_n$.
So $v_n v_1 \in E$ which contradicts the assumption that $G$ is bipartite.
Hence if $G$ is bipartite, it has no odd cycles.
$\Box$


Necessary Condition
It is enough to consider $G$ as being connected, as otherwise we could consider each component separately.

Suppose $G$ has no odd cycles.
Choose any vertex $v \in G$.
Divide $G$ into two sets of vertices like this:

Let $A$ be the set of vertices such that the shortest path from each element of $A$ to $v$ is of odd length
Let $B$ be the set of vertices such that the shortest path from each element of $B$ to $v$ is of even length.
Then $v \in B$ and $A \cap B = \O$.

Suppose $a_1, a_2 \in A$ are adjacent.
Then there would be a closed walk of odd length $\tuple {v, \ldots, a_1, a_2, \ldots, v}$.
But from Graph containing Closed Walk of Odd Length also contains Odd Cycle, it follows that $G$ would then contain an odd cycle.
This contradicts our initial supposition that $G$ contains no odd cycles.
So no two vertices in $A$ can be adjacent.

By the same argument, neither can any two vertices in $B$ be adjacent.

Thus $A$ and $B$ satisfy the conditions for $G = \struct {A \cup B, E}$ to be bipartite.
$\blacksquare$





