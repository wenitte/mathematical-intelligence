# 

Source: https://proofwiki.org/wiki/Infinite_Cyclic_Group_is_Isomorphic_to_Integers



Theorem
Let $G$ be an infinite cyclic group.
Then $G$ is isomorphic to the additive group of integers: $G \cong \struct {\Z, +}$.


Corollary
All infinite cyclic groups are isomorphic.
That is, up to isomorphism, there is only one infinite cyclic group.


Proof
From the definition of an infinite cyclic group, we have:

$G = \gen a = \set {a^k: k \in \Z}$
Let us define the mapping:

$\phi: \Z \to G: \map \phi k = a^k$.
We now show that $\phi$ is an isomorphism.

From Mapping from Additive Group of Integers to Powers of Group Element is Homomorphism, $\phi$ is a homomorphism.

Now we show that $\phi$ is a surjection.
As $G$ is cyclic, every element of $G$ is apower of $a$ for some $a \in G$ such that $G = \gen a$.
Thus:

$\forall x \in G: \exists k \in \Z: x = a^k$
By the definition of $\phi$:

$\map \phi k = a^k = x$
Thus $\phi$ is surjective.

Now we show that $\phi$ is an injection.
This follows directly from Powers of Infinite Order Element, where:

$\forall m, n \in \Z: m \ne n \implies a^m \ne a^n$
Thus $\phi$ is an injective, surjective homomorphism, thus:

$G \cong \struct {\Z, +}$
as required.
$\blacksquare$


Comment

This page has been identified as a candidate for refactoring of advanced complexity.In particular: Implement this comment in a second definition of infinite cyclic group, using this result as an equivalence proof. This is a tricky task because one needs to navigate exactly what results one can depend onUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Now that as we have, in a sense, defined an infinite cyclic group with reference to the additive group of integers that we painstakingly constructed in the definition of integers, it naturally follows that we should use $\struct {\Z, +}$ as an "archetypal" infinite cyclic group.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.4$: Cyclic groups




