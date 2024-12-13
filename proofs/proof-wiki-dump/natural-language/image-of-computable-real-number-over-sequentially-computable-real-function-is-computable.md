# 

Source: https://proofwiki.org/wiki/Image_of_Computable_Real_Number_over_Sequentially_Computable_Real_Function_is_Computable

Theorem
Let $f : \R \to \R$ be a sequentially computable real function.
Let $a \in \R$ be a computable real number.

Then, $\map f a$ is a computable real number.


Proof
Let $\sequence {x_n}$ be defined as:

$x_n = a$
By Constant Sequence of Computable Real Number is Computable:

$\sequence {x_n}$ is a computable real sequence.
As $f$ is sequentially computable:

$\sequence {\map f {x_n}}$ is computable.
By Term of Computable Real Sequence is Computable:

$\map f {x_0}$ is computable.
But, $x_0 = a$ by definition.
Thus:

$\map f a$ is computable.
$\blacksquare$





