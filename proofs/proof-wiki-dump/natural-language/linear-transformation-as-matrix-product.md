# 

Source: https://proofwiki.org/wiki/Linear_Transformation_as_Matrix_Product

  This article was Featured Proof between 6th May 2012 and 21st May 2012.




Theorem
Let $T: \R^n \to \R^m, \mathbf x \mapsto \map T {\mathbf x}$ be a linear transformation.
Then:

$\map T {\mathbf x} = \mathbf A_T \mathbf x$
where $\mathbf A_T$ is the $m \times n$ matrix defined as:

$\mathbf A_T = \begin {bmatrix} \map T {\mathbf e_1} & \map T {\mathbf e_2} & \cdots & \map T {\mathbf e_n} \end {bmatrix}$
where $\tuple {\mathbf e_1, \mathbf e_2, \cdots, \mathbf e_n}$ is the standard ordered basis of $\R^n$.


Proof
Let $\mathbf x = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}$.
Let $\mathbf I_n$ be the unit matrix of order $n$.
Then:














\(\ds \mathbf x_{n \times 1}\)

\(=\)







\(\ds \mathbf I_n \mathbf x_{n \times 1}\)





Definition of Left Identity














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \\ \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}\)





Unit Matrix is Identity:Lemma














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \mathbf e_1 & \mathbf e_2 & \cdots & \mathbf e_n \end {bmatrix} \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}\)





Definition of Standard Ordered Basis on Vector Space














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \mathbf e_i x_i\)





Definition of Matrix Product (Conventional)














\(\ds \map T {\mathbf x}\)

\(=\)







\(\ds \map T {\sum_{i \mathop =1}^n \mathbf e_i x_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map T {\mathbf e_i} x_i\)





Definition of Linear Transformation on Vector Space














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \map T {\mathbf e_1} & \map T {\mathbf e_2} & \cdots & \map T {\mathbf e_n} \end {bmatrix} \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}\)





Definition of Matrix Product (Conventional)



That $\mathbf A_T$ is $m \times n$ follows from each $\map T {\mathbf e_i}$ being an element of $\R^m$ and thus having $m$ rows.
$\blacksquare$


Also see
Matrix Product as Linear Transformation


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




