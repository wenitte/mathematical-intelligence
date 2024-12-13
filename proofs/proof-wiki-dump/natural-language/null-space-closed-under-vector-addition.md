# 

Source: https://proofwiki.org/wiki/Null_Space_Closed_under_Vector_Addition


This article is complete as far as it goes, but it could do with expansion.In particular: Make this more general, by implementing it in the context of a general vector spaceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf x \in \R^n : \mathbf A \mathbf x = \mathbf 0}$
be the null space of $\mathbf A$, where:

$\mathbf A_{m \times n} = \begin {bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end{bmatrix}$, $\mathbf x_{n \times 1} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$ and $\mathbf 0_{m \times 1} = \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}$ are matrices

the column matrix $\mathbf x_{n \times 1}$ is interpreted as a vector in the real Euclidean space $\R^n$.

Then $\map {\mathrm N} {\mathbf A}$ is closed under vector addition:

$\forall \mathbf v, \mathbf w \in \map {\mathrm N} {\mathbf A}: \mathbf v + \mathbf w \in \map {\mathrm N} {\mathbf A}$


Proof
Let $\mathbf v, \mathbf w \in \map {\mathrm N} {\mathbf A}$.
By the definition of null space:














\(\ds \mathbf A \mathbf v\)

\(=\)







\(\ds \mathbf 0\)




















\(\ds \mathbf A \mathbf w\)

\(=\)







\(\ds \mathbf 0\)









Next, observe that:














\(\ds \mathbf A \paren {\mathbf v + \mathbf w}\)

\(=\)







\(\ds \mathbf A \mathbf v + \mathbf A \mathbf w\)





Matrix Multiplication Distributes over Matrix Addition














\(\ds \)

\(=\)







\(\ds \mathbf 0 + \mathbf 0\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









The order is correct, by hypothesis.
Hence the result, by the definition of null space.
$\blacksquare$


Also see
Null Space Contains Zero Vector
Null Space Closed under Scalar Multiplication
Null Space is Subspace


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




