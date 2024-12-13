# 

Source: https://proofwiki.org/wiki/Product_Form_of_Sum_on_Completely_Multiplicative_Function


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f$ be a completely multiplicative arithmetic function.
Let the series $\ds \sum_{n \mathop = 1}^\infty \map f n$ be absolutely convergent.
Then:

$\ds \sum_{n \mathop = 1}^\infty \map f n = \prod_p \frac 1 {1 - \map f p}$
where the infinite product ranges over the primes.


Proof
Define $P$ by:














\(\ds \map P {A, K}\)

\(:=\)







\(\ds \prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \frac {1 - \map f p^{K + 1} } {1 - \map f p}\)





where $\mathbb P$ denotes the set of prime numbers














\(\ds \)

\(=\)







\(\ds \prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \paren {\sum_{k \mathop = 0}^K \map f p^k}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{v \mathop \in \prod \limits_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \set {0 \,.\,.\, K} } \paren {\prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \map f p^{v_p} }\)





Product of Summations is Summation Over Cartesian Product of Products














\(\ds \)

\(=\)







\(\ds \sum_{v \mathop \in \prod \limits_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \set {0 \,.\,.\, K} } \map f {\prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } p^{v_p} }\)





as $f$ is completely multiplicative




Change the summing variable using:














\(\ds \sum_{v \mathop \in V} \map g {\map h v}\)

\(=\)







\(\ds \sum_{w \mathop \in \set {\map h v: v \mathop \in V} } \map g w\)





where $h$ is a one to one mapping




The Fundamental Theorem of Arithmetic guarantees a unique factorization for each positive natural number.
Therefore this function is one to one:

$\ds \map h v = \prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } p^{v_p}$

Then:














\(\ds \map P {A, K}\)

\(=\)







\(\ds \sum_{n \mathop \in \map Q {A, K} } \map f n\)





change of summing variable



where $\map Q {A, K}$ is defined as:

$\ds \map Q {A, K} := \set {\prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } p^{-v_p} : v \in \prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \set {0 \,.\,.\, K} }$

Consider:














\(\ds W\)

\(=\)







\(\ds \lim_{\substack {A \mathop \to \infty \\ K \mathop \to \infty} } \map Q {A, K}\)




















\(\ds \)

\(=\)







\(\ds \set {\prod_{p \mathop \in \mathbb P} p^{-v_p}: v \in \prod_{p \mathop \in \mathbb P} \set {0 \,.\,.\, \infty} }\)









The construction defines it as the set of all possible products of positive powers of primes.
From the definition of a prime number, every positive natural number may be expressed as a prime or a product of powers of primes:

$k \in \N^+ \implies k \in W$
and also every element of W is a positive natural number:

$k \in W \implies k \in \N^+$
So $W = \N^+$.

Then taking limits on $\map P {A, K}$:














\(\ds \lim_{\substack {A \mathop \to \infty \\ K \mathop \to \infty} } \map P {A, K}\)

\(=\)







\(\ds \lim_{\substack {A \mathop \to \infty \\ K \mathop \to \infty} } \prod_{\substack {p \mathop \in \mathbb P \\ p \mathop \le A} } \frac {1 - \map f p^{K + 1} } {1 - \map f p}\)





taking limits of both sides of the definition of $\map P {A, K}$














\(\ds \)

\(=\)







\(\ds \prod_{p \mathop \in \mathbb P} \frac 1 {1 - \map f p}\)





$\map f p^{K + 1} \to 0$, because $\ds \sum_{n \mathop = 1}^\infty \map f n$ is convergent














\(\ds \)

\(=\)







\(\ds \lim_{\substack {A \mathop \to \infty \\ K \mathop \to \infty} } \sum_{n \mathop \in \map Q {A, K} } \map f n\)





from the expression for $\map P {A, K}$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N^+} \map f n\)





substituting for $\N^+$: order of summation is not defined














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n\)





absolutely convergent, so the order does not alter the limit



$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this to a page in its own right.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
When the function $f$ is multiplicative but not completely multiplicative, the above derivation is still valid, except that we do not have the equality:

$\dfrac 1 {1 - \map f p} = \paren {1 + \map f p + \map f {p^2} + \cdots}$
Therefore, in this case we may write:

$\ds \sum_{n \mathop = 1}^\infty \map f n = \prod_p \paren {1 + \map f p + \map f {p^2} + \cdots}$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




