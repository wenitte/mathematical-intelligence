# 

Source: https://proofwiki.org/wiki/Negative_Part_of_Continuous_Function_is_Continuous

Theorem
Let $X$ be a topological space.
Let $f : X \to \R$ be continuous.
Let $f^-$ be the negative part of $f$. 

Then $f^-$ is continuous.


Proof
From Constant Function is Continuous, we have that $\mathbf 0 : X \to \R$ defined by $\map {\mathbf 0} x = 0$ for each $x \in X$ is continuous.
From Minimum Rule for Continuous Real-Valued Functions, we have that the function $f \vee \mathbf 0 : X \to \R$ defined by:

$\map {\paren {f \wedge \mathbf 0} } x = \min \set {0, \map f x}$ for each $x \in X$
is continuous.
From Multiple Rule for Continuous Real-Valued Function, $-\paren {f \wedge \mathbf 0}$ is continuous.
From the definition of the negative part, we have $f^- = -\paren {f \wedge \mathbf 0}$.
Hence $f^-$ is continuous.
$\blacksquare$


Also see
Positive Part of Continuous Function is Continuous‎




