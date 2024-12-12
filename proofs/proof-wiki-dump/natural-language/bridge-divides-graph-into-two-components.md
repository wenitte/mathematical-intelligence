# 

Source: https://proofwiki.org/wiki/Bridge_divides_Graph_into_Two_Components

Theorem
Let $G$ be a connected graph.
Let $e$ be a bridge of $G$.

Then the edge deletion $G - e$ contains exactly $2$ components.


Proof
Let $G$ be a connected graph and $e = u v$ be a bridge of $G$.
By definition of bridge, $G - e$ has to be of at least $2$ components.

Aiming for a contradiction, suppose $G - e$ were of more than $2$ components.
Let $G_1, G_2, G_3$ be $3$ of those components such that $u \in G_1$ and $v \in G_2$.
Note that $u$ and $v$ cannot both be in the same component or $e$ would not be a bridge.
Now let $e$ be replaced so as to connect $G_1$ and $G_2$ again.
Then $G_3$ would still be disconnected from the rest of $G$, and $G$ itself would therefore be a disconnected graph.
From this contradiction it follows that $G - e$ can only be of two components.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 2.4$: Cut-Vertices and Bridges




