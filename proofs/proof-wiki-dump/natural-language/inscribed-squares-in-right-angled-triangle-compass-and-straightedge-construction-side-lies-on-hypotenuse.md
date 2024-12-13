# 

Source: https://proofwiki.org/wiki/Inscribed_Squares_in_Right-Angled_Triangle/Compass_and_Straightedge_Construction/Side_Lies_on_Hypotenuse

Theorem

Let $\triangle ABC$ be a right-angled triangle, where $\angle C = 90^\circ$.
Construct a perpedicular line from $C$ to side $AB$, and name the intersection $D$.
Construct the angle bisector of $\angle ADC$.
Let the point of intersection of this angle bisector and side $AC$ be $E$.
Construct a line parallel to $AB$ that passes through $E$ to meet $CD$ at $F$.
Extend $AF$ to side $BC$ at $G$.
Construct a line parallel to $AB$ that passes through $G$ to meet side $AC$ at $H$.
Construct perpedicular lines from $H$ and $G$ to side $AB$, and name the intersections $I$ and $J$ respectively.
Then $GHIJ$ is an inscribed square.


Proof
Note that $HG \perp HI$, $HG \perp GJ$ and $HG \parallel IJ$ by construction.
Therefore $GHIJ$ is a rectangle.

By definition of an angle bisector, $\angle FDE = 45^\circ$.
Since $\angle EFD = 90^\circ$ by construction, by Sum of Angles of Triangle equals Two Right Angles:

$\angle DEF + \angle EFD + \angle FDE = 180^\circ$
$\therefore \angle DEF = 180^\circ - 90^\circ - 45^\circ = 45^\circ = \angle FDE$
By Triangle with Two Equal Angles is Isosceles, $DF = FE$.

Since $EF \parallel HG$, $\triangle AEF \sim \triangle AHG$ by Equiangular Triangles are Similar.
Similarly, since $FD \parallel GJ$, $\triangle AFD \sim \triangle AGJ$ by Equiangular Triangles are Similar.
By definition of similar triangles:

$\dfrac {EF} {HG} = \dfrac {AF} {AG} = \dfrac {FD} {GJ}$
As $EF = FD$, we must have $HG = GJ$.
Since $GHIJ$ is a rectangle with two adjacent equal sides, it must also be a square.
$\blacksquare$





