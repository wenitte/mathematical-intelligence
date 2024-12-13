# 

Source: https://proofwiki.org/wiki/Negative_Matrix_is_Inverse_for_Hadamard_Product

Theorem
Let $\struct {G, \cdot}$ be a group whose identity is $e$.
Let $\map {\MM_G} {m, n}$ be a $m \times n$ matrix space over $\struct {G, \cdot}$.
Let $\mathbf A$ be an element of $\map {\MM_G} {m, n}$.
Let $-\mathbf A$ be the negative of $\mathbf A$.

Then $-\mathbf A$ is the inverse for the operation $\circ$, where $\circ$ is the Hadamard product.


Proof
Let $\mathbf A = \sqbrk a_{m n} \in \map {\MM_G} {m, n}$.
Then:














\(\ds \mathbf A \circ \paren {-\mathbf A}\)

\(=\)







\(\ds \sqbrk a_{m n} \circ \paren {-\sqbrk a_{m n} }\)





Definition of $\mathbf A$














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} \circ \sqbrk {a^{-1} }_{m n}\)





Definition of Negative Matrix














\(\ds \)

\(=\)







\(\ds \sqbrk {a \cdot \paren {a^{-1} } }_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \sqbrk e_{m n}\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \mathbf A \circ \paren {-\mathbf A}\)

\(=\)







\(\ds \mathbf e\)





Definition of Zero Matrix over General Monoid



The result follows from Zero Matrix is Identity for Hadamard Product.
$\blacksquare$


Also see
Negative Matrix is Inverse for Matrix Entrywise Addition




