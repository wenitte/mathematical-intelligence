# 

Source: https://proofwiki.org/wiki/Exponentiation_is_Primitive_Recursive

Theorem
The function $\exp: \N^2 \to \N$, defined as:

$\map \exp {n, m} = n^m$
is primitive recursive‎.


Proof
We observe that:

$\map \exp {n, 0} = n^0 = 1$
and that:

$\map \exp {n, m + 1} = n^\paren {m + 1} = \paren {n^m} \times n = \map {\mathrm {mult} } {\map \exp {n, m}, n}$.

Thus $\exp$ is defined by primitive recursion from the primitive recursive function ‎$\mathrm {mult}$.
Hence the result.
$\blacksquare$





