# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_is_not_Commutative



Theorem
Let $R$ be a ring with unity.
Let $n \in \Z_{>0}$ be a (strictly) positive integer such that $n \ne 1$.
Let $\map {\MM_R} n$ denote the $n \times n$ matrix space over $R$.

Then (conventional) matrix multiplication over $\map {\MM_R} n$ is not commutative:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} n: \mathbf {A B} \ne \mathbf {B A}$

If $R$ is specifically not commutative, then the result holds when $n = 1$ as well.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} n: \mathbf {A B} \ne \mathbf {B A}$


Edge Cases
$n = 1$
Consider the case where $n = 1$.
Then:














\(\ds \mathbf {A B}\)

\(=\)







\(\ds a_{11} b_{11}\)




















\(\ds \mathbf {B A}\)

\(=\)







\(\ds b_{11} a_{11}\)










and it follows that (conventional) matrix multiplication over $\map {\MM_R} 1$ is commutative if and only if $R$ is a commutative ring.


$R$ not a Ring with Unity
Consider the case where $R$ is not a ring with unity, and is a general ring.
Let $R$ be the trivial ring.
From Matrix Multiplication on Square Matrices over Trivial Ring is Commutative:

$\forall \mathbf A, \mathbf B \in \map {\MM_R} n: \mathbf {A B} = \mathbf {B A}$
Hence the result does not follow for all rings.

It is not established at this point on exactly which rings (conventional) matrix multiplication $\map {\MM_R} n$ commutes.
However, the existence of just one such ring (the trivial ring) warns us that we cannot apply the main result to all rings.


Matrices are not Square
We note that $\mathbf A \mathbf B$ is defined when:

$\mathbf A = \sqbrk a_{m n}$ is an $m \times n$ matrix
$\mathbf B = \sqbrk b_{n p}$ is an $n \times p$ matrix.
Hence for both $\mathbf A \mathbf B$ and $\mathbf B \mathbf A$ to be defined, it is necessary that:

$\mathbf A = \sqbrk a_{m n}$ is an $m \times n$ matrix
$\mathbf B = \sqbrk b_{n p}$ is an $n \times m$ matrix
for some $m, n \in \Z_{>0}$.
But in this situation:

$\mathbf A \mathbf B$ is an $m \times m$ matrix
while:

$\mathbf B \mathbf A$ is an $n \times n$ matrix
and so if $\mathbf A$ and $\mathbf B$ are not square matrices, they cannot commute.


Basis for the Induction
$\map P 2$ is the case:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} 2: \mathbf {A B} \ne \mathbf {B A}$
This is demonstrated in Matrix Multiplication is not Commutative: Order $2$ Square Matrices.
Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} k: \mathbf {A B} \ne \mathbf {B A}$

from which it is to be shown that:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} {k + 1}: \mathbf {A B} \ne \mathbf {B A}$


Induction Step
This is the induction step:
From the induction hypothesis, it is assumed that there exist $2$ order $k$ square matrices $\mathbf A$ and $\mathbf B$ such that $\mathbf {A B} \ne \mathbf {B A}$.

For an order $n$ square matrix  $\mathbf D$, let $\mathbf {D'}$ be the square matrix of order $n + 1$ defined as:

$d'_{i j} = \begin {cases} d_{i j} & : i < n + 1 \land j < n + 1 \\ 0 & : i = n + 1 \lor j = n + 1 \end{cases}$

Thus $\mathbf D'$ is just $\mathbf D$ with a zero row and zero column added at the ends.
We have that $\mathbf D$ is a submatrix of $\mathbf D'$.

Now:

$\paren {a' b'}_{i j} = \begin{cases} \ds \sum_{r \mathop = 1}^{n + 1} \mathbf a'_{i r} b'_{r j} & : i < n + 1 \land j < n + 1 \\ 0 & : i = n + 1 \lor j = n + 1 \end{cases}$

But:














\(\ds \sum_{r \mathop = 1}^{n + 1} a'_{i r} b'_{r j}\)

\(=\)







\(\ds a'_{i \paren {n + 1} } b'_{\paren {n + 1} i} + \sum_{r \mathop = 1}^n a'_{i r} b'_{r j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^n a_{i r} b_{r j}\)










and so:














\(\ds \mathbf A' \mathbf B' \paren {n + 1, n + 1}\)

\(=\)







\(\ds \paren {\mathbf {A B} }' \paren {n + 1, n + 1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf {A B}\)




















\(\ds \)

\(\ne\)







\(\ds \mathbf {B A}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf {B A} }' \paren {n + 1, n + 1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf B' \mathbf A' \paren {n + 1; n + 1}\)










Thus it is seen that:

$\exists \mathbf A', \mathbf B' \in \MM_{n + 1 \times n + 1}: \mathbf A' \mathbf B' \ne \mathbf B' \mathbf A'$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\exists \mathbf A, \mathbf B \in \map {\MM_R} n: \mathbf {A B} \ne \mathbf {B A}$
and by definition (conventional) matrix multiplication over $\map {\MM_R} n$ is not commutative.
$\blacksquare$


Examples
Arbitrary $2 \times 2$ Matrices
Consider the matrices:














\(\ds \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 1 & 2 \\ -1 & 0 \end {pmatrix}\)




















\(\ds \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 1 & -1 \\ 0 & 1 \end {pmatrix}\)









We have:














\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ -1 & 1 \end {pmatrix}\)




















\(\ds \mathbf B \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 2 & 2 \\ -1 & 0 \end {pmatrix}\)









and it is seen that $\mathbf A \mathbf B \ne \mathbf B \mathbf A$.


Also see
Definition:Pre-Multiplication
Definition:Post-Multiplication


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices




