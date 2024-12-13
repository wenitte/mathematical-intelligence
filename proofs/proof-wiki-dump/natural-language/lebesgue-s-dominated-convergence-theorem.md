# 

Source: https://proofwiki.org/wiki/Lebesgue%27s_Dominated_Convergence_Theorem



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function. 
Let $g : X \to \overline \R_{\ge 0}$ be a $\mu$-integrable function.
Let $\sequence {f_n}_{n \mathop \in \N}$ be an sequence of $\Sigma$-measurable function $f_n : X \to \overline \R$ such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
and:

$\ds \size {\map {f_n} x} \le \map g x$
hold for $\mu$-almost all $x \in X$.

Then: 

$f$ is $\mu$-integrable and $f_n$ is $\mu$-integrable for each $n \in \N$
and:

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$


Proof
Lemma
Let $\sequence {f_n}_{n \mathop \in \N}$ be an sequence of $\Sigma$-measurable function $f_n : X \to \overline \R$ such that: 

$\ds (1): \quad \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
$\ds (2): \quad \size {\map {f_n} x} \le \map g x$
$\ds (3): \quad \map {f_n} x < \infty$
$\ds (4): \quad \map g x < \infty$
hold for each $x \in X$.

Then: 

$f$ is $\mu$-integrable and $f_n$ is $\mu$-integrable for each $n \in \N$
and:

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
$\Box$

Since: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
and:

$\ds \size {\map {f_n} x} \le \map g x$
hold for $\mu$-almost all $x \in X$, there exists a $\mu$-null set $N_1 \subseteq X$ such that whenever: 

either $\ds \lim_{n \mathop \to \infty} \map {u_n} x$ does not exist or $\ds \map u x \ne \lim_{n \mathop \to \infty} \map {u_n} x$
or: 

$\ds \size {\map {f_n} x} > \map g x$
then $x \in N_1$.
From Integrable Function is A.E. Real-Valued, there exists a $\mu$-null set $N_2 \subseteq X$ such that whenever: 

$\map g x = \infty$
we have $x \in N_2$.
Let: 

$N = N_1 \cap N_2$
From Sigma-Algebra Closed under Countable Intersection, we have that $N$ is $\Sigma$-measurable. 
From Intersection is Subset, we have: 

$N \subseteq N_1$
From Null Sets Closed under Subset, we have: 

$N$ is a $\mu$-null set.
Now define a function $u : X \to \overline \R$ by: 

$\map u x = \map f x \map {\chi_{X \setminus N} } x$
for each $x \in X$. 
Define a function $v : X \to \overline \R_{\ge 0}$ by: 

$\map v x = \map g x \map {\chi_{X \setminus N} } x$
for each $x \in X$. 
For each $n \in \N$ define a function $u_n : X \to \overline \R$ by: 

$\map {u_n} x = \map {f_n} x \map {\chi_{X \setminus N} } x$
for each $x \in X$. 
We now show that: 

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
and:

$\size {\map {u_n} x} \le \map v x$
for each $x \in X$, and: 

$v$ is $\mu$-integrable with $\map v x < \infty$ for each $x \in X$
so that we can apply the lemma.

Let $x \in N$, then: 

$\map {u_n} x = 0$ for each $n$
and:

$\map u x = 0$
So we have: 

$\ds \lim_{n \mathop \to \infty} \map {u_n} x = \map u x$
We also trivially have: 

$\size {\map {u_n} x} \le \map v x$
Now, let $x \in X \setminus N$. 
We have: 

$\map {u_n} x = \map {f_n} x$ for each $n \in \N$
and: 

$\map u x = \map f x$
So, we have: 

$\ds \lim_{n \mathop \to \infty} \map {u_n} x = \map u x$
We also have: 

$\map g x = \map v x$
From the definition of $N$, we also have: 

$\size {\map {f_n} x} \le \map g x$
So that: 

$\size {\map {u_n} x} \le \map v x$
It remains to verify that: 

$v$ is $\mu$-integrable with $\map v x < \infty$ for each $x \in X$
By the definition of $N$, we have: 

$\map g x < \infty$ for all $x \in X \setminus N$
So, for $x \in X \setminus N$, we have: 

$\map v x < \infty$
From Integral of Integrable Function over Measurable Set is Well-Defined, we also have: 

$v$ is $\mu$-integrable.

So, from the lemma, we obtain: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$
and: 

$u_n$ is $\mu$-integrable for each $n$, and $u$ is  $\mu$-integrable.
That is: 

$\ds \int \paren {f \times \chi_{X \setminus N} } \rd \mu = \lim_{n \mathop \to \infty} \int \paren {f_n \times \chi_{X \setminus N} } \rd \mu$
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
Then, from Pointwise Multiplication preserves A.E. Equality, we have: 

$f_n \times \chi_{X \setminus N} = f_n$ $\mu$-almost everywhere for each $n \in \N$
and:

$f \times \chi_{X \setminus N} = f$ $\mu$-almost everywhere.
So, from A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$f_n$ is $\mu$-integrable for each $n \in \N$
with: 

$\ds \int f_n \rd \mu = \int \paren {f_n \times \chi_{X \setminus N} } \rd \mu$ for each $n \in \N$.
We also obtain: 

$f$ is $\mu$-integrable
with:

$\ds \int f \rd \mu = \int \paren {f \times \chi_{X \setminus N} } \rd \mu$
So, we obtain: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
$\blacksquare$


Source of Name
This entry was named for Henri Léon Lebesgue.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.2$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.4$: Limit Theorems: $2.4.5$




