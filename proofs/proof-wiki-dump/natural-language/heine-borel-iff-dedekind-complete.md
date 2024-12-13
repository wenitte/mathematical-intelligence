# 

Source: https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.In particular: It's stronger now, and its current name is a trivial corollary.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.

Then $X$ is Dedekind complete if and only if every closed, bounded subset of $X$ is compact.


Proof
The forward implication follows from Heine-Borel Theorem: Dedekind-Complete Space.
Suppose that $X$ is not Dedekind complete.
Then $X$ has a non-empty subset $S$ with an upper bound $b$ in $X$ but no supremum in $X$.
Let $a \in S$ and let $Y = {\bar \downarrow} S \cap {\bar \uparrow} a$.
$Y$ is nonempty and bounded below by $a$ and above by $b$.


$Y$ is closed in $X$
Let $x \in X \setminus Y$.
Then $x \prec a$ or $x$ strictly succeeds every element of $S$.
If $x \prec a$, then $x \in {\downarrow} a \subseteq X \setminus Y$.
If $x$ strictly succeeds each element of $S$, then it is an upper bound of $S$.
Since $S$ has no supremum in $X$, it has an upper bound $p \prec x$.
Then $x \in {\uparrow p} \subseteq X \setminus Y$.


This article, or a section of it, needs explaining.In particular: What does ${\downarrow} a$ and ${\uparrow p}$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


$Y$ is not compact
Let $\AA = \set { {\downarrow} s: s \in  S}$.
Then $\AA$ is an open cover of $Y$ with no finite subcover.
$\blacksquare$





