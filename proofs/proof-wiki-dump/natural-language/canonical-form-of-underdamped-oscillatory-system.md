# 

Source: https://proofwiki.org/wiki/Canonical_Form_of_Underdamped_Oscillatory_System



Theorem
Consider a physical system $S$ whose behaviour can be described with the second order ODE in the form:

$(1): \quad \dfrac {\d^2 x} {\d t^2} + 2 b \dfrac {\d x} {\d t} + a^2 x = 0$
for $a, b \in \R_{>0}$.
Let $b < a$, so as to make $S$ underdamped.

Then the value of $x$ can be expressed in the form:

$x = \dfrac {x_0 a} \alpha e^{-b t} \map \cos {\alpha t - \theta}$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\theta = \map \arctan {\dfrac b \alpha}$

This can be referred to as the canonical form of the solution of $(1)$.


Proof
From Solution of Constant Coefficient Homogeneous LSOODE: Complex Roots of Auxiliary Equation, the general solution of $(1)$ is:

$x = e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t}$
where:

$\alpha = \sqrt {a^2 - b^2}$
This is a homogeneous linear second order ODE with constant coefficients.

Let $m_1$ and $m_2$ be the roots of the auxiliary equation:

$m^2 + 2 b + a^2 = 0$
From Solution to Quadratic Equation with Real Coefficients:














\(\ds m_1\)

\(=\)







\(\ds -b + i \sqrt {a^2 - b^2}\)




















\(\ds m_1, m_2\)

\(=\)







\(\ds -b - i \sqrt {a^2 - b^2}\)









So from Solution of Constant Coefficient Homogeneous LSOODE: Complex Roots of Auxiliary Equation:

$x = e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t}$
where:

$\alpha = \sqrt {a^2 - b^2}$

The following assumptions are made:

We may label a particular point in time $t = 0$ at which the derivative of $x$ with respect to $t$ is itself zero.
We allow that at this arbitrary $t = 0$, the value of $x$ is assigned the value $x = x_0$.
This corresponds, for example, with a physical system in which the moving body is pulled from its equilibrium position and released from stationary at time zero.

Differentiating $(1)$ with respect to $t$ gives:

$\quad x' = -b e^{-b t} \paren {C_1 \cos \alpha t + C_2 \sin \alpha t} + e^{-b t} \paren {-\alpha C_1 \sin \alpha t + \alpha C_2 \cos \alpha t}$

Setting the initial condition $x = x_0$ when $t = 0$ in $(1)$:














\(\ds x_0\)

\(=\)







\(\ds e^0 \paren {C_1 \cos 0 + C_2 \sin 0}\)




















\(\ds \)

\(=\)







\(\ds C_1\)










Setting the initial condition $x' = 0$ when $t = 0$:














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










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds e^{-b t} \dfrac {x_0} \alpha \paren {\alpha \cos \alpha t + b \sin \alpha t}\)










From Multiple of Sine plus Multiple of Cosine: Cosine Form, $(2)$ can be expressed as:














\(\ds x\)

\(=\)







\(\ds \dfrac {x_0} \alpha e^{-b t} \paren {\sqrt {\alpha^2 + b^2} \map \cos {\alpha t + \arctan \dfrac {-b} \alpha} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0 \sqrt {\sqrt{a^2 - b^2}^2 + b^2} } \alpha e^{-b t} \map \cos {\alpha t + \arctan \dfrac {-b} \alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0 \sqrt {a^2 - b^2 + b^2} } \alpha e^{-b t} \map \cos {\alpha t + \arctan \dfrac {-b} \alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0 a} \alpha e^{-b t} \cos {\alpha t + \arctan \dfrac {-b} \alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_0 a} \alpha e^{-b t} \cos {\alpha t - \arctan \dfrac b \alpha}\)





Tangent Function is Odd














\(\ds \)

\(=\)







\(\ds \dfrac {x_0 a} \alpha e^{-b t} \cos {\alpha t - \theta}\)





where $\theta = \arctan \dfrac b \alpha$



$\blacksquare$


Also presented as
This can also be seen presented as:

$x = \dfrac {x_0 \sqrt {\alpha^2 + b^2} } \alpha e^{-b t} \cos {\alpha t - \theta}$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.20$: Vibrations in Mechanical Systems: $(20)$




