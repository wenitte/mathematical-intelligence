# 

Source: https://proofwiki.org/wiki/Cycle_does_not_Contain_Subcycles


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Write this in the context of cycles, not cycle graphsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $G$ be a cycle graph.
Then the only cycle graph that is a subgraph of $G$ is $G$ itself.


Proof
Aiming for a contradiction, suppose $G$ contains a subgraph $C$ such that:

$C$ is a cycle graph
$C \ne G$ is non-empty.
Then there exists some vertex $v$ that is not in $C$.
Let $u$ be any vertex of $C$.
Since $G$ is a cycle graph, it is connected.
Therefore there is a walk from $u$ to $v$ in $G$.
There must be some vertex $x$ that is the last vertex in $C$ along that walk.
Therefore, $x$ is adjacent to a vertex not in $C$.
Thus it has a degree of at least $3$.
But $G$ is a cycle graph and every vertex in a cycle graph has degree $2$.
The result follows by Proof by Contradiction.
$\blacksquare$





