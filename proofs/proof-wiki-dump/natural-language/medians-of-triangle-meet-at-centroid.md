# 

Source: https://proofwiki.org/wiki/Medians_of_Triangle_Meet_at_Centroid



Theorem
Let $\triangle ABC$ be a triangle.
Then the medians of $\triangle ABC$ meet at a single point.

This point is called the centroid of $\triangle ABC$.


Corollary
Let $AA'$ be produced beyond $BC$ to $X$, where $A'X = A'G$.
Then the straight lines $BX$ and $CX$ are parallel to $CC'$ and $BB'$ respectively, and $\dfrac 2 3$ of their length.


Proof 1

Let $A'$ be the midpoint of $BC$.
Let $B'$ be the midpoint of $AC$.
Let $C'$ be the midpoint of $AB$.
Hence $AA'$, $BB'$ and $CC'$ are the medians of $\triangle ABC$.

Let $AA'$ and $BB'$ intersect at $G$.
Hence $A'B'$ is a midline of $\triangle ABC$.
By the Midline Theorem, $A'B'$ is parallel to $AB$ and half the length of $AB$.
We have that $\triangle AGB$ and $\triangle A'GB'$ are similar.
Hence:














\(\ds A'G\)

\(=\)







\(\ds \dfrac {AG} 2\)




















\(\ds B'G\)

\(=\)







\(\ds \dfrac {BG} 2\)









Hence $BB'$ meets $AA'$ $\dfrac 1 3$ of the length along $AA'$ from $A'$.
That is:

$A'G = \dfrac {AA'} 3$
Similarly, mutatis mutandis, it can be shown that $CC'$ also meets $AA'$ $\dfrac 1 3$ of the length along $AA'$ from $A'$.
Hence we have shown that $BB'$ and $CC'$ both meet at the same point on $AA'$
That is, the medians of $\triangle ABC$ meet at a single point.


Proof 2
Let $\vec a, \vec b, \vec c$ be $\vec{OA}, \vec{OB}, \vec{OC}$ respectively.
Let the midpoint of $BC, AC, AB$ be $\vec d, \vec e, \vec f$ respectively.
Then:














\(\ds \vec d\)

\(=\)







\(\ds \frac {\vec b + \vec c} 2\)




















\(\ds \vec e\)

\(=\)







\(\ds \frac {\vec a + \vec c} 2\)




















\(\ds \vec f\)

\(=\)







\(\ds \frac {\vec a + \vec b} 2\)









The three medians are $\vec{AD}, \vec{BE}, \vec{CF}$ respectively:














\(\ds \vec {AD}\)

\(=\)







\(\ds \vec d - \vec a\)




















\(\ds \)

\(=\)







\(\ds \frac {\vec b + \vec c - 2 \vec a} 2\)




















\(\ds \vec {BE}\)

\(=\)







\(\ds \vec e - \vec b\)




















\(\ds \)

\(=\)







\(\ds \frac {\vec a + \vec c - 2 \vec b} 2\)




















\(\ds \vec {CF}\)

\(=\)







\(\ds \vec f - \vec c\)




















\(\ds \)

\(=\)







\(\ds \frac {\vec a + \vec b - 2 \vec c} 2\)









Their equations:




\(\text {(1)}: \quad\)



\(\ds \vec {AD}: \ \ \)





\(\ds \vec r\)

\(=\)







\(\ds \vec a + x \paren {\frac {\vec b + \vec c - 2\vec a} 2}\)










\(\text {(2)}: \quad\)



\(\ds \vec {BE}: \ \ \)





\(\ds \vec r\)

\(=\)







\(\ds \vec b + y \paren {\frac {\vec a + \vec c - 2\vec b} 2}\)










\(\text {(3)}: \quad\)



\(\ds \vec {CF}: \ \ \)





\(\ds \vec r\)

\(=\)







\(\ds \vec c + z \paren {\frac {\vec a + \vec b - 2\vec c} 2}\)









It can be verified that $x = y = z = \dfrac 2 3$ produce the same point:
When $x = \dfrac 2 3$, from $(1)$:

$\vec r = \vec a + \dfrac 2 3 \paren {\dfrac {\vec b + \vec c - 2\vec a} 2} = \dfrac {\vec a + \vec b + \vec c} 3$
When $y = \dfrac 2 3$, from $(2)$:

$\vec r = \vec b + \dfrac 2 3 \paren {\dfrac {\vec a + \vec c - 2\vec b} 2} = \dfrac {\vec a + \vec b + \vec c} 3$
When $z = \dfrac 2 3$, from $(3)$:

$\vec r = \vec c + \dfrac 2 3 \paren {\dfrac {\vec a + \vec b - 2\vec c} 2} = \dfrac {\vec a + \vec b + \vec c} 3$
Therefore, the three medians meet at a single point, namely $\dfrac {\vec a + \vec b + \vec c} 3$.
$\blacksquare$


Also see
Definition:Centroid of Triangle
Position of Centroid of Triangle on Median, which shows that $G$ is $\dfrac 1 3$ the way along each median


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): median: 2.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): median (midline): 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): median (midline): 1.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): centroid (of a triangle)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): median (of a triangle)
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): median (of a triangle)




