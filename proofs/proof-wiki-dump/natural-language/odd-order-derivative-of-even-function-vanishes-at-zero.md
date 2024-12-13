# 

Source: https://proofwiki.org/wiki/Odd_Order_Derivative_of_Even_Function_Vanishes_at_Zero

Theorem
Let $X$ be a symmetric subset of $\R$ containing $0$. 
Let $n$ be a positive integer. 
Let $f:X \to \R$ be an even function. 
Let $f$ be at least $\paren{2 n + 1}$-times differentiable.

Then:

$\map {f^{\paren {2 n + 1} } } 0 = 0$


Proof
From the definition of an even function, for all $x \in X$ we have: 

$\map f x = \map f {-x}$
Differentiating $2 n + 1$ times, we have, by the Chain Rule for Derivatives: 

$\map {f^{\paren {2 n + 1} } } x = \paren {-1}^{2 n + 1} \map {f^{\paren {2 n + 1} } } {-x} = -\map {f^{\paren {2 n + 1} } } {-x}$
Setting $x = 0$ gives: 

$\map {f^{\paren {2 n + 1} } } 0 = -\map {f^{\paren {2 n + 1} } } {-0}$
That is: 

$2 \map {f^{\paren {2 n + 1 } } } 0 = 0$
The result follows on division by $2$. 
$\blacksquare$





