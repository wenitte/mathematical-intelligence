# 

Source: https://proofwiki.org/wiki/Image_of_Vector_Subspace_under_Linear_Transformation_is_Vector_Subspace

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$. 
Let $U$ be a vector subspace of $X$.
Let $T : X \to Y$ be a linear transformation.

Then $T \sqbrk U$ is a vector subspace of $Y$. 


Proof
Since $U$ is a non-empty set, we can apply the One-Step Vector Subspace Test to $T \sqbrk U$.
Let $\lambda \in K$ and $u, v \in T \sqbrk U$.
Then there exists $x, y \in U$ such that: 

$u = T x$
and:

$v = T y$
Then: 














\(\ds \lambda u + v\)

\(=\)







\(\ds \lambda T x + T y\)




















\(\ds \)

\(=\)







\(\ds \map T {\lambda x + y}\)





Definition of Linear Transformation



Since $U$ is a vector subspace, we have $\lambda x + y \in U$.
So $\map T {\lambda x + y} \in T \sqbrk U$.
That is, $\lambda u + v \in T \sqbrk U$.
So $T \sqbrk U$ is a vector subspace of $Y$.
$\blacksquare$





