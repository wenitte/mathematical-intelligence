# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Inverse_Mapping


This page has been identified as a candidate for refactoring.In particular: Restructuring of Equivalence of Definitions of Bijection under way. As of 20220321: please verify that the above is still currentUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $S$ and $T$ be sets.

The following definitions of the concept of Inverse Mapping are equivalent:

Definition 1
Let $f: S \to T$ be a mapping.
Let $f^{-1} \subseteq T \times S$ be the inverse of $f$:

$f^{-1} := \set {\tuple {t, s}: \map f s = t}$

Let $f^{-1}$ itself be a mapping:

$\forall y \in T: \tuple {y, x_1} \in f^{-1} \land \tuple {y, x_2} \in f^{-1} \implies x_1 = x_2$
and

$\forall y \in T: \exists x \in S: \tuple {y, x} \in f$

Then $f^{-1}$ is called the inverse mapping of $f$.

Definition 2
Let $f: S \to T$ and $g: T \to S$ be mappings.
Let:

$g \circ f = I_S$
$f \circ g = I_T$
where:

$g \circ f$ and $f \circ g$ denotes the composition of $f$ with $g$ in either order
$I_S$ and $I_T$ denote the identity mappings on $S$ and $T$ respectively.
That is, $f$ and $g$ are both left inverse mappings and right inverse mappings of each other.

Then:

$g$ is the inverse (mapping) of $f$
$f$ is the inverse (mapping) of $g$.


Proof
Definition 1 implies Definition 2
Let $f^{-1}: T \to S$ be an inverse mapping of $f: S \to T$ by definition 1.
From Mapping is Injection and Surjection iff Inverse is Mapping it follows that $f^{-1}$ is a bijection.
By Composite of Bijection with Inverse is Identity Mapping:

$f^{-1} \circ f = I_S$
$f \circ f^{-1} = I_T$

Thus $f^{-1}: T \to S$ is an inverse mapping of $f: S \to T$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $g: T \to S$ be an inverse mapping of $f: S \to T$ by definition 2.
From Left and Right Inverse Mappings Implies Bijection it follows that both $f$ and $g$ are bijections.
From Mapping is Injection and Surjection iff Inverse is Mapping it follows that $g = f^{-1}$.
Thus $g: T \to S$ is an inverse mapping of $f: S \to T$ by definition 1.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations




