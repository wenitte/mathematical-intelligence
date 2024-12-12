# 

Source: https://proofwiki.org/wiki/Formula_for_Total_Variation_of_Continuously_Differentiable_Function

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a continuously differentiable function.
Let $\map {V_} {\closedint a b}$ be the total variation of $f$ on $\closedint a b$.

Then:

$\ds V_f = \int_a^b \size {\map {f'} x} \rd x$


Proof
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
We first show that: 

$\ds \map {V_f} {\closedint a b} \le \int_a^b \size {\map {f'} x} \rd x$
We then show that: 

$\ds \int_a^b \size {\map {f'} x} \rd x \le \map {V_f} {\closedint a b}$
from which the claim follows.
From Differentiable Function is Continuous: 

$f$ is continuous on $\closedint a b$.
From Restriction of Continuous Mapping is Continuous:

$f$ is continuous on $\closedint {x_i} {x_{i + 1} }$ for each $i$.
Since $f'$ is continuous, we can apply the Fundamental Theorem of Calculus to obtain:

$\ds \map f {x_{i + 1} } - \map f {x_i} = \int_{x_i}^{x_{i + 1} } \map {f'} x \rd x$
Then:














\(\ds \size {\map f {x_{i + 1} } - \map f {x_i} }\)

\(=\)







\(\ds \size {\int_{x_i}^{x_{i + 1} } \map {f'} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_{x_i}^{x_{i + 1} } \size {\map {f'} x} \rd x\)









We therefore have, for each finite subdivisions $P$:














\(\ds \map {V_f} {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \size {\map f {x_{i + 1} } - \map f {x_i} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \int_{x_i}^{x_{i + 1} } \size {\map {f'} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \size {\map {f'} x} \rd x\)









From the definition of total variation, it follows that: 

$\ds \map {V_f} {\closedint a b} \le \int_a^b \size {\map {f'} x} \rd x$
We now turn attention to proving:

$\ds \int_a^b \size {\map {f'} x} \rd x \le V_f$
For each $i$, there exists $c_i \in \openint {x_i} {x_{i + 1} }$ such that: 

$\ds \map f {x_{i + 1} } - \map f {x_i} = \map f {c_i} \paren {x_{i + 1} - x_i}$
by the Mean Value Theorem.
We then have: 

$\ds \map L {\size {f'}, P} = \sum_{i \mathop = 0}^n \paren {\inf_{\closedint {x_i} {x_{i + 1} } } \size {f'} } \paren {x_{i + 1} - x_i}$
From the definition of infinum, we have: 

$\ds \inf_{\closedint {x_i} {x_{i + 1} } } \size {f'} \le \size {\map {f'} {c_i} }$
for each $i$. 
Then: 














\(\ds \sum_{i \mathop = 0}^n \paren {\inf_{\closedint {x_i} {x_{i + 1} } } \size {f'} } \paren {x_{i + 1} - x_i}\)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \size {\map {f'} {c_i} } \paren {x_{i + 1} - x_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \size {\map f {x_{i + 1} } - \map f {x_i} } \paren {x_{i + 1} - x_i}\)




















\(\ds \)

\(=\)







\(\ds \map {V_f} {P ; \closedint a b}\)









That is:

$\ds \map L {\size {f'}, P} \le \map {V_f} {P ; \closedint a b}$
Taking the supremum over all finite subdivisions $P$ of $\closedint a b$, we have: 

$\ds \map L {\size {f'} } \le \map {V_f} {\closedint a b}$
Note that $f$ is continuously differentiable, so:

$f'$ is continuous.
From Absolute Value of Continuous Real Function is Continuous:

$\size {f'}$ is continuous.
From Continuous Real Function is Darboux Integrable, we have: 

$\ds \map L {\size {f'} } = \int_a^b \size {\map {f'} x} \rd x$
So we obtain: 

$\ds \int_a^b \size {\map {f'} x} \rd x \le \map {V_f} {\closedint a b}$
Hence the result.
$\blacksquare$





