# 

Source: https://proofwiki.org/wiki/Finite_Connected_Simple_Graph_with_Size_One_Less_than_Order_has_no_Circuits

Theorem
Let $G$ be a finite connected simple graph of order $n$.
Let the size of $T$ be $n - 1$.

Then $G$ has no circuits.


Proof
Let $G$ be a connected simple graph of order $n$ with $n - 1$ edges.
By definition:

the order of a finite tree is how many nodes it has
the size of a finite tree is how many edges it has.

Aiming for a contradiction, suppose $G$ contains at least one circuit.
From Condition for Edge to be Bridge:

there exists at least one edge $e$ in $G$ which is not a bridge.
Let $G' := G \setminus \set e$ be $G$ after the edge deletion of $e$.
As $e$ is not a bridge, $G'$ is a graph which is:

connected
has $n$ vertices
$n - 2$ edges.

Let us try and construct this connected simple graph $G'$ with $n$ vertices and $n - 2$ edges.
We start with the edgeless graph $N_n$, and add edges till $G'$ is connected.
We pick any two vertices of $N_n$, label them $u_1$ and $u_2$ for convenience, and use one edge to connect them, labelling that edge $e_1$.
We pick any other vertex, label it $u_3$, and use one edge to connect it to either $u_1$ or $u_2$, labelling that edge $e_2$.
We pick any other vertex, label it $u_4$, and use one edge to connect it to either $u_1, u_2$ or $u_3$, labelling that edge $e_3$.
We continue in this way, until we pick a vertex, label it $u_{n - 1}$, and use one edge to connect it to either $u_1, u_2, \ldots, u_{n - 2}$, labelling that edge $e_{n - 2}$.
That was the last of our edges, and the last vertex still has not been connected.

Therefore a simple graph with $n$ vertices and $n - 2$ edges cannot be connected.
That is, $G'$ cannot exist.
This contradicts our supposition that $G$ contains at least one circuit.
Hence, by Proof by Contradiction, $G$ has no circuits.
$\blacksquare$





