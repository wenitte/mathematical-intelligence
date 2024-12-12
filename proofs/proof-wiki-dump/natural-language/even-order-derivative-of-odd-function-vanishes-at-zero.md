# 

Source: https://proofwiki.org/wiki/Even_Order_Derivative_of_Odd_Function_Vanishes_at_Zero

Theorem
Let $X$ be a symmetric subset of $\R$ containing $0$. 
Let $n$ be a positive integer. 
Let $f:X \to \R$ be an odd function. 
Let $f$ be at least $\paren {2 n}$-times differentiable.

Then: 

$\map {f^{\paren {2 n} } } 0 = 0$


Proof
From the definition of an odd function, for all $x \in X$ we have:

$\map f x = -\map f {-x}$
Differentiating $2 n$ times, we have, by the Chain Rule for Derivatives:

$\map {f^{\paren {2 n} } } x = -\paren {-1}^{2 n} \map {f^{\paren {2 n} } } {-x} = -\map {f^{\paren {2 n} } } {-x}$
Setting $x = 0$ gives: 

$\map {f^{\paren {2 n} } } 0 = -\map {f^{\paren {2 n} } } {- 0}$
That is:

$2 \map {f^{\paren {2 n} } } 0 = 0$
The result follows on division by $2$. 
$\blacksquare$





