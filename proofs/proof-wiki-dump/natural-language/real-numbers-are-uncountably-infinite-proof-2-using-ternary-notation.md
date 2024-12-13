# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Proof_2_using_Ternary_Notation

Theorem
The set of real numbers $\R$ is uncountably infinite.


Lemma
Let $\sequence {d_n}$ and $\sequence {e_n}$ be infinite sequences in $\set {0, 1}$ such that:

$\exists m \in \N: d_m \ne e_m$
That is, the sequences $\sequence {d_n}$ and $\sequence {e_n}$ are different in at least one term.
Then the ternary representations $D = 0.d_1 d_2 \ldots$ and $E = 0.e_1 e_2 \dots$ represent distinct real numbers.


Proof

This article needs to be linked to other articles.In particular: Characteristic FunctionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Define a mapping $f: \powerset {\N_{>0} } \to \R$ thus:

$\map f S = 0.d_1 d_2 \ldots$, interpreted as a ternary expansion where $\sequence {d_n}$ is the characteristic function of $S$.
That is:

$\ds \map f S = \sum_{i \mathop \in S} 3^{-i}$
By the lemma, $f$ is an injection.
Aiming for a contradiction, suppose that $\R$ is countable.
Then there is an injection $g: \R \to \N$.
By Composite of Injections is Injection, $g \circ f: \powerset \N \to \N$ is an injection.
But this contradicts No Injection from Power Set to Set.
Hence, by Proof by Contradiction, $\R$ is not countable.
$\blacksquare$





