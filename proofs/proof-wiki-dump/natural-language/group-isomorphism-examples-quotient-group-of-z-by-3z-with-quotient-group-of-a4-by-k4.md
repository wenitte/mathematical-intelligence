# 

Source: https://proofwiki.org/wiki/Group_Isomorphism/Examples/Quotient_Group_of_Z_by_3Z_with_Quotient_Group_of_A4_by_K4

Example of Group Isomorphism
Let $\Z / 3 \Z$ denote the quotient group of the additive group of integers by the additive group of $3 \times$ the integers.
Let $A_4 / K_4$ denote the quotient group of the alternating group on 4 letters by the Klein $4$-group.

Then $\Z / 3 \Z$ is isomorphic to $A_4 / K_4$.


Proof
By Quotient Group of Integers by Multiples, $\Z / 3 \Z$ is the additive group of integers modulo $3$.
This is its Cayley table:

$\begin {array} {r|rrr} \struct {\Z_3, +_3} & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \hline \eqclass 0 3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \eqclass 1 3 & \eqclass 1 3 & \eqclass 2 3 & \eqclass 0 0 \\ \eqclass 2 3 & \eqclass 2 3 & \eqclass 0 3 & \eqclass 1 3 \\ \end {array}$

From Normality of Subgroups of Alternating Group on 4 Letters, $K_4$ is a normal subgroup of $A_4$.
We have that:

$\order {A_4 / K_4} = \index {A_4} {K_4} = \dfrac {12} 4 = 3$
As $3$ is prime, it follows from Prime Group is Cyclic that $A_4 / K_4$ and $\Z / 3 \Z$ are cyclic groups of order $3$.
The result follows from Cyclic Groups of Same Order are Isomorphic.

The Cayley table of $A_4$ makes this apparent:

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

$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.3$. Isomorphism




