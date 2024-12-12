# 

Source: https://proofwiki.org/wiki/Approximations_to_Equilateral_Triangles_by_Heronian_Triangles



Theorem
The sequence of best approximations to an equilateral triangle by a Heronian triangle begins:

The $\tuple {3, 4, 5}$ triangle, with area $6$
The $\tuple {13, 14, 15}$ triangle, with area $84$, where $14 = 4^2 - 2$
The $\tuple {193, 194, 195}$ triangle, where $194 = 14^2 - 2$
The $\tuple {37 \, 633, 37 \, 634, 37 \, 635}$ triangle, where $37 \, 634 = 194^2 - 2$
and so on.
This sequence is A003010 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Suppose a triangle with side lengths $\tuple {a - 1, a, a + 1}$ is Heronian.

By Heron's Formula, the area of this triangle is:














\(\ds \)

\(\)







\(\ds \sqrt {s \paren {s - a + 1} \paren {s - a} \paren {s - a - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac 3 2 a \paren {\frac 1 2 a + 1} \paren {\frac 1 2 a} \paren {\frac 1 2 a - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \sqrt {3 \paren {a + 2} \paren {a - 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \sqrt {3 a^2 - 12}\)









By Definition of Heronian Triangle, $\dfrac a 4 \sqrt {3 a^2 - 12} \in \N$.
Hence it is necessary for $a$ to be even.

Writing $a = 2 n$:

$\dfrac a 4 \sqrt {3 a^2 - 12} = \dfrac {2 n} 4 \sqrt {3 \paren {2 n}^2 - 12} = n \sqrt {3 n^2 - 3}$
So we need to find $n$ such that $\sqrt {3 n^2 - 3}$ is an integer.
This corresponds to a Pell-like equation $x^2 - 3 n^2 = -3$.
This equation has a trivial solution $\tuple {x, n} = \tuple {0, 1}$.

The smallest $n$ with integer $x$ solution to $x^2 - 3 n^2 = 1$ are:

$\tuple {n, x} = \tuple {0, 1}$ (trivial), $\tuple {1, 2}$
Then a family of solutions can be found by:

$x^2 - 3 y^2 = 1 = \paren {2^2 - 3 \times 1^2}^m$ for all $m \in \N$
Factorising gives:

$\paren {x - \sqrt 3 y} \paren {x + \sqrt 3 y} = \paren {2 - \sqrt 3}^m \paren {2 + \sqrt 3}^m$
The system of equations:

$x - \sqrt 3 y = \paren {2 - \sqrt 3}^m$
$x + \sqrt 3 y = \paren {2 + \sqrt 3}^m$
Has solutions:

$x = \dfrac {\paren {2 - \sqrt 3}^m + \paren {2 + \sqrt 3}^m} 2$
$y = \dfrac {\paren {2 + \sqrt 3}^m - \paren {2 - \sqrt 3}^m} {2 \sqrt 3}$

Suppose that $p^2 - 3 q^2 = -3, r^2 - 3 s^2 = 1$.
Then:














\(\ds \)

\(\)







\(\ds \paren {p^2 - 3 q^2} \paren {r^2 - 3 s^2}\)




















\(\ds \)

\(=\)







\(\ds p^2 r^2 - 3 q^2 r^2 - 3 p^2 s^2 + 9 q^2 s^2\)




















\(\ds \)

\(=\)







\(\ds p^2 r^2 - 3 q^2 r^2 - 3 p^2 s^2 + 9 q^2 s^2 \pm 6 p q r s \mp 6 p q r s\)




















\(\ds \)

\(=\)







\(\ds \paren {p r \pm 3 q s}^2 - 3 \paren {p s \pm q r}^2\)




















\(\ds \)

\(=\)







\(\ds -3\)









showing that $\tuple {p r \pm 3 q s, p s \pm q r}$ is a solution for $x^2 - 3 y^2 = -3$.

In particular:

$\tuple {\dfrac {\sqrt 3 \paren {\paren {2 + \sqrt 3}^m - \paren {2 - \sqrt 3}^m}} 2, \dfrac {\paren {2 - \sqrt 3}^m + \paren {2 + \sqrt 3}^m} 2}$ is a solution.
From our discussion above:

$a = \paren {2 - \sqrt 3}^m + \paren {2 + \sqrt 3}^m$ is a family of solutions for the almost-equilateral Heronian triangles.

The sequence above is a subfamily of the solution above, as seen by:














\(\ds m = 1\)

\(\implies\)







\(\ds \paren {2 - \sqrt 3}^1 + \paren {2 + \sqrt 3}^1 = 4\)




















\(\ds \paren {\paren {2 - \sqrt 3}^m + \paren {2 + \sqrt 3}^m}^2 - 2\)

\(=\)







\(\ds \paren {2 - \sqrt 3}^{2 m} + \paren {2 + \sqrt 3}^{2 m} + 2 \paren {2 - \sqrt 3}^m \paren {2 + \sqrt 3}^m - 2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 - \sqrt 3}^{2 m} + \paren {2 + \sqrt 3}^{2 m} + 2 \paren {\paren {2 - \sqrt 3} \paren {2 + \sqrt 3} }^m - 2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 - \sqrt 3}^{2 m} + \paren {2 + \sqrt 3}^{2 m} + 2 \paren 1^m - 2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 - \sqrt 3}^{2 m} + \paren {2 + \sqrt 3}^{2 m}\)










Some other solutions include:

$m = 3: \tuple {51, 52, 53}$, with area $\sqrt {78 \times 27 \times 26 \times 25} = 1170$
$m = 5: \tuple {723, 724, 725}$, with area $\sqrt {1086 \times 361 \times 362 \times 363} = 226 \, 974$

The sequence of the $a$ elements is A003500 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The sequence of the area elements is A011945 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$


Also see
These triangles are known as Fleenor-Heronian triangles.


Sources
1996-7: Charles R. Fleenor: Heronian Triangles with Consecutive Integer Sides (J. Recr. Math. Vol. 28, no. 2: pp. 113 – 115)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $14$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $14$




