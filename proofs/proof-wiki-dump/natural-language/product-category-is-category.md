# 

Source: https://proofwiki.org/wiki/Product_Category_is_Category

Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Then the product category $\mathbf C \times \mathbf D$ is a metacategory.


Proof
Let $\left({X,Y}\right), \left({X',Y'}\right) \in \mathbf C \times \mathbf D$.
Let $\left({f,g}\right) : \left({X,Y}\right) \to \left({X',Y'}\right)$ and $\left({h,k}\right) : \left({X',Y'}\right) \to \left({X,Y}\right)$ be morphisms.
Let $\operatorname{id}_X$, $\operatorname{id}_Y$ be the identity morphisms for the objects $X$ and $Y$ respectively.

Then:














\(\ds \left({f, g}\right) \circ \left({\operatorname{id}_X, \operatorname{id}_Y}\right)\)

\(=\)







\(\ds \left({f \circ \operatorname{id}_X, g \circ \operatorname{id}_Y}\right)\)





By the definition of composition in the product category.














\(\ds \)

\(=\)







\(\ds \left({f, g}\right)\)





By the definition of the identity morphisms



Similarly:














\(\ds \left({\operatorname{id}_X, \operatorname{id}_Y}\right) \circ \left({h, k}\right)\)

\(=\)







\(\ds \left({\operatorname{id}_X \circ h, \operatorname{id}_Y \circ k}\right)\)





By the definition of composition in the product category.














\(\ds \)

\(=\)







\(\ds \left({h, k}\right)\)





By the definition of the identity morphisms



Therefore, $\left({\operatorname{id}_X, \operatorname{id}_Y}\right)$ satisfies the property of an identity morphism.

Let $\left({f, g}\right)$, $\left({h, k}\right)$ and $\left({\ell, m}\right)$ be composable morphisms of $\mathbf C \times \mathbf D$. We have:














\(\ds \left({ \left({f, g}\right) \circ \left({h, k}\right) }\right) \circ \left({\ell, m}\right)\)

\(=\)







\(\ds \left({f \circ h, g \circ k}\right) \circ \left({\ell, m}\right)\)





By the definition of composition in the product category.














\(\ds \)

\(=\)







\(\ds \left({ \left({f \circ h}\right) \circ \ell, \left({g \circ k}\right) \circ m}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({f \circ \left({h \circ \ell}\right), g \circ \left({k \circ m}\right) }\right)\)





By associativity of morphisms of $\mathbf C$ and $\mathbf D$.














\(\ds \)

\(=\)







\(\ds \left({f, g}\right) \circ \left({ \left({h, k}\right) \circ \left({\ell, m}\right) }\right)\)









Therefore, composition of morphisms in $\mathbf C \times \mathbf D$ is also associative.
$\blacksquare$





