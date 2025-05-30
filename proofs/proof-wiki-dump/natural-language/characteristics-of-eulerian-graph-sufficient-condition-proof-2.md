# 

Source: https://proofwiki.org/wiki/Characteristics_of_Eulerian_Graph/Sufficient_Condition/Proof_2



Theorem
Let $G$ be a finite (undirected) graph which is connected
Let each vertex of $G$ be even.

Then $G$ is an Eulerian graph.

Proof 1
Suppose that an (undirected) graph $G$ is connected and its vertices all have even degree.
If there is more than one vertex in $G$, then each vertex must have degree greater than $0$.

Begin at a vertex $v$.
From Graph with Even Vertices Partitions into Cycles, we know that $v$ will be on at least one cycle.
Since $G$ is connected, there must be an edge $\set {v, v_1}$ for some vertex $v_1 \ne v$.
Since $v_1$ has even degree greater than $0$, there is an edge $\set {v_1, v_2}$ where $v_2 \ne v_1$.
These two edges make a trail from $v$ to $v_2$.
Continue this trail, leaving each vertex on an edge that was not previously used, until returning to $v$.
This is always possible, because $v$ is on a cycle.
Call the circuit formed by this process $C_1$.

If $C_1$ covers all the edges of $G$, then the proof is complete.
Otherwise, remove all the edges that contribute to $C_1$ from $G$, leaving the graph $G_0$.
The remaining vertices are still even, and since $G$ is connected there is some vertex $u$ in both $G_0$ and $C_1$.
Repeat the same process as before, beginning at $u$.
The new circuit, $C_2$, can be added to $C_1$ by starting at $v$, moving along $C_1$ to $u$, travelling around $C_2$ back to $u$ and then along the remainder of $C_1$ back to $v$.

Repeat this process, adding each new circuit found to create a larger circuit.
Since $G$ is finite, this process must end at some point, and the resulting circuit will be an Eulerian circuit.
$\blacksquare$


Proof 2
Suppose that an (undirected) graph $G$ is connected and its vertices all have even degree.
From Graph with Even Vertices Partitions into Cycles, we can split $G$ into a number of cycles $\mathbb S = C_1, C_2, \ldots, C_k$.
Start at any vertex $v$ on cycle $C_1$ and traverse its edges until we encounter a vertex of another cycle of $\mathbb S$, $C_2$ say.
The edges of $C_2$ are then traversed, and then the traversal of $C_1$ is resumed when it is returned to.
As $C_1$ is traversed, the journey is interrupted so as to traverse any other cycles of $\mathbb S$ in the same way that $C_2$ is traversed.
Eventually the beginning of $C_1$ is reached, which is vertex $v$.
Thus there exists a circuit which includes $C_1$ and at least one other cycle (unless $C_1$ is the only cycle), as $G$ is connected.

If this circuit contains all the cycles $C_1, C_2, \ldots, C_k$, the required Eulerian circuit has been found.
If not, then the circuit just generated is traversed.
Because $G$ is connected, other cycles in $\mathbb S$ will be encountered.
These, again, are traversed as they are encountered.
This process is continued till all the cycles have been included in the circuit.
At this stage, the required Eulerian circuit has been found.
Hence $G$ is Eulerian.
$\blacksquare$


Proof
Suppose that an (undirected) graph $G$ is connected and its vertices all have even degree.
From Graph with Even Vertices Partitions into Cycles, we can split $G$ into a number of cycles $\mathbb S = C_1, C_2, \ldots, C_k$.
Start at any vertex $v$ on cycle $C_1$ and traverse its edges until we encounter a vertex of another cycle of $\mathbb S$, $C_2$ say.
The edges of $C_2$ are then traversed, and then the traversal of $C_1$ is resumed when it is returned to.
As $C_1$ is traversed, the journey is interrupted so as to traverse any other cycles of $\mathbb S$ in the same way that $C_2$ is traversed.
Eventually the beginning of $C_1$ is reached, which is vertex $v$.
Thus there exists a circuit which includes $C_1$ and at least one other cycle (unless $C_1$ is the only cycle), as $G$ is connected.

If this circuit contains all the cycles $C_1, C_2, \ldots, C_k$, the required Eulerian circuit has been found.
If not, then the circuit just generated is traversed.
Because $G$ is connected, other cycles in $\mathbb S$ will be encountered.
These, again, are traversed as they are encountered.
This process is continued till all the cycles have been included in the circuit.
At this stage, the required Eulerian circuit has been found.
Hence $G$ is Eulerian.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: See where this goes in the flowIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: Gary Chartrand: Introductory Graph Theory: $\S 3.1$: Theorem $3.2$




