# 

Source: https://proofwiki.org/wiki/Dimension_of_Vector_Space_on_Cartesian_Product

Theorem
Let $\struct {K, +, \circ}$ be a division ring.
Let $n \in \N_{>0}$.
Let $\mathbf V := \struct {K^n, +, \times}_K$ be the $K$-vector space $K^n$.

Then the dimension of $\mathbf V$ is $n$.


Proof
Let the unity of $K$ be $1$, and the zero of $K$ be $0$.
Consider the vectors:














\(\ds \mathbf e_1\)

\(:=\)







\(\ds \underbrace {\tuple {1, 0, \ldots, 0} }_{n \text { coordinates} }\)




















\(\ds \mathbf e_2\)

\(:=\)







\(\ds \underbrace {\tuple {0, 1, \ldots, 0} }_{n \text { coordinates} }\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \mathbf e_n\)

\(:=\)







\(\ds \underbrace {\tuple {0, 0, \ldots, 1} }_{n \text { coordinates} }\)









Thus $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ is the standard ordered basis of $\mathbf V$.
From Standard Ordered Basis is Basis, $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ is a basis of $\mathbf V$.
The result follows from Linearly Independent Set is Basis iff of Same Cardinality as Dimension.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 34$. Dimension: Example $66$




