# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_forms_Abelian_Group



Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $\struct {R, +, \circ}$.
Then $\struct {\map {\MM_R} {m, n}, +}$, where $+$ is matrix entrywise addition, is a group.


Proof
We have by definition that matrix entrywise addition is a specific instance of a Hadamard product.
By definition of a ring, the structure $\struct {R, +}$ is a group.
As $\struct {R, +}$ is a fortiori a monoid, it follows from Matrix Space Semigroup under Hadamard Product that $\struct {\map {\MM_R} {m, n}, +}$ is also a monoid.
As $\struct {R, +}$ is a group, it follows from Negative Matrix is Inverse for Matrix Entrywise Addition that all elements of $\struct {\map {\MM_R} {m, n}, +}$ have an inverse element.
From Matrix Entrywise Addition is Commutative it follows that $\struct {\map {\MM_R} {m, n}, +}$ is an Abelian group.
The result follows.
$\blacksquare$


Examples
$2 \times 2$ Matrices over Rational Numbers
Let $\Q^{2 \times 2}$ denote the set of order $2$ square matrices over the set $\Q$ of rational numbers.
Then the algebraic structure $\struct {\Q^{2 \times 2}, +}$, where $+$ denotes matrix entrywise addition, is an abelian group.


$n \times n$ Matrices over Real Numbers
Let $\R^{n \times n}$ denote the set of order $n$ square matrices over the set $\R$ of real numbers.
Then the algebraic structure $\struct {\R^{n \times n}, +}$, where $+$ denotes matrix entrywise addition, is an abelian group.


Also see
Hadamard Product over Group forms Group




