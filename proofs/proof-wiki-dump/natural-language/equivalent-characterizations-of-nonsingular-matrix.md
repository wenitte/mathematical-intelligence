# 

Source: https://proofwiki.org/wiki/Equivalent_Characterizations_of_Nonsingular_Matrix



Theorem
Let $\mathbf A$ be a square matrix of order $n$ over a field $K$.

The following statements are equivalent:

$(1):\quad$ $\mathbf A$ is nonsingular
$(2):\quad$ The transpose of $\mathbf A$ is nonsingular
$(3):\quad$ $\mathbf A$ row-reduces to the identity matrix $\mathbf I_n$
$(4):\quad$ The null space of $\mathbf A$ contains only the zero vector $\mathbf 0$
$(5):\quad$ The homogeneous linear system $\mathbf A \mathbf x = \mathbf 0$ has only the trivial solution $\mathbf 0$
$(6):\quad$ The linear system $\mathbf A \mathbf x = \mathbf b$ has a unique solution for every possible choice of $\mathbf b$
$(7):\quad$ The columns of $\mathbf A$ are linearly independent
$(8):\quad$ The column space of $\mathbf A$ is $K^n$
$(9):\quad$ The columns of $\mathbf A$ are a basis for $K^n$
$(10):\quad$ The rows of $\mathbf A$ are linearly independent
$(11):\quad$ The row space of $\mathbf A$ is $K^n$
$(12):\quad$ The rows of $\mathbf A$ are a basis for $K^n$
$(13):\quad$ The rank of $\mathbf A$ is $n$
$(14):\quad$ The nullity of $\mathbf A$ is zero
$(15):\quad$ The determinant of $\mathbf A$ is not zero
$(16):\quad$ $0_K$ is not an eigenvalue of $\mathbf A$


Proof
$(3)$ iff $(5)$
See Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations/Corollary 5.
$\Box$


$(1)$ iff $(3)$
See Matrix Inverse Algorithm.


Work In ProgressIn particular: but that proof is unfinished, may use (non-circularly) results from this pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


$(4)$ iff $(5)$
Follows directly from the definition of a null space.
$\Box$


$(3)$ implies $(6)$
Suppose that $\mathbf A$ row-reduces to the identity matrix $\mathbf I_n$.
Let $\mathbf b$ be arbitrary.
Let $\begin {pmatrix} \mathbf I_n & \mathbf s \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.
By Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations, the linear system $\mathbf A \mathbf x = \mathbf b$ has the same solutions as $\mathbf I_n \mathbf x = \mathbf s$.
But $\mathbf I_n \mathbf x = \mathbf x$, so $\mathbf x = \mathbf s$ is the unique solution to $\mathbf I_n \mathbf x = \mathbf s$.
Thus $\mathbf x = \mathbf s$ is the also the unique solution to $\mathbf A \mathbf x = \mathbf b$.
As $\mathbf b$ is arbitrary, the result follows.
$\Box$


$(6)$ implies $(5)$
The result follows from setting $\mathbf b = \mathbf 0$.
$\Box$


$(4)$ iff $(7)$
See Null Space Contains Only Zero Vector iff Columns are Independent.
$\Box$


$(7)$ iff $(8)$ iff $(9)$
Follows directly from Sufficient Conditions for Basis of Finite Dimensional Vector Space.
$\Box$


$(3)$ iff $(10)$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$(10)$ iff $(11)$ iff $(12)$
Follows directly from Sufficient Conditions for Basis of Finite Dimensional Vector Space.
$\Box$


$(8)$ iff $(13)$
Follows from the definition of rank of matrix and $\map \dim {K^n} = n$.
$\Box$


$(4)$ iff $(14)$
Follows from the definition of nullity and $\map \dim {\set {\mathbf 0} } = 0$.
$\Box$


$(1)$ iff $(15)$
See Matrix is Nonsingular iff Determinant has Multiplicative Inverse.
$\Box$


$(5)$ iff $(16)$
From the definition of an eigenvalue:

$0_K$ is an eigenvalue of $\mathbf A$ if and only if there exists a non-zero vector $\mathbf v$ such that $\mathbf {A v} = 0_K \mathbf v = \mathbf 0$
Therefore $\mathbf A \mathbf v = \mathbf 0$ has only the trivial solution $\mathbf 0$ if and only if $0_K$ is not an eigenvalue of $\mathbf A$.
$\Box$


$(1)$ iff $(2)$
By Matrix is Nonsingular iff Determinant has Multiplicative Inverse:

$\mathbf A$ is nonsingular if and only if the determinant of $\mathbf A$ is not zero

By Determinant of Transpose:

$\map \det {\mathbf A} = \map \det {\mathbf A^\intercal}$
where $\map \det {\mathbf A}$ is the determinant of $\mathbf A$ and $\mathbf A^\intercal$ is the transpose of $\mathbf A$.
Therefore the determinant of $\mathbf A$ is not zero if and only if the determinant of $\mathbf A^\intercal$ is not zero.

By Matrix is Nonsingular iff Determinant has Multiplicative Inverse again:

$\mathbf A^\intercal$ is nonsingular if and only if the determinant of $\mathbf A^\intercal$ is not zero
Hence $\mathbf A$ is nonsingular if and only if $\mathbf A^\intercal$ is nonsingular.
$\Box$

Hence all sixteen statements are logically equivalent.
$\blacksquare$





