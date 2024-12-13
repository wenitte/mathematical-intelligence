# 

Source: https://proofwiki.org/wiki/Negation_of_Ordering_of_Natural_Numbers_is_Provable



Theorem
Let $x, y \in \N$ be natural numbers.
Suppose $x \ge y$.
Let $\sqbrk a$ denote the unary representation of $a \in \N$.
Then:

$\neg \paren {\sqbrk x < \sqbrk y}$
is a theorem of minimal arithmetic.

Proof
Fix $x \in \N$.
Proceed by induction on $y$.

Basis for the Induction
Suppose $y = 0$.
The result:

$\neg \paren {\sqbrk x < 0}$
follows from Axiom $\text M 7$

Induction Hypothesis
Suppose that the result holds for $y \in \N$.

Induction Step
By Trichotomy Law for Natural Numbers, one of:

$x < y$
$x = y$
$x > y$
holds.

Suppose $x \le y$.
Then $x < \map s y$.
Then the conditions for the result fail, and so it follows from False Statement implies Every Statement.

Otherwise, suppose $x > y$.
Then, by hypothesis:

$\neg \paren {\sqbrk x < \sqbrk y}$
is a theorem.
Additionally, by Inequality of Natural Numbers is Provable:

$\neg \paren {\sqbrk x = \sqbrk y}$
is a theorem.
By Rule of Conjunction and Conjunction of Negations:

$\neg \paren {\sqbrk x < \sqbrk y \lor \sqbrk x = \sqbrk y}$
The result follows from Axiom $\text M 8$ and Modus Tollendo Tollens.
$\Box$

By the Principle of Mathematical Induction, the result holds for every $y \in \N$.
As $x \in \N$ was arbitrary, the result holds for every $x, y \in \N$.
$\blacksquare$





