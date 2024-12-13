# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Complex-Valued_Functions_Vanishing_in_Neighborhood_of_Infinity_Vanishes_in_Neighborhood_of_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f, g : X \to \C$ be complex-valued functions vanishing in a neighborhood of infinity.
Let $\lambda \in \C$.

Then $f + \lambda g$ vanishes in a neighborhood of infinity.


Proof
Since $f$ vanishes in a neighborhood of infinity, there exists a compact set $F_1 \subseteq X$ such that:

$\map f x = 0$ for each $x \in X \setminus F_1$.
Since $g$ vanishes in a neighborhood of infinity, there exists a compact set $F_2 \subseteq X$ such that:

$\map g x = 0$ for each $x \in X \setminus F_2$.
From Union of Two Compact Sets is Compact:

$F_1 \cup F_2$ is compact.
Further:

$\map f x = 0$ and $\map g x = 0$ for each $x \in X \setminus \paren {F_1 \cup F_2}$.
So we have:

$\map f x + \lambda \map g x = 0$ for each $x \in X \setminus \paren {F_1 \cup F_2}$.
Recalling that $F_1 \cup F_2$ is compact, we have that $f + \lambda g$ vanishes in a neighborhood of infinity.
$\blacksquare$





