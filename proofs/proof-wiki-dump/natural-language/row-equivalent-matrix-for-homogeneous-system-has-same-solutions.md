# 

Source: https://proofwiki.org/wiki/Row_Equivalent_Matrix_for_Homogeneous_System_has_same_Solutions

Theorem
Let $\mathbf A$ be a matrix in the matrix space $\map {\MM_\R} {m, n}$ such that:

$\mathbf A \mathbf x = \mathbf 0$
represents a homogeneous system of linear equations.
Let $\mathbf H$ be row equivalent to $\mathbf A$.

Then the solution set of $\mathbf H \mathbf x = \mathbf 0$ equals the solution set of $\mathbf A \mathbf x = \mathbf 0$.

That is:

$\mathbf A \sim \mathbf H \implies \set {\mathbf x: \mathbf A \mathbf x = \mathbf 0} = \set {\mathbf x: \mathbf H \mathbf x = \mathbf 0}$
where $\sim$ represents row equivalence.


Corollary
$\set {\mathbf x: \mathbf A \mathbf x = \mathbf 0} = \set {\mathbf x: \map {\mathrm {ref} } {\mathbf A} \mathbf x = \mathbf 0}$
where $\map {\mathrm {ref} } {\mathbf A}$ is the reduced echelon form of $\mathbf A$.


Proof
Let:














\(\ds \alpha_{1 1} x_1 + \alpha_{1 2} x_2 + \ldots + \alpha_{1 n} x_n\)

\(=\)







\(\ds 0\)




















\(\ds \alpha_{2 1} x_1 + \alpha_{2 2} x_2 + \ldots + \alpha_{2 n} x_n\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \alpha_{m 1} x_1 + \alpha_{m 2} x_2 + \ldots + \alpha_{m n} x_n\)

\(=\)







\(\ds 0\)









be the system of equations to be solved.
Suppose the elementary row operation of multiplying one row $i$ by a non-zero scalar $\lambda$ is performed.
Recall, the $i$th row of the matrix represents the $i$th equation of the system to be solved.
Then this is logically equivalent to multiplying the $i$th equation on both sides by the scalar $\lambda$:














\(\ds \alpha_{i 1} x_1 + \alpha_{i 2} x_2 + \ldots + \alpha_{i n} x_n\)

\(=\)







\(\ds 0\)














\(\ds \to \ \ \)





\(\ds \lambda \alpha_{i 1} x_1 + \lambda \alpha_{i 2} x_2 + \ldots + \lambda \alpha_{i n} x_n\)

\(=\)







\(\ds 0\)





$r_i \to \lambda r_i$



which clearly has the same solutions as the original equation.
Suppose the elementary row operation of adding a scalar multiple of row $i$ to another row $j$ is performed.
Recall that the $i$th and $j$th row of the matrix represent the $i$th and $j$th equation in the system to be solved.


This article, or a section of it, needs explaining.In particular: Woolly. The matrix (by which I presume you mean $\mathbf A$) contains the coefficients and so no part of it "represents" an equation. The act of multiplying $\mathbf x$ by it to obtain $\mathbf b$ represents the equation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus this is logically equivalent to manipulating the $i$th and $j$th equations as such:














\(\ds \alpha_{i 1} x_1 + \alpha_{i 2} x_2 + \ldots + \alpha_{i n} x_n\)

\(=\)







\(\ds 0\)




















\(\ds \alpha_{j 1} x_1 + \alpha_{j 2} x_2 + \ldots + \alpha_{j n} x_n\)

\(=\)







\(\ds 0\)














\(\ds \to \ \ \)





\(\ds \alpha_{j 1} x_1 + \alpha_{j 2} x_2 + \ldots + \alpha_{j n} x_n + \lambda \paren {\alpha_{i 1} x_1 + \alpha_{i 2} x_2 + \ldots + \alpha_{i n} x_n}\)

\(=\)







\(\ds 0\)





$r_i \to r_i + \lambda r_j$



As both sides of equation $i$ are equal to each other, this operation is simply performing the same act on both sides of equation $j$.
This clearly will have no effect on the solution set of the system of equations.
Suppose the elementary row operation of interchanging row $i$ and row $j$ is performed.
Recall that the $i$th and $j$th row of the matrix represent the $i$th and $j$th equation in the system to be solved.
Then, interchanging row $i$ and row $j$ is logically equivalent to switching the $i$th equation and the $j$th equation of the system to be solved.
But clearly the system containing the following two equations:














\(\ds \alpha_{i 1} x_1 + \alpha_{i 2} x_2 + \cdots + \alpha_{i n} x_n\)

\(=\)







\(\ds 0\)




















\(\ds \alpha_{j 1} x_1 + \alpha_{j 2} x_2 + \cdots + \alpha_{j n} x_n\)

\(=\)







\(\ds 0\)









has the same solution set as a system instead containing the following two equations:














\(\ds \alpha_{j 1} x_1 + \alpha_{j 2} x_2 + \cdots + \alpha_{j n} x_n\)

\(=\)







\(\ds 0\)




















\(\ds \alpha_{i 1} x_1 + \alpha_{i 2} x_2 + \cdots + \alpha_{i n} x_n\)

\(=\)







\(\ds 0\)





$r_i \leftrightarrow r_j$




Hence the result, by the definition of row equivalence.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




