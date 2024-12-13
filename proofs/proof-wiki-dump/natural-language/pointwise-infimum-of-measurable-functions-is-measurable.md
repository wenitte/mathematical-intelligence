# 

Source: https://proofwiki.org/wiki/Pointwise_Infimum_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $I$ be a countable set.
Let $\family {f_i}_{i \mathop \in I}$, $f_i: X \to \overline \R$ be an $I$-indexed family of $\Sigma$-measurable functions.

Then the pointwise infimum $\ds \inf_{i \mathop \in I} f_i: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
From Infimum as Supremum, we have the Equality of Mappings:

$\ds \inf_{i \mathop \in I} f_i = -\paren {\sup_{i \mathop \in I} \paren {-f_i} }$

Now, from Negative of Measurable Function is Measurable and Pointwise Supremum of Measurable Functions is Measurable, it follows that:

$\ds - \paren {\sup_{i \mathop \in I} \paren {-f_i} }$
is a measurable function.

Hence the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.9$




