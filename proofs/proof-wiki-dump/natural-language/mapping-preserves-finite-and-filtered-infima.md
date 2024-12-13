# 

Source: https://proofwiki.org/wiki/Mapping_Preserves_Finite_and_Filtered_Infima

Theorem
Let $\struct {S_1, \preceq_1}$, $\struct {S_2, \preceq_2}$ be meet semilattices.
Let $f: S_1 \to S_2$ be a mapping.

Let $f$ preserve finite infima and preserve filtered infima.

Then $f$ also preserves all infima


Proof
Assume that

$(1): \quad f$ preserves finite infima
and

$(2): \quad f$ preserves filtered infima.
Let $X$ be a subset of $S_1$.
Let $X$ admits an infimum in $\struct {S_1, \preceq_1}$
Define $Z := \set {\inf A: A \in \map {\operatorname {Fin} } X \land A \ne \O}$
where

$\inf A$ denotes the infimum of $A$ in $\struct {S_1, \preceq_1}$
$\map {\operatorname {Fin} } X$ denotes the set of all finite subsets of $X$
By Existence of Non-Empty Finite Infima in Meet Semilattice:

for every non-empty finite subset $A$ of $X$, $A$ admits an infimum in $\struct {S_1, \preceq_1}$
By Infimum of Infima:

$\inf Z = \inf \bigcup \paren {\map {\operatorname {Fin} } X \setminus \set \O} = \inf X$
$Z$ admits an infimum in $\struct {S_1, \preceq_1}$
We will prove that

$Z$ is filtered
Let $x, y \in Z$.
By definition of $Z$:

$\exists A \in \map {\operatorname {Fin} } X \setminus \set \O: x = \inf A$
and

$\exists B \in \map {\operatorname {Fin} } X \setminus \set \O: y = \inf B$
By Finite Union of Finite Sets is Finite:

$A \cup B$ is finite
$A \cup B \ne \O$
By definition of $Z$:

$\map \inf {A \cup B} \in Z$
By Infimum of Infima:

$\inf A \wedge \inf B = \map \inf {A \cup B}$
Thus by definition of infimum:

$\map \inf {A \cup B} \preceq_1 x \land \map \inf {A \cup B} \preceq_1 y$
Thus by definition

$Z$ is filtered

By $(2)$ and definitions of mapping preserves filtered infima and mapping preserves infimum on subset:

$f^\to \sqbrk Z$ admits an infimum in $\struct {S_2, \preceq_2}$ and $\map \inf {f^\to \sqbrk Z} = \map f {\inf Z}$
We will prove that

$X \subseteq Z$
Let $x \in X$.
By definition of $\map {\operatorname {Fin} } X$:

$\set x \in \map {\operatorname {Fin} } X$ and $\set x \ne \O$
By definition of $Z$:

$\inf \set x \in Z$
Thus by Infimum of Singleton:

$x \in Z$

By Image of Subset under Mapping is Subset of Image:

$f^\to \sqbrk X \subseteq f^\to \sqbrk Z$
By definition of infimum:

$\map \inf {f^\to \sqbrk Z}$ is a lower bound for $f^\to \sqbrk Z$
By Lower Bound is Lower Bound for Subset

$\map \inf {f^\to \sqbrk Z}$ is a lower bound for $f^\to \sqbrk X$
We will prove that

for every lower bound $a$ for $f^\to \sqbrk X$, $a$ is lower bound for $f^\to \sqbrk Z$
Assume that

$a$ is lower bound for $f^\to \sqbrk X$
Let $x \in f^\to \sqbrk Z$.
By definition of image of set:

$\exists y \in S_1: y \in Z \land \map f y = x$
By definition of $Z$:

$\exists A \in \map {\operatorname {Fin} } X: y = \inf A \land A \ne \O$
By $(1)$ and definition of mapping preserves finite infima:

$f$ preserves the infimum of $A$
By Existence of Non-Empty Finite Infima in Meet Semilattice

$A$ admits an infimum in $\struct {S_1, \preceq_1}$ and $\map \inf {f^\to \sqbrk A} = \map f {\inf A} = x$
By Image of Subset under Mapping is Subset of Image:

$f^\to \sqbrk A \subseteq f^\to \sqbrk X$
By Lower Bound is Lower Bound for Subset

$a$ is lower bound for $f^\to \sqbrk A$
Thus by definition of infimum:

$a \preceq_2 x$
Thus by definition

$a$ is lower bound for $f^\to \sqbrk Z$

By definition of infimum:

for every lower bound $a$ for $f^\to \sqbrk X$, $a \preceq_2 \map f {\inf X}$
Again by definition of infimum:

$f^\to \sqbrk X$ admits an infimum in $\struct {S_2, \preceq_2}$
$\map \inf {f^\to \sqbrk X} = \map f {\inf X}$
Thus the result follows by definition of all infima preserving mapping.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:71




