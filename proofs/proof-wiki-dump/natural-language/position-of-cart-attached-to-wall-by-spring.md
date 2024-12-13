# 

Source: https://proofwiki.org/wiki/Position_of_Cart_attached_to_Wall_by_Spring



Theorem
Problem Definition

Consider a cart $C$ of mass $m$ attached to a wall by means of a spring $S$.
Let $C$ be free to move along a horizontal straight line with zero friction.
Let the force constant of $S$ be $k$.
Let the displacement of $C$ at time $t$ from the equilibrium position be $\mathbf x$.

Then the horizontal position of $C$ at time $t$ can be expressed as:

$x = C_1 \cos \alpha t + C_2 \sin \alpha t$
where:

$C_1$ and $C_2$ depend upon the conditions of $C$ at time $t = 0$
$\alpha = \sqrt {\dfrac k m}$


$x = x_0$ at time $t = 0$
Let $C$ be pulled aside to $x = x_0$ and released from stationary at time $t = 0$.
Then the horizontal position of $C$ at time $t$ can be expressed as:

$x = x_0 \cos \alpha t$


Proof
From Motion of Cart attached to Wall by Spring, the horizontal position of $C$ is given as:

$\dfrac {\d^2 \mathbf x} {\d t^2} + \dfrac k m \mathbf x = 0$
As both $k$ and $m$ are positive, $\dfrac k m$ can be expressed as:

$\dfrac k m = \alpha^2$
for some $\alpha \in \R_{>0}$.
Hence:

$\dfrac {\d^2 x} {\d t^2} + \alpha^2 x = 0$
and so from Linear Second Order ODE: $y + k^2 y = 0$:

$x = C_1 \cos \alpha t + C_2 \sin \alpha t$
Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(4)$




