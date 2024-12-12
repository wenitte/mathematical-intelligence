# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula



Theorem
Let $D_x^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$


Examples
Example: $n = 0$
$D_x^0 w = w$


Example: $n = 1$
$D_x^1 w = D_u^1 w D_x^1 u$


Example: $n = 2$
$D_x^2 w = D_u^2 w \paren {D_x^1 u}^2 + D_u^1 w D_x^2 u$


Proof 1
The proof proceeds by induction on $n$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$

The case for $n = 0$ is:

$D_x^0 w = w$
which is consistent with the definition of the zeroth derivative.

The case for $n = 1$ is:

$D_x^1 w = D_u^1 w D_x^1 u$
which is consistent with Derivative of Composite Function.


Basis for the Induction
$\map P 2$ is the case:

$D_x^2 w = D_u^2 w \paren {D_x^1 u}^2 + D_u^1 w D_x^2 u$

This is consistent with Derivative of Composite Function: Second Derivative.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds D_x^r w = \sum_{j \mathop = 0}^r D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = r \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } r! \prod_{m \mathop = 1}^r \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$

from which it is to be shown that:

$\ds D_x^{r + 1} w = \sum_{j \mathop = 0}^{r + 1} D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = r \mathop + 1 \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } \paren {r + 1}! \prod_{m \mathop = 1}^{r + 1} \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$


Induction Step
This is the induction step:

Note that when $k_m = 0$:

$\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } = 1$
which shows that any contribution to the summation where $k_m = 0$ can be disregarded.

Let $j = 0$.
Consider the set of $k_p$ such that:

$k_1 + k_2 + \cdots = 0$
$1 \times k_1 + 2 k_2 + \cdots = r$
$k_1, k_2, \ldots \ge 0$
It is apparent by inspection that, for all $r > 0$, no set of $k_p$ can fulfil these conditions.
Therefore when $j = 0$ the summation is vacuous.

Also note that from:

$1 \times k_1 + 2 k_2 + \cdots = r$
it follows that:

$k_{r + 1} = k_{r + 2} = \cdots = 0$
Thus, while there are only finitely many $k$'s, their upper limit need not be explicitly considered.

Let $\map c {r, j, k_1, k_2, \ldots}$ be the coefficient of $D_u^j w$ in $D_x^r w$.

We establish some lemmata:
Lemma 1:

$\map {D_x} {\paren {D_x^m u}^{k_m} } = k_m \paren {D_x^m u}^{k_m - 1} D_x^{m + 1} u$

Lemma 2:

$\ds \map {D_x} {\prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } } = \prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r k_m \dfrac {D_x^{m + 1} u} {D_x^m u}$



This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By differentiating with respect to $x$:














\(\ds \map c {r + 1, j, k_1, k_2, \ldots}\)

\(=\)







\(\ds \map c {r, j - 1, k_1 - 1, k_2, \ldots}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {k_1 + 1} \map c {r, j, k_1 + 1, k_2 - 1, k_3, \ldots}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {k_2 + 1} \map c {r, j, k_1, k_2 + 1, k_3 - 1, k_4, \ldots}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)









The equations:

$k_1 + k_2 + \cdots = j$
and:

$k_1 + 2 k_2 + \cdots = r$
are preserved by this induction step.
Thus it is possible to factor out:

$\dfrac {r!} {k_1! \paren {1!}^{k_1} \cdots k_r! \paren {r!}^{k_r} }$
from each term on the right hand side of the equation for $\map c {r + 1, j, k_1, k_2, \ldots}$.
Thus we are left with:

$k_1 + 2 k_2 + 3 k_3 + \cdots = r + 1$

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$


Proof 2
For convenience, let:

$w_j := D_u^j w$
$u_k := D_x^k u$

Then:














\(\ds \map {D_x} {w_j}\)

\(=\)







\(\ds w_{j + 1} u_1\)





Derivative of Composite Function














\(\ds \map {D_x} {u_k}\)

\(=\)







\(\ds u_{k + 1}\)





Definition of Higher Derivative




Thus:














\(\ds D_x^1 w\)

\(=\)







\(\ds w_1 u_1\)





Derivative of Composite Function














\(\ds D_x^2 w\)

\(=\)







\(\ds \paren {w_2 u_1 u_1 + w_1 u_2}\)





Derivative of Composite Function: Second Derivative














\(\ds D_x^3 w\)

\(=\)







\(\ds \paren {\paren {w_3 u_1 u_1 u_1 + w_2 u_2 u_1 + w_2 u_1 u_2} + \paren {w_2 u_1 u_2 + w_1 u_3} }\)





Derivative of Composite Function: Third Derivative or directly




Analogously, let a corresponding tableau be set up of set partitions as follows:














\(\ds \DD^1\)

\(=\)







\(\ds \set 1\)




















\(\ds \DD^2\)

\(=\)







\(\ds \set {\set 2 \mid \set 1} + \set {2, 1}\)




















\(\ds \DD^3\)

\(=\)







\(\ds \set {\set 3 \mid \set 2 \mid \set 1} + \set {\set {3, 2} \mid \set 1} + \set {\set 2 \mid \set {3, 1} } + \set {\set 3 \mid \set {2, 1} } + \set {3, 2, 1}\)










