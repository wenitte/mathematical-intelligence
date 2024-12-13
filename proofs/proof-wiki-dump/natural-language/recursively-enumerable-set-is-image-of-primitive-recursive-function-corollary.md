# 

Source: https://proofwiki.org/wiki/Recursively_Enumerable_Set_is_Image_of_Primitive_Recursive_Function/Corollary

Theorem
Let $S \subseteq \N$ be recursively enumerable.
Suppose $S$ is non-empty.
Then there exists a primitive recursive function $f : \N \to \N$ such that:

$\Img f = S$


Proof
By Recursively Enumerable Set is Image of Primitive Recursive Function, there is some primitive recursive $g : \N^k \to \N$ such that:

$\Img g = S$
As $S$ is non-empty, let $n \in S$.
Define:

$\map f x = \begin{cases}
\map g {\map {\operatorname{pred}} {\paren{x}_1}, \dotsc, \map {\operatorname{pred}} {\paren{x}_k}} & : x \in \operatorname{Seq} \land \map {\operatorname{len}} x = k \\
n & : \text{otherwise}
\end{cases}$
That $f$ is primitive recursive follows from:

Definition by Cases is Primitive Recursive/Corollary
Predecessor Function is Primitive Recursive
Set of Sequence Codes is Primitive Recursive
Length Function is Primitive Recursive
Equality Relation is Primitive Recursive
Set Operations on Primitive Recursive Relations
Prime Exponent Function is Primitive Recursive

Suppose $y \in \Img g$.
Then, there exist $\tuple {x_1, \dotsc, x_k} \in \N^k$ such that:

$\map g {x_1, \dotsc, x_k} = y$
Let $X$ be the sequence coding for $\sequence {x_1 + 1, \dotsc, x_k + 1}$.
Then, $X \in \operatorname{Seq}$ and $\map {\operatorname{len}} X = k$.
Therefore, $\map f X = y$.
$\Box$

Now, suppose $y \in \Img f$.
Then, there exists $x \in \N$ such that:

$\map f x = y$
If $x \in \operatorname{Seq} \land \map {\operatorname{len}} x = k$ holds, then:

$y = \map g {\paren{x}_1 - 1, \dotsc, \paren{x}_k - 1}$
and thus $y \in \Img g$.
Otherwise, $y = n \in S$.
But as $S = \Img g$, it follows that $y \in \Img g$.
$\blacksquare$





