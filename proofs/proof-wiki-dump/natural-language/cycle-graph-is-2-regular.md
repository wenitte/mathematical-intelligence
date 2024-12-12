# 

Source: https://proofwiki.org/wiki/Cycle_Graph_is_2-Regular

Theorem
Let $G$ be a cycle graph.
Then $G$ is regular.


Proof
Let $G$ be a cycle graph.
By definition, a cycle graph is a graph which consists of a single cycle $C$.
By definition, a cycle is a circuit in which no vertex except the first (which is also the last) appears more than once.
By definition, a circuit is a closed trail with at least one edge.
By definition, a trail is a walk in which all edges are distinct.

Let $v$ be a vertex of $G$.
Then $v$ is a vertex of a closed walk.
Hence for every edge which is incident with $v$, there exists another edge which is also incident with $v$.
Suppose $v$ were odd.
Then at least one edge must appear at least twice in $C$.
But then $C$ would not be a trail.
Thus $v$ is even.
Suppose $v$ has degree zero.
Then there are no edges incident with $v$.
Hence $v$ is not on a closed walk.
Hence the degree of $v$ is greater than $0$.
Suppose $v$ has degree greater than $2$.
Then $v$ must be on a circuit in which $v$ appears more than once.
Hence that circuit is not a cycle
Hence $G$ is not a cycle graph.
Hence $v$ is of degree $2$.
The result follows.
$\blacksquare$





