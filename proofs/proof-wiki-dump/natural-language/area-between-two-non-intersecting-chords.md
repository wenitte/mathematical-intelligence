# 

Source: https://proofwiki.org/wiki/Area_between_Two_Non-Intersecting_Chords



Theorem
Let $AB$ and $CD$ be two chords of a circle whose center is at $O$ and whose radius is $r$.



Let $\alpha$ and $\theta$ be respectively the measures in radians of the angles $\angle COD$ and $\angle AOB$.

Then the area $\AA$ between the two chords is given by:

$\AA = \dfrac {r^2} 2 \paren {\theta - \sin \theta - \alpha + \sin \alpha}$
if $O$ is not included in the area, and:

$\AA = r^2 \paren {\pi - \dfrac 1 2 \paren {\theta - \sin \theta + \alpha - \sin \alpha} }$
if $O$ is included in the area.


Proof
Let $\SS_\alpha$ be the area of the segment whose base subtends $\alpha$.
Let $\SS_\theta$ be the area of the segment whose base subtends $\theta$.


Case $(1)$: Center included in Area
Let the center $O$ be included in the area.
The area between the two chords is given by:

the area of the whole circle
minus:

the areas of the segments $\SS_\alpha$ and $\SS_\theta$ .
Thus:














\(\ds \AA\)

\(=\)







\(\ds \pi r^2 - \SS_\alpha - \SS_\theta\)





Area of Circle: $\pi r^2$














\(\ds \)

\(=\)







\(\ds \pi r^2 - \frac 1 2 r^2 \paren {\theta - \sin \theta} - \frac 1 2 r^2 \paren {\alpha - \sin \alpha}\)





Area of Segment of Circle














\(\ds \)

\(=\)







\(\ds r^2 \paren {\pi - \frac 1 2 \paren {\theta - \sin \theta + \alpha - \sin \alpha} }\)





rearranging



$\Box$


Case $(2)$: Center not included in Area
Let $\theta \ge \alpha$.
The area between the two chords is given by:

the area of the segment $\SS_\theta$
minus:

the area of the segment $\SS_\alpha$.

Thus:














\(\ds \AA\)

\(=\)







\(\ds \SS_\theta - \SS_\alpha\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 r^2 \paren {\theta - \sin \theta} - \frac 1 2 r^2 \paren {\alpha - \sin \alpha}\)





Area of Segment of Circle














\(\ds \)

\(=\)







\(\ds \frac {r^2} 2 \paren {\theta - \sin \theta - \alpha + \sin \alpha}\)





rearranging



$\blacksquare$





