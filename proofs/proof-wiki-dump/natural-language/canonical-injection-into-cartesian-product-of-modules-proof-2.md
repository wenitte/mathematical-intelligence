# 

Source: https://proofwiki.org/wiki/Canonical_Injection_into_Cartesian_Product_of_Modules/Proof_2



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +, \circ}_R$ be the cartesian product of a sequence $\sequence {\struct {G_n, +_n, \circ_n}_R}$ of $R$-modules.

Then for each $j \in \closedint 1 n$, the canonical injection $\inj_j$ from $\struct {G_j, +_j, \circ_j}_R$ into $\struct {G, +, \circ}_R$ is a monomorphism.


Proof
$G$ can be seen as functions:

$\ds f: A \to \bigcup_{a \mathop \in A} G_a$

This article, or a section of it, needs explaining.In particular: Clarify the above sentence.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $a \in A$.
Let $x, y \in G_a$.
Let $r \in R$.
So both $x + y \in G_a$ and $r x \in G_a$.

Let $b \in A$.


Case 1

This article, or a section of it, needs explaining.In particular: Explain and clarify the notationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $b = a$.
Then:

$\map {\map {\inj_a} {x + y} } b = x + y = \map {\map {\inj_a} x} b + \map {\map {\inj_a} y} b$
and:

$\map {\map {\inj_a} {r x} } b = r x = r \, \map {\map {\inj_a} x} b$
$\Box$


Case 2
Let $b \ne a$.
Then:

$\map {\map {\inj_a} {x + y} } b = 0 + 0 = \map {\map {\inj_a} x} b + \map {\map {\inj_a} y} b$
and:

$\map {\map {\inj_a} {r x} } b = 0 = \map r 0 = r \, \map {\map {\inj_a} x} b$

Therefore:

$\map {\inj_a} {x + y} = \map {\inj_a} x + \map {\inj_a} y$
and:

$\map {\inj_a} {r x} = r \, \map {\inj_a} x$
$\Box$

So $\inj_a$ is a homomorphism.
Combined with Canonical Injection is Injection gives that $\inj_a$ is a monomorphism.
$\blacksquare$





