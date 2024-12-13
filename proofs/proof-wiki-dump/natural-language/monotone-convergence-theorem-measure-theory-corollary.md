# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_(Measure_Theory)/Corollary

Corollary to Monotone Convergence Theorem (Measure Theory)
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $u : X \to \overline \R_{\ge 0}$ be a positive $\Sigma$-measurable function. 
Let $\sequence {u_n}_{n \mathop \in \N}$ be an sequence of positive $\Sigma$-measurable functions $u_n : X \to \overline \R_{\ge 0}$ such that: 

$\map {u_i} x \ge \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $\mu$-almost all $x \in X$. 
Suppose also that $u_1$ is $\mu$-integrable function.

Then $u_n$ is $\mu$-integrable for each $n \in \N$ and $u$ is $\mu$-integrable with: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$


Proof
Suppose that: 

$\map {u_i} x \ge \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for all $x \in X$. 
Then in particular we have: 

$u_1 \ge u_n$ for each $n \in \N$.
From Integral of Positive Measurable Function is Monotone, we have: 

$\ds \int u_1 \rd \mu \ge \int u_n \rd \mu$
Since $u_1$ is $\mu$-integrable, we have that: 

$u_n$ is $\mu$-integrable for each $n \in \N$.
We also have: 

$u_1 \ge u$
so $u$ is $\mu$-integrable.
From Integrable Function is A.E. Real-Valued, for each $k \in \N$ there exists a $\mu$-null set $N_k \subseteq X$ such that:

whenever $\map {u_k} x = \infty$, we have $x \in N_k$.
Let: 

$\ds N = \bigcup_{k \mathop = 1}^\infty N_k$
then: 

$\map {u_k} x < \infty$ for each $x \in X \setminus N$ for all $k \in \N$.
Since $\sigma$-algebras are closed under countable union, we have: 

$N$ is $\Sigma$-measurable.
From Null Sets Closed under Countable Union, we have: 

$N$ is $\mu$-null.

Now let $\sequence {v_n}_{n \mathop \in \N}$ be a sequence of real-valued functions $v_k : X \to \R$ with: 

$\map {v_k} x = \map {u_1} x \times \map {\chi_{X \setminus N} } x - \map {u_k} x \times \map {\chi_{X \setminus N} } x$
We show that $\sequence {v_n}_{n \mathop \in \N}$ is an increasing sequence converging to: 

$v = u_1 \times \chi_{X \setminus N} - u \times \chi_{X \setminus N}$
which we will verify is well-defined. 
For $x \in X \setminus N$, we then have: 

$\map {v_k} x = \map {u_1} x - \map {u_k} x$
Since: 

$\sequence {\map {u_k} x}_{k \mathop \in \N}$ is an decreasing sequence
we have: 

$\sequence {\map {v_k} x}_{k \mathop \in \N}$ is a increasing sequence.
From Monotone Convergence Theorem (Real Analysis): Decreasing Sequence, we have: 

$\map u x < \infty$
So we have: 

$\ds \lim_{k \mathop \to \infty} \map {v_k} x = \map {u_1} x - \map u x = \map {u_1} x \times \map {\chi_{X \setminus N} } x - \map u x \times \map {\chi_{X \setminus N} } x$
for each $x \in X \setminus N$. 
Now suppose that $x \in N$. 
Then we have: 

$\map {v_k} x = 0$
for each $k \in \N$. 
Clearly, $\sequence {\map {v_k} x}_{k \mathop \in \N}$ is increasing and converges to: 

$0 = \map {u_1} x \times \map {\chi_{X \setminus N} } x - \map u x \times \map {\chi_{X \setminus N} } x$
So we have shown that $\sequence {v_n}_{n \mathop \in \N}$ is an increasing sequence with: 

$v_n \to u_1 \times \chi_{X \setminus N} - u \times \chi_{X \setminus N}$
By the Monotone Convergence Theorem, we therefore have: 

$\ds \int \paren {u_1 \times \chi_{X \setminus N} - u \times \chi_{X \setminus N} } \rd \mu = \lim_{n \mathop \to \infty} \int v_n \rd \mu$
That is: 

