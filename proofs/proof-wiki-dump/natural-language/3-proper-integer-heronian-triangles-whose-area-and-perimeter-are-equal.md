# 

Source: https://proofwiki.org/wiki/3_Proper_Integer_Heronian_Triangles_whose_Area_and_Perimeter_are_Equal

Theorem
There are exactly $3$ proper integer Heronian triangles whose area and perimeter are equal.

These are the triangles whose sides are:

$\tuple {6, 25, 29}$
$\tuple {7, 15, 20}$
$\tuple {9, 10, 17}$


Proof
First, using Pythagoras's Theorem, we establish that these integer Heronian triangles are indeed proper:














\(\ds 6^2 + 25^2\)

\(=\)







\(\ds 661\)




















\(\ds \)

\(\ne\)







\(\ds 29^2\)





so not right-angled
















\(\ds 7^2 + 15^2\)

\(=\)







\(\ds 274\)




















\(\ds \)

\(\ne\)







\(\ds 20^2\)





so not right-angled
















\(\ds 9^2 + 10^2\)

\(=\)







\(\ds 181\)




















\(\ds \)

\(\ne\)







\(\ds 17^2\)





so not right-angled




Now we show they have area equal to perimeter.
We use Heron's Formula throughout:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where:

$\AA$ denotes the area of the triangle
$a$, $b$ and $c$ denote the lengths of the sides of the triangle
$s = \dfrac {a + b + c} 2$ denotes the semiperimeter of the triangle.
Thus we take the $3$ triangles in turn:




\(\text {(6, 25, 29)}: \quad\)









\(\ds s\)

\(=\)







\(\ds \frac {6 + 25 + 29} 2\)




















\(\ds \)

\(=\)







\(\ds 30\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)

\(=\)







\(\ds \sqrt {30 \paren {30 - 6} \paren {30 - 25} \paren {30 - 29} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {30 \times 24 \times 5 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {3600}\)




















\(\ds \)

\(=\)







\(\ds 60\)




















\(\ds \)

\(=\)







\(\ds 6 + 25 + 29\)














\(\text {(7, 15, 20)}: \quad\)









\(\ds s\)

\(=\)







\(\ds \frac {7 + 15 + 20} 2\)




















\(\ds \)

\(=\)







\(\ds 21\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)

\(=\)







\(\ds \sqrt {21 \paren {21 - 7} \paren {21 - 15} \paren {21 - 20} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {21 \times 14 \times 6 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {1764}\)




















\(\ds \)

\(=\)







\(\ds 42\)




















\(\ds \)

\(=\)







\(\ds 7 + 15 + 20\)














\(\text {(9, 10, 17)}: \quad\)









\(\ds s\)

\(=\)







\(\ds \frac {9 + 10 + 17} 2\)




















\(\ds \)

\(=\)







\(\ds 18\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)

\(=\)







\(\ds \sqrt {18 \paren {18 - 9} \paren {18 - 10} \paren {18 - 17} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {18 \times 9 \times 8 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {1296}\)




















\(\ds \)

\(=\)







\(\ds 36\)




















\(\ds \)

\(=\)







\(\ds 9 + 10 + 17\)









It remains to be demonstrated that these are indeed the only such proper integer Heronian triangles which match the criterion.

Let $\tuple {a, b, c}$ be the sides of such a triangle.
Using Heron's Formula, we have:














\(\ds 2 s\)

\(=\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)














\(\ds \leadsto \ \ \)





\(\ds 4 s^2\)

\(=\)







\(\ds s \paren {s - a} \paren {s - b} \paren {s - c}\)














\(\ds \leadsto \ \ \)





\(\ds 4 s\)

\(=\)







\(\ds \paren {s - a} \paren {s - b} \paren {s - c}\)









Note that:

$\paren {s - a} + \paren {s - b} + \paren {s - c} = 3 s - a - b - c = s$
Hence by substituting $x = s - a$, $y = s - b$, $z = s - c$:

$4 \paren {x + y + z} = x y z$

By Semiperimeter of Integer Heronian Triangle is Composite, $s$ is an integer.
Hence $s, x, y, z \in \N_{>0}$.

By Triple with Product Quadruple the Sum, our equation has solutions:

$\tuple {1, 5, 24}, \tuple {1, 6, 14}, \tuple {1, 8, 9}, \tuple {2, 3, 10}, \tuple {2, 4, 6}$
Using:

$a = s - x = x + y + z - x = y + z$
$b = s - y = x + z$
$c = s - z = x + y$
the possible sets of side lengths are:

$\tuple {29, 25, 6}, \tuple {20, 15, 7}, \tuple {17, 10, 9}, \tuple {13, 12, 5}, \tuple {10, 8, 6}$
of which the final $2$ are Pythagorean Triples, so they are not proper Heronian triangles.
Hence the result.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Bachet: $110$




