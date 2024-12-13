# 

Source: https://proofwiki.org/wiki/Infinite_Set_is_Equivalent_to_Proper_Subset



Theorem
A set is infinite if and only if it is equivalent to one of its proper subsets.


Proof 1
Let $T$ be an infinite set.
By Infinite Set has Countably Infinite Subset, it is possible to construct a countably infinite subset of $T$.
Let $S = \set {a_1, a_2, a_3, \ldots}$ be such a countably infinite subset of $T$.
Create a Partition of $S$ into:

$S_1 = \set {a_1, a_3, a_5, \ldots}, S_2 = \set {a_2, a_4, a_6, \ldots}$
Let a bijection be established between $S$ and $S_1$, by letting $a_n \leftrightarrow a_{2 n - 1}$.
This is extended to a bijection between $S \cup \paren {T \setminus S} = T$ and $S_1 \cup \paren {T \setminus S} = T \setminus S_2$ by assigning each element in $T \setminus S$ to itself.
So a bijection has been demonstrated between $T$ and one of its proper subsets $T \setminus S_2$.
That is, if $T$ is infinite, it is equivalent to one of its proper subsets.

Now, let $T_0 \subsetneq T$ be a proper subset of $T$, and $f: T \to T_0$ be a bijection.
It follows from No Bijection between Finite Set and Proper Subset that $T$ must be infinite.
$\blacksquare$


Proof 2
Let $S$ be a set.

Suppose $S$ is finite.
From No Bijection between Finite Set and Proper Subset we have that $S$ can not be equivalent to one of its proper subsets.

Suppose $S$ is infinite.
From Infinite Set has Countably Infinite Subset, we can construct $v: \N \to S$ such that $v$ is an injection.

We now construct the mapping $h: S \to S$ as follows.

$\map h x = \begin {cases}
\map v {n + 1} & : \exists n \in \N: x = \map v n \\
x & : x \notin \Img v
\end {cases}$
It is clear that $h$ is an injection.
But we have that $\map v 0 \notin \Img h$ and so $\Img h \subsetneq S$.
The result follows from Injection to Image is Bijection.
$\blacksquare$


Proof 3
Let $X$ be a set which has a proper subset $Y$ such that:

$\card X = \card Y$
where $\card X$ denotes the cardinality of $X$.
Then:

$\exists \alpha \in \complement_X \paren Y$
and

$Y \subsetneqq Y \cup \set \alpha \subseteq X$
The inclusion mappings:

$i_Y: Y \to X: \forall y \in Y: i \paren y = y$
$i_{Y \cup \set \alpha}: Y \cup \set \alpha \to X: \forall y \in Y: i \paren y = y$
give:

$\card X = \card Y \le \card Y + \mathbf 1 \le \card X $
from which:

$\card X = \card Y + \mathbf 1 = \card X + \mathbf 1$
So by definition $X$ is infinite.
$\Box$

Now suppose $X$ is infinite.
That is:

$\card X = \card X + \mathbf 1$
Let $\alpha$ be any object such that $\alpha \notin X$.
Then there is a bijection $f: X \cup \set \alpha \to X$.
Let $f_{\restriction X}$ be the restriction of $f$ to $X$.
Then from Injection to Image is Bijection:

$\image {f_{\restriction X} } = X \setminus \set {f \paren \alpha}$
which is a proper subset of $X$ which is equivalent to $X$.
$\blacksquare$


Examples
Even Integers
Let $\Z$ be the set of integers.
By Integers are Countably Infinite, $\Z$ is infinite.
Let $E$ be the set of all even integers.
We have that, for example, $3 \in \Z$ but $3 \notin E$
Hence $E$ is a proper subset of $\Z$
Let $f: \Z \to E$ be the mapping defined as:

$\forall x \in \Z: \map f x = 2 x$
Then $f$ is a bijection.
Hence a fortiori $\Z$ and $E$ are equivalent.


Also see
Dedekind-Infinite: Richard Dedekind used this result as the definition of an infinite set.
Galileo's Paradox


Sources
1951: J.C. Burkill: The Lebesgue Integral ... (previous) ... (next): Chapter $\text {I}$: Sets of Points: $1 \cdot 2$. Infinite sets
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.3: \ 14$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.7$. Similar sets: Example $56$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Infinite sets
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): infinite set
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): infinite set




