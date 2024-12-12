# 

Source: https://proofwiki.org/wiki/Exponential_of_Product/Proof_1

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x y} = \paren {\exp y}^x$


Proof
Let $Y = \exp y$.
From Exponential of Natural Logarithm:

$\map \ln {\exp y} = y$
From Logarithms of Powers, we have:

$\ln Y^x = x \ln Y = x \, \map \ln {\exp y} = x y$

Thus:

$\map \exp {x y} = \map \exp {\ln Y^x} = Y^x = \paren {\exp y}^x$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.5 \ (1) \ \text{(ii)}$




