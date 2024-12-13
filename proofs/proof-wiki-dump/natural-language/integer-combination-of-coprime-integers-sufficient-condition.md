# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/Sufficient_Condition



Theorem
Let $a, b \in \Z$ be integers, not both zero.
Let $a$ and $b$ be coprime to each other.
Then there exists an integer combination of them equal to $1$:

$\forall a, b \in \Z: a \perp b \implies \exists m, n \in \Z: m a + n b = 1$


Proof 1













\(\ds a\)

\(\perp\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds 1\)





Definition of Coprime Integers








\(\ds \leadsto \ \ \)

\(\ds \exists m, n \in \Z: \, \)



\(\ds m a + n b\)

\(=\)







\(\ds 1\)





Bézout's Identity



$\blacksquare$


Proof 2
Let $a \perp b$.
Thus they are not both $0$.
Let $S$ be defined as:

$S = \set {a m + b n: m, n \in \Z}$
$S$ contains at least one strictly positive integer, because for example $a^2 + b^2 \in S$.
By Set of Integers Bounded Below has Smallest Element, let $d$ be the smallest element of $S$ which is strictly positive.
Let $d = a x + b y$.
It remains to be shown that $d = 1$.
By the Division Theorem:

$a = d q + r$ where $0 \le r < d$
Then:














\(\ds r\)

\(=\)







\(\ds a - d q\)




















\(\ds \)

\(=\)







\(\ds a - \paren {a x + b y} q\)




















\(\ds \)

\(=\)







\(\ds a \paren {1 - x q} + b \paren {- y q}\)




















\(\ds \)

\(\in\)







\(\ds S\)









But we have that $0 \le r < d$.
We have defined $d$ as the smallest element of $S$ which is strictly positive
Hence it follows that $r$ cannot therefore be strictly positive itself.
Hence $r = 0$ and so $a = d q$.
That is:

$d \divides a$
By a similar argument:

$d \divides b$
and so $d$ is a common divisor of both $a$ and $b$.
But the GCD of $a$ and $b$ is $1$.
Thus it follows that, as $d \in S$:

$\exists m, n \in \Z: m a + n b = 1$
$\blacksquare$


Proof 3
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
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$: $(1.34)$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts




