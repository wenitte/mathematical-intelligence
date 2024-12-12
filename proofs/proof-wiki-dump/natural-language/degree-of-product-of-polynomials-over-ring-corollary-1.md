# 

Source: https://proofwiki.org/wiki/Degree_of_Product_of_Polynomials_over_Ring/Corollary_1


It has been suggested that this page or section be merged into Degree of Product of Polynomials over Integral Domain.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Corollary to Degree of Product of Polynomials over Ring
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$.
Let $R \sqbrk X$ be the ring of polynomials over $R$ in the indeterminate $X$.
For $f \in R \sqbrk X$ let $\deg f$ be the degree of $f$.

Let $R$ have no proper zero divisors.
Then:

$\forall f, g \in R \sqbrk X: \map \deg {f g} = \deg f + \deg g$


Proof
Let the leading coefficient of:

$\map f X$ be $a_n$
$\map g X$ be $b_m$.
From Degree of Product of Polynomials over Ring:

$\map \deg {f g} \le \deg f + \deg g$

From the definition of polynomial multiplication:

$\map f X \map g X = a_n b_m X^{n + m} + \cdots + a_0 b_0$

As $\struct {R, +, \circ}$ has no proper zero divisors the $X^{n + m}$ term can not equal $0_R$ and so:

$\map \deg {f g} = \deg f + \deg g$
$\blacksquare$





