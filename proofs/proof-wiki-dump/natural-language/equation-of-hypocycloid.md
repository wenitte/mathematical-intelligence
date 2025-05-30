# 

Source: https://proofwiki.org/wiki/Equation_of_Hypocycloid

Theorem
Let a circle $C_1$ of radius $b$ roll without slipping around the inside of a circle $C_2$ of (larger) radius $a$.
Let $C_2$ be embedded in a cartesian plane with its center $O$ located at the origin.
Let $P$ be a point on the circumference of $C_1$.
Let $C_1$ be initially positioned so that $P$ is its point of tangency to $C_2$, located at point $A = \tuple {a, 0}$ on the $x$-axis.

Let $H$ be the hypocycloid traced out by the point $P$.
Let $\tuple {x, y}$ be the coordinates of $P$ as it travels over the plane.

The point $P = \tuple {x, y}$ is described by the equations:

$x = \paren {a - b} \cos \theta + b \map \cos {\paren {\dfrac {a - b} b} \theta}$
$y = \paren {a - b} \sin \theta - b \map \sin {\paren {\dfrac {a - b} b} \theta}$


Proof

Let $C_1$ have rolled so that the line $OB$ through the radii of $C_1$ and $C_2$ is at angle $\theta$ to the $x$-axis.
Let $C_1$ have turned through an angle $\phi$ to reach that point.

By definition of sine and cosine, $P = \tuple {x, y}$ is defined by:

$x = \paren {a - b} \cos \theta + b \map \cos {\phi - \theta}$
$y = \paren {a - b} \sin \theta - b \map \sin {\phi - \theta}$

The arc of $C_1$ between $P$ and $B$ is the same as the arc of $C_2$ between $A$ and $B$.
Thus by Arc Length of Sector:

$ a \theta = b \phi$

Thus:

$\phi - \theta = \paren {\dfrac {a - b} b} \theta$
whence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Hypocycloid: $11.19$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid




