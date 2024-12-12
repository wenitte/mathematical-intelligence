# 

Source: https://proofwiki.org/wiki/Construction_of_Regular_Dodecahedron_within_Given_Sphere


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
In the words of Euclid:

To construct a dodecahedron and comprehend it in a sphere, like the aforesaid figures, and to prove that the side of the dodecahedron is the irrational straight line called apotome.
(The Elements: Book $\text{XIII}$: Proposition $17$)


Porism
In the words of Euclid:

From this it is manifest that, when the side of the cube is cut in extreme and mean ratio, the greater segment is the side of the dodecahedron.
(The Elements: Book $\text{XIII}$: Proposition $17$ : Porism)


Proof

From Proposition $15$ of Book $\text{XIII} $: Construction of Cube within Given Sphere:

Consider a cube inscribed in the given sphere.
Let $ABCD$ and $CBEF$ be two faces of this cube which are perpendicular to each other.
Let the edges $AB, BC, CD, DA, EF, EB, FC$ of this cube be bisected at $G, H, K, L, M, N, O$ respectively.
Let $GK, HL, MN, NO$ be joined.
Let the straight lines $NP, PO, HQ$ be cut in extreme and mean ratio at the points $R, S, T$ respectively.
Let the greater segments be $RP, PS, TQ$.
From the points $R, S, T$ let $RU, SV, TW$ be constructed perpendicular to the planes $ABCD$ and $CBEF$ appropriately, towards the outside of the cube.
Let $RU = SV = TW = RP$ and so equal also to $PS$ and $TQ$.
Let $UB, BW, WC, CV, VU$ be joined.
It is to be demonstrated that the pentagon $UBWCV$ is regular and lies all in one plane.

Let $RB, SB, VB$ be joined.
We have that:

$NP$ has been cut in extreme and mean ratio at $R$
$RP$ is the greater segment
Therefore from Proposition $4$ of Book $\text{XIII} $: Area of Squares on Whole and Lesser Segment of Straight Line cut in Extreme and Mean Ratio:

$PN^2 + NR^2 = 3 \cdot RP^2$
But:

$PN = NB$
and:

$PR = RU$
Therefore:

$BN^2 + NR^2 = 3 \cdot RU^2$
But from Proposition $47$ of Book $\text{I} $: Pythagoras's Theorem:

$BR^2 = BN^2 + NR^2$
Therefore:

$BR^2 = 3 \cdot RU^2$
So:

$BR^2 + RU^2 = 4 \cdot RU^2$
But from Proposition $47$ of Book $\text{I} $: Pythagoras's Theorem:

$BU^2 = BR^2 + RU^2$
Therefore:

$BU^2 = 4 \cdot RU^2$
Therefore:

$BU = 2 \cdot RU$
But also:

$SR = 2 \cdot PR = 2 \cdot RU$
and so:

$VU = 2 \cdot UR$
Therefore:

$BU = UV$
Similarly it can be proved that:

$BW = WC = CV = BU = UV$
Therefore the pentagon $BUVCW$ is equilateral.

Next it is to be demonstrated that $BUVCW$ lies in one plane.
Let $PX$ be drawn from $P$ parallel to each of $RU$ and $SV$ and towards the outside of the cube.
Let $XH$ and $HW$ be drawn.
We have that:

$HQ$ has been cut in extreme and mean ratio at $T$
$QT$ is the greater segment.
Therefore:

$HQ : QT = QT : TH$
But:

$HQ = HP$
and:

$QT = TW = PX$
Therefore:

$PH : PX = WT : TH$
Also, each of $HP$ and $TW$ is perpendicular to the plane $BD$.
So from Proposition $6$ of Book $\text{XI} $: Two Lines Perpendicular to Same Plane are Parallel:

$HP \parallel TW$
Also, $TH$ and $PX$ are both perpendicular to the plane $BF$.
So also from Proposition $6$ of Book $\text{XI} $: Two Lines Perpendicular to Same Plane are Parallel:

$TH \parallel PX$
But we have that $\triangle XPH$ and $\triangle HTW$ have two sides which are proportional to two sides placed together at one angle so that their corresponding sides are parallel.
So by Proposition $32$ of Book $\text{VI} $: Triangles with Two Sides Parallel and Equal:

the remaining straight lines $XH$ and $HW$ are in a straight line.
Therefore $XHW$ is a straight line.
But from Proposition $1$ of Book $\text{XI} $: Straight Line cannot be in Two Planes:

$XHW$ lies completely in one plane.
Therefore the pentagon $UBWCV$ lies all in one plane.

It is next to be demonstrated that the pentagon $UBWCV$ is equiangular.
We have that:

$NP$ has been cut in extreme and mean ratio at $R$
$RP$ is the greater segment
Also:

$PR = PS$
Therefore by Proposition $5$ of Book $\text{XIII} $: Straight Line cut in Extreme and Mean Ratio plus its Greater Segment:

$NS$ has been cut in extreme and mean ratio at $P$
$NP$ is the greater segment.
Therefore from Proposition $4$ of Book $\text{XIII} $: Area of Squares on Whole and Lesser Segment of Straight Line cut in Extreme and Mean Ratio:

