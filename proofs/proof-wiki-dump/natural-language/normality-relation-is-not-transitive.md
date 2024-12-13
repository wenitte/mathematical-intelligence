# 

Source: https://proofwiki.org/wiki/Normality_Relation_is_not_Transitive

Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $K$ be a normal subgroup of $N$.

Then it is not necessarily the case that $K$ is a normal subgroup of $G$.


Proof 1
Proof by Counterexample:
Let $A_4$ denote the alternating group on $4$ letters, whose Cayley table is given as:

$\begin{array}{c|cccc|cccc|cccc}
\circ & e & t & u & v & a & b & c & d & p & q & r & s \\
\hline
e & e & t & u & v & a & b & c & d & p & q & r & s \\
t & t & e & v & u & b & a & d & c & q & p & s & r \\
u & u & v & e & t & c & d & a & b & r & s & p & q \\
v & v & u & t & e & d & c & b & a & s & r & q & p \\
\hline
a & a & c & d & b & p & r & s & q & e & u & v & t \\
b & b & d & c & a & q & s & r & p & t & v & u & e \\
c & c & a & b & d & r & p & q & s & u & e & t & v \\
d & d & b & a & c & s & q & p & r & v & t & e & u \\
\hline
p & p & s & q & r & e & v & t & u & a & d & b & c \\
q & q & r & p & s & t & u & e & v & b & c & a & d \\
r & r & q & s & p & u & t & v & e & c & b & d & a \\
s & s & p & r & q & v & e & u & t & d & a & c & b \\
\end{array}$

From Normality of Subgroups of Alternating Group on 4 Letters:

$K := \set {e, t, u, v}$ is a normal subgroup of $A_4$
$T := \set {e, t}$ is not a normal subgroup of $A_4$.
But by Subgroup of Abelian Group is Normal:

$T$ is a normal subgroup of $K$.

Thus we have:

$T \lhd K$, $K \lhd A_4$
but:

$T \not \lhd A_4$
$\blacksquare$


Proof 2
Proof by Counterexample:
Let $D_4$ denote the dihedral group $D_4$.

Let $D_4$ be presented in matrix representation:
Let $\mathbf I, \mathbf A, \mathbf B, \mathbf C$ denote the following four elements of the matrix space $\map {\MM_\Z} 2$:

$\mathbf I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
\qquad
\mathbf A = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
\qquad
\mathbf B = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}
\qquad
\mathbf C = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$

The set:

$D_4 = \set {\mathbf I, -\mathbf I, \mathbf A, -\mathbf A, \mathbf B, -\mathbf B, \mathbf C, -\mathbf C}$
under the operation of conventional matrix multiplication, forms the dihedral group $D_4$.

Its Cayley table is given as:

$\begin{array}{r|rrrrrrrr}
          &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C \\

\hline

\mathbf I &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C \\
\mathbf A &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B \\
\mathbf B &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A \\
\mathbf C &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I \\

-\mathbf I & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C \\
-\mathbf A & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B \\
-\mathbf B & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A &  \mathbf B & -\mathbf C & -\mathbf I & -\mathbf A \\
-\mathbf C & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I
\end{array}$

Consider the subgroup $H$ whose underlying set is:

$H = \set {\mathbf I, \mathbf A, -\mathbf I, -\mathbf A}$
From Subgroup of Index 2 is Normal, $H$ is normal in $D_4$.
Consider the subgroup $H$ whose underlying set is:

$K = \set {\mathbf I, \mathbf A} = \gen {\mathbf A}$
From Subgroup of Index 2 is Normal, $K$ is normal in $H$.

It remains to be demonstrated that $K$ is not normal in $D_4$.
From the Cayley table:

$\mathbf C \mathbf A \mathbf C^{-1} = \mathbf B \mathbf C = -\mathbf A \notin K$
Hence $K$ is not normal in $D_4$.
$\blacksquare$





