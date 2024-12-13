# 

Source: https://proofwiki.org/wiki/Overflow_Theorem


This article needs to be linked to other articles.In particular: pages defining specifically what a "finite model" and an "infinite model" areYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $F$ be a set of first-order formulas which has finite models of arbitrarily large size.
Then $F$ has an infinite model.


Corollary
The class of finite models is not $\Delta$-elementary.
That is:

there is no set of formulas $F$ such that $F$ is satisfied by a model $\MM$
if and only if:

$\MM$ is finite.


Proof
For each $n$, let $\mathbf A_n$ be the formula:

$\exists x_1 \exists x_2 \ldots \exists x_n: \paren {x_1 \ne x_2 \land x_1 \ne x_3 \land \ldots \land x_{n - 1} \ne x_n}$
Then $\mathbf A_i$ is true in a structure $\AA$ if and only if $\AA$ has at least $n$ elements.
Take:

$\ds \Gamma := A \cup \bigcup_{i \mathop = 1}^\infty A_i$
Since $F$ has models of arbitrarily large size, every finite subset of $\Gamma$ is satisfiable.
From the Compactness Theorem, $\Gamma$ is satisfiable in some model $\MM$.
But since $\MM \models A_i$ for each $i$, $\MM$ must be infinite.
So $A$ has an infinite model.
$\blacksquare$


Also see
Upward Löwenheim-Skolem Theorem


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\mathrm{II}.7$ First-Order Logic Semantics: Theorem $\mathrm{II.7.17}$




