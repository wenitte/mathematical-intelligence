# 

Source: https://proofwiki.org/wiki/Composition_of_Commuting_Idempotent_Mappings_is_Idempotent

Theorem
Let $S$ be a set.
Let $f, g: S \to S$ be idempotent mappings from $S$ to $S$.
Let:

$f \circ g = g \circ f$
where $\circ$ denotes composition.

Then $f \circ g$ is idempotent.


Proof 1













\(\ds \paren {f \circ g} \circ \paren {f \circ g}\)

\(=\)







\(\ds f \circ \paren {g \circ f} \circ g\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds f \circ \paren {f \circ g} \circ g\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {f \circ f} \circ \paren {g \circ g}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds f \circ g\)





$f$ and $g$ are idempotent by hypothesis



$\blacksquare$


Proof 2
By Set of all Self-Maps under Composition forms Semigroup, the set of all self-maps on $S$ forms a semigroup under composition.
The result follows from Product of Commuting Idempotent Elements is Idempotent.
$\blacksquare$





