# 

Source: https://proofwiki.org/wiki/Bijection_has_Left_and_Right_Inverse


This page has been identified as a candidate for refactoring of medium complexity.In particular: May want to include (or link to) this in Equivalence of Definitions of Bijection.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $f: S \to T$ be a bijection.
Let:

$I_S$ be the identity mapping on $S$
$I_T$ be the identity mapping on $T$.
Let $f^{-1}$ be the inverse of $f$.

Then:

$f^{-1} \circ f = I_S$
and:

$f \circ f^{-1} = I_T$
where $\circ$ denotes composition of mappings.


Proof 1
Let $f$ be a bijection.
Then it is both an injection and a surjection, thus both the described $g_1$ and $g_2$ must exist from Injection iff Left Inverse and Surjection iff Right Inverse.

The fact that $g_1 = g_2 = f^{-1}$ follows from Left and Right Inverses of Mapping are Inverse Mapping.
$\blacksquare$


Proof 2
Suppose $f$ is a bijection.
From Bijection iff Inverse is Bijection and Composite of Bijection with Inverse is Identity Mapping, it is shown that the inverse mapping $f^{-1}$ such that:

$f^{-1} \circ f = I_S$
$f \circ f^{-1} = I_T$
is a bijection.
$\blacksquare$


Proof 3
Let $f$ be a bijection.
By definition, $f$ is a mapping, and hence also by definition a relation.
Hence the result Bijective Relation has Left and Right Inverse applies directly and so:

$f^{-1} \circ f = I_S$
and

$f \circ f^{-1} = I_T$
$\blacksquare$





