# 

Source: https://proofwiki.org/wiki/Absolute_Difference_Function_is_Primitive_Recursive

Theorem
The absolute difference function $\operatorname {adf}: \N^2 \to \N$, defined as:

$\map {\operatorname {adf} } {n, m} = \size {n - m}$
where $\size a$ is defined as the absolute value of $a$, is primitive recursive‎.


Proof
We note that:

$\size {n - m} = \paren {n \mathop {\dot -} m} + \paren {m \mathop {\dot -} n} = \map {\operatorname {add} } {\paren {n \mathop {\dot -} m}, \paren {m \mathop {\dot -} n} }$
Next we note that:

$m \mathop {\dot -} n = \map {\pr^2_2} {n, m} \mathop {\dot -} \map {\pr^2_1} {n, m}$
where $\pr^2_k$ is the projection function.

Then:














\(\ds \map {\operatorname {adf} } {n, m}\)

\(=\)







\(\ds \size {n - m}\)




















\(\ds \)

\(=\)







\(\ds \paren {n \mathop {\dot -} m} + \paren {m \mathop {\dot -} n}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname {add} } {\paren {n \mathop {\dot -} m}, \paren {m \mathop {\dot -} n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname {add} } {\paren {n \mathop {\dot -} m}, \paren {\map {\pr^2_2} {n, m} \mathop {\dot -} \map {\pr^2_1} {n, m} } }\)










Hence we see that $\operatorname {adf}$ is obtained by substitution from:

the primitive recursive function $n \mathop {\dot -} m$
the primitive recursive function $\map {\operatorname {add} } {n, m}$
the projection function.

Hence the result.
$\blacksquare$





