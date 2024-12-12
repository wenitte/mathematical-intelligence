# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Quaternion_Modulus



Theorem
Let $\mathbf x = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$ be a quaternion, where $a, b, c, d \in \R$.
The following definitions of the concept of Quaternion Modulus are equivalent:

Definition 1
The (quaternion) modulus of $\mathbf x$ is the real-valued function defined and denoted as:

$\size {\mathbf x} := \sqrt {a^2 + b^2 + c^2 + d^2}$
Definition 2
Let $\mathbf x$ be expressed in matrix form:

$\mathbf x = \begin {bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end {bmatrix}$
The (quaternion) modulus of $\mathbf x$ is the real-valued function defined and denoted as:

$\size {\mathbf x} := \sqrt {\map \det {\mathbf x} }$


Proof
Let $\mathbf x = \begin{bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end{bmatrix}$ be the matrix form of quaternion $\mathbf x$.














\(\ds \size {\mathbf x}\)

\(=\)







\(\ds \sqrt {\map \det {\mathbf x} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\map \det {\begin{bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end{bmatrix} } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {a + b i} \paren {a - b i} - \paren {c + d i} \paren {-c + d i} }\)





Definition of Determinant of Matrix














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {a^2 + b^2} - \paren {-c^2 - d^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {a^2 + b^2 + c^2 + d^2}\)









$\blacksquare$





