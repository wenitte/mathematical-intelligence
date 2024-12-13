# 

Source: https://proofwiki.org/wiki/Pythagorean_Triangles_whose_Area_equal_their_Perimeter

Theorem
There exist exactly $2$ Pythagorean triples which define a Pythagorean triangle whose area equals its perimeter:

$(1): \quad \tuple {6, 8, 10}$, leading to an area and perimeter of $24$
$(2): \quad \tuple {5, 12, 13}$, leading to an area and perimeter of $30$.


Proof
From Area of Right Triangle, the area $\AA$ is:

$\AA = \dfrac {a b} 2$
where $a$ and $b$ are the legs.
$(1): \quad$ The area of the $\tuple {6, 8, 10}$ triangle is $\dfrac {6 \times 8} 2 = 24$.
Its perimeter equals $6 + 8 + 10 = 24$.

$(2): \quad$ The area of the $\tuple {5, 12, 13}$ triangle is $\dfrac {5 \times 12} 2 = 30$.
Its perimeter equals $5 + 12 + 13 = 30$.

It remains to prove that these are the only ones.

Let $a, b, c$ be the lengths of the sides of a Pythagorean triangle $T$.
Thus $a, b, c$ form a Pythagorean triple.
By definition of Pythagorean triple, $a, b, c$ are in the form:

$2 m n, m^2 - n^2, m^2 + n^2$
We have that $m^2 + n^2$ is always the hypotenuse.
Thus the area of $T$ is given by:

$\AA = m n \paren {m^2 - n^2}$
The perimeter of $T$ is given by:

$\PP = m^2 - n^2 + 2 m n + m^2 + n^2 = 2 m^2 + 2 m n$

We need to find all $m$ and $n$ such that $\PP = \AA$. 
Thus:














\(\ds 2 m^2 + 2 m n\)

\(=\)







\(\ds m n \paren {m^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds 2 m \paren {m + n}\)

\(=\)







\(\ds n \paren {m + n} \paren {m - n}\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds n \paren {m - n}\)

\(=\)







\(\ds 2\)









As $m$ and $n$ are both (strictly) positive integers, it follows immediately that either:

$n = 1$
$m - n = 2$
and so:

$m = 3, n = 1$
leading to the triangle:

$a = 6, b = 8, c = 10$
or:

$n = 2$
$m - n = 1$
and so:

$m = 3, n = 2$
leading to the triangle:

$a = 12, b = 5, c = 13$
and the result follows.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $30$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Bachet: $110$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $30$




