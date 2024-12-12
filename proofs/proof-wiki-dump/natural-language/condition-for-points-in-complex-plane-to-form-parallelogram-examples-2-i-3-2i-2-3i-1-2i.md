# 

Source: https://proofwiki.org/wiki/Condition_for_Points_in_Complex_Plane_to_form_Parallelogram/Examples/2%2Bi,_3%2B2i,_2%2B3i,_1%2B2i

Theorem
The points in the complex plane represented by the complex numbers:

$2 + i, 3 + 2 i, 2 + 3 i, 1 + 2 i$
are the vertices of a square.


Proof
Let us label the points:














\(\ds A\)

\(:=\)







\(\ds 2 + i\)




















\(\ds B\)

\(:=\)







\(\ds 3 + 2 i\)




















\(\ds C\)

\(:=\)







\(\ds 2 + 3 i\)




















\(\ds D\)

\(:=\)







\(\ds 1 + 2 i\)










From Geometrical Interpretation of Complex Subtraction, we have that the difference $p - q$ between two complex numbers $p, q$ represents the vector $\vec {q p}$.

Let us take the differences of the complex numbers given:








\(\ds B - A: \ \ \)





\(\ds \paren{3 + 2 i} - \paren{2 + i}\)

\(=\)







\(\ds 1 + i\)














\(\ds B - C: \ \ \)





\(\ds \paren{3 + 2 i} - \paren{2 + 3 i}\)

\(=\)







\(\ds 1 - i\)














\(\ds B - D: \ \ \)





\(\ds \paren{3 + 2 i} - \paren{1 + 2 i}\)

\(=\)







\(\ds 2 + 0 i\)














\(\ds C - A: \ \ \)





\(\ds \paren{2 + 3 i} - \paren{2 + i}\)

\(=\)







\(\ds 0 + 2 i\)














\(\ds C - D: \ \ \)





\(\ds \paren{2 + 3 i} - \paren{1 + 2 i}\)

\(=\)







\(\ds 1 + i\)














\(\ds A - D: \ \ \)





\(\ds \paren{2 + i} - \paren{1 + 2 i}\)

\(=\)







\(\ds 1 - i\)









So:

$\vec {AB} = \vec {DC} = 1 + i$
$\vec {DA} = \vec {CB} = 1 - i$
Thus by definition $ABCD$ forms a parallelogram.

Next it is noted that:

$\paren {1 + i} i = i + i^2 = 1 - i$
and so $AB$ and $DC$ are perpendicular to $DA$ and $CB$.
Thus by definition $ABCD$ is a rectangle.

Finally note that:

$\cmod {1 + i} = \cmod {1 - i} = \sqrt {1^2 + 1^2} = \sqrt 2$
and so:

$\cmod {AB} = \cmod {DC} = \cmod {DC} = \cmod {DC}$
That is, all four sides of $ABCD$ are the same length.
Thus by definition $ABCD$ is a square.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Exercise $2$.




