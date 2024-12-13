# 

Source: https://proofwiki.org/wiki/Polygon_has_Salient_Angle

Theorem
Let $P$ be a polygon.

Then $P$ has at least one salient angle.


Proof
Recall the definition of salient angle:

A salient angle is an internal angle which is less than $180 \degrees$.
An internal angle which is not a salient angle is a re-entrant angle.

Let $C$ be a circle such that all vertices of $P$ lie within the interior of $C$.
Let $A$ be the vertex of $P$ that has the minimal distance to the circumference of $C$.
If more than one vertex of $P$ has the same minimal distance to the circumference, choose $A$ among them arbitrarily.
Let $\angle A$ denote the internal angle at $A$.



Aiming for a contradiction, suppose $\angle A$ is a re-entrant angle.
Let $H$ be the point on the circumference of $C$ that lies closest to $A$.
Let $r$ be the line segment with endpoints $A$ and $H$.
Let $t$ be tangent to $C$ at $H$, which can be constructed by Construction of Tangent from Point to Circle.
Let $l$ be the straight line parallel with $t$ through $A$, which can be constructed by Construction of Parallel Line.

Suppose one of the two adjacent sides of $A$ forms an acute or right angle with $r$.
Then that side would either intersect $C$, or have an endpoint that lies closer to $C$ than $A$.
But by hypothesis:

$P$ lies completely inside $C$
and

$A$ is the closest vertex of $P$ to $C$.
Hence neither of the two adjacent sides of $A$ forms an acute or right angle with $r$.

It follows that the adjacent sides of $A$ lie on the same side of $l$.
Then $r$ is an intersecting line of the re-entrant angle formed by the two sides.
As $r$ ends in $H$ in the exterior of $P$, it follows that this re-entrant angle is not the internal angle of the vertex $A$.
This contradicts our definition of $A$.

Hence it follows that the internal angle of the vertex $A$ is salient angle.
$\blacksquare$





