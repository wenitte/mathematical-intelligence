# 

Source: https://proofwiki.org/wiki/Euler%27s_Equation_for_Vanishing_Variation_is_Invariant_under_Coordinate_Transformations


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Euler's Equation for Vanishing Variation is invariant under coordinate transformations.


Proof
Let $J \sqbrk y$ be an integral functional:

$\ds J \sqbrk y = \int_a^b \map F {x, y, y'} \rd x$
Suppose, we introduce new curvilinear coordinates $u,v$ such that:

$x = \map x {u, v}$
$y = \map y {u, v}$
such that:

$\begin{vmatrix}
\map {\dfrac {\partial x} {\partial u} } {u, v} & \map {\dfrac {\partial x} {\partial v} } {u, v} \\
\map {\dfrac {\partial y} {\partial u} } {u, v} & \map {\dfrac {\partial y} {\partial v} } {u, v}
\end{vmatrix} \ne 0$
After this transformation, a curve $y = \map y x$ in coordinates $\tuple {x, y}$ will be described by an equation $v = \map v u$ in coordinates $\tuple {u, v}$.
Let $\mathscr J \sqbrk v$ be a functional defined according to the following chain of operations:














\(\ds J \sqbrk y\)

\(=\)







\(\ds \int_{x \mathop = a}^{x \mathop = b}\map F {x, y, y'} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{u \mathop = \alpha}^{u \mathop = \beta} \map F {\map x {u, v}, \map y {u, v}, \frac {\d y} {\d x} } \paren {\frac {\partial x} {\partial u} \rd u + \frac {\partial x} {\partial v} \frac {\d v} {\d u} \rd u}\)




















\(\ds \)

\(=\)







\(\ds \int_{u \mathop = \alpha}^{u \mathop = \beta} \map F {\map x {u, v}, \map y {u, v}, \frac {\frac {\partial y} {\partial u} \rd u + \frac {\partial y} {\partial v} \frac {\d v} {\d u} \rd u} {\frac {\partial x} {\partial u} \rd u + \frac {\partial x} {\partial v} \frac {\d v} {\d u} \rd u} } \paren {x_u + x_v v'} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_{u \mathop = \alpha}^{u \mathop = \beta} \map F {\map x {u, v}, \map y {u, v}, \frac {y_u + y_v v'} {x_u + y_v v'} } \paren {x_u + x_v v'} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_{u \mathop = \alpha}^{u \mathop = \beta} \map {\mathscr F} {u, v, v'} \rd u\)




















\(\ds \)

\(=\)







\(\ds \mathscr J \sqbrk v\)









Now, consider the method of finite differences like it is used here.
For functional $J \sqbrk y$ we have the area $\Delta \sigma$ bounded by functions $\map y x$ and $\map y x + \map h x$.
Likewise, for functional $\mathscr J \sqbrk v$ we have area $\Delta \Sigma$ bounded by functions $\map v u$ and $\map v u + \map \eta u$.
Note that as it was able to construct $\map v u$ from $\map y x$, same can be done for $\map \eta u$ starting with $\map h x$.
As both areas approach zero, they become differential surface elements, which are related by corresponding Jacobian determinant of coordinate transformations:
$\d \sigma = \begin{vmatrix}
x_u & x_v \\
y_u & y_v
\end{vmatrix} \rd \Sigma$
The last thing to be shown is that variational derivative vanishes in new coordinates.
By definition, it has to satisfy
$\ds \lim_{\Delta \sigma \mathop \to 0} \frac {\Delta J \sqbrk {y; h} } {\Delta \sigma} = 0$
Since $J\sqbrk y = \mathscr J \sqbrk v$ with respect to a specific set of coordinates, we have














\(\ds \lim_{\Delta \sigma \mathop \to 0} \frac {\Delta J \sqbrk {y; h} } {\Delta \sigma}\)

\(=\)







\(\ds \lim_{\Delta \Sigma \mathop \to 0} \frac {\Delta \mathscr J \sqbrk {v; \eta} } {\ds \begin {vmatrix}
x_u & x_v \\
y_u & y_v

\end {vmatrix} \Delta \Sigma}\)





















\(\ds \)

\(=\)







\(\ds \begin{vmatrix}
x_u & x_v \\
y_u & y_v

\end {vmatrix}^{-1} \lim_{\Delta \Sigma \mathop \to 0} \frac {\Delta \mathscr J \sqbrk {v; \eta} } {\Delta \Sigma}\)










We see that, if Jacobian determinant is nonvanishing, the condition of vanishing variational derivative is the same.
The equivalence of Euler's equation in both sets of coordinates is the result of same method of finite differences being used in each case.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Improve and explain whenever chain rule of partial derivatives and differentials are being used; think of how to discretize Jacobian to avoid using Jacobian determinant together with finite areasYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.8$: Invariance of Euler's Equation




