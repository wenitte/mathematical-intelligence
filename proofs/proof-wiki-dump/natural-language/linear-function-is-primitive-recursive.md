# 

Source: https://proofwiki.org/wiki/Linear_Function_is_Primitive_Recursive

Theorem
The function $f: \N \to \N$, defined as:

$\map f n = a n + b$
where $a$ and $b$ are constants, is primitive recursive‎.


Proof
We have that:














\(\ds a n + b\)

\(=\)







\(\ds \map \Add {\map \Mult {a, n}, b}\)




















\(\ds \)

\(=\)







\(\ds \map \Add {\map \Mult {a, n}, \map {f_b} n}\)




















\(\ds \)

\(=\)







\(\ds \map \Add {\map \Mult {\map {f_a} n, \map {\pr_1^1} n}, \map {f_b} n}\)









where:

$\Mult$ is primitive recursive
$\Add$ is primitive recursive
the constant functions $f_a$ and $f_b$ are primitive recursive
The projection function $\pr_1^1$ is a basic primitive recursive function.

Note that we need to use the projection function (in this case, the identity function) in order to satisfy the definition of substitution, even when there is only one variable.
So $\Mult$ is obtained by using two levels of substitution from the above primitive recursive‎ functions.
$\blacksquare$





