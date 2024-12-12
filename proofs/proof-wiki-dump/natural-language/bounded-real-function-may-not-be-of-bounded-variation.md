# 

Source: https://proofwiki.org/wiki/Bounded_Real_Function_may_not_be_of_Bounded_Variation

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a bounded function.

Then $f$ is not necessarily of bounded variation.


Proof
Let $a = 0$, $b = 1$.
Define $f : \closedint 0 1 \to \R$ by: 

$\map f x = \begin{cases} 1 & x \in \Q \\ 0 & x \not \in \Q \end{cases}$
For each finite subdivision $P$ of $\closedint 0 1$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$0 = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = 1$
For each such subdivision also write:

$\ds \map {V_f} {P ; \closedint 0 1} = \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }$
It suffices to find a sequence of finite subdivisions $\sequence {P_n}$ such that: 

$\ds \lim_{n \mathop \to \infty} \map {V_f} {P_n ; \closedint 0 1} = \infty$
by the definition of bounded variation.

For each $n \in \N$, let $P_n$ be a finite subdivision of size $n + 2$.
Let $\sequence {x_n}_{0 \mathop \le i \mathop \le n + 2}$ be the sequence forming this subdivision.
Note that from Between two Rational Numbers exists Irrational Number:

it is possible to select an irrational number strictly between two rational numbers.
Similarly from Between two Real Numbers exists Rational Number:

it is possible to select a rational number strictly between two irrational numbers.
We can therefore define $x_i$ for $1 \le i \le n + 1$ as follows:

if $i$ is odd, let $x_i$ be an irrational number between $x_{i - 1}$ and $b$
if $i$ is even, let $x_i$ be a rational number between $x_{i - 1}$ and $b$.
Let $x_0 = 0$ and $x_{n + 2} = 1$ to complete the definition.
Then:














\(\ds \map {V_f} {P_n ; \closedint 0 1}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{n + 2} \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{i \mathop = 1}^{n + 1} \size {\map f {x_i} - \map f {x_{i - 1} } }\)









We omit the term $i = n + 2$ for convenience.
Note that:

if $x_i$ is rational then $x_{i + 1}$ is irrational.
That is:

if $\map f {x_i} = 1$ then $\map f {x_{i + 1} } = 0$.
Similarly:

if $x_i$ is irrational then $x_{i + 1}$ is rational.
That is:

if $\map f {x_i} = 0$ then $\map f {x_{i + 1} } = 1$.
So for all $1 \le i \le n + 1$, we have:

$\size {\map f {x_i} - \map f {x_{i - 1} } } = 1$
Hence:

$\ds \sum_{i \mathop = 1}^{n + 1} \size {\map f {x_i} - \map f {x_{i - 1} } } = n + 1$
So:

$\ds \map {V_f} {P_n ; \closedint 0 1} \ge n + 1$
giving:

$\ds \lim_{n \mathop \to \infty} \map {V_f} {P_n ; \closedint 0 1} = \infty$
as required.
$\blacksquare$


Also see
Function of Bounded Variation is Bounded: this result shows that the converse of that result is false.




