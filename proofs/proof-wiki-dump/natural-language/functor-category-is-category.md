# 

Source: https://proofwiki.org/wiki/Functor_Category_is_Category


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbf C$ and $\mathbf D$ be categories.
Then the functor category $\mathrm{Fun}(\mathbf C, \mathbf D)$ is a category.

Proof
We check the metacategory axioms.


The validity of the material on this page is questionable.In particular: Clearly this is a metacategory but is this really a category?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Composition (C1)
By Composite Of Natural Transformations is Natural Transformation composition of morphisms in $\map {\operatorname {Fun} } {\mathbf C, \mathbf D}$ is well-defined.
$\Box$

Existence of identity morphisms (C2)
Let $F$ be an object of $\map {\operatorname {Fun} } {\mathbf C, \mathbf D}$, that is a functor $F:

\mathbf C \to \mathbf D$
Define $\mathrm{id}_F : F \to F$ as the transformation, that assigns to every object $A$ of $\mathbf C$ the identity morphism $\operatorname {id}_{\map F A} : \map F A \to \map F A$.
Let $f : A \to B$ be a morphism in $\mathbf C$.
The diagram:

$\xymatrix{
\map F A \ar[r]^{\operatorname {id}_{\map F A} } \ar[d]^{\map F f} & F(A) \ar[d]^{\map F f} \\
\map F B \ar[r]^{\operatorname {id}_{\map F B} } & \map F B
}$
is commutative, since:

$\map F f = \operatorname {id}_{\map F B} \circ \map F f = \map F f \circ \operatorname {id}_{\map F A}$.
Hence $\operatorname {id}_F$ is a natural transformation.
Let $G: \mathbf C \to \mathbf D$ be a functor.
Let $\alpha: F \to G$ be a natural transformation.
For every object $A$ of $\mathbf C$, we have:

$\alpha_A \circ \operatorname {id}_{\map F A} = \alpha_A$, so $\alpha \circ \operatorname {id}_F = \alpha$
Let $H : \mathbf C \to \mathbf D$ be a functor.
Let $\beta : H \to F$ be a natural transformation.
For every object $A$ of $\mathbf C$, we have:

$\operatorname {id}_{\map F A} \circ \beta_A = \beta_A$, so $\operatorname {id}_F \circ \beta = \beta$
$\Box$

Associativity of composition (C3)
Let $F_1, F_2, F_3, F_4 : \mathbf C \to \mathbf D$ be functors.
Let $\alpha_1: F_1 \to F_2$, $\alpha_2: F_2 \to F_3$, $\alpha_3: F_3 \to F_4$ be natural transformations.
For every object $A$ of $\mathbf C$, we have morphisms:

$\alpha_{1, A}: \map {F_1} A \to \map {F_2} A$
$\alpha_{2, A}: \map {F_2} A \to \map {F_3} A$
$\alpha_{3, A}: \map {F_3} A \to \map {F_4} A$
By associativity of composition in $\mathbf D$:

$\paren {\alpha_{3, A} \circ \alpha_{2, A} } \circ \alpha_{1, A} = \alpha_{3, A} \circ \paren {\alpha_{2, A} \circ \alpha_{1, A} }$
The associativity:

$\paren {\alpha_3 \circ \alpha_2} \circ \alpha_1 = \alpha_3 \circ \paren {\alpha_2 \circ \alpha_1}$
follows.
$\Box$
$\blacksquare$





