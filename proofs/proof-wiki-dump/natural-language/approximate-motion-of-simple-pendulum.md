# 

Source: https://proofwiki.org/wiki/Approximate_Motion_of_Simple_Pendulum

Theorem
Consider a simple pendulum consisting of a bob whose mass is $m$, at the end of a rod of negligible mass of length $a$.
Let the bob be pulled to one side so that the rod is at a small angle $\alpha$ (less than about $10 \degrees$ or $15 \degrees$) from the vertical and then released.
Let $T$ be the period of the pendulum, that is, the time through which the bob takes to travel from one end of its path to the other, and back again.

Then:

$T \approx 2 \pi \sqrt {\dfrac a g}$
where $g$ is the Acceleration Due to Gravity.


Proof
At a time $t$, let:

the rod be at an angle $\theta$ to the the vertical
the bob be travelling at a speed $v$
the displacement of the bob from where it is when the rod is vertical, along its line of travel, be $s$.

From Motion of Simple Pendulum, the equation of motion of the bob is given by:

$\dfrac {a^2} 2 \paren {\dfrac {\d \theta} {\d t} }^2 = g a \paren {a \cos \theta - a \cos \alpha}$
Differentiating with respect to $t$ and simplifying yields:

$a \dfrac {\d^2 \theta} {\d t^2} = -g \sin \theta$
For small angles, $\sin \theta \approx \theta$ and so:

$\dfrac {\d^2 \theta} {\d t^2} + \dfrac g a \theta = 0$
This is an instance of a $2$nd order linear ODE.
From Linear Second Order ODE: $y + k^2 y = 0$, this has the solution:

$\theta = c_1 \sin \sqrt {\dfrac g a} t + c_1 \cos \sqrt {\dfrac g a} t$
We have at $t = 0$ that $\theta = \alpha$ and $\dfrac {\d \theta} {\d t} = 0$.
This yields:

$\theta = \alpha \cos \sqrt {\dfrac g a} t$
and so the period of this simple pendulum is:

$T = 2 \pi \sqrt {\dfrac a g}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 5$: Falling Bodies and Other Rate Problems
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): elliptic integral
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): pendulum
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): pendulum
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $9$: Patterns in Nature: Differential equations




