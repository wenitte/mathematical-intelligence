# 

Source: https://proofwiki.org/wiki/Finding_Center_of_Circle



Theorem
For any given circle, it is possible to find its center.

In the words of Euclid:

To find the centre of a given circle.
(The Elements: Book $\text{III}$: Proposition $1$)


Proof 1

Draw any chord $AB$ on the circle in question.
Bisect $AB$ at $D$.
Construct $CE$ perpendicular to $AB$ at $D$, where $C$ and $E$ are where this perpendicular meets the circle.
Bisect $CE$ at $F$.
Then $F$ is the center of the circle.

The proof is as follows.

Suppose $F$ were not the center of the circle, but that $G$ were instead.
Join $GA, GB, GD$.
As $G$ is (as we have supposed) the center, then $GA = GB$.
Also, we have $DA = DB$ as $D$ bisects $AB$.
So from Triangle Side-Side-Side Congruence:

$\triangle ADG = \triangle BDG$
Hence:

$\angle ADG = \angle BDG$
But from Book $\text{I}$ Definition $10$: Right Angle:

When a straight line set up on a straight line makes the adjacent angles equal to one another, each of the equal angles is right, and the straight line standing on the other is called a perpendicular to that on which it stands.
So $\angle ADG$ is a right angle.
But $\angle ADF$ is also a right angle.
So $\angle ADG = \angle ADF$, and this can happen only if $G$ lies on $CE$.
But then as $G$ is, as we suppose, at the center of the circle, then $GC = GE$.
Thus it follows that $G$ bisects $CE$.
But then $GC = FC$, and so $G = F$.
Hence the result.
$\blacksquare$


Porism
In the words of Euclid:

From this it is manifest that, if in a circle a straight line cut a straight line into two equal parts and at right angles, the centre of the circle is on the cutting straight line.
(The Elements: Book $\text{III}$: Proposition $1$ : Porism)



Proof 2
From Perpendicular Bisector of Chord Passes Through Center, $CE$ passes through the center of the circle.

The center must be the point $F$ such that $FE = FC$.
That is, $F$ is the bisector of $CE$.





