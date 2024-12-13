# 

Source: https://proofwiki.org/wiki/Null_Space_Closed_under_Scalar_Multiplication



Theorem
Let:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf x \in \R^n : \mathbf {A x} = \mathbf 0}$
be the null space of $\mathbf A$, where:

$ \mathbf A_{m \times n} = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end {bmatrix}$,  $\mathbf x_{n \times 1} = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}$, $\mathbf 0_{m \times 1} = \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}$
are matrices where each column is an element of a real vector space.

Then $\map {\mathrm N} {\mathbf A}$ is closed under scalar multiplication:

$\forall \mathbf v \in \map {\mathrm N} {\mathbf A} ,\forall \lambda \in \R: \lambda \mathbf v \in \map {\mathrm N} {\mathbf A}$


Proof
Let $\mathbf v \in \map {\mathrm N} {\mathbf A}$, $\lambda \in \R$.
By the definition of null space:














\(\ds \mathbf {A v}\)

\(=\)







\(\ds \mathbf {0}\)









Observe that:














\(\ds \mathbf A \paren {\lambda \mathbf v}\)

\(=\)







\(\ds \lambda \paren {\mathbf {A v} }\)





Matrix Multiplication is Homogeneous of Degree $1$














\(\ds \)

\(=\)







\(\ds \lambda \mathbf 0\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









Hence the result, by the definition of null space.
$\blacksquare$


Also see
Null Space Contains Zero Vector
Null Space Closed under Vector Addition
Null Space is Subspace


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




