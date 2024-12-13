# 

Source: https://proofwiki.org/wiki/Image_of_Compact_Subset_under_Directed_Suprema_Preserving_Closure_Operator

Theorem
Let $L = \struct {S, \preceq}$ be a bounded below algebric lattice.
Let $c: S \to S$ be a closure operator that preserves directed suprema.

Then:

$c \sqbrk {\map K L} = \map K {\struct {c \sqbrk S, \precsim} }$
where

$\map K L$ denotes the compact subset of $L$,
$c \sqbrk S$ denotes the image of $S$ under $c$,
$\mathord \precsim = \mathord \preceq \cap \paren {c \sqbrk S \times c \sqbrk S}$


Proof
We will prove that:

$\map K {\struct {c \sqbrk S, \precsim} } \subseteq c \sqbrk {\map K L}$
By Image of Compact Subset under Directed Suprema Preserving Closure Operator is Subset of Compact Subset:

$c \sqbrk {\map K L} \subseteq \map K {\struct {c \sqbrk S, \precsim} }$
Thus the result by definition of set equality.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:25




