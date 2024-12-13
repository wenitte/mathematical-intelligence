# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Logarithm_Form_1



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $x \in \R$.
Then:
$\quad \ds \int \frac {\d x} {x^2 - a^2} = \begin {cases} \dfrac 1 {2 a} \map \ln {\dfrac {a - x} {a + x} } + C & : \size x < a\\
& \\
\dfrac 1 {2 a} \map \ln {\dfrac {x - a} {x + a} } + C & : \size x > a \\
& \\
\text {undefined} & : \size x = a \end {cases}$


Proof
Case where $\size x < a$
Let $\size x < a$.
Then:

$\ds \int \frac {\d x} {x^2 - a^2} = \dfrac 1 {2 a} \map \ln {\dfrac {a - x} {a + x} } + C$
Let $\size x < a$.
Then:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds -\frac 1 a \artanh {\frac x a} + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: $\artanh$ form














\(\ds \)

\(=\)







\(\ds -\frac 1 a \paren {\dfrac 1 2 \map \ln {\dfrac {a + x} {a - x} } } + C\)





$\artanh \dfrac x a$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \map \ln {\dfrac {a - x} {a + x} } + C\)





Logarithm of Reciprocal





Case where $\size x > a$
Let $\size x > a$.
Then:

$\ds \int \frac {\d x} {x^2 - a^2} = \dfrac 1 {2 a} \map \ln {\dfrac {x - a} {x + a} } + C$
Let $\size x > a$.
Then:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds -\frac 1 a \arcoth \frac x a + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: $\arcoth$ form














\(\ds \)

\(=\)







\(\ds -\frac 1 a \paren {\dfrac 1 2 \map \ln {\dfrac {x + a} {x - a} } } + C\)





$\arcoth \dfrac x a$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {2 a} \map \ln {\frac {x + a} {x - a} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \map \ln {\frac {x - a} {x + a} } + C\)





Reciprocal of Logarithm



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 + a^2}$
Primitive of $\dfrac 1 {a^2 - x^2}$: Logarithm Form


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




