# 

Source: https://proofwiki.org/wiki/Odd_Order_Complete_Graph_is_Eulerian

Theorem
Let $K_n$ be the complete graph of $n$ vertices.

Then $K_n$ is Eulerian if and only if $n$ is odd.

If $n$ is even, then $K_n$ is traversable iff $n = 2$.


Proof
From the definition, the complete graph $K_n$ is $n-1$-regular.
That is, every vertex of $K_n$ is of degree $n-1$.

Suppose $n$ is odd. Then $n-1$ is even, and so $K_n$ is Eulerian.
Suppose $n$ is even. Then $n-1$ is odd.
Hence for $n \ge 4$, $K_n$ has more than $2$ odd vertices and so can not be traversable, let alone Eulerian.

If $n = 2$, then $K_n$ consists solely of two odd vertices (of degree $1$).
Hence, by Characteristics of Traversable Graph (or trivially, by inspection), $K_2$ has an Eulerian trail, and so is traversable (although not Eulerian).
$\blacksquare$


Historical Note
This was noted in $1809$ by Louis Poinsot, who was unaware of Euler's more general result.
The remarkable point is that he gave an ingenious method for finding such a Eulerian circuit, which is a far from trivial exercise even for modestly sized complete graphs, for example those for $n < 100$.





