# 

Source: https://proofwiki.org/wiki/Number_of_Components_after_Removal_of_Bridge

Theorem
Let $G = \struct {V, E}$ be a graph.
Let $e \in E$ be a bridge.
Let $m$ be the number of components of $G$.

Then when $e$ is removed from $G$, the number of components in the remaining graph is $m + 1$.


Proof
It is clear, by definition of a bridge, that removing $e$ increases the number of components.
So after $e$ is removed from $G$, the number of components in the remaining graph is at least $m + 1$.

Suppose that removing $e$ disconnects $G$ into more than $m + 1$ components.
Since $e$ joins only two vertices of $G$, it can link at most two of these components.
So there is at least one extra component when $e$ is put back into $G$.
So $G$ has more than $m$ components.
This contradicts the fact that $G$ has $m$ components.
Hence the result.
$\blacksquare$





