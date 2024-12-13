# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Restriction_of_Measure_to_Trace_Sigma-Algebra_of_Measurable_Set

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $A \in \Sigma$.
Let $\Sigma_A$ be the trace $\sigma$-algebra of $A$ in $\Sigma$.
Let $\mu \restriction_{\Sigma_A}$ be the restriction of $\mu$ to $\Sigma_A$. 
Let $f : X \to \overline \R$ be a positive measurable function.
Let $f \restriction_A$ be the restriction of $f$ to $A$. 
Define $f^\ast : X \to \overline \R$ by: 

$\ds \map {f^\ast} x = \begin{cases}\map f x & x \in A \\ 0 & x \not \in A\end{cases}$
for each $x \in X$. 

Then, we have: 

$\ds \int \paren {f \restriction_A} \rd \paren {\mu \restriction_{\Sigma_A} } = \int f^\ast \rd \mu$


Proof
From Restriction of Measurable Function is Measurable on Trace Sigma-Algebra, $f \restriction_A$ is $\Sigma_A$-measurable.
Consider the case that $f$ is a positive simple function.
From Simple Function has Standard Representation, there exists: 

a finite sequence $a_0, \ldots, a_n$ of non-negative real numbers
a partition $E_0, E_1, \ldots, E_n$ of $\Sigma_A$-measurable sets
such that: 

$\ds f \restriction_A \, = \sum_{j \mathop = 0}^n a_j \chi_{E_j}$
From Trace Sigma-Algebra of Measurable Set: 

$E_0, E_1, \ldots, E_n$ are in fact $\Sigma$-measurable subsets of $A$.
Then, since $\map {f^\ast} x = 0$ for $x \in X \setminus A$, we have: 

$\ds f^\ast = \sum_{j \mathop = 0}^n a_j \chi_{E_j}$
Then $f^\ast$ is a positive simple function. 
Then, we have: 














\(\ds \int f^\ast \rd \mu\)

\(=\)







\(\ds \sum_{j \mathop = 0}^n a_j \map \mu {E_j}\)





Definition of Integral of Positive Simple Function, Integral of Positive Measurable Function Extends Integral of Positive Simple Function














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n a_j \map {\paren {\mu \restriction_{\Sigma_A} } } {E_j}\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set














\(\ds \)

\(=\)







\(\ds \int \paren {f \restriction_A} \rd \paren {\mu \restriction_{\Sigma_A} }\)





Definition of Integral of Positive Simple Function, Integral of Positive Measurable Function Extends Integral of Positive Simple Function



Now suppose that $f$ is a general positive $\Sigma$-measurable function.
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
In particular: 

$\ds \map {f \restriction_A} x = \lim_{n \mathop \to \infty} \map {f_n \restriction_A} x$
for each $x \in A$. 
We have established that $f^\ast$ (using the notation introduced in the hypotheses) is a positive simple function for each positive simple function $f$.
In particular, $f_n^\ast$ is a positive simple function for each $n \in \N$.
We now show that $f_n^\ast \to f^\ast$ pointwise.
Then we have, for $x \in A$: 














\(\ds \map {f^\ast} x\)

\(=\)







\(\ds \map f x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n^\ast} x\)









For $x \in X \setminus A$, we have: 














\(\ds \map {f^\ast} x\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} 0\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n^\ast} x\)









From Pointwise Limit of Measurable Functions is Measurable, we therefore have: 

$f^\ast$ is $\Sigma$-measurable.
From our previous computation with positive simple functions, we have: 

$\ds \int \paren {f_n \restriction_A} \rd \paren {\mu \restriction_{\Sigma_A} } = \int f_n^\ast \rd \mu$
Then, we have:














\(\ds \int f^\ast \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int f_n^\ast \rd \mu\)





Monotone Convergence Theorem (Measure Theory)














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int \paren {f_n \restriction_A} \rd \paren {\mu \restriction_{\Sigma_A} }\)




















\(\ds \)

\(=\)







\(\ds \int \paren {f \restriction_A} \rd \paren {\mu \restriction_{\Sigma_A} }\)





Monotone Convergence Theorem (Measure Theory)



as required.
$\blacksquare$





