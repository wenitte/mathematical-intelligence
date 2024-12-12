# 

Source: https://proofwiki.org/wiki/Area_of_Parallelogram



Theorem
The area of a parallelogram equals the product of one of its bases and the associated altitude.


Proof
There are three cases to be analysed: the square, the rectangle and the general parallelogram.


Square

From Area of Square:

$\paren {ABCD} = a^2$
where $a$ is the length of one of the sides of the square.
The altitude of a square is the same as its base.
Hence the result.
$\blacksquare$


Rectangle
Let $ABCD$ be a rectangle.


Then construct the square with side length:

$\map \Area {AB + BI}$
where $BI = BC$, as shown in the figure above.
Note that $\square CDEF$ and $\square BCHI$ are squares.
Thus:

$\square ABCD \cong \square CHGF$
Since congruent shapes have the same area:

$\map \Area {ABCD} = \map \Area {CHGF}$ (where $\map \Area {FXYZ}$ denotes the area of the plane figure $FXYZ$).
Let $AB = a$ and $BI = b$.
Then the area of the square $AIGE$ is equal to:














\(\ds \paren {a + b}^2\)

\(=\)







\(\ds a^2 + 2 \map \Area {ABCD} + b^2\)




















\(\ds \paren {a^2 + 2 a b + b^2}\)

\(=\)







\(\ds a^2 + 2 \map \Area {ABCD} + b^2\)




















\(\ds a b\)

\(=\)







\(\ds \map \Area {ABCD}\)









$\blacksquare$


Parallelogram

Let $ABCD$ be the parallelogram whose area is being sought.
Let $F$ be the foot of the altitude from $C$
Also construct the point $E$ such that $DE$ is the altitude from $D$ (see figure above).
Extend $AB$ to $F$.
Then:














\(\ds AD\)

\(\cong\)







\(\ds BC\)




















\(\ds \angle AED\)

\(\cong\)







\(\ds \angle BFC\)




















\(\ds DE\)

\(\cong\)







\(\ds CF\)









Thus:

$\triangle AED \cong \triangle BFC \implies \map \Area {AED} = \map \Area {BFC}$
So:














\(\ds \map \Area {ABCD}\)

\(=\)







\(\ds EF \cdot FC\)




















\(\ds \)

\(=\)







\(\ds AB \cdot DE\)




















\(\ds \)

\(=\)







\(\ds b h\)




















\(\ds \)

\(=\)







\(\ds a b \sin \theta\)





Definition of Sine of Angle: $h = a \sin \theta$



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): parallelogram
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): parallelogram




