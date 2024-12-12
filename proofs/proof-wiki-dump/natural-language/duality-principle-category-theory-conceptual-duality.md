# 

Source: https://proofwiki.org/wiki/Duality_Principle_(Category_Theory)/Conceptual_Duality

This proof is about Duality Principle in the context of Category Theory. For other uses, see Duality Principle.

Theorem
Let $\Sigma$ be a statement about metacategories, be it in natural language or otherwise.
Suppose that $\Sigma$ holds for all metacategories.

Then so does its dual statement $\Sigma^*$.


Proof
From Dual Category of Dual Category, any metacategory $\mathbf C$ may be regarded as a dual category.
Thus it is sufficient to verify $\Sigma^*$ holds in all dual categories.

In any dual category $\mathbf C^{\mathrm {op}}$, we see that:

$\operatorname{dom} f^{\mathrm {op}} = \paren {\operatorname{cod} f}^{\mathrm {op}}$
$\operatorname{cod} f^{\mathrm {op}} = \paren {\operatorname{dom} f}^{\mathrm {op}}$
$f^\mathrm {op} \circ g^\mathrm {op} = \paren {g \circ f}^{\mathrm {op}}$
Thus, the interpretation of $\Sigma^*$ in $\mathbf C^{\mathrm {op}}$ comes down to the interpretation of $\Sigma$ in $\mathbf C$.
That is, except for amending every symbol $\star$ of $\mathbf C$ with a superscript "$\mathrm {op}$", yielding $\star^\mathrm {op}$.

This operation does not change the validity of $\Sigma$ in any possible way, and $\Sigma$ was assumed to hold in $\mathbf C$.
Hence we conclude that $\Sigma^*$ must hold in $\mathbf C^{\mathrm {op}}$ as well.

The result follows.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.1$: Proposition $3.2$




