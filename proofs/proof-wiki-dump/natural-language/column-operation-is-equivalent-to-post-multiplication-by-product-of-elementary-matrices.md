# 

Source: https://proofwiki.org/wiki/Column_Operation_is_Equivalent_to_Post-Multiplication_by_Product_of_Elementary_Matrices



Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\Gamma$ be a column operation which transforms $\mathbf A$ to a new matrix $\mathbf B \in \map \MM {m, n}$.

Then there exists a unique nonsingular square matrix $\mathbf K$ of order $n$ such that:

$\mathbf A \mathbf K = \mathbf B$
where $\mathbf K$ is the product of a finite sequence of elementary column matrices.


Proof
The proof proceeds by induction.
By definition, $\Gamma$ is a finite sequence of elementary column operations on $\mathbf A$.
Let $\sequence e_k$ denote a finite sequence of elementary column operations $\tuple {e_1, e_2, \ldots, e_k}$ applied on $\mathbf A$ in order: first $e_1$, then $e_2$, then $\ldots$, then $e_k$.
Let $\Gamma_k$ be the column operation which consists of $\sequence e_k$.
Let $\mathbf E_k$ denote the elementary column matrix of order $n$ formed by applying $e_k$ to the unit matrix $I_n$.

For all $r \in \Z_{>0}$, let $\map P r$ be the proposition:

For all $\Gamma_r$, there exists a unique nonsingular square matrix $\mathbf K_r$ of order $n$ such that:
$\mathbf A \mathbf K_r = \mathbf B_r$
where:
$\Gamma_r$ is a column operation which transforms $\mathbf A$ to a new matrix $\mathbf B_r \in \map \MM {m, n}$.
$\mathbf K_r$ is the product of the finite sequence of elementary column matrices:
$\mathbf K_r = \mathbf E_1 \mathbf E_2 \dotsb \mathbf E_{r - 1} \mathbf E_r$


Basis for the Induction
$\map P 1$ is the case where $\Gamma_1$ is a single-term sequence consisting of one elementary column operation $e_1$.
Let $e_1$ be an elementary column operation operating on $\mathbf A$, which transforms $\mathbf A$ into $\mathbf B_1$.
By definition, there exists exactly one elementary column matrix $\mathbf E_1$ of order $m$ such that $\mathbf E_1$ is the result of applying $e_1$ to the unit matrix $\mathbf I$ of order $n$.
From the corollary to Elementary Column Operations as Matrix Multiplications:

$\mathbf A \mathbf E_1 = \mathbf B_1$
By Elementary Column Matrix is Nonsingular, $E_1$ is nonsingular.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

For all $\Gamma_k$, there exists a unique nonsingular square matrix $\mathbf K_k$ of order $n$ such that:
$\mathbf A \mathbf K_k = \mathbf B_k$

from which it is to be shown that:

For all $\Gamma_{k + 1}$, there exists a unique nonsingular square matrix $\mathbf K_{k + 1}$ of order $n$ such that:
$\mathbf A \mathbf K_{k + 1} = \mathbf B_{k + 1}$


Induction Step
This is the induction step:
By definition, $\Gamma_{k + 1}$ is a column operation consisting of a finite sequence of elementary column operations $\tuple {e_1, e_2, \ldots, e_k, e_{k + 1} }$ applied on $\mathbf A$ in order.
Thus $\Gamma_{k + 1}$ consists of the finite sequence of elementary column operations $\tuple {e_1, e_2, \ldots, e_k}$ applied on $\mathbf A$ in order, followed by a further elementary column operation $e_{k + 1}$.
By the induction hypothesis, there exists a unique nonsingular square matrix $\mathbf K_k$ of order $m$ such that:

$\mathbf A \mathbf K_k = \mathbf B_k$
where $\mathbf B_k \in \map \MM {m, n}$ is the result of applying $\sequence e_k$ to $\mathbf A$ in order.

Let $e_{k + 1}$ be applied to $\mathbf B_k$.
By definition, there exists exactly one elementary column matrix $\mathbf E_{k + 1}$ of order $m$ such that $\mathbf E_{k + 1}$ is the result of applying $e_{k + 1}$ to the unit matrix $\mathbf I$ of order $m$.
Then:














\(\ds \mathbf B_{k + 1}\)

\(=\)







\(\ds \mathbf B_k \mathbf E_{k + 1}\)





Corollary to Elementary Column Operations as Matrix Multiplications














\(\ds \)

\(=\)







\(\ds \paren {\mathbf A \mathbf K_k} \mathbf E_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \paren {\mathbf K_k \mathbf E_{k + 1} }\)





Matrix Multiplication is Associative



By Product of Matrices is Nonsingular iff Matrices are Nonsingular, $\mathbf K_k \mathbf E_{k + 1}$ is nonsingular.
We have that $\mathbf K_k$ is the unique nonsingular square matrix resulting from the application of $\sequence e_k$ on $\mathbf I_m$.
Thus $\mathbf K_k \mathbf E_{k + 1}$ is the unique nonsingular square matrix resulting from the application of $\sequence e_{k + 1}$ on $\mathbf I_m$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for every column operation $\Gamma$ which transforms $\mathbf A$ to a new matrix $\mathbf B \in \map \MM {m, n}$, there exists a unique nonsingular square matrix $\mathbf R$ of order $m$ such that:

$\mathbf A \mathbf K = \mathbf B$
where:

$\mathbf K$ is the product of a finite sequence of elementary column matrices.
$\blacksquare$


Also see
Row Operation is Equivalent to Pre-Multiplication by Product of Elementary Matrices


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations




