# 

Source: https://proofwiki.org/wiki/Complex_Modulus_of_Product_of_Complex_Numbers



Theorem
Let $z_1, z_2 \in \C$ be complex numbers.
Let $\cmod z$ be the modulus of $z$.

Then:

$\cmod {z_1 z_2} = \cmod {z_1} \cdot \cmod {z_2}$


General Result
Let $z_1, z_2, \ldots, z_n \in \C$ be complex numbers.
Let $\cmod z$ be the modulus of $z$.

Then:

$\cmod {z_1 z_2 \cdots z_n} = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_n}$


Proof 1
Let $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$, where $x_1, y_1, x_2, y_2 \in \R$.















\(\ds \cmod {z_1 z_2}\)

\(=\)







\(\ds \sqrt {\paren {x_1 x_2 - y_1 y_2}^2 + \paren {x_1 y_2 + x_2 y_1}^2}\)





Definition of Complex Modulus, Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {x_1^2 x_2^2 + y_1^2 y_2^2 - 2 x_1 x_2 y_1 y_2} + \paren {x_1^2 y_2^2 + x_2^2 y_1^2 + 2 x_1 x_2 y_1 y_2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {x_1^2 x_2^2 + y_1^2 y_2^2 + x_1^2 y_2^2 + x_2^2 y_1^2}\)
























\(\ds \cmod {z_1} \cdot \cmod {z_2}\)

\(=\)







\(\ds \sqrt {x_1^2 + y_1^2}  \sqrt {x_2^2 + y_2^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {x_1^2 + y_1^2} \paren {x_2^2 + y_2^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {x_1^2 x_2^2 + y_1^2 y_2^2 + x_1^2 y_2^2 + x_2^2 y_1^2}\)









$\blacksquare$


Proof 2
Let $\overline z$ denote the complex conjugate of $z$. 
Then:














\(\ds \cmod {z_1 z_2}\)

\(=\)







\(\ds \sqrt {\paren {z_1 z_2} \overline {\paren {z_1 z_2} } }\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \sqrt {z_1 \overline {z_1} z_2 \overline {z_2} }\)





Product of Complex Conjugates, Complex Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \sqrt {z_1 \overline {z_1} } \sqrt {z_2 \overline {z_2} }\)





Power of Product














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \cmod {z_2}\)









$\blacksquare$


Proof 3
Let:

$z_1 = r_1 \paren {\cos \theta_1 + i \sin \theta_1}$
$z_2 = r_2 \paren {\cos \theta_2 + i \sin \theta_2}$
Then:














\(\ds \cmod {z_1 z_2}\)

\(=\)







\(\ds \cmod {r_1 \paren {\cos \theta_1 + i \sin \theta_1} r_2 \paren {\cos \theta_2 + i \sin \theta_2} }\)





Definition of Polar Form of Complex Number














\(\ds \)

\(=\)







\(\ds \cmod {r_1 r_2 \paren {\map \cos {\theta_1 + \theta_2} + i \map \sin {\theta_1 + \theta_2} } }\)





Product of Complex Numbers in Polar Form














\(\ds \)

\(=\)







\(\ds r_1 r_2\)





Definition of Polar Form of Complex Number














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \cmod {z_2}\)





Definition of Polar Form of Complex Number



$\blacksquare$


Also see
Absolute Value Function is Completely Multiplicative


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 2$. Conjugate Complex Numbers
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory: $(1.11)$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Multiplication and Division: $3.7.11$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Absolute Value: $1$
1990: H.A. Priestley: Introduction to Complex Analysis (revised ed.) ... (previous) ... (next): $1$ The complex plane: Complex numbers $\S 1.3$ Complex conjugation




