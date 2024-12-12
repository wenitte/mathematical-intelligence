# 

Source: https://proofwiki.org/wiki/Dilation_of_Closed_Set_in_Topological_Vector_Space_is_Closed_Set/Proof_2

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $F$ be a closed set in $X$. 
Let $\lambda \in K \setminus \set {0_K}$.

Then $\lambda F$ is a closed set in $X$.


Proof
Define a mapping $c_\lambda : X \to X$ by:

$\map {c_\lambda} x = \lambda x$
for each $x \in X$.
From Dilation Mapping on Topological Vector Space is Homeomorphism, $c_\lambda$ is a homeomorphism.
From Definition 4 of a homeomorphism, $c_\lambda$ is therefore a closed mapping.
Hence $c_\lambda \sqbrk F = \lambda F$ is closed.
$\blacksquare$





