# 

Source: https://proofwiki.org/wiki/Cycle_Graph_of_Order_2_is_Multigraph

Theorem
Let $C_2$ denote the cycle graph of order $2$.
Then $C_2$ is a multigraph.


Proof
By definition, the vertex set of $C_2$ is doubleton, $\set {v_1, v_2}$, say.
By definition of cycle graph, there is a circuit $v_1 v_2 v_1$.
That is:

there exists an edge which is incident to $v_1$ and $v_2$
there exists an edge which is incident to $v_2$ and $v_1$
That is, there are $2$ edges which are both incident to $v_1$ and $v_2$
Hence the result by definition of multigraph.
$\blacksquare$





