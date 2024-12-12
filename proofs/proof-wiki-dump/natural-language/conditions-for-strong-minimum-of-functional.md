# 

Source: https://proofwiki.org/wiki/Conditions_for_Strong_Minimum_of_Functional


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf y$ be an $n$-dimensional vector such that $\map {\mathbf y} a = A$ and $\map {\mathbf y} b = B$
Let $J$ be a functional such that:

$\ds J \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
Let $\gamma$ be an extremal curve of $J$.
Let the following be the field of the functional $J$:

$\mathbf y' = \map {\boldsymbol \psi} {x, \mathbf y}$
Let $R$ be an open region containing $\gamma$ and have the field $\boldsymbol \psi$ defined as $\forall \paren {x, \mathbf y} \in R$.
Let $\mathbf w$ be a finite vector.
Suppose that:

$\forall \paren {x, \mathbf y} \in R: \map E {x, \mathbf y, \boldsymbol \psi, \mathbf w}\ge 0$
where $E$ is Weierstrass E-Function.

Then $J$ has a strong minimum for $\gamma$.


This article, or a section of it, needs explaining.In particular: What is a strong minimum?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
By definition, the increment of $J$ is:

$\ds \Delta J = \int_{\gamma^*} \map F {x, \mathbf y, \mathbf y'} \rd x - \int_\gamma \map F {x, \mathbf y, \mathbf y'} \rd x$
where $\gamma$ and $\gamma^*$ are curves described by $\paren {x, \map {\mathbf y} x}$ and $\paren {x, \paren {\mathbf y^*} x}$ respectively, such that $\map {\mathbf y^*} x - \map {\mathbf y} x = \map {\mathbf h} x$.
Consider Hilbert's invariant integral:














\(\ds \map g {x, \mathbf y}\)

\(=\)







\(\ds \int_\Gamma \paren {-H \rd x + \mathbf p \rd \mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \int_\Gamma \paren {-\paren {-F + \mathbf y' F_{\mathbf y'} } \rd x + F_{\mathbf y'} \rd \mathbf y}\)





Definition of Hamiltonian and Momentum














\(\ds \)

\(=\)







\(\ds \int_\Gamma \paren {F \rd x - \mathbf y' F_{\mathbf y'} \rd x + F_{\mathbf y'} \rd \mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \int_{\Gamma} \paren {F \rd x - \boldsymbol \psi F_{\mathbf y'} \rd x + F_{\mathbf y'} \rd \mathbf y}\)





$\mathbf y' = \map {\boldsymbol \psi} {x, \mathbf y}$



Since the integrand is full differential, the integral does not depend on the shape of $ \Gamma $, but only on its endpoints.
Therefore, for $\Gamma = \gamma$ and $\Gamma = \gamma^*$ the value of the integral is the same.
Since $\map {\mathbf y'} x = \map {\boldsymbol \psi} {x, \mathbf y}$ determines boundary conditions for $\gamma$, $\Gamma = \gamma$ is one of the trajectories of the field $\map {\mathbf y'} x = \map {\boldsymbol \psi} {x, \mathbf y}$.
Hence, $\d \mathbf y$ is constrained by $\d \mathbf y = \boldsymbol \psi \rd x$:

$\ds \map g {x, \mathbf y} = \int_\gamma \map F {x, \mathbf y, \mathbf y'} \rd x$
Thus, $\map g {x, \mathbf y'}$ can be written in two different ways.

$\ds \int_\gamma \map F {x, \mathbf y, \mathbf y'} \rd x = \int_{\gamma^*} \paren {\paren {\map F {x, \mathbf y, \boldsymbol \psi} - \boldsymbol \psi F_{\mathbf y'} \paren {x, \mathbf y, \boldsymbol \psi} } \rd x + F_{\mathbf y'} \paren {x, \mathbf y, \boldsymbol \psi} \rd \mathbf y}$
Substitute this into the expression for $\Delta J$:














\(\ds \Delta J\)

\(=\)







\(\ds \int_{\gamma^*} \map F {x, \mathbf y, \mathbf y'} \rd x - \int_{\gamma^*} \paren {\paren {\map F {x, \mathbf y, \boldsymbol \psi} - \boldsymbol \psi \map {F_{\mathbf y'} } {x, \mathbf y, \boldsymbol \psi} }\rd x + \map {F_{\mathbf y'} } {x, \mathbf y, \boldsymbol \psi} \rd \mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \int_{\gamma^*} \paren {\map F {x, \mathbf y, \mathbf y'} - \map F {x, \mathbf y, \boldsymbol \psi} - \paren {\mathbf y'-\boldsymbol \psi} \map {F_{\mathbf y'} } {x, \mathbf y, \boldsymbol \psi} }\rd x\)





as $\d \mathbf y = \boldsymbol \psi \rd x$














\(\ds \)

\(=\)







\(\ds \int_{\gamma^*} \map E {x, \mathbf y, \boldsymbol\psi, \mathbf y'} \rd x\)





Definition of Weierstrass E-Function



By assumption:

$\map E {x, \mathbf y, \boldsymbol \psi, \mathbf y'} \ge 0$
Hence the integrand is bounded below by $0$ and above by its maximum in the interval of integration.
Hence, the integral is bounded below by $0$ and above by some positive number.
Therefore:

$\Delta J \ge 0$
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Improve clarity, revisit linked pagesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 6.34$: The Weierstrass E-Function. Sufficient Conditions for a Strong Extremum




