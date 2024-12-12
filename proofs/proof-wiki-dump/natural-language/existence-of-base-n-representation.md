# 

Source: https://proofwiki.org/wiki/Existence_of_Base-N_Representation



Theorem

This page has been identified as a candidate for refactoring of medium complexity.In particular: lemmata and sub proofsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: Could be improved in presentational stylePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Given a number $x \in \hointr 0 1$, there exists a representation of that number in a base-$p$ positional system.

Specifically, there exists a sequence $\sequence {a_n}$ such that:

$0 \le a_n < p$, and
$\displaystyle \sum_{n \mathop = 1}^\infty \frac {a_n} {p^n}$ converges to $x$.

Unless $\sequence {a_n}$ terminates (that is $a_n = 0$ for all sufficiently large $n$), then this representation is unique.
If $\sequence {a_n}$ does terminate, then there is exactly one other sequence which satisfies the criteria of the theorem.


Proof
Existence of Representation
Define:

$\displaystyle a_j = \floor {\paren {x - \sum_{i \mathop = 1}^{j - 1} \frac {a_i} {p^i} } p^j}$
where we accept the vacuous summation $\displaystyle \sum_{i \mathop = 1}^0 a_i p^{-i} = 0$.
This recursive definition allows for all $a_n$ to be computed.

Lemma: This will always be less than $p$.
Proof: Suppose to the contrary $\exists n$ such that $a_n\geq p$.
Then:
$\displaystyle a_n = \floor {\paren {x - \sum_{i \mathop = 1}^{n - 1} \frac {a_i} {p^i} } p^n} \ge p$
But then we can pull out the final term of the sum and divide by $p$ to get:
$\displaystyle \paren {x - \sum_{i \mathop = 1}^{n - 2} \frac {a_i} {p^i} } p^{n - 1} \ge 1 + a_{n - 1}$
This left-hand side is of course just:
$a_{n - 1} + \text{something in } \hointr 0 1 \ge 1 + a_{n - 1}$
which is impossible.
$\Box$

Define $\displaystyle s_n = \sum_{i \mathop = 1}^n a_i p^{-i}$.
Since $\forall i \in \N: a_i, p^{-i} > 0$, this sequence of partial sums is increasing.
It is also bounded above by $x$ by construction: at every point in the series, we add precisely as many $p^{-n - 1}$ as will fit in $x-s_n$ without going over $x$:

Lemma: $\forall n \in \N: s_n \le x$
Proof: We have:
$s_1 = a_1 p^{-1} = \floor {x p} p^{-1} \le x p p^{-1} = x$
Suppose we have $s_j<x$ for some $j$.
By definition:
$s_{j + 1} - s_j = a_{j + 1} p^{-1 - j}$
But:
$a_{j + 1}p^{-1 - j} = \floor {\paren {x - s_j} p^{1 + j} } p^{-1 - j} \le \paren {x - s_j}$
So:
$s_{j + 1} - s_j \le x - s_j \implies s_{j + 1} \le x$
Now suppose we have instead $s_j = x$.
Again we have:
$s_{j + 1} - s_j = a_{j + 1} p^{-1 - j}$
But now:
$a_{j + 1} p^{-1 - j} = \floor {\paren {x - s_j} p^{1 + j} } p^{-1 - j} = 0 \implies s_{j + 1} = s_j = x$
This completes the induction proof.
$\Box$

It remains to be shown this series converges to $x$.
Observe that in the sum $\displaystyle s_{k - 1} + a_k p^{-k} = s_k$, we have defined $\displaystyle a_k = \floor {\paren {x - \sum_{i \mathop = 1}^{k - 1} \frac {a_i} {p^i} } p^k}$ to count precisely how many $p^{-k}$ will fit in $x-s_{k - 1}$.
We could never have $x - s_k \ge p^{-k}$ because that would mean $a_k$ had undercounted by $1$. 
Therefore:

$x - s_k < p^{-k}$.
Let $\epsilon >0$.
Then set $z = -\log_p \epsilon$.
Then:

$N > z \implies x - s_N < p^{-N} < p^{\log_p} \epsilon = \epsilon$
Since $\sequence {s_k}$ is increasing, bounded above by $x$, and comes arbitrarily close to $x$, we have $\sequence {s_n} \to x$.
$\Box$


Uniqueness of Representation
Let $\sequence {a_n}$ be the sequence defined in the definition of the theorem.
Let $\sequence {b_n}$ be some sequence of integers $0 \le b_n < p$ such that $\sequence {t_n} \to x$ where $\displaystyle t_n = \sum_{i \mathop = 1}^n b_i p^{-i}$.

