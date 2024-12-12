# 

Source: https://proofwiki.org/wiki/Coherent_Sequence_is_Partial_Sum_of_P-adic_Expansion



Theorem
Let $p$ be a prime number.
Let $\sequence {\alpha_n}$ be a coherent sequence.

Then there exists a unique $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$


Informal Proof
Consider the $\ds \alpha_n$ written in base $p$. 
To reduce an integer modulo $p^n$, it is simply a matter of stripping off all but the last $n$ digits.
So the coherence condition:

$\alpha_{n + 1} \equiv \alpha_n \mod{p^{n+1}}$
means that the last $n + 1$ digits of both integers are the same.
So the sequence $\sequence {\alpha_n}$ can be written:














\(\ds \alpha_0\)

\(=\)







\(\ds d_0\)





$0 \le d_0 \le p - 1$














\(\ds \alpha_1\)

\(=\)







\(\ds d_0 + d_1 p\)





$0 \le d_1 \le p - 1$














\(\ds \alpha_2\)

\(=\)







\(\ds d_0 + d_1 p + d_2 p^2\)





$0 \le d_2 \le p - 1$














\(\ds \alpha_3\)

\(=\)







\(\ds d_0 + d_1 p  + d_2 p^2 + d_3 p^3\)





$0 \le d_3 \le p - 1$














\(\ds \ldots\)

\(\)







\(\ds \)





$0 \le d_n \le p - 1$



Putting this together, we get the $p$-adic expansion:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$
$\blacksquare$


Proof
By definition of a coherent sequence:

$\forall n \in \N: 0 \le \alpha_n < p^{n + 1}$
From Zero Padded Basis Representation, for all $n \in \N$ there exists a sequence $\sequence {b_{j, n} }_{0 \le j \le n} :$

$(1) \quad \ds \alpha_n = \sum_{j \mathop = 0}^n b_{j, n} p^j$
$(2) \quad \forall j \in \closedint 0 n : 0 \le b_{j, n} < p$


Lemma
$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n b_{i, i} p^i$
$\Box$

For all $n \in \N$, let:

$d_n = b_{n, n}$
Then:

$\forall n \in \N : 0 \le d_n < p$
By definition:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
is a $p$-adic expansion.
From the lemma:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$




