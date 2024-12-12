# 

Source: https://proofwiki.org/wiki/Forced_Vibration_of_Cart_attached_to_Wall_by_Spring



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

Then the motion of $C$ is described by the second order ODE:

$m \dfrac {\d^2 \mathbf x} {\ d t^2} + c \dfrac {\d \mathbf x} {\d t} + k \mathbf x = \mathbf F_0 \cos \omega t$


Proof
Let $\mathbf F_s$ be the force on $C$ exerted by the spring $S$.
Let $\mathbf F_d$ be the damping force.
Let $\mathbf F_e$ be the external force on $C$.
By Newton's Second Law of Motion, the total force on $C$ equals its mass times its acceleration:

$\mathbf F_s + \mathbf F_d + \mathbf F_e = m \mathbf a$
By Acceleration is Second Derivative of Displacement with respect to Time:

$\mathbf a = \dfrac {\d^2 \mathbf x} {\d t^2}$
By definition, the velocity $\mathbf v$ is defined as:

$\mathbf v = \dfrac {\d \mathbf x} {\d t}$
By Hooke's Law:

$\mathbf F = -k \mathbf x$
By definition of the damping force:

$\mathbf F_d = - c \mathbf v$
By definition of the external force:

$\mathbf F_e = \mathbf F_0 \cos \omega t$
So:














\(\ds m \mathbf a\)

\(=\)







\(\ds -k \mathbf x - c \mathbf v + \mathbf F_0 \cos \omega t\)














\(\ds \leadsto \ \ \)





\(\ds m \dfrac {\d^2 \mathbf x} {\d t^2}\)

\(=\)







\(\ds -k \mathbf x - c \dfrac {\d \mathbf x} {\d t} + \mathbf F_0 \cos \omega t\)














\(\ds \leadsto \ \ \)





\(\ds m \dfrac {\d^2 \mathbf x} {\d t^2} + c \dfrac {\d \mathbf x} {\d t} + k \mathbf x\)

\(=\)







\(\ds \mathbf F_0 \cos \omega t\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(25)$




