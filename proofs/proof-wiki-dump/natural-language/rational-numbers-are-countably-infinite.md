# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Countably_Infinite



Theorem
The set $\Q$ of rational numbers is countably infinite.


Proof 1
The rational numbers are arranged thus:

$\dfrac 0 1, \dfrac 1 1, \dfrac {-1} 1, \dfrac 1 2, \dfrac {-1} 2, \dfrac 2 1, \dfrac {-2} 1, \dfrac 1 3, \dfrac 2 3,  \dfrac {-1} 3, \dfrac {-2} 3, \dfrac 3 1, \dfrac 3 2, \dfrac {-3} 1, \dfrac {-3} 2, \dfrac 1 4, \dfrac 3 4, \dfrac {-1} 4, \dfrac {-3} 4, \dfrac 4 1, \dfrac 4 3, \dfrac {-4} 1, \dfrac {-4} 3 \ldots$
It is clear that every rational number will appear somewhere in this list.
Thus it is possible to set up a bijection between each rational number and its position in the list, which is an element of $\N$.
$\blacksquare$


Proof 2
Let us define the mapping $\phi: \Q \to \Z \times \N$ as follows:

$\forall \dfrac p q \in \Q: \phi \left({\dfrac p q}\right) = \left({p, q}\right)$
where $\dfrac p q$ is in canonical form.
Then $\phi$ is clearly injective.
From Cartesian Product of Countable Sets is Countable‎, we have that $\Z \times \N$ is countably infinite.
The result follows directly from Domain of Injection to Countable Set is Countable‎.
$\blacksquare$


Proof 3
For each $n \in \N$, define $S_n$ to be the set:

$S_n := \set {\dfrac m n: m \in \Z}$
By Integers are Countably Infinite, each $S_n$ is countably infinite.
Because each rational number can be written down with a positive denominator, it follows that:

$\forall q \in \Q: \exists n \in \N: q \in S_n$
which is to say:

$\ds \bigcup_{n \mathop \in \N} S_n = \Q$
By Countable Union of Countable Sets is Countable, it follows that $\Q$ is countable.
Since $\Q$ is manifestly infinite, it is countably infinite.
$\blacksquare$


Proof 4
Let $Q_\pm = \set {q \in \Q: \pm q > 0}$.

For every $q \in Q_+$, there exists at least one pair $\tuple {m, n} \in \N \times \N$ such that $q = \dfrac m n$.
Therefore, we can find an injection $i: Q_+ \to \N \times \N$.
By Cartesian Product of Natural Numbers with Itself is Countable, $\N \times \N$ is countable.
Hence $Q_+$ is countable, by Domain of Injection to Countable Set is Countable.

The map $-: q \mapsto -q$ provides a bijection from $Q_-$ to $Q_+$, hence $Q_-$ is also countable.
Hence $\Q$ is countable.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 15 \epsilon$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Infinite sets
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $155$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.6$: Cardinality: Problem $\text{A}.6.2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): countable (denumerable; enumerable)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): countable (denumerable, enumerable)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 2$ Countable or uncountable?
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): aleph-null




