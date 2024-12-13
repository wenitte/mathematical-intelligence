# 

Source: https://proofwiki.org/wiki/Law_of_Sines



Theorem
Let $\triangle ABC$ be a triangle whose sides $a, b, c$ are such that $a$ is opposite $A$, $b$ is opposite $B$ and $c$ is opposite $C$.
Then:

$\dfrac a {\sin A} = \dfrac b {\sin B} = \dfrac c {\sin C} = 2 R$
where $R$ is the circumradius of $\triangle ABC$.


Proof 1
Construct the altitude from $B$.


From the definition of sine:

$\sin A = \dfrac h c$ and $\sin C = \dfrac h a$
Thus:

$h = c \sin A$
and:

$h = a \sin C$
This gives:

$c \sin A = a \sin C$
So:

$\dfrac a {\sin A} = \dfrac c {\sin C}$
Similarly, constructing the altitude from $A$ gives:

$\dfrac b {\sin B} = \dfrac c {\sin C}$
$\blacksquare$


Proof 2
Construct the circumcircle of $\triangle ABC$, let $O$ be the circumcenter and $R$ be the circumradius.
Construct $\triangle AOB$ and let $E$ be the foot of the altitude of $\triangle AOB$ from $O$.


By the Inscribed Angle Theorem:

$\angle ACB = \dfrac {\angle AOB} 2$
From the definition of the circumcenter:

$AO = BO$
From the definition of altitude and the fact that all right angles are congruent:

$\angle AEO = \angle BEO$

Therefore from Pythagoras's Theorem:

$AE = BE$
and then from Triangle Side-Side-Side Congruence:

$\angle AOE = \angle BOE$
Thus:

$\angle AOE = \dfrac {\angle AOB} 2$
and so:

$\angle ACB = \angle AOE$
Then by the definition of sine:

$\sin C = \map \sin {\angle AOE} = \dfrac {c / 2} R$
and so:

$\dfrac c {\sin C} = 2 R$

The same argument holds for all three angles in the triangle, and so:

$\dfrac c {\sin C} = \dfrac b {\sin B} = \dfrac a {\sin A} = 2 R$
$\blacksquare$


Proof 3
Acute Case
Let $\triangle ABC$ be acute.


Construct the circumcircle of $\triangle ABC$.
Let its radius be $R$.
Construct its diameter $BX$ through $B$.
By Thales' Theorem, $\angle BAX$ is a right angle.
From Angles in Same Segment of Circle are Equal:

$\angle AXB = \angle ACB$
Then:














\(\ds \sin \angle AXB\)

\(=\)







\(\ds \dfrac {AB} {BX}\)





Definition of Sine of Angle








\(\ds \leadsto \ \ \)





\(\ds \sin \angle ACB\)

\(=\)







\(\ds \dfrac c {2 R}\)














\(\ds \leadsto \ \ \)





\(\ds 2 R\)

\(=\)







\(\ds \dfrac c {\sin C}\)









The same construction can be applied to each of the remaining vertices of $\triangle ABC$.
Hence the result.
$\Box$

Let $\triangle ABC$ be obtuse.


As for the acute case, construct the circumcircle of $\triangle ABC$.
Let its radius be $R$.
Construct its diameter $BX$ through $B$.
By Thales' Theorem, $\angle BCX$ is a right angle.
We note that $\Box ABXC$ is a cyclic quadrilateral.
From Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles:

$\angle BXC = 180 \degrees - A$
Hence using a similar argument to the acute case:














\(\ds a\)

\(=\)







\(\ds 2 R \sin \angle BXC\)




















\(\ds \)

\(=\)







\(\ds 2 R \map \sin {180 \degrees - A}\)




















\(\ds \)

\(=\)







\(\ds 2 R \sin A\)









and the result follows.
$\blacksquare$


Also presented as
In their presentation of the Law of Sines, some sources do not include the relation with the circumradius, but instead merely present:

$\dfrac a {\sin A} = \dfrac b {\sin B} = \dfrac c {\sin C}$


Also known as
The Law of Sines is also known as the sine law, sine rule or rule of sines.


Also see
Law of Cosines
Law of Tangents
Spherical Law of Sines


Historical Note
The Law of Sines was documented by Nasir al-Din al-Tusi in his work On the Sector Figure, part of his five-volume Kitāb al-Shakl al-Qattā (Book on the Complete Quadrilateral).


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(8)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.92$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): sine law or sine rule
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): law of sines
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): sine rule (law of sines): 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): law of sines
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): sine rule (law of sines): 1.
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $5$: Eternal Triangles: Logarithms
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): triangle (ii): The sine rule
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): triangle (ii): The sine rule




