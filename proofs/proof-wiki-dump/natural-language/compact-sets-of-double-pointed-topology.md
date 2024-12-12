# 

Source: https://proofwiki.org/wiki/Compact_Sets_of_Double_Pointed_Topology



Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $D$ be a doubleton endowed with the indiscrete topology.
Let $\struct {S \times D, \tau}$ be the double pointed topology on $S$.

Then $X \subseteq S \times D$ is compact in $\tau$ if and only if for some compact set $C$ of $\tau_S$:

$\map {\pr_1} X = C$
where $\pr_1$ denotes the first projection on $S \times D$.


Corollary
$\struct {S \times D, \tau}$ is compact if and only if $\struct {S, \tau_S}$ is compact.


Proof
Necessary Condition
Suppose that $X \subseteq S \times D$ is a compact set in $\vartheta$.
It is to be shown that $C = \map {\pr_1} X$ is compact in $\tau$.
This follows from Compactness Properties Preserved under Projection Mapping.
$\Box$


Sufficient Condition
Suppose $\map {\pr_1} X = C$ for some compact $C \subseteq S$.
Let $\UU$ be an open cover for $X$, that is:

$\ds \bigcup \UU \supseteq X$
By Open Sets of Double Pointed Topology, each $U \in \UU$ is of the form:

$U' \times D$
with $U'$ open in $\vartheta$; note that $U' = \map {\pr_1} U$.
By Cartesian Product Distributes over Union, it follows that:

$\ds \bigcup \UU = \paren {\bigcup_{U \mathop \in \UU} \map {\pr_1} U} \times D$
Since $X \subseteq \ds \bigcup \UU$, it follows by Image Preserves Subsets and Image of Union under Relation that:

$C = \map {\pr_1} X \subseteq \bigcup_{U \mathop \in \UU} \map {\pr_1} U$
showing that:

$\VV := \set {\map {\pr_1} U: U \in \UU}$
is an open cover for $C$.
Since $C$ is compact, we find a finite subcover $\VV'$ of $\VV$ such that:

$C \subseteq \ds \bigcup \VV'$

Finally, we will show that:

$\UU' := \set {V \times D: V \in \VV'} \subseteq \UU$
forms a finite subcover of $\UU$.
That is, that:

$X \subseteq \ds \bigcup \UU'$
So let $\tuple {s, d} \in X$.
By assumption on $X$, we have that $s \in C$, and since $\VV'$ is a open cover for $C$:

$\exists V \in \VV': s \in V$
It is immediate that $\tuple {s, d} \in V \times D$ by definition of Cartesian product.
Since $V \times D \in \UU'$, it follows by definition of set union that:

$\tuple {s, d} \in \ds \bigcup \UU'$
That is, $\UU'$ is a finite subcover for $X$, and hence $X$ is compact.
$\blacksquare$





