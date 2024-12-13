# 

Source: https://proofwiki.org/wiki/Infinite_Set_has_Countably_Infinite_Subset



Theorem
Every infinite set has a countably infinite subset.


Intuitive Proof
Let $S$ be an infinite set, and let $a_0 \in S$.
$S$ is infinite, so $\exists a_1 \in S, a_1 \ne a_0$, and $\exists a_2 \in S, a_2 \ne a_0, a_2 \ne a_1$, and so on.
That is, we can continue to pick elements out of $S$, and assign them the labels $a_0, a_1, a_2, \ldots$ and this procedure will never terminate as $S$ is infinite.
Each one of the elements is in one-to-one correspondence with the elements of $\N$, and therefore the set $\left\{{a_0, a_1, a_2, \ldots}\right\} \subseteq S$ is countably infinite.
$\blacksquare$


Warning
The intuitive nature of this proof obscures the fact that it is not a trivial truth that one may choose elements of $S$ in this manner when $S$ is infinite.
In Zermelo-Fraenkel set theory, a rigorous application of the principle of mathematical induction would show that one can repeat the procedure any finite number of times to construct a finite set $\set {a_0, a_1, \ldots, a_n}$.
However, in general, one needs the axiom of dependent choice to justify repeating such a procedure indefinitely.
It should be noted that the weaker axiom of countable choice is sufficient to prove the stated theorem.


Proof 1
Let $S$ be an infinite set.
We use Between Two Sets Exists Injection or Surjection.

Suppose that there exists an injection $\psi: \N \to S$.
Let $T$ be the image of $\psi$.
From Injection to Image is Bijection, it follows that $\psi^{-1}: T \to \N$ is a bijection.
Hence, $T$ is a countably infinite subset of $S$.

Now, suppose that that there exists a surjection $\phi: \N \to S$.
From Surjection from Natural Numbers iff Countable, it follows that $S$ is countably infinite.
So, from Set is Subset of Itself, we have that $S$ is a countably infinite subset of $S$.
$\blacksquare$


Proof 2
This proof follows the same steps as the intuitive one, but with more formality.

Let $S$ be an infinite set.
First an injection $f: \N \to S$ is constructed.
Let $g$ be a choice function on $\powerset S \setminus \set \O$.
Then define $f: \N \to S$ as follows:

$\forall n \in \N: \map f n = \begin {cases} \map g S & : n = 0 \\ \map g {S \setminus \set {\map f 0, \ldots, \map f {n - 1} } } & : n > 0 \end {cases}$
Since $S$ is infinite, $S \setminus \set {\map f 0, \ldots, \map f {n - 1} }$ is non-empty for each $n \in \N$.
Therefore $f \sqbrk \N$ is infinite.

To show that $f$ is injective, let $m, n \in \N$, say $m < n$.
Then:

$\map f m \in \set {\map f 0, \ldots, \map f {n - 1} }$
but:

$\map f n \in S \setminus \set {\map f 0, \ldots, \map f {n - 1} }$
Hence $\map f m \ne \map f n$.
Since $f$ is injective, it follows from Injection to Image is Bijection that $f$ is a bijection from $\N$ to $f \sqbrk \N$.
Thus $f \sqbrk \N$ is a countable subset of $S$.
$\blacksquare$


Proof 3
Let $S$ be an infinite set.
First an injection $f: \N \to S$ is constructed.
Let $f$ be a choice function on $\powerset S \setminus \set \O$.
That is:

$\forall A \in \powerset S \setminus \set \O: \map f A \in A$
This is justified only if the Axiom of Choice is accepted.

Let $\CC$ be the set of all finite subsets of $S$.
Let $A \in \CC$.
Since $S$ is infinite it follows that $S \setminus A \ne \O$.
So $S \setminus A \in \Dom f$.

Let $g: \CC \to \CC$ be the mapping defined as:

$\map g A = A \cup \set {\map f {S \setminus A} }$
That is, $\map g A$ is constructed by joining $A$ with the element that $f$ chooses from $S \setminus A$.

Consider the Recursion Theorem applied to $g$, starting with the set $\O$.
We obtain a mapping $U: \N \to \CC$ such that:

$\map U x = \begin{cases}
\O & : x = 0 \\ \map U n \cup \set {\map f {S \setminus \map U n} } & : x = n^+
\end{cases}$
where here $\N$ is considered as the set of elements of the von Neumann construction of natural numbers.

Consider the mapping $v: \N \to S$, defined as:

$\forall n \in \N: \map v n = \map f {S \setminus \map U n}$
We have that, by definition of $v$:

$(1): \quad \forall n \in \N: \map v n \notin \map U n$
$(2): \quad \forall n \in \N: \map v n \in \map U {n^+}$
$(3): \quad \forall m, n \in \N: n \le m \implies \map U n \subseteq \map U m$

Then because $\map v n \in \map U m$ but $\map v m \notin \map U m$:

$(4): \quad \forall m, n \in \N: n < m \implies \map v n \ne \map v m$

So $(4)$ implies that $v$ maps distinct elements of $\N$ onto distinct elements of $S$.
Thus $v: \N \to S$ is an injection.
It follows from Injection to Image is Bijection that $v$ is a bijection from $\N$ to $\map v \N$.
Thus $\map v \N$ is the countable subset of $S$ that was required.
$\blacksquare$


Proof 4
Let $S$ be an infinite set.

For all $n \in \N$, let:

$\FF_n = \set {T \subseteq S: \size T = n}$
where $\size T$ denotes the cardinality of $T$.
From Set is Infinite iff exist Subsets of all Finite Cardinalities:

$\FF_n$ is non-empty.
Using the axiom of countable choice, we can obtain a sequence $\sequence {S_n}_{n \mathop \in \N}$ such that $S_n \in \FF_n$ for all $n \in \N$.

Define:

$\ds T = \bigcup_{n \mathop \in \N} S_n \subseteq S$
For all $n \in \N$, $S_n$ is a subset of $T$ whose cardinality is $n$.
From Set is Infinite iff exist Subsets of all Finite Cardinalities:

$T$ is infinite.
From Countable Union of Countable Sets is Countable, $T$ is countable.
$\blacksquare$


Comment
What this in effect shows is that countably infinite sets are the smallest possible infinite sets.


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1968: A.N. Kolmogorov and S.V. Fomin‎: Introductory Real Analysis: $\S 2.2$: Theorem $3$
1989: Elon Lages Lima: Análise Real 1: $\S 1.3$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.)




