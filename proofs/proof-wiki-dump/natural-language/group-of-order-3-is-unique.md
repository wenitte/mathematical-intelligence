# 

Source: https://proofwiki.org/wiki/Group_of_Order_3_is_Unique

Theorem
There exists exactly $1$ group of order $3$, up to isomorphism:

$C_3$, the cyclic group of order $3$.


Proof
From Existence of Cyclic Group of Order n we have that one such group of order $3$ is the cyclic group of order $3$.
This is exemplified by the additive group of integers modulo $3$, whose Cayley table can be presented as:

$\begin {array} {r|rrr} \struct {\Z_3, +_3} & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \hline \eqclass 0 3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \eqclass 1 3 & \eqclass 1 3 & \eqclass 2 3 & \eqclass 0 0 \\ \eqclass 2 3 & \eqclass 2 3 & \eqclass 0 3 & \eqclass 1 3 \\ \end {array}$
$\Box$

Consider an arbitrary group $\struct {G, \circ}$ whose identity element is $e$.
Let the underlying set of $G$ be:

$G = \set {e, a, b}$
where $a, b \in G$ are arbitrary.

Since $e$ is the identity, we can start off the Cayley table for $G$ as:

$\begin{array}{c|ccc}
\circ & e & a & b \\
\hline
e & e & a & b \\
a & a &   &   \\
b & b &   &   \\
\end{array}$

Consider the element at $a \circ a$.
We have that $a \circ a$ must be either $e$ or $b$, as from Group has Latin Square Property it cannot be $a$.
If $a \circ a = e$, then that leaves only $b$ to complete the middle row.
But $b$ already exists in the final column.
So $a \circ a$ cannot be $e$, so must be $b$.
Hence the Cayley table for $G$ so far is:

$\begin{array}{c|ccc}
\circ  & e & a & b \\
\hline
e & e & a & b \\
a & a & b &   \\
b & b &   &   \\
\end{array}$

The rest of the table is completed by following the result that Group has Latin Square Property:

$\begin{array}{c|ccc}
\circ  & e & a & b \\
\hline
e & e & a & b \\
a & a & b & e \\
b & b & e & a \\
\end{array}$
and it is seen by inspection that $G$ is indeed the cyclic group of order $3$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.4$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Groups with three elements




