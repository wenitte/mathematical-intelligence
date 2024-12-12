# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Dot_Product



Theorem
The following definitions of the concept of Dot Product in the context of Real Euclidean Space are equivalent:

Let $\mathbf a$ and $\mathbf b$ be vectors in the real Euclidean space $\R^n$.

General Context
The dot product of $\mathbf a$ and $\mathbf b$ is defined as:














\(\ds \mathbf a \cdot \mathbf b\)

\(:=\)







\(\ds \sum_{k \mathop = 1}^n a_k b_k\)




















\(\ds \)

\(=\)







\(\ds a_1 b_1 + a_2 b_2 + \cdots + a_n b_n = \sum_{i \mathop = 1}^n a_i b_i\)










If the vectors are represented as column matrices:

$\mathbf a = \begin {bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end {bmatrix} , \mathbf b = \begin {bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end {bmatrix}$
we can express the dot product as:

$\mathbf a \cdot \mathbf b = \mathbf a^\intercal \mathbf b$
where:

$\mathbf a^\intercal = \begin {bmatrix} a_1 & a_2 & \cdots & a_n \end {bmatrix}$ is the transpose of $\mathbf a$
the operation between the matrices is the matrix product.
Definition by Cosine
Let $\mathbf a$ and $\mathbf b$ be vectors in real Euclidean space $\R^n$.
The dot product of $\mathbf a$ and $\mathbf b$ is defined as:

$\mathbf a \cdot \mathbf b = \norm {\mathbf a} \, \norm {\mathbf b} \cos \angle \mathbf a, \mathbf b$
where:

$\norm {\mathbf a}$ denotes the length of $\mathbf a$
$\angle \mathbf a, \mathbf b$ is the angle between $\mathbf a$ and $\mathbf b$, taken to be between $0$ and $\pi$.


Proof
General Context implies Definition by Cosine
Let $\mathbf a \cdot \mathbf b$ be a dot product in its general context.
From Cosine Formula for Dot Product:

$\mathbf a \cdot \mathbf b = \norm {\mathbf a} \norm {\mathbf b} \cos \theta$
where $\theta$ is the angle between $\mathbf v$ and $\mathbf w$.
Thus $\cdot$ is a dot product by cosine definition.
$\Box$


Definition by Cosine implies General Context
Let $\mathbf a \cdot \mathbf b$ be a dot product by cosine definition.

Let $\mathbf a$ and $\mathbf b$ be expressed in the form:














\(\ds \mathbf a\)

\(=\)







\(\ds a_1 \mathbf e_1 + a_2 \mathbf e_2 + \cdots + a_n \mathbf e_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n a_i \mathbf e_i\)




















\(\ds \mathbf b\)

\(=\)







\(\ds b_1 \mathbf e_1 + b_2 \mathbf e_2 + \cdots + b_n \mathbf e_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n b_j \mathbf e_j\)









Then we have:














\(\ds \mathbf a \cdot \mathbf b\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n a_i \mathbf e_i} \cdot \paren {\sum_{j \mathop = 1}^n b_j \mathbf e_j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop = 1}^n a_i b_j \mathbf e_i \mathbf e_j\)





Dot Product Distributes over Addition




noting at this point that Dot Product Distributes over Addition has been derived from Definition of Dot Product












\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop = 1}^n a_i b_j \delta_{i j}\)





Dot Product of Orthonormal Basis Vectors




noting at this point that Dot Product of Orthonormal Basis Vectors has also ultimately been derived from Definition of Dot Product












\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n a_i b_i\)





simplifying



Thus $\cdot$ is a dot product in its general context.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $2$. The Scalar Product: $(2.10)$
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 2$.
1992: Frederick W. Byron, Jr. and Robert W. Fuller: Mathematics of Classical and Quantum Physics ... (previous) ... (next): Volume One: Chapter $1$ Vectors in Classical Physics: $1.3$ The Scalar Product: $(1.3)$




