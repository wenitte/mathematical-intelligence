# 

Source: https://proofwiki.org/wiki/Continuous_iff_Mapping_at_Element_is_Supremum_of_Compact_Elements



Theorem
Let $L = \struct {S, \preceq_1, \tau_1}$ and $R = \struct {T, \preceq_2, \tau_2}$ be complete algebraic topological lattices with Scott topologies.
Let $f: S \to T$ be a mapping.

Then $f$ is continuous if and only if:

$\forall x \in S: \map f x = \sup \leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset {}$


Proof
By Algebraic iff Continuous and For Every Way Below Exists Compact Between:

$L$ and $R$ are continuous.


Sufficient Condition
Assume that:

$f$ is continuous.
By Continuous iff Mapping at Element is Supremum:

$\forall x \in S: \map f x = \sup \set {\map f w: w \in S \land w \ll x}$
Let $x \in S$.
By definitions of image of set and compact closure:

$\leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset {} = f \sqbrk {x^{\mathrm{compact} } }$
By Compact Closure is Directed:

$D := x^{\mathrm{compact} }$ is directed.
By Continuous iff Directed Suprema Preserving:

$f$ preserves directed suprema.
By definition of mapping preserves directed suprema:

$f$ preserves the supremum of $D$.
By definition of complete lattice:

$D$ admits a supremum.
By definition of algebraic:

$L$ satisfies the axiom of $K$-approximation.
Thus














\(\ds \map f x\)

\(=\)







\(\ds \map f {\sup D}\)





Axiom of $K$-Approximation














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk D}\)





Definition of Mapping Preserves Supremum of Subset














\(\ds \)

\(=\)







\(\ds \sup \set {\map f w: w \in S \land w \preceq_1 x \land w \text { is compact} }\)









$\Box$


Necessary Condition
Assume that

$\forall x \in S: \map f x = \sup \leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset{}$
By Mapping at Element is Supremum of Compact Elements implies Mapping at Element is Supremum that Way Below:

$\forall x \in S: \map f x = \sup \set {\map f w: w \in S \land w \ll x}$
Thus by Continuous iff Mapping at Element is Supremum:

$f$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:28




