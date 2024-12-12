# 

Source: https://proofwiki.org/wiki/G-Module_is_Irreducible_iff_no_Non-Trivial_Proper_Submodules


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {G, \circ}$ be a finite group.
Let $\struct {V, \phi}$ be a $G$-module.

Then $V$ is an irreducible $G$-module if and only if $V$ has no non-trivial proper $G$-submodules.


Proof
Necessary Condition
Aiming for a contradiction, suppose that $V$ is an irreducible $G$-module, but it has a non-trivial proper $G$-submodule.
By the definition irreducible, its associated representation is irreducible.
Let this representation be denoted:

$\tilde \phi = \rho: G \to \GL V$
In Correspondence between Linear Group Actions and Linear Representations it is defined as:

$\map {\map \rho g} v = \map \phi {g, v}$
where $g \in G$ and $v \in V$.
Since $V$ has a proper $G$-submodule, there exists $W$ a non-trivial proper vector subspace such that:

$\phi \sqbrk {G, W} \subseteq W$
and so:
$\rho \sqbrk G W \subseteq W$
Hence $W$ is invariant by every linear operators in $\set {\map \rho g: g \in G}$.
By definition, $\rho$ cannot be irreducible.
Thus we have reached a contradiction, and $V$ has then no non-trivial  proper $G$-submodules.
$\Box$


Sufficient Condition
Aiming for a contradiction, suppose now that $V$ has no proper $G$-submodules, but it is a reducible $G$-module.
By the definition of reducible $G$-module, it follow that its associated representation is reducible.
Let this representation be denoted:

$\tilde \phi = \rho: G \to \GL V$
From the definition of reducible representation, it follows that there exists a vector space $W$ of $V$.
This is invariant under all the linear operators in $\set {\map \rho g: g \in G}$.


This article, or a section of it, needs explaining.In particular: Why is it invariant?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\phi \sqbrk {G, W} = \rho \sqbrk G  W \subseteq W$
which is the definition of a $G$-submodule of $V$.
By our assumption, $V$ has no non-trivial proper $G$-submodules.
Thus we have reached a contradiction and $V$ must be then an irreducible $G$-module.
$\blacksquare$





