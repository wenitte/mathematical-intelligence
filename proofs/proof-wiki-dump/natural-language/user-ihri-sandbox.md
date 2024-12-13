# 

Source: https://proofwiki.org/wiki/User:Ihri/Sandbox

Theorem
Let $a$ and $b$ be (strictly) positive real numbers such that $a^2 - b > 0$.
Then:

$\ds \sqrt {a + \sqrt b} = \sqrt {\dfrac {a + \sqrt {a^2 - b} } 2} + \sqrt {\dfrac {a - \sqrt {a^2 - b} } 2}$


Proof
We are given that $a>0$ and $b>0$.
Then:

$a + \sqrt b  > 0$
and so $\ds \sqrt {a + \sqrt b}$ is defined on the real numbers.
Consider the quadratic equation:

$z^2 - a z + \dfrac b 4 = 0$
with discriminant $(- a) ^ 2 - 4 \dfrac b 4 = a ^ 2 - b$ which is a (strictly) positive real number (a given).
Let $x, y$ be the solutions of the above equation.
From Solution to Quadratic Equation, Without loss of generality:














\(\ds x\)

\(=\)







\(\ds \dfrac {a + \sqrt {a^2 - b} } 2\)




















\(\ds y\)

\(=\)







\(\ds \dfrac {a - \sqrt {a^2 - b} } 2\)









with $x > y$. Note $x > 0$ because $ a > 0$.
By Sum of Roots of Quadratic Equation, $x$ and $y$ satisfy:

$x + y = a$
By Product of Roots of Quadratic Equation and the conditions $x > 0, b >0$ we get:

$x y = \dfrac b 4 > 0 \implies y > 0$
which implies $\sqrt x$ and $\sqrt y$ are defined on the real numbers.
Furthermore, from $x y = \dfrac b 4$ we get:














\(\ds x y\)

\(=\)







\(\ds \frac b 4\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 4 x y\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2 \sqrt {x y}\)

\(=\)







\(\ds \sqrt b\)









Finally, substituting into $\sqrt {a + \sqrt b}$:














\(\ds \sqrt {a + \sqrt b}\)

\(=\)







\(\ds \sqrt {x + y + 2 \sqrt {x y} }\)





substituting














\(\ds \)

\(=\)







\(\ds \sqrt { \paren {\sqrt x + \sqrt y} ^ 2 }\)




















\(\ds \)

\(=\)







\(\ds \sqrt x + \sqrt y\)





Square_of_Sum














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {a + \sqrt {a^2 - b} } 2} + \sqrt {\dfrac {a - \sqrt {a^2 - b} } 2}\)





substitution



$\blacksquare$






