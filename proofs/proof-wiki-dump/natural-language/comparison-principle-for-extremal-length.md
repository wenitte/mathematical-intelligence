# 

Source: https://proofwiki.org/wiki/Comparison_Principle_for_Extremal_Length


This article needs to be linked to other articles.In particular: Some definitions need to be linked.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: The statements contain multiple conditions: families and unions of families, which makes the exposition imprecise.  It needs to be separated out into its elements and then proved in more detail.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $X$ be a Riemann surface.
Let $\Gamma_1$ and $\Gamma_2$ be families of rectifiable curves (or, more generally, families of unions of rectifiable curves) on $X$.
Let every element of $\Gamma_1$ contain some element of $\Gamma_2$.

Then the extremal lengths of $\Gamma_1$ and $\Gamma_2$ are related by:

$\lambda \left({\Gamma_1}\right) \ge \lambda \left({\Gamma_2}\right)$

More precisely, for every conformal metric $\rho$ as in the definition of extremal length, we have:

$L \left({\Gamma_1, \rho}\right) \ge L \left({\Gamma_2, \rho}\right)$


Proof
We have:














\(\ds L \left({\Gamma_1, \rho}\right)\)

\(=\)







\(\ds \inf_{\gamma \mathop \in \Gamma_1} L \left({\gamma, \rho}\right)\)





by definition














\(\ds \)

\(\ge\)







\(\ds \inf_{\gamma \mathop \in \Gamma_2} L \left({\gamma, \rho}\right)\)





since every curve of $\Gamma_1$ contains a curve of $\Gamma_2$














\(\ds \)

\(=\)







\(\ds L \left({\Gamma_2, \rho}\right)\)





by definition



This proves the second claim.
The second claim implies the first by definition.
$\blacksquare$


Sources
1973: L.V. Ahlfors: Conformal Invariants: Topics in Geometric Function Theory




