# 

Source: https://proofwiki.org/wiki/Equality_Relation_is_Primitive_Recursive

Theorem
The relation $\operatorname{eq} \subseteq \N^2$, defined as:

$\map {\operatorname {eq} } {n, m} \iff n = m$
is primitive recursive.


Proof
We note that:

$n = m \iff \size {n - m} = 0$
$n \ne m \iff \size {n - m} > 0$
So it can be seen that the characteristic function of $\operatorname{eq}$ is given by:

$\map {\chi_{\operatorname {eq} } } {n, m} = \overline {\map \sgn {\map {\operatorname {adf} } {n, m} } }$.
So $\map {\chi_{\operatorname {eq} } } {n, m}$ is defined by substitution from:

the primitive recursive function $\overline \sgn$
the primitive recursive function $\operatorname {adf}$.
Thus $\chi_{\operatorname {eq} }$ is primitive recursive.
Hence the result.
$\blacksquare$





