# 

Source: https://proofwiki.org/wiki/Characteristic_of_Quadratic_Equation_that_Represents_Two_Straight_Lines

Theorem
Consider the quadratic equation in $2$ variables:

$(1): \quad a x^2 + b y^2 + 2 h x y + 2 g x + 2 f y + c = 0$
where $x$ and $y$ are independent variables.

Then $(1)$ represents $2$ straight lines if and only if its discriminant equals zero:

$a b c + 2 f g h - a f^2 - b g^2 - c h^2 = 0$

This can also be expressed in the form of a determinant:

$\begin {vmatrix} a & h & g \\ h & b & f \\ g & f & c \end {vmatrix} = 0$


Proof
Suppose that $a \ne 0$.
We have:














\(\ds a x^2 + b y^2 + 2 h x y + 2 g x + 2 f y + c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds a^2 x^2 + a b y^2 + 2 a h x y + 2 a g x + 2 a f y + c\)

\(=\)







\(\ds 0\)





multiplying by $a$








\(\ds \leadsto \ \ \)





\(\ds \paren {a x + h y + g}^2 + a b y^2 + 2 a f y + a c\)

\(=\)







\(\ds 2 g h y + h^2 y^2 + g^2\)





completing the square in $x$ terms




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {a x + h y + g}^2 - \paren {\paren {h^2 - a b} y^2 + 2 \paren {g h - a f} y + \paren {g^2 - a c} }\)

\(=\)







\(\ds 0\)





rearranging




In order that the second part is a perfect square in $y$, it is necessary that:














\(\ds \paren {g h - a f}^2\)

\(=\)







\(\ds \paren {h^2 - a b} \paren {g^2 - a c}\)














\(\ds \leadsto \ \ \)





\(\ds g^2 h^2 - 2 a f g h + a^2 f^2\)

\(=\)







\(\ds g^2 h^2 - a b g^2 - a c h^2 + a^2 b c\)





multiplying out




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a b c + 2 f g h - a f^2 - b g^2 - c h^2\)

\(=\)







\(\ds 0\)





simplifying, rearranging and dividing by $a$ which is non-zero




Conversely, if $(3)$ is true, then $(2)$ can be expressed in the form of a Difference of Two Squares:




\(\text {(2)}: \quad\)









\(\ds \paren {a x + h y + g}^2 - \paren {\paren {h^2 - a b} y^2 + 2 \paren {g h - a f} y + \paren {g^2 - a c} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a x + h y + g}^2 - \paren {h^2 - a b} \paren {y^2 + 2 \dfrac {g h - a f} {h^2 - a b} y + \dfrac {g^2 - a c} {h^2 - a b} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a x + h y + g}^2 - \paren {h^2 - a b} \paren {\paren {y + \dfrac {g h - a f} {h^2 - a b} }^2 + \dfrac {g^2 - a c} {h^2 - a b} - \paren {\dfrac {g h - a f} {h^2 - a b} }^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a x + h y + g}^2 - \paren {h^2 - a b} \paren {y + \dfrac {g h - a f} {h^2 - a b} }^2\)

\(=\)







\(\ds 0\)





as $\paren {g h - a f}^2 - \paren {h^2 - a b} \paren {g^2 - a c}$




Hence $(2)$ has $2$ factors, which can be seen to be the equations of straight lines.
$\Box$

Let $a = 0$ but $b \ne 0$.
Then: 














\(\ds b y^2 + 2 h x y + 2 g x + 2 f y + c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds b^2 y^2 + 2 b h x y + 2 b g x + 2 b f y + b c\)

\(=\)







\(\ds 0\)





multiplying by $b$








\(\ds \leadsto \ \ \)





\(\ds \paren {b y + h x + f}^2 + 2 b g x + b c\)

\(=\)







\(\ds 2 f h x + h^2 x^2 + f^2\)





completing the square in $y$ terms








\(\ds \leadsto \ \ \)





\(\ds \paren {b y + h x + f}^2 - \paren {h^2 x^2 + 2 \paren {f h - b g} x + \paren {f^2 - b c} }\)

\(=\)







\(\ds 0\)





rearranging




In order that the second part is a perfect square in $x$, it is necessary that:














\(\ds \paren {f h - b g}^2\)

\(=\)







\(\ds h^2 \paren {f^2 - b c}\)














\(\ds \leadsto \ \ \)





\(\ds f^2 h^2 - 2 b f g h + b^2 g^2\)

\(=\)







\(\ds f^2 h^2 - b c h^2\)





multiplying out




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 f g h - b g^2 - c h^2\)

\(=\)







\(\ds 0\)





simplifying, rearranging and dividing by $b$ which is non-zero



it is noted that $(4)$ is the same as $(3)$ but with $a = 0$.
$\Box$

Suppose $a = 0$ and $b = 0$ but $h \ne 0$.
Then:














\(\ds 2 h x y + 2 g x + 2 f y + c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 h^2 x y + 2 g h x + 2 f h y + c h\)

\(=\)







\(\ds 0\)





multiplying by $h$




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 \paren {h x + f} \paren {h y + g} + c h\)

\(=\)







\(\ds 2 f g\)





extracting factors and completing rectangle



and it is seen that in order for $(1)$ to be divisible into the $2$ required factors:

$2 \paren {h x + f} \paren {h y + g} = 0$
it is necessary for $c h = 2 f g$.
This is again the same as $(3)$ when you set $a = 0$ and $b = 0$.
$\Box$

If $a = 0$ and $b = 0$ and $h = 0$, then $(1)$ is not a quadratic equation.
All cases have been covered.
$\Box$

Finally we see that:














\(\ds \begin {vmatrix} a & h & g \\ h & b & f \\ g & f & c \end {vmatrix}\)

\(=\)







\(\ds a \begin {vmatrix} b & f \\ f & c \end {vmatrix} - h \begin {vmatrix} h & f \\ g & c \end {vmatrix} + g \begin {vmatrix} h & b \\ g & f \end {vmatrix}\)





Determinant of Order 3














\(\ds \)

\(=\)







\(\ds a \paren {b c - f^2} - h \paren {h c - f g} + g \paren {h f - b g}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds a b c + 2 f g h - a f^2 - b g^2 - c h^2\)





simplifying



$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $14$. Condition that the general quadratic equation of the second degree should represent two straight lines




