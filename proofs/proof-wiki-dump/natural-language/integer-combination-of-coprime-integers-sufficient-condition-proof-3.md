# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/Sufficient_Condition/Proof_3



Theorem
Let $a, b \in \Z$ be integers, not both zero.
Let $a$ and $b$ be coprime to each other.
Then there exists an integer combination of them equal to $1$:

$\forall a, b \in \Z: a \perp b \implies \exists m, n \in \Z: m a + n b = 1$


Proof
Let $a \perp b$.
Thus they are not both $0$.
Let $S$ be defined as:

$S = \set {\lambda a + \mu b: \lambda, \mu \in \Z}$
$S$ contains at least one strictly positive integer, because for example:

$a \in S$ (setting $\lambda = 1$ and $\mu = 0$)
$b \in S$ (setting $\lambda = 0$ and $\mu = 1$)
By Set of Integers Bounded Below has Smallest Element, let $d$ be the smallest element of $S$ which is strictly positive.
Let $d = \alpha a + \beta b$.
Let $c \in S$, such that $\lambda_0 a + \mu_0 b = c$ for some $\lambda_0, \mu_0 \in \Z$.
By the Division Algorithm:

$\exists \gamma, \delta \in \Z: c = \gamma d + \delta$
where $0 \le \delta < d$
Then:














\(\ds \delta\)

\(=\)







\(\ds c - \gamma d\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda_0 a + \mu_0 b} - \gamma \paren {\alpha a + \beta b}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda_0 - \gamma \alpha} a + \paren {\mu_0 - \gamma \beta} b\)




















\(\ds \)

\(\in\)







\(\ds S\)









But we have that $0 \le \delta < d$.
We have defined $d$ as the smallest element of $S$ which is strictly positive
Hence it follows that $\delta$ cannot therefore be strictly positive itself.
Hence $\delta = 0$ and so $c = \gamma d$.
That is:

$d \divides c$
and so the smallest element of $S$ which is strictly positive is a divisor of both $a$ and $b$.
But $a$ and $b$ are coprime.
Thus it follows that, as $d \divides 1$:

$d = 1$
and so, by definition of $S$:

$\exists m, n \in \Z: m a + n b = 1$
$\blacksquare$


Also known as
This result is sometimes known as Bézout's Identity, although that result is usually used for the more general result for not necessarily coprime integers.
Some sources refer to this result as the Euclidean Algorithm, but the latter as generally understood is the procedure that can be used to establish the values of $m$ and $n$, and for any pair of integers, not necessarily coprime.


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Not certain that the following proof is properly coveredIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $7$




