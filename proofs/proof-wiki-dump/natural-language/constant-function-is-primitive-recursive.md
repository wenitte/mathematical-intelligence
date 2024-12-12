# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Primitive_Recursive



Theorem
The constant function $f_c: \N \to \N$, defined as:

$\map {f_c} n = c$ where $c \in \N$
is primitive recursive‎.


General Case
The constant function of $k$ variables: $f_c^k: \N^k \to \N$, defined as:

$\map {f_c^k} {n_1, n_2, \ldots, n_k} = c$ where $c \in \N$
is primitive recursive‎.


Proof
The proof proceeds by the Principle of Mathematical Induction.


Base Case
First we note that $f_0: \N \to \N$ is the zero function, which is a basic primitive recursive function.
This is our base case.


Induction Hypothesis
This is our induction hypothesis:

$f_k: \N \to \N$ is primitive recursive‎ for some given $k \in \N$.

Then we need to show:

$f_{k + 1}: \N \to \N$ is primitive recursive‎.


Induction Step
This is our induction step:

$\map {f_{k + 1} } n = k + 1 = \map \Succ k = \map \Succ {\map {f_k} n}$
Now $\map {f_k} n$ is primitive recursive‎ from our induction hypothesis.
Thus $\map {f_{k + 1} } n$ is obtained from the basic primitive recursive function $\Succ$ and $\map {f_k} n$ by substitution.

The result follows by the Principle of Mathematical Induction.
$\blacksquare$





