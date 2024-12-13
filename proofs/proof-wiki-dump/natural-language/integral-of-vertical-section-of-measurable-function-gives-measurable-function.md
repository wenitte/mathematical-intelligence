# 

Source: https://proofwiki.org/wiki/Integral_of_Vertical_Section_of_Measurable_Function_gives_Measurable_Function

Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.
Let $f : X \times Y \to \overline \R_{\ge 0}$ be a positive $\Sigma_X \otimes \Sigma_Y$-measurable function, where $\Sigma_X \otimes \Sigma_Y$ is the product $\sigma$-algebra of $\Sigma_X$ and $\Sigma_Y$.
Define the function $g : X \to \overline \R$ by: 

$\ds \map g x = \int f_x \rd \nu$
where $f_x$ is the $x$-vertical section of $f$. 

Then: 

$g$ is $\Sigma_X$-measurable.


Proof
First we prove the case of:

$f = \chi_E$
where $E$ is a $\Sigma_X \otimes \Sigma_Y$-measurable set.
From Vertical Section of Characteristic Function is Characteristic Function of Vertical Section, we have: 

$f_x = \chi_{E_x}$
From Vertical Section of Measurable Function is Measurable, we also have: 

$f_x$ is $\Sigma_Y$-measurable.
Since $f \ge 0$, we may take $\nu$-integrals, giving: 














\(\ds \int f_x \rd \nu\)

\(=\)







\(\ds \int \chi_{E_x} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \map {\nu} {E_x}\)





Integral of Characteristic Function: Corollary



so that: 

$\map g x = \map {\nu} {E_x}$ for each $x \in X$.
From Measure of Vertical Section of Measurable Set gives Measurable Function, we then have: 

$g$ is $\Sigma_X$-measurable
in the case that $f$ is a characteristic function.

Now consider the case of simple $f$. 
Write the standard representation of $f$ as: 

$\ds f = \sum_{k \mathop = 1}^n a_k \chi_{E_k}$
with:

$E_1, E_2, \ldots, E_n$ pairwise disjoint $\Sigma_X \otimes \Sigma_Y$-measurable sets
$a_1, a_2, \ldots, a_n$ real numbers.
Then, we have, from Vertical Section of Simple Function is Simple Function:

$f_x$ is a positive simple function
with:

$\ds f_x = \sum_{k \mathop = 1}^n a_k \chi_{\paren {E_k}^y}$
where:

$\paren {E_1}_x, \paren {E_2}_x, \ldots, \paren {E_n}_x$ are pairwise disjoint $\Sigma_Y$-measurable sets
$a_1, a_2, \ldots, a_n$ non-negative real numbers.
From Simple Function is Measurable, we have: 

$f$ is $\Sigma_X \otimes \Sigma_Y$-measurable.
From Vertical Section of Measurable Function is Measurable, we also have: 

$f_x$ is $\Sigma_Y$-measurable.
Since $f \ge 0$, we may take $\nu$-integrals, giving:














\(\ds \int f_x \rd \nu\)

\(=\)







\(\ds \int \paren {\sum_{k \mathop = 1}^n a_k \chi_{\paren {E_k}_x} } \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int \paren {a_k \chi_{\paren {E_k}_x} } \rd \nu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {\int \chi_{\paren {E_k}_x} \rd \nu}\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \map {\nu} {\paren {E_k}_x}\)





Integral of Characteristic Function: Corollary



giving:

$\ds \map g x = \sum_{k \mathop = 1}^n a_k \map {\nu} {\paren {E_k}_x}$
From Pointwise Sum of Measurable Functions is Measurable: General Result, we have: 

$g$ is $\Sigma_X$-measurable
in the case that $f$ is a simple function.

Now take a general positive $\Sigma_X \otimes \Sigma_Y$-measurable function $f$.
From Measurable Function is Pointwise Limit of Simple Functions:

there exists a increasing sequence of positive simple functions $\sequence {f_n}_{n \mathop \in \N}$ such that $f_n \to f$ pointwise.
From Vertical Section preserves Increasing Sequences of Functions, we have: 

the sequence $\sequence {\paren {f_n}_x}_{n \mathop \in \N}$ is increasing.
From Vertical Section preserves Pointwise Limits of Sequences of Functions, we have: 

$\ds f_x = \lim_{n \mathop \to \infty} \paren {f_n}_x$
From the Monotone Convergence Theorem, we then have: 

$\ds \map g x = \int f_x \rd \nu = \lim_{n \mathop \to \infty} \int \paren {f_n}_x \rd \nu$
For each $n \in \N$, define the function $g_n : X \to \overline \R$ by: 

$\ds \map {g_n} x = \int \paren {f_n}_x \rd \nu$
Since each $f_n$ is a positive simple function, we have that: 

$\ds \sequence {g_n}_{n \mathop \in \N}$ is a sequence of $\Sigma_X$-measurable functions.
So $g$ is the limit of a sequence of $\Sigma_X$-measurable functions.
Then, from Pointwise Limit of Measurable Functions is Measurable, we have: 

$g$ is $\Sigma_X$-measurable
for each positive $\Sigma_X \otimes \Sigma_Y$-measurable $f$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $5.2$: Fubini's Theorem: Proposition $5.2.1 \text{ (a)}$




