# 

Source: https://proofwiki.org/wiki/Constant_Sequence_of_Rational_Number_is_Computable

Theorem
Let $r \in \Q$ be a rational number.
Let $\sequence {x_n}$ be defined as:

$x_n = r$
Then, $\sequence {x_n}$ is a computable rational sequence.


Proof
By Existence of Canonical Form of Rational Number, let:

$r = \dfrac p q$
where:

$p \in \Z$
$q \in \Z_{>0}$

Let $m$ be the code number for the integer $p$.
As $q \ge 1$, it follows that:

$q - 1 \in \N$
We define $N, D : \N \to \N$ as:

$\map N n = m$
$\map D n = q - 1$
which are total recursive by:

Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
Then:

$\dfrac {k_n} {\map D n + 1} = \dfrac p q = r = x_n$
where $\map N n = m$ codes the integer $k_n = p$
Therefore, $\sequence {x_n}$ is computable by definition.
$\blacksquare$





