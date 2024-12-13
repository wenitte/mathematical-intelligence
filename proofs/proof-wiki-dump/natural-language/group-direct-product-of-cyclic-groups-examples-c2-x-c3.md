# 

Source: https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups/Examples/C2_x_C3

Examples of Use of Group Direct Product of Cyclic Groups
Let $C_2$ denote the cyclic group of order $2$.
The group direct product $C_2 \times C_3$ is a cyclic group.


Proof
Let us represent $C_2$ as the group $\struct {\Z_2, +_2}$:

$\begin {array} {r|rr}
+_2 & \eqclass 0 2 & \eqclass 1 2 \\
\hline
\eqclass 0 2 & \eqclass 0 2 & \eqclass 1 2 \\
\eqclass 1 2 & \eqclass 1 2 & \eqclass 0 2 \\
\end{array}$

and $C_3$ as the group $\struct {\Z_3, +_3}$:

$\begin {array} {r|rrr}
+_3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\
\hline
\eqclass 0 3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\
\eqclass 1 3 & \eqclass 1 3 & \eqclass 2 3 & \eqclass 0 3 \\
\eqclass 2 3 & \eqclass 2 3 & \eqclass 0 3 & \eqclass 1 3 \\
\end{array}$
So:

$C_2 \times C_3 = \gen {\tuple {\eqclass 1 2, \eqclass 1 3} }$
as can be seen from its Cayley table:

$\begin {array} {r|rrrrrr}
+_6                                 & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 2 3} \\
\hline
\tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 2 3} \\
\tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 0 3} \\
\tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} \\
\tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} \\
\tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 1 3} & \tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 0 3} \\
\tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 2 3} & \tuple {\eqclass 0 2, \eqclass 0 3} & \tuple {\eqclass 1 2, \eqclass 1 3} & \tuple {\eqclass 0 2, \eqclass 2 3} & \tuple {\eqclass 1 2, \eqclass 0 3} & \tuple {\eqclass 0 2, \eqclass 1 3} \\
\end{array}$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Direct products: Example $13.4$