Thus inspired, let $a_1 a_2 \cdots a_j$ denote a partition of the set $\set {1, 2, \ldots, n-1}$.
Let:














\(\ds \DD a_1 a_2 \cdots a_j\)

\(:=\)







\(\ds \set n a_1 a_2 \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_1 \cup \set n} a_2 \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_1 \paren {a_2 \cup \set n} \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_1 a_2 \cdots \paren {a_j \cup \set n}\)










This rule is isomorphic to:














\(\ds \map {D_x} {w_j u_{r_1} u_{r_2} \ldots u_{r_j} }\)

\(=\)







\(\ds w_{j + 1} u_1 u_{r_1} u_{r_2} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1 + 1} u_{r_2} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1} u_{r_2 + 1} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1} u_{r_2} \ldots u_{r_j + 1}\)









where the term $w_j u_{r_1} u_{r_2} \ldots u_{r_j}$ corresponds to a partition $a_1 a_2 \cdots a_j$.
Thus there exists a bijection from $\DD^n$ to $D_x^n w$.


This article, or a section of it, needs explaining.In particular: Link this to Number of Set Partitions by Number of ComponentsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Thus, collecting like terms in $D_x^n w$, we obtain a sum of terms:

$\map c {k_1, k_2, \ldots} w_j u_i^{k_1} u_2^{k_2} \ldots$
where:

$j = k_1 + k_2 + \cdots$
and:

$n = k_1 + 2 k_2 + \cdots$
and where:

$\map c {k_1, k_2, \ldots}$ is the number of partitions of $\set {1, 2, \ldots, n}$ into $j$ subsets where there are $k_t$ subsets with $t$ elements.

Consider an array of $k_t$ boxes of capacity $t$.
The number of ways to put $n$ different elements into these boxes is the multinomial coefficient:

$\dbinom n {1, 1, \ldots, 1, 2, 2, \ldots, 2, 3, 3, \ldots, 3, 4, \ldots} = \dfrac {n!} {\paren {1!}^{k_1} \paren {2!}^{k_2} \paren {3!}^{k_3} \cdots}$
It remains to divide by $k_1! \, k_2! \, k_3! \ldots$ corresponding to the number of ways each group of $k_t$ can be permuted
Hence:

$\map c {k_1, k_2, \ldots} = \dfrac {n!} {k_1! \paren {1!}^{k_1} \, k_2! \paren {2!}^{k_2} k_3! \paren {3!}^{k_3} \cdots}$
and the result follows.
$\blacksquare$


Proof 3
We have that:

$\dfrac {D_x^k u} {k!}$ is the coefficient of $z^k$ in $\map u {x + z}$
$\dfrac {D_u^j w} {j!}$ is the coefficient of $y^j$ in $\map w {u + y}$.
Hence the coefficient of $z^n$ in $\map w {\map u {x + z} }$ is:

$\dfrac {D_x^n w} {n!} = \ds \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } \dfrac {j!} {k_1! \, k_2! \cdots k_n!} \paren {\dfrac {D_x^1 u} {1!} }^{k_1} \paren {\dfrac {D_x^2 u} {2!} }^{k_2} \cdots \paren {\dfrac {D_x^n u} {n!} }^{k_n}$

This needs considerable tedious hard slog to complete it.In particular: plenty of details to be filled inTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 4
$D_x^n$ can be expressed as a determinant:

$D_x^n = \begin{vmatrix}
\dbinom {n - 1} 0 u_1 & \dbinom {n - 1} 1 u_2 & \dbinom {n - 1} 2 u_3 & \cdots & \dbinom {n - 1} {n - 2} u_{n - 1} & \dbinom {n - 1} {n - 1} u_n       \\

                  -1 & \dbinom {n - 2} 0 u_1 & \dbinom {n - 2} 1 u_2 & \cdots & \dbinom {n - 2} {n - 3} u_{n - 2} & \dbinom {n - 2} {n - 2} u_{n - 1} \\
                   0 &                    -1 & \dbinom {n - 3} 0 u_1 & \cdots & \dbinom {n - 3} {n - 4} u_{n - 3} & \dbinom {n - 3} {n - 3} u_{n - 2} \\
              \vdots &                \vdots &                \vdots & \ddots &                            \vdots &                            \vdots \\
                   0 &                     0 &                     0 & \cdots &                                -1 &                   \dbinom 0 0 u_1

\end{vmatrix}$
where $u_j := \paren {D_x^j u} D_u$.
Both sides of this equation are differential operators which are to be applied to $w$.


This needs considerable tedious hard slog to complete it.In particular: Fill in the detailsTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also known as
Some sources refer to this as Arbogast's formula for Louis François Antoine Arbogast who actually deduced this first.


Source of Name
This entry was named for Francesco Faà di Bruno.


Historical Note
While Faà di Bruno's Formula was named after Francesco Faà di Bruno, he was not the first to state it.
That honour belongs to Louis François Antoine Arbogast who published it in his textbook of $1800$ Du Calcul des Dérivations.
Faà di Bruno himself published this result in Barnaba Tortolini's magazine Annali di Scienze Matematiche e Fisiche in $1855$, and again in The Quarterly Journal of Pure and Applied Mathematics in $1857$.





