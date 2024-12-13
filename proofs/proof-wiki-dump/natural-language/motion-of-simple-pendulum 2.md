# 

Source: https://proofwiki.org/wiki/Motion_of_Simple_Pendulum



Theorem
Consider a simple pendulum consisting of a bob whose mass is $m$, at the end of a rod of negligible mass of length $a$.
Let the bob be pulled to one side so that the rod is at an angle $\alpha$ from the vertical and then released.
Let $T$ be the time period of the simple pendulum, that is, the time through which the bob takes to travel from one end of its path to the other, and back again.
Then:

$T = 4 \sqrt {\dfrac a g} \map K k$
where:

$k = \map \sin {\dfrac \alpha 2}$
$\map K k$ is the complete elliptic integral of the first kind.


Proof
At a time $t$, let:

the rod be at an angle $\theta$ to the vertical
the bob be travelling at a speed $v$
the displacement of the bob from where it is when the rod is vertical, along its line of travel, be $s$.

At its maximum displacement, the speed of the bob is $0$, so its kinetic energy is $0$.
By the Principle of Conservation of Energy:

$\dfrac 1 2 m v^2 = m g \paren {a \cos \theta - a \cos \alpha}$

We have that:

$s = a \theta$
$v = \dfrac {\d s} {\d t} = a \dfrac {\d \theta} {\d t}$
The rate of change of $s$ at time $t$ is the speed of the bob.
So:














\(\ds v\)

\(=\)







\(\ds \frac {\d s} {\d t} = a \frac {\d \theta} {\d t}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {a^2} 2 \paren {\frac {\d \theta} {\d t} }^2\)

\(=\)







\(\ds g a \paren {a \cos \theta - a \cos \alpha}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d \theta} {\d t}\)

\(=\)







\(\ds -\sqrt {\frac {2 g \paren {\cos \theta - \cos \alpha} } a}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d t} {\d \theta}\)

\(=\)







\(\ds -\sqrt {\frac a {2 g \paren {\cos \theta - \cos \alpha} } }\)














\(\ds \leadsto \ \ \)





\(\ds \frac T 4\)

\(=\)







\(\ds -\sqrt {\frac a {2 g} } \int_\alpha^0 \frac {\d \theta} {\sqrt {\cos \theta - \cos \alpha} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac a {2 g} } \int_0^\alpha \frac {\d \theta} {\sqrt {\cos \theta - \cos \alpha} }\)









Substituting:

$\cos \theta = 1 - 2 \sin^2 \dfrac \theta 2$
$\cos \alpha = 1 - 2 \sin^2 \dfrac \alpha 2$
we get:

$\ds T = 2 \sqrt {\frac a g} \int_0^\alpha {\frac {\d \theta} {\sqrt {1 - 2 \sin^2 \frac \theta 2 - 1 + 2 \sin^2 \frac \alpha 2} } } = 2 \sqrt {\frac a g} \int_0^\alpha {\frac {\d \theta} {\sqrt {\sin^2 \frac \alpha 2 - \sin^2 \frac \theta 2} } }$

We now put $k = \sin \dfrac \alpha 2$:

$\ds T = 2 \sqrt {\frac a g} \int_0^\alpha {\frac {\d \theta} {\sqrt {k^2 - \sin^2 \frac \theta 2} } }$

Next, let us introduce the variable $\phi$, such that:

$\sin \dfrac \theta 2 = k \sin \phi$
and where $\phi$ goes from $0 \to \pi / 2$ as $\theta$ goes from $0 \to \alpha$.

Differentiating with respect to $\phi$ we have:

$\dfrac 1 2 \cos \dfrac \theta 2 \dfrac {\d \theta} {\d {\phi}} = k \cos \phi$

Thus:














\(\ds \d \theta\)

\(=\)







\(\ds \frac {2 k \cos \phi} {\cos \frac \theta 2} \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \frac {2 k \sqrt {1 - \sin^2 \phi} } {\sqrt {1 - \sin^2 \frac \theta 2} } \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {k^2 - \sin^2 \frac \theta 2} } {\sqrt {1 - k^2 \sin^2 \phi} } \rd \phi\)










Then:














\(\ds T\)

\(=\)







\(\ds 2 \sqrt {\frac a g} \int_0^{\pi / 2} \frac {2 \sqrt {k^2 - \sin^2 \frac \theta 2} } {\sqrt {1 - k^2 \sin^2 \phi} } \frac {\d \phi} {\sqrt {k^2 - \sin^2 \frac \theta 2} }\)




















\(\ds \)

\(=\)







\(\ds 4 \sqrt {\frac a g} \int_0^{\pi / 2} \frac {\d \phi} {\sqrt {1 - k^2 \sin^2 \phi} }\)










The integral:

$\ds \int_0^{\pi / 2} {\frac {\d \phi} {\sqrt {1 - k^2 \sin^2 \phi} } }$
is the complete elliptic integral of the first kind and is a function of $k$, defined on the interval $0 < k < 1$.
Hence the result.
$\blacksquare$


Also see
Approximate Motion of Simple Pendulum


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 5$: Falling Bodies and Other Rate Problems
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): elliptic integral
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $9$: Patterns in Nature: Differential equations




