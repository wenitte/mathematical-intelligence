# 

Source: https://proofwiki.org/wiki/Division_of_Complex_Numbers_in_Polar_Form



Theorem
Let $z_1 := \polar {r_1, \theta_1}$ and $z_2 := \polar {r_2, \theta_2}$ be complex numbers expressed in polar form, such that $z_2 \ne 0$.

Then:

$\dfrac {z_1} {z_2} = \dfrac {r_1} {r_2} \paren {\map \cos {\theta_1 - \theta_2} + i \map \sin {\theta_1 - \theta_2} }$
or:

$\dfrac {z_1} {z_2} = \dfrac {r_1} {r_2} \map \cis {\theta_1 - \theta_2}$


Proof













\(\ds \frac {z_1} {z_2}\)

\(=\)







\(\ds \frac {r_1 \paren {\cos \theta_1 + i \sin \theta_1} } {r_2 \paren {\cos \theta_2 + i \sin \theta_2} }\)





Definition of Polar Form of Complex Number














\(\ds \)

\(=\)







\(\ds \frac {\paren {r_1 \paren {\cos \theta_1 + i \sin \theta_1} } \paren {r_2 \paren {\cos \theta_2 - i \sin \theta_2} } } {\paren {r_2 \paren {\cos \theta_2 + i \sin \theta_2} } \paren {r_2 \paren {\cos \theta_2 - i \sin \theta_2} } }\)





multiplying numerator and denominator by $r_2 \paren {\cos \theta_1 - i \sin \theta_1}$














\(\ds \)

\(=\)







\(\ds \frac {r_1 r_2 \paren {\map \cos {\theta_1 - \theta_2} + i \map \sin {\theta_1 - \theta_2} } } {r_2^2 \paren {\map \cos {\theta_2 - \theta_2} + i \map \sin {\theta_2 - \theta_2} } }\)





Product of Complex Numbers in Polar Form














\(\ds \)

\(=\)







\(\ds \frac {r_1 \paren {\map \cos {\theta_1 - \theta_2} + i \map \sin {\theta_1 - \theta_2} } } {r_2 \paren {\cos 0 + i \sin 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac {r_1 \paren {\map \cos {\theta_1 - \theta_2} + i \map \sin {\theta_1 - \theta_2} } } {r_2 \paren {1 + 0} }\)





Cosine of $0 \degrees$ and Sine of $0 \degrees$














\(\ds \)

\(=\)







\(\ds \frac {r_1} {r_2} \paren {\map \cos {\theta_1 - \theta_2} + i \map \sin {\theta_1 - \theta_2} }\)









$\blacksquare$


Examples
Example: $\dfrac {\paren {2 \cis 15 \degrees}^7} {\paren {4 \cis 45 \degrees}^3}$
$\dfrac {\paren {2 \cis 15 \degrees}^7} {\paren {4 \cis 45 \degrees}^3} = \sqrt 3 - i$


Example: $\dfrac {\paren {8 \cis 40 \degrees}^3} {\paren {2 \cis 60 \degrees}^4}$
$\dfrac {\paren {8 \cis 40 \degrees}^3} {\paren {2 \cis 60 \degrees}^4} = -16 - 16 \sqrt 3 i$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 3$. Geometric Representation of Complex Numbers
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $6.8$: Multiplication and Division of Complex Numbers in Polar Form
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: De Moivre's Theorem
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $19 \ \text{(b)}$




