# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/162_-_Find_the_Triangle/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $162$
Find the Triangle
The sides and height of a triangle are four consecutive whole numbers.
What is the area of the triangle?


Solution
The sides of the triangle are $13$, $14$, and $15$, making $14$ the base, the height $12$, and the area $84$.


Proof
As Dudeney put it:

There is an infinite number of rational triangles composed of three consecutive integers, like $3$, $4$ and $5$, and $13$, $14$, and $15$,
but there is no other case in which the height will comply with our conditions.

Rational triangles whose sides are three consecutive integers with integer area are given by the recurrence relation:

$U_n = \begin {cases} 4 & : n = 1 \\ 14 & : n = 2 \\ 4 U_{n - 1} - U_{n - 2} & : n > 2 \end {cases}$
where the lengths of the sides of triangle $n$ are $U_n - 1$, $U_n$ and $U_n + 1$.


This needs considerable tedious hard slog to complete it.In particular: Prove this recurrence relationTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This can be presented as follows:
Let lengths of the sides of a triangle with integer area be $2 x - 1$, $2 x$ and $2 x + 1$.
Then $3 \paren {x^2 - 1}$ is a square number.
This is demonstrated in Approximations to Equilateral Triangles by Heronian Triangles.

Hence the rational triangles with integer area have the sides whose lengths are:

$\begin{array} {rrr}
3 & 4 & 5 \\
13 & 14 & 15 \\
51 & 52 & 53 \\
193 & 194 & 195 \\
723 & 724 & 725
\end {array}$

From Heronian Triangle whose Altitude and Sides are Consecutive Integers, the only one fitting the condition is the $13$, $14$, $15$ one.
$\Box$

It remains to exclude the possibility that we have not overlooked the possibility of a triangle whose sides are not consecutive integers.
There are two such cases:

the side lengths are in the pattern $n$, $n + 1$, $n + 3$ with  height $n + 2$;
the side lengths are in the pattern $n$, $n + 2$, $n + 3$ with height $n + 1$.

For the first case, we have:

$s = \dfrac {3 n + 4} 2$
Thus the area of this triangle is:














\(\ds \)

\(\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)





Heron's Formula














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\frac {3 n + 4} 2} \paren {\frac {n + 4} 2} \paren {\frac {n + 2} 2} \paren {\frac {n - 2} 2} }\)









As the lengths of the sides and the height $n + 2$ are all integers, the area must be half of an integer.
Since $3 n + 4, n + 4, n + 2, n - 2$ are all of the same parity, if they are all odd, the area cannot be half of an integer.
Hence they are all even, and so is $n$.
Writing $n = 2 x$:














\(\ds \sqrt {\paren {\frac {3 n + 4} 2} \paren {\frac {n + 4} 2} \paren {\frac {n + 2} 2} \paren {\frac {n - 2} 2} }\)

\(=\)







\(\ds \sqrt {\paren {3 x + 2} \paren {x + 2} \paren {x + 1} \paren {x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {side} \paren {x + 2} } 2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {3 x + 2} \paren {x + 2} \paren {x + 1} \paren {x - 1}\)

\(=\)







\(\ds \paren {\frac {\paren {side} \paren {2 x + 2} } 2}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {x + 1}^2 \paren {side}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {3 x + 2} \paren {x + 2} \paren {x - 1}\)

\(=\)







\(\ds \paren {x + 1} \paren {side}^2\)









so $\paren {x + 1}$ must be a factor of the left hand side.
Note that, by GCD with Remainder:

$\gcd \set {3 x + 2, x + 1} = \gcd \set {x, x + 1} = 1$
$\gcd \set {x + 2, x + 1} = 1$
By Euclid's Lemma, we must have $\paren {x + 1} \mid \paren {x - 1}$.
Since $x - 1 < x + 1$, by Absolute Value of Integer is not less than Divisors, $x + 1 \nmid x - 1$.
This is a contradiction.
Therefore no such rational triangle exist.

For the second case, we have:

$s = \dfrac {3 n + 5} 2$
Thus the area of this triangle is:














\(\ds \)

\(\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)





Heron's Formula














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\frac {3 n + 5} 2} \paren {\frac {n + 5} 2} \paren {\frac {n + 1} 2} \paren {\frac {n - 1} 2} }\)









As the lengths of the sides and the height $n + 1$ are all integers, the area must be half of an integer.
Since $3 n + 5, n + 5, n + 1, n - 1$ are all of the same parity, if they are all odd, the area cannot be half of an integer.
Hence they are all even, and thus $n$ must be odd.
Writing $n = 2 x + 1$:














\(\ds \sqrt {\paren {\frac {3 n + 5} 2} \paren {\frac {n + 5} 2} \paren {\frac {n + 1} 2} \paren {\frac {n - 1} 2} }\)

\(=\)







\(\ds \sqrt {\paren {3 x + 4} \paren {x + 3} \paren {x + 1} \paren {x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {side} \paren {n + 1} } 2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {3 x + 4} \paren {x + 3} \paren {x + 1} \paren {x}\)

\(=\)







\(\ds \paren {\frac {\paren {side} \paren {2 x + 2} } 2}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {x + 1}^2 \paren {side}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {3 x + 4} \paren {x + 3} \paren {x}\)

\(=\)







\(\ds \paren {x + 1} \paren {side}^2\)









so $\paren {x + 1}$ must be a factor of the left hand side.
Note that, by GCD with Remainder:

$\gcd \set {3 x + 4, x + 1} = \gcd \set {1, x + 1} = 1$
$\gcd \set {x, x + 1} = 1$
By Euclid's Lemma, we must have $\paren {x + 1} \mid \paren {x + 3}$.
For $x > 1$, $2 \paren {x + 1} > x + 3$.
Hence we must have $x = 1$, which leads to the $3 - 5 - 6$ triangle. 
The area of this triangle is:

$\sqrt {\paren {3 + 4} \paren {1 + 3} \paren {1 + 1} \paren {1} } = \sqrt {56}$
which is not an integer, and the height is not an integer either.
Therefore no such rational triangle exist.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $162$. -- Find the Triangle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $230$. Find the Triangle




