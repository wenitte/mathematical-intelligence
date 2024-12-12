# 

Source: https://proofwiki.org/wiki/Constant_Sequence_of_Computable_Real_Number_is_Computable

Theorem
Let $a \in \R$ be a computable real number.
Let $\sequence {x_n}$ be defined as:

$x_n = a$

Then, $\sequence {x_n}$ is a computable real sequence.


Proof
By definition of computable real number, there exists a total recursive function $f : \N \to \N$ such that:

For every $n \in \N$, $\map f n$ codes an integer $k$ such that:
$\dfrac {k - 1} {n + 1} < a < \dfrac {k + 1} {n + 1}$

Let $g : \N^2 \to \N$ be defined as:

$\map g {m, n} = \map f n$
As $f$ is total recursive, it follows immediately that $g$ is also total recursive.

Let $m, n \in \N$ be arbitrary.
By definition of $g$:

$\map g {m, n} = \map f n$
Thus, by assumption:

$\map g {m, n}$ codes an integer $k$ such that:
$\dfrac {k - 1} {n + 1} < a < \dfrac {k + 1} {n + 1}$
But, as $x_m = a$:

$\map g {m, n}$ codes an integer $k$ such that:
$\dfrac {k - 1} {n + 1} < x_m < \dfrac {k + 1} {n + 1}$

As $m$ and $n$ were arbitrary, $\sequence {x_n}$ is computable by definition.
$\blacksquare$





