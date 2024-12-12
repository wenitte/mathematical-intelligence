# 

Source: https://proofwiki.org/wiki/Analogue_Formula_for_Spherical_Law_of_Cosines



Theorem
Let $\triangle ABC$ be a spherical triangle on the surface of a sphere whose center is $O$.
Let the sides $a, b, c$ of $\triangle ABC$ be measured by the angles subtended at $O$, where $a, b, c$ are opposite $A, B, C$ respectively.

Then:














\(\ds \sin a \cos B\)

\(=\)







\(\ds \cos b \sin c - \sin b \cos c \cos A\)




















\(\ds \sin a \cos C\)

\(=\)







\(\ds \cos c \sin b - \sin c \cos b \cos A\)











Corollary













\(\ds \sin A \cos b\)

\(=\)







\(\ds \cos B \sin C + \sin B \cos C \cos a\)




















\(\ds \sin A \cos c\)

\(=\)







\(\ds \cos C \sin B + \sin C \cos B \cos a\)











Proof 1













\(\ds \sin c \sin a \cos B\)

\(=\)







\(\ds \cos b - \cos c \cos a\)





Spherical Law of Cosines














\(\ds \)

\(=\)







\(\ds \cos b - \cos c \paren {\cos b \cos c + \sin b \sin c \cos A}\)





Spherical Law of Cosines














\(\ds \)

\(=\)







\(\ds \cos b \paren {1 - \cos^2 c} - \sin b \sin c \cos c \cos A\)





rearranging














\(\ds \)

\(=\)







\(\ds \sin^2 c \cos b - \sin b \sin c \cos c \cos A\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \sin a \cos B\)

\(=\)







\(\ds \sin c \cos b - \sin b \cos c \cos A\)





simplifying


















\(\ds \sin a \sin b \cos C\)

\(=\)







\(\ds \cos c - \cos a \cos b\)





Spherical Law of Cosines














\(\ds \)

\(=\)







\(\ds \cos c - \cos b \paren {\cos b \cos c + \sin b \sin c \cos A}\)





Spherical Law of Cosines














\(\ds \)

\(=\)







\(\ds \cos c \paren {1 - \cos^2 b} - \sin b \sin c \cos b \cos A\)





rearranging














\(\ds \)

\(=\)







\(\ds \sin^2 b \cos c - \sin b \sin c \cos b \cos A\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \sin a \cos C\)

\(=\)







\(\ds \cos b \sin c - \sin c \cos b \cos A\)





simplifying



$\blacksquare$


Proof 2

Suppose $c$ is less than $\dfrac \pi 2$.
Let $BA$ be produced to $D$ so that $BD = \dfrac \pi 2$.
Then:

$AD = \dfrac \pi 2 - c$
and:

$\angle CAD = pi - A$
Let $C$ and $D$ be joined by an arc of a great circle, denoted $x$.

From the triangle $\sphericalangle DAC$, using the Spherical Law of Cosines:














\(\ds \cos x\)

\(=\)







\(\ds \map \cos {\dfrac \pi 2 - c} \cos b + \map \sin {\dfrac \pi 2 - c} \sin b \, \map \cos {\pi - A}\)




















\(\ds \)

\(=\)







\(\ds \sin c \cos b - \cos c \sin b \cos A\)










From the triangle $\sphericalangle DBC$, using the Spherical Law of Cosines:














\(\ds \cos x\)

\(=\)







\(\ds \cos \dfrac \pi 2 \cos a + \sin \pi 2 \sin a \cos B\)




















\(\ds \)

\(=\)







\(\ds \sin a \cos B\)









Hence:

$\sin a \cos B = \sin c \cos b - \cos c \sin b \cos A$

The case where $c > \dfrac \pi 2$ is worked similarly, but by making $D$ the point between $A$ and $B$ such that $BD$ is $\dfrac \pi 2$.
$\blacksquare$


Proof 3

