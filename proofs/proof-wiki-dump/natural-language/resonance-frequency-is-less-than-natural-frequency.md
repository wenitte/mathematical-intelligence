# 

Source: https://proofwiki.org/wiki/Resonance_Frequency_is_less_than_Natural_Frequency

Theorem
Consider a physical system $S$ whose behaviour is defined by the second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + 2 b \dfrac {\d y} {\d x} + a^2 x = K \cos \omega x$
where:

$K \in \R: k > 0$
$a, b \in \R_{>0}: b < a$
Then the resonance frequency of $S$ is smaller than the natural frequency of the associated second order ODE:

$(2): \quad \dfrac {\d^2 y} {\d x^2} + 2 b \dfrac {\d y} {\d x} + a^2 x = 0$


Proof
From Natural Frequency of Underdamped System, the natural frequency of $(2)$ is:

$\nu = \dfrac {\sqrt {a^2 - b^2} } {2 \pi}$
From Condition for Resonance in Forced Vibration of Underdamped System, the resonance frequency of $S$ is:

$\omega = \sqrt {a^2 - 2 b^2}$
$\nu_R = \dfrac {\sqrt {a^2 - 2 b^2} } {2 \pi}$
We have that:














\(\ds \dfrac \nu {\nu_R}\)

\(=\)







\(\ds \dfrac {\sqrt {a^2 - b^2} } {\sqrt {a^2 - 2 b^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\nu^2} { {\nu_R}^2}\)

\(=\)







\(\ds \dfrac {a^2 - b^2} {a^2 - 2 b^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a^2 - 2 b^2 + b^2} {a^2 - 2 b^2}\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac {b^2} {a^2 - 2 b^2}\)









Thus $\nu_R < \nu$ if and only if $a^2 - 2 b^2 > 0$.
But from Condition for Resonance in Forced Vibration of Underdamped System, in order for there to be resonance, $a^2 - 2 b^2 > 0$.
The two conditions are compatible, and so hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Problem $(1)$




