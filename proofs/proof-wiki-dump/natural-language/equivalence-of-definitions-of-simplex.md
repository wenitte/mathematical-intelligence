# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Simplex



Theorem
The following definitions of the concept of Simplex are equivalent:

Definition 1
A simplex $S$ in $\R^n$ with vertices $\family {\alpha_i}_{i \mathop = 0}^n$ is a set such that:

$S = \set {\ds \sum_{i \mathop = 0}^n \theta_i \alpha_i}$
where:

$\sequence {\alpha_i}_{i \mathop = 0}^n$ is a sequence of $n + 1$ affinely independent points in $\R^n$
$\sequence {\theta_i}_{i \mathop = 0}^n$ is a sequence of arbitrary real numbers such that:
$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \hointr 0 \to$
$\ds \sum_{i \mathop = 0}^n \theta_i = 1$
Definition 2
A simplex $S$ in $\R^n$ with vertices $\family {\alpha_i}_{i \mathop = 0}^n$ is a set such that:

$S = \set {\ds \sum_{i \mathop = 0}^n \theta_i \alpha_i}$
where:

$\sequence {\alpha_i}_{i \mathop = 0}^n$ is a sequence of $n + 1$ affinely independent points in $\R^n$
$\sequence {\theta_i}_{i \mathop = 0}^n$ is a sequence of arbitrary real numbers such that:
$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \closedint 0 1$
$\ds \sum_{i \mathop = 0}^n \theta_i = 1$


Proof
Let $S_1$ denote the set obtained by definition 1.
Let $S_2$ denote the set obtained by definition 2.

Let $x \in S_2$ for some $x \in \R^n$.
Then, by definition 2, a sequence of real numbers $\sequence {\theta_i}_{i \mathop = 0}^n$ exists such that:

$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \closedint 0 1$
$\ds \sum_{i \mathop = 0}^n \theta_i = 1$
$x = \ds \sum_{i \mathop = 0}^n \theta_i \alpha_i$
We have that $\sequence {\theta_i}_{i \mathop = 0}^n$ also satisfies the three conditions:

$\ds \sum_{i \mathop = 0}^n \theta_i = 1$
$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \hointr 0 \to$
$x = \ds \sum_{i \mathop = 0}^n \theta_i \alpha_i$
Hence $x \in S_1$ by definition 1.
Then by definition of subset:

$S_2 \subseteq S_1$
$\Box$

Let $x \in S_1$ for some $x \in \R^n$
Then, by definition 1, a sequence of real numbers $\sequence {\theta_i}_{i \mathop = 0}^n$ exists such that:

$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \hointr 0 \to$
$\ds \sum_{i \mathop = 0}^n \theta_i = 1$
$x = \ds \sum_{i \mathop = 0}^n \theta_i \alpha_i$

Aiming for a contradiction, suppose:

$\exists j \in \set {0, 1, 2, \ldots, n}: \theta_j > 1$
Then:

$\ds \sum_{i \mathop = 0}^n \theta_i \ge \theta_j > 1$
which is a contradiction.

So we see that:

$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \le 1$
Because:

$\ds \sum_{i \mathop = 0}^n \theta_i = 1$
and:

$\forall i \in \set {0, 1, 2, \ldots, n}: \theta_i \in \hointr 0 \to$
it follows by definition 2 that:

$x \in S_2$
Then by definition of subset:

$S_1 \subseteq S_2$
$\Box$

Thus we have:

$S_1 \subseteq S_2$
and:

$S_2 \subseteq S_1$
and by definition of set equality:

$S_1 = S_2$
$\blacksquare$





