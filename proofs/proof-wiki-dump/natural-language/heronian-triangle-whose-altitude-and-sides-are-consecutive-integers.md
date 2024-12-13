# 

Source: https://proofwiki.org/wiki/Heronian_Triangle_whose_Altitude_and_Sides_are_Consecutive_Integers

Theorem
There exists exactly one Heronian triangle one of whose altitudes and its sides are all consecutive integers.
This is the Heronian triangle whose sides are $\tuple {13, 14, 15}$ and which has an altitude $12$.


Proof
We note that a Heronian triangle whose sides are all consecutive integers is also known as a Fleenor-Heronian triangle.
From Sequence of Fleenor-Heronian Triangles, we have that the smallest such triangles are as follows:


$\tuple {1, 2, 3}$, which has an altitude of $0$
This is the degenerate case where the Heronian triangle is a straight line.
While $0, 1, 2, 3$ is a sequence of $4$ consecutive integers, this is not technically a triangle.


$\tuple {3, 4, 5}$ with area $6$.
It has altitudes $3$, $4$ and $\dfrac {12} 5$.


$\tuple {13, 14, 15}$
This can be constructed by placing the $2$ Pythagorean triangles $\tuple {5, 12, 13}$ and $\tuple {9, 12, 15}$ together along their common side $12$:


Thus the altitude and sides are:

$\tuple {12, 13, 14, 15}$
and this is the Heronian triangle we seek.
It has area $84$.

The next largest Fleenor-Heronian triangle has sides $\tuple {51, 52, 53}$.
Using Heron's Formula, its area is given by:

$\AA = \sqrt {78 \times 25 \times 26 \times 27} = 1170$
Hence its altitudes are:

$45 \frac {45} {51}$, $45$, $44 \frac 8 {53}$

For still larger triangles, the altitudes are never within $1$ unit of the sides:
Consider the triangle with sides $\tuple {a - 1, a, a + 1}$.
Using Heron's Formula, its area is given by:














\(\ds \AA\)

\(=\)







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









Its longest altitude is therefore:














\(\ds \frac {2 a} {4 \paren {a - 1} } \sqrt {3 a^2 - 12}\)

\(<\)







\(\ds \frac {a^2 \sqrt 3} {2 \paren {a - 1} }\)









and we have:














\(\ds \frac {a^2 \sqrt 3} {2 \paren {a - 1} }\)

\(<\)







\(\ds \paren {a - 1} - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a^2 \sqrt 3\)

\(<\)







\(\ds 2 \paren {a - 1}^2 - 2 \paren {a - 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2 a^2 - 4 a + 2 - 2 a + 2 - \sqrt 3 a^2\)

\(>\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {2 - \sqrt 3} a^2 - 6 a + 4\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(>\)







\(\ds \frac {6 + \sqrt {6^2 - 4 \times 4 \paren {2 - \sqrt 3} } } {2 \paren {2 - \sqrt 3} }\)





Quadratic Formula














\(\ds \)

\(\approx\)







\(\ds 21.7\)









This shows that for $a \ge 22$, all altitudes of the triangle is less than $a - 2$.
Hence there are no more examples.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Bachet: $109$




