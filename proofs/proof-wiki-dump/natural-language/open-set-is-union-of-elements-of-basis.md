# 

Source: https://proofwiki.org/wiki/Open_Set_is_Union_of_Elements_of_Basis


It has been suggested that this page or section be merged into Union from Synthetic Basis is Topology.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Beware that the above refers to synthetic, this to analytic, but there should be the basis the extraction of this result from the above and putting it into a multiproof theorem / lemma.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $B$ be a basis of $T$.
Let $V$ be an open subset of $S$.

Then $V = \bigcup \set {G \in B: G \subseteq V}$


Proof
Let $x$ be arbitrary.
We will prove that:

$x \in V \implies \exists Y \in \set {G \in B: G \subseteq V}: x \in Y$
Assume that:

$x \in V$
By definition of basis:

$\exists F \subseteq B: V = \bigcup F$
By definition of union:

$\exists Y \in F: x \in Y$
By Set is Subset of Union/General Result:

$Y \subseteq V$
Thus by definition of subset:

$Y \in \set {G \in B: G \subseteq V}$
Thus:

$x \in Y$
$\Box$

Assume that:

$\exists Y \in \set {G \in B: G \subseteq V}: x \in Y$
By assumption:

$Y \subseteq V$
Thus by definition of subset:

$x \in V$
Hence by definition of union:

$V = \bigcup \set {G \in B: G \subseteq V}$
$\blacksquare$


Sources
Mizar article YELLOW_8:9




