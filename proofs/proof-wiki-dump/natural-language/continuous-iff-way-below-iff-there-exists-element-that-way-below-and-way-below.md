# 

Source: https://proofwiki.org/wiki/Continuous_iff_Way_Below_iff_There_Exists_Element_that_Way_Below_and_Way_Below



Theorem
Let $\struct {S, \preceq_1, \tau_1}$ and $\struct {T, \preceq_2, \tau_2}$ be complete continuous topological lattices with Scott topologies.
Let $f: S \to T$ be a mapping.

Then $f$ is continuous if and only if

$\forall x \in S, y \in T: y \ll \map f x \iff \exists w \in S: w \ll x \land y \ll \map f w$

This article, or a section of it, needs explaining.In particular: link to definition of $\ll$ and $\gg$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Sufficient Condition
Assume that

$f$ is continuous.
By Continuous iff Directed Suprema Preserving:

$f$ preserves directed suprema.
By Directed Suprema Preserving Mapping at Element is Supremum:

$\forall x \in S: \map f x = \sup \set {\map f w: w \in S \land w \ll x}$
Thus by Mapping at Element is Supremum implies Way Below iff There Exists Element that Way Below and Way Below:

$\forall x \in S, y \in T: y \ll \map f x \iff \exists w \in S: w \ll x \land y \ll \map f w$
$\Box$


Necessary Condition
Assume that

$\forall x \in S, y \in T: y \ll \map f x \iff \exists w \in S: w \ll x \land y \ll \map f w$
Let $U$ be an open subset of $T$.
By definition of Scott topology:

$U$ is upper.
By definition of interior:

$\paren {f^{-1} \sqbrk U}^\circ \subseteq f^{-1} \sqbrk U$
We will prove that

$f^{-1} \sqbrk U \subseteq \paren {f^{-1} \sqbrk U}^\circ$
Let $x \in f^{-1} \sqbrk U$
By definition of preimage of set:

$p := \map f x \in U$
By Open implies There Exists Way Below Element:

$\exists u \in T: u \ll p \land u \in U$
By assumption:

$\exists w \in S: w \ll x \land u \ll \map f w$
We will prove that

$f \sqbrk {w^\gg} \subseteq U$
Let $h \in f \sqbrk {w^\gg}$
By definition of image of set:

$\exists z \in w^\gg: h = \map f z$
By definition of way above closure:

$w \ll z$
By assumption:

$u \ll h$
By Way Below implies Preceding:

$u \preceq_2 h$
Thus by definition of upper section:

$h \in U$
$\Box$

By Preimage of Subset is Subset of Preimage:

$f^{-1} \sqbrk {f \sqbrk {w^\gg} } \subseteq f^{-1} \sqbrk U$
By Preimage of Image under Left-Total Relation is Superset:

$w^\gg \subseteq \paren {f^{-1} \circ f} \sqbrk {w^\gg}$
By definition of composition of relations:

$w^\gg \subseteq f^{-1} \sqbrk {f \sqbrk {w^\gg} }$
By Subset Relation is Transitive:

$w^\gg \subseteq f^{-1} \sqbrk U$
By Interior is Union of Way Above Closures:

$\paren {f^{-1} \sqbrk U}^\circ = \bigcup \set {g^\gg: g \in S \land g^\gg \subseteq f^{-1} \sqbrk U}$
By definition of way above closure:

$x \in w^\gg$
We have:

$w^\gg \in \set {g^\gg: g \in S \land g^\gg \subseteq f^{-1} \sqbrk U}$
Thus by definition of union:

$x \in \paren {f^{-1} \sqbrk U}^\circ$
$\Box$

By definition of set equality:

$\paren {f^{-1} \sqbrk U}^\circ = f^{-1} \sqbrk U$
Thus by definition of interior:

$f^{-1} \sqbrk U$ is open.
Hence $f$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:23




