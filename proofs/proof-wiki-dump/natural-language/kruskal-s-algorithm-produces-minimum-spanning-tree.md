# 

Source: https://proofwiki.org/wiki/Kruskal%27s_Algorithm_produces_Minimum_Spanning_Tree

Theorem
Kruskal's Algorithm produces a minimum spanning tree.


Proof
Let $N = \struct {V, E, f}$ be an undirected network.
Let $H$ be a subgraph of the underlying graph $G = \struct {V, E}$ of $N$.
Let $\ds \map f H = \sum_{e \mathop \in H} \map f e$.

Let $N$ be of order $p$.
Let $T$ be a spanning tree of $N$, created using Kruskal's Algorithm.
Then from Finite Connected Simple Graph is Tree iff Size is One Less than Order, $T$ has $p - 1$ edges.
Let the edges of $T$ be ordered $e_1, e_2, \ldots, e_{p - 1}$ according to the construction of Kruskal's Algorithm.
Then:

$\ds \map f t = \sum_{i \mathop = 1}^{p - 1} \map f {e_i}$

Let $T_0$ be a minimum spanning tree of $N$.
Suppose that $T_0$ and $T$ are not equal.
Then $T$ has one or more edges which are not in $T_0$.
Using the ordering on the edges of $T$ created above, let $e_i$ be the first edge of $T$ not in $T_0$.
By construction, $1 \le i \le p-1$.
Let $e_i$ be added to $T_0$, to obtain the graph $G_0$.
Let $e_i = u v$ where $u, v \in V$ are vertices of $N$
Then there exists a $u-v$ path $P$ in $T_0$.
Together with $e_i$ this makes a cycle $C$ in $G_0$.
Since $T$ contains no cycles, there must be an edge $e_0$ of $C$ which is not in $T$.
Thus the edge deletion $T'_0 = G_0 - e_0$ is also a spanning tree of $N$, and:

$\map f {T'_0} = \map f {T_0} + \map f {e_i} - \map f {e_0}$
But as $T_0$ is a minimum spanning tree:

$\map f {T_0} \le \map f {T'_0}$
So:

$\map f {T_0} - \map f {T'_0} \le 0$
But since:

$\map f {T_0} - \map f {T'_0} = \map f {e_0} - \map f {e_i}$
it follows that:
$\map f {e_0} \le \map f {e_i}$

However, the manner in which $T$ was constructed, $e_i$ is an edge of smallest value which can be added to $\set {e_1, e_2, \ldots, e_{i - 1} }$ without producing a cycle.
Also, if $e_0$ is added to $\set {e_1, e_2, \ldots, e_{i - 1} }$, again no cycle is produced.
Therefore $\map f {e_i} = \map f {e_0}$ and so $\map f {T'_0} = \map f {T_0}$.

Thus $T'_0$ is a minimum spanning tree which has one more edge in common with $T$ than $T_0$, that is, $e_i$.
The procedure can be repeated as many times as there are edges in $T_0$ which are not in $T$.
Finally the spanning tree $T$ is arrived at, which by the above is a minimum spanning tree.
Hence the result.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Theorem $4.3$




