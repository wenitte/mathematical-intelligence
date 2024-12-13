# 

Source: https://proofwiki.org/wiki/Maximum_Rate_of_Change_of_Y_Coordinate_of_Astroid

Theorem
Let $C_1$ and $C_2$ be the epicycle and deferent respectively of an astroid $H$.
Let $C_2$ be embedded in a cartesian plane with its center $O$ located at the origin.
Let the center $C$ of $C_1$ move at a constant angular velocity $\omega$ around the center of $C_2$.
Let $P$ be the point on the circumference of $C_1$ whose locus is $H$.
Let $C_1$ be positioned at time $t = 0$ so that $P$ its point of tangency to $C_2$, located on the $x$-axis.
Let $\theta$ be the angle made by $OC$ to the $x$-axis at time $t$.

Then the maximum rate of change of the $y$ coordinate of $P$ in the first quadrant occurs when $P$ is at the point where:

$x = a \paren {\dfrac 1 3}^{3/2}$
$y = a \paren {\dfrac 2 3}^{3/2}$


Proof

The rate of change of $\theta$ is given by:

$\omega = \dfrac {\d \theta} {\d t}$

From Equation of Astroid: Parametric Form, the point $P = \tuple {x, y}$ is described by the parametric equation:

$\begin {cases}
x & = a \cos^3 \theta \\
y & = a \sin^3 \theta
\end{cases}$
The rate of change of $y$ is given by:














\(\ds \dfrac {\d y} {\d t}\)

\(=\)







\(\ds \dfrac {\d y} {\d \theta} \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 3 a \omega \sin^2 \theta \cos \theta\)





Power Rule for Derivatives, Derivative of Sine Function, Chain Rule for Derivatives




By Derivative at Maximum or Minimum, when $\dfrac {\d y} {\d t}$ is at a maximum:

$\dfrac {\d^2 y} {\d t^2} = 0$
Thus:














\(\ds \dfrac {\d^2 y} {\d t^2}\)

\(=\)







\(\ds \map {\dfrac \d {\d \theta} } {3 a \omega \sin^2 \theta \cos \theta} \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 3 a \omega^2 \paren {2 \sin \theta \cos^2 \theta - \sin^3 \theta}\)





Product Rule for Derivatives and others




Hence:














\(\ds \dfrac {\d^2 y} {\d t^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 3 a \omega^2 \paren {2 \sin \theta \cos^2 \theta - \sin^3 \theta}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 \sin \theta \cos^2 \theta\)

\(=\)







\(\ds \sin^3 \theta\)










We can assume $\sin \theta \ne 0$ because in that case $\theta = 0$ and so $\dfrac {\d y} {\d t} = 0$.
Thus when $\sin \theta = 0$, $y$ is not a maximum.
So we can divide by $\sin \theta$ to give:














\(\ds 2 \cos^2 \theta\)

\(=\)







\(\ds \sin^2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds \tan^2 \theta\)

\(=\)







\(\ds 2\)





Tangent is Sine divided by Cosine








\(\ds \leadsto \ \ \)





\(\ds \tan \theta\)

\(=\)







\(\ds \sqrt 2\)










We have:














\(\ds x\)

\(=\)







\(\ds a \cos^3 \theta\)




















\(\ds y\)

\(=\)







\(\ds a \sin^3 \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac y x\)

\(=\)







\(\ds \tan^3 \theta\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds 2^{3/2}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 2^{3/2} x\)










From Equation of Astroid: Cartesian Form:

$x^{2/3} + y^{2/3} = a^{2/3}$
Hence:














\(\ds x^{2/3} + \paren {2^{3/2} x}^{2/3}\)

\(=\)







\(\ds a^{2/3}\)














\(\ds \leadsto \ \ \)





\(\ds x^{2/3} \paren {1 + 2}\)

\(=\)







\(\ds a^{2/3}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \paren {\frac {a^{2/3} } 3}^{3/2}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \paren {\frac 1 3}^{3/2}\)










Similarly:














\(\ds \frac y x\)

\(=\)







\(\ds 2^{3/2}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac 1 {2^{3/2} } y\)




















\(\ds \paren {\frac 1 {2^{3/2} } y}^{2/3} + y^{2/3}\)

\(=\)







\(\ds a^{2/3}\)














\(\ds \leadsto \ \ \)





\(\ds y^{2/3} \paren {1 + \frac 1 2}\)

\(=\)







\(\ds a^{2/3}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds y^{2/3}\)

\(=\)







\(\ds \frac 2 3 a^{2/3}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {2 \frac {a^{2/3} } 3}^{3/2}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \paren {\frac 2 3}^{3/2}\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $10$




