# 

Source: https://proofwiki.org/wiki/Fixed_Point_Formulation_of_Explicit_ODE

Theorem
Let $x' = \map f {t, x}$ with $\map x {t_0} = x_0$ be an explicit ODE of dimension $n$.
For $a, b \in \R$, let $\XX = \map {\CC} {\closedint a b; \R^n}$ be the space of continuous functions on the closed interval $\closedint a b$.
Let $T: \XX \to \XX$ be the map defined by:

$\ds \map {\paren {T x} } t = x_0 + \int_{t_0}^t \map f {s, \map x s} \rd s$

This article, or a section of it, needs explaining.In particular: Definition of $\paren {T x}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then a fixed point of $T$ in $\XX$ is a solution to the above ODE.


Proof
Let $\map y t$ be a fixed point of the map $T$.
That is:

$\ds \map y t = x_0 + \int_{t_0}^t \map f {s, \map y s} \rd s$
Then:

$\ds \map y {t_0} = x_0 + \int_{t_0}^{t_0} \map f {s, \map y s} \rd s = x_0$
By the fundamental theorem of calculus we have that $y$ is differentiable, and for $t \in \closedint a b$:














\(\ds \map {y'} t\)

\(=\)







\(\ds \frac {\d} {\d t} \int_{t_0}^t \map f {s, \map y s} \rd s\)





Derivative of Constant














\(\ds \)

\(=\)







\(\ds \map f {t, \map y t}\)





Fundamental Theorem of Calculus



This shows that $y$ is a solution to the ODE as claimed.
$\blacksquare$





