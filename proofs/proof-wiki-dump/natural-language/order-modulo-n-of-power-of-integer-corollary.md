# 

Source: https://proofwiki.org/wiki/Order_Modulo_n_of_Power_of_Integer/Corollary

Theorem
Let $a$ be a primitive root of $n$.
Then:

$a^k$ is also a primitive root of $n$
if and only if:

$k \perp \map \phi n$
where $\phi$ is the Euler phi function.

Furthermore, if $n$ has a primitive root, it has exactly $\map \phi {\map \phi n}$ of them.


Proof
Let $a$ be a primitive root of $n$.
Then $R = \set {a, a^2, \ldots, a^{\map \phi n}}$ is a reduced residue system for $n$.
Hence all primitive roots are contained in $R$.
By Order Modulo n of Power of Integer, the multiplicative order $a^k$ modulo $n$ is $\dfrac {\map \phi n} {\gcd \set {\map \phi n, k} }$.
Hence $a^k$ will be a primitive root of $n$ exactly when $\gcd \set {\map \phi n, k} = 1$.
That is, when $\map \phi n \perp k$.

So the primitive roots are the integers $a^k$, where $k \in \set {1, 2, \ldots, \map \phi n}$.
By definition of $\phi$, there are $\map \phi {\map \phi n}$ such $k$.
Hence there are $\map \phi {\map \phi n}$ primitive roots of $n$.
$\blacksquare$





