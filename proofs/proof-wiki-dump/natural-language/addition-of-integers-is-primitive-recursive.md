# 

Source: https://proofwiki.org/wiki/Addition_of_Integers_is_Primitive_Recursive

Theorem
Let $a : \N^2 \to \N$ be defined as:

$\map a {m, n} = p$
where:

$m$ codes an integer $k$
$n$ codes an integer $\ell$
$p$ codes the integer $k + \ell$
Then $a$ is a primitive recursive function.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Define:

$\map a {m, n} = \begin{cases}
\map {\sgn_\Z} k \times_\Z \paren {\size k + \size \ell}_\Z & : \map {\sgn_\Z} k = \map {\sgn_\Z} \ell \\
\map {\sgn_\Z} k \times_\Z \paren {\size k {\dot -} \size \ell}_\Z & : \map {\sgn_\Z} k \ne \map {\sgn_\Z} \ell \land \size k \ge \size \ell \\
\map {\sgn_\Z} \ell \times_\Z \paren {\size \ell {\dot -} \size k}_\Z & : \map {\sgn_\Z} k \ne \map {\sgn_\Z} \ell \land \size k < \size \ell
\end{cases}$
where:

$\times_\Z$ denotes integer multiplication
$N_\Z$ denotes the code number for $N : \Z$
$\sgn_\Z$ denotes the signum function on $\Z$
$\dot -$ denotes cut-off subtraction
By:

Ordering Relations are Primitive Recursive
Equality Relation is Primitive Recursive
Set Operations on Primitive Recursive Relations
Signum Function on Integers is Primitive Recursive
Multiplication of Integers is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
Addition is Primitive Recursive
Cut-Off Subtraction is Primitive Recursive
Definition by Cases is Primitive Recursive
it follows that $a$ is primitive recursive.
Now, we will show that $a$ satisfies the definition in the theorem statement.

First, suppose $\size k > \size \ell$.
Then, $\map {\sgn_\Z} {k + \ell} = \map {\sgn_\Z} k$.
If the signs of $k$ and $\ell$ match, then:

$\size {k + \ell} = \size k + \size \ell$
If they differ, then either $\ell = 0$, or $k$ and $\ell$ have opposite signs.
Then, $\size {k + \ell} = \size k - \size \ell$ in either case.
But since $\size k > \size \ell$:

$\size k - \size \ell = \size k {\dot -} \size \ell$
In both of those cases, $\map a {m, n}$ matches the value.

It can be seen that, when $\size k < \size \ell$, the above holds with the roles of the two variables swapped.

Now, suppose $\size k = \size \ell$.
If $\map {\sgn_\Z} k = \map {\sgn_\Z} \ell$, then:

$\map {\sgn_\Z} {k + \ell} = \map {\sgn_\Z} k = \map {\sgn_\Z} \ell$
$\size {k + \ell} = \size k + \size \ell$
If $\map {\sgn_\Z} k \ne \map {\sgn_\Z} \ell$, then either:

One of the two is zero
or:

One is positive, and the other is negative
In either of the two cases, we can again use  cut-off subtraction to get the correct result.

Since, in every case, the defined $a : \N^2 \to \N$ satisfies the definition, the result follows.
$\blacksquare$





