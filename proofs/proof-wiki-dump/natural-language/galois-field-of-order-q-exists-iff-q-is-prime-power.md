# 

Source: https://proofwiki.org/wiki/Galois_Field_of_Order_q_Exists_iff_q_is_Prime_Power



Theorem
Let $q \ge 0$ be a positive integer.
Then there exists a Galois field of order $q$ if and only if $q$ is a prime power.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sufficient Condition
Let $\struct {F, +, \cdot}$ be a field of order $q$.
By Characteristic of Galois Field is Prime, the characteristic of $F$ is a prime number $p$.
By Field of Prime Characteristic has Unique Prime Subfield the prime subfield of $F$ is $\GF_p := \Z / p \Z$.

By Vector Space on Field Extension is Vector Space, $F$ is an $\GF_p$-vector space.
Since $F$ is finite, $F$ has a finite basis over $\GF_p$.
By Same Dimensional Vector Spaces are Isomorphic, this means that with $k$ equal to the dimension of $F$ there is an isomorphism of vector spaces:

$F \simeq \GF_p^k$
Finally by the definition of the product of cardinals:

$\card F = \card {\GF_p}^k = p^k$
So the order of $F$ is a prime power.
$\Box$


Necessary Condition
Let $\GF_p := \Z / p \Z$ be the field of order $p$.
Consider $x^{p^n} - x \in \GF_p \sqbrk x$ for some $n \in \N$.
By Kronecker’s Theorem there exists a finite extension $E$ of $\GF_p$ such that $x^{p^n} - x$ splits completely.
Define the following set:

$\GF_{p^n} = \set {u \in E: u^{p^n} = u}$
It suffices to prove that $\card {\GF_{p^n} } = p^n$ and that $\GF_{p^n}$ is closed under field operations.
$\GF_{p^n}$ contains all the roots of $x^{p^n} - x$ in $E$ by definition, so it contains at most $p^n$ elements.
It suffices to prove $x^{p^n} - x$ has no double roots.
By Double Root of Polynomial is Root of Derivative, and that $\map {\dfrac \d {\d x} } {x^{p^n} - x} = \paren {p^n} x^{p^n - 1} - 1 = -1 \ne 0$ in characteristic $p$, $x^{p^n}-x$ has no double roots and $\card {F_{p^n} } = p^n$.
Clearly $0, 1 \in \GF_{p^n}$, and if $a \neq 0$ and $a^{p^n} = a$ then dividing out by $a^{p^n} \cdot a$ gives $a^{-1} = \paren {a^{-1} }^{p^n}$, so $\GF_{p^n}$ is closed under taking reciprocals.
If $p \neq 2$ and $a^{p^n} = a$ then $p^n$ is odd so $\paren {-a}^{p^n} = -a$. If $p = 2$ then $a = -a$ in any ring of characteristic 2 so still $\paren {-a}^{p^n} = -a$, $\GF_{p^n}$ is closed under negation.
If $a^{p^n} = a$ and $b^{p^n} = b$ then $\left( ab \right)^{p^n} = \paren {a^{p^n} } \paren {b^{p^n} } = a b$ so $\GF_{p^n}$ is closed under multiplication.
Consider the map: $x \mapsto x^p$, we will prove that for all $a, b \in E$, $\paren {a + b}^p = a^p + b^p$, by induction it will follow that $\paren {a + b }^{p^n} = a^{p^n} + b^{p^n}$.
In particular, if $a, b \in \GF_{p^n}$, then $\paren {a + b}^{p^n} = a^{p^n} + b^{p^n} = a + b$, so $\GF_{p^n}$ will be closed under addition and we will be done.
Suppose $k \in \N$ and $1 \le k \le p - 1$.
Then in characteristic $p$, $\dbinom p k = \dfrac {p!} {k! \paren {p - k}!} = 0$ as the numerator contains a factor of the prime $p$ which the denominator cannot cancel.
By the Binomial Theorem, $\paren {a + b}^p = a^p + \underbrace {\ds \sum_{k \mathop = 1}^{p - 1} \dbinom p k a^k b^{p-k} }_0 + b^p = a^p + b^p$, from the previous statements, $\GF_{p^n}$ is closed under addition. 
Therefore, $\GF_{p^n}$ is a subfield of $E$ with $p^n$ elements.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): field: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): field: 1.




