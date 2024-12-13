# 

Source: https://proofwiki.org/wiki/Group_Direct_Product/Examples/C2_x_C2/Subgroups

Subgroups of Group Direct Product of $C_2 \times C_2$
Let us represent $C_2$ as the group $\struct {\set {1, -1}, \times}$:

$\begin {array} {r|rr}
\struct {\set {1, -1} , \times} & 1 & -1 \\
\hline
1 & 1 & -1 \\
-1 & -1 & 1 \\
\end{array}$

The subsets of $C_2 \times C_2$ which form its subgroups are:

$\set {\tuple {1, 1} }$
$\set {\tuple {1, 1}, \tuple {1, -1} }$
$\set {\tuple {1, 1}, \tuple {-1, 1} }$
$\set {\tuple {1, 1}, \tuple {-1, -1} }$
$\set {\tuple {1, 1}, \tuple {1, -1}, \tuple {-1, 1} , \tuple {-1, -1} }$ (that is, $C_2 \times C_2$ itself)


Proof
From Trivial Subgroup is Subgroup and Group is Subgroup of Itself we have that $\set {\tuple {1, 1} }$ and $C_2 \times C_2$ are two of the subgroups
From Lagrange's Theorem (Group Theory), any subgroup of $C_2 \times C_2$ contains $1$, $2$ or $4$ elements.
There is only one subgroup for each of $1$ and $4$, both of which have been covered.
Thus all other subgroups can contain only $2$ elements.

Every subgroup of $C_2 \times C_2$ contains its identity $\set {\tuple {1, 1} }$.
So a subgroup of $C_2 \times C_2$ contains $\set {\tuple {1, 1} }$ and one other element.
Each of the other elements is of order $2$.
So, along with  $\set {\tuple {1, 1} }$, each one forms a subgroup of $C_2 \times C_2$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Example $5.11$




