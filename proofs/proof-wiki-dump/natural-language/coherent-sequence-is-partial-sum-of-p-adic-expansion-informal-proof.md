# 

Source: https://proofwiki.org/wiki/Coherent_Sequence_is_Partial_Sum_of_P-adic_Expansion/Informal_Proof

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


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.8$




