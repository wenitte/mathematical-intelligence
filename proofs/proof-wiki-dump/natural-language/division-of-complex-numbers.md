# 

Source: https://proofwiki.org/wiki/Division_of_Complex_Numbers



Theorem
Let $z_1 := a_1 + i b_1$ and $z_2 := a_2 + i b_2$ be complex numbers such that $z_2 \ne 0$.

The operation of division is performed on $z_1$ by $z_2$ as follows:

$\dfrac {z_1} {z_2} = \dfrac {a_1 a_2 + b_1 b_2} {a_2^2 + b_2^2} + i \dfrac {a_2 b_1 - a_1 b_2} {a_2^2 + b_2^2}$


Proof 1













\(\ds \frac {z_1} {z_2}\)

\(=\)







\(\ds z_1 \paren {z_2}^{-1}\)





Definition of Complex Division














\(\ds \)

\(=\)







\(\ds \paren {a_1 + i b_1} \dfrac {a_2 - i b_2} {a_2^2 + b_2^2}\)





Inverse for Complex Multiplication














\(\ds \)

\(=\)







\(\ds \frac {\paren {a_1 a_2 + b_1 b_2} + i \paren {a_2 b_1 - a_1 b_2} } {a_2^2 + b_2^2}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \frac {a_1 a_2 + b_1 b_2} {a_2^2 + b_2^2} + i \frac {a_2 b_1 - a_1 b_2} {a_2^2 + b_2^2}\)









$\blacksquare$


Proof 2













\(\ds \frac {z_1} {z_2}\)

\(=\)







\(\ds \frac {z_1 \overline {z_2} } {\cmod {z_2}^2}\)





Complex Division as Product with Conjugate over Square of Modulus














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a_1 + i b_1} \paren {a_2 - i b_2} } {\cmod {z_2}^2}\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a_1 + i b_1} \paren {a_2 - i b_2} } {\paren {\sqrt { {a_2}^2 + {b_2}^2} }^2}\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds \frac {\paren {a_1 a_2 + b_1 b_2} + i \paren {a_2 b_1 - a_1 b_2} } { {a_2}^2 + {b_2}^2}\)





Definition of Complex Multiplication and simplification














\(\ds \)

\(=\)







\(\ds \frac {a_1 a_2 + b_1 b_2} { {a_2}^2 + {b_2}^2} + i \frac {a_2 b_1 - a_1 b_2} { {a_2}^2 + {b_2}^2}\)









$\blacksquare$


Also presented as
The operation of complex division on $z_1$ by $z_2$ can also be presented as:

$\dfrac {z_1} {z_2} = \dfrac {a_1 a_2 + b_1 b_2 + i \paren {a_2 b_1 - a_1 b_2} } { {a_2}^2 + {b_2}^2}$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 1$. Complex Numbers: $\text {(iv)}$ The definition of division
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory: $(1.13)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $6.5$: Division of Complex Numbers