$NS^2 + SP^2 = 3 \cdot NP^2$
But:

$NP = NB$
and:

$PS = SV$
Therefore:

$NS^2 + SV^2 = 3 \cdot NB^2$
So:

$SN^2 + VS^2 + NB^2 = 4 \cdot NB^2$
But:

$SB^2 = SN^2 + NB^2$
Therefore:

$BS^2 + SV^2 = 4 \cdot NB^2$
But $\angle VSB$ is a right angle.
So from Proposition $47$ of Book $\text{I} $: Pythagoras's Theorem:

$BS^2 + SV^2 = BV^2$
and so:

$BV^2 = 4 \cdot NB^2$
Therefore:

$VB = 2 \cdot BN$
Therefore:

$BV = BC$
Also we have that:

$BU = BW = UV = WC$
So from Proposition $8$ of Book $\text{I} $: Triangle Side-Side-Side Congruence:

$\angle BUV = \angle BWC$
Similarly it can be demonstrated that:

$\angle UVC = \angle BWC$
Therefore:

$\angle BWC = \angle BUV = \angle UVC$
From Proposition $7$ of Book $\text{XIII} $: Equilateral Pentagon is Equiangular if Three Angles are Equal:

the pentagon $UBWCV$ is equiangular.
So we have that the pentagon $UBWCV$ is equiangular and equilateral.
Therefore the pentagon $UBWCV$ is regular.
We also have that $UBWCV$ is constructed so that $BC$ is one edge of the cube.
The same construction can be used to place a regular pentagon on each of the $12$ edges of the cube.
Hence a polyhedron will have been constructed which is contained by $12$ regular pentagons.
This is then, by definition, a regular dodecahedron.
$\Box$

It is next to be demonstrated that this regular dodecahedron can be inscribed in the given sphere.
Let $XP$ be produced, and let the produced straight line be $XZ$.
Thereby $PZ$ meets the diameter of the cube.
From Proposition $38$ of Book $\text{XI} $: Common Section of Bisecting Planes of Cube Bisect and are Bisected by Diagonal of Cube:

$PZ$ and the diameter of the cube bisect one another.
Let them meet at $Z$.
Therefore $Z$ is the center of the sphere in which the cube is inscribed.
Also, $ZP$ equals half the side of the cube.
Let $UZ$ be joined.
We have that:

$NS$ has been cut in extreme and mean ratio at $P$
$NP$ is the greater segment.
Therefore from Proposition $4$ of Book $\text{XIII} $: Area of Squares on Whole and Lesser Segment of Straight Line cut in Extreme and Mean Ratio:

$NS^2 + SP^2 = 3 \cdot NP^2$
But:

$NP = PZ$
and:

$XP = PS$
and so:

$NS = XZ$
But as $PS = RP$:

$PS = XU$
Therefore:

$ZX^2 + XU^2 = 3 \cdot NP^2$
But:

$UZ^2 = ZX^2 + XU^2$
Therefore:

$UZ^2 = 3 \cdot NP^2$
But from Proposition $15$ of Book $\text{XIII} $: Construction of Cube within Given Sphere:

the square on the diameter of the given sphere is three times the square on the side of the cube.
Therefore the square on the radius of the given sphere is three times the square on half the side of the cube.
Therefore $UZ$ equals the radius of the given sphere.
We have that $Z$ is the center of the sphere.
Therefore $U$ is on the surface of the sphere.
Similarly we can show that each of the remaining vertices of the dodecahedron is also on the surface of the sphere.
Therefore the dodecahedron has been inscribed within the sphere.
$\Box$

It remains to be demonstrated that the side of the dodecahedron is the irrational straight line called apotome.
We have that:

$NP$ has been cut in extreme and mean ratio at $R$
$RP$ is the greater segment
and that:

$PO$ has been cut in extreme and mean ratio at $S$
$PS$ is the greater segment
We have that:

$N : PR = PR : RN$
From Proposition $15$ of Book $\text{V} $: Ratio Equals its Multiples:

the same is true of the doubles also.
Therefore:

$NO : RS = RS : NR + SO$
But:

$NO > RS$
Therefore:

$RS > NR + SO$
Therefore $NO$ is cut in extreme and mean ratio, and $RS$ is the greater segment.
But:

$RS = UV$
Therefore when $NO$ is cut in extreme and mean ratio, $UV$ equals the greater segment.
We have that the diameter of the given sphere is rational.
We also have that the square on the diameter equals three times the square on side of the cube.
Therefore $NO$, which equals the side of the cube, is rational.
From Proposition $6$ of Book $\text{XIII} $: Segments of Rational Straight Line cut in Extreme and Mean Ratio are Apotome:

$UV$ is therefore an apotome.
But $UV$ is the side of the dodecahedron.
Therefore the side of the dodecahedron is an apotome.
$\blacksquare$


Historical Note
This proof is Proposition $17$ of Book $\text{XIII}$ of Euclid's The Elements. Some sources credit this construction to Hippasus of Metapontum. Others credit it to Theaetetus of Athens. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{XIII}$. Propositions
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




