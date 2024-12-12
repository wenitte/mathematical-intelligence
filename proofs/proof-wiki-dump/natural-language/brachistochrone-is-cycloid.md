# 

Source: https://proofwiki.org/wiki/Brachistochrone_is_Cycloid



Theorem
The shape of the brachistochrone is a cycloid.


Proof 1

Recall from the Snell-Descartes Law:

$\dfrac {\sin \alpha_1} {v_1} = \dfrac {\sin \alpha_2} {v_2}$
Here, we invoke a generalization of the Snell-Descartes Law.
This is justified, as we are attempting to demonstrate the curve that takes the smallest time.
Thus we have $\dfrac {\sin \alpha} v = k$, where $k$ is some constant.
By the Principle of Conservation of Energy, the speed of the bead at a particular height is determined by its loss in potential energy in getting there.
Thus, at the point $\tuple {x, y}$, we have:














\(\ds \dfrac 1 2 m v^2\)

\(=\)







\(\ds m g y\)





Principle of Conservation of Energy














\(\ds v^2\)

\(=\)







\(\ds 2 g y\)





multiplying both sides by $\dfrac 2 m$




\(\text {(1)}: \quad\)









\(\ds v\)

\(=\)







\(\ds \sqrt {2 g y}\)





taking the square root of both sides



We have:














\(\ds \sin \alpha\)

\(=\)







\(\ds \cos \beta\)





from the diagram above














\(\ds \)

\(=\)







\(\ds \frac 1 {\sec \beta}\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 + \tan^2 \beta} }\)





