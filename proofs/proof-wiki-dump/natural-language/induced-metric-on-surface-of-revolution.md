# 

Source: https://proofwiki.org/wiki/Induced_Metric_on_Surface_of_Revolution



Theorem
Let $\struct {\R^3, d}$ be the Euclidean space.
Let $S_C \subseteq \R^3$ be the surface of revolution.
Let the smooth local parametrization of $C$ be:

$\map \gamma t = \tuple {\map x t, \map y t}$

Then the induced metric on $S_C$ is:

$g = \paren {\map {x'} t^2 + \map {y'} t^2} d t^2 + \map y t^2 d \theta^2$

This article, or a section of it, needs explaining.In particular: What is the $d$ notation? Is it a differential? Link needed to a page which defines the concept. EDIT: Is it the Definition:Quadratic Differential Form? $\d$ and $\rd$ recommended as the operator symbol, as it is then distinguished from the $d$ which is the $\mathsf{Pr} \infty \mathsf{fWiki}$ symbol for the general metric. In this context (where we are discussing "metrics") this distinction may be important for the purposes of maximum clarity and lack of ambiguity. This explains it quite well: [[1]]So all that remains is to implement that on $\mathsf{Pr} \infty \mathsf{fWiki}$, amend the notation (MSE is notoriously sucky at standardised notation, understandable given the intellect domain) and we're golden.Argh! Silly me! The $d$ notation is the metric of the metric space and defined in the first line! DuuhYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Corollary
Let $\struct {\R^3, d}$ be the Euclidean space.
Let $S_C \subseteq \R^3$ be the surface of revolution.
Let the smooth local parametrization of $C$ be:

$\map \gamma t = \tuple {\map x t, \map y t}$
Let $\gamma$ be a unit-speed curve.

Then the induced metric on $S_C$ is:

$g = d t^2 + \map y t^2 d \theta^2$


Proof
By Smooth Local Parametrization of Surface of Revolution, the smooth local parametrization of $S_C$ can be written as:

$\map X {t, \theta} = \tuple {\map y t \cos \theta, \map y t \sin \theta, \map x t}$
By definition, the induced metric on $S_C$ is:














\(\ds g\)

\(=\)







\(\ds X^* \tilde g\)




















\(\ds \)

\(=\)







\(\ds d \paren {\map y t \map \cos \theta}^2 + d \paren {\map y t \map \sin \theta}^2 + d \paren {\map x t}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {y'} t \map \cos \theta dt - \map y t \map \sin \theta d\theta}^2 + \paren {\map {y'} t \map \sin \theta dt + \map y t \map \cos \theta d\theta}^2 + \paren {\map {x'} t d t}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {x'} t^2 + \map {y'} t^2} d t^2 + \map y t^2 d \theta^2\)









$\blacksquare$


This article needs proofreading.In particular: Finish the detailsIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
2018: John M. Lee: Introduction to Riemannian Manifolds (2nd ed.) ... (previous) ... (next): $\S 2$: Riemannian Metrics. Methods for Constructing Riemannian Metrics




