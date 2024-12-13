# 

Source: https://proofwiki.org/wiki/No_Simple_Graph_is_Perfect

Theorem
Let $G$ be a simple graph whose order is $2$ or greater.
Then $G$ is not perfect.


Proof
Recall that a perfect graph is one where each vertex is of different degree.
We note in passing that the simple graph consisting of one vertex trivially fulfils the condition for perfection.

Aiming for a contradiction, suppose $G$ is a simple graph of order $n$ where $n \ge 2$ such that $G$ is perfect.

First, suppose that $G$ has no isolated vertices.
By the Pigeonhole Principle, for all vertices to have different degrees, one of them must be of degree at least $n$.
That means it must connect to at least $n$ other vertices.
But there are only $n - 1$ other vertices to connect to.
Therefore $G$ cannot be perfect.

Now suppose $G$ has an isolated vertex.
There can be only one, otherwise there would be two vertices of degree zero, and so $G$ would not be perfect.
Again by the Pigeonhole Principle, for all vertices to have different degrees, one of them must be of degree at least $n - 1$.
But of the remaining $n - 1$ vertices, one of them is of degree zero.
So it cannot be adjacent to any vertex.
So there are only $n - 2$ other vertices to connect to.
Therefore $G$ cannot be perfect.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Problem $12$




