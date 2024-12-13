# 

Source: https://proofwiki.org/wiki/Proper_Integer_Heronian_Triangle_whose_Area_is_24

Theorem
There exists exactly one proper integer Heronian triangle whose area equals $24$.

That is, the obtuse triangle whose sides are of length $4$, $13$ and $15$.


Proof
First we show that the $\tuple {4, 13, 15}$ triangle is actually Heronian.
Heron's Formula gives us that:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where:

$\AA$ denotes the area of the triangle
$a$, $b$ and $c$ denote the lengths of the sides of the triangle
$s = \dfrac {a + b + c} 2$ denotes the semiperimeter of the triangle.
Hence:














\(\ds s\)

\(=\)







\(\ds \frac {4 + 13 + 15} 2\)




















\(\ds \)

\(=\)







\(\ds 16\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)

\(=\)







\(\ds \sqrt {16 \paren {16 - 4} \paren {16 - 13} \paren {16 - 15} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {16 \times 12 \times 3 \times 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {576}\)




















\(\ds \)

\(=\)







\(\ds 24\)









It can be constructed by taking a $9-12-15$ Pythagorean triangle and removing a $5-12-13$ Pythagorean triangle from it:



Let $\tuple {a, b, c}$ be the sides of such a triangle.
Using Heron's Formula, we have:














\(\ds 24\)

\(=\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)














\(\ds \leadsto \ \ \)





\(\ds 576\)

\(=\)







\(\ds s \paren {s - a} \paren {s - b} \paren {s - c}\)









Note that:

$\paren {s - a} + \paren {s - b} + \paren {s - c} = 3 s - a - b - c = s$
Hence by substituting $x = s - a$, $y = s - b$, $z = s - c$:

$x y z \paren {x + y + z} = 576$

By Semiperimeter of Integer Heronian Triangle is Composite, $s$ is an integer.
Hence $s, x, y, z \in \N_{>0}$.

Without loss of generality suppose $x \le y \le z$.
Then:














\(\ds 576\)

\(=\)







\(\ds x y z \paren {x + y + z}\)




















\(\ds \)

\(\ge\)







\(\ds x^3 \paren {3 x}\)




















\(\ds \)

\(=\)







\(\ds 3 x^4\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\le\)







\(\ds \sqrt [4] {\frac {576} 3}\)




















\(\ds \)

\(\approx\)







\(\ds 3.72\)









so we need to check $1 \le x \le 3$.

Note that for fixed $x$:














\(\ds 576\)

\(=\)







\(\ds x y z \paren {x + y + z}\)




















\(\ds \)

\(>\)







\(\ds x y^2 \paren {2 y}\)




















\(\ds \)

\(=\)







\(\ds 2 x y^3\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\le\)







\(\ds \sqrt [3] {\frac {576} {2 x} }\)










For $x = 1$:

$1 \le y \le \sqrt [3] {\frac {576} 2} \approx 6.60$
For $x = 2$:

$2 \le y \le \sqrt [3] {\frac {576} 4} \approx 5.24$
For $x = 3$:

$3 \le y \le \sqrt [3] {\frac {576} 6} \approx 4.58$

Finally, for fixed $x$, $y$:














\(\ds x y z \paren {x + y + z}\)

\(=\)







\(\ds 576\)














\(\ds \leadsto \ \ \)





\(\ds z^2 + \paren {x + y} z - \frac {576} {x y}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {- x - y + \sqrt {\paren {x + y}^2 + \frac {2304} {x y} } } 2\)





Quadratic Formula



Since $z \in \Z$:

$\sqrt {\paren {x + y}^2 + \dfrac {2304} {x y} } = 2 z + x + y \in \Z$
We check the value of $\sqrt {\paren {x + y}^2 + \dfrac {2304} {x y} }$ for the valid values of $x, y$.
We do not need to check $y = 5$ since $5 \nmid 576$.
We have:

$\tuple {1, 1}: \sqrt {\paren {1 + 1}^2 + \dfrac {2304} {1 \times 1} } = \sqrt {2308} \notin \Z$
$\tuple {1, 2}: \sqrt {\paren {1 + 2}^2 + \dfrac {2304} {1 \times 2} } = \sqrt {1161} \notin \Z$
$\tuple {1, 3}: \sqrt {\paren {1 + 3}^2 + \dfrac {2304} {1 \times 3} } = \sqrt {784} = 28$
$\tuple {1, 4}: \sqrt {\paren {1 + 4}^2 + \dfrac {2304} {1 \times 4} } = \sqrt {601} \notin \Z$
$\tuple {1, 6}: \sqrt {\paren {1 + 6}^2 + \dfrac {2304} {1 \times 6} } = \sqrt {433} \notin \Z$
$\tuple {2, 2}: \sqrt {\paren {2 + 2}^2 + \dfrac {2304} {2 \times 2} } = \sqrt {592} \notin \Z$
$\tuple {2, 3}: \sqrt {\paren {2 + 3}^2 + \dfrac {2304} {2 \times 3} } = \sqrt {409} \notin \Z$
$\tuple {2, 4}: \sqrt {\paren {2 + 4}^2 + \dfrac {2304} {2 \times 4} } = \sqrt {324} = 18$
$\tuple {3, 3}: \sqrt {\paren {3 + 3}^2 + \dfrac {2304} {3 \times 3} } = \sqrt {292} \notin \Z$
$\tuple {3, 4}: \sqrt {\paren {3 + 4}^2 + \dfrac {2304} {3 \times 4} } = \sqrt {241} \notin \Z$

Now we calculate $z$ for $\tuple {x, y} = \tuple {1, 3}, \tuple {2, 4}$.

$\tuple {1, 3}: z = \dfrac {- 1 - 3 + 28} 2 = 12$
$\tuple {2, 4}: z = \dfrac {- 2 - 4 + 18} 2 = 6$

Using:

$a = s - x = x + y + z - x = y + z$
$b = s - y = x + z$
$c = s - z = x + y$
the possible sets of side lengths are:

$\tuple {15, 13, 4}, \tuple {10, 8, 6}$

But note that the $\tuple {6, 8, 10}$ triangle is right-angled, and hence not a proper Heronian Triangle.
Hence the result.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Bachet: $111$




