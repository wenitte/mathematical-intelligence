# 

Source: https://proofwiki.org/wiki/Groups_of_Order_4

Theorem
There exist exactly $2$ groups of order $4$, up to isomorphism:

$C_4$, the cyclic group of order $4$
$K_4$, the Klein $4$-group.


Proof
From Existence of Cyclic Group of Order n we have that one such group of order $4$ is the cyclic group of order $4$:
This is exemplified by the additive group of integers modulo $4$, whose Cayley table can be presented as:
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

From Group whose Order equals Order of Element is Cyclic, any group with an element of order $4$ is cyclic.
From Cyclic Groups of Same Order are Isomorphic, no other groups of order $4$ which are not isomorphic to $C_4$ can have an element of order $4$.
$\Box$

From Order of Element Divides Order of Finite Group, any other group of order $4$ must have elements of order $2$.

We have the Klein $4$-group, whose Cayley table can be presented as:
The Klein $4$-group can be described completely by showing its Cayley table:
$\quad \begin {array} {c|cccc}
& e & a & b & c \\
\hline
e & e & a & b & c \\
a & a & e & c & b \\
b & b & c & e & a \\
c & c & b & a & e \\
\end {array}$

and is seen to have that property.
$\Box$

We have that Klein Four-Group and Group of Cyclic Group of Order 4 are not Isomorphic.
$\Box$

It remains to be shown that the Klein $4$-group is the only groups of order $4$ whose elements are all of order $2$ (except the identity).
Let the Cayley table be populated as far as can be directly established:

$\begin{array}{c|cccc}
 & e & a & b & c \\

\hline
e & e & a & b & c \\
a & a & e &   &   \\
b & b &   & e &   \\
c & c &   &   & e \\
\end{array}$
Consider $a b$.
As $a^2 = e$, $a b \ne e$.
As $a e = a$, $a b \ne a$.
As $e b = b$, $a b \ne b$.
It follows that $a b = c$.
Hence we have:

$\begin{array}{c|cccc}
 & e & a & b & c \\

\hline
e & e & a & b & c \\
a & a & e & c &   \\
b & b &   & e &   \\
c & c &   &   & e \\
\end{array}$
and the rest of the table is completed by following the result that Group has Latin Square Property.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $4$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \zeta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Groups with four elements




