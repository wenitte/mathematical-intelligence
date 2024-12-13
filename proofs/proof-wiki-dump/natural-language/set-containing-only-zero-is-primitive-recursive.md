# 

Source: https://proofwiki.org/wiki/Set_Containing_Only_Zero_is_Primitive_Recursive

Theorem
The subset $\left\{{0}\right\} \subset \N$ is primitive recursive.


Proof
We note that:

$1 \mathop {\dot -} n = \begin{cases}
1 & : n = 0 \\
0 & : n > 0
\end{cases}$
and so the characteristic function $\chi_{\left\{{0}\right\}}$ is given by $\chi_{\left\{{0}\right\}} \left({n}\right) = 1 \mathop {\dot -} n$.
So $\chi_{\left\{{0}\right\}}$ is obtained by substitution from the primitive recursive function $1 \mathop {\dot -} n$ using constants, which are primitive recursive.
Hence the result.
$\blacksquare$





