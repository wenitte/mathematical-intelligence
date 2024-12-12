# 

Source: https://proofwiki.org/wiki/Edge_is_Bridge_iff_in_All_Spanning_Trees



Theorem
Let $G$ be a simple graph.
Let $e$ be an edge of $G$.

Then $e$ is a bridge in $G$ if and only if $e$ belongs to every spanning tree for $G$.
 

Proof
Necessary Condition
Let $e$ be a bridge.
That is, suppose the edge deletion $G - e$ is disconnected.

Let $T$ be an arbitrary spanning tree for $G$.
By definition $T$ is a connected subgraph of $G$.
If $T$ did not contain $e$, then it would also be a subgraph of $G - e$.
This contradicts the fact that $G - e$ is disconnected.
Therefore $e$ is in $T$.
$\Box$


Sufficient Condition
Suppose $T$ is a spanning tree for $G$.
Suppose that $T$ does not contain $e$.
Then $T$ is a subgraph of the edge deletion $G - e$.
Since $T$ is by definition connected, so is $G - e$.
Hence $e$ is not a bridge.
$\blacksquare$





