# 

Source: https://proofwiki.org/wiki/Interval_between_Local_Maxima_for_Underdamped_Free_Vibration

Theorem
Consider a physical system $S$ whose behaviour can be described with the second order ODE in the form:

$(1): \quad \dfrac {\d^2 x} {\d t^2} + 2 b \dfrac {\d x} {\d t} + a^2 x = 0$
for $a, b \in \R_{>0}$.
Let $b < a$, so as to make $S$ underdamped.




Let $T$ be the period of oscillation of $S$.

Then the successive local maxima of $x$ occur for $t = 0, T, 2T, \ldots$


Proof
Let the position of $S$ be described in the canonical form:

$(1): \quad x = \dfrac {x_0 \, a} \alpha e^{-b t} \map \cos {\alpha t - \theta}$
where:

$\alpha = \sqrt {a^2 - b^2}$.
$\theta = \map \arctan {\dfrac b \alpha}$
From Period of Oscillation of Underdamped System is Regular, the period of oscillation $T$ is given by:

$T = \dfrac {2 \pi} {a^2 - b^2}$

Differentiating {with respect to $t$:














\(\ds x'\)

\(=\)







\(\ds -b \dfrac {x_0 \, a} \alpha e^{-b t} \map \cos {\alpha t - \theta} - \dfrac {x_0 \, a} \alpha e^{-b t} \alpha \map \sin {\omega t - \theta}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {x_0 \, a} \alpha e^{-b t} \paren {b \map \cos {\alpha t - \theta} + \alpha \map \sin {\alpha t - \theta} }\)










From Derivative at Maximum or Minimum, the local maxima and local minima of $x$ occur at $x' = 0$:














\(\ds x'\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\dfrac {x_0 \, a} \alpha e^{-b t} \paren {b \map \cos {\alpha t - \theta} + \alpha \map \sin {\alpha t - \theta} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds b \map \cos {\alpha t - \theta}\)

\(=\)







\(\ds -\alpha \map \sin {\alpha t - \theta}\)














\(\ds \leadsto \ \ \)





\(\ds \map \tan {\alpha t - \theta}\)

\(=\)







\(\ds -\frac b \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\tan \alpha t - \tan \theta} {1 + \tan \alpha t \tan \theta}\)

\(=\)







\(\ds -\frac b \alpha\)





Tangent of Difference








\(\ds \leadsto \ \ \)





\(\ds \frac {\tan \alpha t - \dfrac b \alpha} {1 + \tan \alpha t \dfrac b \alpha}\)

\(=\)







\(\ds -\frac b \alpha\)





Definition of $\theta$








\(\ds \leadsto \ \ \)





\(\ds \tan \alpha t - \dfrac b \alpha\)

\(=\)







\(\ds -\frac b \alpha - \tan \alpha t \dfrac {b^2} {\alpha^2}\)














\(\ds \leadsto \ \ \)





\(\ds \tan \alpha t \paren {1 + \dfrac {b^2} {\alpha^2} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \tan \alpha t\)

\(=\)







\(\ds 0\)





as $1 + \dfrac {b^2} {\alpha^2} > 0$








\(\ds \leadsto \ \ \)





\(\ds \alpha t\)

\(=\)







\(\ds 0, \pi, 2 \pi, \ldots\)





Tangent of Zero, Tangent of Angle plus Straight Angle




It remains to be determined which of these points at which $x' = 0$ are local maxima.
This occurs when $x > 0$.
From Cosine of Angle plus Full Angle:

$\cos x = \map \cos {2 \pi + x}$
We have that at $x = x_0$ at $t = 0$.
It is given that $x_0 > 0$.
So at $t = 0, 2 \pi, 4 \pi, \ldots$ we have that:

$\cos \alpha t > 0$
Similarly, from Cosine of Angle plus Straight Angle:

$\cos x = -\map \cos {\pi + x}$
So at $t = \pi, 3 \pi, 5 \pi, \ldots$ we have that:

$\cos \alpha t < 0$
Thus we have that:

$\alpha L = 2 \pi$
where $L$ is the value of $t$ between consecutive local maxima of $x$.
Thus:

$L = \dfrac {2 \pi} {\alpha} = \dfrac {2 \pi} {a^2 - b^2} = T$
as required.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Problem $(2)$




