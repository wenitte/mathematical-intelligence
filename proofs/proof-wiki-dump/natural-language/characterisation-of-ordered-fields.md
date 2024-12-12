# 

Source: https://proofwiki.org/wiki/Characterisation_of_Ordered_Fields


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Much of what is proved from scratch here can be found elsewhere on $\mathsf{Pr} \infty \mathsf{fWiki}$ as fully encapsulated proofs which can be linked to directly.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {k, +, \cdot}$ be a field with unity $1$ and zero $0$.
Then the following are equivalent:

$(1): \quad$ There exists a total ordering $\le$ on $k$ such that $\struct {k, \le}$ is an ordered field
$(2): \quad$ $-1$ cannot be written as a sum of squares of elements of $k$
$(3): \quad$ $0$ cannot be written as a non-empty sum of squares of non-zero elements of $k$


Proof
$(2)$ iff $(3)$
Suppose there exist $\set {x_i: i \in I}$ such that

$\ds -1 = \sum_{i \mathop \in I} x_i^2$
Then

$\ds 0 = 1^2 + \sum_{i \mathop \in I} x_i^2$
a non-empty sum of non-zero squared of $k$.

Conversely, suppose that there is a set $\set {x_i: i \in I} \ne \O$ with $x_i \ne 0$ for all $i \in I$ such that:

$\ds 0 = \sum_{i \mathop \in I} x_i^2$
Then for any $j \in I$:

$\ds -x_j^2 = \sum_{\substack {i \mathop \in I \\ i \mathop \ne j} } x_i^2$
Dividing through by $x_j^2$ we find that:

$\ds -1 = -\paren {\frac {x_j} {x_j} }^2 = \sum_{\substack {i \mathop \in I \\ i \mathop \ne j} } \paren {\frac {x_i} {x_j} }^2$


$(1)$ implies $(2)$
By Properties of Ordered Field, in an ordered field we have, $-1 < 0$, and squares are non-negative.
Therefore for any subset $\set {x_i : i \mathop \in I} \subseteq k$,

$\ds -1 < 0 \le \sum_{i \mathop \in I} x_i ^2$


$(2)$ implies $(1)$
Suppose that $-1$ is not a sum of squares in $k$. 
Let $S$ be the set of non-empty sums of squares of non-zero elements of $k$.
Then by supposition and  $(2) \iff (1)$:

$0, 1 \notin S$

This article, or a section of it, needs explaining.In particular: but $(2) \iff (1)$ has not yet been established.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Trivially, $S$ is closed under addition.
Also, for any subsets $\set {x_i: i \in I}, \set {y_j: j \in J} \subseteq k$:

$\ds \paren {\sum_{i \mathop \in I} x_i^2} \cdot \paren {\sum_{j \mathop \in J} y_j^2} = \sum_{i, j} \paren {x_i y_j}^2 \in S$
so $S$ is closed under multiplication. 
It follows that $S$ is a multiplicative subgroup of the set difference $k \setminus \set 0$.
Now let $\Gamma$ be the collection of all subsets $M$ of $k$ such that:

$S \subseteq M$
$M$ is closed under addition
$M$ is a multiplicative subgroup of $k \setminus \set 0$
Then every chain $\mathscr C = \set {M_i : i \in \N}$ has an upper bound:

$\ds \bigcup_{i \mathop \in \N} M_i \in \Gamma$
So by Zorn's Lemma there is a maximal element $M$ with these properties.
Clearly $0 \notin M$.


This article, or a section of it, needs explaining.In particular: why "clearly"?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let:

$\paren {-M} := \set {x \in k : -x \in M}$
Suppose $x, -x \in M$.
Then:

$x - x = 0 \in M$
and this contradicts $0 \notin M$.
Hence $M$, $\set 0$ and $-M$ are pairwise disjoint.

At this point the reader should think of $M$ as a partition of $k$ into positive elements, $\set 0$ and negative elements.
The following two claims justify this statement.


Lemma 1
$k = M \cup \set 0 \cup \paren {-M}$


Proof of Lemma 1
Let $a \in k$, $a \ne 0$, $-a \notin M$, and:

$M' = \set {x + a y: x, y \in M \cup \set 0, \paren {x = 0 \lor y = 0} }$
We have:

