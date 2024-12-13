# 

Source: https://proofwiki.org/wiki/Motion_of_Cart_attached_to_Wall_by_Spring_under_Damping



Theorem
Problem Definition

Consider a cart $C$ of mass $m$ attached to a wall by means of a spring $S$.
Let $C$ be free to move along a straight line in a medium which applies a damping force $F_d$ whose magnitude is proportional to the speed of $C$.
Let the force constant of $S$ be $k$.
Let the constant of proportion of the damping force $F_d$ be $c$.
Let the displacement of $C$ at time $t$ from the equilibrium position be $\mathbf x$.

Then the motion of $C$ is described by the second order ODE:

$\dfrac {\d^2 \mathbf x} {\d t^2} + \dfrac c m \dfrac {\d \mathbf x} {\d t} + \dfrac k m \mathbf x = 0$


Proof
Let $\mathbf F_s$ be the force on $C$ exerted by the spring $S$.
Let $\mathbf F_d$ be the damping force.
By Newton's Second Law of Motion, the total force on $C$ equals its mass times its acceleration:

$\mathbf F_s + \mathbf F_d = m \mathbf a$
By Acceleration is Second Derivative of Displacement with respect to Time:

$\mathbf a = \dfrac {\d^2 \mathbf x} {\d t^2}$
By definition, the velocity $\mathbf v$ is defined as:

$\mathbf v = \dfrac {\d \mathbf x} {\d t}$
By Hooke's Law:

$\mathbf F = -k \mathbf x$
By definition of the damping force:

$\mathbf F_d = - c \mathbf v$
So:














\(\ds m \mathbf a\)

\(=\)







\(\ds -k \mathbf x - c \mathbf v\)














\(\ds \leadsto \ \ \)





\(\ds m \dfrac {\d^2 \mathbf x} {\d t^2}\)

\(=\)







\(\ds -k \mathbf x - c \dfrac {\d \mathbf x} {\d t}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 \mathbf x} {\d t^2} + \dfrac c m \dfrac {\d \mathbf x} {\d t} + \dfrac k m \mathbf x\)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(10)$




