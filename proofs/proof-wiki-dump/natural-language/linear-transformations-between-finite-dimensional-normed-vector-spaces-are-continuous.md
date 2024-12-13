# 

Source: https://proofwiki.org/wiki/Linear_Transformations_between_Finite-Dimensional_Normed_Vector_Spaces_are_Continuous

Theorem
Linear transformations between finite-dimensional normed vector spaces are continuous. 


Proof
We have that Norms on Finite-Dimensional Real Vector Space are Equivalent.
Choose the Euclidean norm.
Let $X = \struct {\R^n, \norm {\, \cdot \,}_2}$ and $Y = \struct {\R^m, \norm {\, \cdot \,}_2}$ be normed vector spaces.
Let the matrix $A \in \R^{m \times n}$ be given by:

$A = \begin {bmatrix}
a_{1 1} & \cdots & a_{1 n} \\

\vdots & \ddots & \vdots \\

a_{m 1} & \cdots & a_{m n} \\
\end{bmatrix}$

We have that Set of Linear Transformations is Isomorphic to Matrix Space.
Let $T_A : \R^n \to \R^m$ be the linear transformation such that:

$\forall \mathbf x \in \R^n : T_A \mathbf x := A \mathbf x$

Then:














\(\ds \norm {T_A \mathbf x}^2_2\)

\(=\)







\(\ds \norm {A \mathbf x}^2_2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^m \paren {\sum_{j \mathop = 1}^n a_{ij} x_j}^2\)





Definition of Euclidean Norm














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^m \paren {\sum_{j \mathop = 1}^n a_{ij}^2} \paren{\sum_{j \mathop = 1}^n x_j^2}\)





Cauchy's Inequality














\(\ds \)

\(=\)







\(\ds \norm {\mathbf x}_2^2 \paren {\sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n a_{ij}^2}\)





Definition of Euclidean Norm



Hence:

$\ds \norm{T_A \mathbf x}_2 \le \norm{\mathbf x}_2 \sqrt {\sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n a_{ij}^2 }$
By Continuity of Linear Transformation between Normed Vector Spaces $T_A$ is continuous.
Hence, all linear transformations between finite-dimensional normed vector spaces are continuous. 
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




