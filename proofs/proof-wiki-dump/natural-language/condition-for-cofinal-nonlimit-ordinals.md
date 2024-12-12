# 

Source: https://proofwiki.org/wiki/Condition_for_Cofinal_Nonlimit_Ordinals



Theorem
Let $x$ and $y$ be nonlimit ordinals.
Let $\operatorname{cof}$ denote the cofinal relation.
Let $\le$ denote the subset relation.


This article, or a section of it, needs explaining.In particular: This statement could be worded a little more carefully. It is, from examining the link, clear that the subset relation and the ordering relation are the same thing, but it grates to see $\le$ being defined as the subset relation. I'm not saying it is wrong, because it's not wrong, but it looks uncomfortable.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Furthermore, let $x$ and $y$ satisfy the condition:

$0 < x \le y$

Then:

$\map {\operatorname{cof}} { y,x }$


Proof
Both $x$ and $y$ are non-empty, so by the definition of a limit ordinal:

$x = z^+$ for some $z$.
$y = w^+$ for some $w$.


$\bigcup z^+ \le \bigcup w^+$ follows by Set Union Preserves Subsets/General Result.
$z \le w$ follows by Union of Successor Ordinal.

Define the function $f : x \to y$ as follows:

$\map f a = \begin{cases}
a &: a \ne z \\
w &: a = z
\end{cases}$

$a < b \le w$, so $f \left({a}\right) = a$.
Take any $a,b \in x$ such that $a < b$.

$\map f a < \map f b$ shall be proven by cases:


Case 1: $b \ne z$
If $b \ne z$:

$\map f a < \map f b$ is simply a restatement of $a < b$.


Case 2: $b = z$
If $b = z$, then $\map f b = w$ by the definition of $f$.
Since $a < z \le w$, $\map f a < \map f b$.

It follows that $f$ is strictly increasing.
$\Box$

Moreover, since $\bigcup y = w$ is the least upper bound, $f\left({z}\right) \ge a$ for all $a \in y$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.53 \ (2)$




