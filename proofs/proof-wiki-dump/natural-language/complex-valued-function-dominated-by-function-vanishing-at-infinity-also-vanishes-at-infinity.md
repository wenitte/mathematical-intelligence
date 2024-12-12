# 

Source: https://proofwiki.org/wiki/Complex-Valued_Function_Dominated_by_Function_Vanishing_at_Infinity_also_Vanishes_at_Infinity

Theorem
Let $X$ be a topological space. 
Let $g : X \to \C$ be a complex-valued function vanishing at infinity.
Let $f : X \to \C$ be such that $\cmod f \le \cmod g$.

Then $f$ vanishes at infinity.


Proof
Let $\epsilon > 0$.
Since $g$ vanishes at infinity, there exists a compact set $F \subseteq X$ such that:

$\cmod {\map g x} < \epsilon$ for $x \in X \setminus F$.
We then have:

$\cmod {\map f x} \le \cmod {\map g x} < \epsilon$ for $x \in X \setminus F$.
Since $\epsilon$ was arbitrary, we have that $f$ vanishes at infinity.
$\blacksquare$





