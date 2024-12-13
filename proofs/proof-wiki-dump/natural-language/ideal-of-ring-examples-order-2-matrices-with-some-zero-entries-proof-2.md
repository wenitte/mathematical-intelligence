# 

Source: https://proofwiki.org/wiki/Ideal_of_Ring/Examples/Order_2_Matrices_with_some_Zero_Entries/Proof_2

Example of Ideal of Ring
Let $R$ be the set of all order $2$ square matrices of the form $\begin{pmatrix} x & y \\ 0 & z \end{pmatrix}$ with $x, y, z \in \R$.
Let $S$ be the set of all order $2$ square matrices of the form $\begin{pmatrix} x & y \\ 0 & 0 \end{pmatrix}$ with $x, y \in \R$.
Then $R$ is a ring and $S$ is an ideal of $R$.


Proof
Consider the mapping $\phi: R \to \R$ defined as:

$\forall \mathbf A \in R: \map \phi {\begin {pmatrix} x & y \\ 0 & z \end {pmatrix} } = z$

It is to be demonstrated that $\phi$ is a ring homomorphism whose kernel is $S$.
Thus:














\(\ds \map \phi {\begin {pmatrix} x_1 & y_1 \\ 0 & z_1 \end {pmatrix} + \begin {pmatrix} x_2 & y_2 \\ 0 & z_2 \end {pmatrix} }\)

\(=\)







\(\ds \map \phi {\begin {pmatrix} x_1 + x_2 & y_1 + y_2 \\ 0 & z_1 + z_2 \end {pmatrix} }\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds z_1 + z_2\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi {\begin {pmatrix} x_1 & y_1 \\ 0 & z_1 \end {pmatrix} } + \map \phi {\begin {pmatrix} x_2 & y_2 \\ 0 & z_2 \end {pmatrix} }\)





Definition of $\phi$



and:














\(\ds \map \phi {\begin {pmatrix} x_1 & y_1 \\ 0 & z_1 \end {pmatrix} \begin {pmatrix} x_2 & y_2 \\ 0 & z_2 \end {pmatrix} }\)

\(=\)







\(\ds \map \phi {\begin {pmatrix} x_1 x_2 & x_1 y_2 + y_1 x_2 \\ 0 & z_1 z_2 \end {pmatrix} }\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds z_1 z_2\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi {\begin {pmatrix} x_1 & y_1 \\ 0 & z_1 \end {pmatrix} } \times \map \phi {\begin {pmatrix} x_2 & y_2 \\ 0 & z_2 \end {pmatrix} }\)





Definition of $\phi$



Thus by definition $\phi$ is a ring homomorphism.

By definition of $S$ itself, we have that:

$S \subseteq \map \ker \phi$
Then we have that:














\(\ds \mathbf A\)

\(\in\)







\(\ds \map \ker \phi\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {\mathbf A}\)

\(=\)







\(\ds 0\)





Definition of Kernel of Ring Homomorphism








\(\ds \leadsto \ \ \)





\(\ds \map \phi {\begin {pmatrix} x & y \\ 0 & z \end {pmatrix} }\)

\(=\)







\(\ds 0\)





where $\mathbf A = \begin {pmatrix} x & y \\ 0 & z \end {pmatrix}$








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds 0\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(\in\)







\(\ds S\)





Definition of $S$








\(\ds \leadsto \ \ \)





\(\ds \map \ker \phi\)

\(\subseteq\)







\(\ds S\)





Definition of $S$



Hence:

$\map \ker \phi = S$

From Kernel of Ring Homomorphism is Ideal:

$S$ is an ideal of $R$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $10$




