# 

Source: https://proofwiki.org/wiki/Pointwise_Operation_is_Composite_of_Operation_with_Mapping_to_Cartesian_Product

Theorem
Let $S$ be a set.
Let $\struct {T, *}$ be an algebraic structure.
Let $T^S$ be the set of all mappings from $S$ to $T$.
Let the algebraic structure $\struct {T^S, \oplus}$ be the algebraic structure on $T^S$ induced by $*$.
Let $f, g \in T^S$, that is, let $f: S \to T$ and $g: S \to T$ be mappings.
Let $f \times g : S \to T \times T$ be the mapping from $S$ to the cartesian product $T \times T$ defined by:

$\forall x \in S : \map {\paren {f \times g}} x = \tuple {\map f x, \map g x}$

Then:

$f \oplus g = * \circ \paren {f \times g}$

That is, $f \oplus g$ is the composition of the binary operation $*$ with the mapping $f \times g: S \to T \times T$.


Proof









\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {* \circ \paren {f \times g} } } x\)

\(=\)







\(\ds \map * {\map {\paren {f \times g} } x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map * {\tuple {\map f x, \map g x} }\)





Definition of $f \times g$














\(\ds \)

\(=\)







\(\ds \map f x * \map g x\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \map {\paren {f \oplus g} } x\)





Definition of $f \oplus g$



From Equality of Mappings:

$* \circ \paren {f \times g} = f \oplus g$
$\blacksquare$





