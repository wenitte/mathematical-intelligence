# 

Source: https://proofwiki.org/wiki/Complex_Multiplication_Distributes_over_Addition



Theorem
The operation of multiplication on the set of complex numbers $\C$ is distributive over the operation of addition.

$\forall z_1, z_2, z_3 \in \C:$
$z_1 \paren {z_2 + z_3} = z_1 z_2 + z_1 z_3$
$\paren {z_2 + z_3} z_1 = z_2 z_1 + z_3 z_1$


Proof
From the definition of complex numbers, we define the following:














\(\ds z_1\)

\(:=\)







\(\ds \tuple {x_1, y_1}\)




















\(\ds z_2\)

\(:=\)







\(\ds \tuple {x_2, y_2}\)




















\(\ds z_3\)

\(:=\)







\(\ds \tuple {x_3, y_3}\)









where $x_1, x_2, x_3, y_1, y_2, y_3 \in \R$.

Thus:














\(\ds z_1 \paren {z_2 + z_3}\)

\(=\)







\(\ds \tuple {x_1, y_1} \paren {\tuple {x_2, y_2} + \tuple {x_3, y_3} }\)





Definition 2 of Complex Number














\(\ds \)

\(=\)







\(\ds \tuple {x_1, y_1} \tuple {x_2 + x_3, y_2 + y_3}\)





Definition of Complex Addition














\(\ds \)

\(=\)







\(\ds \tuple {x_1 \paren {x_2 + x_3} - y_1 \paren {y_2 + y_3}, x_1 \paren {y_2 + y_3} + y_1 \paren {x_2 + x_3} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \tuple {x_1 x_2 + x_1 x_3 - y_1 y_2 - y_1 y_3, x_1 y_2 + x_1 y_3 + y_1 x_2 + y_1 x_3}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \tuple {\paren {x_1 x_2 - y_1 y_2}\ + \paren {x_1 x_3 - y_1 y_3}, \paren {x_1 y_2 + y_1 x_2} + \paren {x_1 y_3 + y_1 x_3} }\)





Real Addition is Commutative














\(\ds \)

\(=\)







\(\ds \tuple {x_1 x_2 - y_1 y_2, x_1 y_2 + y_1 x_2} + \tuple {x_1 x_3 - y_1 y_3, x_1 y_3 + y_1 x_3}\)





Definition of Complex Addition














\(\ds \)

\(=\)







\(\ds \tuple {x_1, y_1} \tuple {x_2, y_2} + \tuple {x_1, y_1} \tuple {x_3, y_3}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds z_1 z_2 + z_1 z_3\)





Definition 2 of Complex Number




The result $\paren {z_2 + z_3} z_1 = z_2 z_1 + z_3 z_1$ follows directly from the above, and the fact that Complex Multiplication is Commutative.
$\blacksquare$


Examples
Example: $\paren {-1 + 2 i} \paren {\paren {7 - 5 i} + \paren {-3 + 4 i} } = \paren {-1 + 2 i} \paren {7 - 5 i} + \paren {-1 + 2 i} \paren {-3 + 4 i}$
Example: $\paren {-1 + 2 i} \paren {\paren {7 - 5 i} + \paren {-3 + 4 i} }$
$\paren {-1 + 2 i} \paren {\paren {7 - 5 i} + \paren {-3 + 4 i} } = -2 + 9 i$


Example: $\paren {-1 + 2 i} \paren {7 - 5 i} + \paren {-1 + 2 i} \paren {-3 + 4 i}$
$\paren {-1 + 2 i} \paren {7 - 5 i} + \paren {-1 + 2 i} \paren {-3 + 4 i} = -2 + 9 i$

As can be seen:

$\paren {-1 + 2 i} \paren {\paren {7 - 5 i} + \paren {-3 + 4 i} } = \paren {-1 + 2 i} \paren {7 - 5 i} + \paren {-1 + 2 i} \paren {-3 + 4 i}$
$\blacksquare$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 1$. Complex Numbers: $\text {(iii)}$ The fundamental operations $\text {(c)}$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Axiomatic Foundations of the Complex Number System: $6$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Axiomatic Foundations of Complex Numbers: $15$
1990: H.A. Priestley: Introduction to Complex Analysis (revised ed.) ... (previous) ... (next): $1$ The complex plane: Complex numbers $\S 1.2$ The algebraic structure of the complex numbers




