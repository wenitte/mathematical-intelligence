# 

Source: https://proofwiki.org/wiki/Cross_Product_of_Elements_of_Standard_Ordered_Basis

Theorem
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis of Cartesian $3$-space $S$.
Then:

$\mathbf i \times \mathbf i = \mathbf j \times \mathbf j = \mathbf k \times \mathbf k = 0$
and:














\(\ds \mathbf i \times \mathbf j\)

\(=\)

\(\, \ds \mathbf k \, \)

\(\, \ds = \, \)



\(\ds -\mathbf j \times \mathbf i\)




















\(\ds \mathbf j \times \mathbf k\)

\(=\)

\(\, \ds \mathbf i \, \)

\(\, \ds = \, \)



\(\ds -\mathbf k \times \mathbf j\)




















\(\ds \mathbf k \times \mathbf i\)

\(=\)

\(\, \ds \mathbf j \, \)

\(\, \ds = \, \)



\(\ds -\mathbf i \times \mathbf k\)









where $\times$ denotes the dot product.


Proof
From Cross Product of Vector with Itself is Zero:

$\mathbf i \times \mathbf i = \mathbf j \times \mathbf j = \mathbf k \times \mathbf k = 0$

Then we can take the definition of cross product:

$\mathbf a \times \mathbf b = \begin {vmatrix}
\mathbf i & \mathbf j & \mathbf k \\
a_i & a_j & a_k \\
b_i & b_j & b_k \\
\end {vmatrix} = \mathbf a \times \mathbf b = \paren {a_j b_k - a_k b_j} \mathbf i - \paren {a_i b_k - a_k b_i} \mathbf j + \paren {a_i b_j - a_j b_i} \mathbf k$
and note that:














\(\ds \mathbf i\)

\(=\)







\(\ds 1 \mathbf i + 0 \mathbf j + 0 \mathbf k\)




















\(\ds \mathbf j\)

\(=\)







\(\ds 0 \mathbf i + 1 \mathbf j + 0 \mathbf k\)




















\(\ds \mathbf k\)

\(=\)







\(\ds 0 \mathbf i + 0 \mathbf j + 1 \mathbf k\)










Hence:














\(\ds \mathbf i \times \mathbf j\)

\(=\)







\(\ds \paren {0 \cdot 0 - 0 \cdot 1} \mathbf i - \paren {1 \cdot 0 - 0 \cdot 0} \mathbf j + \paren {1 \cdot 1 - 0 \cdot 0} \mathbf k\)

\(\ds = \mathbf k\)


















\(\ds \mathbf j \times \mathbf k\)

\(=\)







\(\ds \paren {1 \cdot 1 - 0 \cdot 0} \mathbf i - \paren {0 \cdot 1 - 0 \cdot 0} \mathbf j + \paren {0 \cdot 0 - 1 \cdot 0} \mathbf k\)

\(\ds = \mathbf i\)


















\(\ds \mathbf k \times \mathbf i\)

\(=\)







\(\ds \paren {0 \cdot 0 - 1 \cdot 0} \mathbf i - \paren {0 \cdot 0 - 1 \cdot 1} \mathbf j + \paren {0 \cdot 0 - 0 \cdot 1} \mathbf k\)

\(\ds = \mathbf j\)








The remaining identities follow from Vector Cross Product is Anticommutative:














\(\ds \mathbf i \times \mathbf j\)

\(=\)







\(\ds -\mathbf j \times \mathbf i\)




















\(\ds \mathbf j \times \mathbf k\)

\(=\)







\(\ds -\mathbf k \times \mathbf j\)




















\(\ds \mathbf k \times \mathbf i\)

\(=\)







\(\ds -\mathbf i \times \mathbf k\)









$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $4$. The Vector Product: $(2.16)$, $(2.17)$
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 3$: $(7)$, $(8)$




