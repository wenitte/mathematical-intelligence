# 

Source: https://proofwiki.org/wiki/Effect_of_Sequence_of_Elementary_Row_Operations_on_Determinant



Theorem
Let $\hat o_1, \ldots, \hat o_m$ be a finite sequence of elementary row operations. 
Here, $\hat o_i$ denotes an elementary row operation on a square matrix of order $n$ over a commutative ring with unity $\struct {R, +, \circ}$.
Here, $i \in \set {1, \ldots, m}$.

Then there exists $c \in R$ such that for all square matrices of order $n$ $\mathbf A$ over $R$:

$\map \det {\mathbf A} = c \map \det {\mathbf A'}$
where $\mathbf A'$ is the square matrix of order $n$ that results from applying the elementary row operations $\hat o_1, \ldots, \hat o_m$ on $\mathbf A$.


Proof
Proof by induction on $m$, the number of elementary row operations in the sequence $\hat o_1, \ldots, \hat o_m$.


Basis for the Induction
Suppose $m = 1$, so there is only one elementary row operation $\hat o$ in the sequence.
Let $r_i$ denote the $i$'th row of $\mathbf A$.

Suppose that $\hat o$ is of the type $r_i \to a r_i$, where $a \in R$ and $i \in \set {1, \ldots, n}$.
From Effect of Elementary Row Operations on Determinant, it follows that:

$\map \det {\mathbf A} = a \map \det {\mathbf A'}$

Suppose that $\hat o$ is of the type $r_i \to r_i + ar_j$, where $a \in R$ and $i, j \in \set {1, \ldots, n}, i \ne j$.
From Effect of Elementary Row Operations on Determinant, it follows that 

$\map \det {\mathbf A} = \map \det {\mathbf A'} = 1_R \map \det {\mathbf A'}$
where $1_R$ denotes the identity element of $\struct {R, \circ}$.

Suppose that $\hat o$ is of the type $r_i \leftrightarrow r_j$.
From Effect of Elementary Row Operations on Determinant, it follows that 

$\map \det {\mathbf A} = -\map \det {\mathbf A'} = -1_R \map \det {\mathbf A'}$
where the last equality follows from Product with Ring Negative: Corollary.

This is the basis for the induction.


Induction Hypothesis
For $m \in \N$, let $\hat o_1, \ldots, \hat o_m$ be a finite sequence of elementary row operations. 
This is the induction hypothesis:
There exists $c \in R$ such that for all matrices of order $n$ $\mathbf A$:

$\map \det {\mathbf A} = c \map \det {\mathbf A'}$
where $\mathbf A'$ is the matrix of order $n$ that results from using the elementary row operations $\hat o_1, \ldots, \hat o_m$ on $\mathbf A$.


Induction Step
This is the induction step:
Let $\hat o_1, \ldots, \hat o_m, \hat o_{m + 1}$ be a finite sequence of elementary row operations.
Let $r_i$ denote the $i$'th row of $\mathbf A'$.
Let $\mathbf A$ denote the matrix of order $n$ that results from using the elementary row operation $\hat o_{m + 1}$ on $A'$.
Then $\mathbf A$ is equal to the matrix that results from using the elementary row operations $\hat o_1, \ldots, \hat o_m, \hat o_{m + 1}$ on $A$.

Suppose that $\hat o_{m + 1}$ is of the type $r_i \to ar_i$, where $a \in R$ and $i \in \set {1, \ldots, n}$. 
Then:














\(\ds \map \det {\mathbf A}\)

\(=\)







\(\ds c \map \det {\mathbf A'}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {c a} \map \det {\mathbf A}\)





Effect of Elementary Row Operations on Determinant




Suppose that $\hat o_{m + 1}$ is of the type $r_i \to r_i + a r_j$, where $a \in R$ and $i, j \in \set {1, \ldots, n}, i \ne j$.
Then:














\(\ds \map \det {\mathbf A}\)

\(=\)







\(\ds c \map \det {\mathbf A'}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds c 1_R \map \det {\mathbf A}\)





Effect of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds c \map \det {\mathbf A}\)





Definition of Identity Element, since $R$ is commutative




Suppose that $\hat o_{m + 1}$ is of the type $r_i \leftrightarrow r_j$.
Then:














\(\ds \map \det {\mathbf A}\)

\(=\)







\(\ds c \map \det {\mathbf A'}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds c \paren {-1_R} \map \det {\mathbf A}\)





Effect of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds \paren {-c} \map \det {\mathbf A}\)





Product with Ring Negative: Corollary




Then the induction step is proved for all three types of elementary row operations.
$\blacksquare$





