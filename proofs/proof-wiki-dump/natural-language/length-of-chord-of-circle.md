# 

Source: https://proofwiki.org/wiki/Length_of_Chord_of_Circle



Theorem
Let $C$ be a circle of radius $r$.
Let $AB$ be a chord which joins the endpoints of the arc $ADB$.
Then:

$AB = 2 r \sin \dfrac \theta 2$
where $\theta$ is the angle subtended by $AB$ at the center of $C$.


Proof 1

Let $O$ be the center of $C$.
Let $AB$ be bisected by $OD$.

Consider the pair of triangles $\triangle AOE$ and $\triangle BOE$.
We see that:

$AE = ED$ since $AB$ is bisected by $OD$
$AO = BO$ since they are radii
$OE = OE$ since they are common sides.
By Triangle Side-Side-Side Congruence:

$\triangle AOE = \triangle BOE$

Then we have:

$\angle AOE = \angle BOE = \dfrac \theta 2$
$\angle OEA = \angle OEB = \dfrac {180 \degrees} 2 = 90 \degrees$

By Definition of Sine Function:

$\sin \dfrac \theta 2 = \dfrac {AE} {AO} = \dfrac {\frac 1 2 AB} r$
Rearranging, we get:

$AB = 2 r \sin \dfrac \theta 2$
as desired.
$\blacksquare$


Proof 2
We have $AO = BO$ since they are radii.
Therefore $\triangle AOB$ is isosceles.
By Isosceles Triangle has Two Equal Angles:

$\angle OAB = \angle OBA$
By Sum of Angles of Triangle equals Two Right Angles:

$\angle OAB + \angle OBA + \theta = 180 \degrees$
Therefore $\angle OAB = \dfrac {180 \degrees - \theta} 2 = 90 \degrees - \dfrac \theta 2$.

Thus:














\(\ds \dfrac {AB} {\sin \theta}\)

\(=\)







\(\ds \dfrac {BO} {\sin \angle OAB}\)





Law of Sines














\(\ds {AB}\)

\(=\)







\(\ds \dfrac {BO \sin \theta} {\sin \angle OAB}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 r \sin \frac \theta 2 \cos \frac \theta 2} {\map \sin {90 \degrees - \frac \theta 2} }\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \dfrac {2 r \sin \frac \theta 2 \cos \frac \theta 2} {\cos \frac \theta 2}\)





Sine of Supplementary Angle














\(\ds \)

\(=\)







\(\ds 2 r \sin \dfrac \theta 2\)









$\blacksquare$


Historical Note
The result Length of Chord of Circle was the basis of the calculations that Hipparchus of Nicaea used when creating his trigonometrical tables.


Sources
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $5$: Eternal Triangles: The origins of trigonometry




