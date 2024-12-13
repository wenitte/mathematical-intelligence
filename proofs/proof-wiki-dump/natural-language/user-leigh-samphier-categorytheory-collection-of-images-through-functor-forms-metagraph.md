# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/CategoryTheory/Collection_of_Images_through_Functor_forms_Metagraph


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf C \to \mathbf D$ be a functor.

Let $\mathbf B$ consist of:

the collection of objects $F X$ for each object $X$ of $\mathbf C$
the collection of morphisms $ F f$ for each morphism $f$ of $\mathbf C$

Then:

$\mathbf B$ is a metagraph with domains and codomains inherited from $\mathbf D$
Proof
Case: $F$ is a Covariant Functor
Let $F$ be covariant.

By definition of a covariant functor:

for each morphism $f: X \to Y$ of $\mathbf C$:
$F f$ is a morphism with domain $FX$ and codomain $FY$

The result follows.
$\Box$


Case: $F$ is a Contravariant Functor
Let $F$ be contravariant.

By definition of a contravariant functor:

for each morphism $f: X \to Y$ of $\mathbf C$:
$F f$ is a morphism with domain $FY$ and codomain $FX$

The result follows.
$\Box$

In either case $\mathbf B$ is a metagraph with domains and codomains inherited from $\mathbf D$
$\blacksquare$





