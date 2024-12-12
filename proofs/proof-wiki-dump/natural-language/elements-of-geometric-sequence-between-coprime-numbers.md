# 

Source: https://proofwiki.org/wiki/Elements_of_Geometric_Sequence_between_Coprime_Numbers



Theorem
Let $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers of length $n + 1$.
Let $a_0$ be coprime to $a_n$.
Then there exist geometric sequences of integers $Q_1$ and $Q_2$ of length $n + 1$ such that:

the initial term of both $Q_1$ and $Q_2$ is $1$
the final term of $Q_1$ is $a_0$
the final term of $Q_2$ is $a_n$.

In the words of Euclid:

If two numbers be prime to one another, and numbers fall between them in continued proportion, then, however many numbers fall between them in continued proportion, so many will also fall between each of them and an unit in continued proportion.
(The Elements: Book $\text{VIII}$: Proposition $9$)


Proof
Let the common ratio of $P$ be $r$.
By Form of Geometric Sequence of Integers with Coprime Extremes, the $j$th term of $P$ is given by:

$a_j = q^j p^{n - j}$
such that:

$a_0 = p^n$
$a_n = q^n$
For $j \in \set {0, 1, \ldots, n}$, let $r_j = q^j$.

Let the finite sequence $Q_2 = \sequence {t_j}_{0 \mathop \le j \mathop \le n}$ be defined as:

$\forall j \in \set {0, 1, \ldots, n}: t_j = p^{n - j}$
Then $Q_1$ is a geometric sequence of integers of length $n$ such that:

$t_0 = 1$
$t_n = p^n$

Let the finite sequence $Q_1 = \sequence {s_j}_{0 \mathop \le j \mathop \le n}$ be defined as:

$\forall j \in \set {0, 1, \ldots, n}: s_j = q^j$
Then $Q_1$ is a geometric sequence of integers of length $n$ such that:

$s_0 = 1$
$s_n = q^n$

Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $9$ of Book $\text{VIII}$ of Euclid's The Elements. It is the converse of Proposition $10$ of Book $\text{VIII} $: Product of Geometric Sequences from One. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




