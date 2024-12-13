# 

Source: https://proofwiki.org/wiki/Position_of_Underdamped_Cart_attached_to_Wall_by_Spring_under_Forced_Vibration



Theorem
Problem Definition

Consider a cart $C$ of mass $m$ attached to a wall by means of a spring $S$.
Let $C$ be free to move along a straight line in a medium which applies a damping force $\mathbf F_d$ whose magnitude is proportional to the speed of $C$.
Let the force constant of $S$ be $k$.
Let the constant of proportion of the damping force $\mathbf F_d$ be $c$.
Let there be applied to $C$ an external force which varies as a function of time as:

$\mathbf F_e = \mathbf F_0 \cos \omega t$
where $\mathbf F_0$ is constant.
Let the displacement of $C$ at time $t$ from the equilibrium position be $\mathbf x$.

Then the horizontal position of $C$ at time $t$ can be expressed as:

$\mathbf x = e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t} + \dfrac {\mathbf F_0} {\sqrt {\paren {k^2 - \omega^2 m^2}^2 + \omega^2 c^2} } \map \cos {\omega t - \phi}$
where:

$C_1$ and $C_2$ depend upon the conditions of $C$ at time $t = 0$
$\alpha = \sqrt {\dfrac k m - \dfrac {c^2} {4 m^2} }$
$\phi = \map \arctan {\dfrac {\omega c} {k - \omega^2 m} }$


Proof
From Forced Vibration of Cart attached to Wall by Spring, the motion of $C$ is described by the second order ODE:

$(1): \quad m \dfrac {\d^2 \mathbf x} {\d t^2} + c \dfrac {\d \mathbf x} {\d t} + k \mathbf x = \mathbf F_0 \cos \omega t$
Setting:

$a^2 = \dfrac k m$
$2 b = \dfrac c m$
this can be written as:

$(2): \quad \dfrac {\d^2 \mathbf x} {\d t^2} + 2 b \dfrac {\d \mathbf x} {\d t} + a^2 \mathbf x = \dfrac {\mathbf F_0} m \cos \omega t$

We are given that $C$ is underdamped, and so $b < a$.
From Linear Second Order ODE: $y + 2 b y' + a^2 y = K \cos \omega x$ for $b < a$, $(2)$ has the general solution:

$\mathbf x = e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t} + \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega t - \phi}$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\phi = \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }$

Substituting back:

$a^2 = \dfrac k m$
$2 b = \dfrac c m$
$K = \dfrac {\mathbf F_0} m$
we obtain:














\(\ds \)

\(\)







\(\ds \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega t - \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf F_0} m \frac 1 {\sqrt {\paren {\dfrac c m}^2 \omega^2 + \paren {\dfrac k m - \omega^2}^2} } \map \cos {\omega t - \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf F_0} m \frac 1 {\sqrt {\dfrac 1 {m^2} c^2 \omega^2 + \dfrac 1 {m^2} \paren {k - \omega^2 m}^2} } \map \cos {\omega t - \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf F_0} m \frac 1 {\dfrac 1 m \sqrt {c^2 \omega^2 + \paren {k - \omega^2 m}^2} } \map \cos {\omega t - \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf F_0} {\sqrt {c^2 \omega^2 + \paren {k - \omega^2 m}^2} } \map \cos {\omega t - \phi}\)









and:














\(\ds \phi\)

\(=\)







\(\ds \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac {\dfrac c m \omega} {\dfrac k m - \omega^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac {\omega c} {k - \omega^2 m} }\)





multiplying top and bottom by $m$



and:














\(\ds \alpha\)

\(=\)







\(\ds \sqrt {a^2 - b^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac k m - \paren {\dfrac c {2 m} }^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac k m - \dfrac {c^2} {4 m^2} }\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(28)$




