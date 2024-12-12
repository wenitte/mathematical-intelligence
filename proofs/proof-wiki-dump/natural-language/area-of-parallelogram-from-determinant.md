# 

Source: https://proofwiki.org/wiki/Area_of_Parallelogram_from_Determinant

Theorem
Let $OABC$ be a parallelogram in the Cartesian plane whose vertices are located at:














\(\ds O\)

\(=\)







\(\ds \tuple {0, 0}\)




















\(\ds A\)

\(=\)







\(\ds \tuple {a, c}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {a + b, c + d}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {b, d}\)










The area of $OABC$ is given by:

$\map \Area {OABC} = \begin {vmatrix} a & b \\ c & d \end {vmatrix}$
where $\begin {vmatrix} a & b \\ c & d \end {vmatrix}$ denotes the determinant of order $2$.


Proof
Arrange for the parallelogram to be situated entirely in the first quadrant.




First need we establish that $OABC$ is actually a parallelogram in the first place.
Indeed:














\(\ds \vec {AB}\)

\(=\)







\(\ds \tuple {a + b - a, c + d - c}\)




















\(\ds \)

\(=\)







\(\ds \tuple {b, d}\)




















\(\ds \)

\(=\)







\(\ds \vec {OC}\)




















\(\ds \vec {CB}\)

\(=\)







\(\ds \tuple {a + b - b, c + d - d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, c}\)




















\(\ds \)

\(=\)







\(\ds \vec {OA}\)









Thus:

$OA = CB$
$OC = AB$
and it follows from Opposite Sides Equal implies Parallelogram that $OABC$ is indeed a parallelogram.

Now we calculate the area of $OABC$ as equal to:

the area occupied by the large rectangle in the diagram above
less:

the $4$ triangles
the $2$ small rectangles.
Thus:














\(\ds \map \Area {OABC}\)

\(=\)







\(\ds \paren {a + b} \paren {c + d}\)





the large rectangle














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\dfrac {a c} 2} - \paren {\dfrac {\paren {a + b - b} \paren {c + d - d} } 2}\)





the $2$ triangles at top and bottom














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\dfrac {b d} 2} - \paren {\dfrac {\paren {a + b - a} \paren {c + d - c} } 2}\)





the $2$ triangles at left and right














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {a + b - a} c - b \paren {c + d - d}\)





the $2$ small rectangles














\(\ds \)

\(=\)







\(\ds a c + a d + b c + b d - \dfrac {a c} 2 - \dfrac {a c} 2 - \dfrac {b d} 2 - \dfrac {b d} 2 - 2 b c\)





multiplying out and simplifying














\(\ds \)

\(=\)







\(\ds a d - b c\)





simplifying














\(\ds \)

\(=\)







\(\ds \begin {vmatrix} a & b \\ c & d \end {vmatrix}\)





Determinant of Order $2$



$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace




