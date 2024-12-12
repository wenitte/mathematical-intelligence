# 

Source: https://proofwiki.org/wiki/Determinant_of_Block_Diagonal_Matrix

Theorem
Let $\mathbf A$ be a block diagonal matrix of order $n$.
Let $\mathbf A_1, \ldots, \mathbf A_k$ be the square matrices on the diagonal:

$\ds \mathbf A = \begin {bmatrix}
\mathbf A_1 & 0 & \cdots & 0 \\
0 & \mathbf A_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \mathbf A_k 
\end {bmatrix}$

Then the determinant $\map \det {\mathbf A}$ of $\mathbf A$ satisfies:

$\ds \map \det {\mathbf A} = \prod_{i \mathop = 1}^k \map \det {\mathbf A_i}$


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
To prove this fact, we need to prove additional helper propositions.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
$\textbf{Claim 1}$
The determinant of the block-diagonal matrix of type $M = \begin{pmatrix}
A & 0 \\
0 & I \\
\end{pmatrix}$ or $M = \begin{pmatrix}
I & 0 \\
0 & A \\
\end{pmatrix}$ equals $\map \det A$.
$\textbf{Proof}$
For this we utilize mathematical induction.

$\textbf{Base case}$ - $k = 1$ and $I = I_k = 1$.
Then, $\map \det M = 1 \map \det A + 0 + \ldots + 0$, because the first column (or last, depending on the location of $I$ block) has all zeros except the first (or last) element.

$\textbf{Induction step}$
By the same reason - all except one elements of the column are zeros - we have $\map \det {M_k} = 1 \map \det {M_{k - 1} } + 0 + \ldots + 0$, where $M_k$ is the block matrix discussed above wiith $I_k$ block.
Thus, by induction:

$\map \det {M_k} = \map \det {M_{k - 1} } = \ldots = \map \det {M_1} = \map \det A$
$\Box$

$\textbf{Claim 2}$ about the determinant of upper-triangular block matrix
$M = \begin{pmatrix}
A & B \\
0 & D \\
\end{pmatrix}$, $\map \det M = \map \det A \map \det D$
$\textbf{Proof}$
$M = \begin{pmatrix}
A & B \\
0 & D \\
\end{pmatrix} = \begin{pmatrix}
I & 0 \\
0 & D \\
\end{pmatrix} \begin{pmatrix}
I & B \\
0 & I \\
\end{pmatrix} \begin{pmatrix}
A & 0 \\
0 & I \\
\end{pmatrix}$. Thus, using the properties $\map \det {A B} = \map \det A \map \det B$, $\map \det I = 1$ and $\det \begin{pmatrix}
I & B \\
0 & I \\
\end{pmatrix} = 1$, because this is just triangular matrix with all ones on the diagonal.
So, we get $\map \det M = \map \det D \map \det A$
$\Box$

From the above propositions one can see that for  $ A = \begin{pmatrix}
A_1 & 0 \\
0 & A_2 \\
\end{pmatrix}$, which is the special case of the upper-triangular matrix, $\map \det A = \map \det {A_1} \map \det {A_2}$.
Since $A$ is diagonal, $A_1$ and $A_2$ are also diagonal and their determinants equal to the product of corresponding diagonal blocks.
Thus:

$\map \det {A_1} = \map \det {A_{1, 1} } \map \det {A_{1, 2} }$
and:

$\map \det {A_2} = \map \det {A_{2, 1} } \map \det {A_{2, 2} }$
which imply:

$\map \det A = \map \det {A_{1, 1} } \map \det {A_{1, 2} } \map \det {A_{2, 1} } \map \det {A_{2, 2} }$
Following this recursion argument, $\ds \map \det {\mathbf A} = \prod_{i \mathop = 1}^k \map \det {\mathbf A_i}$
$\blacksquare$


Also see
Determinant of Diagonal Matrix, a special case of this theorem.




