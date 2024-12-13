# 

Source: https://proofwiki.org/wiki/Network_with_Positive_Integer_Mapping_is_Multigraph



Theorem
Let $N = \struct {V, E, w}$ be a network whose weights are all strictly positive integers.

Then $N$ can be represented as a multigraph.

Conversely, any multigraph can be expressed as a network whose weights are all strictly positive integers.


Proof
Network as Multigraph
Let $N = \struct {V, E, w}$ be a network, either directed or undirected.
Without loss of generality, suppose $N$ is undirected, and in the following argument allow the term edge to include arcs.
Let $e \in E$ be an edge of the underlying graph $\struct {V, E}$ of $N$.
Let $e = u v$, where $u, v \in V$ are vertices of the underlying graph $\struct {V, E}$ of $N$.
Let $n = \map w e$ be the weight of $e$.
By hypothesis, $n$ is a strictly positive integer.
Let $n$ edges be identified between $u$ and $v$.
Repeat this process for all edges of $N$.
The resulting object is a multigraph.


Multigraph as Network
Let $G = \struct {V, E}$ be a multigraph, where each element of $E$ may occur multiple times.
Let $e = u v$ where $e \in E$ and $u, v \in V$.
Let $\map m e$ be the multiplicity of $e$.
Then $m$ can be identified with a weight function from $w: E \to \Z_{>0}$.
Thus the network $N = \struct {V, E, w}$ can be created.
$\blacksquare$


Examples
Arbitrary Order 3 Network
Let $G = \struct {V, E}$ be the undirected graph defined as:

$V = \set {v_1, v_2, v_3}$
$E = \set {v_1 v_2, v_1 v_3, v_2 v_3}$

Let $w: E \to \R$ be the weight function defined as:

$w = \set {\tuple {v_1 v_2, 2}, \tuple {v_1 v_3, 1}, \tuple {v_2 v_3, 3} }$

Then the undirected network $\struct {G, w}$ can be represented diagrammatically in either of the forms shown below:




Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $1$: Mathematical Models: $\S 1.6$: Networks as Mathematical Models




