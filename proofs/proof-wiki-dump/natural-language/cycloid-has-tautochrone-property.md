# 

Source: https://proofwiki.org/wiki/Cycloid_has_Tautochrone_Property


It has been suggested that this page or section be merged into Time of Travel down Brachistochrone/Corollary.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let a wire $AB$ be curved into the shape of an arc of a cycloid such that:

$A$ is at the cusp
$B$ is the highest point of the arc
and inverted so that its cusps are uppermost and on the same horizontal line.
Thus $B$ is the lowest point of the arc.
Let $AB$ be embedded in a constant and uniform gravitational field where Acceleration Due to Gravity is $g$.

Let a bead $P$ be released from anywhere on the wire between $A$ and $B$ to slide down without friction to $B$.

Then the time taken for $P$ to slide to $B$ is:

$T = \pi \sqrt {\dfrac a g}$
independently of the point from which $P$ is released.

That is, a cycloid is a tautochrone.


Proof


By the Principle of Conservation of Energy, the speed of the bead at a particular height is determined by its loss in potential energy in getting there.
Thus, at the point $\tuple {x, y}$, we have:

$(1): \quad v = \dfrac {\d s} {\d t} = \sqrt {2 g y}$

This can be written:














\(\ds \d t\)

\(=\)







\(\ds \frac {\d s} {\sqrt {2 g y} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\d x^2 + \d y^2} } {\sqrt {2 g y} }\)










Thus the time taken for the bead to slide down the wire is given by:

$\ds T_1 = \int \sqrt {\dfrac {\d x^2 + \d y^2} {2 g y} }$
From Equation of Cycloid, we have:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$
Substituting these in the above integral:

$\ds T_1 = \int_0^{\theta_1} \sqrt {\dfrac {2 a^2 \paren {1 - \cos \theta} } {2 a g \paren {1 - \cos \theta} } } \rd \theta = \theta_1 \sqrt {\dfrac a g}$
This is the time needed for the bead to reach the bottom when released when $\theta_1 = \pi$, and so:

$T_1 = \pi \sqrt {\dfrac a g}$

Now suppose the bead is released at any intermediate point $\tuple {x_0, y_0}$.
Take equation $(1)$ and replace it with:

$v = \dfrac {\d s} {\d t} = \sqrt {2 g \paren {y - y_0} }$
Thus the total time to reach the bottom is:














\(\ds T\)

\(=\)







\(\ds \int_{\theta_0}^\pi \sqrt {\dfrac {2 a^2 \paren {1 - \cos \theta} } {2 a g \paren {\cos \theta_0 - \cos \theta} } } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac a g} \int_{\theta_0}^\pi \sqrt {\dfrac {1 - \cos \theta} {\cos \theta_0 - \cos \theta} } \rd \theta\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac a g} \int_{\theta_0}^\pi \dfrac {\sin \frac 1 2 \theta \rd \theta} {\sqrt {\cos^2 \frac 1 2 \theta_0 - \cos^2 \frac 1 2 \theta} } \rd \theta\)





Half Angle Formula for Cosine and Half Angle Formula for Sine



Setting:

$u = \dfrac {\cos \frac 1 2 \theta} {\cos \frac 1 2 \theta_0}$
and so:

$\d u = -\dfrac 1 2 \dfrac {\sin \frac 1 2 \theta \rd \theta} {\cos \frac 1 2 \theta_0}$
Then $(2)$ becomes:














\(\ds T\)

\(=\)







\(\ds -2 \sqrt {\dfrac a g} \int_1^0 \frac {\d u} {\sqrt {1 - u^2} }\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac a g} \Big [{\arcsin u}\Big]_0^1\)




















\(\ds \)

\(=\)







\(\ds \pi \sqrt {\dfrac a g}\)









That is, wherever the bead is released from, it takes that same time to reach the bottom.
Hence the result.
$\blacksquare$


Also known as
The result Cycloid has Tautochrone Property can be seen referred to as the pendulum property of the cycloid.


Also see
Tautochrone Problem
Brachistochrone is Cycloid, in which it is shown that a cycloid is also the shape for which the time is shortest.


Historical Note
The fact that Cycloid has Tautochrone Property was discovered by Christiaan Huygens in $1658$, during his work on developing a reliable and accurate pendulum clock.
The Tautochrone Problem was also solved independently by Niels Henrik Abel in $1823$, using the technique now known as Abel's integral equation.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{V}$: "Greatness and Misery of Man"
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VIII}$: Nature or Nurture?
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $4$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.17$: Huygens ($\text {1629}$ – $\text {1695}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): cycloid
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): cycloid




