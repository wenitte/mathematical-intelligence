# 

Source: https://proofwiki.org/wiki/Lebesgue%27s_Dominated_Convergence_Theorem/Lemma

Lemma
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function. 
Let $g : X \to \overline \R_{\ge 0}$ be a $\mu$-integrable function.
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


Proof
We first show that: 

$f$ is $\mu$-integrable and $f_n$ is $\mu$-integrable for each $n \in \N$
From Integral of Positive Measurable Function is Monotone, we have: 

$\ds \int \size {f_n} \rd \mu \le \int g \rd \mu < \infty$
so, from Characterization of Integrable Functions:

$f_n$ is $\mu$-integrable for each $n \in \N$.
Note that we also have: 

$\size {\map f x} \le \map g x$
from Modulus of Limit.
From Integral of Positive Measurable Function is Monotone, we then obtain: 

$\ds \int \size f \rd \mu \le \int g \rd \mu < \infty$
so, from Characterization of Integrable Functions:

$f$ is $\mu$-integrable.

From Convergence of Limsup and Liminf, we have: 

$\ds \int f \rd \mu = \lim_{n \mathop \to \infty} \int f_n \rd \mu$
if and only if: 

$\ds \int f \rd \mu = \limsup_{n \mathop \to \infty} \int f_n \rd \mu = \liminf_{n \mathop \to \infty} \int f_n \rd \mu$
We have: 

$\ds \liminf_{n \mathop \to \infty} \int f_n \rd \mu \le \limsup_{n \mathop \to \infty} \int f_n \rd \mu$
We will show that: 

$\ds \limsup_{n \mathop \to \infty} \int f_n \rd \mu \le \int f \rd \mu \le \liminf_{n \mathop \to \infty} \int f_n \rd \mu$
so that: 

$\ds \liminf_{n \mathop \to \infty} \int f_n \rd \mu = \limsup_{n \mathop \to \infty} \int f_n \rd \mu$
then we will have: 

$\ds \int f \rd \mu = \limsup_{n \mathop \to \infty} \int f_n \rd \mu = \liminf_{n \mathop \to \infty} \int f_n \rd \mu$

We first show that: 

$\ds \int f \rd \mu \le \liminf_{n \mathop \to \infty} \int f_n \rd \mu$
From Pointwise Sum of Measurable Functions is Measurable, we have: 

$g + f_n$ is $\Sigma$-measurable for each $n \in \N$.
Since we also have: 

$\map {f_n} x \ge -\map g x$
we have: 

$\map {f_n} x + \map g x \ge 0$
for each $n \in \N$.
We also have: 

$\ds \map f x + \map g x = \lim_{n \mathop \to \infty} \paren {\map {f_n} x + \map g x}$
from Sum Rule for Real Sequences.
From Convergence of Limsup and Liminf, this gives: 

$\ds \map f x + \map g x = \liminf_{n \mathop \to \infty} \paren {\map {f_n} x + \map g x}$
From Fatou's Lemma for Integrals: Positive Measurable Functions, we have: 

$\ds \int \paren {f + g} \rd \mu \le \liminf_{n \mathop \to \infty} \int \paren {f_n + g} \rd \mu$
We then have: 

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$
from Integral of Integrable Function is Additive.
We also have: 














\(\ds \liminf_{n \mathop \to \infty} \int \paren {f_n + g} \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \int \paren {f_k + g} \rd \mu}\)





Definition of Limit Inferior














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \paren {\int f_k \rd \mu + \int g \rd \mu} }\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \int f_k \rd \mu + \int g \rd \mu}\)





Infimum Plus Constant














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \int f_k \rd \mu} + \int g \rd \mu\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \liminf_{n \mathop \to \infty} \int f_n \rd \mu + \int g \rd \mu\)





Definition of Limit Inferior



So we have: 

$\ds \int f \rd \mu + \int g \rd \mu \le \liminf_{n \mathop \to \infty} \int f_n \rd \mu + \int g \rd \mu$
so:

$\ds \int f \rd \mu \le \liminf_{n \mathop \to \infty} \int f_n \rd \mu$

We now show that: 

$\ds \limsup_{n \mathop \to \infty} \int f_n \rd \mu \le \int f \rd \mu$
From Pointwise Difference of Measurable Functions is Measurable, we have: 

$g - f_n$ is $\Sigma$-measurable for each $n \in \N$.
Since we also have:

$-\map g x \le \map {f_n} x \le \map g x$
so:

$-\map g x \le -\map {f_n} x \le \map g x$
giving: 

$0 \le \map g x - \map {f_n} x \le 2 \map g x$
We also have: 

$\ds \map g x - \map f x = \lim_{n \mathop \to \infty} \paren {\map g x - \map {f_n} x}$
from Difference Rule for Sequences.
From Convergence of Limsup and Liminf, we have: 

$\ds \map g x - \map f x = \limsup_{n \mathop \to \infty} \paren {\map g x - \map {f_n} x}$
From Fatou's Lemma for Integrals: Positive Measurable Functions, we have: 

$\ds \int \paren {g - f} \rd \mu \le \liminf_{n \mathop \to \infty} \int \paren {g - f_n} \rd \mu$
We then have: 

$\ds \int \paren {g - f} \rd \mu = \int g \rd \mu - \int f \rd \mu$
from Integral of Integrable Function is Additive: Corollary $2$.
We also have: 














\(\ds \liminf_{n \mathop \to \infty} \int \paren {g - f_n} \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \int \paren {g - f_n} \rd \mu}\)





Definition of Limit Inferior














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\inf_{n \ge k} \paren {\int g \rd \mu - \int f_n \rd \mu} }\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int g \rd \mu + \inf_{n \ge k} \paren {-\int f_n \rd \mu} }\)





Infimum Plus Constant














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int g \rd \mu - \sup_{n \ge k} \paren {\int f_n \rd \mu} }\)





Negative of Supremum is Infimum of Negatives














\(\ds \)

\(=\)







\(\ds \int g \rd \mu - \lim_{n \mathop \to \infty} \paren {\sup_{n \ge k} \int f_k \rd \mu}\)





Difference Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \int g \rd \mu - \limsup_{n \mathop \to \infty} \int f_n \rd \mu\)





Definition of Limit Superior



So we have: 

$\ds \int g \rd \mu - \int f \rd \mu \le \int g \rd \mu - \limsup_{n \mathop \to \infty} \int f_n \rd \mu$
so:

$\ds \limsup_{n \mathop \to \infty} \int f_n \rd \mu \le \int f \rd \mu$
$\blacksquare$





