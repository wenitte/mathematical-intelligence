# 

Source: https://proofwiki.org/wiki/Cycle_in_Balanced_Signed_Graph

Theorem
Let $G$ be a balanced signed graph.
Let $C$ be a cycle in $G$.
Then $C$ has an even number of negative edges.


Proof
Let $G$ be a balanced signed graph.
Since $G$ is balanced, we can colour the vertices black and white, say, so that every edge has a black and a white end.
Consider any cycle $C$ in $G$.
As we proceed around $C$, there is a change of colour when we traverse a negative edge.
Since this is a cycle, the last colour is the same as the first one.
So there must be an even number of colour changes.
So there must be an even number of negative edges in $C$.
$\blacksquare$





