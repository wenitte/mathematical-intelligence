# 

Source: https://proofwiki.org/wiki/Pointwise_Minimum_of_Simple_Functions_is_Simple/Proof_1

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g : X \to \R$ be simple functions. 

Then the pointwise minimum $\min \set {f, g}: X \to \R$ is also simple function.


Proof
From Pointwise Sum of Simple Functions is Simple Function:

$f + g$ is simple.
From Scalar Multiple of Simple Function is Simple Function:

$-g$ is simple.
Then, from Pointwise Sum of Simple Functions is Simple Function we have: 

$f - g$ is simple.
From Absolute Value of Simple Function is Simple Function:

$\size {f - g}$ is simple.
So, from Scalar Multiple of Simple Function is Simple Function, we have: 

$-\size {f - g}$ is simple.
From Pointwise Sum of Simple Functions is Simple Function, we then have: 

$\paren {f + g} - \size {f - g}$ is simple.
Finally, from Scalar Multiple of Simple Function is Simple Function, we have: 

$\dfrac 1 2 \paren {\paren {f + g} - \size {f - g} }$ is simple.
By Minimum Function in terms of Absolute Value, we have: 

$\ds \min \set {f, g} = \frac 1 2 \paren {\paren {f + g} - \size {f - g} }$
so:

$\min \set {f, g}$ is simple.
$\blacksquare$