Let $A$, $B$ and $C$ be the vertices of a spherical triangle on the surface of a sphere $S$.
By definition of a spherical triangle, $AB$, $BC$ and $AC$ are arcs of great circles on $S$.
By definition of a great circle, the center of each of these great circles is $O$.
Let $O$ be joined to each of $A$, $B$ and $C$.
Let $P$ be an arbitrary point on $OC$.
Construct $PQ$ perpendicular to $OA$ meeting $OA$ at $Q$.
Construct $PR$ perpendicular to $OB$ meeting $OB$ at $R$.
In the plane $OAB$:

construct $QS$ perpendicular to $OA$
construct $RS$ perpendicular to $OB$
where $S$ is the point where $QS$ and $RS$ intersect.
Let $OS$ and $PS$ be joined.
Let tangents be constructed at $A$ to the arcs of the great circles $AC$ and $AB$.
These tangents contain the spherical angle $A$.
But by construction, $QS$ and $QP$ are parallel to these tangents.
Hence $\angle PQS = \sphericalangle A$.
Similarly, $\angle PRS = \sphericalangle B$.
Also we have:














\(\ds \angle COB\)

\(=\)







\(\ds a\)




















\(\ds \angle COA\)

\(=\)







\(\ds b\)




















\(\ds \angle AOB\)

\(=\)







\(\ds c\)










It is to be proved that $PS$ is perpendicular to the plane $AOB$.
By construction, $OQ$ is perpendicular to both $PQ$ and $QS$.
Thus $OQ$ is perpendicular to the plane $PQS$.
Similarly, $OR$ is perpendicular to the plane $PRS$.
Thus $PS$ is perpendicular to both $OQ$ and $OR$.
Thus $PS$ is perpendicular to every line in the plane of $OQ$ and $OR$.
That is, $PS$ is perpendicular to the plane $OAB$.
In particular, $PS$ is perpendicular to $OS$, $SQ$ and $SR$
It follows that $\triangle PQS$ and $\triangle PRS$ are right triangles.

From the right triangles $\triangle OQP$ and $\triangle ORP$, we have:




\(\text {(1)}: \quad\)









\(\ds PQ\)

\(=\)







\(\ds OP \sin b\)










\(\text {(2)}: \quad\)









\(\ds PR\)

\(=\)







\(\ds OP \sin a\)










\(\text {(3)}: \quad\)









\(\ds OQ\)

\(=\)







\(\ds OP \cos b\)










\(\text {(4)}: \quad\)









\(\ds OR\)

\(=\)







\(\ds OP \cos a\)










Let us denote the angle $\angle SOQ$ by $x$.
Then:

$\angle ROS = c - x$

From the right triangles $\triangle OSQ$ and $\triangle OSR$, we have:














\(\ds QS\)

\(=\)







\(\ds OS \sin x\)




















\(\ds RS\)

\(=\)







\(\ds OS \, \map \sin {c - x}\)














\(\ds \leadsto \ \ \)





\(\ds RS \sin x\)

\(=\)







\(\ds QS \paren {\sin c \cos x - \cos c \sin x}\)





Sine of Difference








\(\ds \leadsto \ \ \)





\(\ds RS\)

\(=\)







\(\ds QS \paren {\sin c \cot x - \cos c}\)





dividing both sides by $\sin x$




We have:














\(\ds RS\)

\(=\)







\(\ds PR \cos B\)




















\(\ds \)

\(=\)







\(\ds OP \sin a \cos B\)









and:














\(\ds QS\)

\(=\)







\(\ds PQ \cos A\)




















\(\ds \)

\(=\)







\(\ds OP \sin b \cos A\)









and:














\(\ds QS \cot x\)

\(=\)







\(\ds OQ\)




















\(\ds \)

\(=\)







\(\ds OP \cos b\)









from which it follows that:

$\sin a \cos B = \cos b \sin c - \sin b \cos c \cos A$
The result follows.


Sources
1976: W.M. Smart: Textbook on Spherical Astronomy (6th ed.) ... (previous) ... (next): Chapter $\text I$. Spherical Trigonometry: $7$. The analogue formula.




