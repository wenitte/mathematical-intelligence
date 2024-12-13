# 

Source: https://proofwiki.org/wiki/Parity_Group_is_Group

Theorem
The parity group is in fact a group.


Proof
We can completely describe the parity group by showing its Cayley table:

$\begin{array}{r|rr}
\struct {\set {1, -1}, \times} & 1 & -1\\
\hline
1 & 1 & -1 \\
-1 & -1 & 1 \\
\end{array} \qquad
\begin{array}{r|rr}
\struct {\Z_2, +_2} & \eqclass 0 2 & \eqclass 1 2 \\
\hline
\eqclass 0 2 & \eqclass 0 2 & \eqclass 1 2 \\
\eqclass 1 2 & \eqclass 1 2 & \eqclass 0 2 \\
\end{array}$
From Prime Group is Cyclic, there is only one group of order $2$, up to isomorphism.
Thus both instantiations of the parity group are isomorphic to $C_2$, the cyclic group of order $2$.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.3$: Example $11$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory




