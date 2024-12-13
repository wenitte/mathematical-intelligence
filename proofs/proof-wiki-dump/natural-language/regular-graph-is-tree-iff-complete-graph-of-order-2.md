# 

Source: https://proofwiki.org/wiki/Regular_Graph_is_Tree_iff_Complete_Graph_of_Order_2



Theorem
Let $G$ be a non-edgeless regular graph.

Then $G$ is a tree if and only if $G$ is $K_2$, the complete graph of order $2$.


Proof
Necessary Condition
Let $G$ be a non-edgeless regular graph which is also a tree.
From Finite Tree has Leaf Nodes it follows that $G$ has at least two vertices of degree $1$.
Therefore, for $G$ to be regular it need to be $1$-regular.

Suppose $G$ has $3$ or more vertices.
Let $u, v, w$ be such vertices of $G$.
Suppose each of $\set {u, v}$, $\set {v, w}$ and $\set {u, w}$ were adjacent.
Then there would be a cycle in $G$: $\tuple {u, v, w, u}$ and so $G$ by definition would not be a tree.
So at least one pair $\set {u, v}$, $\set {v, w}$ and $\set {u, w}$ is not adjacent.
Without loss of generality suppose this pair is $\set {u, v}$.
By definition, a tree is connected.
Therefore there exists a path $P$ between $u$ and $v$.
As $u$ and $v$ are not adjacent, there exists another vertex $y$ of $G$ through which $P$ passes.
In order for this to be the case, the degree of $y$ needs to be greater than $1$.
It follows that $G$ can not be $1$-regular.
So to be regular, $G$ can contain only $2$ vertices.
By Finite Connected Simple Graph is Tree iff Size is One Less than Order it follows that $G$ contains $2$ vertices connected together by a single edge.
By definition, this is the complete graph of order $2$.
$\Box$


Sufficient Condition
$K_2$, the complete graph of order $2$, consists of $2$ vertices connected together by a single edge.
From Complete Graph is Regular it follows that $K_2$ is a non-edgeless regular graph.
From Circuit of Simple Graph has Three Edges or More it follows that $K_2$ contains no circuits.
It follows by definition that $K_2$ is a tree.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Problem $3$




