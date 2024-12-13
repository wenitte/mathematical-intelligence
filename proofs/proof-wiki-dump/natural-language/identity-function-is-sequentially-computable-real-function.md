# 

Source: https://proofwiki.org/wiki/Identity_Function_is_Sequentially_Computable_Real_Function

Theorem
Let $I_\R : \R \to \R$ denote the identity function on $\R$.
Then $I_\R$ is a sequentially computable real function.


Proof
Let $\sequence {x_n}$ be a computable real sequence.
By definition of identity function:

$\map {I_\R} x = x$
Therefore:

$\sequence {\map {I_\R} {x_n}} = \sequence {x_n}$
and is thus computable.

As $\sequence {x_n}$ was arbitrary, it follows that $I_\R$ is sequentially computable by definition.
$\blacksquare$





