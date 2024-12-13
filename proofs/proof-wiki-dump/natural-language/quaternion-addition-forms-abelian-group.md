# 

Source: https://proofwiki.org/wiki/Quaternion_Addition_forms_Abelian_Group



Theorem
Let $\mathbb H$ be the set of quaternions.

Then $\struct {\mathbb H, +}$, where $+$ denotes quaternion addition, is an abelian group.


Proof
Taking the abelian group axioms in turn:

Group Axiom $\text G 0$: Closure
Let:

$\mathbf x_1 = a_1 \mathbf 1 + b_1 \mathbf i + c_1 \mathbf j + d_1 \mathbf k$
$\mathbf x_2 = a_2 \mathbf 1 + b_2 \mathbf i + c_2 \mathbf j + d_2 \mathbf k$
be quaternions.
By definition of quaternion addition:

$\mathbf x_1 + \mathbf x_2 = \paren {a_1 + a_2} \mathbf 1 + \paren {b_1 + b_2} \mathbf i + \paren {c_1 + c_2} \mathbf j + \paren {d_1 + d_2} \mathbf k$
So as $a_1, a_2, b_1, b_2$ etc. are all elements of $\R$, then so are $a_1 + a_2, b_1 + b_2$ etc.
So $\paren {a_1 + a_2} \mathbf 1 + \paren {b_1 + b_2} \mathbf i + \paren {c_1 + c_2} \mathbf j + \paren {d_1 + d_2} \mathbf k$ is a quaternion.
Hence $\struct {\mathbb H, +}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
From Matrix Form of Quaternion, we can express a quaternion $\mathbf x$ in the form of a matrix:

$\mathbf x = \begin {bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end {bmatrix}$
We have that Matrix Entrywise Addition is Associative.
It follows that quaternion addition is also associative
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
The identity element of $\struct \mathbb H, +}$ is:

$\mathbf 0 = 0 \mathbf 1 + 0 \mathbf i + 0 \mathbf j + 0 \mathbf k$
as can be seen:














\(\ds \mathbf 0 + \mathbf x\)

\(=\)







\(\ds 0 \mathbf 1 + 0 \mathbf i + 0 \mathbf j + 0 \mathbf k + a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {0 + a} \mathbf 1 + \paren {0 + b} \mathbf i + \paren {0 + c} \mathbf j + \paren {0 + d} \mathbf k\)




















\(\ds \)

\(=\)







\(\ds a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \mathbf x\)




















\(\ds \)

\(=\)







\(\ds \paren {a + 0} \mathbf 1 + \paren {b + 0} \mathbf i + \paren {c + 0} \mathbf j + \paren {d + 0} \mathbf k\)




















\(\ds \)

\(=\)







\(\ds a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k + 0 \mathbf 1 + 0 \mathbf i + 0 \mathbf j + 0 \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \mathbf x + \mathbf 0\)









$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $\mathbf x = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$ be a quaternion.

The inverse of $\struct {\mathbb H, +}$ is:

$-\mathbf x = -a \mathbf 1 + -b \mathbf i + -c \mathbf j + -d \mathbf k$
as can be seen:














\(\ds \mathbf -x + \mathbf x\)

\(=\)







\(\ds -a \mathbf 1 + -b \mathbf i + -c \mathbf j + -d \mathbf k + a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {-a + a} \mathbf 1 + \paren {-b + b} \mathbf i + \paren {-c + c} \mathbf j + \paren {-d + d} \mathbf k\)




















\(\ds \)

\(=\)







\(\ds 0 \mathbf 1 + 0 \mathbf i + 0 \mathbf j + 0 \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









and similarly for $\mathbf x + \mathbf -x$.
$\Box$


Commutativity
Commutativity follows from Real Addition is Commutative.
$\Box$

Thus all the abelian group axioms are seen to be fulfilled.
$\blacksquare$





