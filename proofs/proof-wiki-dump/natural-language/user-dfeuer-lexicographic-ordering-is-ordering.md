# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Lexicographic_Ordering_is_Ordering

{{tidy}}
{{MissingLinks}}

Theorem
Let $(I,\preceq)$ be a well-ordered set.
Let $(X_i,\le_i)$ be an Ordered Set for each $i \in I$.
Let $X = \prod_{i \mathop\in I} X_i$.
Let $\le$ be the lexicographic ordering on $X$.
Then $\left({X,\le}\right)$ is an ordered set.

Proof
Reflexivity: Follows immediately from the definition of lexicographic ordering.
Transitivity: Suppose that $x \le y$ and $y \le z$. If $x = y$ or $y = z$, the result holds trivially.  Assume, then, that neither of these is true.
Let $M = \left\{{i \in I \mid x_i \ne y_i}\right\}$ and
let $N = \left\{{i \in I \mid y_i \ne z_i}\right\}$.
Since $x \ne y$ and $y \ne z$, by the definition of product, $M$ and $N$ are non-empty.
Since $I$ is well-ordered and $M,\,N \subseteq I$, $M$ has a least element $m$ and $N$ has a least element $n$.
Let $w = \min\left\{{m,n}\right\}$.
Then if $i < w$, $x_i = y_i$ and $y_i = z_i$, so $x_i = z_i$.
Furthermore, we know that $x_w \le_w y_w$, $y_w \le_w z_w$, and either $x_w <_w y_w$, $y_w <_w z_w$, or both. By transitivity of $\le_w$, $x_w < z_w$. Thus by the definition of lexicographic ordering, $x < z$, so $x \le z$.

$\blacksquare$





