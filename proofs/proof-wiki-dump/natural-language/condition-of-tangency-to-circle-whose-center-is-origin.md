# 

Source: https://proofwiki.org/wiki/Condition_of_Tangency_to_Circle_whose_Center_is_Origin

Theorem
Let $\CC$ be a circle embedded in the Cartesian plane of radius $r$ with its center located at the origin.
Let $\LL$ be a straight line in the plane of $\CC$ whose equation is given by:

$(1): \quad l x + m y + n = 0$
such that $l \ne 0$.

Then $\LL$ is tangent to $\CC$ if and only if:

$\paren {l^2 + m^2} r^2 = n^2$


Proof
From Equation of Circle center Origin, $\CC$ can be described as:

$(2): \quad x^2 + y^2 = r^2$

Let $\LL$ intersect with $\CC$.
To find where this happens, we find $x$ and $y$ which satisfy both $(1)$ and $(2)$.
So:




\(\text {(1)}: \quad\)









\(\ds l x + m y + n\)

\(=\)







\(\ds 0\)





Equation for $\LL$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\dfrac {m y} l - \dfrac n l\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \paren {-\dfrac {m y} l - \dfrac n l}^2 + y^2\)

\(=\)







\(\ds r^2\)





substituting for $x$ in $(2)$








\(\ds \leadsto \ \ \)





\(\ds \paren {-m y - n}^2 + l^2 y^2\)

\(=\)







\(\ds l^2 r^2\)





multiplying by $l^2$








\(\ds \leadsto \ \ \)





\(\ds m^2 y^2 + 2 m n y + n^2 + l^2 y^2\)

\(=\)







\(\ds l^2 r^2\)





multiplying out




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {l^2 + m^2} y^2 + 2 m n y + \paren {n^2 - l^2 r^2}\)

\(=\)







\(\ds 0\)





rearranging



This is a quadratic in $y$.
This corresponds to the two points of intersection of $\LL$ with $\CC$.

When $\LL$ is tangent to $\CC$, these two points coincide.
Hence $(3)$ has equal roots.
From Solution to Quadratic Equation, this happens when the discriminant of $(3)$ is zero.
That is:














\(\ds m^2 n^2\)

\(=\)







\(\ds \paren {l^2 + m^2} \paren {n^2 - l^2 r^2}\)














\(\ds \leadsto \ \ \)





\(\ds l^2 n^2 - l^2 m^2 r^2 - l^4 r^2\)

\(=\)







\(\ds 0\)





multiplying out and simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {l^2 + m^2} r^2\)

\(=\)







\(\ds n^2\)





as $l^2 \ne 0$



$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {III}$. The Circle: $13$. Condition that a straight line should touch a given circle




