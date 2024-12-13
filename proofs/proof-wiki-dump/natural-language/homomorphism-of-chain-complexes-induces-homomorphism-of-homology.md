# 

Source: https://proofwiki.org/wiki/Homomorphism_of_Chain_Complexes_induces_Homomorphism_of_Homology


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract the definition of "Homomorphism Induced by Chain Complex Homomorphism" or however it's best specifiedUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $A_\bullet$ and $B_\bullet$ be chain complexes of abelian groups.
Let $f: A_\bullet \to B_\bullet$ be a homomorphism.

Then for every $n$, $f$ induces a morphism $H_n \left({A_\bullet}\right) \to H_n \left({B_\bullet}\right)$ of homology groups.


This article, or a section of it, needs explaining.In particular: Domain of $n$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $\partial^A_\bullet$, $\partial^B_\bullet$ denote the differential on $A_\bullet$, respectively $B_\bullet$. 
First it will be demonstrated that:

$\forall a \in \ker \left({\partial^A_n}\right) \subseteq A_n: f_n \left({a}\right) \in \ker \left({\partial^B_n}\right)$
Thus:

$\partial^B_n f_n \left({a}\right) = f_{n - 1} \left({\partial^A_n a}\right) = f_{n - 1} \left({0}\right) = 0$
Thus there exists a map:

$\bar f_n: \ker \left({\partial^A_n}\right) \to \ker \left({\partial^B_n}\right)$
via the restriction of $f$.


This article, or a section of it, needs explaining.In particular: Restriction of $f$ to what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Next will be shown that:

$\forall a \in \operatorname {Im} \left({\partial^A_{n + 1} }\right): f_n \left({a}\right) \in \operatorname {Im} \left({\partial^B_{n + 1} }\right)$
Let $a = \partial^A_{n + 1}a'$
Then:

$\partial^B_{n + 1} \left({f_{n + 1} \left({a'}\right)}\right) = f_n \left({\partial^A_n a'}\right) = f_n \left({a}\right)$.

Let $\pi: \ker \left({\partial^B_n}\right) \to H_n \left({B_\bullet}\right)$ be the quotient map.
Let $\rho = \pi \circ \bar f_n$.
From above:

$\operatorname{Im} \left({\partial^A_{n + 1} }\right) \subseteq \ker \left({\rho}\right)$
Thus $\rho$ factors through a map:

$\tilde f_n: H_n \left({A_\bullet}\right) \to H_n \left({B_\bullet}\right)$
completing the proof.
$\blacksquare$





