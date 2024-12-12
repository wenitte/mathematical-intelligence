# 

Source: https://proofwiki.org/wiki/Effect_of_Elementary_Row_Operations_on_Determinant



Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ denote the determinant of $\mathbf A$.

Take the elementary row operations:




\((\text {ERO} 1)\)  

$:$  







\(\ds r_i \to \lambda r_i \)   





For some $\lambda$, multiply row $i$ by $\lambda$   

  


\((\text {ERO} 2)\)  

$:$  







\(\ds r_i \to r_i + \lambda r_j \)   





For some $\lambda$, add $\lambda$ times row $j$ to row $i$   

  


\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Exchange rows $i$ and $j$   

  


Applying $\text {ERO} 1$ has the effect of multiplying $\map \det {\mathbf A}$ by $\lambda$.
Applying $\text {ERO} 2$ has no effect on $\map \det {\mathbf A}$.
Applying $\text {ERO} 3$ has the effect of multiplying $\map \det {\mathbf A}$ by $-1$.


Proof
From Elementary Row Operations as Matrix Multiplications, an elementary row operation on $\mathbf A$ is equivalent to matrix multiplication by the elementary row matrices corresponding to the elementary row operations.
From Determinant of Elementary Row Matrix, the determinants of those elementary row matrices are as follows:


Scale Row
Let $e_1$ be the elementary row operation $\text {ERO} 1$:




\((\text {ERO} 1)\)  

$:$  







\(\ds r_k \to \lambda r_k \)   





For some $\lambda \ne 0$, multiply row $k$ by $\lambda$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_1$ be the elementary row matrix corresponding to $e_1$.
The determinant of $\mathbf E_1$ is:

$\map \det {\mathbf E_1} = \lambda$


Add Scalar Product of Row to Another
Let $e_2$ be the elementary row operation $\text {ERO} 2$:




\((\text {ERO} 2)\)  

$:$  







\(\ds r_i \to r_i + \lambda r_j \)   





For some $\lambda$, add $\lambda$ times row $j$ to row $i$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_2$ be the elementary row matrix corresponding to $e_2$.
The determinant of $\mathbf E_2$ is:

$\map \det {\mathbf E_2} = 1$


Exchange Rows
Let $e_3$ be the elementary row operation $\text {ERO} 3$:




\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Exchange rows $i$ and $j$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_3$ be the elementary row matrix corresponding to $e_3$.
The determinant of $\mathbf E_3$ is:

$\map \det {\mathbf E_3} = -1$

Hence the result.
$\blacksquare$


Also see
Effect of Elementary Column Operations on Determinant




