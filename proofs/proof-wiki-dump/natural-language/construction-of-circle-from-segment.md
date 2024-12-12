# 

Source: https://proofwiki.org/wiki/Construction_of_Circle_from_Segment



Theorem
In the words of Euclid:

Given a segment of a circle, to describe the complete circle of which it is a segment.
(The Elements: Book $\text{III}$: Proposition $25$)


Proof 1
Let $ABC$ be the given segment of a circle whose base is $AC$.
Bisect $AC$ at $D$, draw $DB$ perpendicular to $AC$, and join $AB$.

First suppose that $ABC$ is such that $\angle ABD > \angle BAD$:


On $BA$, construct $\angle BAE$ equal to $\angle ABD$.
Join $BD$ through to $E$ and join $EC$.
Then $E$ is the center of the required circle.

Second, suppose that $ABC$ is such that $\angle ABD = \angle BAD$:


Then $D$ is the center of the required circle.

Finally, suppose that $ABC$ is such that $\angle ABD < \angle BAD$:


On $BA$, construct $\angle BAE$ equal to $\angle ABD$.
The point $E$, which falls on $BD$, is the center of the required circle.


Proof of Construction
First suppose that $ABC$ is such that $\angle ABD > \angle BAD$:



Since $\angle ABE = \angle BAE$, from Triangle with Two Equal Angles is Isosceles we have that $EB = EA$.
Since $AD = DC$ and $DE$ is common, and $\angle ADE$ is a right angle, by Triangle Side-Angle-Side Congruence we have that $\triangle ADE = \triangle CDE$.
Hence $AE = CE$ both of which are equal to $BE$ from above.
So from Condition for Point to be Center of Circle $E$ is the center of the required circle.

Second, suppose that $ABC$ is such that $\angle ABD = \angle BAD$:


From Triangle with Two Equal Angles is Isosceles we have that $AD = DB$ and so also equal to $DC$.
So from Condition for Point to be Center of Circle $D$ is the center of the required circle.
Incidentally, note that in this case segment $ABC$ is actually a semicircle.

Finally, suppose that $ABC$ is such that $\angle ABD < \angle BAD$:


The same proof applies:
Since $\angle ABE = \angle BAE$, from Triangle with Two Equal Angles is Isosceles we have that $EB = EA$.
Since $AD = DC$ and $DE$ is common, and $\angle ADE$ is a right angle, by Triangle Side-Angle-Side Congruence we have that $\triangle ADE = \triangle CDE$.
Hence $AE = CE$ both of which are equal to $BE$ from above.
So from Condition for Point to be Center of Circle $E$ is the center of the required circle.
$\blacksquare$


Proof 2

Choose any point $C$ on the circumference.
Bisect $AC$ at $D$ and $BC$ at $E$ and construct a perpendicular $DF$ and $EF$ from each through the point of bisection.
The point of intersection $F$ is the center of the required circle.

$AFC$ and $CFB$ are isosceles triangles and so $AF, CF$ and $BF$ are all equal.
The result follows from Condition for Point to be Center of Circle.
$\blacksquare$





