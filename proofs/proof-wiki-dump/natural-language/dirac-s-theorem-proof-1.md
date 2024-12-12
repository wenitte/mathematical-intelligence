# 

Source: https://proofwiki.org/wiki/Dirac%27s_Theorem/Proof_1

Theorem
Let $G$ be a connected simple graph with $n$ vertices such that $n > 3$.
Let the degree of each vertex be at least $\dfrac n 2$.
Then $G$ is Hamiltonian.


Proof
Let $P = p_1 p_2 \ldots p_k$ be the longest path in $G$.
If $p_1$ is adjacent to some vertex $v$ not in $P$, then the path  $v p_1 p_2 \ldots p_k$ would be longer than $P$, contradicting the choice of $P$.
The same argument can be made for $p_k$.
So both $p_1$ and $p_k$ are adjacent only to vertices in $P$.
Since $\map \deg {p_1} \ge \dfrac n 2$ and $p_1$ cannot be adjacent to itself, $k \ge \dfrac n 2 + 1$.


Claim
There is some value of $j \in \set {1, 2, \ldots, k}$ such that:

$p_j$ is adjacent to $p_k$
and:

$p_{j + 1}$ is adjacent to $p_1$.
Aiming for a contradiction, suppose that the claim is not true.
Then since all vertices adjacent to $p_1$ or $p_k$ lie on $P$, there must be at least $\map \deg {p_1}$ vertices on $P$ not adjacent to $p_k$.
Since all the vertices adjacent to $p_k$ and $p_k$ itself also lie on $P$, the path must have at least $\map \deg {p_1} + \map \deg {p_k} + 1 \ge n + 1$ vertices.
But $G$ has only $n$ vertices: a contradiction.

This gives a cycle $C = p_{j + 1} p_{j + 2} \ldots p_k p_j p_{j - 1} \ldots p_2 p_1 p_{j + 1}$.
Aiming for a contradiction, suppose $G \setminus C$ is non-empty.
Then since $G$ is connected, there must be a vertex $v \in G \setminus C$ adjacent to some $p_i$.
So the path from $v$ to $p_i$ and then around $C$ to the vertex adjacent to $p_i$ is longer than $P$, contradicting the definition of $P$.

Therefore all vertices in $G$ are contained in $C$, making $C$ a Hamilton cycle.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.2$: The Salesman's Problem: An Introduction to Hamiltonian Graphs: Theorem $3.4$




