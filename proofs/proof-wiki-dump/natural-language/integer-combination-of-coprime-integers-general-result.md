# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/General_Result



Theorem
Let $a_1, a_2, \ldots, a_n$ be integers.

Then $\gcd \set {a_1, a_2, \ldots, a_n} = 1$ if and only if there exists an integer combination of them equal to $1$:

$\exists m_1, m_2, \ldots, m_n \in \Z: \ds \sum_{k \mathop = 1}^n m_k a_k = 1$


Proof
First let $\exists m_1, m_2, \ldots, m_n \in \Z: \ds \sum_{k \mathop = 1}^n m_k a_k = 1$.
Let $\gcd \set {a_1, a_2, \ldots, a_n} = d$.
Then $\ds \sum_{k \mathop = 1}^n m_k a_k$ has $d$ as a divisor.
That means $d$ is a divisor of $1$.
Thus $\gcd \set {a_1, a_2, \ldots, a_n} = 1$.
$\Box$

It remains to be shown that if $\gcd \set {a_1, a_2, \ldots, a_n} = 1$, then $\exists m_1, m_2, \ldots, m_n \in \Z: \ds \sum_{k \mathop = 1}^n m_k a_k = 1$.
The proof proceeds by induction.

For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$\gcd \set {a_1, a_2, \ldots, a_n} = 1 \iff \exists m_1, m_2, \ldots, m_n \in \Z: \ds \sum_{k \mathop = 1}^n m_k a_k = 1$


Basis for the Induction
$\map P 2$ is the case:

$\gcd \set {a_1, a_2} = 1 \iff \exists m_1, m_2 \in \Z: m_1 a_1 + m_2 a_2 = 1$
This is demonstrated in Integer Combination of Coprime Integers.
Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\gcd \set {a_1, a_2, \ldots, a_r} = 1 \iff \exists m_1, m_2, \ldots, m_r \in \Z: \ds \sum_{k \mathop = 1}^r m_k a_k = 1$

from which it is to be shown that:

$\gcd \set {a_1, a_2, \ldots, a_r, a_{r + 1} } = 1 \iff \exists m_1, m_2, \ldots, m_r, m_{r + 1} \in \Z: \ds \sum_{k \mathop = 1}^{r + 1} m_k a_k = 1$


Induction Step
This is the induction step:
Let $\gcd \set {a_1, a_2, \ldots, a_r, a_{r + 1} } = 1$.
Let $\gcd \set {a_1, a_2, \ldots, a_r} = d$.
Dividing through by $d$, we have:

$\gcd \set {\dfrac {a_1} d, \dfrac {a_2} d, \ldots, \dfrac {a_d} d} = 1$
By the induction hypothesis:

$\exists m_1, m_2, \ldots, m_r \in \Z: \ds \sum_{k \mathop = 1}^r m_k a_k = 1$
whence multiplying through by $d$:

$\exists m'_1, m'_2, \ldots, m'_r \in \Z: \ds \sum_{k \mathop = 1}^r m'_k a_k = d$
where $m'_k = m_k d$ throughout.

Then by hypothesis:

$\gcd \set {d, a_{r + 1} } = 1$
From the basis for the induction:

$\exists p, q \in \Z: p d + 1 a_{r + 1} = 1$
We take:

$m_1 = m'_1 p, m_2 = m'_2 p, \ldots, m_r = m'_r p$
and:

$m_{r + 1} = q$
and thus we have:

$\gcd \set {a_1, a_2, \ldots, a_r, a_{r + 1} } = 1 \iff \exists m_1, m_2, \ldots, m_r, m_{r + 1} \in \Z: \ds \sum_{k \mathop = 1}^{r + 1} m_k a_k = 1$
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory




