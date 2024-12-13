# 

Source: https://proofwiki.org/wiki/Half_Angle_Formula_for_Tangent/Corollary_2



Theorem
$\tan \dfrac \theta 2 = \dfrac {1 - \cos \theta} {\sin \theta}$
where $\tan$ denotes tangent, $\sin$ denotes sine and $\cos$ denotes cosine.
When $\theta = \paren {2 k + 1} \pi$, $\tan \dfrac \theta 2$ is undefined.


Proof 1













\(\ds \tan \frac \theta 2\)

\(=\)







\(\ds \pm \sqrt {\frac {1 - \cos \theta} {1 + \cos \theta} }\)





Half Angle Formula for Tangent














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {\paren {1 - \cos \theta}^2} {\paren {1 + \cos \theta} \paren {1 - \cos \theta} } }\)





multiplying both numerator and denominator by $\sqrt {1 - \cos \theta}$














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {\paren {1 - \cos \theta}^2} {1 - \cos^2 \theta} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \pm \sqrt {\frac {\paren {1 - \cos \theta}^2} {\sin^2 \theta} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \pm \frac {1 - \cos \theta} {\sin \theta}\)










When $\sin \theta = 0$, the above is undefined.
This happens when $\theta = k \pi$ for $k \in \Z$.

When $\theta = \paren {2 k + 1} \pi$, the value of $1 - \cos \theta$ is $2$.
Thus at $\theta = \paren {2 k + 1} \pi$, the value of $\tan \dfrac \theta 2$ is undefined.
$\Box$

When $\theta = 2 k \pi$, the value of $\cos \theta = 1$ and so $1 - \cos \theta$ is $0$.
Then:














\(\ds \lim_{x \mathop \to 0^+} \frac {1 - \cos \theta} {\sin \theta}\)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \frac {\map {\dfrac \d {\d \theta} } {1 - \cos \theta} } {\dfrac \d {\d \theta} \sin \theta}\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \frac {\sin \theta} {\cos \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus $\tan \dfrac \theta 2$ is defined at $\theta = 2 k \pi$, and equals $0$.
$\Box$

At all other values of $\theta$, $1 - \cos \theta > 0$.
Therefore the sign of $\dfrac {1 - \cos \theta} {\sin \theta}$ is equal to the sign of $\sin \theta$.

We recall:

In quadrant $\text I$ and quadrant $\text {II}$: $\sin \theta > 0$
In quadrant $\text {III}$ and quadrant $\text {IV}$: $\sin \theta < 0$
Thus it follows that the same applies to $\dfrac {1 - \cos \theta} {\sin \theta}$.

Let $\dfrac \theta 2$ be in quadrant $\text I$ or quadrant $\text {III}$.
Then from Bisection of Angle in Cartesian Plane: Corollary, $\theta$ is in quadrant $\text I$ or quadrant $\text {II}$.
Therefore $\dfrac {1 - \cos \theta} {\sin \theta}$ is positive.

Let $\dfrac \theta 2$ be in quadrant $\text {II}$ or quadrant $\text {IV}$.
Then from Bisection of Angle in Cartesian Plane: Corollary, $\theta$ is in quadrant $\text {III}$ or quadrant $\text {IV}$.
Therefore $\dfrac {1 - \cos \theta} {\sin \theta}$ is negative.
$\blacksquare$


Proof 2













\(\ds \tan \frac \theta 2\)

\(=\)







\(\ds \frac {\sin \frac \theta 2} {\cos \frac \theta 2}\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \frac {\sin \frac \theta 2} {\cos \frac \theta 2} \frac {2 \sin \frac \theta 2} {2 \sin \frac \theta 2}\)





multiplying both numerator and denominator by $\dfrac {2 \sin \frac \theta 2} {2 \sin \frac \theta 2}$














\(\ds \)

\(=\)







\(\ds \frac {2 \sin^2 \frac \theta 2} {2 \sin \frac \theta 2 \cos \frac \theta 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - \cos \theta} {2 \sin \frac \theta 2 \cos \frac \theta 2}\)





Double Angle Formula for Cosine: Corollary $5$














\(\ds \)

\(=\)







\(\ds \frac {1 - \cos \theta} {\sin \theta}\)





Double Angle Formula for Sine



$\blacksquare$


Also see
Half Angle Formula for Sine
Half Angle Formula for Cosine


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.43$




