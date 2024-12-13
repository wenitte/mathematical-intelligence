# 

Source: https://proofwiki.org/wiki/Number_of_Primes_is_Infinite/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The number of primes is infinite.


Proof
Define a topology on the integers $\Z$ by declaring a subset $U \subseteq \Z$ to be an open set if and only if it is either:

the empty set $\O$
or:

a union of sequences $\map S {a, b}$ such that $a \ne 0$, where:
$\map S {a, b} = \set {a n + b: n \in \Z} = a \Z + b$
In other words, $U$ is open if and only if every $x \in U$ admits some non-zero integer $a$ such that $\map S {a, x} \subseteq U$.

The open set axioms are verified as follows:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
All unions of open sets are open:
For any set of open sets $U_i$ and $x$ in their union $U$, any of the numbers $a_i$ for which $\map S {a_i, x} \subseteq U_i$ also shows that $\map S {a_i, x} \subseteq U$.


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
The intersection of two (and hence finitely many) open sets is open:
Let $U_1$ and $U_2$ be open sets.
Let $x \in U_1 \cap U_2$ (with integers $a_1$ and $a_2$ establishing membership).
Set $a$ to be the lowest common multiple of $a_1$ and $a_2$.
Then:

$\map S {a, x} \subseteq \map S {a_i, x} \subseteq U_1 \cap U_2$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
By definition, $\O$ is open: $\Z$ is just the sequence $\map S {1, 0}$, and so is open as well.

The topology is quite different from the usual Euclidean one, and has two notable properties:

$(1): \quad$ Since any non-empty open set contains an infinite sequence, no finite set can be open. Put another way, the complement of a finite set cannot be a closed set.
$(2): \quad$ The basis sets $\map S {a, b}$ are both open and closed: they are open by definition, and we can write $\map S {a, b}$ as the complement of an open set as follows:
$\ds \map S {a, b} = \Z \setminus \bigcup_{j \mathop = 1}^{a - 1} \map S {a, b + j}$
The only integers that are not integer multiples of prime numbers are $-1$ and $+1$, that is:

$\ds \Z \setminus \set {-1, +1} = \bigcup_{\text {$p$ prime} } \map S {p, 0}$
By the first property, the set on the left hand side cannot be closed.
On the other hand, by the second property, the sets $\map S {p, 0}$ are closed.
So, if there were only finitely many prime numbers, then the set on the right hand side would be a finite union of closed sets, and hence closed.
Therefore by Proof by Contradiction, there must be infinitely many prime numbers.
$\blacksquare$


Also see
Euclid's Theorem and its corollary
Definition:Furstenberg Topology


Historical Note
This proof was created by Hillel Furstenberg.
As such it is often referred to as Furstenberg's proof.





