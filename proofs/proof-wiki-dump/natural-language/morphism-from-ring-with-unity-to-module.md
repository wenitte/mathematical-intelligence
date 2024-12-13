# 

Source: https://proofwiki.org/wiki/Morphism_from_Ring_with_Unity_to_Module


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $R$ be a ring with unity.
Let $M$ be an $R$-module.
Then for every $m \in M$ there exists a unique $R$-module morphism:

$\psi: R \to M$
that sends $1$ to $m$.


Proof
Existence
Let $r \in R$.
Let $\map \psi r := r m$.
This map is $R$-linear by definition of a module.
$\Box$


Uniqueness
Let $\psi_1$ and $\psi_2$ be two such morphisms.
Then $\psi_1 - \psi_2$ is an $R$-module morphism whose kernel contains $1$.
Thus:

$\map \ker {\psi_1 - \psi_2} = R$
and:

$\psi_1 = \psi_2$
$\blacksquare$





