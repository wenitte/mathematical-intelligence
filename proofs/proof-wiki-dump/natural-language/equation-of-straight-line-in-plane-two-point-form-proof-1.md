# 

Source: https://proofwiki.org/wiki/Equation_of_Straight_Line_in_Plane/Two-Point_Form/Proof_1

Theorem
Let $P_1 := \tuple {x_1, y_1}$ and $P_2 := \tuple {x_2, y_2}$ be points in a cartesian plane.
Let $\LL$ be the straight line passing through $P_1$ and $P_2$.

Then $\LL$ can be described by the equation:

$\dfrac {y - y_1} {x - x_1} = \dfrac {y_2 - y_1} {x_2 - x_1}$
or:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$
This is known as the two-point form.


Proof
From the slope-intercept form of the equation of the straight line:

$(1): \quad y = m x + c$
which is to be satisfied by both $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$.

We express $m$ and $c$ in terms of $\paren {x_1, y_1}$ and $\paren {x_2, y_2}$:














\(\ds y_1\)

\(=\)







\(\ds m x_1 + c\)




















\(\ds y_2\)

\(=\)







\(\ds m x_2 + c\)














\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds y_1 - m x_1\)














\(\ds \leadsto \ \ \)





\(\ds y_2\)

\(=\)







\(\ds m x_2 + y_1 - m x_1\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)
























\(\ds y_1\)

\(=\)







\(\ds m x_1 + c\)




















\(\ds y_2\)

\(=\)







\(\ds m x_2 + c\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {y_2 - c} {x_2}\)














\(\ds \leadsto \ \ \)





\(\ds y_1\)

\(=\)







\(\ds \dfrac {y_2 - c} {x_2} x_1 + c\)














\(\ds \leadsto \ \ \)





\(\ds y_1 x_2\)

\(=\)







\(\ds x_1 y_2  + c \paren {x_2 - x_1}\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds \dfrac {y_1 x_2 - x_1 y_2} {x_2 - x_1}\)










Substituting for $m$ and $c$ in $(1)$:














\(\ds y\)

\(=\)







\(\ds m x + c\)





which is $(1)$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1} x + \dfrac {y_1 x_2 - x_1 y_2} {x_2 - x_1}\)





from $(2)$ and $(3)$








\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} + x_1 y_2\)

\(=\)







\(\ds x \paren {y_2 - y_1} + y_1 x_2\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} + x_1 y_2 - y_1 x_1\)

\(=\)







\(\ds x \paren {y_2 - y_1} + y_1 x_2 - x_1 y_1\)





adding $y_1 x_1 = x_1 y_1$ to both sides








\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} - y_1 \paren {x_2 - x_1}\)

\(=\)







\(\ds x \paren {y_2 - y_1} - x_1 \paren {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y - y_1} \paren {x_2 - x_1}\)

\(=\)







\(\ds \paren {x - x_1} \paren {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y - y_1} {x - x_1}\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - x_1} {x_2 - x_1}\)

\(=\)







\(\ds \dfrac {y - y_1} {y_2 - y_1}\)









$\blacksquare$





