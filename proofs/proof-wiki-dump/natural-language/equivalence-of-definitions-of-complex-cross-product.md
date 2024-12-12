# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Cross_Product



Theorem
The following definitions of the concept of Complex Cross Product are equivalent:

Definition 1
The cross product of $z_1$ and $z_2$ is defined as:

$z_1 \times z_2 = x_1 y_2 - y_1 x_2$
Definition 2
The cross product of $z_1$ and $z_2$ is defined as:

$z_1 \times z_2 = \cmod {z_1} \, \cmod {z_2} \sin \theta$
where:

$\cmod {z_1}$ denotes the complex modulus of $z_1$
$\theta$ denotes the angle from $z_1$ to $z_2$, measured in the positive direction.
Definition 3
The cross product of $z_1$ and $z_2$ is defined as:

$z_1 \times z_2 := \map \Im {\overline {z_1} z_2}$
where:

$\map \Im z$ denotes the imaginary part of a complex number $z$
$\overline {z_1}$ denotes the complex conjugate of $z_1$
$\overline {z_1} z_2$ denotes complex multiplication.
Definition 4
The cross product of $z_1$ and $z_2$ is defined as:

$z_1 \times z_2 := \dfrac {\overline {z_1} z_2 - z_1 \overline {z_2}} {2 i}$
where:

$\overline {z_1}$ denotes the complex conjugate of $z_1$
$\overline {z_1} z_2$ denotes complex multiplication.


Proof
Definition 1 equivalent to Definition 3













\(\ds \)

\(\)







\(\ds \map \Im {\overline {z_1} z_2}\)





Definition 3 of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \map \Im {\paren {x_1 - i y_1} \paren {x_2 + i y_2} }\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \map \Im {\paren {x_1 x_2 + y_1 y_2} + i \paren {x_1 y_2 - x_2 y_1} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds x_1 y_2 - x_2 y_1\)





Definition of Imaginary Part



$\Box$


Definition 2 equivalent to Definition 3













\(\ds \)

\(\)







\(\ds \map \Im {\overline {z_1} z_2}\)





Definition 3 of Vector Cross Product














\(\ds \)

\(=\)







\(\ds r_1 r_2 \sin \paren {\theta_2 - \theta_1}\)





Complex Cross Product in Exponential Form














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \, \cmod {z_2} \map \sin {\theta_2 - \theta_1}\)





Definition of Polar Form of Complex Number














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \, \cmod {z_2} \sin \theta\)





where $\theta = \theta_2 - \theta_1$ is the angle between $z_1$ and $z_2$



$\Box$


Definition 1 equivalent to Definition 4













\(\ds \)

\(\)







\(\ds \frac {\overline {z_1} z_2 - z_1 \overline {z_2} } {2 i}\)





Definition 4 of Complex Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\paren {x_1 - i y_1} \paren {x_2 + i y_2} - \paren {x_1 + i y_1} \paren {x_2 - i y_2} } {2 i}\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \frac {\paren {\paren {x_1 x_2 + y_1 y_2} + i \paren {x_1 y_2 - x_2 y_1} } - \paren {\paren {x_1 x_2 + y_1 y_2} + i \paren {-x_1 y_2 + x_2 y_1} } } {2 i}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds x_1 y_2 - x_2 y_1\)





after algebra



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Dot and Cross Product




