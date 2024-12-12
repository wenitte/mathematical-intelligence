# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Scalar_Triple_Product



Theorem
The following definitions of the concept of Scalar Triple Product are equivalent:

Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be vectors in a Cartesian $3$-space:














\(\ds \mathbf a\)

\(=\)







\(\ds a_i \mathbf i + a_j \mathbf j + a_k \mathbf k\)




















\(\ds \mathbf b\)

\(=\)







\(\ds b_i \mathbf i + b_j \mathbf j + b_k \mathbf k\)




















\(\ds \mathbf c\)

\(=\)







\(\ds c_i \mathbf i + c_j \mathbf j + c_k \mathbf k\)









where $\tuple {\mathbf i, \mathbf j, \mathbf k}$ is the standard ordered basis.

Definition 1
The scalar triple product of $\mathbf a$, $\mathbf b$ and $\mathbf c$ is defined and denoted as:

$\sqbrk {\mathbf a, \mathbf b, \mathbf c} := \mathbf a \cdot \paren {\mathbf b \times \mathbf c}$
where:

$\cdot$ denotes dot product
$\times$ denotes vector cross product.
Definition 2
The scalar triple product of $\mathbf a$, $\mathbf b$ and $\mathbf c$ is defined and denoted as:

$\sqbrk {\mathbf a, \mathbf b, \mathbf c} := \begin {vmatrix}
a_i & a_j & a_k \\
b_i & b_j & b_k \\
c_i & c_j & c_k \\
\end {vmatrix}$
where $\begin {vmatrix} \ldots \end {vmatrix}$ is interpreted as a determinant.


Proof













\(\ds \mathbf a \cdot \paren {\mathbf b \times \mathbf c}\)

\(=\)







\(\ds \mathbf a \cdot \paren {\paren {b_j c_k - c_j b_k} \mathbf i + \paren {b_k c_i - c_k b_i} \mathbf j + \paren {b_i c_j - c_i b_j} \mathbf k}\)





Definition of Vector Cross Product














\(\ds \)

\(=\)







\(\ds a_i \paren {b_j c_k - c_j b_k} + a_j \paren {b_k c_i - c_k b_i} + a_k \paren {b_i c_j - c_i b_j}\)





Definition of Dot Product




Then:














\(\ds \begin {vmatrix} a_i & a_j & a_k \\ b_i & b_j & b_k \\ c_i & c_j & c_k \end {vmatrix}\)

\(=\)







\(\ds a_i b_j c_k - a_i b_k c_j - a_j b_i c_k + a_j b_k c_i + a_k b_i c_j - a_k b_j c_i\)





Determinant of Order 3














\(\ds \)

\(=\)







\(\ds a_i \paren {b_j c_k - c_j b_k} + a_j \paren {b_k c_i - c_k b_i} + a_k \paren {b_i c_j - c_i b_j}\)





extracting factors



Hence the result.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $7$. Products of Three Vectors
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving Dot and Cross Products: $22.16$




