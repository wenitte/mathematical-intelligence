# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: Make this Proof 3 and reinstate the existing Proof 2 or perhaps rename the old Proof 2 as Proof 3, whichever makes better long-term sensseUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof
Let $\map P z = a_n z^n + \dots + a_1 z + a_0, \ a_n \ne 0$.
Aiming for a contradiction, suppose that $\map P z$ is not zero for any $z \in \C$.
It follows that $1 / \map P z$ must be entire; and is also bounded in the complex plane.
In order to see that it is indeed bounded, we recall that $\exists R \in \R_{>0}$ such that:
   $\cmod {\dfrac 1 {\map P z} } < \dfrac 2 {\cmod {a_n} R^n}, \text{whenever} \ \cmod z > R$.
Hence, $1 / \map P z$ is bounded in the region outside the disk $\cmod z \le R$.
However, $1 / \map P z$ is continuous on that closed disk, and thus it is bounded there as well. 
Furthermore, we observe that $1 / \map P x$ must be bounded in the whole plane.
Through Liouville's Theorem, $1 / \map P x$, and thus $\map P x$, is constant. 
This is a contradiction.
$\blacksquare$





