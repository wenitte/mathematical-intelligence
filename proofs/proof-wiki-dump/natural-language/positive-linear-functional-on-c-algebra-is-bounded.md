# 

Source: https://proofwiki.org/wiki/Positive_Linear_Functional_on_C*-Algebra_is_Bounded

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ be a $\text C^\ast$-algebra.
Let $f : A \to \C$ be a positive linear functional.

Then $f$ is bounded.


Proof
From Linear Transformation from C*-Algebra is Bounded if Bounded on Positive Elements, it is enough to show that:

there exists $c > 0$ such that for all positive $x \in A$ we have $\cmod {\map f x} \le c \norm x$.
Aiming for a contradiction, suppose suppose that:

there does not exist $c > 0$ such that for all positive $x \in A$ we have $\cmod {\map f x} \le c \norm x$.
Then for each $n \in \N$ there exists $y_n \in A$ positive such that:

$\cmod {\map f {y_n} } > 2^n \norm {y_n}$
Since $y_n \ne {\mathbf 0}_A$, setting:

$\ds x_n = \frac {y_n} {\norm {y_n} }$
we have:

$\ds \cmod {\map f {x_n} } > 2^n$
with $\norm {x_n} = 1$.
Further, $x_n$ is positive for each $n \in \N$ by Non-Negative Multiple of Positive Element of C*-Algebra is Positive.
Hence $\map f {x_n} \ge 0$ for each $n \in \N$, and we have:

$\map f {x_n} > 2^n$
Hence we have, for each $n \in \N$:

$\ds \map f {\frac {x_n} {2^n} } > 1$
and hence:

$\ds \map f {\sum_{k \mathop = 1}^n \frac {x_k} {2^k} } > n$
by linearity.
We have:

$\ds \sum_{k \mathop = 1}^\infty \norm {\frac {x_k} {2^k} } = \sum_{k \mathop = 1}^\infty \frac 1 {2^k} < \infty$
from Sum of Infinite Geometric Sequence.
Hence from Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach, we have that:

$\ds \sum_{k \mathop = 1}^n \frac {x_k} {2^k} \to x$ as $n \to \infty$
for some $x \in A$.
From Convergent Series of Positive Elements of C*-Algebra is Positive, we have:

$\ds x - \sum_{k \mathop = 1}^n \frac {x_k} {2^k} = \sum_{k \mathop = n + 1}^\infty \frac {x_n} {2^n}$ is positive.
Since $f$ is a positive linear functional, we have:

$\ds \map f {x - \sum_{k \mathop = 1}^n \frac {x_k} {2^k} } \ge 0$
Since $x$ and $\ds \sum_{k \mathop = 1}^n \frac {x_k} {2^k}$ are both positive, we have:

$\map f x \in \R_{\ge 0}$
and:

$\map f {\sum_{k \mathop = 1}^n \frac {x_k} {2^k} } \in \R_{\ge 0}$
since $f$ is positive.
Hence by linearity:

$\ds \map f x \ge \map f {\sum_{k \mathop = 1}^n \frac {x_k} {2^k} } > n$
Since $\map f x < \infty$, by taking $n > \map f x$ we obtain a contradiction.
Hence:

there exists $c > 0$ such that for all positive $x \in A$ we have $\cmod {\map f x} \le c \norm x$.
Hence $f$ is bounded by Linear Transformation from C*-Algebra is Bounded if Bounded on Positive Elements.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $3.3$: Positive Linear Functionals




