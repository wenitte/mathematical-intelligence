# 

Source: https://proofwiki.org/wiki/Limit_of_Increasing_Sequence_of_Sets_is_Union

Definition
Let $\sequence {E_k}_{k \mathop \in \N}$ be an increasing sequence:

$\forall k \in \N: E_k \subseteq E_{k + 1}$

Then $\sequence {E_k}_{k \mathop \in \N}$ has a limit such that:

$\ds \lim_{n \mathop \to \infty} E_n = \bigcup_{k \mathop \in \N} {E_k}$


Proof
Let $E = \ds \bigcup_{k \mathop \in \N} {E_k}$.
Let $x \in \ds \limsup_{n \mathop \to \infty} E_n$, where $\ds \limsup_{n \mathop \to \infty} E_n$ denotes the limit superior of $\sequence {E_k}_{k \mathop \in \N}$.
By definition of set union, $x \in E$.
Hence $\ds \limsup_{n \mathop \to \infty} E_n \subseteq E$.

Let $x \in E$.
Then $x \in E_n$ for some $n \in \N$.
Hence, as $\sequence {E_k}_{k \mathop \in \N}$ is an increasing sequence:

$\forall m \in N: m > n: x \in E_m$
That is, $x \in E_i$ for all but a finite number of $i$.
That is:

$x \in \ds \liminf_{n \mathop \to \infty} E_n$
So we have shown that:

$E \subseteq \ds \liminf_{n \mathop \to \infty} E_n$

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




