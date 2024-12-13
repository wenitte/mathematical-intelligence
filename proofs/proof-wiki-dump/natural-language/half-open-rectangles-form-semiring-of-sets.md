# 

Source: https://proofwiki.org/wiki/Half-Open_Rectangles_form_Semiring_of_Sets



Theorem
The half-open $n$-rectangles $\JJ_{ho}^n$ form a semiring of sets.


Proof
By definition, $\O$ is considered to be a half-open $n$-rectangle.
That $\JJ_{ho}^n$ is $\cap$-stable follows from Half-Open Rectangles Closed under Intersection.

Thus, it remains to show condition $(3')$ for a semiring of sets:

$(3'):\quad$ If $A, B \in \JJ_{ho}^n$, then there exists a finite sequence of pairwise disjoint half-open $n$-rectangles $A_1, A_2, \ldots, A_m \in \JJ_{ho}^n$ such that $\ds A \setminus B = \bigcup_{k \mathop = 1}^m A_k$.

To prove this, proceed by induction on $n$:


Basis for the Induction
Suppose that $n = 1$, and let $I := \hointr a b$ and $J := \hointr c d$ be half-open intervals.

It is to be demonstrated that $I \setminus J$ is a finite union of pairwise disjoint half-open intervals.
Equivalently, by the above verification of the other axioms, that $\JJ_{ho}^1$ is a semiring of sets.

By swapping the roles of $I$ and $J$ if necessary, it may be arranged that $a \le c$.

Now if $b \le c$ as well, then $I \cap J = \O$.
Subsequently, this implies $I \setminus J = I$, and the statement trivially holds.

Next, consider the other case, that is, $c < b$.
If also $d < b$, then we may write $I$ as the following disjoint union:

$I = \hointr a b = \hointr a c \cup \hointr c d \cup \hointr d b$
The middle term equals $J$, and we immediately obtain:

$I \setminus J = \hointr a c \cup \hointr d b$
verifying the statement in this case.

Lastly, suppose that $b \le d$.
Then $I \cap J = \hointr a b \cap \hointr c d = \hointr c b$.
Therefore, by Set Difference with Intersection is Difference:

$I \setminus J = I \setminus \paren {I \cap J} = \hointr a b \setminus \hointr c b = \hointr a c$
and, having verified this last case, the result follows from Proof by Cases.

This constitutes the induction basis.
$\Box$


Induction Hypothesis
Now assume the induction hypothesis.
That is, for some fixed $n \ge 1$, assume that $\JJ_{ho}^n$ is a semiring of sets.

Next, it is to be shown that $\JJ_{ho}^{n + 1}$ is also a semiring of sets.


Induction Step
The induction step goes as follows.

By definition of half-open rectangle, it holds that:

$\JJ_{ho}^{n + 1} = \JJ_{ho}^n \times \JJ_{ho}^1$

Further, we have that $\JJ_{ho}^n$ and $\JJ_{ho}^1$ are semirings of sets.
Hence by Cartesian Product of Semirings of Sets, $\JJ_{ho}^{n + 1}$ is a semiring of sets, too.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $6.4$




