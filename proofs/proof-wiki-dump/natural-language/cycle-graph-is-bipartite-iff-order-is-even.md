# 

Source: https://proofwiki.org/wiki/Cycle_Graph_is_Bipartite_iff_Order_is_Even



Theorem
Let $n \in \N$ be a natural number.
Let $C_n$ be the cycle graph of order $n$.

Then $C_n$ is a bipartite graph if and only if $n$ is even.


Proof
Let $V$ be the set of vertices of $C_n$.
Let the elements of $V$ be denoted $v_1, v_2, \ldots, v_n$.
Then by definition of cycle graph, by appropriate selection of subscripts, $C_n$ consists of one cycle $C$ that can be expressed as:

$C := \tuple {v_1 v_2 \ldots, v_n v_1}$
Let $v_k \in C_n$.
Then for $1 < k < n$, $v_k$ is adjacent to $v_{k - 1}$ and $v_{k + 1}$ and no other vertices of $C_n$.
We also have that:

$v_1$ is adjacent to $v_2$ and $v_n$
and by the same coin:

$v_n$ is adjacent to $v_{n - 1}$ and $v_1$.


Necessary Condition
Let $n$ be even.
Then we can partition $V$ into $A$ and $B$ such that:

$A = \set {V_k: k = 2 r: r \in \N}$
$B = \set {V_k: k = 2 r + 1: r \in \N}$
That is:

$A$ contains the vertices with even subscripts
$B$ contains the vertices with odd subscripts.
By construction, every edge of $C_n$ is incident to one vertices with even subscript and one vertices with odd subscript.
This also applies to the edge $v_1 v_n$, as $1$ is odd and $n$ is even.
Hence by definition $C_n$ is a bipartite graph.
$\Box$


Sufficient Condition
Let $C_n$ is a bipartite graph.
Let $V$ be partitioned into $A$ and $B$.
Without loss of generality, let $v_1 \in A$.
Then:

$v_2 \in B$
$v_3 \in A$
and so on, such that:

$v_k \in A \implies k = 2 r + 1$ for some $r \in \N$
$v_k \in B \implies k = 2 r$ for some $r \in \N$
That is:

$A$ contains all vertices with odd subscript
and:

$B$ contains all vertices with even subscript.

Aiming for a contradiction, suppose $n$ is odd.
For $1 < k < n$, each pair of adjacent vertices is joined by an edge which is incident to one vertices with even subscript and one vertices with odd subscript.
But the edge $v_1 v_n$ is incident to vertices which both have odd subscripts.
Hence $C_n$ is not bipartite.
It follows by Proof by Contradiction that $n$ is even.
$\blacksquare$


Examples
Cycle Graph $C_4$
The cycle graph of order $4$ is the complete bipartite graph $K_{2, 2}$.





