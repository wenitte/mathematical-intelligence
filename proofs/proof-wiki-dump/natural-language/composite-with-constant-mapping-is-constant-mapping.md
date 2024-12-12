# 

Source: https://proofwiki.org/wiki/Composite_with_Constant_Mapping_is_Constant_Mapping

Theorem
Let $f_c: S \to T$ be the constant mapping defined as:

$\forall x \in S: \map {f_c} x = c$
where $c \in T$.

Then for all mappings $g: \Dom g \to S$:

$f_c \circ g$ is a constant mapping
and for all mappings $h: T \to \Cdm h$:

$h \circ f_c$ is a constant mapping
where:

$\Dom g$ denotes the domain of $g$
$\Cdm h$ denotes the codomain of $h$
$\circ$ denotes composition of mappings.


Proof









\(\ds \forall x \in \Dom g: \, \)



\(\ds \map {\paren {f_c \circ g} } x\)

\(=\)







\(\ds \map {f_c} {\map g x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds c\)





Definition of Constant Mapping



$\Box$











\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {h \circ f_c} } x\)

\(=\)







\(\ds \map h {\map {f_c} x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map h c\)





Definition of Constant Mapping



As $c$ is constant, so is $\map h c$.
$\blacksquare$





