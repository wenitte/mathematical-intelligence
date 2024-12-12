# 

Source: https://proofwiki.org/wiki/Completeness_Theorem_for_Semantic_Tableaux

Theorem
Let $\mathbf A$ be a WFF of propositional logic.
Let $\mathbf A$ be unsatisfiable for boolean interpretations.

Then every completed tableau for $\mathbf A$ is closed.


Proof
Aiming for a contradiction, suppose some open tableau $T$ for $\mathbf A$ exists.
We will prove that $\mathbf A$ must be satisfiable.

This claim is proved by inductively establishing the following claim for all nodes $t$ of $T$:

If a descendant leaf node of $t$ is marked open, then $\map U t$ is satisfiable.

By the Semantic Tableau Algorithm, this statement is immediate for leaf nodes.
For, sought satisfiability is the condition for a leaf to be marked open.

Inductively suppose that all children of $t$ satisfy the mentioned condition.
Now suppose that $t$ has a descendant marked open leaf.
Then obviously some child $t'$ of $t$ also has a descendant marked open leaf.
By induction hypothesis, $\map U {t'}$ is satisfiable.

First, the case that the formula $\mathbf B$ used at $t$ by the Semantic Tableau Algorithm is an $\alpha$-formula.
Then $\map U {t'}$ is obtained from $\map U t$ by replacing $\mathbf B$ by $\mathbf B_1$ and $\mathbf B_2$.
Here, $\mathbf B_1$ and $\mathbf B_2$ are the formulas such that $\mathbf B$ is semantically equivalent to $\mathbf B_1 \land \mathbf B_2$.

It follows that if:

$v \models_{\mathrm{BI}} \map U {t'}$
for some boolean interpretation $v$, then also:

$v \models_{\mathrm{BI}} \map U t$
by the boolean interpretation of $\land$.
Consequently, $\map U t$ is satisfiable.

Next, the case that $\mathbf B$ is a $\beta$-formula.
Then $\mathbf B$ is semantically equivalent to $\mathbf B_1 \lor \mathbf B_2$.
Then, by the Rule of Addition:

$\mathbf B_1 \models_{\mathrm{BI}} \mathbf B$
$\mathbf B_2 \models_{\mathrm{BI}} \mathbf B$
Consequently, by the definitions of $\map U {t'}$ and $\map U {t' '}$:


This article, or a section of it, needs explaining.In particular: But $\map U {t' '}$ has not been definedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map U {t'} \models_{\mathrm{BI}} \map U t$
$\map U {t' '} \models_{\mathrm{BI}} \map U t$
By hypothesis, one of $\map U {t'}$ and $\map U {t' '}$ must be satisfiable.
Hence, so must $\map U t$ be.

This establishes our claim.
Applying the claim to the root node, that is, to the whole tableau, we obtain the result.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.7.2$




