# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Inferior_of_Sequence_of_Sets



Theorem
The following definitions of the concept of Limit Inferior of Sequence of Sets are equivalent:

Definition 1
Let $\sequence {E_n : n \in \N}$ be a sequence of sets.

Then the limit inferior of $\sequence {E_n : n \in \N}$, denoted $\ds \liminf_{n \mathop \to \infty} E_n$, is defined as:














\(\ds \liminf_{n \mathop \to \infty} E_n\)

\(:=\)







\(\ds \bigcup_{n \mathop = 0}^\infty \bigcap_{i \mathop = n}^\infty E_n\)




















\(\ds \)

\(=\)







\(\ds \paren {E_0 \cap E_1 \cap E_2 \cap \ldots} \cup \paren {E_1 \cap E_2 \cap E_3 \cap \ldots} \cup \cdots\)









Definition 2
Let $\sequence {E_n : n \in \N}$ be a sequence of sets.

Then the limit inferior of $\sequence {E_n : n \in \N}$, denoted $\ds \liminf_{n \mathop \to \infty} E_n$, is defined as:

$\ds \liminf_{n \mathop \to \infty} E_n := \set {x: x \in E_i \text { for all but finitely many } i}$


Proof
Let $\sequence {E_n : n \in \N}$ be a sequence of sets.
Let:

$\ds B_n := \bigcap_{j \mathop = n}^\infty E_j$
Let:

$\ds \liminf_{n \mathop \to \infty} E_n := \bigcup_{n \mathop = 0}^\infty B_n$
that is, $\ds \liminf_{n \mathop \to \infty} \ E_n$ according to definition 1.

Let:

$E := \set {x: x \in E_i \text{ for all but finitely many } i}$
that is, $\ds \liminf_{n \mathop \to \infty} E_n$ according to definition 2.

By definition of set equality, it is enough to prove:

$\ds \liminf_{n \mathop \to \infty} E_n \subseteq E$
and:

$E \subseteq \ds \liminf_{n \mathop \to \infty} E_n$

From Set Complement inverts Subsets, we have:

$\ds \map \complement E \subseteq \map \complement {\liminf_{n \mathop \to \infty} E_n} \iff \liminf_{n \mathop \to \infty} E_n \subseteq E$
The strategy will therefore be to prove:

$\ds E \subseteq \liminf_{n \mathop \to \infty} E_n$
and:

$\ds \map \complement E \subseteq \map \complement {\liminf_{n \mathop \to \infty} E_n}$


Definition $2$ is contained in Definition $1$
Let $x \in E$.
By definition $x$ is in all but a finite number of $E_i$.
Let $m \in \Z_{\ge 0}$ be the largest integer such that $x \notin E_m$.
$m$ has to exist, because the set $\set {i \in \N: x \notin E_i}$ is a finite set.

Let $M \in \Z$ such that $m < M$.
Then as $x \in E_j$ for all $j > m$ it follows by definition of set intersection that:

$x \in B_M = \ds \bigcap_{j \mathop = M}^\infty E_j$
From the definition of set union, it follows that:

$x \in \ds \bigcup_{n \mathop = 0}^\infty B_n = \liminf_{n \mathop \to \infty} E_n$
Hence:

$E \subseteq \ds \liminf_{n \mathop \to \infty} E_n$
$\Box$


Complement of Definition 2 is contained in Complement of Definition 1
Let $x \in \map \complement E$
That is, $x \notin E$.
The definition of $E$ grants the existence of a strictly increasing sequence $\sequence {i_n}$ of natural numbers, such that:

$\forall n \in \N: x \notin E_{i_n}$
It follows that for every $k \in \N$, there exists an $n \in \Z$ with $i_n > k$.
Subsequently, from the definition of set intersection:

$B_k = \ds \bigcap_{j \mathop = k}^\infty E_j \subseteq E_{i_n}$
and hence $x \notin B_k$.
As $k$ was arbitrary, we have:

$x \notin \ds \bigcup_{k \mathop = 0}^\infty B_k = \liminf_{n \mathop \to \infty} E_n$
It follows that:

$\ds \map \complement E \subseteq \map \complement {\liminf_{n \mathop \to \infty} E_n}$
$\Box$

Therefore, we have established that

$x \in \ds \liminf_{n \mathop \to \infty} E_n \iff x \in E$
From the definition of set equality, it follows that:

$\ds \liminf_{n \mathop \to \infty} E_n = E$
$\blacksquare$


Also see
Inner Limit of Sequence of Sets in Normed Space described via the point-to-set distance function induced by the norm of the space
Inner Limit in Hausdorff Space by Open Neighborhoods


Sources
1951: J.C. Burkill: The Lebesgue Integral ... (previous) ... (next): Chapter $\text {I}$: Sets of Points: $1 \cdot 1$. The algebra of sets
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Problem $1.1.2$




