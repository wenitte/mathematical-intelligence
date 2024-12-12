# 

Source: https://proofwiki.org/wiki/Characteristics_of_Traversable_Graph



Theorem
A finite loop-multigraph is traversable if and only if it is connected and no more than two vertices are odd.

An Eulerian trail which is not an Eulerian circuit must start and end at an odd vertex.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: this can be presented in a neater wayYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $G$ be a graph.
Suppose all the vertices are even, that is, there are no odd vertices.
Then $G$ is Eulerian, and the result holds.
Similarly, by the same result, if $G$ is Eulerian, it is by definition traversable.
So the question of graphs all of whose vertices are even is settled.


Sufficient Condition
Suppose $G$ is a connected graph for which exactly two vertices $u, v$ are odd.
Let $G'$ be the graph formed by adding the edge $u v$.
Note that if there is already an edge $u v$ in $G$, that will mean there is now more than one edge $u v$ in $G'$.
Thus $G'$ will then be a multigraph or loop-multigraph, and $uv$ a multiple edge.

Then $G'$ will have all its vertices even, and thus by the above result be Eulerian and by definition traversable.
Such an Eulerian circuit that traverses $G'$ can be written, for example, $P' = \tuple {v, w, x, \ldots, t, u, v}$.
Let us then remove the final edge $u v$ from $P'$ to get the path $P = \tuple {v, w, x, \ldots, t, u}$.
It follows that the path $P = \tuple {v, w, x, \ldots, t, u}$ is a path in $G$ which includes all edges in $G$.
Hence $P$ traverses $G$ and so $G$ is traversable.

We note that $u$ and $v$ are the odd vertices of $G$.


Necessary Condition
Suppose a graph $G$ is traversable.
Then it has a Eulerian trail $P$.
If $P$ is a circuit, then $G$ is Eulerian and therefore has all even vertices.

Now, suppose $P = \tuple {v, w, x, \ldots, t, u}$ is not a circuit.
Let $G'$ be the graph formed by adding the edge $uv$.
Then the path $P' = \tuple {v, w, x, \ldots, t, u, v}$ is an Eulerian circuit and so $G$ is Eulerian.
Hence all the vertices of $G'$ are even.
So the degrees of vertices $u$ and $v$ in $G$ (and no other) are odd.

Again, we note that $u$ and $v$ are the odd vertices of $G$.

Hence the result.
$\blacksquare$


Historical Note
This result was demonstrated by Leonhard Paul Euler.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.1$: The Königsberg Bridge Problem: An Introduction to Eulerian Graphs: Theorem $3.3$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Eulerian graph
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Eulerian graph
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): traversable graph




