# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function/Dependent_on_n_Variables


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf x$ be an $n$-dimensional vector.
Let $\map u {\mathbf x}$ be a real function.
Let $R$ be a fixed region.
Let $J$ be a functional such that

$\ds J \sqbrk u = \idotsint_R \map F {\mathbf x, u, u_{\mathbf x} } \rd x_1 \cdots \rd x_n$

Then a necessary condition for $J \sqbrk u$ to have an extremum (strong or weak) for a given mapping $\map u {\mathbf x}$ is that $\map u {\mathbf x}$ satisfies Euler's equation:

$F_u - \dfrac {\partial} {\partial \mathbf x} F_{u_{\mathbf x} } = 0$


Proof
By definition of increment of the functional:

$\ds J \sqbrk {u + h} - J \sqbrk u = \idotsint_R \paren {F \sqbrk {x, u + h, u_{\mathbf x} + h_{\mathbf x} } - F \sqbrk {x, u, u_{\mathbf x} } } \rd x_1 \cdots \rd x_n$

Use multivariate Taylor's Theorem on $F$ around the point $\tuple {\mathbf x, u, u_{\mathbf x} }$:

$F \sqbrk {\mathbf x, u + h, u_{\mathbf x} + h_{\mathbf x} } = F \sqbrk {\mathbf x, u, u_{\mathbf x} } + \dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} h + \dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u_{\mathbf x} } h_{\mathbf x} + \map \OO {h^2, h h_{\mathbf x}, h_{\mathbf x}^2}$
where $\OO$ stands for Big-O.
Then:

$\ds \Delta J \sqbrk {u, h} = \idotsint_R \paren {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} h + \dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u_{\mathbf x} } h_{\mathbf x} + \map \OO {h^2, h h_{\mathbf x}, h_{\mathbf x}^2} } \rd x_1 \cdots \rd x_n$
By definition of variation of the functional:














\(\ds \delta J\)

\(=\)







\(\ds \idotsint_R \paren {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} + \dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u_{\mathbf x} } h_{\mathbf x} } \rd x_1 \cdots \rd x_n\)




















\(\ds \)

\(=\)







\(\ds \idotsint_R \paren {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} - \dfrac {\partial F_{u_{\mathbf x} } \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial \mathbf x} } \map h {\mathbf x} \rd x_1 \cdots \rd x_n + \idotsint_R \dfrac {\partial} {\partial \mathbf x} \sqbrk {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u_{\mathbf x} } \map h {\mathbf x} } \rd x_1 \cdots \rd x_n\)





as $F_{u_{\mathbf x} } h_{\mathbf x} = \dfrac {\partial} {\partial \mathbf x} \sqbrk {F_{u_{\mathbf x} } h} - \dfrac {\partial F_{u_{\mathbf x} } } {\partial \mathbf x} h$



By Green's theorem:

$\ds \idotsint_R \dfrac {\partial} {\partial \mathbf x} \sqbrk {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u_{\mathbf x} } \map h {\mathbf x} } \rd x_1 \cdots \rd x_n = \idotsint_\Gamma \map h {\mathbf x} F_{u_{\mathbf x} } \sqbrk {\mathbf x, u, u_{\mathbf x} } \boldsymbol \nu \rd \sigma$
where:

$\Gamma$ denotes the boundary of $R$
$\boldsymbol \nu$ is an outward normal to $\Gamma$.
Since the region is fixed, so are its boundary points. 
Hence, the difference function $h$ has to vanish at the boundary.
In other words:

$\forall \mathbf x \in \Gamma: \map h {\mathbf x} = 0$
This leaves only the first integral.

$\ds \delta J = \idotsint_R \paren {\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} - \dfrac{\partial F_{u_{ \mathbf x } } \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial \mathbf x} } \map h {\mathbf x} \rd x_1 \cdots \rd x_n$
For arbitrary $h$ the first variation vanishes if the term in brackets vanishes:

$\dfrac {\partial F \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial u} - \dfrac {\partial F_{u_{\mathbf x} } \sqbrk {\mathbf x, u, u_{\mathbf x} } } {\partial \mathbf x} = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 7.35$: Variation of a Functional Defined on a Fixed Region




