# 

Source: https://proofwiki.org/wiki/Boundary_of_Polygon_is_Jordan_Curve

Theorem
Let $P$ be a polygon embedded in $\R^2$.

Then there exists a Jordan curve $\gamma: \closedint 0 1 \to \R^2$ such that the image of $\gamma$ is equal to the boundary $\partial P$ of $P$.


Proof
The polygon $P$ has $n$ sides, where $n \in \N$.
Denote the vertices of $P$ as $A_1, \ldots, A_n$ and its sides as $S_1, \ldots, S_n$, such that each vertex $A_i$ has adjacent sides $S_{i - 1}$ and $S_i$.
We use the conventions that $S_0 = S_n$, and $A_{n + 1} = A_1$.
As each side $S_i$ is a line segment joining $A_i$ and $A_{i + 1}$, when we define the path $\gamma_i: \closedint 0 1 \to \R^2$ by:

$\map {\gamma_i} t = \paren {1 - t} A_i + t A_{i + 1}$
the image of $\gamma_i$ is equal to the side $S_i$.

Define $\gamma: \closedint 0 1 \to \R^2$ as the concatenation $\paren {\cdots \paren {\paren {\gamma_1 * \gamma_2} * \gamma_3} * \ldots * \gamma_{n - 1} } * \gamma_n$.
Then each point in the image of $\gamma$ corresponds to a point in a side of $P$.
As $\map \gamma 0 = A_1 = \map \gamma 1$ by our definition of $A_{n + 1}$, it follows that $\gamma$ is a closed path.
It follows from the definition of polygon that the sides of $P$ do not intersect, except at the vertices.
For $i \ne 1$, each vertex $A_i$ is the initial point of $\gamma_i$ and the final point of $\gamma_{i - 1}$, and is equal to exactly one point $\map \gamma {2^{-n - 1 + i} }$ in the image of $\gamma$.
Then we have that $\gamma$ restricted to $\hointr 0 1$ is injective.
Hence $\gamma$ is a Jordan curve.
$\blacksquare$





