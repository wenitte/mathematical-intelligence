# 

Source: https://proofwiki.org/wiki/Brachistochrone_is_Cycloid/Proof_2



Theorem
The shape of the brachistochrone is a cycloid.



This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Proof
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


Historical Note
The Brachistochrone Problem was raised by Johann Bernoulli to the readers of Acta Eruditorum in June $1696$.
Isaac Newton interpreted the problem as a direct challenge to his abilities, and (despite being out of practice) solved the problem in the evening before going to bed.
He published it anonymously, but Bernoulli could tell whose solution it was, and commented:

I recognise the lion by his print.
Bernoulli published the solution in the Acta Eruditorum in May $1697$, along with solutions by Jacob Bernoulli and Gottfried Wilhelm von Leibniz.

With justice we admire Huygens because he first discovered that a heavy particle slides down to the bottom of a cycloid in the same time, no matter where it starts. But you will be petrified with astonishment when I say that this very same cycloid, the tautochrone of Huygens, is also the brachistochrone we are seeking.
-- Johann Bernoulli


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.6$: A Simple Variable End Point Problem




