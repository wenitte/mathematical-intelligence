# 

Source: https://proofwiki.org/wiki/Complex_Multiplication_is_Associative



Theorem
The operation of multiplication on the set of complex numbers $\C$ is associative:

$\forall z_1, z_2, z_3 \in \C: z_1 \paren {z_2 z_3} = \paren {z_1 z_2} z_3$


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














\(\ds \)

\(\)







\(\ds z_1 \left({z_2 z_3}\right)\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1, y_1} \paren {\tuple {x_2, y_2} \tuple {x_3, y_3} }\)





Definition 2 of Complex Number














\(\ds \)

\(=\)







\(\ds \tuple {x_1, y_1} \tuple {x_2 x_3 - y_2 y_3, x_2 y_3 + y_2 x_3}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \tuple {x_1 \paren {x_2 x_3 - y_2 y_3} - y_1 \paren {x_2 y_3 + y_2 x_3}, y_1 \paren {x_2 x_3 - y_2 y_3} + x_1 \paren {x_2 y_3 + y_2 x_3} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \tuple {x_1 x_2 x_3 - x_1 y_2 y_3 - y_1 x_2 y_3 - y_1 y_2 x_3, y_1 x_2 x_3 - y_1 y_2 y_3 + x_1 x_2 y_3 + x_1 y_2 x_3}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \tuple {\paren {x_1 x_2 x_3 - y_1 y_2 x_3} - \paren {x_1 y_2 y_3 + y_1 x_2 y_3}, \paren {x_1 x_2 y_3 - y_1 y_2 y_3} + \paren {y_1 x_2 x_3 + x_1 y_2 x_3} }\)





Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \tuple {\paren {x_1 x_2 - y_1 y_2} x_3 - \paren {x_1 y_2 + y_1 x_2} y_3, \paren {x_1 x_2 - y_1 y_2} y_3 + \paren {x_1 y_2 + y_1 x_2} x_3}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \tuple {x_1 x_2 - y_1 y_2, x_1 y_2 + y_1 x_2} \tuple {x_3, y_3}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \paren {\tuple {x_1, y_1} \tuple {x_2, y_2} } \tuple {x_3, y_3}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \paren {z_1 z_2} z_3\)





Definition 2 of Complex Number



$\blacksquare$


Examples
Example: $\paren {2 - i} \paren {\paren {-3 + 2 i} \paren {5 - 4 i} } = \paren {\paren {2 - i} \paren {-3 + 2 i} } \paren {5 - 4 i}$
Example: $\paren {2 - i} \paren {\paren {-3 + 2 i} \paren {5 - 4 i} }$
$\paren {2 - i} \paren {\paren {-3 + 2 i} \paren {5 - 4 i} } = 8 + 51 i$


Example: $\paren {\paren {2 - i} \paren {-3 + 2 i} } \paren {5 - 4 i}$
$\paren {\paren {2 - i} \paren {-3 + 2 i} } \paren {5 - 4 i} = 8 + 51 i$

As can be seen:

$\paren {2 - i} \paren {\paren {-3 + 2 i} \paren {5 - 4 i} } = \paren {\paren {2 - i} \paren {-3 + 2 i} } \paren {5 - 4 i}$
$\blacksquare$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 1$. Complex Numbers: $\text {(iii)}$ The fundamental operations $\text {(b)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Subgroups
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Axiomatic Foundations of the Complex Number System: $5$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Axiomatic Foundations of Complex Numbers: $77 \ \text{(b)}$
1990: H.A. Priestley: Introduction to Complex Analysis (revised ed.) ... (previous) ... (next): $1$ The complex plane: Complex numbers $\S 1.2$ The algebraic structure of the complex numbers




