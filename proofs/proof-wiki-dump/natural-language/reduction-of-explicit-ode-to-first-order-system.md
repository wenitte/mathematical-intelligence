# 

Source: https://proofwiki.org/wiki/Reduction_of_Explicit_ODE_to_First_Order_System



Theorem
Let $\map {x^{\paren n} } t = \map F {t, x, x', \ldots, x^{\paren {n - 1} } }$, $\map x {t_0} = x_0$ be an explicit ODE with $x \in \R^m$.
Let there exist $I \subseteq \R$ such that there exists a unique particular solution:

$x: I \to \R^m$
to this ODE.
Then there exists a system of first order ODEs:

$y' = \map {\tilde F} {t, y}$
with $y = \tuple {y_1, \ldots, y_{m n} }^T \in \R^{m n}$ such that:

$\tuple {\map {y_1} t, \ldots, \map {y_m} t} = \map x t$
for all $t \in I$ and $\map y {t_0} = x_0$.


Proof
Define the mappings:

$z_1, \ldots, z_n: I \to \R^m$
by:

$z_j = x^{\paren {j - 1} }$, $j = 1, \ldots, n$
Then:














\(\ds z_1'\)

\(=\)







\(\ds z_2\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds z_{n - 1}'\)

\(=\)







\(\ds z_n\)




















\(\ds z_n'\)

\(=\)







\(\ds \map F {t, z_1, \ldots, z_n}\)









This is a system of $m n$ first order ODEs.
By construction:

$\map {z_1} t = \map x t$
for all $t \in I$ and $\map {z_1} {t_0} = x_0$.
Therefore we can take:

$y = \begin {pmatrix} z_1 \\ \vdots \\ z_{n - 1} \\ z_n \end {pmatrix}, \quad \tilde F: \begin {pmatrix} z_1 \\ \vdots \\ z_n \end{pmatrix} \mapsto \begin {pmatrix} z_2 \\ \vdots \\ z_n \\ \map F {t, z_1, \ldots, z_n} \end {pmatrix}$
$\blacksquare$


Historical Note
The technique of Reduction of Explicit ODE to First Order System was invented by Leonhard Paul Euler.


Sources
1926: E.L. Ince: Ordinary Differential Equations ... (previous) ... (next): Chapter $\text I$: Introductory: $\S 1.2$ Genesis of an Ordinary Differential Equation




