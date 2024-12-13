# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/a_less_than_0



Theorem
Let $a \in \R_{< 0}$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \dfrac {-1} {\sqrt {-a} } \map \arcsin {\dfrac {2 a x + b} {\sqrt {\size {b^2 - 4 a c} } } } + C$
given that $b^2 \ne 4 a c$.


Proof
Completing the Square
First:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a}\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} {4 \paren {-a} }\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt {-a} \rd x} {\sqrt {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} }\)










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














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt {-a} \rd x} {\sqrt {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} }\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \int \frac {2 \sqrt {-a} \rd z} {2 a \sqrt {D - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {-\sqrt {-a} \rd z} {-a \sqrt {D - z^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {-\d z} {\sqrt {-a} \sqrt {D - z^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \int \frac {\d z} {\sqrt {D - z^2} }\)





Primitive of Constant Multiple of Function





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





by definition of $D$




Thus:














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \int \frac {\d z} {\sqrt {q^2 - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \arcsin \frac z q + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \map \arcsin {\frac {2 a x + b} {\sqrt {b^2 - 4 a c} } } + C\)





substituting for $z$ and $q$



$\Box$


Negative Discriminant
Let $b^2 - 4 a c < 0$.
Let $D' = -D = 4 a c - b^2$.
Then:














\(\ds D'\)

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







\(\ds \sqrt {4 a c - b^2}\)





by definition of $D$




Thus:














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \int \frac {\d z} {\sqrt {D - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \int \frac {\d z} {\sqrt {-D' - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \int \frac {\d z} {\sqrt {q^2 - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \arcsin \frac z q + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a} } \map \arcsin {\frac {2 a x + b} {\sqrt {4 a c - b^2} } } + C\)





substituting for $z$ and $q$



$\Box$


Zero Discriminant
Suppose that $b^2 - 4 a c = 0$.
Then:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a}\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2} {4 a}\)





as $b^2 - 4 a c = 0$



But we have that:

$\paren {2 a x + b}^2 > 0$
while under our assertion that $a < 0$:

$4 a < 0$
and so:

$a x^2 + b x + c < 0$
Thus on the real numbers $\sqrt {a x^2 + b x + c}$ is not defined.
Hence it follows that:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$
is not defined.
$\Box$

In summary:

For $b^2 - 4 a c > 0: \ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \frac {-1} {\sqrt {-a} } \map \arcsin {\frac {2 a x + b} {\sqrt {b^2 - 4 a c} } } + C$
For $b^2 - 4 a c < 0: \ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \frac {-1} {\sqrt {-a} } \map \arcsin {\frac {2 a x + b} {\sqrt {-\paren {b^2 - 4 a c} } } } + C$
and so by definition of absolute value:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \dfrac {-1} {\sqrt {-a} } \map \arcsin {\dfrac {2 a x + b} {\sqrt {\size {b^2 - 4 a c} } } } + C$
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: Type $\text D$.




