# 

Source: https://proofwiki.org/wiki/Klein_Four-Group_as_Order_2_Matrices


It has been suggested that this page or section be merged into Group of Reflection Matrices Order 4.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $G$ be the set of order $2$ square matrices:

$G = \set {I, A, B, C}$
where:

$I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad A = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}, \quad B = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}, \quad C = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$

Then the algebraic structure $\struct {G, \times}$, where $\times$ denotes (conventional) matrix multiplication, forms the Klein four-group.


Proof
From Unit Matrix is Unity of Ring of Square Matrices, $I$ can be identified as the unit matrix of order $2$.

Then:

$A^2 = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix}  1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix}  1 & 0 \\ 0 &  1 \end{bmatrix} = I$
$A B = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 &  1 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = C$
$A C = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 &  1 \end{bmatrix} = B$
$B^2 = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 &  1 \end{bmatrix} = \begin{bmatrix}  1 & 0 \\ 0 &  1 \end{bmatrix} = I$
$B A = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix}  1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = C$
$B C = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix}  1 & 0 \\ 0 & -1 \end{bmatrix} = A$
$C^2 = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix}  1 & 0 \\ 0 &  1 \end{bmatrix} = I$
$C A = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix}  1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 &  1 \end{bmatrix} = B$
$C B = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 &  1 \end{bmatrix} = \begin{bmatrix}  1 & 0 \\ 0 & -1 \end{bmatrix} = A$

Putting this together into a Cayley table:

$\begin{array}{c|cccccc}
 & I & A & B & C \\

\hline
I & I & A & B & C \\
A & A & I & C & B \\
B & B & C & I & A \\
C & C & B & A & I \\
\end{array}$
it is verified by inspection that this is an instance of the Klein four-group.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $1$: Definitions and Examples: Example $1.8$




