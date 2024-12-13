# 

Source: https://proofwiki.org/wiki/Modulus_of_Sum_equals_Modulus_of_Distance_implies_Quotient_is_Imaginary



Theorem
Let $z_1$ and $z_2$ be complex numbers such that:

$\cmod {z_1 + z_2} = \cmod {z_1 - z_2}$

Then $\dfrac {z_2} {z_1}$ is wholly imaginary.


Corollary
Let $P_1$ and $P_2$ be points embedded in the complex plane.
Let $P_1$ and $P_2$ be represented by the complex numbers $z_1$ and $z_2$ be complex numbers such that:

$\cmod {z_1 + z_2} = \cmod {z_1 - z_2}$

Then:

$\angle P_1 O P_2 = 90 \degrees$


Proof
Let $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$.

Then:














\(\ds \cmod {z_1 + z_2}\)

\(=\)







\(\ds \cmod {z_1 - z_2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 + x_2}^2 + \paren {y_1 + y_2}^2\)

\(=\)







\(\ds \paren {x_1 - x_2}^2 + \paren {y_1 - y_2}^2\)





Definition of Complex Modulus








\(\ds \leadsto \ \ \)





\(\ds {x_1}^2 + 2 x_1 x_2 + {x_2}^2 + {y_1}^2 + 2 y_1 y_2 + {y_2}^2\)

\(=\)







\(\ds {x_1}^2 - 2 x_1 x_2 + {x_1}^2 + {y_1}^2 - 2 y_1 y_2 + {y_1}^2\)





Square of Sum, Square of Difference








\(\ds \leadsto \ \ \)





\(\ds 4 x_1 x_2 + 4 y_1 y_2\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x_1 x_2 + y_1 y_2\)

\(=\)







\(\ds 0\)





simplifying




Now we have:














\(\ds \dfrac {z_1} {z_2}\)

\(=\)







\(\ds \frac {x_1 + i y_1} {x_2 + i y_2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {x_1 + i y_1} \paren {x_2 - i y_2} } { {x_2}^2 + {y_2}^2}\)





Definition of Complex Division














\(\ds \)

\(=\)







\(\ds \frac {x_1 x_2 + y_1 y_2} { {x_2}^2 + {y_2}^2} + \frac {i \paren {x_2 y_1 - x_1 y_2} } { {x_2}^2 + {y_2}^2}\)





Definition of Complex Multiplication




But we have:

$x_1 x_2 + y_1 y_2 = 0$
Thus:

$\dfrac {z_1} {z_2} = \dfrac {i \paren {x_2 y_1 - x_1 y_2} } { {x_2}^2 + {y_2}^2}$
which is wholly imaginary.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $147 \ \text{(a)}$




