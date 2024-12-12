# 

Source: https://proofwiki.org/wiki/Degree_of_Product_of_Polynomials_over_Ring



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$.
Let $R \sqbrk X$ be the polynomial ring over $R$ in the indeterminate $X$.
Let $f, g \in R \sqbrk X$.

Then:

$\forall f, g \in R \sqbrk X: \map \deg {f g} \le \map \deg f + \map \deg g$
where:

$\map \deg f$ denotes the degree of $f$.


Corollary 1
Let $R$ have no proper zero divisors.
Then:

$\forall f, g \in R \sqbrk X: \map \deg {f g} = \deg f + \deg g$


Corollary 2
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$.
Let $D \sqbrk X$ be the ring of polynomials over $D$ in the indeterminate $X$.
For $f \in D \sqbrk X$ let $\map \deg f$ denote the degree of $f$.

Then:

$\forall f, g \in D \sqbrk X: \map \deg {f g} = \map \deg f + \map \deg g$


Proof
Let the leading coefficient of:

$\map f X$ be $a_n$
$\map g X$ be $b_n$.
Then:














\(\ds \map f X\)

\(=\)







\(\ds a_n X^n + \cdots + a_0\)




















\(\ds \map g X\)

\(=\)







\(\ds b_n X^n + \cdots + b_0\)










Consider the leading coefficient of the product $\map f X \map g X$: call it $c$.

From the definition of polynomial addition and polynomial multiplication: 

$\map f X \map g X = c X^{n + m} + \cdots + a_0 b_0$
Clearly the highest term of $\map f X \map g X$ can have an index no higher than $n + m$.
Hence the result:

$\map \deg {f g} \not > \map \deg f + \map \deg g$

Next, note that the general ring with unity $\struct {R, +, \circ}$ may have proper zero divisors.
Therefore it is possible that $X^{n + m}$ may equal $0_R$.
If that is the case, then the highest term will have an index definitely less than $n + m$.
That is, in that particular case:

$\map \deg {f g} < \map \deg f + \map \deg g$
Thus, for a general ring with unity $\struct {R, +, \circ}$:

$\map \deg {f g} \le \map \deg f + \map \deg g$
$\blacksquare$


Also see
Degree of Sum of Polynomials


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.2$: Polynomial rings: Lemma $3.7 \ \text{(ii)}$




