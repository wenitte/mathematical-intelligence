# 

Source: https://proofwiki.org/wiki/Dot_Product_with_Self_is_Zero_iff_Zero_Vector


This page has been identified as a candidate for refactoring of medium complexity.In particular: This result is valid for the general vector space, not just real Euclidean space which is what this isUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\mathbf u$ be a vector in the real Euclidean space $\R^n$.
Then:

$\mathbf u \cdot \mathbf u = 0 \iff \mathbf u = \mathbf 0$


Proof 1













\(\ds \mathbf u \cdot \mathbf u\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{i \mathop = 1}^n u_i^2\)

\(=\)







\(\ds 0\)





Definition of Dot Product








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i: \, \)



\(\ds u_i\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf u\)

\(=\)







\(\ds \bszero\)





Definition of Zero Vector



$\blacksquare$


Proof 2
Let $\mathbf u \cdot \mathbf u = 0$.
Then:














\(\ds 0\)

\(=\)







\(\ds \norm {\mathbf u }^2 \cos \angle \mathbf u, \mathbf u\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \norm {\mathbf u}^2 \cos 0\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf u}^2\)









The only way for this to happen is if:

$\norm {\mathbf u} = 0$
which implies:

$\mathbf u = \mathbf 0$

Now suppose $\mathbf u = \mathbf 0$.
Then:














\(\ds \mathbf u \cdot \mathbf u\)

\(=\)







\(\ds \mathbf 0 \cdot \mathbf 0\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf 0}^2 \cos \angle \mathbf 0, \mathbf 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$