$S \subseteq M \subseteq M'$
and it is trivial to check that $M'$ is closed under addition.


This article, or a section of it, needs explaining.In particular: Trivial though it be, it needs to be demonstrated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $x + a y$, $z + a w \in M'$.
Then:

$\paren {x + a y} \paren {z + a w} = \paren {x z + a^2 y w} + a \paren {y z + x w}$
Since:

$a^2 \in S \subseteq M'$
and:

$M$ is closed under multiplication and addition
it follows that:

$M'$ is also closed under multiplication.
Since $a$ and at least one of $x, y \ne 0$, it follows that:

$0 \notin M'$
Since $1 \in S \subseteq M'$:

$1 \in M'$
Let $t = x + a y \in M'$.
Then:














\(\ds t \paren {\frac x {t^2} + a \frac y {t^2} }\)

\(=\)







\(\ds \frac x t + a \frac y t\)




















\(\ds \)

\(=\)







\(\ds \frac {x + a y} {x + a y}\)




















\(\ds \)

\(=\)







\(\ds 1\)









Therefore every $t \in M'$ has a multiplicative inverse in $M'$
So $M'$ is a multiplicative subgroup of $k \setminus \set 0$.
Therefore $M'$ satisfies all the conditions subject to which we chose $M$.
This and the fact that $M \subseteq M'$ imply that:

$M = M'$
Therefore:

$a = 1 + 1 a \in M$
Let $-a \in M$.
Then:

$a \in -M$
so every $a \in k$ lies in exactly one of $M$, $\set 0$ and $-M$.
Thus $k = M \cup \set 0 \cup \paren {-M}$.
$\Box$

Now define a binary relation on $k$ by $x < y \iff y - x \in M$.
Equivalently:

$x \le y \iff \paren {x < y} \lor \paren {x = y}$


Lemma 2
$\struct {k, \le}$ is an ordered field.


Proof of Lemma 2
The proof is an elementary check of the relevant axioms.
First we check that $\le$ is a total order on $k$.
Reflexivity:
Trivial from the definition.
Antisymmetry:
Suppose that $x \le y$ and $y \le x$.
We cannot have $x - y \in M$ and $y - x \in M$, because since $M$ is closed under addition, this would imply $0 \in M$.
Therefore, $x - y = y - x = 0$ and $y = x$.
Transitivity:
Suppose $x \le y$ and $y \le z$.
Then $y - x \in M$ and $z - y \in M$.
$M$ is closed under addition, so $z - x = \paren {y - x} + \paren {z - y} \in M$.
Therefore $x \le z$.
Comparability:
The comparability of each pair of elements of $\struct {k, \le}$ is immediate from the above mentioned fact that $M$, $\set 0$ and $\paren {-M}$ partition $k$:
Suppose $x \nleq y$.
Then:

$y - x \notin M$
and:

$y - x \ne 0$
Then:

$y - x \in \paren {-M}$
so:

$x - y \in M$
and:

$y \le x$
Thus $x$ and $y$ are comparable.

It remains to show that the total order $\le$ is compatible with the field structure.
Let $x, y, z \in k$ such that $x < y$.
Then:

$\paren {y + z} - \paren {x + z} = y - x \in M$
So:

$x + z \le y + z$.
Now suppose further that $z > 0$.
We have that:

$z \in M$ and $y - x \in M$ by hypothesis
and:

$M$ is closed under multiplication.
Therefore:

$y z - x z = z \paren {y - x} \in M$

This establishes that $k$ is an ordered field.
$\Box$
$\blacksquare$


Note
This proof is important not only for the result above, but for the discussion of the partition $M \cup \set 0 \cup \paren {-M}$ into positive elements, zero and negative elements.
In the proof above we have implicitly shown the following proposition:
$(1)$ if and only if $(2)$, where:

$(1): \quad$ A field $k$ is a totally ordered field and $N \subseteq k$ is its set of positive elements.
$(2): \quad$ $0 \notin N$, $N$ is closed under addition and multiplication, $k = N \cup \set 0 \cup \paren {-N}$ and $k$ is ordered by $x < y \iff y - x \in N$.
and as above, $-N = \set {x \in k : -x \in N}$.





