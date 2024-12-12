# 

Source: https://proofwiki.org/wiki/Babylonian_Mathematics/Examples/Division_of_Triangular_Field



Examples of Babylonian Mathematics
A triangular field is to be divided between $6$ brothers by equidistant lines parallel to one of the sides.
Expressed in Babylonian notation:

the length of the marked side is $6; 30$
the area of the triangle is $11, 22; 30$.
What is the difference between the brothers' shares?


Solution
The difference between each successive share is:

$37; 55$ in Babylonian notation
$37 \frac {11} {12}$ in mixed fractions.


Proof

Let $\triangle ABC$ be the triangular field in question.
Let $d$ be the marked side.
Let $a$ be the side which is parallel to the dividing lines.
Let $\AA$ be the total area of $ABC$.

Let $\AA_1, \AA_2, \ldots, \AA_6$ be the areas of each of the divisions of $ABC$ such that $\AA_1 > \AA_2 > \cdots > \AA_6$.
Let $a_1, a_2, \ldots, a_5$ denote the dividing lines such that $a_1 > a_2 > \cdots > a_5$.

From Area of Triangle, we have that:

$\AA = \dfrac 1 2 k d a$
where $k = \sin \angle CAB$.

Then:














\(\ds \AA_1\)

\(=\)







\(\ds \dfrac {\paren {a + a_1} k d} {2 \times 6}\)





Area of Trapezium














\(\ds \AA_j\)

\(=\)







\(\ds \dfrac {\paren {a_j + a_{j - 1} } k d} {2 \times 6}\)





for $j = 2$ to $5$














\(\ds \AA_6\)

\(=\)







\(\ds \dfrac {a_5 k d} {2 \times 6}\)





Area of Triangle



We have:














\(\ds a_j\)

\(=\)







\(\ds a \paren {1 - \dfrac j 6}\)





for $j = 1$ to $5$



and so:














\(\ds \AA_{j - 1} - \AA_j\)

\(=\)







\(\ds \dfrac {\paren {a_{j - 1} + a_{j - 2} } k d} {2 \times 6} - \dfrac {\paren {a_j + a_{j - 1} } k d} {2 \times 6}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a_{j - 2} - a_j} k d} {2 \times 6}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a \paren {1 - \dfrac {j - 2} 6} - a \paren {1 - \dfrac j 6} } k d} {2 \times 6}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a k d} {36}\)





after tedious algebra














\(\ds \)

\(=\)







\(\ds \dfrac {\AA} {18}\)





substituting for $\AA$



We have that:














\(\ds \AA\)

\(=\)







\(\ds 11, 22; 30\)




















\(\ds \)

\(=\)







\(\ds 11 \times 60 + 22 + \dfrac 1 2\)





expressing in decimal notation








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\AA} {18}\)

\(=\)







\(\ds \dfrac {682} {18} + \dfrac 1 {36}\)




















\(\ds \)

\(=\)







\(\ds 37 + \frac 8 9 + \dfrac 1 {36}\)




















\(\ds \)

\(=\)







\(\ds 37 + \frac {32} {36} + \dfrac 1 {36}\)




















\(\ds \)

\(=\)







\(\ds 37 + \frac {33} {36}\)




















\(\ds \)

\(=\)







\(\ds 37 + \frac {11} {12}\)




















\(\ds \)

\(=\)







\(\ds 37 + \frac {55} {60}\)




















\(\ds \)

\(=\)







\(\ds 37; 55\)










Note that it is not necessary to know how long the marked side is.
$\blacksquare$


Sources
1945: O. Neugebauer and A. Sachs: Mathematical Cuneiform Texts
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Dividing a Field: $12$




