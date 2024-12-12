# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set



Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$,

Then:

$\card {\powerset S} = 2^n$
where $\powerset S$ denotes the power set of $S$.

Thus it can be seen that the power set's alternative notation $2^S$ is indeed appropriate.
However, because of possible confusion over the conventional meaning of $2^n$, its use is deprecated.


Proof 1
Let $T = \set {0, 1}$.
For each $A \in \powerset S$, we consider the characteristic function $\chi_A: S \to T$ defined as:

$\forall x \in S: \map {\chi_A} x = \begin{cases}
1 & : x \in A \\
0 & : x \notin A
\end{cases}$

Now consider the mapping $f: \powerset S \to T^S$:

$\forall A \in \powerset S: \map f A = \chi_A$
where $T^S$ is the set of all mappings from $S$ to $T$.

Also, consider the mapping $g: T^S \to \powerset S$:

$\forall \phi \in T^S: \map g \phi = \phi^{-1} \sqbrk {\set 1}$
where $\phi^{-1} \sqbrk {\set 1}$ is the preimage of $\set 1$ under $\phi$.

Consider the characteristic function of $\phi^{-1} \sqbrk {\set 1}$, denoted $\chi_{\phi^{-1} \sqbrk {\set 1} }$.

We have:










\(\ds \forall x \in S: \, \)



\(\ds \map {\chi_{\phi^{-1} \sqbrk {\set 1} } } x\)

\(=\)







\(\ds \begin{cases} 1 & : x \in \phi^{-1} \sqbrk {\set 1} \\ 0 & : x \notin \phi^{-1} \sqbrk {\set 1} \end{cases}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases} 1 & : \map \phi x = 1 \\ 0 & : \map \phi x = 0 \end{cases}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x\)










So:










\(\ds \forall \phi \in T^S: \, \)



\(\ds \map {\paren {f \circ g} } \phi\)

\(=\)







\(\ds \map f {\phi^{-1} } {\sqbrk {\set 1} }\)




















\(\ds \)

\(=\)







\(\ds \chi_{\phi^{-1} \sqbrk {\set 1} }\)




















\(\ds \)

\(=\)







\(\ds \phi\)









So $f \circ g = I_{T^S}$, that is, the identity mapping on $T^S$.

So far so good. Now we consider the preimage of $\set 1$ under $\chi_A$:

$\chi_A^{-1} \sqbrk {\set 1} = A$
from the definition of the characteristic function $\chi_A$ above.
Thus:










\(\ds \forall A \in \powerset S: \, \)



\(\ds \map {\paren {g \circ f} } A\)

\(=\)







\(\ds \map g {\map f A}\)




















\(\ds \)

\(=\)







\(\ds \map g {\chi_A}\)




















\(\ds \)

\(=\)







\(\ds \chi_A^{-1} \sqbrk {\set 1}\)




















\(\ds \)

\(=\)







\(\ds A\)









So $g \circ f = I_{\powerset S}$, that is, the identity mapping on $\powerset S$.

It follows from Bijection iff Left and Right Inverse that $f$ and $g$ are bijections.

Thus by Cardinality of Set of All Mappings the result follows.
$\blacksquare$


Proof 2
Enumerating the subsets of $S$ is equivalent to counting all of the ways of selecting $k$ out of the $n$ elements of $S$ with $k = 0, 1, \ldots, n$.
So, from Cardinality of Set of Subsets, the number we are looking for is:

$\ds \card {\powerset S} = \sum_{k \mathop = 0}^n \binom n k$
But from the binomial theorem:

$\ds \paren {x + y}^n = \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^k$
It follows that:

$2^n = \ds \paren {1 + 1}^n = \sum_{k \mathop = 0}^n \binom n k \paren 1^{n - k} \paren 1^k = \sum_{k \mathop = 0}^n \binom n k = \card {\powerset S}$
$\blacksquare$


Proof 3
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\card S = n \implies \card {\powerset S} = 2^n$
Do not confuse $\map P n$, which is a propositional function on $\N$, with $\powerset S$, the power set of $S$.


Basis for the Induction
From Cardinality of Empty Set:

$S = \O \iff \card S = 0$
Then:

$\powerset \O = \set \O$
has one element, that is, $\O$.
So:

$\card {\powerset \O} = \card {\set \O} = 1 = 2^0$
thus confirming that $\map P 0$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\card S = k \implies \card {\powerset S} = 2^k$

Then we need to show:

$\card S = k + 1 \implies \card {\powerset S} = 2^{k + 1}$


Induction Step
This is our induction step:
Let $\card S = k + 1$.
Let $x \in S$.
Consider the set $S' = S \setminus \set x$ where $x$ is any element of $S$.
We see that $\card {S'} = k$.

Now adjoin $x$ to all the subsets of $S'$.
Counting the subsets of $S$, we have:

all the subsets of $S'$
and:

all the subsets of $S'$ with $x$ adjoined to them.
From the induction hypothesis, there are $2^k$ subsets of $S'$.
Adding $x$ to each of these does not change their number, so there are another $2^k$ subsets of $S$ consisting of all the subsets of $S'$ with $x$ adjoined to them.
In total that makes $2^k + 2^k = 2 \times 2^k = 2^{k + 1}$ subsets of $S$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \card S = n \implies \card {\powerset S} = 2^n$
$\blacksquare$


Informal Proof
Given an element $x$ of $S$, each subset of $S$ either includes $x$ or does not include $x$ (this follows directly from the definition of a set), which gives us two possibilities.
The same reasoning holds for any element of $S$.
One can intuitively see that this means that there are $\ds \underbrace {2 \times 2 \times \ldots \times 2}_{\card S} = 2^{\card S}$ total possible combinations of elements of $S$.
This is exactly $\card {\powerset S}$.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1963: George F. Simmons: Introduction to Topology and Modern Analysis ... (previous) ... (next): $\S 1$: Sets and Set Inclusion: Problem $3 \ \text {(d)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $13$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.8$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $1$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 15 \alpha$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.49$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $8$
1977: Gary Chartrand: Introductory Graph Theory ... (previous): Appendix $\text{A}.6$: Mathematical Induction: Problem Set $\text{A}.6$: $41$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Example $1.2$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.2$: Sets: Exercise $4$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.6$: Cardinality (in passing)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power set
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power set
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.5$: Theorem $\text{A}.30$




