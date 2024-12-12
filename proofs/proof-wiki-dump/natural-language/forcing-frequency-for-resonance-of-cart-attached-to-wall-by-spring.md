# 

Source: https://proofwiki.org/wiki/Forcing_Frequency_for_Resonance_of_Cart_attached_to_Wall_by_Spring



Theorem
Problem Definition

Consider a cart $C$ of mass $m$ attached to a wall by means of a spring $S$.
Let $C$ be free to move along a straight line in a medium which applies a damping force $\mathbf F_d$ whose magnitude is proportional to the speed of $C$.
Let the force constant of $S$ be $k$.
Let the constant of proportion of the damping force $\mathbf F_d$ be $c$.
Let there be applied to $C$ an external force which varies as a function of time as:

$\mathbf F_e = \mathbf F_0 \cos \omega t$
where $\mathbf F_0$ is constant.
Let the displacement of $C$ at time $t$ from the equilibrium position be $\mathbf x$.

Then the resonance frequency of $C$ is:

$\nu_R = \dfrac 1 {2 \pi} \sqrt {\dfrac k m - \dfrac {c^2} {2 m^2} }$


Proof
From Forced Vibration of Cart attached to Wall by Spring, the equation of motion of $C$ is:

$(1): \quad m \dfrac {\d^2 \mathbf x} {\d t^2} + c \dfrac {\d \mathbf x} {\d t} + k \mathbf x = \mathbf F_0 \cos \omega t$
Let:

$a^2 = \dfrac k m$
$2 b = \dfrac c m$
$K = \dfrac {\mathbf F_0} m$
This is in the form:

$(2): \quad \dfrac {\d^2 y} {\d x^2} + 2 b \dfrac {\d y} {\d x} + a^2 x = K \cos \omega x$
where:

$K \in \R: k > 0$
$a, b \in \R_{>0}: b < a$
From Condition for Resonance in Forced Vibration of Underdamped System, $C$ is in resonance when:

$\omega = \sqrt {a^2 - 2 b^2}$

Thus, substituting back for $a$ and $b$:














\(\ds \omega\)

\(=\)







\(\ds \sqrt {\dfrac k m - 2 \paren {\dfrac c {2 m} }^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac k m - \dfrac {c^2} {2 m^2} }\)









By definition of frequency of simple harmonic motion:

$\nu_R = \dfrac 1 {2 \pi} \sqrt {\dfrac k m - \dfrac {c^2} {2 m^2} }$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Problem $1$




