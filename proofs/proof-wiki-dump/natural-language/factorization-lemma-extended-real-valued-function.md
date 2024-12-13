# 

Source: https://proofwiki.org/wiki/Factorization_Lemma/Extended_Real-Valued_Function



Theorem
Let $X$ be a set.
Let $\struct {Y, \Sigma}$ be a measurable space.
Let $f: X \to Y$ be a mapping.

An extended real-valued function $g: X \to \overline \R$ is $\map \sigma f$-measurable if and only if:

There exists a $\Sigma$-measurable mapping $\tilde g: Y \to \overline \R$ such that $g = \tilde g \circ f$
where:

$\map \sigma f$ denotes the $\sigma$-algebra generated by $f$


Proof
Necessary Condition
Let $g$ be a $\map \sigma f \, / \, \overline \BB$-measurable function.
We need to construct a measurable $\tilde g$ such that $g = \tilde g \circ f$.

Let us proceed in the following fashion:

Establish the result for $g$ a characteristic function;
Establish the result for $g$ a simple function;
Establish the result for all $g$

So let $g = \chi_E$ be a characteristic function.
By Characteristic Function Measurable iff Set Measurable, it follows that $E$ is $\map \sigma f$-measurable.
Thus there exists some $A \in \Sigma$ such that $E = \map {f^{-1} } A$.
Again by Characteristic Function Measurable iff Set Measurable, we have $\chi_A: Y \to \overline \R$ is measurable.
It follows that $\chi_E = \chi_A \circ f$, and $\tilde g := \chi_A$ works.

Now let $g = \ds \sum_{i \mathop = 1}^n a_i \chi_{E_i}$ be a simple function.
Let $A_i$ be associated to $E_i$ as above. Then we have:














\(\ds \sum_{i \mathop = 1}^n a_i \chi_{E_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n a_i \paren {\chi_{A_i} \circ f}\)





by the result for characteristic functions














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n a_i \chi_{A_i} } \circ f\)





Composition of Mappings is Linear



Now $\ds \sum_{i \mathop = 1}^n a_i \chi_{A_i}$ is a simple function, hence measurable by Simple Function is Measurable.
Therefore, it suffices as a choice for $\tilde g$.

Next, let $g \ge 0$ be a measurable function.
By Measurable Function is Pointwise Limit of Simple Functions, we find simple functions $g_j$ such that:

$\ds \lim_{j \mathop \to \infty} g_j = g$
Applying the previous step to each $g_j$, we find a sequence of $\tilde g_j$ satisfying:

$\ds \lim_{j \mathop \to \infty} \tilde g_j \circ f = g$
From Composition with Pointwise Limit it follows that we have, putting $\tilde g := \ds \lim_{j \mathop \to \infty} \tilde g_j$:

$\ds \lim_{j \mathop \to \infty} \tilde g_j \circ f = \tilde g \circ f$

This article, or a section of it, needs explaining.In particular: Address why (if?!) $\tilde g$ is well definedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
An application of Pointwise Limit of Measurable Functions is Measurable yields $\tilde g$ measurable.

Thus we have provided a suitable $\tilde g$ for every $g$, such that:

$g = \tilde g \circ f$
as desired.
$\blacksquare$


Sufficient Condition
Suppose that such a $\tilde g$ exists.
Note that $f$ is $\map \sigma f \,/\, \Sigma$-measurable by definition of $\map \sigma f$.

The result follows immediately from Composition of Measurable Mappings is Measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.13$



