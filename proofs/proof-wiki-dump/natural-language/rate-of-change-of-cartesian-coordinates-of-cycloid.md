# 

Source: https://proofwiki.org/wiki/Rate_of_Change_of_Cartesian_Coordinates_of_Cycloid

Theorem
Let a circle $C$ of radius $a$ roll without slipping along the x-axis of a cartesian plane at a constant speed such that the center moves with a velocity $\mathbf v_0$ in the direction of increasing $x$.
Consider a point $P$ on the circumference of this circle.
Let $\tuple {x, y}$ be the coordinates of $P$ as it travels over the plane.

Then the rate of change of $x$ and $y$ can be expresssed as:














\(\ds \frac {\d x} {\d t}\)

\(=\)







\(\ds \mathbf v_0 \paren {1 - \cos \theta}\)




















\(\ds \frac {\d y} {\d t}\)

\(=\)







\(\ds \mathbf v_0 \sin \theta\)









where $\theta$ is the angle turned by $C$ after time $t$.


Proof
Let the center of $C$ be $O$.
Without loss of generality, let $P$ be at the origin at time $t = t_0$.
By definition, $P$ traces out a cycloid.
From Equation of Cycloid, $P = \tuple {x, y}$ is described by:

$(1): \quad \begin{cases} x & = a \paren {\theta - \sin \theta} \\
y & = a \paren {1 - \cos \theta} \end{cases}$
Let $\tuple {x_c, y_c}$ be the coordinates of $O$ at time $t$.
We have that:

$y_c$ is constant: $y_c = a$
From Body under Constant Acceleration: Velocity after Time

$x_c = \mathbf v_0 t$
as the acceleration of $O$ is zero.
But $x_c$ is equal to the length of the arc of $C$ that has rolled along the $x$-axis.

By Arc Length of Sector:

$x_c = a \theta$
and so:




\(\text {(2)}: \quad\)









\(\ds \theta\)

\(=\)







\(\ds \frac {\mathbf v_0 t} a\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d \theta} {\d t}\)

\(=\)







\(\ds \frac {\mathbf v_0} a\)










Thus:














\(\ds x\)

\(=\)







\(\ds a \paren {\frac {\mathbf v_0 t} a - \sin \theta}\)





substituting for $\theta$ from $(2)$














\(\ds x\)

\(=\)







\(\ds \mathbf v_0 t - a \sin \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d t}\)

\(=\)







\(\ds \mathbf v_0 - a \cos \theta \frac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \mathbf v_0 - a \cos \theta \frac {\mathbf v_0} a\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \mathbf v_0 \paren {1 - \cos \theta}\)










and:














\(\ds y\)

\(=\)







\(\ds a \paren {1 - \cos \theta}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d t}\)

\(=\)







\(\ds a \sin \theta \frac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a \sin \theta \frac {\mathbf v_0} a\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \mathbf v_0 \sin \theta\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $4 \ \text{(a)}$




