# 

Source: https://proofwiki.org/wiki/Position_of_Centroid_on_Euler_Line



Theorem
Let $\triangle ABC$ be a triangle which is not equilateral.
Let $O$ be the circumcenter of $\triangle ABC$.
Let $G$ be the centroid of $\triangle ABC$.
Let $H$ be the orthocenter of $\triangle ABC$.

Then $G$ lies on the straight line connecting $O$ and $H$ such that:

$OG : GH = 1 : 2$

The line $OGH$ is the Euler line of $\triangle ABC$.


Proof
First it is necessary to dispose of the case where $\triangle ABC$ is equilateral.
From Orthocenter, Centroid and Circumcenter Coincide iff Triangle is Equilateral, in that case $O$, $G$ and $H$ are the same point.
For all other triangles, $O$, $G$ and $H$ are distinct.




Let $A'$ be the midpoint of $BC$.
Let $B'$ be the midpoint of $AC$.
By definition of centroid, $G$ is the point at which $AA'$ and $BB'$ intersect.
By Circumscribing Circle about Triangle, $O$ is the point at which the perpendicular bisectors of $AC$ and $BC$ intersect.
By construction, the perpendicular bisectors of $BC$ and $AC$ pass through $A'$ and $B'$ respectively.
Let $OG$ be produced to $H$ such that $OG : HG = 1 : 2$.
It will be demonstrated that $H$ is the orthocenter of $\triangle ABC$.

Draw $AH$ and produce it to intersect $BC$ at $P$.
From Medians of Triangle Meet at Centroid:

$A'G : AG = 1 : 2$
Consider $\triangle A'OG$ and $\triangle AHG$.
From above:

$OG : HG = A'G : AG$
From Two Straight Lines make Equal Opposite Angles:

$\angle OGA' = \angle HGA$
From Triangles with One Equal Angle and Two Sides Proportional are Similar:

$\triangle A'OG$ and $\triangle AHG$ are similar.
Thus:

$\angle GHA = \angle GOA'$
From Equal Alternate Angles implies Parallel Lines:

$AH \parallel A'O$
From Parallelism implies Equal Corresponding Angles:

$\angle APC = \angle OA'C$
As $OA'$ is perpendicular to $BC$, it follows that $AP$ is also perpendicular to $BC$.
Thus $AP$ is a straight line through $A$ perpendicular to $BC$.
So by definition $AP$ is an altitude of $\triangle ABC$ which passes through $H$.

Similarly, draw $BH$ and produce it to intersect $AC$ at $Q$.
By a similar analysis of the triangles $\triangle B'OG$ and $\triangle BHG$:

$BQ$ is an altitude of $\triangle ABC$ which passes through $H$.
From Altitudes of Triangle Meet at Point, the altitude of $\triangle ABC$ from $C$ to $AB$ likewise will pass through $H$.
Thus $H$ is by definition the orthocenter of $\triangle ABC$.

By construction, $OGH$ is a straight line such that:

$OG : GH = 1 : 2$
Hence the result.
$\blacksquare$


Historical Note
It was Leonhard Paul Euler who published the result that the circumcenter, centroid and orthocenter of a triangle all lie on the same straight line.
He also determined the ratio of the distances between these points.
Hence this line is now known as the triangle's Euler line.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler line
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euler line
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): orthocentre
This article incorporates material from Euler Line Proof on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.




