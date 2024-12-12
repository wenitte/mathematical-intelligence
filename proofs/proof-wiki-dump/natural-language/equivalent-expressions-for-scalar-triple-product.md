# 

Source: https://proofwiki.org/wiki/Equivalent_Expressions_for_Scalar_Triple_Product

Theorem
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










Then this identity applies to the scalar triple product:














\(\ds \)

\(\)







\(\ds \sqbrk {\mathbf a, \mathbf b, \mathbf c} = \sqbrk {\mathbf b, \mathbf c, \mathbf a} = \sqbrk {\mathbf c, \mathbf a, \mathbf b}\)




















\(\ds \)

\(=\)







\(\ds \mathbf a \cdot \paren {\mathbf b \times \mathbf c} = \mathbf b \cdot \paren {\mathbf c \times \mathbf a} = \mathbf c \cdot \paren {\mathbf a \times \mathbf b}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \times \mathbf b} \cdot \mathbf c = \paren {\mathbf b \times \mathbf c} \cdot \mathbf a = \paren {\mathbf c \times \mathbf a} \cdot \mathbf b\)










while:














\(\ds \)

\(\)







\(\ds \sqbrk {\mathbf a, \mathbf c, \mathbf b} = \sqbrk {\mathbf b, \mathbf a, \mathbf c} = \sqbrk {\mathbf c, \mathbf b, \mathbf a}\)




















\(\ds \)

\(=\)







\(\ds \mathbf a \cdot \paren {\mathbf c \times \mathbf b} = \mathbf b \cdot \paren {\mathbf a \times \mathbf c} = \mathbf c \cdot \paren {\mathbf b \times \mathbf a}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \times \mathbf c} \cdot \mathbf b = \paren {\mathbf b \times \mathbf a} \cdot \mathbf c = \paren {\mathbf c \times \mathbf b} \cdot \mathbf a\)




















\(\ds \)

\(=\)







\(\ds -\sqbrk {\mathbf a, \mathbf b, \mathbf c} = -\sqbrk {\mathbf b, \mathbf c, \mathbf a} = -\sqbrk {\mathbf c, \mathbf a, \mathbf b}\)











Proof













\(\ds \mathbf a \cdot \paren {\mathbf b \times \mathbf c}\)

\(=\)







\(\ds \begin {vmatrix}
a_i & a_j & a_k \\
b_i & b_j & b_k \\
c_i & c_j & c_k \\
\end {vmatrix}\)






Definition of Scalar Triple Product














\(\ds \)

\(=\)







\(\ds -\begin {vmatrix}
b_i & b_j & b_k \\
a_i & a_j & a_k \\
c_i & c_j & c_k \\
\end {vmatrix}\)






Determinant with Rows Transposed














\(\ds \)

\(=\)







\(\ds \begin {vmatrix}
b_i & b_j & b_k \\
c_i & c_j & c_k \\
a_i & a_j & a_k \\
\end {vmatrix}\)






Determinant with Rows Transposed














\(\ds \)

\(=\)







\(\ds \mathbf b \cdot \paren {\mathbf c \times \mathbf a}\)





Definition of Scalar Triple Product














\(\ds \)

\(=\)







\(\ds -\begin {vmatrix}
c_i & c_j & c_k \\
b_i & b_j & b_k \\
a_i & a_j & a_k \\
\end {vmatrix}\)






Determinant with Rows Transposed














\(\ds \)

\(=\)







\(\ds \begin {vmatrix}
c_i & c_j & c_k \\
a_i & a_j & a_k \\
b_i & b_j & b_k \\
\end {vmatrix}\)






Determinant with Rows Transposed














\(\ds \)

\(=\)







\(\ds \mathbf c \cdot \paren {\mathbf a \times \mathbf b}\)





Definition of Scalar Triple Product




The remaining identities follow from Dot Product Operator is Commutative.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $7$. Products of Three Vectors: $(2.21)$
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 4$




