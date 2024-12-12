# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Box_Principle

  This article was Featured Proof between 18-Nov-2021 and 31-Dec-2021.




Theorem
Let $S$ be a finite set whose cardinality is $n$.
Let $S_1, S_2, \ldots, S_k$ be a partition of $S$ into $k$ subsets.
Then:

at least one subset $S_i$ of $S$ contains at least $\ceiling {\dfrac n k}$ elements
where $\ceiling {\, \cdot \,}$ denotes the ceiling function.


Corollary
If a set of $n$ distinct objects is partitioned into $k$ subsets, where $0 < k < n$, then at least one subset must contain at least two elements.


Proof
Aiming for a contradiction, suppose no subset $S_i$ of $S$ has as many as $\ceiling {\dfrac n k}$ elements.
Then the maximum number of elements of any $S_i$ would be $\ceiling {\dfrac n k} - 1$.
So the total number of elements of $S$ would be no more than $k \paren {\ceiling {\dfrac n k} - 1} = k \ceiling {\dfrac n k} - k$.

There are two cases:

$n$ is divisible by $k$
$n$ is not divisible by $k$.

Suppose $k \divides n$.
Then $\ceiling {\dfrac n k} = \dfrac n k$ is an integer and:

$k \ceiling {\dfrac n k} - k = n - k$
Thus:

$\ds \card S = \sum_{i \mathop = 1}^k \card {S_i} \le n - k < n$
This contradicts the fact that $\card S = n$.
Hence our assumption that no subset $S_i$ of $S$ has as many as $\ceiling {\dfrac n k}$ elements was false.

Next, suppose that $k \nmid n$.
Then:

$\card S = k \ceiling {\dfrac n k} - k < \dfrac {k \paren {n + k} } k - k = n$
and again this contradicts the fact that $\card S = n$.
In the same way, our assumption that no subset $S_i$ of $S$ has as many as $\ceiling {\dfrac n k}$ elements was false.

Hence, by Proof by Contradiction, there has to be at least $\ceiling {\dfrac n k}$ elements in at least one $S_i \subseteq S$.
$\blacksquare$


Also known as
Dirichlet's Box Principle, in particular its corollary, is also commonly known as the Pigeonhole Principle or Pigeon-Hole Principle:

Suppose you have $n + 1$ pigeons, but have only $n$ holes for them to stay in.
By the Pigeonhole Principle, at least one of the holes houses $2$ pigeons.
It is also known as Dirichlet's Drawer Principle or Dirichlet's Shelf Principle.
Some sources give it as the Letterbox Principle or Letter-Box Principle.

Some sources call it Dirichlet's Principle, but there is more than one theorem named such.
Some sources give this as the Dirichlet Principle.


Also see
Infinite Ramsey's Theorem


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.


Historical Note
Dirichlet's Box Principle appeared in print as early as $1622$ in Selectæ Propositiones in Tota Sparsim Mathematica Pulcherrimæ by Jean Leurechon.
It also appears, in greater detail, in the $1624$ work Récréations Mathématiques by "H. van Etten", also commonly attributed to Jean Leurechon.
It is commonly called Dirichlet's Box (or Drawer) Principle, after an $1834$ treatment by Johann Peter Gustav Lejeune Dirichlet, who called it the Schubfachprinzip (drawer principle or shelf principle).
In Russian and some other languages, it is known as the Dirichlet Principle or Dirichlet's Principle, which name ambiguously also refers to the minimum principle for harmonic functions.

It is usually seen in its simplest form: if you have $N + 1$ objects to put into $N$ boxes, at least one box contains $2$ objects.


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.18$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.2$: Isomorphic Graphs
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Henry van Etten: $124$
Weisstein, Eric W. "Dirichlet's Box Principle." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/DirichletsBoxPrinciple.html




