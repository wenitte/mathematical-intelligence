# 

Source: https://proofwiki.org/wiki/Propagation_of_Light_in_Inhomogeneous_Medium

Theorem
Let $v: \R^3 \to \R$ be a real function.
Let $M$ be a 3-dimensional Euclidean space.
Let $\gamma:t \in \R \to M$ be a smooth curve embedded in $M$, where $t$ is time.
Denote its derivative with respect to time by $v$.
Suppose $M$ is filled with an optically inhomogeneous medium such that at each point speed of light is $v = \map v {x, y, z}$
Suppose $\map y x$ and $\map z x$ are real functions.
Let the light move according to Fermat's principle.

Then equations of motion have the following form:

$\dfrac {\partial v} {\partial y} \dfrac {\sqrt {1 + y'^2 + z'^2} } {v^2} + \dfrac \d {\d x} \dfrac {y'} {v \sqrt {1 + y'^2 + z'^2} } = 0$
$\dfrac {\partial v} {\partial z} \dfrac {\sqrt {1 + y'^2 + z'^2} } {v^2} + \dfrac \d {\d x} \dfrac {z'} {v \sqrt {1 + y'^2 + z'^2} } = 0$


Proof
By assumption, $\map y x$ and $\map z x$ are real functions.
This allows us to $x$ instead of $t$ to parameterize the curve.
This reduces the number of equations of motion to $2$, that is: $\map y x$ and $\map z x$.
The time it takes to traverse the curve $\gamma$ equals:














\(\ds T\)

\(=\)







\(\ds \int_{t_a}^{t_b} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{s_a}^{s_b} \dfrac {\d t} {\d s} \rd s\)





Chain Rule for Derivatives, $\d s$ - arc length element














\(\ds \)

\(=\)







\(\ds \int_a^b \dfrac 1 v \frac {\d s} {\d x} \rd x\)





Chain Rule for Derivatives, $v = \dfrac {\d s} {\d t}$














\(\ds \)

\(=\)







\(\ds \int_a^b \frac {\sqrt{1 + y'^2 + z'^2} } {\map v {x, y, z} } \rd x\)





Definition of Arc Length in 3-dimensional Euclidean space



According to Fermat's principle, light travels along the trajectory of least time.
Therefore, this integral has to be minimized with respect to $\map y x$ and $\map z x$.
It holds that:

$\dfrac \partial {\partial y} \dfrac {\sqrt {1 + x'^2 + y'^2} } {\map v {x, y, z} } = -\dfrac {\sqrt {1 + x'^2 + y'^2} } {\map {v^2} {x, y, z} } \dfrac {\partial v} {\partial y}$
Also:

$\dfrac \d {\d x} \dfrac \partial {\partial y'} \dfrac {\sqrt{1 + x'^2 + y'^2} } {\map v {x, y, z} } = \dfrac \d {\d x} \dfrac {y'} {v \sqrt {1 + x'^2 + y'^2} }$
Analogous relations hold for $\map z x$.
Then, by Euler's Equations and multiplication by $-1$, the desired result follows.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.9$: The Fixed End Point Problem for n Unknown Functions




