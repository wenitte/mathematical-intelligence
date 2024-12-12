# 

Source: https://proofwiki.org/wiki/Effect_of_Elementary_Column_Operations_on_Determinant



Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ denote the determinant of $\mathbf A$.

Take the elementary column operations:




\((\text {ECO} 1)\)  

$:$  







\(\ds \kappa_i \to \lambda \kappa_i \)   





For some $\lambda$, multiply column $i$ by $\lambda$   

  


\((\text {ECO} 2)\)  

$:$  







\(\ds \kappa_i \to \kappa_i + \lambda \kappa_j \)   





For some $\lambda$, add $\lambda$ times column $j$ to column $i$   

  


\((\text {ECO} 3)\)  

$:$  







\(\ds \kappa_i \leftrightarrow \kappa_j \)   





Exchange columns $i$ and $j$   

  


Applying $\text {ECO} 1$ has the effect of multiplying $\map \det {\mathbf A}$ by $\lambda$.
Applying $\text {ECO} 2$ has no effect on $\map \det {\mathbf A}$.
Applying $\text {ECO} 3$ has the effect of multiplying $\map \det {\mathbf A}$ by $-1$.


Proof
From Elementary Column Operations as Matrix Multiplications, an elementary column operation on $\mathbf A$ is equivalent to matrix multiplication by the elementary column matrices corresponding to the elementary column operations.
From Determinant of Elementary Column Matrix, the determinants of those elementary column matrices are as follows:


Scale Column
Let $e_1$ be the elementary column operation $\text {ECO} 1$:




\((\text {ECO} 1)\)  

$:$  







\(\ds \kappa_k \to \lambda \kappa_k \)   





For some $\lambda \ne 0$, multiply column $k$ by $\lambda$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_1$ be the elementary column matrix corresponding to $e_1$.
The determinant of $\mathbf E_1$ is:

$\map \det {\mathbf E_1} = \lambda$


Add Scalar Product of Column to Another
Let $e_2$ be the elementary column operation $\text {ECO} 2$:




\((\text {ECO} 2)\)  

$:$  







\(\ds \kappa_i \to \kappa_i + \lambda \kappa_j \)   





For some $\lambda$, add $\lambda$ times column $j$ to column $i$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_2$ be the elementary column matrix corresponding to $e_2$.
The determinant of $\mathbf E_2$ is:

$\map \det {\mathbf E_2} = 1$


Exchange Columns
Let $e_3$ be the elementary column operation $\text {ECO} 3$:




\((\text {ECO} 3)\)  

$:$  







\(\ds \kappa_i \leftrightarrow \kappa_j \)   





Exchange columns $i$ and $j$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_3$ be the elementary column matrix corresponding to $e_3$.
The determinant of $\mathbf E_3$ is:

$\map \det {\mathbf E_3} = -1$

Hence the result.
$\blacksquare$


Also see
Effect of Elementary Row Operations on Determinant




