# 

Source: https://proofwiki.org/wiki/Preimage_Theorem



Theorem
Let $y$ be a regular value of a smooth submersion $f: X \to Y$.
Then the preimage $\map {f^{-1} } y$ is a smooth submanifold of $X$, with $\dim \map {f^{-1} } y = \dim X - \dim Y$.


Proof
Let $k, l$ be natural numbers with $k \ge l$.
By the Local Submersion Theorem, there exists coordinates in some open neighborhoods of $x, y$ such that $\map f {x_1, x_2, \ldots, x_k} = \tuple {x_1, \ldots, x_l}$ and $y$ corresponds to $\tuple {0, \ldots, 0}$.
Let $V$ be that neighborhood of $x$.
Then $\map {f^{-1} } y \cap V$ is the set of points where $x_1 = 0, \ldots, x_l = 0$.
The functions $x_{l + 1}, \ldots, x_k$ therefore form a coordinate system on the set $\map {f^{-1} } y \cap V$, which is a relatively open subset of $\map {f^{-1} } y$.
Together these functions then form a diffeomorphism to a Euclidean space.
We also have, by the regular value properties of $y$, a surjection of tangent spaces from $x$ to $y$.
This ensures smoothness of the solution set $\map {f^{-1} } y$.
$\blacksquare$


Also known as
This theorem is also known as the submersion level set theorem, regular value theorem and regular level set theorem.


Sources
2003: John M. Lee: Introduction to Smooth Manifolds: $5$: Submanifolds $\S$ Embedded Submanifolds




