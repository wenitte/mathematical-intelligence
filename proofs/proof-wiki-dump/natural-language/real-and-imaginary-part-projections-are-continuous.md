# 

Source: https://proofwiki.org/wiki/Real_and_Imaginary_Part_Projections_are_Continuous

Theorem
Define the real-valued functions $x, y: \C \to \R$ by:

$\forall z \in \C: \map x z = \map \Re z$
$\forall z \in \C: \map y z = \map \Im z$

Equip $\R$ with the usual Euclidean metric.
Equip $\C$ with the usual Euclidean metric.

Then both $x$ and $y$ are continuous functions.


Proof
Let $z \in \C$, and let $\epsilon \in \R_{>0}$.
Put $\delta = \epsilon$.
For all $w \in \C$ with $\cmod {w - z} < \delta$:














\(\ds \cmod {\map \Re w - \map \Re z}\)

\(=\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z + i \map \Im z - i \map \Im w}\)




















\(\ds \)

\(\le\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z} + \cmod {i \map \Im z - i \map \Im w}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z}\)





Complex Modulus is Non-Negative














\(\ds \)

\(=\)







\(\ds \cmod {w - z}\)




















\(\ds \)

\(<\)







\(\ds \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









and














\(\ds \cmod {\map \Im w - \map \Im z}\)

\(=\)







\(\ds \cmod i \cmod {\map \Im w - \map \Im z}\)





as $\cmod i = 1$














\(\ds \)

\(=\)







\(\ds \cmod {i \map \Im w - i \map \Im z}\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z + \map \Re z - \map \Re w}\)




















\(\ds \)

\(\le\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z} + \cmod {\map \Re z - \map \Re w}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \cmod {\map \Re w + i \map \Im w - \map \Re z - i \map \Im z}\)





Complex Modulus is Non-Negative














\(\ds \)

\(=\)







\(\ds \cmod {w - z}\)




















\(\ds \)

\(<\)







\(\ds \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









It follows by definition that $x$ and $y$ are both continuous.
$\blacksquare$


Notes

This page has been identified as a candidate for refactoring of basic complexity.In particular: Rather than relegate this to a "notes" section, implement as another proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This theorem can be considered a special case of Continuous Mapping to Product Space.
Suppose we let $z = \map \Re z + i \map \Im z$ be a complex number.
We can now identify the complex number $z$ with the ordered pair $\tuple {\map \Re z, \map \Im z} \in \R^2$, where $R^2$ is the Cartesian product $\R \times \R$.
The functions $x$ and $y$ can now be considered as projections on the co-ordinates.





