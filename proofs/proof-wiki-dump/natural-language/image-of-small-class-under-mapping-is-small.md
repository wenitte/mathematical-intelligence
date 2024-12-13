# 

Source: https://proofwiki.org/wiki/Image_of_Small_Class_under_Mapping_is_Small


It has been suggested that this page or section be merged into Image of Set under Mapping is Set.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $A$ be a mapping.
Let $a$ be a small class.
Then, the image of $a$ under $A$ is small.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: $A$ being a class variable, I strongly suggest a different letter to denote the mappingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Since $A$ is a mapping:

$\forall y: \exists x: \forall z: \left({ y A z \implies z = x }\right)$

This satisfies the antecedent of the axiom of replacement.  Therefore:

$\forall w: \exists x: \forall y: \left({ y \in w \implies \forall z: \left({ y A z \implies z \in x }\right) }\right)$
Universal Instantiation yields:

$\exists x: \forall y: \left({ y \in a \implies \forall z: \left({ y A z \implies z \in x }\right) }\right)$
By applying the definition for the restricted universal quantifier and rearranging quantifiers:

$\exists x: \forall z: \left({ \exists y \in a: y A z \implies z \in x }\right)$
Applying the definition for image:

$\exists x: \operatorname{Im} \left({a}\right) \subseteq x$
By Axiom of Subsets Equivalents, the image of $a$ under $A$ must be small.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.7$




