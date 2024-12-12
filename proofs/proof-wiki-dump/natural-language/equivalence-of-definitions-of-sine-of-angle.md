# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sine_of_Angle



Theorem
Let $\theta$ be an angle.
The following definitions of the concept of sine of $\theta$ are equivalent:

Definition from Triangle

In the above right triangle, we are concerned about the angle $\theta$.
The sine of $\angle \theta$ is defined as being $\dfrac {\text {Opposite} } {\text {Hypotenuse} }$.

Definition from Circle
Consider a unit circle $C$ whose center is at the origin of a cartesian plane.




Let $P = \tuple {x, y}$ be the point on $C$ in the first quadrant such that $\theta$ is the angle made by $OP$ with the $x$-axis.
Let $AP$ be the perpendicular from $P$ to the $x$-axis.

Then the sine of $\theta$ is defined as the length of $AP$.
Hence in the first quadrant, the sine is positive.


Definition from Real Numbers
The real sine function $\sin: \R \to \R$ is defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds x - \frac {x^3} {3!} + \frac {x^5} {5!} - \cdots\)











Proof
Definition from Triangle implies Definition from Circle
Let $\sin \theta$ be defined as $\dfrac {\text{Opposite}} {\text{Hypotenuse}}$ in a right triangle.
Consider the triangle $\triangle OAP$.
By construction, $\angle OAP$ is a right angle.

Thus:














\(\ds \sin \theta\)

\(=\)







\(\ds \frac {AP} {OP}\)




















\(\ds \)

\(=\)







\(\ds \frac {AP} 1\)





as $OP$ is the radius of the unit circle














\(\ds \)

\(=\)







\(\ds AP\)









That is:

$\sin \theta = AP$
$\Box$


Definition from Circle implies Definition from Triangle
Let $\sin \theta$ be defined as the length of $AP$ in the triangle $\triangle OAP$.
Compare $\triangle OAP$ with $\triangle ABC$ in the diagram above.
We have that:

$\angle CAB = \angle POA = \theta$
$\angle ABC = \angle OAP$ which is a right angle
Therefore by Triangles with Two Equal Angles are Similar it follows that $\triangle OAP$ and $\triangle ABC$ are similar.
By definition of similarity:














\(\ds \frac {\text{Opposite} } {\text{Hypotenuse} }\)

\(=\)







\(\ds \frac {BC} {AC}\)





by definition














\(\ds \)

\(=\)







\(\ds \frac {AP} {OP}\)





Definition of Similar Triangles














\(\ds \)

\(=\)







\(\ds AP\)





as $OP$ is the radius of the unit circle














\(\ds \)

\(=\)







\(\ds \sin \theta\)





by definition



That is:

$\dfrac {\text{Opposite} } {\text{Hypotenuse} } = \sin \theta$
$\Box$


Definition from Circle equivalent to Definition from Real Numbers
This is demonstrated in Arcsine as Integral.
$\blacksquare$