$\ds \int \paren {u_1 \times \chi_{X \setminus N} - u \times \chi_{X \setminus N} } \rd \mu = \lim_{n \mathop \to \infty} \paren {u_1 \times \chi_{X \setminus N} - u_n \times \chi_{X \setminus N} } \rd \mu$
From Integral of Integrable Function is Additive: Corollary 2, we have: 

$\ds \int \paren {u_1 \times \chi_{X \setminus N} } \rd \mu - \int \paren {u \times \chi_{X \setminus N} } \rd \mu = \int \paren {u_1 \times \chi_{X \setminus N} } \rd \mu - \lim_{n \mathop \to \infty} \int \paren {u_n \times \chi_{X \setminus N} } \rd \mu$
giving:

$\ds \int \paren {u \times \chi_{X \setminus N} } \rd \mu = \lim_{n \mathop \to \infty} \int \paren {u_n \times \chi_{X \setminus N} } \rd \mu$
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$u \times \chi_{X \setminus N} = u$ $\mu$-almost everywhere
and:

$u_n \times \chi_{X \setminus N} = u_n$ $\mu$-almost everywhere for each $n \in \N$.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int \paren {u \times \chi_{X \setminus N} } \rd \mu = \int u \rd \mu$
and:

$\ds \int \paren {u_n \times \chi_{X \setminus N} } \rd \mu = \int u_n \rd \mu$ for each $n \in \N$.
So we obtain: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$

Now suppose that:

$\map {u_i} x \ge \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $\mu$-almost all $x \in X$.
Then, there exists a $\mu$-null set $N_1 \subseteq X$ such that whenever: 

$\map {u_i} x < \map {u_j} x$ for some $i < j$
and:

either $\ds \lim_{n \mathop \to \infty} \map {u_n} x$ does not exist or $\ds \map u x \ne \lim_{n \mathop \to \infty} \map {u_n} x$
we have $x \in N$.
For each $n \in \N$, define $v_n : X \to \overline \R_{\ge 0}$ by: 

$\map {v_n} x = \map {u_n} x \times \map {\chi_{X \setminus N_1} } x$
for each $x \in X$. 
Also define $v : X \to \overline \R_{\ge 0}$ by:

$\map v x = \map u x \times \map {\chi_{X \setminus N_1} } x$
for each $x \in X$.
Clearly, if $x \in X \setminus N$, we have: 

$\map {v_n} x = \map {u_n} x$ for each $n$
and:

$\map v x = \map u x$
From the definition of $N$, we have: 

$\map {u_i} x \ge \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for $x \in X \setminus N$.
So:

$\map {v_i} x \ge \map {v_j} x$ for all $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
If $x \in N$, we have: 

$\map {v_n} x = 0$ for each $n \in \N$
and:

$\map v x = 0$
So we have: 

$\map {v_i} x \ge \map {v_j} x$ for $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
for $x \in N$. 
So, we have: 

$\map {v_i} x \ge \map {v_j} x$ for $i \le j$
and:

$\ds \map v x = \lim_{n \mathop \to \infty} \map {v_n} x$
for all $x \in X$.
From our previous work, we have: 

$\ds \int v \rd \mu = \lim_{n \mathop \to \infty} \int v_n \rd \mu$
That is: 

$\ds \int \paren {u \times \chi_{X \setminus N} } \rd \mu = \lim_{n \mathop \to \infty} \int \paren {u_n \times \chi_{X \setminus N} } \rd \mu$
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$u \times \chi_{X \setminus N} = u$ $\mu$-almost everywhere
and:

$u_n \times \chi_{X \setminus N} = u_n$ $\mu$-almost everywhere for each $n \in \N$.
Then from A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int \paren {u \times \chi_{X \setminus N} } \rd \mu = \int u \rd \mu$
and:

$\ds \int \paren {u_n \times \chi_{X \setminus N} } \rd \mu = \int u_n \rd \mu$ for each $n \in \N$.
So, we get: 

$\ds \int u \rd \mu = \lim_{n \mathop \to \infty} \int u_n \rd \mu$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.1 \ \text{(ii)}$




