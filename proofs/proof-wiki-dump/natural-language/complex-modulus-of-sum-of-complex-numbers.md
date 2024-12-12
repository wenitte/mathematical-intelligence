# 

Source: https://proofwiki.org/wiki/Complex_Modulus_of_Sum_of_Complex_Numbers



Theorem
Let $z_1, z_2 \in \C$ be complex numbers.
Let $\theta_1$ and $\theta_2$ be arguments of $z_1$ and $z_2$, respectively.

Then:

$\cmod {z_1 + z_2}^2 = \cmod {z_1}^2 + \cmod {z_2}^2 + 2 \cmod {z_1} \cmod {z_2} \, \map \cos {\theta_1 - \theta_2}$


Proof 1
We have:














\(\ds \cmod {z_1 + z_2}^2\)

\(=\)







\(\ds \paren {z_1 + z_2} \paren {\overline {z_1} + \overline {z_2} }\)





Modulus in Terms of Conjugate and Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds z_1 \overline {z_1} + z_2 \overline {z_2} + z_1\overline {z_2} + \overline {z_1} z_2\)




















\(\ds \)

\(=\)







\(\ds \cmod {z_1}^2 + \cmod {z_2}^2 + 2 \, \map \Re {z_1 \overline {z_2} }\)





Modulus in Terms of Conjugate and Sum of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \cmod {z_1}^2 + \cmod {z_2}^2 + 2 \, \cmod {z_1} \cmod {z_2} \map \cos {\theta_1 - \theta_2}\)





Product of Complex Numbers in Polar Form and Argument of Complex Conjugate equals Negative of Argument



$\blacksquare$


Proof 2













\(\ds \cmod {z_1 + z_2}^2\)

\(=\)







\(\ds \paren {\cmod {z_1} \cos \theta_1 + \cmod {z_2} \cos \theta_2}^2 + \paren {\cmod {z_1} \sin \theta_1 + \cmod {z_2} \sin \theta_2}^2\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds 2 \cmod {z_1} \cmod {z_2} \cos \theta_1 \cos \theta_2 + \cmod {z_1}^2 \cos^2 \theta_1 + \cmod {z_2}^2 \cos^2 \theta_2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 \cmod {z_1} \cmod {z_2} \sin \theta_1 \sin \theta_2 + \cmod {z_1}^2 \sin^2 \theta_1 + \cmod {z_2}^2 \sin^2 \theta_2\)




















\(\ds \)

\(=\)







\(\ds 2 \cmod {z_1} \cmod {z_2} \paren {\cos \theta_1 \cos \theta_2 + \sin \theta_1 \sin \theta_2} + \cmod {z_1}^2 + \cmod {z_2}^2\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \cmod {z_1}^2 + \cmod {z_2}^2 + 2 \cmod {z_1} \cmod {z_2} \, \map \cos {\theta_1 - \theta_2}\)





Cosine of Difference



$\blacksquare$


Also see
Complex Modulus of Difference of Complex Numbers
Sum of Complex Numbers in Exponential Form




