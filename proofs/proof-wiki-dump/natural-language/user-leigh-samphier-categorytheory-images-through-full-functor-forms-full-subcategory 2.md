# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/CategoryTheory/Images_through_Full_Functor_forms_Full_Subcategory


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ be a full functor.

Let $\mathbf B$ be the metagraph consisting of:

the collection of objects $\map F X$ for each object $X$ of $\mathbf C$
the collection of morphisms $\map F f$ for each morphism $f$ of $\mathbf C$

Then:

$\mathbf B$ with composition and identity morphisms inherited from $\mathbf D$ is a full subcategory of $\mathbf D$
Proof
From User:Leigh.Samphier/CategoryTheory/Collection of Images through Functor forms Metagraph:

$\mathbf B$ is a metagraph with domains and codomains inherited from $\mathbf D$

By definition of full functor:

$F$ is covariant
and

for all objects $X, Y$ of $\mathbf C$:
$F: \map {\operatorname{Hom}_{\mathbf C} } {X, Y} \to \map {\operatorname{Hom}_{\mathbf D} } {F X, F Y}, \ f \mapsto F f$ is a surjection.


$\mathbf B$ is a Subcategory
Let $f : X \to Y$ and $g : W \to Z$ be a pair of morphisms:

$F f : F X \to F Y$ is composable with $F g : F W \to F Z$ in $\mathbf D$.

By definition of composable morphisms:

$Fg \circ F f$ is in $\map {\operatorname{Hom}_{\mathbf D} } {F X, F Z}$
By definition of a full functor:

there is $h : X \to Z$ in $\map {\operatorname{Hom}_{\mathbf C} } {X, Z}$ such that $F h = F g \circ F f$
Hence:

$Fg \circ F f$ is in $\mathbf B$

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


$\mathbf B$ is a Full Subcategory
Consider the inclusion functor $i: \mathbf B \to \mathbf D$.

Let $X, Y$ be objects of $\mathbf C$.
Let $h : F X \to F Y$ be a morphism of $\mathbf D$.

By definition of full functor:

there is $f : X \to Y$ in $\map {\operatorname{Hom}_{\mathbf C} } {X, Y}$ such that $F f = h$
Hence:

$h$ is in $\mathbf B$

It follows that:

for all objects $X, Y$ of $\mathbf C$:
$i: \map {\operatorname{Hom}_{\mathbf B} } {F X, F Y} \to \map {\operatorname{Hom}_{\mathbf D} } {F X, F Y}, \ h \mapsto h$ is a surjection.

Hence:

$i : \mathbf B \to \mathbf D$ is a full functor by definition
and

$\mathbf B$ is a full subcategory by definition
$\blacksquare$





