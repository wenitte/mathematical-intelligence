# 

Source: https://proofwiki.org/wiki/Derivative_of_Matrix_Exponential

Theorem
Let $\mathbf A$ be a square matrix.
Let $t \in \R$ be a real number.
Let $e^{\mathbf A t}$ denote the matrix exponential of $\mathbf A$.
Then:

$\dfrac \d {\d t} e^{\mathbf A t} = \mathbf A e^{\mathbf A t}$


Proof
From the definition of the matrix exponential, $e^{\mathbf A t}$ is defined as being the square matrix $X$ with the properties:

$(1): \quad \map {\dfrac \d {\d t} } X = \mathbf A X$
$(2): \quad \map X {\mathbf 0_n} = \mathbf I_n$
The result follows directly;
$\blacksquare$





