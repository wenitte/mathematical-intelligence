# 

Source: https://proofwiki.org/wiki/Period_of_Oscillation_of_Underdamped_System_is_Regular

Theorem
Consider a physical system $S$ whose behaviour can be described with the second order ODE in the form:

$\dfrac {\d^2 x} {\d t^2} + 2 b \dfrac {\d x} {\d t} + a^2 x = 0$
for $a, b \in \R_{>0}$.
Let $b < a$, so as to make $S$ underdamped.

Then the period of its movement is well-defined, in the sense that its zeroes are regularly spaced, and given by:

$T = \dfrac {2 \pi} {\sqrt {a^2 - b^2} }$


Proof
Let the position of $S$ be described in the canonical form:

$(1): \quad x = \dfrac {x_0 \, a} \alpha e^{-b t} \map \cos {\alpha t - \theta}$
where $\alpha = \sqrt {a^2 - b^2}$.
The zeroes of $(1)$ occur exactly where:

$\map \cos {\alpha t - \theta} = 0$
Thus the period $T$ of $\map \cos {\alpha t - \theta}$ is given by:

$\alpha T = 2 \pi$
and so:

$T = \dfrac {2 \pi} {\sqrt {a^2 - b^2} }$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(21)$




