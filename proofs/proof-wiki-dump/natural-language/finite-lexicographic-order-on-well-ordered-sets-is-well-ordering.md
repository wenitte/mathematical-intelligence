# 

Source: https://proofwiki.org/wiki/Finite_Lexicographic_Order_on_Well-Ordered_Sets_is_Well-Ordering


This page has been identified as a candidate for refactoring of basic complexity.In particular: Prove it for pairs on a separate page; then apply induction.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $S$ be a set which is well-ordered by $\preccurlyeq$.
Let $\preccurlyeq_l$ be the lexicographic order on the set $T_n$ of all ordered $n$-tuples of $S$:

$\tuple {x_1, x_2, \ldots, x_n} \prec \tuple {y_1, y_2, \ldots, y_n}$ if and only if:
$\exists k: 1 \le k \le n$ such that $\forall 1 \le j < k: x_j = y_j$ but $x_k \prec y_k$ in $S$.

This article, or a section of it, needs explaining.In particular: Disentangle this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then for a given $n \in \N_{>0}$, $\preccurlyeq_l$ is a well-ordering on $T_n$.


Proof
It is straightforward to show that $\preccurlyeq_l$ is a total ordering on $T_n$.


This article contains statements that are justified by handwavery.In particular: The above statement. Use a separate page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It remains to investigate the nature of $\preccurlyeq_l$ as to whether or not it is a well-ordering.

Consider $T_n$ where $n \in \N_{>0}$.
It is clear that $\struct {T_1, \preccurlyeq_l}$ is order isomorphic to  $\struct {S, \preccurlyeq}$.
Thus as $\preccurlyeq$ is a well-ordering on $S$, $\preccurlyeq_l$ is a well-ordering on $T_1$.

Now, let us assume that $\preccurlyeq_l$ is a well-ordering on $T_k$ for some $k \in \N: k \ge 1$.
Let $A$ be a non-empty subset of $T_{k + 1}$.
Let $A_1$ be the set of all of the first components of the ordered $n$-tuples that comprise $A$.
Since $A_1$ is a non-empty subset of $S$, and $S$ is itself well-ordered by $\preccurlyeq$, it follows that $A_1$ contains a minimal element $x$ by $\preccurlyeq_l$.
Let $A_x$ be the subset of $A$ in which the first component equals $x$.
We may consider $A_x$ to be a subset of $T_k$ where this first component $x$ has been suppressed.
But we assumed that $T_k$ is well-ordered by $\preccurlyeq_l$.

So $A_x$ contains a minimal element $\tuple {x, x_2, x_3, \ldots, x_{k + 1} }$ by $\preccurlyeq_l$.
This element $\tuple {x, x_2, x_3, \ldots, x_{k + 1} }$ is the minimal element of $A$ by $\preccurlyeq_l$.
Hence, by definition, $T_{k + 1}$ is well-ordered by $\preccurlyeq_l$.
The result follows by induction.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 17$: Well Ordering
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $15 \ \text{(d)}$




