# 

Source: https://proofwiki.org/wiki/Construction_of_Segment_on_Given_Line_Admitting_Given_Angle



Theorem
On any given line segment, it is possible to describe a segment of a circle which admits an angle equal to any given rectilineal angle.

In the words of Euclid:

On a given straight line, to describe a segment of a circle admitting an angle equal to a given rectilineal angle.
(The Elements: Book $\text{III}$: Proposition $33$)


Construction
In the following:

let $AB$ be the line segment on which the segment is to be drawn;
let $C$ be the rectilineal angle to which the angle in the segment is to be made equal.

There are three cases to consider:

$(1): \quad$ When $C$ is an acute angle
$(2): \quad$ When $C$ is a right angle
$(3): \quad$ When $C$ is an obtuse angle.
Each one will be addressed in turn.


Acute Angle
Construct $\angle BAD$ on $AB$ such that $\angle BAD = \angle C$ using Construction of Equal Angle.
Draw $AK$ perpendicular to $AD$.
Bisect $AD$ at $F$.
Draw $FG$ perpendicular to $AD$ where $G$ is on $AK$.
Join $GB$.
Draw the circle whose center is at $G$ and whose radius is $GB$.
Let this circle meet $AK$ at $E$.

The required segment is the one whose base is $AB$ and whose circumference is the greater of the two arcs between $A$ and $B$.




Right Angle
Construct $\angle BAD$ on $AB$ such that $\angle BAD = \angle C$ using Construction of Equal Angle.
Bisect $AB$ at $F$.
Draw the circle whose center is at $F$ and whose radius is $AF$ (or $BF$).
The required segment is the one whose base is $AB$ and whose circumference is the either of the two arcs between $A$ and $B$.




Obtuse Angle
Construct $\angle BAD$ on $AB$ such that $\angle BAD = \angle C$ using Construction of Equal Angle.
Draw $AK$ perpendicular to $AD$.
Bisect $AD$ at $F$.
Draw $FG$ perpendicular to $AD$ where $G$ is on $AK$.
Join $GB$.
Draw the circle whose center is at $G$ and whose radius is $GB$.
Let this circle meet $AK$ at $E$.

The required segment is the one whose base is $AB$ and whose circumference is the lesser of the two arcs between $A$ and $B$.




Proof
Proof for Acute Angle
We have that $AF = FB$, $\angle AFG = \angle BFG$ (both are right angles) and $AG$ is common.
So from Triangle Side-Angle-Side Congruence it follows that $AG = BG$.
So the circle $ABE$ whose center is at $G$ and whose radius is $GB$ also passes through $A$.
As $AE$ passes through the  center $G$, $AE$ is a diameter of the circle $ABE$.
As $AD$ is perpendicular to $AE$, it follows from Line at Right Angles to Diameter of Circle that $AD$ is tangent to circle $ABE$.
From the Tangent-Chord Theorem, $\angle DAB = \angle AEB$.
But $\angle DAB = \angle C$ by construction.
Hence the result.
$\Box$


Proof for Right Angle
Select a point $E$ on the circle and join $AE$ and $BE$.
As $AD$ is perpendicular to $AB$, it follows from Line at Right Angles to Diameter of Circle that $AD$ is tangent to circle $ABE$.
From Relative Sizes of Angles in Segments, $\angle BAD = \angle AEB$.
But as $\angle BAD = \angle C$ by construction, $\angle AEB = \angle C$.
Hence the result.
$\Box$


Proof for Obtuse Angle
We have that $AF = FB$, $\angle AFG = \angle BFG$ (both are right angles) and $AG$ is common.
So from Triangle Side-Angle-Side Congruence it follows that $AG = BG$.
So the circle $ABE$ whose center is at $G$ and whose radius is $GB$ also passes through $A$.
As $AE$ passes through the  center $G$, $AE$ is a diameter of the circle $ABE$.
As $AD$ is perpendicular to $AE$, it follows from Line at Right Angles to Diameter of Circle that $AD$ is tangent to circle $ABE$.
Now place point $H$ anywhere on the arc $AB$ and join $AH$ and $HB$.
From the Tangent-Chord Theorem, $\angle DAB = \angle AHB$.
But $\angle DAB = \angle C$ by construction.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $33$ of Book $\text{III}$ of Euclid's The Elements. Note that Euclid, in his original constructions for the acute and obtuse angle, defined the line perpendicular to $AD$ as being $AE$. But at that stage of the construction, it has not been established exactly where $E$ is going to be. This is defined after the position of $G$ on $AB$ has been established, and the circle centered at $G$ has been drawn.It is also worth pointing out that while the constructions for the acute and obtuse angles are the same, the proofs need to be done separately for each. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{III}$. Propositions




