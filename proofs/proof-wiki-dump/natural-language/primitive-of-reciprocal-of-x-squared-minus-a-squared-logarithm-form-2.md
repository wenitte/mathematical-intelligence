# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Logarithm_Form_2



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $x \in \R$ such that $\size x \ne a$.


$\ds \int \frac {\d x} {x^2 - a^2} = \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C$


Proof 1
Let $x > a$.
Then:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds -\frac 1 a \arcoth {\frac x a} + C\)





Primitive of Reciprocal of $x^2 - a^2$ in $\arcoth$ form














\(\ds \)

\(=\)







\(\ds -\frac 1 a \paren {\dfrac 1 2 \map \ln {\dfrac {x + a} {x - a} } } + C\)





$\arcoth {\dfrac x a}$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {x + a} {x - a} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {x - a} {x + a} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C\)





as $\dfrac {x - a} {x + a} > 0$ for $x > a$




Let $x < -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds \int \frac {-\d z} {\paren {-z}^2 - a^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\d z} {z^2 - a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {z - a} {z + a} } + C\)





from above














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {z + a} {z - a} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {-x + a} {-x - a} } + C\)





substituting $-x$ back for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {\size {x - a} } {\size {x + a} } } + C\)





as $x < -a$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C\)









The result follows.
$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds \int \frac {\d x} {\paren {x - a} \paren {x + a} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {2 a \paren {x - a} } - \int \frac {\d x} {2 a \paren {x + a} }\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d x} {x - a} - \frac 1 {2 a} \int \frac {\d x} {x + a}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {x - a} - \frac 1 {2 a} \ln \size {x + a} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \ln \size {\dfrac {x - a} {x + a} } + C\)





Difference of Logarithms



$\blacksquare$


Proof 3
From the $1$st logarithm form:
$\quad \ds \int \frac {\d x} {x^2 - a^2} = \begin {cases} \dfrac 1 {2 a} \map \ln {\dfrac {a - x} {a + x} } + C & : \size x < a \\
& \\
\dfrac 1 {2 a} \map \ln {\dfrac {x - a} {x + a} } + C & : \size x > a \\
& \\
\text {undefined} & : \size x = a \end {cases}$

From Primitive of Reciprocal of a squared minus x squared: Logarithm Form: Lemma:

$\map \ln {\dfrac {x - a} {x + a} }$ is defined if and only if $\size x > a$
$\map \ln {\dfrac {a - x} {a + x} }$ is defined if and only if $\size x < a$

Let $\size x > a$.
Then $\map \ln {\dfrac {x - a} {x + a} }$ is defined.
We have that:














\(\ds \dfrac {x - a} {x + a}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - a} {x + a}\)

\(=\)







\(\ds \size {\dfrac {x - a} {x + a} }\)









So the result holds for $\size x > a$.

Let $\size x < a$.
Then $\map \ln {\dfrac {a - x} {a + x} }$ is defined.
We have:
We have that:














\(\ds \dfrac {a - x} {a + x}\)

\(=\)







\(\ds -\dfrac {x - a} {x + a}\)




















\(\ds \)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - x} {a + x}\)

\(=\)







\(\ds \size {\dfrac {x - a} {x + a} }\)









The result follows.
$\blacksquare$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $13$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $21$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $28$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




