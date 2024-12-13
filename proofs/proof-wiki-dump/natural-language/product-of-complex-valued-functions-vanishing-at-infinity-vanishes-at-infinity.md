# 

Source: https://proofwiki.org/wiki/Product_of_Complex-Valued_Functions_Vanishing_at_Infinity_Vanishes_at_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f, g : X \to \C$ be complex-valued functions vanishing at infinity.

Then $f g$ vanishes at infinity.


Proof
Let $\epsilon > 0$. 
Since $f$ vanishes at infinity, there exists a compact set $F_1 \subseteq X$ such that:

$\cmod {\map f x} < \sqrt \epsilon$ for each $x \in X \setminus F_1$.
Since $g$ vanishes at infinity, there exists a compact set $F_2 \subseteq X$ such that:

$\cmod {\map g x} < \sqrt \epsilon$ for each $x \in X \setminus F_2$.
From Union of Two Compact Sets is Compact, $F_1 \cup F_2$ is compact and:

$\cmod {\map f x} < \sqrt \epsilon$ and $\cmod {\map g x} < \sqrt \epsilon$ for each $x \in X \setminus \paren {F_1 \cup F_2}$.
Then, we have for $x \in X \setminus \paren {F_1 \cup F_2}$:

$\cmod {\map f x \map g x} \le \cmod {\map f x} \cmod {\map g x} < \paren {\sqrt \epsilon}^2 = \epsilon$
Since again $F_1 \cup F_2$ is compact, we have that $f g$ vanishes at infinity.
$\blacksquare$





