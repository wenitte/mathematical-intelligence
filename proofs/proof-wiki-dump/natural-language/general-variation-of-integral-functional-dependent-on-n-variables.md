# 

Source: https://proofwiki.org/wiki/General_Variation_of_Integral_Functional/Dependent_on_n_Variables


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: improve upon technical aspectsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $\mathbf x$ be an $n$-dimensional vector.
Let $u = \map u {\mathbf x}$ be a real-valued function.
Let $J$ be a functional such that:

$\ds J \sqbrk u = \int_R \map F {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} } \rd x_1 \dotsm \rd x_n$

Let $\mathbf x^*, u^*$ be defined by the following transformations $\paren \star$:














\(\ds \mathbf x^*\)

\(=\)







\(\ds \map {\boldsymbol \Phi} {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x}; \epsilon} = \mathbf x + \epsilon \map {\boldsymbol \phi} {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} } + \map \OO {\epsilon^2}\)




















\(\ds u^*\)

\(=\)







\(\ds \map \Psi {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x}; \epsilon} = \mathbf x + \epsilon \map \psi {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x } } + \map \OO {\epsilon^2}\)









where:

$\boldsymbol \Phi$, $\Psi$ are differentiable with respect to $\epsilon$
and:














\(\ds \map {\boldsymbol \Phi} {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x}; 0}\)

\(=\)







\(\ds \mathbf x\)




















\(\ds \map \Psi {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x}; 0}\)

\(=\)







\(\ds u\)




















\(\ds \map {\boldsymbol \phi} {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} }\)

\(=\)







\(\ds \valueat {\dfrac {\partial \boldsymbol \Phi} {\partial \epsilon} } {\epsilon \mathop = 0}\)




















\(\ds \map \psi {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} }\)

\(=\)







\(\ds \valueat {\dfrac {\partial \Psi} {\partial \epsilon} } {\epsilon \mathop = 0}\)










Then the variation of the functional $J$ due to the original mapping being transformed by $\paren \star$ reads:


This article, or a section of it, needs explaining.In particular: not clear what "aforementioned transformation" refers to. Best to identify it with a label and refer to that label.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \delta J = \epsilon \int_R \paren {F_u - \dfrac {\partial F_{u_{\mathbf x} } } {\partial \mathbf x} } \overline \psi \rd x_1 \dotsm \rd x_n + \epsilon \int_R \map {\dfrac {\partial} {\partial \mathbf x} } {F_{u_x} \overline {\boldsymbol \psi} + F \boldsymbol \phi} \rd x_1 \dotsm \rd x_n$
where:

$\overline \psi = \psi - u_{\mathbf x} \boldsymbol \phi$


Proof
By definition:














\(\ds \Delta J\)

\(=\)







\(\ds J \sqbrk {\map {u^*} {x^*} } - J \sqbrk {\map u x}\)




















\(\ds \)

\(=\)







\(\ds \int_{R^*} \map F {\mathbf x^*, u^*, \frac {\partial u^*} {\partial \mathbf x^*} } \rd x_1^* \dotsm \rd x_n^* - \int_R \map F {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} } \rd x_1 \dotsm \rd x_n\)




















\(\ds \)

\(=\)







\(\ds \int_R \paren {\map F {\mathbf x^*, u^*, \dfrac {\partial u^*} {\partial \mathbf x^*} } \map \det {J_{\mathbf x^*} } - \map F {\mathbf x, u, \frac {\partial u} {\partial \mathbf x} } } \rd x_1 \dotsm \rd x_n\)





Volume element transformation




From the definition of $\mathbf x^*$ a Jacobian matrix can be constructed:

$\ds \dfrac {\partial x_i^*} {\partial x_j} = \delta_i^j + \epsilon \dfrac {\partial \phi_i} {\partial x_j} + \map \OO {\epsilon^2}$
By Taylor's theorem, The corresponding Jacobian determinant can be expanded with respect to $\epsilon$.
The $\epsilon^0$ term is obtained from the diagonal product by opening brackets and collecting $\epsilon$-free terms.
The $\epsilon^1$ term is obtained from the same diagonal product by choosing non-constant term once.

$\ds \map \det {J_{\mathbf x^*} } = 1 + \epsilon \dfrac {\partial \boldsymbol \phi} {\partial \mathbf x} + \map \OO {\epsilon^2}$

