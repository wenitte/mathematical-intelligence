# 

Source: https://proofwiki.org/wiki/Condition_for_Resonance_in_Forced_Vibration_of_Underdamped_System

Theorem
Consider a physical system $S$ whose behaviour is defined by the second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + 2 b \dfrac {\d y} {\d x} + a^2 x = K \cos \omega x$
where:

$K \in \R: k > 0$
$a, b \in \R_{>0}: b < a$

Then $S$ is in resonance when:

$\omega = \sqrt {a^2 - 2 b^2}$
and thus the resonance frequency is:

$\nu_R = \dfrac {\sqrt {a^2 - 2 b^2} } {2 \pi}$

This resonance frequency exists only when $a^2 - 2 b^2 > 0$.


Proof
From Linear Second Order ODE: $y' ' + 2 b y' + a^2 y = K \cos \omega x$ where $b < a$ the general solution of $(1)$ is:

$(2): \quad y = e^{-b x} \paren {C_1 \cos \alpha x + C_2 \sin \alpha x} + \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega x - \phi}$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\phi = \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }$

By definition, $S$ is in resonance when the amplitude of the steady-state component of $(1)$ is at a maximum.
We are to determine the value of $\omega$ when this is the case.

Consider the steady-state component of $(2)$:

$y_s = \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega x - \phi}$
By definition, the amplitude of $y_s$ is:

$A = \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} }$
We have that both $a$ and $b$ are greater than $0$.
It is also assumed that $\omega$ is also greater than $0$.
Thus:

$4 b^2 \omega^2 > 0$
$a^2 > 0$
$\omega^2 > 0$
Then $y_s$ is at a maximum when:

$\map f \omega = 4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2$
is at a minimum.
Differentiating $\map f \omega$ with respect to $\omega$:














\(\ds \map {f'} \omega\)

\(=\)







\(\ds 8 b^2 \omega + 2 \paren {a^2 - \omega^2} \paren {-2 \omega}\)




















\(\ds \)

\(=\)







\(\ds 8 b^2 \omega - 4 a^2 \omega + 4 \omega^3\)




















\(\ds \)

\(=\)







\(\ds 4 \omega \paren {2 b^2 - a^2 + \omega^2}\)










Setting $\map {f'} \omega = 0$:














\(\ds 4 \omega \paren {2 b^2 - a^2 + \omega^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \omega\)

\(=\)







\(\ds 0\)


















\(\, \ds \lor \, \)

\(\ds \omega^2\)

\(=\)







\(\ds a^2 - 2 b^2\)









As $\omega > 0$ the first of these cannot apply.
If $a^2 < 2 b^2$ then $a^2 - 2 b^2 < 0$ and so $\omega^2$ has no real roots.
Hence the resonance frequency is given by:

$\omega = \sqrt {a^2 - 2 b^2}$
if and only if $a^2 > 2 b^2$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems




