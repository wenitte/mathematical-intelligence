# 

Source: https://proofwiki.org/wiki/Klein_Four-Group_and_Group_of_Cyclic_Group_of_Order_4_are_not_Isomorphic

Theorem
The Klein $4$-group $K_4$ and the cyclic group of order $4$ $C_4$ are not isomorphic.


Proof 1
Recall the Cayley table for $K_4$:
The Klein $4$-group can be described completely by showing its Cayley table:
$\quad \begin {array} {c|cccc}
& e & a & b & c \\
\hline
e & e & a & b & c \\
a & a & e & c & b \\
b & b & c & e & a \\
c & c & b & a & e \\
\end {array}$

From Finite Cyclic Group is Isomorphic to Integers under Modulo Addition, $C_4$ can be exemplified using the additive group of integers modulo $4$.
Recall the Cayley table for $\struct {\Z_4, +_4}$:
$\quad \begin {array} {r|rrrr}
\struct {\Z_4, +_4} & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4 \\
\hline
\eqclass 0 4 & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4
\\
\eqclass 1 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4 & \eqclass 0 4 
\\
\eqclass 2 4 & \eqclass 2 4 & \eqclass 3 4 & \eqclass 0 4 & \eqclass 1 4
\\
\eqclass 3 4 & \eqclass 3 4 & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4
\\
\end{array}$

Note that all elements of $K_4$ are self-inverse.
However, for example:

$\eqclass 1 4 +_4 \eqclass 1 4 = \eqclass 2 4$
and so $\eqclass 1 4$ is not self-inverse.
Thus there can be no bijection between $K_4$ and $\struct {\Z_4, +_4}$ such that:

$\forall a, b \in K_4: \map \phi a +_4 \map \phi b = \map \phi {a b}$
Hence the result.
$\blacksquare$


Proof 2
Note that both $C_4$ and $K_4$ are of order $4$.
Also note that both $C_4$ and $K_4$ are abelian.
By definition, $C_4$ has elements of order $4$.
From Group Isomorphism Preserves Order of Group Element, the image of an element of $C_4$ under an isomorphism to $K_4$ would also be of order $4$.
But $K_4$ has no elements of order $4$.
Hence $C_4$ and $K_4$ are not isomorphic.
$\blacksquare$





