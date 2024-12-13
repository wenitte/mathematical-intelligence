# 

Source: https://proofwiki.org/wiki/P-Norm_of_Real_Sequence_is_Strictly_Decreasing_Function_of_P

Theorem
Let $p \ge 1$ be a real number.
Let ${\ell^p}_\R$ denote the real $p$-sequence space.
Let $\mathbf x = \sequence {x_n} \in {\ell^p}_\R$.
Suppose $\mathbf x$ is not a sequence of zero elements.
Let $\norm {\mathbf x}_p$ denote the $p$-norm of $\mathbf x$ where $p \ge 1$.

Then the mapping $p \to \norm {\mathbf x}_p$ is strictly decreasing with respect to $p$.


Proof









\(\ds \forall i \in \N: \, \)



\(\ds \sum_{n \mathop = 0}^\infty {\size {x_n} }\)

\(\ge\)







\(\ds \size {x_i}\)





Common Notion $5$: the whole is greater than the part








\(\ds \leadsto \ \ \)

\(\ds \forall i \in \N: \, \)



\(\ds \paren {\sum_{n \mathop = 0}^\infty {\size {x_n} }^p }^{\frac 1 p}\)

\(\ge\)







\(\ds \paren { {\size {x_i}^p } }^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \size {x_i}\)









Equality holds only for a sequence of zero elements.
Suppose $\mathbf x$ is not a sequence of zero elements.
Then:








\(\ds \leadsto \ \ \)

\(\ds \forall i \in \N: \, \)



\(\ds \paren {\sum_{n \mathop = 0}^\infty {\size {x_n} }^p }^{\frac 1 p}\)

\(>\)







\(\ds \size {x_i}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 p \map \ln {\sum_{n \mathop = 0}^\infty {\size {x_n} }^p}\)

\(>\)







\(\ds \map \ln {\size {x_i} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 p \map \ln {\sum_{n \mathop = 0}^\infty {\size {x_n} }^p} \sum_{i \mathop = 0}^\infty {\size {x_i} }^p\)

\(>\)







\(\ds \sum_{i \mathop = 0}^\infty {\size {x_i} }^p \map \ln {\size {x_i} }\)





Multiply both sides by $\size {x_i}$ and sum over $i \in \N$








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 0}^\infty {\size {x_i} }^p \map \ln {\size {x_i} } - \frac 1 p \map \ln {\sum_{n \mathop = 0}^\infty {\size {x_n} }^p} \sum_{i \mathop = 0}^\infty {\size {x_i} }^p\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 0}^\infty {\size {x_i} }^p \map \ln {\size {x_i} } - \map \ln {\norm {\mathbf x}_p} \norm {\mathbf x}_p^p\)

\(<\)







\(\ds 0\)





Definition of Real P-Norm; Denote this inequality as $\paren \star$




By derivative of $p$-norm with respect to $p$:














\(\ds \dfrac \d {\d p} \norm {\mathbf x}_p\)

\(=\)







\(\ds \frac {\norm {\mathbf x}_p} p \paren {\frac {\sum_{i \mathop = 0}^\infty \size {x_i}^p \map \ln {\size {x_i} } } {\norm {\bf x}_p^p} - \map \ln {\norm {\bf x}_p} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p \norm {\mathbf x}_p^{p \mathop - 1} } \paren {\sum_{i \mathop = 0}^\infty \size {x_i}^p \map \ln {\size {x_i} }  - \norm {\mathbf x}_p^p \map \ln {\norm {\bf x}_p} }\)









By $\paren \star$, the term in parenthesis is negative.
By $p$-Norm is Norm:

$\norm {\mathbf x}_p > 0$ for $\mathbf x \ne \sequence 0$.
Hence:

$\forall p \ge 1 : \forall \mathbf x \ne \sequence 0 : \dfrac \d {\d p} \norm {\mathbf x}_p < 0$

$\blacksquare$





