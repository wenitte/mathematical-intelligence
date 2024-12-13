# 

Source: https://proofwiki.org/wiki/Limit_of_Decreasing_Sequence_of_Sets_is_Intersection

Definition
Let $\sequence {E_k}_{k \mathop \in \N}$ be an decreasing sequence:

$\forall k \in \N: E_{k + 1} \subseteq E_k$

Then $\sequence {E_k}_{k \mathop \in \N}$ has a limit such that:

$\ds \lim_{n \mathop \to \infty} E_n = \bigcap_{k \mathop \in \N} {E_k}$


Proof
Let $E = \ds \bigcap_{k \mathop \in \N} {E_k}$.
Let $x \in E$.
By definition of set intersection:

$\forall E_n \in \sequence {E_k}_{k \mathop \in \N}: x \in E_n$
Thus $x \in E_n$ for all but finitely many (that is, zero) terms of $\sequence {E_k}_{k \mathop \in \N}$.
That is:

$x \in \ds \liminf_{n \mathop \to \infty} E_n$
where $\ds \liminf_{n \mathop \to \infty} E_n$ denotes the limit inferior of $\sequence {E_k}_{k \mathop \in \N}$.
Hence $\ds E \subseteq \liminf_{n \mathop \to \infty} E_n$.
$\Box$

Let $x \in \ds \limsup_{n \mathop \to \infty} E_n$.
Aiming for a contradiction, suppose $\exists n \in \N: x \notin E_n$.
Then as $E_{n + 1} \subseteq E_n$ it follows that $n \notin E_{n + 1}$.
Hence:

$\forall m \in \N: m > n: x \notin E_m$
and so there is only a finite number of $i \in \N$ for which $x \in E_i$, that is, where $m < n$.
That is, by definition of limit superior:

$x \notin \ds \limsup_{n \mathop \to \infty} E_n$
But this contradicts our assertion that $x \in \ds \limsup_{n \mathop \to \infty} E_n$.
Hence:

$\forall n \in \N: x \in E_n$
and so by definition of set intersection:

$x \in E$
So we have shown that:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq E$
$\Box$

Hence we have:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq E$
and:

$\ds E \subseteq \liminf_{n \mathop \to \infty} E_n$
Hence by Subset Relation is Transitive:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq \liminf_{n \mathop \to \infty} E_n$
and it follows from Limit of Sets Exists iff Limit Inferior contains Limit Superior that:

$\ds \lim_{n \mathop \to \infty} E_n = \bigcup_{k \mathop \in \N} {E_k}$
$\blacksquare$


Sources
1951: J.C. Burkill: The Lebesgue Integral ... (previous) ... (next): Chapter $\text {I}$: Sets of Points: $1 \cdot 1$. The algebra of sets




