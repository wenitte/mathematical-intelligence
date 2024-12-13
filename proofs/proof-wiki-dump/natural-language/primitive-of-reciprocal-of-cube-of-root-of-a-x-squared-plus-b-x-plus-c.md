# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Cube_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3} = \frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } + C$


Proof
For $a > 0$:














\(\ds \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)

\(=\)







\(\ds \int \frac {\d x} {\paren {\sqrt {\frac {\paren {2 a x + b}^2 + 4 a c - b^2} {4 a} } }^3}\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \int \frac {8 a \sqrt a \rd x} {\paren {\sqrt {\paren {2 a x + b}^2 + 4 a c - b^2} }^3}\)





simplifying




Then:














\(\ds z\)

\(=\)







\(\ds 2 a x + b\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {8 a \sqrt a \rd x} {\paren {\sqrt {\paren {2 a x + b}^2 + 4 a c - b^2} }^3}\)

\(=\)







\(\ds \int \frac {8 a \sqrt a \rd z} {2 a \paren {\sqrt {z^2 + 4 a c - b^2} }^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 4 \sqrt a \int \frac {\d z} {\paren {\sqrt {z^2 + 4 a c - b^2} }^3}\)





Primitive of Constant Multiple of Function




Let $4 a c - b^2 > 0$.
Then:














\(\ds 4 \sqrt a \int \frac {\d z} {\paren {\sqrt {z^2 + 4 a c - b^2} }^3}\)

\(=\)







\(\ds 4 \sqrt a \paren {\frac z {\paren {4 a c - b^2} \sqrt {z^2 + 4 a c - b^2} } } + C\)





Primitive of $\dfrac 1 {\paren {\sqrt {x^2 + a^2} }^3}$




Let $4 a c - b^2 < 0$.
Then:














\(\ds 4 \sqrt a \int \frac {\d z} {\paren {\sqrt {z^2 + 4 a c - b^2} }^3}\)

\(=\)







\(\ds 4 \sqrt a \int \frac {\d z} {\paren {\sqrt {z^2 - \paren {b^2 - 4 a c} } }^3}\)




















\(\ds \)

\(=\)







\(\ds 4 \sqrt a \paren {\frac {-z} {\paren {b^2 - 4 a c} \sqrt {z^2 - \paren {b^2 - 4 a c} } } } + C\)





Primitive of $\dfrac 1 {\paren {\sqrt {x^2 - a^2} }^3}$














\(\ds \)

\(=\)







\(\ds 4 \sqrt a \paren {\frac z {\paren {4 a c - b^2} \sqrt {z^2 + 4 a c - b^2} } } + C\)





simplifying




Thus in both cases the same result applies, and so:














\(\ds 4 \sqrt a \int \frac {\d z} {\paren {\sqrt {z^2 + 4 a c - b^2} }^3}\)

\(=\)







\(\ds \frac {4 \sqrt a \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {\paren {2 a x + b}^2 + 4 a c - b^2} } + C\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {4 \sqrt a \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {4 a \paren {a x^2 + b x + c} } } + C\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } + C\)





simplifying



$\Box$


This needs considerable tedious hard slog to complete it.In particular: Similarly for $a < 0$, unless there's a quick way to cover both casesTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + bx + c}$: $14.290$




