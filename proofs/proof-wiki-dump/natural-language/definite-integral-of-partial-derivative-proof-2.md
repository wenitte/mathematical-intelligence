# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Partial_Derivative/Proof_2

Theorem
Let $\map f {x, y}$ and $\map {\dfrac {\partial f} {\partial x} } {x, y}$ be continuous functions of $x$ and $y$ on $D = \closedint {x_1} {x_2} \times \closedint a b$.
Then:

$\ds \frac \d {\d x} \int_a^b \map f {x, y} \rd y = \int_a^b \map {\frac {\partial f} {\partial x} } {x, y} \rd y$
for $x \in \closedint {x_1} {x_2}$.


Proof
Define $\ds \map G x = \int_a^b \map f {x, y} \rd y$.
The continuity of $f$ ensures that $G$ exists.
Then by linearity of the integral:

$\dfrac {\Delta G} {\Delta x} = \dfrac {\map G {x + \Delta x} - \map G x} {\Delta x} = \ds \int_a^b \frac {\map f {x + \Delta x, y} - \map f {x, y} } {\Delta x} \rd y$
We want to find the limit of this quantity as $\Delta x$ approaches zero.

For each $y \in \closedint a b$, we can consider $\map {f_y} x = \map f {x, y}$ as a separate function of the single variable $x$, with $\dfrac {\d f_y} {\d x} = \dfrac {\partial f} {\partial x}$.
Thus by the Mean Value Theorem, there is a number $c_y \in \openint x {x + \Delta x}$ such that:

$\map {f_y} {x + \Delta x} - \map {f_y} x = \map {\dfrac {\d f_y} {\d x} } {c_y} \Delta x$
That is:

$\map f {x + \Delta x, y} - \map f {x, y} = \map {\dfrac {\partial f} {\partial x} } {c_y, y} \Delta x$
Therefore:

$\dfrac {\Delta G} {\Delta x} = \ds \int_a^b \map {\frac {\partial f} {\partial x} } {c_y, y} \rd y$

Now, pick any $\epsilon > 0$ and set $\epsilon_0 = \dfrac {\epsilon} {b - a}$.
Since $\dfrac {\partial f} {\partial x}$ is continuous on the compact set $D$, it is uniformly continuous on $D$.
Hence for each $x$ and $y$:

$\size {\map {\dfrac {\partial f} {\partial x} } {x + h, y} - \map {\dfrac {\partial f} {\partial x} } {x, y} } < \epsilon_0$
whenever $h$ is sufficiently small.
Since $x < c_y < x + \Delta x$, it follows that for sufficiently small $\Delta x$:

$\size {\map {\dfrac {\partial f} {\partial x} } {c_y, y} - \map {\dfrac {\partial f} {\partial x} } {x, y} } < \epsilon_0$
regardless of our choice of $y$.
So we can say:














\(\ds \size {\lim_{\Delta x \mathop \to 0} \frac {\Delta G} {\Delta x} - \int_a^b \map {\frac {\partial f} {\partial x} } {x, y} \rd y}\)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \size {\int_a^b \map {\frac {\partial f} {\partial x} } {c_y, y} - \frac {\partial f}{\partial x} \rd y}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\Delta x \mathop \to 0} \int_a^b \size {\map {\frac {\partial f} {\partial x} } {c_y, y} - \map {\frac {\partial f} {\partial x} } {x, y} } \rd y\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \epsilon_0 \rd y\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









But since $\epsilon$ was arbitrary, it follows that:

$\ds \lim_{\Delta x \mathop \to 0} \frac {\Delta G} {\Delta x} = \int_a^b \map {\frac {\partial f} {\partial x} } {x, y} \rd y$
and the theorem is proved.
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




