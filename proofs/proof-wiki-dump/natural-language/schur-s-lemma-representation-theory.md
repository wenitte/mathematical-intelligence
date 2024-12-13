# 

Source: https://proofwiki.org/wiki/Schur%27s_Lemma_(Representation_Theory)

This proof is about Schur's Lemma (Representation Theory). For other uses, see Schur's Lemma.



Theorem
Let $\struct {G, \cdot}$ be a finite group.
Let $V$ and $V'$ be two irreducible $G$-modules.
Let $f: V \to V'$ be a homomorphism of $G$-modules.
Then either:

$\map f v = 0$ for all $v \in V$
or:

$f$ is an isomorphism.


Corollary
Let $\struct {G, \cdot}$ be a finite group.
Let $\struct {V, \phi}$ be a $G$-module.
Let the underlying field $k$ of $V$ be algebraically closed.
Let:

$\map {\mathrm {End}_G} V := \leftset {f: V \to V: f}$ is a homomorphism of $G$-modules$\rightset {}$

Then:

$\map {\mathrm {End}_G} V$
is a field, with the same structure as $k$.


Proof
From Kernel is G-Module, $\map \ker f$ is a $G$-submodule of $V$.
From Image is G-Module, $\Img f$ is a $G$-submodule of $V'$.
By the definition of irreducible:

$\map \ker f = \set 0$
or:

$\map \ker f = V$

This article, or a section of it, needs explaining.In particular: Link to a result which shows this. While it does indeed follow from the definition, it would be useful to have a page directly demonstrating this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

If $\map \ker f = V$ then by definition:

$\map f v = 0$ for all $v \in V$

Let $\map \ker f = \set 0$.
Then from Linear Transformation is Injective iff Kernel Contains Only Zero:

$f$ is injective.

This article, or a section of it, needs explaining.In particular: Establish whether the above result (which discusses linear transformations on $R$-modules, not $G$ modules) can be directly applied. If so, amend its wording so as to make this clear.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It also follows that:

$\Img f = V'$

This article, or a section of it, needs explaining.In particular: Prove thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $f$ is surjective and injective.
Thus by definition $f$ is a bijection and thence an isomorphism.
$\blacksquare$


Source of Name
This entry was named for Issai Schur.





