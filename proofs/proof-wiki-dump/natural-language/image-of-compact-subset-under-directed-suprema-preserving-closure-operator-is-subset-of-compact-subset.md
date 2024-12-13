# 

Source: https://proofwiki.org/wiki/Image_of_Compact_Subset_under_Directed_Suprema_Preserving_Closure_Operator_is_Subset_of_Compact_Subset

Theorem
Let $L = \struct {S, \preceq}$ be an algebric lattice.
Let $c: S \to S$ be a closure operator that preserves directed suprema.

Then:

$c \sqbrk {\map K L} \subseteq \map K {\struct {c \sqbrk S, \precsim} }$
where:

$\map K L$ denotes the compact subset of $L$
$c \sqbrk S$ denotes the image of $S$ under $c$
$\mathord \precsim = \mathord \preceq \cap \paren {c \sqbrk S \times \map c S}$


Proof
Let $x \in c \sqbrk {\map K L}$.
By definition of image of set:

$\exists y \in \map K L: x = \map c y$
and

$x \in c \sqbrk S$
By definition of compact subset:

$y$ is compact in $L$.
By definition of compact element:

$y \ll y$
where $\ll$ denotes the way below relation.
Define $P = \struct {c \sqbrk S, \precsim}$ as an ordered subset of $L$.
We will prove that:

for every directed subset $D$ of $c \sqbrk S$: $x \precsim \sup_P D \implies \exists d \in D: d \precsim x$
Let $D$ be a directed subset of $c \sqbrk S$.
By definition of ordered subset:

$D$ is directed in $L$.
By definition of algebraic ordered set:

$L$ is up-complete.
By definition of up-complete:

$D$ admits a supremum in $L$.













\(\ds \map c { {\sup}_L D}\)

\(=\)







\(\ds \map { {\sup}_L} {c \sqbrk D}\)





Definition of Mapping Preserves Supremum














\(\ds \)

\(=\)







\(\ds {\sup}_L D\)





Definition of Closure Operator



By definition of image of set:

$\sup_L D \in c \sqbrk S$
By Supremum in Ordered Subset:

$\sup_L D = \sup_P D$
By definition of ordered subset:

$x \preceq \sup_L D$
By definition of closure operator/inflationary:

$y \preceq x$
By definition of transitivity:

$y \preceq \sup_L D$
By definition of way below relation:

$\exists d \in D: y \preceq d$
By definition of subset:

$d \in c \sqbrk S$
By definition of closure operator/idempotent:

$d = \map c d$
By definition of closure operator/increasing:

$x = \map c y \preceq \map c d = d$
Thus by definition of ordered subset:

$\exists d \in D: x \precsim d$
$\Box$

By definition of way below relation:

$x \ll_P x$
By definition:

$x$ is a compact element in $P$.
Thus by definition of compact subset:

$x \in \map K P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:23




