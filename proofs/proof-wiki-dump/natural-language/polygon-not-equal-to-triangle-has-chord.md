# 

Source: https://proofwiki.org/wiki/Polygon_not_Equal_to_Triangle_has_Chord

Theorem
Let $P$ be a polygon that is not a triangle.

Then $P$ has a chord that lies completely in the interior of $P$.


Proof
From Polygon has Salient Angle, it follows that $P$ has a convex internal angle.
Let $A, B, C$ be vertices of $P$ such that $\angle BAC$ is a convex internal angle of the vertex $A$.
Let $BC$ subtend the angle $\angle BAC$.
Suppose $BC$ is equal to a side of $P$.
Then $P = \triangle ABC$, which would contradict our assumption that $P$ is not a triangle.
Suppose $BC$ is a chord of $P$ that lies completely in the interior of $P$.
Then the proof is done.
Suppose $BC$ does not lie completely in the interior of $P$.
Then either a side of $P$ intersects $BC$, or a vertex of $P$ lies on $BC$.
In either case, one or more vertices of $P$ lie inside $\triangle ABC$, or on $BC$.
Let $\mathcal V$ be the set of those vertices.
Define $D$ as the vertex in $\mathcal V$ that lies furthest away from $BC$.
If more than one vertex in $\mathcal V$ have the same maximal distance from $BC$, pick $D$ among them arbitrarily.

Now $AD$ is a chord of $P$ that lies completely in the interior.
As any side of $P$ that would intersect $AD$ would either intersect $AB$ or $AC$, or end in a vertex that lie further away from $BC$ than $D$ does.
In all of these cases, we have a contradiction.
$\blacksquare$


Sources
1987: Joseph O'Rourke: Art Gallery Theorems and Algorithms: $\S 1.3.1$




