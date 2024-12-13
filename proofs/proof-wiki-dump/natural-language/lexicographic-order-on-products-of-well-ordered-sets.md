# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_on_Products_of_Well-Ordered_Sets



Theorem
Let $S$ be a set which is well-ordered by $\preccurlyeq$.
Let $\preccurlyeq_l$ be the lexicographic order on the set $T$ of all ordered tuples of $S$.

Then:

$(1): \quad$ For a given $n \in \N: n > 0$, $\preccurlyeq_l$ is a well-ordering on the set $T_n$ of all ordered $n$-tuples of $S$;
$(2): \quad \preccurlyeq_l$ is not a well-ordering on the set $T$ of all ordered tuples of $S$.


Proof
It is straightforward to show that $\preccurlyeq_l$ is a total ordering on both $T_n$ and $T$.


This article contains statements that are justified by handwavery.In particular: there ought to be a result here that should be linked toYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It remains to investigate the nature of $\preccurlyeq_l$ as to whether or not it is a well-ordering.


Proof for Finite Product
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


Proof for Infinite Product
Consider a set $S = \set {a, b}$ such that $a \prec b$.
Then the set $\set {\tuple b, \tuple {a, b}, \tuple {a, a, b}, \tuple {a, a, a, b}, \ldots}$ has no minimal element by $\preccurlyeq_l$.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $T$ is not well-ordered by $\preccurlyeq_l$.
$\blacksquare$





