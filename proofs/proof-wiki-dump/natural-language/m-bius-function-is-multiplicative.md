# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Function_is_Multiplicative



Theorem
The Möbius function $\mu$  is a multiplicative function:

$m \perp n \implies \map \mu {m n} = \map \mu m \map \mu n$
where $m, n \in \Z_{>0}$.


Corollary
Let $\gcd \set {m, n} > 1$.
Then:

$\map \mu {m n} = 0$


Proof
First note that we have $\map \mu 1 = 1$, which agrees with Value of Multiplicative Function at One.

Let $m, n \in \Z_{>0}$ such that $m \perp n$.

First, suppose that either $\map \mu m = 0$ or $\map \mu n = 0$.
Then either $m$ or $n$ has a factor $p^2$ where $p$ is prime.
Thus it will follow that $m n$ will also have a factor $p^2$ and hence $\map \mu {m n} = 0$.
So the result holds when $\map \mu m = 0$ or $\map \mu n = 0$.

Now suppose that $\map \mu m \ne 0$ and $\map \mu n \ne 0$.
Let $m = p_1 p_2 \ldots p_r$, $n = q_1 q_2 \ldots q_s$ where all the $p_i, q_j$ are prime.
Then:

$m n = p_1 p_2 \ldots p_r q_1 q_2 \ldots q_s$
As $m \perp n$ it follows that:

$\forall i, j: p_i \ne q_j$
Hence there is no prime in $m n$ whose power is higher than $1$, which means that $\map \mu {m n} \ne 0$.
So:

$\map \mu {m n} = \paren {-1}^{r + s} = \paren {-1}^r \paren {-1}^s = \map \mu m \map \mu n$

Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 25 \beta$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Möbius function




