# 

Source: https://proofwiki.org/wiki/Lattice_Ordering/Examples/Ancestry

Example of Ordering which is not Lattice Ordering
Recall the partial ordering on the set of people:
Let $P$ denote the set of all people who have ever lived.
Let $\DD$ denote the relation on $P$ defined as:

$a \mathrel \DD b$ if and only if $a$ is a descendant of or the same person as $b$.

Its dual $\DD^{-1}$ is defined as:

$a \mathrel {\DD^{-1} } b$ if and only if $a$ is an ancestor of or the same person as $b$.

Then $\DD$ and $\DD^{-1}$ are partial orderings on $P$.

$D$ is not a lattice ordering.


Proof
Let $a$ and $b$ be siblings.
Let $f$ and $m$ denote the father and mother of both $a$ and $b$.
Then both $f$ and $m$ are an upper bound of $\set {a, b}$.
But it is not necessarily the case that $f$ and $m$ share a common ancestor, unless you grant that either:

every two people are somehow descended from the same proto-ancestor, maybe just the first single self-replicating chemical system that may be classified as life
or:

both $f$ and $m$ are descended from Adam and Eve, and Eve of course is a descendant of Adam as she came from one of his ribs.

But be that as it may, consider the set:

$S = \set {\text {President Buchanan}, \text {President Arthur} }$
Then as $\text {President Buchanan}$ never married and so had no descendants, $S$ has no lower bounds.
Hence $\set {\text {President Buchanan}, \text {President Arthur} }$ has no imfimum.
Hence, by definition, $D$ is not a lattice ordering. 
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Example $14.1$




