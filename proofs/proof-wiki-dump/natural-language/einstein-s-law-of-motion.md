# 

Source: https://proofwiki.org/wiki/Einstein%27s_Law_of_Motion



Physical Law
The force and acceleration on a body of constant rest mass are related by the equation:

$\mathbf F = \dfrac {m_0 \mathbf a} {\paren {1 - \dfrac {v^2} {c^2} }^{\tfrac 3 2} }$
where:

$\mathbf F$ is the force on the body
$\mathbf a$ is the acceleration induced on the body
$v$ is the magnitude of the velocity of the body
$c$ is the speed of light
$m_0$ is the rest mass of the body.


Proof
Into Newton's Second Law of Motion:

$\mathbf F = \map {\dfrac \d {\d t} } {m \mathbf v}$
we substitute Einstein's Mass-Velocity Equation:

$m = \dfrac {m_0} {\sqrt {1 - \dfrac {v^2} {c^2} } }$
to obtain:

$\mathbf F = \map {\dfrac \d {\d t} } {\dfrac {m_0 \mathbf v} {\sqrt {1 - \dfrac {v^2} {c^2} } } }$

Then we perform the differentiation with respect to time:














\(\ds \map {\frac \d {\d t} } {\frac {\mathbf v} {\sqrt {1 - \dfrac {v^2} {c^2} } } }\)

\(=\)







\(\ds \map {\frac \d {\d v} } {\frac {\mathbf v} {\sqrt {1 - \dfrac {v^2} {c^2} } } } \frac {\d v} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \mathbf a \paren {\frac {\sqrt {1 - \dfrac {v^2} {c^2} } - \dfrac v 2 \dfrac 1 {\sqrt {1 - \dfrac {v^2} {c^2} } } \dfrac{-2 v} {c^2} } {1 - \dfrac {v^2} {c^2} } }\)





Chain Rule for Derivatives, Quotient Rule, etc.














\(\ds \)

\(=\)







\(\ds \mathbf a \paren {\frac {c^2 \paren {1 - \dfrac {v^2} {c^2} } + v^2} {c^2 \paren {1 - \dfrac {v^2} {c^2} }^{3/2} } }\)




















\(\ds \)

\(=\)







\(\ds \mathbf a \paren {\frac 1 {\paren {1 - \dfrac {v^2} {c^2} }^{3/2} } }\)










Thus we arrive at the form:

$\mathbf F = \dfrac {m_0 \mathbf a} {\paren {1 - \dfrac{v^2} {c^2} }^{\tfrac 3 2} }$
$\blacksquare$


Comment
Thus we see that at low velocities (that is, much less than that of light), the well-known equation $\mathbf F = m \mathbf a$ holds to a high degree of accuracy.


Source of Name
This entry was named for Albert Einstein.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.7$: A Simple Approach to $E = M c^2$




