# 

Source: https://proofwiki.org/wiki/Half_Angle_Formula_for_Tangent/Corollary_1



Theorem
$\tan \dfrac \theta 2 = \dfrac {\sin \theta} {1 + \cos \theta}$
where $\tan$ denotes tangent, $\sin$ denotes sine and $\cos$ denotes cosine.

Where $\theta = \paren {2 k + 1} \pi$, $\tan \dfrac \theta 2$ is undefined.


Proof













\(\ds \tan \frac \theta 2\)

\(=\)







\(\ds \pm \sqrt {\frac {1 - \cos \theta} {1 + \cos \theta} }\)





Half Angle Formula for Tangent














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {\paren {1 - \cos \theta} \paren {1 + \cos \theta} } {\paren {1 + \cos \theta}^2} }\)





multiplying top and bottom by $\sqrt {1 + \cos \theta}$














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {1 - \cos^2 \theta} {\paren {1 + \cos \theta}^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {\sin^2 \theta} {\paren {1 + \cos \theta}^2} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \pm \frac {\sin \theta} {1 + \cos \theta}\)










Since $\cos \theta \ge -1$, it follows that $\cos \theta + 1 \ge 0$.

When $\cos \theta = -1$ it follows that $1 + \cos \theta = 0$.
This happens when $\theta = \paren {2 k + 1} \pi$, for $k \in \Z$.
At these points, $\sin \theta = 0$ as well.
Then:














\(\ds \lim_{x \mathop \to \paren {2 k + 1} \pi^+} \frac {\sin \theta} {1 + \cos \theta}\)

\(=\)







\(\ds \lim_{x \mathop \to \paren {2 k + 1} \pi^+} \frac {\dfrac \d {\d \theta} \sin \theta} {\map {\dfrac \d {\d \theta} } {1 + \cos \theta} }\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \paren {2 k + 1} \pi^+} \frac {\cos \theta} {\sin \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 0\)









So it follows that at $\theta = \paren {2 k + 1} \pi$, $\dfrac {\sin \theta} {1 + \cos \theta}$ is undefined.
$\Box$

At all other values of $\theta$, $\cos \theta + 1 > 0$.
Therefore the sign of $\dfrac {\sin \theta} {1 + \cos \theta}$ is equal to the sign of $\sin \theta$.

We recall:

In quadrant $\text I$ and quadrant $\text {II}$: $\sin \theta > 0$
In quadrant $\text {III}$ and quadrant $\text {IV}$: $\sin \theta < 0$
Thus it follows that the same applies to $\dfrac {\sin \theta} {1 + \cos \theta}$.

Let $\dfrac \theta 2$ be in quadrant I or quadrant $\text {III}$.
Then from Bisection of Angle in Cartesian Plane: Corollary, $\theta$ is in quadrant $\text I$ or quadrant $\text {II}$.
Therefore $\dfrac {\sin \theta} {1 + \cos \theta}$ is positive.

Let $\dfrac \theta 2$ be in quadrant $\text {II}$ or quadrant $\text {IV}$.
Then from Bisection of Angle in Cartesian Plane: Corollary, $\theta$ is in quadrant $\text {III}$ or quadrant $\text {IV}$.
Therefore $\dfrac {\sin \theta} {1 + \cos \theta}$ is negative.
$\blacksquare$


Also see
Half Angle Formula for Sine
Half Angle Formula for Cosine


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.43$




