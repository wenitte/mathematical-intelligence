# 

Source: https://proofwiki.org/wiki/Orthogonality_Relations_for_Characters


This article needs to be linked to other articles.In particular: dual groupYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $G$ be a finite abelian group with identity $e$.
Let $G^*$ be the dual group of characters $\chi : G \to \C_{\ne 0}$.
Let $\chi_0$ be the trivial character on $G$.
Let $\psi: G \to \C_{\ne 0}$ be any character.
Let $y \in G$ be arbitrary.

Then:

$\ds \sum_{x \mathop \in G} \map \psi x = \begin {cases}
\order G & : \psi = \chi_0 \\
0 & : \psi \ne \chi_0 \end {cases}$
and:

$\ds \sum_{\chi \mathop \in G^*} \map \chi y = \begin {cases}
\order {G^*} & : y = e \\
0 & : y \ne e \end {cases}$


Proof
If $\psi = \chi_0$, then it is straightforward that:














\(\ds \sum_{x \mathop \in G} \map \psi x\)

\(=\)







\(\ds \sum_{x \mathop \in G} \map {\chi_0} x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in G} 1\)





Definition of Trivial Character














\(\ds \)

\(=\)







\(\ds \order G\)










If $\psi \ne \chi_0$, then $\exists y \in G$ such that $\map \psi y \ne 1$.
As $x$ runs through $G$ in the summation, $y x$ also runs through $G$.
So:














\(\ds \sum_{x \mathop \in G} \map \psi x\)

\(=\)







\(\ds \sum_{x \mathop \in G} \map \psi {y x}\)





by the above claim 
This article, or a section of it, needs explaining.In particular: which claim?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.














\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in G} \map \psi y \map \psi x\)





$\psi$ as a character is by definition a homomorphism














\(\ds \)

\(=\)







\(\ds \map \psi y \sum_{x \mathop \in G} \map \psi x\)









Since by assumption $\map \psi y \ne 1$, it must be true that:

$\ds \sum_{x \mathop \in G} \map \psi x = 0$
$\blacksquare$


This page has been identified as a candidate for refactoring of medium complexity.In particular: Suggestion: Move the dual space version into a corollary, as it is a direct application of the main theorem on the dual space, with identifying $x \in G$ as a character: $x: \chi \mapsto \map \chi x$Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.




