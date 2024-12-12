# 

Source: https://proofwiki.org/wiki/Complete_Bipartite_Graphs_which_are_Regular

Theorem
Let $G = \struct {A \mid B, E} =: K_{m, n}$ be the complete bipartite graph with $m$ vertices in $A$ and $n$ vertices in $B$.
Then:

$K_{n, n}$ is $n$-regular for all $n$
$K_{n, 0}$ and $K_{0, n}$ are $0$-regular for all $n$
and no other complete bipartite graphs are regular.


Proof
First consider $K_{n, 0}$ and $K_{0, n}$ for $n \in \N$.
From Condition for Complete Bipartite Graph to be Edgeless, every vertex in $K_{n, 0}$ and $K_{0, n}$ has degree $0$.
From Graph is 0-Regular iff Edgeless, $K_{n, 0}$ and $K_{0, n}$ are $0$-regular.

Now consider $K_{m, n}$ where $m, n > 0$.
By definition of complete bipartite graph:

every vertex in $A$ is adjacent to every vertex in $B$
and so:

every vertex in $B$ is adjacent to every vertex in $A$.

Hence:

every vertex in $A$ has degree $m$
every vertex in $B$ has degree $n$

So when $m, n > 0$, every vertex in $K_{m, n}$ has the same degree if and only if $m = n$.
Hence the result.
$\blacksquare$





