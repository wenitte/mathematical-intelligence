# 

Source: https://proofwiki.org/wiki/Position_of_Cart_attached_to_Wall_by_Spring_under_Damping/Underdamped/x_%3D_x0_at_t_%3D_0



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
Let $b < a$.

Let $C$ be pulled aside to $x = x_0$ and released from stationary at time $t = 0$.
Then the horizontal position of $C$ at time $t$ can be expressed as:

$x = \dfrac {x_0} \alpha e^{-b t} \left({\alpha \cos \alpha t + b \sin \alpha t}\right)$
where $\alpha = \sqrt {a^2 - b^2}$.

Such a system is defined as being underdamped.





Proof
From Position of Cart attached to Wall by Spring under Damping: Underdamped:

$(2): \quad x = e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t}$
where $C_1$ and $C_2$ depend upon the conditions of $C$ at time $t = 0$.
It remains to evaluate $C_1$ and $C_2$ under the given conditions.

Differentiating $(1)$ with respect to $t$ gives:

$(2): \quad x' = -b e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t} + e^{-b t} \paren {-\alpha C_1 \sin \alpha t + \alpha C_2 \cos \alpha t}$

Setting the initial condition $x = x_0$ when $t = 0$ in $(1)$:














\(\ds x_0\)

\(=\)







\(\ds e^0 \paren {C_1 \cos 0 + C_2 \sin 0}\)




















\(\ds \)

\(=\)







\(\ds C_1\)










Setting the initial condition $x' = 0$ when $t = 0$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds -b e^0 \paren {C_1 \cos 0 + C_2 \sin 0} + e^0 \paren {-\alpha C_1 \sin 0 + \alpha C_2 \cos 0}\)




















\(\ds \)

\(=\)







\(\ds -b C_1 + \alpha C_2\)














\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds \frac {b C_1} \alpha\)




















\(\ds \)

\(=\)







\(\ds \frac {b x_0} \alpha\)










Hence:














\(\ds x\)

\(=\)







\(\ds e^{-b t} \paren {x_0 \cos \alpha t + \frac {b x_0} \alpha \sin \alpha t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0} \alpha e^{-b t} \paren {\alpha \cos \alpha t + b \sin \alpha t}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(19)$




