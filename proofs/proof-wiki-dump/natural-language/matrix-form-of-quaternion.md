# 

Source: https://proofwiki.org/wiki/Matrix_Form_of_Quaternion

Theorem
Let $\mathbf x$ be a quaternion such that:

$\mathbf x = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$
When the quaternion basis is expressed in the form of matrices:

$\mathbf 1 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
\qquad
\mathbf i = \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}
\qquad
\mathbf j = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}
\qquad
\mathbf k = \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}$
the general quaternion $\mathbf x$ has the form:

$\mathbf x = \begin{bmatrix} a + bi & c + di \\ -c + di & a - bi \end{bmatrix}$
or:

$\mathbf x = \begin{bmatrix} w & z \\ -\overline z & \overline w \end{bmatrix}$
where :

$w$ and $z$ are complex numbers
$\overline z$ is the complex conjugate of $z$.


Proof













\(\ds \mathbf x\)

\(=\)







\(\ds a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k\)




















\(\ds \)

\(=\)







\(\ds a \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} + b \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix} + c \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} + d \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} a & 0 \\ 0 & a \end{bmatrix} + \begin{bmatrix} b i & 0 \\ 0 & - b i \end{bmatrix} + \begin{bmatrix} 0 & c \\ -c & 0 \end{bmatrix} + \begin{bmatrix} 0 & d i \\ d i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end{bmatrix}\)









$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 55$. Special types of ring and ring elements: $(3)$




