# 

Source: https://proofwiki.org/wiki/Graph_with_Even_Vertices_Partitions_into_Cycles

Theorem
Let $G = \struct {V, E}$ be a graph whose vertices are all even.
Then its edge set $E$ can be partitioned into cycles, no two of which share an edge.

The converse also holds: a graph which can be partitioned into cycles must have all its vertices even.


Proof
Let $G = \struct {V, E}$ be a graph whose vertices are all even.

If there is more than one vertex in $G$, then each vertex must have degree greater than $0$.

Begin at any vertex $u$.
Since the graph is connected (if the graph is not connected then the argument will be applied to separate components), there must be an edge $\set {u, u_1}$ for some vertex $u_1 \ne u$.
Since $u_1$ has even degree greater than $0$, there is an edge $\set {u_1, u_2}$.
These two edges make a trail from $u$ to $u_2$.
Continue this trail, leaving each vertex on an edge that was not previously used, until we reach a vertex $v$ that we have met before.
(Note: $v$ may or may not be the same vertex as $u$. It does not matter either way.)
The edges of the trail between the two occurrences of $v$ must form a cycle.
Call the cycle formed by this process $C_1$.

If $C_1$ covers all the edges of $G$, the proof is complete.
Otherwise, remove the edges forming $C_1$ from the graph, leaving the graph $G_1$.
All the vertices in $G_1$ are still even.
So pick some vertex $u'$ in $G_1$.
Repeat the same process as before, starting with an edge $\set {u', u'_1}$.
By the same argument, we can generate a new cycle $C_2$, which has no edges in common with $C_1$.
If $C_2$ covers all the rest of the edges of $G$, then we are done.
Otherwise, remove the edges forming $C_2$ from the graph, leaving the graph $G_2$, which again contains only even vertices.

We continue in this way until we have used up all the edges of $G$.
By this time we have a number of cycles, $C_1, C_2, \ldots, C_k$ which between them contain all the edges of $G$ but no two of them have an edge in common.
$\blacksquare$

The converse is trivial:
All the vertices of a cycle by definition are  even.
So if we were to take all these cycles and add them to the graph in turn, each vertex would increase its order by an even number.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.1$: The Königsberg Bridge Problem: An Introduction to Eulerian Graphs: Problem $15$




