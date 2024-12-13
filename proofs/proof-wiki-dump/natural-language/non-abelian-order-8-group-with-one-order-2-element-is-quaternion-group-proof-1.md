# 

Source: https://proofwiki.org/wiki/Non-Abelian_Order_8_Group_with_One_Order_2_Element_is_Quaternion_Group/Proof_1



Theorem
Let $G$ be a group with the following properties:

$(1): \quad G$ is non-abelian.
$(2): \quad G$ is of order $8$.
$(3): \quad G$ has precisely one element of order $2$.

Then $G$ is isomorphic to the quaternion group $Q$.


Proof
From Order of Element Divides Order of Finite Group all the elements in $G$ have order $1, 2, 4$ or $8$.
From Cyclic Group is Abelian, $\paren 1$ and $\paren 2$, no elements in $G$ have order $8$, i.e. they all have order $1, 2$ or $4$.
Let the identity element be $1$ and the one with order $2$ be $-1$.
Also denote $1 \circ a$ as $+a$, $-1 \circ a$ as $-a$, $\set {\pm a} = \set {a, -a}$ for simplicity.


Lemma 1
$\set {\pm 1}$ is a normal subgroup of $G$.

By Lagrange's Theorem and Cosets are Equivalent, let:

$G / \set {\pm 1} = \set {\set {\pm 1}, \set {\pm a}, \set {\pm b}, \set {\pm c} }$


Lemma 2
$\paren {\pm a}^2 = \paren {\pm b}^2 = \paren {\pm c}^2 = -1$

Now draw up the incomplete Cayley table for $G / \set {\pm 1}$:

$\begin{array}{c|cccc}
& \pm 1 & \pm a & \pm b & \pm c \\
\hline
\pm 1 & \pm 1 & \pm a & \pm b & \pm c \\
\pm a & \pm a & \pm 1 & & \\
\pm b & \pm b & & \pm 1 & \\
\pm c & \pm c & & & \pm 1 \\
\end{array}$
By Group has Latin Square Property the Cayley table can be completed:

$\begin{array}{c|cccc}
& \pm 1 & \pm a & \pm b & \pm c \\
\hline
\pm 1 & \pm 1 & \pm a & \pm b & \pm c \\
\pm a & \pm a & \pm 1 & \pm c & \pm b \\
\pm b & \pm b & \pm c & \pm 1 & \pm a \\
\pm c & \pm c & \pm b & \pm a & \pm 1 \\
\end{array}$
Now from the above draw up the incomplete Cayley table for $G$:

$\begin{array}{c|cccccccc}
& 1 & -1 & a & -a & b & -b & c & -c \\
\hline
1 & 1 & -1 & a & -a & b & -b & c & -c \\
-1 & -1 & 1 & -a & a & -b & b & -c & c \\
a & a & -a & -1 & 1 & & & & \\
-a & -a & a & 1 & -1 & & & & \\
b & b & -b & & & -1 & 1 & & \\
-b & -b & b & & & 1 & -1 & & \\
c & c & -c & & & & & -1 & 1 \\
-c & -c & c & & & & & 1 & -1 \\
\end{array}$
By Group has Latin Square Property and Group Axiom $\text G 1$: Associativity, the Cayley table can be completed in two ways:

$\begin{array}{c|cccccccc}
& 1 & -1 & a & -a & b & -b & c & -c \\
\hline
1 & 1 & -1 & a & -a & b & -b & c & -c \\
-1 & -1 & 1 & -a & a & -b & b & -c & c \\
a & a & -a & -1 & 1 & c & -c & -b & b \\
-a & -a & a & 1 & -1 & -c & c & b & -b \\
b & b & -b & -c & c & -1 & 1 & a & -a \\
-b & -b & b & c & -c & 1 & -1 & -a & a \\
c & c & -c & b & -b & -a & a & -1 & 1 \\
-c & -c & c & -b & b & a & -a & 1 & -1 \\
\end{array}$
or:

$\begin{array}{c|cccccccc}
& 1 & -1 & a' & -a' & b' & -b' & c' & -c' \\
\hline
1 & 1 & -1 & a' & -a' & b' & -b' & c' & -c' \\
-1 & -1 & 1 & -a' & a' & -b' & b' & -c' & c' \\
a' & a' & -a' & -1 & 1 & -c' & c' & b' & -b' \\
-a' & -a' & a' & 1 & -1 & c' & -c' & -b' & b' \\
b' & b' & -b' & c' & -c' & -1 & 1 & -a' & a' \\
-b' & -b' & b' & -c' & c' & 1 & -1 & a' & -a' \\
c' & c' & -c' & -b' & b' & a' & -a' & -1 & 1 \\
-c' & -c' & c' & b' & -b' & -a' & a' & 1 & -1 \\
\end{array}$
Referring to the Cayley table of the Quaternion group:

$\begin{array}{r|rrrrrrrr}
     &  \mathbf 1 &  \mathbf i & -\mathbf 1 & -\mathbf i &  \mathbf j &  \mathbf k & -\mathbf j & -\mathbf k \\

\hline

\mathbf 1 &  \mathbf 1 &  \mathbf i & -\mathbf 1 & -\mathbf i &  \mathbf j &  \mathbf k & -\mathbf j & -\mathbf k \\
\mathbf i &  \mathbf i & -\mathbf 1 & -\mathbf i &  \mathbf 1 &  \mathbf k & -\mathbf j & -\mathbf k &  \mathbf j \\

-\mathbf 1 & -\mathbf 1 & -\mathbf i &  \mathbf 1 &  \mathbf i & -\mathbf j & -\mathbf k &  \mathbf j &  \mathbf k \\
-\mathbf i & -\mathbf i &  \mathbf 1 &  \mathbf i & -\mathbf 1 & -\mathbf k &  \mathbf j &  \mathbf k & -\mathbf j \\

\mathbf j &  \mathbf j & -\mathbf k & -\mathbf j &  \mathbf k & -\mathbf 1 &  \mathbf i &  \mathbf 1 & -\mathbf i \\
\mathbf k &  \mathbf k &  \mathbf j & -\mathbf k & -\mathbf j & -\mathbf i & -\mathbf 1 &  \mathbf i &  \mathbf 1 \\

-\mathbf j & -\mathbf j &  \mathbf k &  \mathbf j & -\mathbf k &  \mathbf 1 & -\mathbf i & -\mathbf 1 &  \mathbf i \\
-\mathbf k & -\mathbf k & -\mathbf j &  \mathbf k &  \mathbf j &  \mathbf i &  \mathbf 1 & -\mathbf i & -\mathbf 1
\end{array}$
The results follow by identifying:

$\tuple {1, a, b, c} = \tuple {1, c', b', a'} = \tuple {\mathbf 1, \mathbf i, \mathbf j, \mathbf k}$
$\blacksquare$





