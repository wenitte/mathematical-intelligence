# 

Source: https://proofwiki.org/wiki/Inscribing_Equilateral_Triangle_inside_Square_with_a_Coincident_Vertex/Mistake



Source Work
1992: David Wells: Curious and Interesting Puzzles: 

The Puzzles:
Abul Wafa ($\text {940}$ – $\text {998}$): $38$
Solution


Mistake
Abul Wafa gave five different solutions. Here are three of them. ...
... Join $B$ to the midpoint, $M$, of $DC$. Draw an arc with centre $B$ and radius $BA$ to cut $BM$ at $N$. Let $DN$ cut $CB$ at $H$. Then $H$ is one of the vertices sought.



Correction
The construction is incorrect.
$DH$ is shorter than $GH$.
Let $\Box ABCD$ be embedded in a Cartesian plane such that:














\(\ds A\)

\(=\)







\(\ds \tuple {0, 0}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {a, 0}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {a, a}\)




















\(\ds D\)

\(=\)







\(\ds \tuple {0, a}\)










By Equation of Straight Line in Plane and some algebra, the equation for the straight line $MB$ is:

$(1): \quad y = 2 \paren {a - x}$
By Equation of Circle in Cartesian Plane and some algebra, the equation for the circle with center at $B$ and radius $a$ is:

$(2): \quad y^2 = 2 a x - x^2$
Hence their point of intersection $M$ is found by solving the simultaneous equations $(1)$ and $(2)$:














\(\ds 4 \paren {a - x}^2\)

\(=\)







\(\ds 2 a x - x^2\)





substituting for $y$ in $(2)$








\(\ds \leadsto \ \ \)





\(\ds 4 a^2 - 8 a x + 4 x^2\)

\(=\)







\(\ds 2 a x - x^2\)














\(\ds \leadsto \ \ \)





\(\ds 5 x^2 - 10 a x + 4 a^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {10 a \pm \sqrt {100 a^2 - 80 a^2} } {2 \times 5}\)





Solution to Quadratic Equation














\(\ds \)

\(=\)







\(\ds a \paren {1 \pm \dfrac {\sqrt 5} 5}\)





simplification



We are interested in the negative square root in this expression, as the positive square root corresponds to the point on $BM$ for negative $y$.
Thus we have:














\(\ds y\)

\(=\)







\(\ds 2 \paren {a - x}\)




















\(\ds \)

\(=\)







\(\ds a \paren {2 - 2 \paren {1 - \dfrac {\sqrt 5} 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 a \sqrt 5} 5\)









Thus we can calculate the tangent of $\angle CDH$:














\(\ds \tan \angle CDH\)

\(=\)







\(\ds \dfrac {a - \frac {2 a \sqrt 5} 5} {a \paren {1 - \frac {\sqrt 5} 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5 - 2 \sqrt 5} {\paren {5 - \sqrt 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {5 - 2 \sqrt 5} \paren {5 + \sqrt 5} } {\paren {5 - \sqrt 5} \paren {5 + \sqrt 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {15 - 5 \sqrt 5} {25 - 5}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 - \sqrt 5} 4\)









But from Tangent of 15 Degrees:

$\tan 15 \degrees = 2 - \sqrt 3$
So:

$\angle CDH \ne \tan 15 \degrees$
(in fact it is about $10.8 \degrees$).
Hence from Inscribing Equilateral Triangle inside Square with a Coincident Vertex: Lemma:

$\triangle DGH$ is not an equilateral triangle.
$\blacksquare$

It appears that this mistake originates with David Wells, in his Curious and Interesting Puzzles.
This construction cannot be found in J.L. Berggren's work Episodes in the Mathematics of Medieval Islam, from which Wells claims to have sourced it.

It also appears that it may not have been the case that Abu'l-Wafa Al-Buzjani actually gave five different solutions.
Wells seems to have got his material from J.L. Berggren's Episodes in the Mathematics of Medieval Islam, as stated above, but that work does not contain any such constructions for this result.
It is not clear where Wells actually got the information about those $5$ constructions, but it certainly was not from Berggren.
Berggren's work, in section $8$ of chapter $3$, entitled Geometry with a Rusty Compass, features five problems from Abū al-Wafā's On Those Parts of Geometry Needed by Craftsmen on pp. $107$ - $111$. They are:

To construct at the endpoint $A$ of a segment $AB$ a perpendicular to that segment, without prolonging the segment beyond $A$.
To divide a line segment into any number of equal parts.
To bisect a given angle.
To construct a square in a given circle.
To construct in a given circle a regular pentagon with a compass opening equal to the radius of the circle.

At the end he adds:

Abū al-Wafā's treatise contains a wealth of beautiful constructions for regular $n$gons, including exact constructions for $n = 3, 4, 5, 6, 8, 10$. It also gives a verging construction for $n = 9$ which goes back to Archimedes and the approximation for $n = 7$ that gives the side of a regular heptagon in a circle as equal to half the side of an inscribed equilateral triangle.
Some of these do appear in Wells's Curious and Interesting Puzzles (numbers $43$, $44$ and $45$), but apparently he does not include $38$ or several others. Nor does it appear as an exercise to the chapter $3$, or in chapter $5$ on trigonometry, where Abū al-Wafā is also featured.
Presumably, Wells got the missing ones from somewhere, perhaps even directly from On Those Parts of Geometry Needed by Craftsmen, but he does not say.


Sources
1986: J.L. Berggren: Episodes in the Mathematics of Medieval Islam
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Abul Wafa ($\text {940}$ – $\text {998}$): $38$




