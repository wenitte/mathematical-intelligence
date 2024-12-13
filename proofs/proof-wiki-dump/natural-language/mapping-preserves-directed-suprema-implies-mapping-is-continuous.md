# 

Source: https://proofwiki.org/wiki/Mapping_Preserves_Directed_Suprema_implies_Mapping_is_Continuous

Theorem
Let $\struct {S, \preceq_1, \tau_1}$ and $\struct {T, \preceq_2, \tau_2}$ be up-complete ordered sets with Scott topologies.
Let $f: S \to T$ be a directed suprema preserving mapping.

Then $f$ is continuous.


Proof
Let $P$ be a closed subset of $T$.
By Closed Set iff Lower and Closed under Directed Suprema in Scott Topological Ordered Set:

$P$ is lower and closed under directed suprema.
We will prove that

for all directed subset $D$ of $S$: $D \subseteq f^{-1} \sqbrk P \implies \sup D \in f^{-1} \sqbrk P$
Let $D$ be a directed subset of $S$ such that

$D \subseteq f^{-1} \sqbrk P$
By definition of mapping preserves directed suprema:

$f$ preserves the supremum of $D$.
By definition of up-complete:

$D$ admits a supremum.
By definition of mapping preserves the supremum:

$\map \sup {f \sqbrk D} = \map f {\sup D}$
By Directed Suprema Preserving Mapping is Increasing:

$f$ is increasing.
By Image of Directed Subset under Increasing Mapping is Directed:

$f \sqbrk D$ is directed.
By Preimage is Subset of Set implies Image of Set is Subset:

$f \sqbrk D \subseteq P$
By definition of closed under directed suprema:

$\map \sup {f \sqbrk D} \in P$
Thus by definition of preimage of set:

$\sup D \in f^{-1} \sqbrk P$
$\Box$

By definition:

$f^{-1} \sqbrk P$ is closed under directed suprema.
By Preimage of Lower Section under Increasing Mapping is Lower:

$f^{-1} \sqbrk P$ is lower.
Thus by Closed Set iff Lower and Closed under Directed Suprema in Scott Topological Ordered Set:

$f^{-1} \sqbrk P$ is closed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:29




