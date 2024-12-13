# 

Source: https://proofwiki.org/wiki/Position_of_Cart_attached_to_Wall_by_Spring_under_Damping



Theorem
Problem Definition

Consider a cart $C$ of mass $m$ attached to a wall by means of a spring $S$.
Let $C$ be free to move along a straight line in a medium which applies a damping force $F_d$ whose magnitude is proportional to the speed of $C$.
Let the force constant of $S$ be $k$.
Let the constant of proportion of the damping force $F_d$ be $c$.
Let the displacement of $C$ at time $t$ from the equilibrium position be $\mathbf x$.

Let:

$a^2 = \dfrac k m$
$2 b = \dfrac c m$

Then the horizontal position of $C$ at time $t$ can be expressed as:

$x = \begin{cases}
C_1 e^{m_1 t} + C_2 e^{m_1 t} & : b > a \\
& \\
C_1 e^{-a t} + C_2 t e^{-a t} & : b = a \\
& \\
e^{-b t} \left({C_1 \cos \alpha t + C_2 \sin \alpha t}\right) & : b < a
\end{cases}$
where:

$C_1$ and $C_2$ depend upon the conditions of $C$ at time $t = 0$
$m_1$ and $m_2$ are the roots of the auxiliary equation $m^2 + 2 b + a^2 = 0$:
$m_1 = -b + \sqrt {b^2 - a^2}$
$m_2 = -b - \sqrt {b^2 - a^2}$
$\alpha = \sqrt {a^2 - b^2}$


Proof
From Motion of Cart attached to Wall by Spring under Damping, the horizontal position of $C$ is given as:

$\dfrac {\d^2 \mathbf x} {\d t^2} + \dfrac c m \dfrac {\d \mathbf x} {\d t} + \dfrac k m \mathbf x = 0$

With the given substitutions $a$ and $b$, this resolves to:

$\dfrac {\d^2 \mathbf x} {\d t^2} + 2 b \dfrac {\d \mathbf x} {\d t} + a^2 \mathbf x = 0$
This is a homogeneous linear second order ODE with constant coefficients.

Recall that $m_1$ and $m_2$ are the roots of the auxiliary equation:

$m^2 + 2 b + a^2 = 0$

By Solution to Quadratic Equation with Real Coefficients:














\(\ds m_1, m_2\)

\(=\)







\(\ds \dfrac {- 2 b \pm \sqrt {\paren {2 b}^2 - 4 a^2} } 2\)




















\(\ds \)

\(=\)







\(\ds -b \pm \sqrt {b^2 - a^2}\)









From the initial problem definition, we have that $k, m, c \in \R_{>0}$.
Hence $a, b \in \R_{>0}$.
Hence the nature of $m_1$ and $m_2$ is dependent upon whether $b > a$, $b = a$ or $b < a$.


Overdamped
When $b > a$, we have $b^2 - a^2 > 0$ and so $m_1$ and $m_2$ are real and distinct.

So from Solution of Constant Coefficient Homogeneous LSOODE: Real Roots of Auxiliary Equation:

$\mathbf x = C_1 e^{m_1 t} + C_2 e^{m_2 t}$
where














\(\ds m_1\)

\(=\)







\(\ds -b + \sqrt {b^2 - a^2}\)




















\(\ds m_2\)

\(=\)







\(\ds -b - \sqrt {b^2 - a^2}\)









$\Box$


Critically Damped
When $b = a$, we have $b^2 - a^2 = 0$ and so:

$m_1 = m_2 = -b = -a$

So from Solution of Constant Coefficient Homogeneous LSOODE: Equal Real Roots of Auxiliary Equation:

$C_1 e^{-a x} + C_2 x e^{-a x}$
$\Box$


Underdamped
When $b < a$, we have $b^2 - a^2 < 0$ and so:














\(\ds m_1\)

\(=\)







\(\ds -b + i \sqrt {a^2 - b^2}\)




















\(\ds m_2\)

\(=\)







\(\ds -b - i \sqrt {a^2 - b^2}\)









So from Solution of Constant Coefficient Homogeneous LSOODE: Complex Roots of Auxiliary Equation:

$\mathbf x = e^{-b t} \left({C_1 \cos \alpha t + C_2 \sin \alpha t}\right)$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems




