# 

Source: https://proofwiki.org/wiki/Quotient_Normed_Algebra_of_Unital_Normed_Algebra_is_Unital_Normed_Algebra

Theorem
Let $\struct {R, \norm {\, \cdot \,}_R}$ be a normed division ring.
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital normed algebra with identity element ${\mathbf 1}_A$. 
Let $I$ be a closed proper ideal of $A$. 
Let $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ be the quotient normed algebra of $A$ modulo $I$.

Then:

$\norm { {\mathbf 1}_A + I}_{A/I} = 1$


Proof
From Norm of Identity Element in Normed Algebra Lower Bounded by One, we have $1 \le \norm { {\mathbf 1}_A + I}_{A/I}$.
Since $I$ is a linear subspace of $A$, we have ${\mathbf 0}_A \in I$. 
Hence we have:

$\ds \inf_{i \mathop \in I} \norm { {\mathbf 1}_A + i} \le \norm { {\mathbf 1}_A + {\mathbf 0}_A} = \norm { {\mathbf 1}_A}$
From the definition of a unital normed algebra, we have:

$\norm { {\mathbf 1}_A} = 1$
Hence we obtain:

$\norm { {\mathbf 1}_A + I}_{A/I} \le 1$
So:

$\norm { {\mathbf 1}_A + I}_{A/I} = 1$
$\blacksquare$





