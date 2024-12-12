# 

Source: https://proofwiki.org/wiki/Ferrari%27s_Method


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $P$ be the quartic equation:

$a x^4 + b x^3 + c x^2 + d x + e = 0$
such that $a \ne 0$.

Then $P$ has solutions:

$x = \dfrac {-p \pm \sqrt {p^2 - 8 q} } 4$
where:














\(\ds p\)

\(=\)







\(\ds \dfrac b a \pm \sqrt {\dfrac {b^2} {a^2} - \dfrac {4 c} a + 4 y_1}\)




















\(\ds q\)

\(=\)







\(\ds y_1 \mp \sqrt { {y_1}^2 - \dfrac {4 e} a}\)










where $y_1$ is a real solution to the cubic:

$y^3 - \dfrac c a y^2 + \paren {\dfrac {b d} {a^2} - \dfrac {4 e} a} y + \paren {\dfrac {4 c e} {a^2} - \dfrac {b^2 e} {a^3} - \dfrac {d^2} {a^2} } = 0$

Ferrari's Method is a technique for solving this quartic.


Proof
First we render the quartic into monic form:

$x^4 + \dfrac b a x^3 + \dfrac c a x^2 + \dfrac d a x + \dfrac e a = 0$

Completing the Square in $x^2$:

$\paren {x^2 + \dfrac b {2 a} x}^2 + \paren {\dfrac c a - \dfrac {b^2} {4 a^2} } x^2 + \dfrac d a x + \dfrac e a = 0$
Then we introduce a new variable $y$:

$\paren {x^2 + \dfrac b {2 a} x + \dfrac y 2}^2 + \paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y} x^2 + \paren {\dfrac d a - \dfrac b {2 a} y} x + \paren {\dfrac e a - \dfrac {y^2} 4} = 0$
This equation is valid for any $y$, so let us pick a value of $y$ so as to make:

$\paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y} x^2 + \paren {\dfrac d a - \dfrac b {2 a} y} x + \paren {\dfrac e a - \dfrac {y^2} 4}$
have a zero discriminant.
That is:

$\paren {\dfrac d a - \dfrac b {2 a} y}^2 = 4 \paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y} \paren {\dfrac e a - \dfrac {y^2} 4}$
After some algebra, this can be expressed as a cubic in $y$:

$y^3 - \dfrac c a y^2 + \paren {\dfrac {b d} {a^2} - \dfrac {4 e} a} y + \paren {\dfrac {4 c e} {a^2} - \dfrac {b^2 e} {a^3} - \dfrac {d^2} {a^2} } = 0$
Using (for example) Cardano's Formula, we can find a real solution of this: call it $y_1$.

Now a quadratic equation $p x^2 + q x + r$ can be expressed as:

$p \paren {\paren {x + \dfrac q {2 p} }^2 - \dfrac {q^2 - 4 p r} {4 p^2} }$
If that quadratic has a zero discriminant, i.e. $q^2 = 4 p r$, then this reduces to:

$p \paren {\paren {x + \dfrac q {2 p} }^2}$
which in turn becomes:

$p \paren {\paren {x + \pm \sqrt {\dfrac r p} }^2}$
as $q^2 = 4 p r \implies \dfrac {q^2} {4 p^2} = \dfrac r p$.
So, as:

$\paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y_1} x^2 + \paren {\dfrac d a - \dfrac b {2 a} y_1} x + \paren {\dfrac e a - \dfrac { {y_1}^2} 4}$
has a zero discriminant (we picked $y_1$ to make that happen), we can write it as:

$\paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y_1} \paren {x \pm \dfrac {\sqrt {\paren {\dfrac e a - \dfrac { {y_1}^2} 4} } } {\sqrt {\paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y_1} } } }^2$

Now we return to the equation:

$\paren {x^2 + \dfrac b {2 a} x + \dfrac {y_1} 2}^2 + \paren {\dfrac c a - \dfrac {b^2} {4 a^2} - y_1} x^2 + \paren {\dfrac d a - \dfrac b {2 a} y_1} x + \paren {\dfrac e a - \dfrac { {y_1}^2} 4} = 0$
which can now be written:

$\paren {x^2 + \dfrac b {2 a} x + \dfrac {y_1} 2}^2 = \paren {\dfrac {b^2} {4 a^2} - \dfrac c a + y_1} \paren {x \mp \dfrac {\sqrt {\paren {\dfrac { {y_1}^2} 4 - \dfrac e a} } } {\sqrt {\paren {\dfrac {b^2} {4 a^2} - \dfrac c a + y_1} } } }^2$
Taking square roots of both sides:

$x^2 + \dfrac b {2 a} x + \dfrac {y_1} 2 = \pm x \sqrt {\paren {\dfrac {b^2} {4 a^2} - \dfrac c a + y_1} } \mp \sqrt {\dfrac { {y_1}^2} 4 - \dfrac e a}$
Arranging into canonical quadratic form:

$(1): \quad x^2 + \paren {\dfrac b {2 a} \pm \dfrac 1 2 \sqrt {\dfrac {b^2} {a^2} - \dfrac {4 c} a + 4 y_1} } x + \dfrac 1 2 \paren {y_1 \mp \sqrt { {y_1}^2 - \dfrac {4 e} a} } = 0$

Let:

$p = \dfrac b a \pm \sqrt {\dfrac {b^2} {a^2} - \dfrac {4 c} a + 4 y_1}$
$q = y_1 \mp \sqrt { {y_1}^2 - \dfrac {4 e} a}$

Then equation $(1)$ can be written as:

$x^2 + \dfrac p 2 x + \dfrac q 2 = 0$

Using the Quadratic Formula, putting $a = 1, b = \dfrac p 2, c = \dfrac q 2$:














\(\ds x\)

\(=\)







\(\ds \dfrac {-\dfrac p 2 \pm \sqrt {\dfrac {p^2} 4 - 4 \dfrac q 2} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-\dfrac p 2 \pm \sqrt {\dfrac 1 4} \sqrt {p^2 - 8 q} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-p \pm \sqrt {p^2 - 8 q} } 4\)










Hence the result.
$\blacksquare$


Also presented as
Ferrari's Method can also be presented in the following form:
Let $P$ be the quartic equation:

$x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0$

Then $P$ has solutions:

$x = \dfrac {-p \pm \sqrt {p^2 - 8 q} } 4$
where:














\(\ds p\)

\(=\)







\(\ds a_3 \pm \sqrt { {a_3}^2 - 4 a_2 + 4 y_1}\)




















\(\ds q\)

\(=\)







\(\ds y_1 \mp \sqrt { {y_1}^2 - 4 a_0}\)










where $y_1$ is a real solution to the cubic:

$y^3 - a_2 y^2 + \paren {a_1 a_3 - 4 a_0} y - \paren { {a_1}^2 + a_0 {a_3}^2 - 4 a_0 a_2} = 0$


Also see
Cardano's Formula


Source of Name
This entry was named for Lodovico Ferrari.


Historical Note
Ferrari's Method was published by Gerolamo Cardano in $1545$, in his Artis Magnae, Sive de Regulis Algebraicis, on which Lodovico Ferrari collaborated.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.8$ Algebraic Equations: Solution of Quartic Equations: $3.8.3$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 9$: Solutions of Algebraic Equations: $9.6, \ 9.7$: Quartic Equation
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $4$: Lure of the Unknown: Cubic equations




