# 

Source: https://proofwiki.org/wiki/Infinite_Set_has_Countably_Infinite_Subset/Proof_3



Theorem
Every infinite set has a countably infinite subset.


Proof
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


Axiom of Choice
This proof depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 15$: The Axiom of Choice
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.8$




