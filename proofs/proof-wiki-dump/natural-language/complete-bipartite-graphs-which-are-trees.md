# 

Source: https://proofwiki.org/wiki/Complete_Bipartite_Graphs_which_are_Trees

Theorem
Let $G = \struct {A \mid B, E} =: K_{m, n}$ be the complete bipartite graph with $m$ vertices in $A$ and $n$ vertices in $B$.
Then:

$K_{0, 0}$ is a tree
$K_{1, n}$ and $K_{n, 1}$ is a tree for all $n$
and no other complete bipartite graphs are trees.


Proof
We note from Null Graph is Complete Bipartite Graph and Null Graph is Tree that $K_{0, 0}$ is a complete bipartite graph that is also a tree.

Next we note that the order of $K_{1, n}$ is $n + 1$.
Indeed, there is $1$ vertex in $A$ and $n$ vertices in $B$, for a total of $n + 1$.

Then we note that the size of $K_{1, n}$ is $n$.
Indeed, each vertex in $B$ has exactly $1$ edge to the $1$ vertex in $A$.
By the definition of complete bipartite graph, that accounts for all edges in $G$.
From Finite Connected Simple Graph is Tree iff Size is One Less than Order it follows that $K_{1, n}$ is a tree.

Similarly:

the order of $K_{n, 1}$ is $n + 1$
the size of $K_{n, 1}$ is $n$
and again, $K_{n, 1}$ is a tree

Now consider the complete bipartite graph $G = \struct {A \mid B, E} = K_{0, n}$ where $n > 1$.
Let $b_1, b_2 \in B$.
As $K_{0, n}$ is bipartite, $b_1$ and $b_2$ can be adjacent to vertices in $A$ only.
But $A = \O$ and so $b_1$ and $b_2$ are isolated.
Hence $b_1$ and $b_2$ are not connected.
Hence by definition $G$ is not a connected graph
So by definition $K_{0, n}$ is not a tree.
By mutatis mutandis it follows that $K_{m, 0}$ is also not a tree for $m > 1$.

Now consider the complete bipartite graph $K_{m, n}$ where $m, n > 1$.
We recall that $K_{m, n} := G = \struct {A \mid B, E}$ such that every vertex in $A$ is adjacent to every vertex in $B$.
As $m, n > 1$ we have that:














\(\ds \exists a_1, a_2\)

\(\in\)







\(\ds A\)




















\(\ds \exists b_1, b_2\)

\(\in\)







\(\ds B\)









Hence we can find a cycle in $G$:

$\tuple {a_1, b_1, a_2, b_2, a_1}$
As a tree is defined as a (connected) graph with no cycles, it follows that such a $K_{m, n}$ is not a tree.

Hence the result.
$\blacksquare$





