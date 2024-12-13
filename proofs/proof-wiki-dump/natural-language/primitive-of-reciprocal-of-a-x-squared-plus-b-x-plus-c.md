# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \begin {cases}
\dfrac 2 {\sqrt {4 a c - b^2} } \map \arctan {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\dfrac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C & : b^2 - 4 a c > 0 \\
\dfrac {-2} {2 a x + b} + C & : b^2 = 4 a c
\end {cases}$


$a$ equal to Zero
$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 1 b \ln \size {b x + c} + C$
when $a = 0$.


$b$ equal to Zero
Let $b = 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \begin {cases}
\dfrac 1 {\sqrt {a c} } \map \arctan {x \sqrt {\dfrac a c} } + C & : a c > 0 \\
\dfrac 1 {2 \sqrt {-a c} } \ln \size {\dfrac {a x - \sqrt {-a c} } {a x + \sqrt {-a c} } } + C & : a c < 0 \\
\dfrac {-1} {a x} + C & : c = 0
\end {cases}$


$c$ equal to Zero
Let $c = 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 1 b \ln \size {\frac x {a x + b} } + C$


Proof
First:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 + 4 a c - b^2} {4 a}\)





Completing the Square




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} }\)









Put:














\(\ds z\)

\(=\)







\(\ds 2 a x + b\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a\)





Derivative of Power




Let $D = b^2 - 4 a c$.
Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd z} {z^2 - D}\)





Integration by Substitution





Negative Discriminant
Let $b^2 - 4 a c < 0$.
Then:














\(\ds - D\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds - D\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {4 a c - b^2}\)





by definition of $D$




Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {2 \rd z} {z^2 + q^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 2 q \arctan \frac z q + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {4 a c - b^2} } \map \arctan {\frac {2 a x + b} {\sqrt {4 a c - b^2} } } + C\)





substituting for $z$ and $q$




$\Box$


Positive Discriminant
Let $b^2 - 4 a c > 0$.
Then:














\(\ds D\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {b^2 - 4 a c}\)





Definition of $D$




Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {2 \rd z} {z^2 - q^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 q \ln \size {\frac {z - q} {z + q} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\frac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C\)





substituting for $z$ and $q$




$\Box$


Zero Discriminant
Let $b^2 - 4 a c = 0$.
Then:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {-4 a} {2 a \paren {2 a x + b} } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {2 a x + b} + C\)





simplifying




$\blacksquare$

Also presented as
In some older works, this result can also be seen presented as:

$\ds \int \frac {\d x} {a x^2 + 2 b x + c}$
where the solution is then developed via the form:

$\ds \dfrac 1 a \int \frac {\d x} {\paren {x + \frac b a}^2 + \paren {\frac c a - \frac {b^2} {a^2} } }$


Examples
Primitive of $\dfrac 1 {3 x^2 + 4 x + 2}$
$\ds \int \frac {\d x} {3 x^2 + 4 x + 2} = \dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C$


Primitive of $\dfrac 1 {x^2 + 4 x + 5}$
$\ds \int \dfrac {\d x} {x^2 + 4 x + 5} = \map \arctan {x + 2} + C$


Primitive of $\dfrac 1 {x^2 + 2 a x + b}$
$\ds \int \frac {\d x} {x^2 + 2 a x + b} = \dfrac 1 {\sqrt {b - a^2} } \map \arctan {\dfrac {x + a} {\sqrt {b - a^2} } } + C$
where $b > a^2$.


Also see
Primitive of $\dfrac 1 {a x + b}$ for the case where $a = 0$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + bx + c$: $14.265$




