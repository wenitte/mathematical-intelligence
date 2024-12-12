# 

Source: https://proofwiki.org/wiki/Construction_of_Integer_Multiple_of_Line_Segment

Theorem
Let $AB$ be a line segment in the plane.
Let $AC$ be a line segment in the plane through a point $C$

Let $D$ be a point on $AC$ such that $AD = n AB$ for some $n \in \Z$.

Then $AD$ is constructible using a compass and straightedge construction.


Proof
Let $AB$ be given.
Let the straight line through $AC$ be constructed.
Let $D_1$ be constructed on $AC$ such that $A D_1 = AB$ by constructing a circle whose center is at $A$ and whose radius is $B$.
Let $D_0$ be identified as the point $A$.

For each $k \in \set {1, 2, \ldots, n - 1}$, construct a circle whose center is at $D_k$ and whose radius is $D_{k - 1} D_k$.
We have that $D_k D_{k + 1} = D_{k - 1} D_k = AB$.
Thus $D_0 D_{k + 1}$ is ${k + 1}$ times $D_0 D_1 = AB$.
When $k = n - 1$ we have that $D_{k + 1} = D_n = D$ is $n$ times $AB$.

The diagram below illustrates the construction for $n = 4$.


$\blacksquare$





