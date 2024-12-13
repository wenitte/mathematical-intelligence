# 

Source: https://proofwiki.org/wiki/Inverse_Image_of_Convex_Set_under_Monotone_Mapping_is_Convex

Theorem
Let $\left({X, \le}\right)$ and $\left({Y, \preceq}\right)$ be ordered sets.
Let $f: X \to Y$ be a monotone mapping.
Let $C$ be a convex subset of $Y$.

Then $f^{-1} \left[{C}\right]$ is convex in $X$.


Proof
Suppose $f$ is increasing.
Let $a, b, c \in X$ such that $a \le b \le c$.
Let $a, c \in f^{-1} \left[{C}\right]$.

By definition of inverse image:

$f \left({a}\right), f \left({c}\right) \in C$
By definition of increasing mapping:

$f \left({a}\right) \preceq f \left({b}\right) \preceq f \left({c}\right)$
Thus by definition of convex set:

$f \left({b}\right) \in C$
Then by definition of inverse image:

$b \in f^{-1} \left[{C}\right]$
Since this holds for all such triples, $f^{-1} \left[{C}\right]$ is convex in $X$.

A similar argument applies if $f$ is decreasing.
$\blacksquare$





