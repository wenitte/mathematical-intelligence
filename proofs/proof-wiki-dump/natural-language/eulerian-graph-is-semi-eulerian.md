# 

Source: https://proofwiki.org/wiki/Eulerian_Graph_is_Semi-Eulerian

Theorem
Let $G$ be an Eulerian graph.
Then $G$ is also a semi-Eulerian graph.


Proof
Recall the definition of Eulerian graph:
A loop-multigraph or loop-multidigraph is called Eulerian if and only if it contains an Eulerian circuit.

Recall the definition of semi-Eulerian graph:
A graph is called semi-Eulerian if and only if it contains an Eulerian trail.

So, let $G$ be an Eulerian graph.
Let $C$ be an Eulerian circuit for $G$.
From Eulerian Circuit is Eulerian Trail, $C$ is also an Eulerian trail for $G$. 
Thus $G$ has an Eulerian trail.
The result follows by definition of semi-Eulerian graph.
$\blacksquare$





