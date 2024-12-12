# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Removable_Discontinuity_of_Real_Function/Lemma

Lemma for Equivalence of Definitions of Removable Discontinuity of Real Function
Let $A \subseteq \R$ be a subset of the real numbers.
Let $f, g: A \to \R$ be real functions.
Let $a \in A$.
Suppose $\map f x = \map g x$ for every $x \ne a$.
Suppose the limit $\ds \lim_{x \mathop \to a} \map f x$ exists.
Then the limit $\ds \lim_{x \mathop \to a} \map g x$ exists and is equal to $\ds \lim_{x \mathop \to a} \map f x$.


Proof
This can be regarded as a corollary of the Squeeze Theorem for Functions.

Let $\ds \lim_{x \mathop \to a} \map f x = L$.
We have:

$\forall x \ne a: \map f x \le \map g x \le \map f x$
Hence by the Squeeze Theorem for Functions:

$\ds \lim_{x \mathop \to a} \map g x = L$
$\blacksquare$





