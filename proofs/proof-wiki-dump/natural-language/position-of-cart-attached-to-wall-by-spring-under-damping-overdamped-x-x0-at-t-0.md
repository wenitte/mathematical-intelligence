# 

Source: https://proofwiki.org/wiki/Position_of_Cart_attached_to_Wall_by_Spring_under_Damping/Overdamped/x_%3D_x0_at_t_%3D_0



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
Let $b > a$.

Let $C$ be pulled aside to $x = x_0$ and released from stationary at time $t = 0$.
Then the horizontal position of $C$ at time $t$ can be expressed as:

$x = \dfrac {x_0} {m_1 - m_2} \paren {m_1 e^{m_2 t} - m_2 e^{m_1 t} }$
where $m_1$ and $m_2$ are the roots of the auxiliary equation $m^2 + 2 b + a^2 = 0$:

$m_1 = -b + \sqrt {b^2 - a^2}$
$m_2 = -b - \sqrt {b^2 - a^2}$

Such a system is defined as being overdamped.


Proof
From Position of Cart attached to Wall by Spring under Damping: Overdamped:

$(1): \quad x = C_1 e^{m_1 t} + C_2 e^{m_2 t}$
where $C_1$ and $C_2$ depend upon the conditions of $C$ at time $t = 0$.
It remains to evaluate $C_1$ and $C_2$ under the given conditions.

Differentiating $(1)$ with respect to $t$ gives:

$(2): \quad x' = C_1 m_1 e^{m_1 t} + C_2 m_2 e^{m_2 t}$

Setting the initial condition $x = x_0$ when $t = 0$ in $(1)$:














\(\ds x_0\)

\(=\)







\(\ds C_1 e^0 + C_2 e^0\)














\(\ds \leadsto \ \ \)





\(\ds x_0\)

\(=\)







\(\ds C_1 + C_2\)










Setting the initial condition $x' = 0$ when $t = 0$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds C_1 m_1 e^0 + C_2 m_2 e^0\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds C_1 m_1 + C_2 m_2\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds C_1 m_1 + \paren {x_0 - C_1} m_2\)














\(\ds \leadsto \ \ \)





\(\ds C_1 \paren {m_1 - m_2}\)

\(=\)







\(\ds -x_0 m_2\)














\(\ds \leadsto \ \ \)





\(\ds C_1 \paren {m_1 - m_2}\)

\(=\)







\(\ds -\dfrac {x_0 m_2} {m_1 - m_2}\)










Then we have:














\(\ds x_0\)

\(=\)







\(\ds C_1 + C_2\)














\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds x_0 - C_1\)




















\(\ds \)

\(=\)







\(\ds x_0 + \dfrac {x_0 m_2} {m_1 - m_2}\)




















\(\ds \)

\(=\)







\(\ds x_0 \paren {1 + \dfrac {m_2} {m_1 - m_2} }\)




















\(\ds \)

\(=\)







\(\ds x_0 \paren {\dfrac {\paren {m_1 - m_2} + m_2} {m_1 - m_2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0 m_1} {m_1 - m_2}\)










Hence:














\(\ds x\)

\(=\)







\(\ds -\dfrac {x_0 m_2} {m_1 - m_2} e^{m_1 t} + \dfrac {x_0 m_1} {m_1 - m_2} e^{m_2 t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0} {m_1 - m_2} \paren {m_1 e^{m_2 t} - m_2 e^{m_1 t} }\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(15)$