Difference of Squares of Secant and Tangent




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 + \paren {y'}^2} }\)





$y' = \tan \beta$ in the diagram above




Combining all the above equations, we get:














\(\ds \frac {\frac 1 {\sqrt {1 + \paren {y'}^2} } } {\sqrt {2 g y} }\)

\(=\)







\(\ds k\)





Putting $(1)$ and $(2)$ into the Snell-Descartes Law








\(\ds \leadsto \ \ \)





\(\ds \frac {\frac 1 {1 + \paren {y'}^2 } } {2 g y }\)

\(=\)







\(\ds k^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {y \paren {1 + \paren {y'}^2} }\)

\(=\)







\(\ds 2 k^2 g\)





multiplying both sides by $2 g$








\(\ds \leadsto \ \ \)





\(\ds y \paren {1 + \paren {y'}^2}\)

\(=\)







\(\ds \frac 1 {2 k^2 g} = c\)





taking the reciprocal of both sides



where $c$ is another (more convenient) constant.
This is the differential equation which defines the brachistochrone.
Now we solve it:














\(\ds y \paren {1 + \paren {y'}^2}\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds 1 + \paren {y'}^2\)

\(=\)







\(\ds \dfrac c y\)





dividing both sides by $y$








\(\ds \leadsto \ \ \)





\(\ds \paren {y'}^2\)

\(=\)







\(\ds \dfrac c y - 1\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {\frac {c - y} y}\)





taking the square root of both sides








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \sqrt {\frac y {c - y} }\)





taking the reciprocal of both sides








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \sqrt {\frac y {c - y} } \rd y\)










Now we introduce a change of variable:
Let $\sqrt {\dfrac y {c - y} } = \tan \phi$
Thus:




\(\text {(4)}: \quad\)









\(\ds \sqrt {\frac y {c - y} }\)

\(=\)







\(\ds \tan \phi\)














\(\ds \leadsto \ \ \)





\(\ds \frac y {c - y}\)

\(=\)







\(\ds \tan^2 \phi\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {c - y} \tan^2 \phi\)





multiplying both sides by $\paren {c - y}$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds c \tan^2 \phi - y \tan^2 \phi\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {1 + \tan^2 \phi}\)

\(=\)







\(\ds c \tan^2 \phi\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {c \tan^2 \phi} {\paren {1 + \tan^2 \phi} }\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {c \tan^2 \phi} {\sec^2 \phi }\)





Difference of Squares of Secant and Tangent




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds c \sin^2 \phi\)





Definition of Real Secant Function




\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d \phi}\)

\(=\)







\(\ds 2 c \sin \phi \cos \phi\)





Derivative of Sine Function, Derivative of Square Function




Also:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {\frac {c - y} y}\)





from $(3)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\tan \phi}\)





from $(3)$ and $(4)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d \phi}\)

\(=\)







\(\ds \frac {\d y} {\d x} \frac {\d x} {\d \phi}\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds 2 c \sin \phi \cos \phi\)





from $(6)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \phi}\)

\(=\)







\(\ds \dfrac {\paren {\frac {\d y} {\d \phi} } } {\paren {\frac {\d y} {\d x} } }\)





rearranging Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac {2 c \sin \phi \cos \phi} {\dfrac 1 {\tan \phi} }\)




















\(\ds \)

\(=\)







\(\ds 2 c \sin^2 \phi\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds c \paren {1 - \cos 2 \phi}\)





Double Angle Formula for Cosine: Corollary $5$




Thus:














\(\ds \frac {\d x} {\d \phi}\)

\(=\)







\(\ds c \paren {1 - \cos 2 \phi}\)














\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int c \paren {1 - \cos 2 \phi} \rd \phi\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac c 2 \paren {2 \phi - \sin 2 \phi} + c_1\)





Primitive of $\cos a x$ and Primitive of Constant



As the curve goes through the origin, we have $x = y = 0$ when $\phi = 0$ and so $c_1 = 0$.

Now we can look again at our expression for $y$:














\(\ds y\)

\(=\)







\(\ds c \sin^2 \phi\)





from $(5)$ above














\(\ds \)

\(=\)







\(\ds \frac c 2 \paren {1 - \cos 2 \phi}\)





Double Angle Formula for Cosine: Corollary $5$




To simplify the constants, we can substitute $a = c / 2$ and $\theta = 2 \phi$, and thus we get:














\(\ds x\)

\(=\)







\(\ds a \paren {\theta - \sin \theta}\)




















\(\ds y\)

\(=\)







\(\ds a \paren {1 - \cos \theta}\)









which are the parametric equations of the cycloid.
$\blacksquare$


Proof 2
Throughout this proof, we use the standard alignment of coordinate axes:

$X$-axis pointing rightwards
$Y$-axis is pointing upwards.
Suppose that the curve passes through the point $\tuple {x, y}$ for some value of variable $t$.
Due to smoothness of the curve, one can define velocity $v$ at a point $\tuple {\map x t, \map y t}$:

$v = \dfrac {\d s} {\d t}$
where $\d s$ is an infinitesimal arc length element.
In Euclidean space the arc length element is:

$\d s = \sqrt {1 + y'^2} \rd x$
Hence:

$v = \sqrt {1 + y'^2} \dfrac {\d x} {\d t}$
Due to the symmetries of Euclidean space, the Principle of Conservation of Energy holds:

$\dfrac {m v^2} 2 + m g y = E$
where $E$ is a constant of motion.
To determine $E$ use the following initial conditions:

$\tuple {\map x 0, \map y 0} = \mathbf 0$
$\tuple {\map {\dfrac {\d x} {\d t} } 0, \map {\dfrac {\d y} {\d t} } 0} = \mathbf 0$
Then it follows that:

$E = 0$
and:

$v = \sqrt {-2 g y}$
Then the total travel time, integrated with respect to $x \in \closedint a b$ is:

$\ds T = \int_a^b \frac {\sqrt {1 + y'^2} } {\sqrt {-2 g y} } \rd x$
Application of Euler's Equation yields:

$\dfrac {\sqrt {1 + y'^2} } {\sqrt {-2 g y} } - y' \dfrac {2 y'} {2 \sqrt {-2 g y} \sqrt {1 + y'^2} } = c$
or

$\sqrt C = \sqrt {-y \paren {1 + y'^2} }$
where 

$C = \dfrac 1 {2 c^2 g}$
and $c$ is a real constant.
The aforementioned differential equation can be rearranged to:

$\dfrac {\d x} {\d y} = \pm \sqrt {\dfrac {-y} {y + C} }$
Since we want to describe a downwards sliding bead, we have:

$\dfrac {\d y} {\d x} \le 0$
and we choose the minus sign.
This differential equation can be solved for $\map x y$ in the following way:














\(\ds x\)

\(=\)







\(\ds -\int \sqrt{\frac {-y} {y + C} } \rd y\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\sqrt {C u - 1} } {u^2} \rd u\)





substituting $u = \dfrac 1 {C + y}$














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {C u - 1 } } u + \frac C 2 \int \dfrac {\d u} {u \sqrt {C u - 1} }\)





Primitive of $\dfrac {\sqrt {a x + b} } {x^2}$














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {C u - 1} } u + \frac C 2 2 \, \map \arctan {C u - 1} + C_1\)





Primitive of $\dfrac 1 {x \sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds -\sqrt {-y \paren {C + y} } + C \, \map \arctan {\frac {-y} {C + y} } + C_1\)









From the initial condition $\tuple {\map x 0, \map y 0} = \mathbf 0$ it follows that:

$C_1 = 0$
To bring the solution to parametric form, introduce the following parametric dependence:

$\sqrt {\dfrac {-y} {C + y} } = \tan \theta$
which can be solved for $y$:














\(\ds \sqrt {\frac {-y} {C + y} }\)

\(=\)







\(\ds \tan \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {-y} {C + y}\)

\(=\)







\(\ds \tan^2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds - 1 - \frac C y\)

\(=\)







\(\ds \frac 1 {\tan^2 \theta}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -C \sin^2 \theta\)




















\(\ds \)

\(=\)







\(\ds -\frac C 2 \paren {1 - \map \cos {2 \theta} }\)





Square of Sine








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds -\frac C 2 \paren {1 - \map \cos \phi}\)





Introduce a new parameter $\phi = 2 \theta$



Substitution into the expression for $x$ results in:














\(\ds x\)

\(=\)







\(\ds C \paren {\theta - \frac {\map \sin {2 \theta} } 2 }\)




















\(\ds \)

\(=\)







\(\ds C \paren {\frac \phi 2 - \frac {\sin \phi} 2}\)





Introduce a new parameter $\phi = 2 \theta$














\(\ds \)

\(=\)







\(\ds \frac C 2 \paren {\phi - {\sin \phi} }\)









To determine $C$ we use the boundary condition for the final point:

$\intlimits {\dfrac {\d y} {\d x} } {x = b} {} = 0$
For parametric equations we can rewrite this as:

$\dfrac {\d y} {\d x} = \dfrac {\d y} {\d \phi} \paren {\dfrac {\d x} {\d \phi} }^{-1}$
We need to find to which $\phi$ the point $x = b$ corresponds.
Notice that:

$\paren {\dfrac {\d y} {\d \phi} = 0 \land \dfrac {\d x} {\d \phi} \ne 0} \implies \paren {\dfrac {\d y} {\d x} = 0}$
Therefore:

$\dfrac {\d y} {\d \phi} = -\dfrac C 2 \map \sin \phi$
and this derivative vanishes if:

$\phi = \pi n, n \in \Z$
Similarly:

$\dfrac {\d x} {\d \phi} = \dfrac C 2 \paren {\map \cos \phi - 1}$
which vanishes if:

$\phi = 2 \pi n, n \in \Z$
By comparing both conditions on $\phi$ we limit the set of solutions to $\phi = \pi + 2 \pi n, n \in \Z$.
We choose the nearest appropriate value corresponding to $x = b > 0$.
Then substitution into the expression for $x$ results in:

$b = \dfrac C 2 \pi$
Finally, the parametric form of this curve is described by such a parametric solution:

$x = \dfrac b \pi \paren {\phi - {\sin \phi} }$
$y = -\dfrac b \pi \paren {1 - \map \cos \phi}$
This is the form of a cycloid as portrayed upside down.
$\blacksquare$


Also see
Cycloid has Tautochrone Property, in which it is shown that a cycloid is also the shape for which it takes the same time for the bead to reach the bottom from wherever it is released.


Historical Note
The Brachistochrone Problem was raised by Johann Bernoulli to the readers of Acta Eruditorum in June $1696$.
Isaac Newton interpreted the problem as a direct challenge to his abilities, and (despite being out of practice) solved the problem in the evening before going to bed.
He published it anonymously, but Bernoulli could tell whose solution it was, and commented:

I recognise the lion by his print.
Bernoulli published the solution in the Acta Eruditorum in May $1697$, along with solutions by Jacob Bernoulli and Gottfried Wilhelm von Leibniz.

With justice we admire Huygens because he first discovered that a heavy particle slides down to the bottom of a cycloid in the same time, no matter where it starts. But you will be petrified with astonishment when I say that this very same cycloid, the tautochrone of Huygens, is also the brachistochrone we are seeking.
-- Johann Bernoulli


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): brachistochrone
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): brachistochrone
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): brachistochrone




