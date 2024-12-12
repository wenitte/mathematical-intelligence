# 

Source: https://proofwiki.org/wiki/Existence_of_Real_Logarithm


This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract lemmata into transcluded subpagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $b, y \in \R$ such that $b > 1$ and $y > 0$.
Then there exists a unique real $x \in \R$ such that $b^x = y$.

This $x$ is called the logarithm of $y$ to the base $b$.

Also see the definition of a (general) logarithm.


Proof
We start by establishing a lemma:

Lemma 1
Let $t \in \R$ be such that $t > 1$, and let $n \in \N$ be such that $n > \dfrac {b - 1} {t - 1}$.
Then:

$b^{\frac 1 n} < t$

Proof of Lemma 1


Because $b > 1$, we have that $b^{\frac 1 n} > 1$.
From Sum of Geometric Sequence and this observation, we find that:

$\ds \frac {\paren {b^{\frac 1 n} }^n - 1} {b^{\frac 1 n} - 1} = \sum_{k \mathop = 0}^{n - 1} \paren {b^{\frac 1 n} }^k > n$
Rewriting this inequality, we obtain:

$b - 1 > n \paren {b^{\frac 1 n} - 1}$
As $n > \dfrac {b - 1} {t - 1}$, this means that:

$t - 1 > b^{\frac 1 n} - 1$
We conclude that:

$b^{\frac 1 n} < t$

$\Box$

Now let $w \in \R$ be any number satisfying $b^w < y$.
Then $t = b^{-w} y > 1$, so we can apply Lemma 1.
It follows that for $n > \dfrac {b - 1} {t - 1}$:

$b^{\frac 1 n} < b^{-w} y$
and thus:

$b^{w + \frac 1 n} < y$
Similarly, when $b^w > y$ and $n > \dfrac {b - 1} {t - 1}$, we have:

$b^{w - \frac 1 n} > y$

Next, let $W = \set {w \in \R: b^w < y}$.
Let $x = \sup W$.
The following lemma helps us to verify existence of $x$.


Lemma 2
For any real number $z > 0$, we have $n \in \N$ such that:

$b^{-n} < z < b^n$

Proof of Lemma 2


Observe that, as $z > 0$, $b^{-n} < z$ whenever $b^n > \dfrac 1 z$.
Therefore, it suffices to show that there is an $n \in \N$ such that $b^n > z$ exists.

By Sum of Geometric Sequence, we obtain for any $n \in \N$:

$\ds \paren {b - 1} \sum_{k \mathop = 0}^{n - 1} b^k = b^n - 1$
As $b > 1$, we obtain:

$n \paren {b - 1} < b^n - 1$
This implies that any $n$ with $n \paren {b - 1} > z - 1$ has the desired property.


$\Box$

Lemma 2 shows that $x$ is the supremum of a non-empty set with an upper bound, and therefore it exists.
We will now prove that $b^x = y$.

Suppose $b^x < y$.
We have seen that there exists an $n \in \N$ such that $b^{x + \frac 1 n} < y$.
That is:

$x + \dfrac 1 n \in W$
But this is impossible as $x = \sup W$.
Thus:

$b^x \ge y$

Now suppose $b^x > y$.
We have seen that there exists an $n \in \N$ such that $b^{x - \frac 1 n} > y$.
That is:

$x - \dfrac 1 n \notin W$
As $x - \dfrac 1 n$ is not the supremum of $W$, we find a $w \in W$ such that:

$x - \dfrac 1 n < w < x$
But then we have, as $b > 1$:

$b^{x - \frac 1 n} - b^w = b^{x - \frac 1 n} \paren {1 - b^{w - x + \frac 1 n} } < 0$
This contradicts our initial choice of $x - \dfrac 1 n$ outside $W$.
We conclude that $b^x = y$.

Lastly, suppose that $b^x = y = b^z$.
Then:

$b^{z - x} = \dfrac {b^z} {b^x} = 1 = \dfrac {b^x} {b^z} = b^{x - z}$
It is concluded that $x = z$.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




