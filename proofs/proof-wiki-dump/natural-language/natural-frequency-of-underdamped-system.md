# 

Source: https://proofwiki.org/wiki/Natural_Frequency_of_Underdamped_System

Theorem
Consider a physical system $S$ whose behaviour can be described with the second order ODE in the form:

$\dfrac {\d^2 x} {\d t^2} + 2 b \dfrac {\d x} {\d t} + a^2 x = 0$
for $a, b \in \R_{>0}$.
Let $b < a$, so as to make $S$ underdamped.

Then the natural frequency of $S$ is given by:

$\nu = \dfrac {\sqrt {a^2 - b^2} } {2 \pi}$


Proof
Let the position of $S$ be described in the canonical form:

$(1): \quad x = \dfrac {x_0 \, a} \alpha e^{-b t} \map \cos {\alpha t - \theta}$
where $\alpha = \sqrt {a^2 - b^2}$.
From Period of Oscillation of Underdamped System is Regular:

$T = \dfrac {2 \pi} {\sqrt {a^2 - b^2} }$
where $T$ is the period of the movement of $S$.
By definition of natural frequency:

$\nu = \dfrac 1 T = \dfrac {\sqrt {a^2 - b^2} } {2 \pi}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(22)$




