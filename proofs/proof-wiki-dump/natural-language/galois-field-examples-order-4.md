# 

Source: https://proofwiki.org/wiki/Galois_Field/Examples/Order_4

Example of Galois Field
The algebraic structure $\struct {\GF, +, \times}$ defined by the following Cayley tables is a Galois field:

$\begin{array} {c|cccc}
+ & 0 & 1 & a & b \\
\hline
0 & 0 & 1 & a & b \\
1 & 1 & 0 & b & a \\
a & a & b & 0 & 1 \\
b & b & a & 1 & 0 \\
\end{array}
\qquad
\begin{array} {c|cccc}
\times & 0 & 1 & a & b \\
\hline
0 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & a & b \\
a & 0 & a & b & 1 \\
b & 0 & b & 1 & a \\
\end{array}$


Proof
From Field with 4 Elements has only Order 2 Elements we have that a Galois field of order $4$, if it exists, must have this structure:

$\struct {\GF, +}$ is the Klein $4$-group
$\struct {\GF^*, \times}$ is the cyclic group of order $3$.

We have that $4 = 2^2$, and $2$ is prime.
From Galois Field of Order q Exists iff q is Prime Power, there exists at least one Galois field of order $4$.
As $\struct {\GF^*, +, \times}$ is the only such algebraic structure that can be a Galois field, it follows that $\struct {\GF^*, +, \times}$ must be a Galois field.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 17$. The Characteristic of a Field: Example $25$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 87 \varepsilon$




