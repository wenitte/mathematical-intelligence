# 

Source: https://proofwiki.org/wiki/Eisenstein%27s_Lemma

Theorem
Let $p$ be an odd prime.
Let $a \in \Z$ be an odd integer such that $p \nmid a$.
Let $\paren {\dfrac a p}$ be defined as the Legendre symbol.

Then:

$\paren {\dfrac a p} = \paren {-1}^{\map \alpha {a, p} }$
where:

$\ds \map \alpha {a, p} = \sum_{k \mathop = 1}^{\frac {p - 1} 2} \floor {\frac {k a} p}$
$\floor {\dfrac {k a} p}$ is the floor function of $\dfrac {k a} p$.


Proof
We will borrow some ideas and techniques from the proof of Gauss's Lemma.

Let $S = \set {a, 2 a, 3 a, \ldots, \dfrac {p - 1} 2 a}$.
Let us create $S'$ from $S$ by replacing each element of $S$ by its least positive residue modulo $p$.
Arranging $S'$ into increasing order, we get:

$S' = \set {b_1, b_2, \ldots, b_m, c_1, c_2, \ldots, c_n}$
where $b_m < \dfrac p 2 < c_1$ and $m + n = \dfrac {p - 1} 2$.

According to the Division Theorem, we can divide any $k a \in S$ by $p$ and get:

$k a = p \times \floor {\dfrac {k a} p} + r$
where $r \in S'$.
Let $k$ run from $1$ to $\dfrac {p - 1} 2$ and add up the resulting equations.
We get:

$(1): \quad \ds \sum_{k \mathop = 1}^{\frac {p - 1} 2} k a = \sum_{k \mathop = 1}^{\frac {p - 1} 2} p \times \floor {\frac {k a} p} + \sum_{i \mathop = 1}^{m} b_i + \sum_{j \mathop = 1}^n c_j$
As in the proof of Gauss's Lemma, all the remainders are in fact distinct elements of $S'$.

From the proof of Gauss's Lemma again, we have that:

$S = \set {b_1, b_2, \ldots, b_m, p - c_1, p - c_2, \ldots, p - c_n} = \set {1, 2, 3, \ldots, \dfrac {p - 1} 2}$

Adding up all the elements of $S$ we have:

$\ds \sum_{k \mathop = 1}^{\frac {p - 1} 2} k = \sum_{i \mathop = 1}^m b_i + \sum_{j \mathop = 1}^n \paren {p - c_j} = \sum_{i \mathop = 1}^m b_i + p n - \sum_{j \mathop = 1}^n c_j$
Subtracting this equation from $(1)$ above gives us:

$\ds \sum_{k \mathop = 1}^{\frac {p - 1} 2} k a - \sum_{k \mathop = 1}^{\frac {p - 1} 2} k = \sum_{k \mathop = 1}^{\frac {p - 1} 2} p \times \floor {\frac {k a} p} + 2 \sum_{j \mathop = 1}^n c_j - p n$

That is:

$\ds \paren {a - 1} \sum_{k \mathop = 1}^{\frac {p - 1} 2} k = p \times \map \alpha {a, p} + 2 \sum_{j \mathop = 1}^n c_j - p n$

Now we are going to write this equation modulo $2$.
Note that:

$\ds \paren {a - 1} \sum_{k \mathop = 1}^{\frac {p - 1} 2} k$ is even, as $a$ is odd
$\ds 2 \sum_{j \mathop = 1}^n c_j$ is also of course even.
So:

$p \map \alpha {a, p} - p n \equiv 0 \pmod 2$

Since $p$ is odd, this amounts to saying:

$\map \alpha {a, p} \equiv n \pmod 2$
From the conclusion of Gauss's Lemma:

$\paren {\dfrac a p} = \paren {-1}^n$
Hence the result.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Source of Name
This entry was named for Ferdinand Gotthold Max Eisenstein.





