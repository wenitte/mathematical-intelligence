# 

Source: https://proofwiki.org/wiki/Mapping_Preserves_Non-Empty_Infima_implies_Mapping_is_Continuous_in_Lower_Topological_Lattice

Theorem
Let $T = \struct {S, \preceq, \tau}$ and $Q = \struct {X, \preceq', \tau'}$ be complete topological lattices with lower topologies.
Let $f: S \to X$ be a mapping such that

for all non-empty subsets $Y$ of $S$: $f$ preserves the infimum of $Y$.

Then $f$ is continuous mapping.

Proof
Define $B = \set {\relcomp X {x^{\succeq'} }: x \in X}$
We will prove that

$\forall A \in B: f^{-1} \sqbrk {\relcomp X A}$ is closed.
Let $A \in B$.
By definition of $B$:

$\exists x \in X: A = \relcomp X {x^{\succeq'} }$
By Relative Complement of Relative Complement:

$\relcomp X A = x^{\succeq'}$
By Infimum of Upper Closure of Element:

$\map \inf {\relcomp X A} = x$
Suppose that the case: $f^{-1} \sqbrk {\relcomp X A} = \O$ holds.
Thus by Empty Set is Closed in Topological Space:

$f^{-1} \sqbrk {\relcomp X A}$ is closed.
$\Box$
Suppose that the case: $f^{-1} \sqbrk {\relcomp X A} \ne \O$ holds.
By assumption:

$f$ preserves the infimum of $f^{-1} \sqbrk {\relcomp X A}$
By definitions of mapping preserves the infimum and complete lattice:

$\map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } = \map \inf {f \sqbrk {f^{-1} \sqbrk {\relcomp X A} } }$
By Image of Preimage under Mapping:

$f \sqbrk {f^{-1} \sqbrk {\relcomp X A} } \subseteq x^{\succeq'}$
By Infimum of Subset and definition of complete lattice:

$x \preceq' \map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } }$
We will prove that

$f^{-1} \sqbrk {\relcomp X A} = \paren {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } }^\succeq$
Let $a \in f^{-1} \sqbrk {\relcomp X A}$.
By definitions of infimum and lower bound:

$\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } \preceq a$
By definition of upper closure of element:

$a \in \paren {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } }^\succeq$
$\Box$
Let $a \in \paren {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } }^\succeq$.
By assumption:

$f$ preserves the infimum of $\set {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } }, a}$
By definitions of mapping preserves the infimum and  complete lattice:

$\map f {\paren {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } \wedge a} = \map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } \wedge \map f a$
By definition of upper closure of element:

$\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } \preceq a$
By Meet Precedes Operands:

$\map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } = \map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } \wedge \map f a$
By Preceding iff Meet equals Less Operand:

$\map f {\map \inf {f^{-1} \sqbrk {x^{\succeq'} } } } \preceq' \map f a$
By definition of transitivity:

$x \preceq' \map f a$
By definition of upper closure of element:

$\map f a \in x^{\succeq'}$
Thus by definition of preimage of set:

$a \in f^{-1} \sqbrk {\relcomp X A}$
$\Box$
Thus by Complement of Upper Closure of Element is Open in Lower Topology:

$f^{-1} \sqbrk {\relcomp X A}$ is closed.
$\Box$
We will prove that

$\forall A \in B: f^{-1} \sqbrk A \in \tau$
Let $A \in B$.
Then by previous:

$f^{-1} \sqbrk {\relcomp X A}$ is closed.
By Complement of Preimage equals Preimage of Complement

$f^{-1} \sqbrk {\relcomp X A} = \relcomp S {f^{-1} \sqbrk A}$
Thus by definition of closed set

$f^{-1} \sqbrk A \in \tau$
$\Box$
Thus Continuity Test using Sub-Basis:

$f$ is continuous mapping.
$\blacksquare$


Sources
Mizar article WAYBEL19:8




