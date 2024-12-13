# 

Source: https://proofwiki.org/wiki/Mapping_Assigning_to_Element_Its_Compact_Closure_Preserves_Infima_and_Directed_Suprema

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below algebraic lattice.
Let $C = \struct {\map K L, \preceq'}$ be an ordered subset of $L$
where $\map K L$ denotes the compact subset of $L$.
Let $P = \struct {\powerset {\map K L}, \precsim}$ be an inclusion ordered set of power set of $\map K L$.

Then there exists $f: S \to \powerset {\map K L}$ such that $f$ preserves infima and directed suprema and is an injection and $\forall x \in S: \map f x = x^{\mathrm{compact} }$
where $x^{\mathrm{compact} }$ denotes the compact closure of $x$.


Proof
By definitions of compact subset, compact closure, and subset:

$\forall x \in S: x^{\mathrm{compact} } \subseteq \map K L$
By definition of power set:

$\forall x \in S: x^{\mathrm{compact} } \in \powerset {\map K L}$
Define a mapping $f:S \to \powerset {\map K L}$ such that:

$\forall x \in S: \map f x = x^{\mathrm{compact} }$
By Compact Closure is Directed:

$\forall x \in S: x^{\mathrm{compact} }$ is directed.
By definition of ordered subset:

$\forall x \in S: x^{\mathrm{compact} }$ is directed in $C$.
We will prove that

$\forall x \in S: x^{\mathrm{compact} }$ is a lower section in $C$.
Let $x \in S$.
Let $y \in x^{\mathrm{compact} }, z \in \map K L$ such that:

$z \preceq y$
By definition of compact closure:

$y \preceq x$
By definition of transitivity:

$z \preceq x$
By definition of compact subset:

$z$ is compact.
Thus by definition of compact closure:

$z \in x^{\mathrm{compact} }$
$\Box$

By Bottom in Compact Closure:

$\forall x \in S: \bot_L \in x^{\mathrm{compact} }$
where $\bot_L$ denotes the bottom in $L$.
By definition:

$\forall x \in S: x^{\mathrm{compact} }$ is non-empty.
By definition of ideal in ordered set:

$\forall x \in S: x^{\mathrm{compact} } \in \map {\operatorname{Ids} } C$
where $\map {\operatorname{Ids} } C$ denotes the set of all ideals in $C$.
Then

$f: S \to \map {\operatorname{Ids} } C$
Define $I = \struct {\map {\operatorname{Ids} } C, \precsim'}$ as an inclusion ordered set.
By definitions of $\operatorname{Ids}$ and power set:

$\map {\operatorname{Ids} } C \subseteq \powerset {\map K L}$
By Mapping Assigning to Element Its Compact Closure is Order Isomorphism:

$f$ is order isomorphism between $L$ and $I$.
By Bottom in Compact Subset and Compact Subset is Join Subsemilattice:

$C$ is bounded below join semilattice.
By Ideals are Continuous Lattice Subframe of Power Set:

$I$ is a continuous lattice subframe of $P$.
By Power Set is Complete Lattice:

$P$ is a complete lattice.
By Order Isomorphism Preserves Infima and Suprema:

$f: S \to \map {\operatorname{Ids} } C$ preserves infima
and

$f: S \to \map {\operatorname{Ids} } C$ preserves suprema.
Thus by Extension of Infima Preserving Mapping to Complete Lattice Preserves Infima:

$f: S \to \powerset {\map K L}$ preserves infima.
By definition:

$f: S \to \map {\operatorname{Ids} } C$ preserves directed suprema.
Thus by Extension of Directed Suprema Preserving Mapping to Complete Lattice Preserves Directed Suprema:

$f: S \to \powerset {\map K L}$ preserves directed suprema.
By definition of order isomorphism:

$f: S \to \map {\operatorname{Ids} } C$ is a bijection.
By definition of bijection:

$f: S \to \map {\operatorname{Ids} } C$ is an injection.
Thus by definition of injection:

$f: S \to \powerset {\map K L}$ is an injection.
Thus

$\forall x \in S: \map f x = x^{\mathrm{compact} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:24




