# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_as_Expectation

Theorem
Let $X$ be a discrete random variable whose codomain, $\Omega_X$, is a subset of the natural numbers $\N$.
Let $p_X$ be the probability mass function for $X$.
Let $\map {\Pi_X} s$ be the probability generating function for $X$.

Then:

$\map {\Pi_X} s = \expect {s^X}$
where $\expect {s^X}$ denotes the expectation of $s^X$.


Proof
By definition of probability generating function:

$\ds \map {\Pi_X} s := \sum_{n \mathop = 0}^\infty \map {p_X} n s^n = \map {p_X} 0 + \map {p_X} 1 s + \map {p_X} 2 s^2 + \cdots$
where $p_X$ is the probability mass function for $X$.
For any real function $g: \R \to \R$, by Expectation of Function of Discrete Random Variable:

$\ds \expect {\map g X} = \sum_{x \mathop \in \Omega_X} \map g X \map \Pr {X = x}$
whenever the sum is absolutely convergent.
In this case:

$\map g X = s^X$
Thus:

$\ds \expect {s^X} = \sum_{x \mathop \in \Omega_X} s^x \map \Pr {X = x}$
or, using $\map {p_X} x := \map \Pr {X = x}$:

$\ds \expect {s^X} = \sum_{x \mathop \in \Omega_X} \map {p_X} x s^x$
By definition of $X$, this can then be expressed as:

$\ds \expect {s^X} = \sum_{n \mathop = 0}^\infty \map {p_X} n s^n$

Thus whenever $\ds \sum_{n \mathop = 0}^\infty \map {p_X} n s^n$ is absolutely convergent:

$\map {\Pi_X} s = \expect {s^X}$
by definition of probability mass function.

As $p_X$ is a probability mass function for $X$:

$\ds \sum_{k \mathop = 0}^\infty \map {p_X} k = 1$
Thus the condition on absolute convergence is satisfied by all $s$ such that $\size s < 1$ by the observation:

$\ds  \sum_{k \mathop = 0}^\infty \size {\map {p_X} k s^k} \le \sum_{k \mathop = 0}^\infty \map {p_X} k= 1$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(7)$




