# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/CategoryTheory/Images_through_Injective_on_Objects_Functor_forms_Subcategory


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ be a injective on objects  functor.

Let $\mathbf B$ be the metagraph consisting of:

the collection of objects $\map F X$ for each object $X$ of $\mathbf C$
the collection of morphisms $\map F f$ for each morphism $f$ of $\mathbf C$

Then:

$\mathbf B$ with composition and identity morphisms inherited from $\mathbf D$ is a subcategory of $\mathbf D$
Proof
From User:Leigh.Samphier/CategoryTheory/Collection of Images through Functor forms Metagraph:

$\mathbf B$ is a metagraph with domains and codomains inherited from $\mathbf D$
Case: $F$ is a Covariant Functor
Let $F$ be covariant.

Let $f : X \to Y$ and $g : W \to Z$ be a pair of morphisms:

$Ff : FX \to FY$ is composable with $Fg : FW \to FZ$ in $\mathbf D$.

By definition of composable morphisms:

$FY = FW$
By definition of injective on objects:

$Y = W$

By definition of a metacategory:

$f : X \to Y$ is composable with $g : Y \to Z$ in $\mathbf C$

By definition of covariant functor:

$Fg \circ Ff = \map F {gof}$

Hence:

$\mathbf B$ has composition inherited from $\mathbf D$

For each object $X$ of $\mathbf C$ we have:














\(\ds \operatorname{id}_{F X}\)

\(=\)







\(\ds \map F {\operatorname {id}_X}\)





Definition of Covariant Functor



Hence:

$\mathbf B$ has identity morphisms inherited from $\mathbf D$

It follows that:

$\mathbf B$ with composition and identity morphisms inherited from $\mathbf D$ is a subcategory of $\mathbf D$ by definition.
$\Box$


Case: $F$ is a Contravariant Functor
Let $F$ be contravariant.

Let $f : X \to Y$ and $g : W \to Z$ be a pair of morphisms:

$Fg : FZ \to FW$ is composable with $Ff : FY \to FX$ in $\mathbf D$.

By definition of composable morphisms:

$FW = FY$
By definition of injective on objects:

$W = Y$

By definition of a metacategory:

$f : X \to Y$ is composable with $g : Y \to Z$ in $\mathbf C$

By definition of contravariant functor:

$Ff \circ Fg = \map F {gof}$

Hence:

$\mathbf B$ has composition inherited from $\mathbf D$

For each object $X$ of $\mathbf C$ we have:














\(\ds \operatorname{id}_{F X}\)

\(=\)







\(\ds \map F {\operatorname {id}_X}\)





Definition of Covariant Functor



Hence:

$\mathbf B$ has identity morphisms inherited from $\mathbf D$

It follows that:

$\mathbf B$ with composition and identity morphisms inherited from $\mathbf D$ is a subcategory of $\mathbf D$ by definition.
$\Box$

In either case:

$\mathbf B$ with composition and identity morphisms inherited from $\mathbf D$ is a subcategory of $\mathbf D$
$\blacksquare$





