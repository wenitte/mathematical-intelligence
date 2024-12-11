# 

Source: https://proofwiki.org/wiki/A.E._Equal_Positive_Measurable_Functions_have_Equal_Integrals



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R_{\ge 0}$ be positive $\Sigma$-measurable functions.
Suppose that $f = g$ almost everywhere.

Then:

$\ds \int f \rd \mu = \int g \rd \mu$


Corollary 1
Let $f: X \to \overline \R$ be a $\mu$-integrable function.
Let $g: X \to \overline \R$ be $\Sigma$-measurable.
Suppose that $f = g$ almost everywhere.

Then $g$ is also $\mu$-integrable, and:

$\ds \int f \rd \mu = \int g \rd \mu$


Corollary 2
Let $f, g : X \to \overline \R$ be positive $\Sigma$-measurable functions. 
Suppose that $f = g$ $\mu$-almost everywhere. 
Let $A \in \Sigma$. 

Then: 

$\ds \int_A f \rd \mu = \int_A g \rd \mu$


Proof 1
Let $N$ be the set defined by:

$N = \set {x \in X: \map f x \ne \map g x}$
By hypothesis, $N$ is a $\mu$-null set.
If $N = \O$, then $f = g$, trivially implying the result.

If $N \ne \O$, then by Set with Relative Complement forms Partition:

$X = N \cup \paren {X \setminus N}$
Now:














\(\ds \int f \rd \mu\)

\(=\)







\(\ds \int f \chi_X \rd \mu\)





Characteristic Function of Universe














\(\ds \)

\(=\)







\(\ds \int f \chi_{N \cup \paren {X \setminus N} } \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\chi_N + \chi_{X \setminus N} } \rd \mu\)





Characteristic Function of Union














\(\ds \)

\(=\)







\(\ds \int f \chi_N \rd \mu + \int f \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds 0 + \int f \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function over Null Set














\(\ds \)

\(=\)







\(\ds \int g \chi_{X \setminus N} \rd \mu\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds \int g \chi_N \rd \mu + \int g \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function over Null Set














\(\ds \)

\(=\)







\(\ds \int \map g {\chi_N + \chi_{X \setminus N} } \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \int g \chi_X \rd \mu\)





Characteristic Function of Union














\(\ds \)

\(=\)







\(\ds \int g \rd \mu\)





Characteristic Function of Universe




The term Characteristic Function of Union as used here has been identified as being ambiguous.In particular: This variant is not posted yetIf you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
which establishes the result.
$\blacksquare$


Proof 2
Let: 

$A = \set {x \in X : \map f x \ne \map g x}$
From Measurable Functions Determine Measurable Sets, we have that: 

$A$ is $\Sigma$-measurable.
Define $h : X \to \overline \R$ by: 

$\map h x = \begin{cases}+\infty & x \in A \\ 0 & x \not \in A\end{cases}$
We can show that $h$ is $\Sigma$-measurable.
If $t < 0$, we have that: 

$\set {x \in X : \map h x \le t} = \O$
From Sigma-Algebra Contains Empty Set, we therefore have that: 

$\set {x \in X : \map h x \le t}$ is $\Sigma$-measurable if $t < 0$.
If $t \ge 0$, we have that: 

$\set {x \in X : \map h x \le t} = X \setminus A$
This is also $\Sigma$-measurable, so $h$ is a $\Sigma$-measurable function.
Clearly also $h \ge 0$. 
We can show that: 

$f \le g + h$
If $x \in A$, then $\map h x = +\infty$, so $\map g x + \map h x = +\infty$, and the inequality is satisfied trivially.
If $x \not \in A$, we have $\map f x = \map g x = \map g x + \map h x$, and so $\map f x \le \map g x + \map h x$ again.
From Integral of Positive Measurable Function is Monotone, we then have: 

$\ds \int f \rd \mu \le \int \paren {g + h} \rd \mu$
Applying Integral of Integrable Function is Additive, we then have: 

$\ds \int f \rd \mu \le \int g \rd \mu + \int h \rd \mu$
To compute the latter integral, note that: 

$x \in X$ is such that $\map h x \ne 0$ if and only if $x \in A$.
Since by hypothesis, $f = g$ $\mu$-almost everywhere, we have that: 

$\map \mu A = 0$
So:

$h = 0$ $\mu$-almost everywhere.
Then, by Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$\ds \int \size h \rd \mu = 0$
Since $h \ge 0$, this gives: 

$\ds \int h \rd \mu = 0$
and so: 

$\ds \int f \rd \mu \le \int g \rd \mu$
Similarly, we have: 

$g \le f + h$
and obtain: 

$\ds \int g \rd \mu \le \int f \rd \mu$
simply swapping $g$ for $f$ in the prior computation. 
We therefore have: 

$\ds \int f \rd \mu = \int g \rd \mu$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.10$