This article, or a section of it, needs explaining.In particular: make explanation more preciseYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \Delta J = \int_R \paren {\map F {\mathbf x^*, u^* \dfrac {\partial u^*} {\partial \mathbf x^*} } \paren {1 + \epsilon \dfrac {\partial \boldsymbol \phi} {\partial \mathbf x} } - \map F {\mathbf x, u, \dfrac {\partial u} {\partial \mathbf x} } } \rd x_1 \dotsm \rd x_n + \map \OO {\epsilon^2}$
By definition, the principal part is:

$\ds \delta J = \int_R \paren {F_{\mathbf x} \delta \mathbf x + F_u \delta u + F_{u_{\mathbf x} } \delta u_{\mathbf x} + \epsilon F \dfrac {\partial \boldsymbol \phi} {\partial \mathbf x} } \rd x_1 \dotsm \rd x_n$

This article, or a section of it, needs explaining.In particular: If use of square brackets has a particular significance and meaning here, explain it. If it is just a variant on conventional parenthesis, then best if $\paren \cdot$ is used instead. It's ultimately more clear to use one style of parenthesis than mix and match various different types.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Introduce the following differences:














\(\ds \Delta u\)

\(=\)







\(\ds \map {u^*} {x^*} - \map u x\)




















\(\ds \overline {\Delta u}\)

\(=\)







\(\ds \map {u^*} x - \map u x\)




















\(\ds \Delta x\)

\(=\)







\(\ds x^*-x\)










Then:














\(\ds \overline {\Delta u}\)

\(=\)







\(\ds \epsilon \overline \psi + \map \OO {\epsilon^2}\)




















\(\ds \overline {\delta u}\)

\(=\)







\(\ds \epsilon \overline \psi\)




















\(\ds \Delta u\)

\(=\)







\(\ds \dfrac {\partial u} {\partial \mathbf x} \delta \mathbf x + \overline {\delta u} + \map \OO {\epsilon^2}\)




















\(\ds \delta u\)

\(=\)







\(\ds \dfrac {\partial u} {\partial \mathbf x} \delta \mathbf x + \overline {\delta u}\)




















\(\ds \paren {\delta u}_{x_i}\)

\(=\)







\(\ds \paren {\overline {\delta u} }_{x_i} + u_{\mathbf x x_i} {\delta \mathbf x}_{x_i}\)




















\(\ds \Delta \mathbf x\)

\(=\)







\(\ds \epsilon \boldsymbol \phi + \map \OO {\epsilon^2}\)




















\(\ds \delta \mathbf x\)

\(=\)







\(\ds \epsilon \boldsymbol \phi\)










Here $\delta$ difference stands for principal part, which is constant or linear with respect to $\epsilon$.
Thus, the variation of $J$ reads:

$\ds \delta J = \int_R \paren {F_{\mathbf x} \delta \mathbf x + F_u \overline {\delta u} + F_u u_{\mathbf x} \delta \mathbf x + F_{u_{\mathbf x} } {\overline {\delta u} }_{\mathbf x} + \sum_{i, j \mathop = 1}^n F_{u_{x_i} } u_{x_i x_j} \delta x_j + \map F {\delta \mathbf x}_{\mathbf x} } \rd x_1 \dotsm \rd x_n$
A few terms can be rewritten using:

$\ds \dfrac {\partial} {\partial \mathbf x} \paren {F \delta \mathbf x} = F_{\mathbf x} \delta \mathbf x + \map F {\overline {\delta \mathbf x} }_{\mathbf x} + F_u u_{\mathbf x} \delta \mathbf x + \sum_{i, j\mathop = 1}^n F_{u_{x_i} } u_{x_i x_j} \delta x_j$
and:

$\ds \map {F_{u_{\mathbf x} } } {\overline{\delta u} }_{\mathbf x} = \dfrac {\partial} {\partial \mathbf x} {F_{u_{\mathbf x} } \overline {\delta u} } - \dfrac {\partial F_{u_{\mathbf x} } } {\partial \mathbf x} \delta u$
Substitution of previous results into variation of $J$ leads to:

$\ds \delta J = \int_R \paren {F_u - \dfrac {\partial F_{u_{\mathbf x} } } {\partial \mathbf x} } \overline {\delta u} \rd x_1 \dotsm \rd x_n + \int_R \map {\dfrac \partial {\partial \mathbf x} } {F_{u_{\mathbf x} } \overline {\delta u} + F \delta \mathbf x} \rd x_1 \dotsm \rd x_n$
Substitute expressions for $\overline {\delta u}$ and $\delta\mathbf x$ to obtain the desired result.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 7.37$: Variation of a Functional Defined on a Variable Region




