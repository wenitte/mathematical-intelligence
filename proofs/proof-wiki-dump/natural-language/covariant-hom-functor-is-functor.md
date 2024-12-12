# 

Source: https://proofwiki.org/wiki/Covariant_Hom_Functor_is_Functor

Theorem
Let $\mathbf{Set}$ be the category of sets.
Let $\mathbf C$ be a locally small category.
Let $C \in \mathbf C_0$ be an object of $\mathbf C$.
Let $\operatorname{Hom}_\mathbf C \paren {C, \cdot}: \mathbf C \to \mathbf{Set}$ be the covariant hom functor based at $C$.

Then $\operatorname{Hom}_\mathbf C \paren {C, \cdot}$ is a functor.


Proof
For brevity and readability, let us write $\operatorname{Hom}$ for $\operatorname{Hom}_\mathbf C$.
For any object $D$ of $\mathbf C$ and morphism $f: C \to D \in \operatorname{Hom} \paren {C, D}$ we have:

$\operatorname{Hom} \paren {C, \operatorname{id}_D} \paren f = \operatorname{id}_D \circ f = f$
and so $\operatorname{Hom} \paren {C, \operatorname{id}_D} = \operatorname{id}_{\operatorname{Hom} \paren {C, D} }$.
Thus $\operatorname{Hom} \paren {C, \cdot}$ preserves identity morphisms.

For composable morphisms $g$ and $f$ of $\mathbf C$ we furthermore have:














\(\ds \operatorname{Hom} \paren {C, g \circ f} \paren x\)

\(=\)







\(\ds \paren {g \circ f} \circ x\)




















\(\ds \)

\(=\)







\(\ds g \circ \paren {f \circ x}\)





Composition of morphisms is associative














\(\ds \)

\(=\)







\(\ds \operatorname{Hom} \paren {C, g} \circ \operatorname{Hom} \paren {C, f} \paren x\)









for any $x \in \operatorname{Hom} \paren {C, \operatorname{dom} f}$ composable with $f$.
Hence the result, by Equality of Mappings.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 2.7$




