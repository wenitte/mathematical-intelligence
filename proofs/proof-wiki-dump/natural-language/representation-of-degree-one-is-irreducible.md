# 

Source: https://proofwiki.org/wiki/Representation_of_Degree_One_is_Irreducible

Theorem
Let $\struct {G, \cdot}$ be a finite group.
Let $\rho: G \to \GL V$ be a linear representation of $G$ on $V$ of degree $1$. 

Then $\rho$ is an  irreducible linear representation.


Proof
By the definition of degree of a linear representation, it is known that $\dim V = 1$.
Let $W$ be a proper vector subspace of $V$.
It follows from Dimension of Proper Subspace is Less Than its Superspace that:

$\dim W < 1$
and hence $\dim W = 0$.
Now from Trivial Vector Space iff Zero Dimension, it follows that: 

$W = \set {\mathbf 0}$
But this is not a non-trivial proper subspace of $V$.
Thus $V$ has no non-trivial proper vector subspaces.
Hence, by definition, $\rho$ is an irreducible linear representation.
$\blacksquare$





