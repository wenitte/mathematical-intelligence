# 

Source: https://proofwiki.org/wiki/Product_of_Quaternion_Conjugates

Theorem
Let $\mathbf x, \mathbf y \in \mathbb H$ be quaternions.
Let $\overline{\mathbf x}$ be the conjugate of $\mathbf x$.

Then:

$\overline{\mathbf x \times \mathbf y} = \overline{\mathbf y} \times \overline{\mathbf x}$

but in general:

$\overline{\mathbf x \times \mathbf y} \ne \overline{\mathbf x} \times \overline{\mathbf y}$


Proof
Consider the matrix form of $\mathbf x$ and $\mathbf y$:

$\mathbf x = \begin{bmatrix} a & b \\ -\overline b & \overline a \end{bmatrix}$
$\mathbf y = \begin{bmatrix} c & d \\ -\overline d & \overline c \end{bmatrix}$
where $a, b, c, d \in \C$.















\(\ds \overline{\mathbf x \times \mathbf y}\)

\(=\)







\(\ds \overline{\begin{bmatrix} a & b \\ -\overline b & \overline a \end{bmatrix} \begin{bmatrix} c & d \\ -\overline d & \overline c \end{bmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \overline{\begin{bmatrix} a c - b \overline d & a d + b \overline c \\ - \overline b c - \overline a \overline d & - \overline b d + \overline a \overline c \end{bmatrix} }\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline{a c - b \overline d} & -\left({a d + b \overline c}\right) \\ \overline b c + \overline a \overline d & \overline{- \overline b d + \overline a \overline c} \end{bmatrix}\)





Definition of Conjugate Quaternion














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline a \overline c - \overline b d & - a d - b \overline c \\ \overline {a d} + \overline b c & a c - b \overline d \end{bmatrix}\)





Complex Conjugation is Automorphism, Complex Conjugation is Involution


















\(\ds \overline{\mathbf y} \times \overline{\mathbf x}\)

\(=\)







\(\ds \overline{\begin{bmatrix} c & d \\ -\overline d & \overline c \end{bmatrix} } \ \overline{\begin{bmatrix} a & b \\ -\overline b & \overline a \end{bmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline c & - d \\ \overline d & c \end{bmatrix} \begin{bmatrix} \overline a & - b \\ \overline b & a \end{bmatrix}\)





Definition of Conjugate Quaternion














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline a \overline c - \overline b d & - a d - b \overline c \\ \overline {a d} + \overline b c & a c - b \overline d \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \overline{\mathbf x \times \mathbf y}\)





from above




but:














\(\ds \overline{\mathbf x} \times \overline{\mathbf y}\)

\(=\)







\(\ds \overline{\begin{bmatrix} a & b \\ -\overline b & \overline a \end{bmatrix} } \ \overline{\begin{bmatrix} c & d \\ -\overline d & \overline c \end{bmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline a & - b \\ \overline b & a \end{bmatrix} \times \begin{bmatrix} \overline c & - d \\ \overline d & c \end{bmatrix}\)





Definition of Conjugate Quaternion














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \overline a \overline c - b \overline d & - \overline a d - b c \\ a \overline d + \overline {b c} & a c - \overline b d \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(\ne\)







\(\ds \overline{\mathbf x \times \mathbf y}\)





from above



$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




