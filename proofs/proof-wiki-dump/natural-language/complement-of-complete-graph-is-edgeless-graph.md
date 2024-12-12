# 

Source: https://proofwiki.org/wiki/Complement_of_Complete_Graph_is_Edgeless_Graph

Theorem
Let $K_n$ denote the complete graph of order $n$.
Then the complement of $K_n$ is the $n$-edgeless graph $N_n$.


Proof
By definition of complete graph, each vertex of $K_n$ is adjacent to every other vertex of $K_n$.
Let $\overline {K_n}$ denote the complement of $K_n$.
Let $v$ be a vertex of $\overline {K_n}$.
By definition of complement, $v$ is adjacent to all the vertices of $\overline {K_n}$ that it is not in $K_n$.
But that means $v$ is adjacent to no vertices of $\overline {K_n}$.
That means $v$ is a $0$-regular graph.
The result follows from Graph is 0-Regular iff Edgeless.
$\blacksquare$


Sources
Weisstein, Eric W. "Empty Graph." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/EmptyGraph.html




