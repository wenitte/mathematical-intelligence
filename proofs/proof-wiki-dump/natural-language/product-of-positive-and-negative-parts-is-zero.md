# 

Source: https://proofwiki.org/wiki/Product_of_Positive_and_Negative_Parts_is_Zero

Theorem
Let $X$ be a set.
Let $f : X \to \R$ be a real-valued function.
Let $f^+$ and $f^-$ be the positive part and negative part of $f$ respectively.

Then $f^+ f^- = 0$. 


Proof
Let $x \in X$.
If $\map f x = 0$, then we have $\map {f^+} x = \map {f^-} x = 0$. 
Hence $\map {f^+} x = \map {f^-} x = 0$ in this case.
If $\map f x > 0$, then $\map {f^+} x = \map f x$ and $\map {f^-} x = 0$.
So $\map {f^+} x \map {f^-} x = 0$ in this case also.
Finally, if $\map f x < 0$, then $\map {f^+} x = 0$ and $\map {f^-} x = -\map f x$.
So $\map {f^+} x \map {f^-} x = 0$ in this case.
We have covered all possibilities, so we have $\map {f^+} x \map {f^-} x = 0$ for each $x \in X$.
$\blacksquare$





