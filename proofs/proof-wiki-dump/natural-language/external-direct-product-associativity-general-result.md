# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Associativity/General_Result



Theorem
Let $\ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.

If $\circ_1, \ldots, \circ_n$ are all associative, then so is $\circ$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

If $\circ_1, \ldots, \circ_n$ are all associative, then so is the external direct product $\circ$ of $\circ_1, \ldots, \circ_n$.


Basis for the Induction
$\map P 1$ is true, as this just says:

$\circ_1$ is associative.

$\map P 2$ is the case:

If $\circ_1$ and $\circ_2$ are both associative, then so is the external direct product $\circ$ of $\circ_1$ and $\circ_2$.
This has been proved in External Direct Product Associativity.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

If $\circ_1, \ldots, \circ_k$ are all associative, then so is the external direct product $\circ$ of $\circ_1, \ldots, \circ_k$.

Then we need to show:

If $\circ_1, \ldots, \circ_{k + 1}$ are all associative, then so is the external direct product $\circ$ of $\circ_1, \ldots, \circ_{k + 1}$.


Induction Step
This is our induction step:
Let $a, b, c \in S^{k + 1}$:

$a = \tuple {a_1, a_2, \ldots, a_k, a_{k + 1} }$
$b = \tuple {b_1, b_2, \ldots, b_k, b_{k + 1} }$
$c = \tuple {c_1, c_2, \ldots, c_k, c_{k + 1} }$

Note that in the below, by abuse of notation, $\circ$ is to be used for two separate operations:

$\tuple {a_1, a_2, \ldots, a_k, a_{k + 1} } \circ \tuple {b_1, b_2, \ldots, b_k, b_{k + 1} }$
and:

$\tuple {a_1, a_2, \ldots, a_k} \circ \tuple {b_1, b_2, \ldots, b_k}$

Thus:














\(\ds a \circ \paren {b \circ c}\)

\(=\)







\(\ds \tuple {a_1, a_2, \ldots, a_k, a_{k + 1} } \circ \paren {\tuple {b_1, b_2, \ldots, b_k, b_{k + 1} } \circ \tuple {c_1, c_2, \ldots, c_k, c_{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\tuple {a_1, a_2, \ldots, a_k}, a_{k + 1} } \circ \paren {\tuple {\tuple {b_1, b_2, \ldots, b_k}, b_{k + 1} } \circ \tuple {\tuple {c_1, c_2, \ldots, c_k}, c_{k + 1} } }\)





Definition of Ordered Tuple














\(\ds \)

\(=\)







\(\ds \tuple {\tuple {a_1, a_2, \ldots, a_k} \circ \paren {\tuple {b_1, b_2, \ldots, b_k} \circ \tuple {c_1, c_2, \ldots, c_k} }, a_{k + 1} \circ_{k + 1} \paren {b_{k + 1} \circ_{k + 1} c_{k + 1} } }\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\tuple {a_1, a_2, \ldots, a_k} \circ \tuple {b_1, b_2, \ldots, b_k} } \circ \tuple {c_1, c_2, \ldots, c_k}, a_{k + 1} \circ_{k + 1} \paren {b_{k + 1} \circ_{k + 1} c_{k + 1} } }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \tuple {\paren {\tuple {a_1, a_2, \ldots, a_k} \circ \tuple {b_1, b_2, \ldots, b_k} } \circ \tuple {c_1, c_2, \ldots, c_k}, \paren {a_{k + 1} \circ_{k + 1} b_{k + 1} } \circ_{k + 1} c_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {\tuple {\tuple {a_1, a_2, \ldots, a_k}, a_{k + 1} } \circ \tuple {\tuple {b_1, b_2, \ldots, b_k}, b_{k + 1} } } \circ \tuple {\tuple {c_1, c_2, \ldots, c_k}, c_{k + 1} }\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \paren {\tuple {a_1, a_2, \ldots, a_k, a_{k + 1} } \circ \tuple {b_1, b_2, \ldots, b_k, b_{k + 1} } } \circ \tuple {c_1, c_2, \ldots, c_k, c_{k + 1} }\)





Definition of Ordered Tuple














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ c\)





By Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:
For all $n \in \N_{> 0}$:

If $\circ_1, \ldots, \circ_n$ are all associative, then so is the external direct product $\circ$ of $\circ_1, \ldots, \circ_n$.
$\blacksquare$


Also see
External Direct Product Commutativity
External Direct Product Identity
External Direct Product Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.10: \ 1^\circ$




