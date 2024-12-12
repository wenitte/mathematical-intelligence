# 

Source: https://proofwiki.org/wiki/Edgeless_Graph_of_Order_n_has_n_Components

Theorem
Let $N_n$ denote the edgeless graph with $n$ vertices.
Then $N_n$ has $n$ components.


Proof
Because there are $n$ vertices in $N_n$, it cannot have more than $n$ components.
Aiming for a contradiction, suppose $N_n$ has fewer than $n$ components.
That would mean that at least $2$ vertices of $N_n$ are connected.
But to be connected, they need to be joined by at least one edge.
But that contradicts the fact that $N_n$ has no edges.
Hence by Proof by Contradiction it is not possible for $N_n$ to have fewer than $n$ components.
Thus it must be the case that $N_n$ has exactly $n$ components.
$\blacksquare$





