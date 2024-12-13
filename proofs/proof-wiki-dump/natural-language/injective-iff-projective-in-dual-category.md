# 

Source: https://proofwiki.org/wiki/Injective_iff_Projective_in_Dual_Category



Theorem
Let $\mathbf A$ be an abelian category.
Let $X$ be an object in $\mathbf A$.

Then:

$X$ is injective in $\mathbf A$
if and only if:

$X$ is projective in the dual category $\mathbf A^{\mathrm{op}}$ of $\mathbf A$.


Proof
Sufficient Condition
Let $X$ be injective in $\mathbf A$.
Let $f : B \to A$ be an epimorphism in $\mathbf A^{\mathrm {op} }$.
By Monomorphism iff Epimorphism in Dual Category:

$f : A \to B$ is a monomorphism in $\mathbf A$.
By definition of injective object, the mapping:

$\alpha: \map {\mathrm {Hom}_{\mathbf A} } {B, X} \to \map {\mathrm {Hom}_{\mathbf A} } {A, X}, \quad g \mapsto g \circ f$
is surjective.


This article, or a section of it, needs explaining.In particular: The notation $\map {\mathrm {Hom}_{\mathbf A} } {A, X}$ needs to be explained. The objective of $\mathsf{Pr} \infty \mathsf{fWiki}$ is for people unfamiliar with the subject matter to be able to understand a given page by referring back to pages that define all concepts invoked on that page. It is better to write a line defining exactly what $\alpha$ is in terms of its domain and range.
I added a sentence about the Hom set. Technically it is the Hom functor but it maybe would be overkill to refer to it in the text, since i don't need functoriality, so i added an also see-link. --Wandynsky (talk) 09:44, 28 July 2021 (UTC)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
In the above, $\map {\mathrm {Hom}_{\mathbf A} } {B, X}$ is the set of morphisms in $\mathbf A$ from $B$ to $X$, and $g$ is an arbitrary element of the domain of $\alpha$.
Further, by definition of dual category:

$\map {\mathrm {Hom}_{\mathbf A^{\mathrm {op} } } } {X, B} = \map {\mathrm {Hom}_{\mathbf A} } {B, X}$
$\map {\mathrm {Hom}_{\mathbf A^{\mathrm {op} } } } {X, A} = \map {\mathrm {Hom}_{\mathbf A} } {A, X}$
So:

$\alpha : \map {\mathrm {Hom}_{\mathbf A^{\mathrm {op} } } } {X, B} \to \map {\mathrm {Hom}_{\mathbf A^{\mathrm {op} } } } {X, A}, \quad g \mapsto g \circ f = f \circ_{\mathbf A^{\mathrm{op}}} g$
is surjective.
In the above, $\circ_{\mathbf A^{\mathrm{op}}}$ denotes composition in $\mathbf A^{\mathrm {op} }$.
By definition of projective object, $X$ is projective in $\mathbf A^{\mathrm {op} }$.
$\Box$


Necessary Condition

This article, or a section of it, needs explaining.In particular: What's $g$?
It is an element of the domain of $\alpha$, which is specified. I don't think further explanation is necessary, $g$ is only used to make precise what $\alpha$ is. --Wandynsky (talk) 08:25, 28 July 2021 (UTC)
On the contrary. The notation itself is poor, and it is far from clear what is being explained. 
I decided to do both directions separately. Is it better now? --Wandynsky (talk) 08:56, 28 July 2021 (UTC)

Yes it is. Please note that the page structure as I have restructured it is the way an iff proof is, by preference, presented on ProofWiki.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\blacksquare$


Also see
Dual Category of Abelian Category is Abelian
Definition:Hom Functor