We wish to show that $a_n = b_n \forall n$, unless $x = q p^{-k}$ for some $k \in \N$.
Assume to the contrary that there are terms which do not agree and let $b_m$ be the first term of $\sequence {b_n}$ which does not agree with $\sequence {a_n}$.
Then $b_m > a_m \lor b_m < a_m$.

Let us consider the first case.
We know that $a_m $ counts precisely how many $p^{-m}$ can be added to $s_{m-1}$ without exceeding $x$.
So we can be sure that if $b_m > a_m$, then $s_{m- 1 } + b_m p^{-m} = t_{m - 1} + b_m p^{-m} = t_m > x$.
Since $\sequence {t_n}$ is always increasing, it can never converge to $x$.

Now consider the second case, $b_m < a_m$.
First, we will need a lemma:

Lemma: $\exists N \in \N : \paren {\forall n \ge N: a_n = 0} \iff \paren {x = q p^{1 - N} }$
Proof:
($\implies$)
Suppose $\exists N : \forall n \ge N: a_n = 0$.
Then:
$\displaystyle x = \sum_{n \mathop = 1}^\infty a_n p^{-n} = \sum_{n \mathop = 1}^{N - 1} a_n p^{-n}$
But:
$a_n p^{-n} = a_n p^{N - 1 - n} p^{1 - N}$
Since $x$ is a sum of these terms of $p^{N - 1}$, we must have $x = q p^{N - 1}$ for some $q \in \N$.


($\impliedby$)
Suppose $x = q p^{1 - N}$.
Observe that since $p^{1 - N} \divides s_{N - 1}$ (where $\divides$ indicates divisibility), we must have $s_{N - 1} = x$.
Since $\sequence {s_n} \to x$ and is strictly increasing, we must have all successive terms equal to zero.
$\Box$

Now suppose that $x = q p^{-k}$ for some $k \in \N$.
We wish to show that there are only two series which converge to $x$:

the series $\displaystyle \sequence {s_n} = \sum_{n \mathop = 1}^\infty \frac {a_n} {p^n}$ as defined above
another series we describe now.
Consider the sequence $\sequence {a_n}$ when $x = q p^{-k}$.
Now we define:

$b_n = \begin {cases}
a_n & : n < k \\
a_n - 1 & : n = k \\
p - 1 & : n > k
\end{cases}$
Then we see that:














\(\ds \sum_{j \mathop = 1}^\infty b_j p^{-j}\)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^{k - 1} b_j p^{-j} } + \paren {a_k - 1} p^{-k} + \sum_{j \mathop = k + 1}^\infty \paren {p - 1} p^{-j}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^{k - 1} a_j p^{-j} } + a_k p^{-k} - p^{-k} + \sum_{j \mathop = k + 1}^\infty \paren {p - 1} p^{-j}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^k a_j p^{-j} } - p^{-k} + \sum_{j \mathop = k + 1}^\infty \paren {p^{1 - j} - p^{-j} }\)




















\(\ds \)

\(=\)







\(\ds x - p^{-k} + \sum_{j \mathop = k + 1}^\infty \paren {p^{1 - j} - p^{-j} }\)




















\(\ds \)

\(=\)







\(\ds x - p^{-k} + p^{-k} \sum_{j \mathop \ge 0} \paren {p^{-j} } - p^{-k - 1} \sum_{j \mathop \ge 0} \paren {p^{-j} }\)




















\(\ds \)

\(=\)







\(\ds x - p^{-k} + p^{-k} \paren {\frac 1 {1 - p^{-1} } } - p^{-k - 1} \paren {\frac 1 {1 - p^{-1} } }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds x - p^{-k} + \frac {p^{-k} - p^{-k - 1} } {1 - p^{-1} }\)




















\(\ds \)

\(=\)







\(\ds x - p^{-k} + p^{-k} \frac {1 - p^{-1} } {1 - p^{-1} }\)




















\(\ds \)

\(=\)







\(\ds x\)









So, this series converges to $x$ as well.

Let us suppose, finally, that $x \ne q p^{-k}$ for any $k \in \N$.
We have already shown that if the first differing term of another series $b_n$ is greater than the corresponding term $a_n$, the sum series cannot converge to $x$.
Now we examine the case $b_m < a_m$ at the first differing term.
As we saw above, if the first term to differ is only one less, ie, $b_m = a_m - 1$, then it is necessary for every other term afterwards to be increased from $0$ to $p - 1$ in order to make up for this deficit.
The remaining terms of course, cannot be increased more than this, or they would violate the condition that all terms be less than $p$.
Since in the case $x \ne q p^{-k}$, there are no infinite strings of zeroes, we cannot decrease any one term and increase the succeeding terms by $p - 1$.
$\blacksquare$


Also see
Basis Expansion for how this applies to the representation of a real number.
Basis Representation Theorem for an equivalent proof for integers.




