# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Continuous_Function_is_Continuous

Theorem
Let $X$ be a topological space.
Let $f : X \to \R$ be continuous.
Let $f^+$ be the positive part of $f$. 

Then $f^+$ is continuous.


Proof
From Constant Function is Continuous, we have that $\mathbf 0 : X \to \R$ defined by $\map {\mathbf 0} x = 0$ for each $x \in X$ is continuous.
From Maximum Rule for Continuous Real-Valued Functions, we have that the function $f \vee \mathbf 0 : X \to \R$ defined by:

$\map {\paren {f \vee \mathbf 0} } x = \max \set {0, \map f x}$ for each $x \in X$
is continuous.
By the definition of the positive part, we have:

$f^+ = f \vee \mathbf 0$
Hence the result.
$\blacksquare$


Also see
Negative Part of Continuous Function is Continuous‎




