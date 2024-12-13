# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Vector_Space_Equivalent_Statements

Theorem
Let $G$ and $H$ be $n$-dimensional vector spaces.
Let $\phi: G \to H$ be a linear transformation.

The following statements are equivalent:

$(1): \quad \phi$ is an isomorphism.
$(2): \quad \phi$ is a monomorphism.
$(3): \quad \phi$ is an epimorphism.
$(4): \quad \map \phi B$ is a basis of $H$ for every basis $B$ of $G$.
$(5): \quad \map \phi B$ is a basis of $H$ for some basis $B$ of $G$.


Proof
$(1)$ implies $(2)$ by definition.
$(2)$ implies $(4)$ by Linear Transformation of Vector Space Monomorphism and Results concerning Generators and Bases of Vector Spaces.
$(4)$ implies $(5)$ by basic logic.

Suppose $\map \phi B$ is a basis of $H$.
Then the image of $\phi$ is a subspace of $H$ generating $H$ and hence is $H$ itself.
Thus $(5)$ implies $(3)$.

Finally, $(3)$ implies that $\phi$ is injective.
If $\phi$ is surjective, the dimension of its kernel is $0$ by Rank Plus Nullity Theorem.
Hence $\phi$ is an isomorphism and therefore $(3)$ implies $(1)$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.7$




