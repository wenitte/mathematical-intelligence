# 

Source: https://proofwiki.org/wiki/Chord_Length_for_Regular_Polygon

Theorem
Let $P$ be a regular polygon of $n$ sides.
Let $P$ be inscribed into a circumcircle with radius $r$.


Let $CF$ be a chord of $P$, also a chord of the circumcircle.
$CF$ divides $P$ into two polygons containing $k$ and $n - k$ sides of $P$.
The length of the chord is $2 r \map \sin {\dfrac {k \pi} n}$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Instead of talking about circumscribed circles, can we just refer to the long radius? It might streamline a lot of the argument.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Let $\theta = \angle BAC$ be an inscribed angle, subtending one of the sides of $P$, with its vertex coinciding in one of the other vertices of $P$.
Because $P$ is a regular $n$-gon, its sides are all the same length.
We have by hypothesis that $P$ is inscribed into a circle.
Therefore, the central angles subtending a single side all have the same angular measure: $\dfrac {2 \pi} n$.
By the Inscribed Angle Theorem, the angles formed at the vertices of $P$ subtending a single side all have equal angular measure.
That is:

$\theta = \dfrac \pi n$
Let $\angle CAF = \phi$ be an inscribed angle subtending the chord $CF$.
By addition:

$\angle CAF = \angle CAD + \angle DAE + \angle EAF$
Thus, the angle $\phi$ is the sum of $k$ smaller angles each with measure $\theta$.
Hence:

$\phi = k \theta = \dfrac {k \pi} n$
By Length of Chord of Circle:

$CF = 2 r \map \sin {\dfrac {k \pi} n}$
$\blacksquare$


Examples

This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
For the diagonal of a square inscribed in a circle of radius $r$, we have $k=2$.  The central angle subtending one side has measure $\frac {pi} 2$, so the inscribed angle subtending one side has measure $\frac {\pi} 4$.  Thus, the length of the diagonal is $2r \map \sin 2 \frac \pi 4 = 2r$.
For the regular hexagon, there are chords enclosing $k=2$ and $k=3$ sides.  The latter are diameters of the circumcircle.  The central angle subtending one side has measure $\frac \pi 3$, so the corresponding inscribed angle has measure $\frac \pi 6$.
For the case $k=3$ we have $2r \sin 3 \frac \pi 6 = 2r$ and for the case $k=2$ we have $2r \sin 2 \frac \pi 6 = \sqrt{3} r$
For the general case with $n$ sides, the inscribed angle subtending one side has measure $\frac \pi n$ and the length of the chord cutting off $k$ sides is $2r \sin k \frac \pi n$.





