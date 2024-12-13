# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/CategoryTheory/Embedding_Functor_Induces_Isomorphism_to_Subcategory


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf C$ and $\mathbf D$ be categories.
Let $F: \mathbf C \to \mathbf D$ be an embedding of categories.

Let $\mathbf B$ be the subcategory of $\mathbf D$ consisting of:

the collection of objects $F C$ for each object $C$ of $\mathbf C$
the collection of morphisms $F f$ for each morphism $f$ of $\mathbf C$
with composition and identity morphisms inherited from $\mathbf D$.

Then:

$\mathbf C$ is isomorphic to $\mathbf B$ with isomorphism $G: \mathbf C \to \mathbf B$ defined by:









Object functor:   



\(\ds G C = F C \)   







  for each object $C$ of $\mathbf C$








Morphism functor:   



\(\ds G f = F f \)   







  for each morphism $f$ of $\mathbf C$

Proof
By definition of embedding:

$F$ is faithful
and:

$F$ is injective on objects

From User:Leigh.Samphier/CategoryTheory/Images through Injective on Objects Functor forms Subcategory:

$\mathbf B$ is a subcategory of $\mathbf D$


$G$ is a Functor
$G$ Arrow Functor Preserves Composition
$\Box$


$G$ Arrow Functor Preserves Identity Morphisms
$\Box$

It follows that $G$ is a functor.
$\Box$

Let $H : \mathbf B \to \mathbf C$ be defined by:










Object functor:   



\(\ds H B = C : F C = B \)   







  for each object $B$ of $\mathbf B$








Morphism functor:   



\(\ds H g = f : F g = f \)   







  for each morphism $g$ of $\mathbf B$



$H$ is a Functor
$H$ Object Functor is Well-defined
$\Box$


$H$ Morphism Functor is Well-defined
$\Box$


$H$ Arrow Functor Preserves Composition
$\Box$


$H$ Arrow Functor Preserves Identity Morphisms
$\Box$

It follows that $G$ is a functor.
$\Box$


$H G = I_{\mathbf C}$
$\Box$


$G H = I_{\mathbf B}$
$\Box$

It follows that $G : \mathbf C \to \mathbf B$ is an isomorphism of categories
$\blacksquare$





