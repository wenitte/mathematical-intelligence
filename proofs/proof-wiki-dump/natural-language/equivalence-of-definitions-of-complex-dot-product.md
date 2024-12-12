# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Dot_Product



Theorem
The following definitions of the concept of Complex Dot Product are equivalent:

Definition 1
The dot product of $z_1$ and $z_2$ is defined as:

$z_1 \circ z_2 = x_1 x_2 + y_1 y_2$
Definition 2
The dot product of $z_1$ and $z_2$ is defined as:

$z_1 \circ z_2 = \cmod {z_1} \, \cmod{z_2} \cos \theta$
where:

$\cmod {z_1}$ denotes the complex modulus of $z_1$
$\theta$ denotes the angle between $z_1$ and $z_2$.
Definition 3
The dot product of $z_1$ and $z_2$ is defined as:

$z_1 \circ z_2 := \map \Re {\overline {z_1} z_2}$
where:

$\map \Re z$ denotes the real part of a complex number $z$
$\overline {z_1}$ denotes the complex conjugate of $z_1$
$\overline {z_1} z_2$ denotes complex multiplication.
Definition 4
The dot product of $z_1$ and $z_2$ is defined as:

$z_1 \circ z_2 := \dfrac {\overline {z_1} z_2 + z_1 \overline {z_2} } 2$
where:

$\overline {z_1}$ denotes the complex conjugate of $z_1$
$\overline {z_1} z_2$ denotes complex multiplication.


Proof
Definition 1 equivalent to Definition 3













\(\ds \)

\(\)







\(\ds \map \Re {\overline {z_1} z_2}\)





Definition 3 of Dot Product














\(\ds \)

\(=\)







\(\ds \map \Re {\paren {x_1 - i y_1} {x_2 + i y_2} }\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \map \Re {\paren {x_1 x_2 + y_1 y_2} + i \paren {x_1 y_2 - x_2 y_1} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds x_1 x_2 + y_1 y_2\)





Definition of Real Part



$\Box$


Definition 2 equivalent to Definition 3













\(\ds \)

\(\)







\(\ds \map \Re {\overline {z_1} z_2}\)





Definition 3 of Dot Product














\(\ds \)

\(=\)







\(\ds r_1 r_2 \map \cos {\theta_2 - \theta_1}\)





Complex Dot Product in Exponential Form














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \, \cmod {z_2} \map \cos {\theta_2 - \theta_1}\)





Definition of Polar Form of Complex Number














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \, \cmod {z_2} \cos \theta\)





where $\theta = \theta_2 - \theta_1$ is the angle between $z_1$ and $z_2$



$\Box$


Definition 1 equivalent to Definition 4













\(\ds \)

\(\)







\(\ds \frac {\overline {z_1} z_2 + z_1 \overline {z_2} } 2\)





Definition 4 of Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\paren {x_1 - i y_1} \paren {x_2 + i y_2} + \paren {x_1 + i y_1} \paren {x_2 - i y_2} } 2\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \frac {\paren {\paren {x_1 x_2 + y_1 y_2} + i \paren {x_1 y_2 - x_2 y_1} } + \paren {\paren {x_1 x_2 + y_1 y_2} + i \paren {-x_1 y_2 + x_2 y_1} } } 2\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds x_1 x_2 + y_1 y_2\)





after algebra



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Dot and Cross Product




