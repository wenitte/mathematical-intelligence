# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Superior_of_Sequence_of_Sets



Theorem
The following definitions of the concept of Limit Superior of Sequence of Sets are equivalent:

Definition 1
Let $\sequence {E_n : n \in \N}$ be a sequence of sets.

Then the limit superior of $\sequence {E_n: n \in \N}$, denoted $\ds \limsup_{n \mathop \to \infty} E_n$, is defined as:














\(\ds \limsup_{n \mathop \to \infty} E_n\)

\(:=\)







\(\ds \bigcap_{i \mathop = 0}^\infty \bigcup_{n \mathop = i}^\infty E_n\)




















\(\ds \)

\(=\)







\(\ds \paren {E_0 \cup E_1 \cup E_2 \cup \ldots} \cap \paren {E_1 \cup E_2 \cup E_3 \cup \ldots} \cap \ldots\)









Definition 2
Let $\sequence {E_n: n \in \N}$ be a sequence of sets.

Then the limit superior of $\sequence {E_n: n \in \N}$, denoted $\ds \limsup_{n \mathop \to \infty} E_n$, is defined as:

$\ds \limsup_{n \mathop \to \infty} E_n = \set {x : x \in E_i \text { for infinitely many } i}$


Proof
Begin by defining:

$\ds B_n := \bigcup_{j \mathop = n}^\infty E_j$
Then by definition 1:

$\ds \limsup_{n \mathop \to \infty} E_n = \bigcap_{n \mathop = 0}^\infty B_n$


First Direction
Let $x$ belong to $E_i$ for infinitely many $i \in \N$.
Let $\map \phi n$ be the sequence consisting of these numbers in increasing order.
Then for any number $k$, there exists a number $a$ such that $\map \phi a \ge k$.
Hence:

$\ds x \in E_{\map \phi a} \subseteq \bigcup_{j \mathop = k}^\infty E_j = B_k$
Since $k$ was arbitrary, it follows that $x \in B_n$ for each $n$.
So:

$\ds x \in \limsup_{n \mathop \to \infty} E_n$


Second Direction
Let:

$\ds x \in \bigcap_{n \mathop = 0}^\infty B_n$
Aiming for a contradiction, suppose $x$ occurs in only finitely many $E_i$.
Then there is a largest value of $i$ (call it $i_0$) for which the membership holds.
Hence:

$x \notin \paren {E_{i_0 + 1} \cup E_{i_0 + 2} \cup \ldots} = B_{i_0 + 1}$
Therefore:

$\ds x \notin \bigcap_{n \mathop = 0}^\infty B_n$
This contradicts our assumption about $x$.
Hence $x$ belongs to infinitely many terms of the sequence.
$\blacksquare$


Sources
1951: J.C. Burkill: The Lebesgue Integral ... (previous) ... (next): Chapter $\text {I}$: Sets of Points: $1 \cdot 1$. The algebra of sets
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Problem $1.1.2$




