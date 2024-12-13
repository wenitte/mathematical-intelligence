# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum/Two_Variables


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $D \subset \R^2$.
Let $\Gamma$ be the boundary of $D$.
Let $S$ be a set of real mappings such that:

$S = \set {\map z {x, y}: \paren {z: S_1 \subseteq \R^2 \to S_2 \subseteq \R}, \paren {\map z {x, y} \in \map {C^2}D}, \paren {\map z \Gamma = 0} }$
Let $J \sqbrk z: S \to S_3 \subseteq \R$ be a functional of the form:

$\ds \iint_D \map F {x, y, z, z_x, z_y} \rd x \rd y$

Then a necessary condition for $J \sqbrk y$ to have an extremum (strong or weak) for a given function $\map z {x, y}$ is that $\map z {x, y}$ satisfy Euler's equation:

$F_z - \dfrac \partial {\partial x} F_{z_x} - \dfrac \partial {\partial y} F_{z_y} = 0$


Proof
From Condition for Differentiable Functional to have Extremum we have

$\bigvalueat {\delta J \sqbrk {z; h} } {z \mathop = \hat z} = 0$
The variation exists if $J$ is a differentiable functional.
Since $\map z \Gamma = 0$, $\map h {x, y}$ vanishes on the boundary $\Gamma$:

$\bigvalueat h \Gamma = 0$
From the definition of increment of a functional:















\(\ds \Delta J \sqbrk {z; h}\)

\(=\)







\(\ds J \sqbrk {z + h} - J \sqbrk z\)





definition














\(\ds \)

\(=\)







\(\ds \iint_D \map F {x, y, z + h, z_x + h_x, z_y + h_y} \rd x \rd y - \iint_D \map F {x, y, z, z_x, z_y} \rd x \rd y\)





form of considered functional














\(\ds \)

\(=\)







\(\ds \iint_D \paren {\map F {x, y, z + h, z_x + h_x, z_y + h_y} - \map F {x, y, z, z_x, z_y} } \rd x \rd y\)





bringing under the same integral



Using multivariate Taylor's theorem, expand $\map F {x, y, z + h, z_x + h_x, z_y + h_y}$ with respect to $h$, $h_x$ and $h_y$.
Denote the ordered tuples $\tuple {h, h_x, h_y}$ as $\mathbf h$ and $\tuple {z, z_x, z_y}$ as $\mathbf z$ respectively.
Then:

$\ds \map F {x, y, \mathbf z + \mathbf h} = \valueat {\map F {x, y, \mathbf z + \mathbf h} } {\mathbf h \mathop = 0} + \valueat {\frac {\partial {\map F {x, y, \mathbf z + \mathbf h} } } {\partial z} } {\mathbf h \mathop = 0} h + \valueat {\frac {\partial {\map F {x, y, \mathbf z + \mathbf h} } } {\partial z_x} } {\mathbf h \mathop = 0} z_x + \valueat {\frac {\partial {\map F {x, y, \mathbf z + \mathbf h} } } {\partial z_y} } {\mathbf h \mathop = 0} z_y + \map \OO {\mathbf h^2}$
where the last term includes all terms of the order not lesser than 2 with respect to the elements of $\mathbf h$.
Substitute this back into the integral: 

$\ds \Delta J \sqbrk {y; h} = \iint_D \paren {\map F {x, y, \mathbf h}_z h + \map F {x, y, \mathbf z}_{z_x} h_x + \map F {x, y, \mathbf z}_{z_y} h_y + \map \OO {\mathbf h^2} } \rd x \rd y$
Terms in $\map \OO {\mathbf h^2}$ represent terms of order higher than 1 with respect to elements of $\mathbf h$.


This article, or a section of it, needs explaining.In particular: Precise way to drop higher order termsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, the integral not counting in $\map \OO {\mathbf h^2}$ is a variation of functional:














\(\ds \delta J \sqbrk {z; h}\)

\(=\)







\(\ds \iint_D \paren {F_z h + \dfrac \partial {\partial x} F_{z_x} h + \dfrac \partial {\partial y} F_{z_y} h } \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \iint_D \paren {F_z h + \dfrac \partial {\partial x} \paren {F_{z_x} h} + \dfrac \partial {\partial y} \paren {F_{z_y} h} } \rd x \rd y - \iint_D \paren {\dfrac \partial {\partial x} F_{z_x} + \dfrac \partial {\partial y} F_{z_y} } h \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \int_\Gamma \paren {F_{z_x} h \rd y - F_{z_y} h \rd x} - \iint_D \paren {\dfrac \partial {\partial x} F_{z_x} + \dfrac \partial {\partial y} F_{z_y} -F_z} h \rd x \rd y\)





Green's Theorem














\(\ds \)

\(=\)







\(\ds \iint_D \paren {F_z - \dfrac \partial {\partial x} F_{z_x} - \dfrac \partial {\partial y} F_{z_y} } h \rd x \rd y\)





$\map h \Gamma = 0$



Then, by the use of the lemma:

$F_z - \dfrac \partial {\partial x} F_{z_x} - \dfrac \partial {\partial y} F_{z_y} = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.5$: The Case of Several Variables




