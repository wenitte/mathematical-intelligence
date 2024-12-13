# 

Source: https://proofwiki.org/wiki/Minimal_Arithmetic_is_Sigma_1_Complete



Theorem
Let $\phi$ be a $\Sigma_1$ sentence in the language of arithmetic.
Suppose $\N \models \phi$.
Then $\phi$ is a theorem in minimal arithmetic.


Proof
By definition of $\Sigma_1$, $\phi$ is logically equivalent to:

$Q_1 Q_2 \dotsm Q_k \map \psi {x_1, x_2, \dotsc, x_k}$
where $\psi$ is a WFF with no quantifiers.
Proceed by induction on the number of quantifiers in the formula.


Basis for the Induction
Let $x_1, x_2, \dotsc, x_k \in \N$ be natural numbers.
Let $\sqbrk x$ denote the unary representation of $x$.
By Quantifier-Free Formula of Arithmetic is Provable:

$\map \psi {x_1 \gets \sqbrk {x_1}, x_2 \gets \sqbrk {x_2}, \dotsc, x_k \gets \sqbrk {x_k} }$
is a theorem whenever $\N \models \map \psi {\dots}$.


Induction Hypothesis
Let $\psi$ be a WFF with $n$ quantifiers and $k - n$ free variables.
Suppose that, for every $x_1, x_2, \dotsc, x_{k - n} \in \N$ such that:

$\N \models \map \psi {x_1 \gets \sqbrk {x_1}, x_2 \gets \sqbrk {x_2}, \dotsc, x_{k - n} \gets \sqbrk {x_{k - n} } }$
it follows that:

$\map \psi {x_1 \gets \sqbrk {x_1} \dotsc, x_{k - n} \gets \sqbrk {x_{k - n} } }$
is a theorem.


Induction Step
Suppose the $k - n$-th quantifier is existential.
The step follows from Existential Quantification of Provable Arithmetic Formula is Provable.

Suppose instead that the $k - n$th quantifier is bounded universal.
The step follows from Bounded Universal Quantification of Provable Arithmetic Formula is Provable.
$\Box$

By Principle of Mathematical Induction, the statement holds in particular for $n = k$.
That is, when there are no free variables, and every quantifier has been considered.
$\blacksquare$





