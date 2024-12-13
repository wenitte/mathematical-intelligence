# 

Source: https://proofwiki.org/wiki/Intersecting_Chords_Theorem



Theorem
Let $AC$ and $BD$ both be chords of the same circle.
Let $AC$ and $BD$ intersect at $E$.

Then $AE \cdot EC = DE \cdot EB$.

In the words of Euclid:

If in a circle two straight lines cut one another, the rectangle contained by the segments of the one is equal to the rectangle contained by the segments of the other.
(The Elements: Book $\text{III}$: Proposition $35$)


Proof 1

Let $AC$ and $BD$ be intersecting chords of circle $ABCD$.
Let the point of intersection be $E$.
If $E$ is the center of $ABCD$ the solution is trivial, as $AE = EC = BE = ED$ and so $AE \cdot EC = BE \cdot ED$.
Otherwise, let $F$ be the center of $ABCD$.
Let $FG$ be drawn perpendicular to $AC$, and $FH$ be drawn perpendicular to $BD$.
From Conditions for Diameter to be Perpendicular Bisector, $G$ bisects $AC$ and $H$ bisects $BD$.
So $AG = GC$ and $BH = HD$.
From Difference of Two Squares we have that $AE \cdot EC + EG^2 = GC^2$.
Let us add $GF^2$ to these.
So $AE \cdot EC + EG^2 + GF^2 = GC^2 + GF^2$.
But from Pythagoras's Theorem we have that:

$GC^2 + GF^2 = CF^2$
$EG^2 + GF^2 = EF^2$
So:

$AE \cdot EC + EF^2 = CF^2$
Using the same construction, we have that:

$DE \cdot EB + EF^2 = BF^2$
But $BF = CF$ as both are the radius of the circle $ABCD$.
That gives us:

$AE \cdot EC + EF^2 = DE \cdot EB + EF^2$
It follows that $AE \cdot EC = DE \cdot EB$
$\blacksquare$


Proof 2
Join $A$ with $B$ and $C$ with $D$, as shown in this diagram:


Then we have:














\(\ds \angle AEB\)

\(\cong\)







\(\ds \angle DEC\)





Two Straight Lines make Equal Opposite Angles














\(\ds \angle BAE\)

\(\cong\)







\(\ds \angle CDE\)





Angles in Same Segment of Circle are Equal




By Triangles with Two Equal Angles are Similar we have $\triangle AEB \sim \triangle DEC$.
Thus:














\(\ds \frac {AE} {EB}\)

\(=\)







\(\ds \frac {DE} {EC}\)














\(\ds \leadsto \ \ \)





\(\ds AE \cdot EC\)

\(=\)







\(\ds DE \cdot EB\)









$\blacksquare$


Also known as
The Intersecting Chords Theorem is also known as the Chord Theorem.
It can also be seen presented as the Intersecting Chord Theorem.


Also see
Power of a Point Theorem


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): circle $(6)$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): circle $(6)$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): intersecting chords theorem




