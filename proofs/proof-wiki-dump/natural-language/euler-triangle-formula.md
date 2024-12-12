# 

Source: https://proofwiki.org/wiki/Euler_Triangle_Formula

  


Theorem
Let $d$ be the distance between the incenter and the circumcenter of a triangle.
Then:

$d^2 = R \paren {R - 2 \rho}$
where:

$R$ is the circumradius
$\rho$ is the inradius.


Corollary
Let $\rho$ be the inradius of a triangle.
Then:

$\dfrac 1 \rho = \dfrac 1 {R - d} + \dfrac 1 {R + d}$
where:

$R$ is the circumradius
$d$ is the distance between the incenter and the circumcenter.


Proof 1
Lemma 1

Let the incenter of $\triangle ABC$ be $I$.
Let the circumcenter of $\triangle ABC$ be $O$.
Let $OI$ be produced to the circumcircle at $G$ and $J$.
Let $CI$ be produced to the circumcircle at $P$.
Let $F$ be the point where the incircle of $\triangle ABC$ meets $BC$.
We are given that:

the distance between the incenter and the circumcenter is $d$
the inradius is $\rho$
the circumradius is $R$.
Then

$IP \cdot CI = \paren {R + d} \paren {R - d}$
$\Box$


Lemma 2


Let the bisector of angle $C$ of triangle $\triangle ABC$ be produced to the circumcircle at $P$.
Let $I$ be the incenter of $\triangle ABC$.
Then:

$AP = BP = IP$
$\Box$

By Lemma $1$:

$GI \cdot IJ = IP \cdot CI$
substituting:

$IP \cdot CI = \paren {R + d} \paren {R - d}$
By Lemma $2$:

$IP = PB$
and so:

$GI \cdot IJ = PB \cdot CI$
Now using the Extension of Law of Sines in $\triangle CPB$:

$\dfrac {PB} {\map \sin {\angle PCB} } = 2 R$
and so:

$GI \cdot IJ = 2 R \map \sin {\angle PCB} \cdot CI$
By the $4$th of Euclid's common notions:

$\angle PCB = \angle ICF$
and so:

$(1): \quad GI \cdot IJ = 2 R \map \sin {\angle ICF} \cdot CI$

We have that:

$IF = \rho$
and by Radius at Right Angle to Tangent:

$\angle IFC$ is a right angle.
By the definition of sine:

$\map \sin {\angle ICF} = \dfrac {\rho} {CI}$
and so:

$\map \sin {\angle ICF} \cdot CI = \rho$

Substituting in $(1)$:














\(\ds GI \cdot IJ\)

\(=\)







\(\ds 2 R \rho\)














\(\ds \leadsto \ \ \)





\(\ds \paren {R + d} \paren {R - d}\)

\(=\)







\(\ds 2 R \rho\)














\(\ds \leadsto \ \ \)





\(\ds R^2 - d^2\)

\(=\)







\(\ds 2 R \rho\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds d^2\)

\(=\)







\(\ds R^2 - 2 R \rho\)




















\(\ds \)

\(=\)







\(\ds R \paren {R - 2 \rho}\)









$\blacksquare$


Proof 2
Lemma 1

Let the incenter of $\triangle ABC$ be $I$.
Let the circumcenter of $\triangle ABC$ be $O$.
Let $OI$ be produced to the circumcircle at $G$ and $J$.
Let $CI$ be produced to the circumcircle at $P$.
Let $F$ be the point where the incircle of $\triangle ABC$ meets $BC$.
We are given that:

the distance between the incenter and the circumcenter is $d$
the inradius is $\rho$
the circumradius is $R$.
Then

$IP \cdot CI = \paren {R + d} \paren {R - d}$
$\Box$

Lemma 2


Let the bisector of angle $C$ of triangle $\triangle ABC$ be produced to the circumcircle at $P$.
Let $I$ be the incenter of $\triangle ABC$.
Then:

$AP = BP = IP$
$\Box$








\(\ds \leadsto \ \ \)





\(\ds IP \cdot CI\)

\(=\)







\(\ds \paren {R + d} \cdot \paren {R - d}\)





Lemma $1$














\(\ds IP\)

\(=\)







\(\ds PB\)





Lemma $2$














\(\ds CI \cdot PB\)

\(=\)







\(\ds \paren {R + d} \cdot \paren {R - d}\)





Common Notion $1$





Draw diameter $POQ$.














\(\ds \angle PBQ\)

\(=\)







\(\ds 90 \degrees\)





Thales' Theorem














\(\ds \angle PCB\)

\(=\)







\(\ds \angle BQP\)





Equal Angles in Equal Circles














\(\ds \triangle IFC\)

\(\sim\)







\(\ds \triangle PBQ\)





Equiangular Right Triangles are Similar








\(\ds \leadsto \ \ \)





\(\ds \dfrac {2R} {PB}\)

\(=\)







\(\ds \dfrac {CI} \rho\)




















\(\ds CI \cdot PB\)

\(=\)







\(\ds 2 R \rho\)





rearranging




\(\text {(1)}: \quad\)









\(\ds \paren {R + d} \paren {R - d}\)

\(=\)







\(\ds 2 R \rho\)





substitution from above














\(\ds R^2 - d^2\)

\(=\)







\(\ds 2 R \rho\)





Difference of Two Squares














\(\ds d^2\)

\(=\)







\(\ds R \paren {R - 2 \rho}\)





rearranging



$\blacksquare$


Also presented as
Some writers prefer the following form:

$d^2 + 2 \rho R = R^2$


Source of Name
This entry was named for Leonhard Paul Euler.





