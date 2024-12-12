# 

Source: https://proofwiki.org/wiki/Derivative_of_Sine_Function/Proof_5

Theorem
$\map {\dfrac \d {\d x} } {\sin x} = \cos x$


Proof













\(\ds \map \arcsin x\)

\(=\)







\(\ds \int_0^x \frac {\d x} {\sqrt {1 - x^2} }\)





Arcsine as Integral








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map \d {\map \arcsin y} } {\d y}\)

\(=\)







\(\ds \dfrac {\map \d {\ds \int_0^y \dfrac 1 {\sqrt {1 - y^2} } \rd y} } {\d y}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {1 - y^2} }\)





Corollary to Fundamental Theorem of Calculus: First Part



Note that we get the same answer as Derivative of Arcsine Function.
By definition of real $\arcsin$ function, $\arcsin$ is bijective on its domain $\closedint {-1} 1$.
Thus its inverse is itself a mapping.
From Inverse of Inverse of Bijection, its inverse is the $\sin$ function.














\(\ds \dfrac {\map \d {\sin \theta} } {\d \theta}\)

\(=\)







\(\ds 1 / \dfrac 1 {\sqrt {1 - \sin^2 \theta} }\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \pm \sqrt {1 - \sin^2 \theta}\)





Positive in Quadrant $\text I$ and Quadrant $\text {IV}$, Negative in Quadrant $\text {II}$ and Quadrant $\text {III}$














\(\ds \dfrac {\map \d {\sin \theta} } {\d \theta}\)

\(=\)







\(\ds \cos \theta\)









$\blacksquare$


Sources
robjohn (https://math.stackexchange.com/users/13854/robjohn), How to prove that $\ds \lim \limits_{x \mathop \to 0}\frac {\sin x} x = 1$?, URL (version: 2013-06-19): https://math.stackexchange.com/q/75151




