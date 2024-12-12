# 

Source: https://proofwiki.org/wiki/Composition_of_Sequentially_Computable_Real_Functions_is_Sequentially_Computable

Theorem
Let $f,g : \R \to \R$ be sequentially computable real functions.
Let $h : \R \to \R$ be defined as:

$\map h x = \map f {\map g x}$

Then $h$ is sequentially computable.


Proof
Let $\sequence {x_n}$ be a computable real sequence.
As $g$ is sequentially computable:

$\sequence {\map g {x_n}}$
is computable.
As $f$ is sequentially computable:

$\sequence {\map f {\map g {x_n}}}$
is computable.
But:

$\map f {\map g {x_n}} = \map h {x_n}$
Therefore:

$\sequence {\map h {x_n}}$
is computable.

As $\sequence {x_n}$ was arbitrary, $h$ is sequentially computable by definition.
$\blacksquare$





