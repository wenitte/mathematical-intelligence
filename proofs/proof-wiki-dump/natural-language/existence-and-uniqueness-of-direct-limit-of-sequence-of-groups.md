# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Direct_Limit_of_Sequence_of_Groups



Theorem
Let $\sequence {G_n}_{n \mathop \in \N}$ be a sequence of groups.
Let $\sequence {g_n}_{n \mathop \in \N}: g_n: G_n \to G_{n + 1}$ be a sequence of group homomorphisms.

Then their direct limit $G_\infty$ exists and is unique up to unique isomorphism.


Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: Transclude the lemmataUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Existence
Define $\widehat G_\infty$ by:

$\widehat G_\infty := \ds \bigsqcup_{n \mathop \in \N} G_n$
where $\ds \bigsqcup$ signifies a disjoint union.
For $m \ge n$, denote with $g_{n, m}$ the composition $g_{m - 1} \circ \cdots \circ g_n: G_n \to G_m$.
In particular, $g_{n, n}: G_n \to G_n$ is taken to be the identity mapping on $G_n$.

Now define an equivalence relation $\sim$ on $\hat G_\infty$ by putting:

$\tuple {x_n, n} \sim \tuple {y_m, m} \iff \exists k \ge n, m: \map {g_{n, k} } {x_n} = \map {g_{m, k} } {y_m}$
which is established to be indeed an equivalence relation in Lemma 1.

Now define $G_\infty$ as the quotient set:

$G_\infty := \widehat G_\infty / \sim$
We can equip $G_\infty$ with a group structure as follows:
Let $\eqclass {\tuple {x_n, n} } {}, \eqclass {\tuple {y_m, m} } {} \in G_\infty$, where $\eqclass {\tuple {x_n, n} } {}$ denotes the equivalence class of $\tuple{x_n, n}$.

Let $l:= \max \set {m, n}$.
We define a group operation on $G_\infty$ via 

$\tuple {\eqclass {\tuple {x_n, n} } {}, \eqclass {\tuple {y_m, m} } {} } \longmapsto \eqclass {\tuple {\map {g_{n l} } {x_n} \map {g_{m l} } {y_m}, l} } {}$.
We shall also refer to this operation as multiplication.

A proof that this is indeed a well-defined group can be found in Lemma 2.

Now define $u_n: G_n \to G_\infty$ by:

$\map {u_n} {x_n} := \eqclass {\tuple {x_n, n} } {}$
That this is a group homomorphism follows immediately from the definition of the group structure.

Now let $H$ be a group and $h_n: G_n \to H$ be group homomorphisms such that $h_{n + 1} \circ g_n = h_n$.
Define $h_\infty: G_\infty \to H$ by:

$\map {h_\infty} {\eqclass {\tuple {x_n, n} } {} } = \map {h_n} {x_n}$
Under this definition:

$\forall x_n \in G_n: \map {h_\infty \circ u_n} {x_n} = \map {h_n} {x_n}$

By Equality of Mappings, it follows that:

$h_\infty \circ u_n = h_n$

It remains to be shown that $h_\infty$ is well-defined and a group homomorphism.
This is done in Lemma 3.
$\Box$


Uniqueness
A direct proof of uniqueness can be formulated as follows:


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $G_\infty'$ be a second direct limit group  with homomorphisms $u_n': G_n \to G_\infty'$. 
By the above universal property we can construct homomorphisms:

$u'_\infty: G_\infty \to G_\infty'$ (taking $H = G_\infty'$ and $h'_n = u'_n$)
and:

$u_\infty: G_\infty' \to G_\infty$ (taking $H = G_\infty$ and $h_n = u_n$).
We shall prove that $u'_\infty$ is a left inverse of $u_\infty$.
Showing that it is also a right inverse follows analogously by exchanging $u_\infty$ and $u'_\infty$. 
From 

$u'_\infty \circ u_n = u_n' = \mathop{Id}_{G'_\infty} \circ u'_n$
we find that the map $h_\infty : G'_\infty \to G'_\infty$ corresponding to $H = G'_\infty$ and $h_n = u'_\infty \circ u_n$ must be $\mathop{Id}_{G'_\infty}$ by uniqueness.
We also have

$u'_\infty \circ u_n  = u'_\infty \circ \mathop{Id}_{G_\infty}  \circ u_n $
thus by the same argument $h_\infty$ must also equal $u_\infty'\circ u_\infty$. 

We conclude that $u_\infty'$ is a right inverse of $u_\infty$.
$\blacksquare$



This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract the below and implement it as a second proof on its own page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
For a more categorical point of view:
From Equivalence of Definitions of Direct Limit of Sequence of Groups, $G_\infty$ can be described as a colimit in the category of groups $\mathbf{Grp}$.
By Colimit is Unique, it therefore is unique up to unique $\mathbf{Grp}$-isomorphism.
By Isomorphism in Category of Groups iff Group Isomorphism, the result follows.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.6$: Example $5.29$




