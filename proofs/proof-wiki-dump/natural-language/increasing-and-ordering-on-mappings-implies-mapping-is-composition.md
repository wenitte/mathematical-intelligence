# 

Source: https://proofwiki.org/wiki/Increasing_and_Ordering_on_Mappings_implies_Mapping_is_Composition

Theorem
Let $L = \struct {S, \preceq}, R = \struct {T, \preccurlyeq}$ be ordered sets.
Let $g: S \to T, d: T \to S$ be mappings such that

$g$ and $d$ are increasing mappings
and

$d \circ g \preceq I_S$ and $I_T \preccurlyeq g \circ d$
where $\preceq, \preccurlyeq$ denotes the orderings on mappings.

Then $d = d \circ \paren {g \circ d}$ and $g = \paren {g \circ d} \circ g$


Proof
Let $t \in T$.
By definition of ordering on mappings:

$\map {I_T} t \preccurlyeq \map {\paren {g \circ d} } t$
By definition of identity mapping:

$t \preccurlyeq \map {\paren {g \circ d} } t$
By definition of increasing mapping:

$\map d t \preceq \map d {\map {\paren {g \circ d} } t}$
By definition of composition of mappings:

$\map d t \preceq \map {\paren {d \circ \paren {g \circ d} } } t$
By definition of ordering on mappings:

$\map {\paren {d \circ g} } {\map d t} \preceq \map {I_S} {\map d t}$
By definition of identity mapping:

$\map {\paren {d \circ g} } {\map d t} \preceq \map d t$
By definition of composition of mappings:

$\map {\paren {\paren {d \circ g} \circ d} } t \preceq \map d t$
By Composition of Mappings is Associative:

$\map {\paren {d \circ \paren {g \circ d} } } t \preceq \map d t$
Thus by definition of antisymmetry:

$\map d t = \map {\paren {d \circ \paren {g \circ d} } } t$
$\Box$

Thus $g = \paren {g \circ d} \circ g$ holds by mutatis mutandis.
$\blacksquare$


Sources
Mizar article WAYBEL_1:20




