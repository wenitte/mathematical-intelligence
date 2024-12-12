# 

Source: https://proofwiki.org/wiki/Disjoint_Union_is_Coproduct_in_Category_of_Sets

Theorem
Let $\mathbf{Set}$ be the category of sets.
Let $S$ and $T$ be sets.

Then their disjoint union $S \sqcup T$ is a coproduct in $\mathbf{Set}$.


Proof
We have the implicit mappings $i_1: S \to S \sqcup T$ and $i_2: T \to S \sqcup T$ defined by:

$i_1 \left({s}\right) = \left({s, 1}\right)$
$i_2 \left({t}\right) = \left({t, 2}\right)$
Now given a set $V$ and mappings $f: S \to V$ and $g: T \to V$, there is to be a unique $\left[{f, g}\right]: S \sqcup T \to V$ such that:

$f = \left[{f, g}\right] \circ i_1$
$g = \left[{f, g}\right] \circ i_2$
Define $\left[{f, g}\right]$ by:

$\left[{f, g}\right] \left({x, \delta}\right) := \begin{cases}
f \left({x}\right) & \text{if $\delta = 1$} \\
g \left({x}\right) & \text{if $\delta = 2$}\end{cases}$

Now it is immediate that $\left[{f, g}\right]$ so defined satisfies the two conditions above.
Furthermore, these conditions fix $\left[{f, g}\right]$ uniquely, since every $\left({x, \delta}\right) \in S \sqcup T$ has $\delta = 1$ or $\delta = 2$.

Hence the result, by definition of coproduct.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.2$: Example $3.4$




