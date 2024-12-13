# 

Source: https://proofwiki.org/wiki/Product_Functor_is_Functor

Definition
Let $\mathbf C$ be a metacategory with binary products.
Let $\mathbf C \times \mathbf C$ be the product category of $\mathbf C$ with itself.

Let $\times: \mathbf C \times \mathbf C \to \mathbf C$ be the product functor.

Then $\times$ is a functor.


Proof
For any pair of objects $\tuple {C, D}$:














\(\ds \map \times {\operatorname{id}_{\tuple {C, D} } }\)

\(=\)







\(\ds \map \times {\operatorname{id}_C, \operatorname{id}_D}\)





Definition of $\operatorname{id}_{\left({C, D}\right)}$














\(\ds \)

\(=\)







\(\ds \operatorname{id}_C \times \operatorname{id}_D\)





Definition of Product Functor














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\paren {C \mathop \times D} }\)





Identity Morphism of Product



Thus $\times$ preserves identity morphisms.

For composable morphisms $\tuple {f, f'}$ and $\tuple {g, g'}$ of $\mathbf C \times \mathbf C$:














\(\ds \map \times {\tuple {g, g'} \circ \tuple {f, f'} }\)

\(=\)







\(\ds \map \times {g \circ f, g' \circ f'}\)





Definition of $\circ$ in a product category














\(\ds \)

\(=\)







\(\ds \paren {g \circ f} \times \paren {g' \circ f'}\)





Definition of Product Functor














\(\ds \)

\(=\)







\(\ds \paren {g \times g'} \circ \paren {f \times f'}\)





Product of Composite Morphisms














\(\ds \)

\(=\)







\(\ds \map \times {g, g'} \circ \map \times {f, f'}\)





Definition of Product Functor




Hence $\times$ is a functor.
$\blacksquare$





