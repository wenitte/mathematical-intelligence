# 

Source: https://proofwiki.org/wiki/Phi_is_8_has_only_5_solutions


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.


Theorem
$\phi$ denotes the Euler $\phi$-function.
There are $5$ numbers $n$ with the property that $\map \phi n = 8$, and they are $15$, $16$, $20$, $24$ and $30$.


Proof
Suppose $\phi(n)=8$.
By Fundamental Theorem of Arithmetic, $n$ has a prime factorization: $$n=\prod_{i=1}^k p_i^{\alpha_i}$$
where $p_i$ are all distinct primes. Since $\phi(1)=1\neq8$, we assume $k>0$. Say that $n$ has $k$ distinct prime factors, so that each $\alpha_i > 0$.
By Euler Phi Function is Multiplicative, $$\phi(n) = 8 =\prod_{i=1}^k \phi(p_i^{\alpha_i})$$
By Euler Phi Function of Prime Power, $$8 = \prod_{i=1}^k (p_i-1)p_i^{\alpha_i-1}$$
Because each $p_i-1$ is a factor of $8$, it follows that $p_i-1\leq 8$. Thus, each $p_i\leq 9$. The only primes less than $9$ are $2$, $3$, $5$, and $7$. Further, $7-1$ is not a factor of $8$, so $7$ is not a prime factor of $n$.
Thus, $n$ is of the form $2^{a}3^{b}5^{c}$, for nonnegative integers $a, b, c$.
By Euler Phi Function is Multiplicative and Euler Phi Function of Prime Power, if $b$ or $c$ are greater than $1$, then $\phi(n)$ is divisible by $3$ or $5$, respectively. This is not the case, so $3$ and $5$ each divide $n$ at most once. 
This splits the analysis into four cases. Because $\phi(n)\leq n$ for all $n\in\mathbb{N}$, $n$ cannot be $1$, $3$, or $5$. Thus, in the first three cases, $n$ must have at least one factor of $2$.

Case 1:$b=c=0$
Now $n=2^a$, so $\phi(n)=8=(2-1)2^{a-1}=2^{a-1}\Rightarrow a=4$. This gives one solution of $n=16$.

Case 2: $b=1$ and $c=0$
$n=2^a\cdot 3$, so $\phi(n)=8=(2-1)2^{a-1}\cdot(3-1)\Rightarrow 8=2^a\Rightarrow a=3$. This gives one solution of $n=24$.

Case 3: $b=0$ and $c=1$
$n=2^a\cdot 5$, so $\phi(n)=8=(2-1)2^{a-1}\cdot (5-1)\Rightarrow 8=2^{a-1}\cdot 4\Rightarrow a=2$.This gives one solution of $n=20$.

Case 4: $b=c=1$
If $n$ is divisible by $2$:
$n=2^a\cdot 3\cdot 5$, so $\phi(n)=8=(2-1)2^{a-1}\cdot(3-1)\cdot(5-1)\Rightarrow 8=2^{a-1}\cdot 8\Rightarrow a=1$. This gives one solution of $n=30$.
If $n$ is not divisible by $2$, then $n=3\cdot 5$, and so $n=15$ is the fifth and final solution.

$\blacksquare$





