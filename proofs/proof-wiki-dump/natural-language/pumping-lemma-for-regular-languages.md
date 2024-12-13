# 

Source: https://proofwiki.org/wiki/Pumping_Lemma_for_Regular_Languages


This page has been identified as a candidate for refactoring of basic complexity.In particular: Split into separate transcluded pages for the various casesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: Various, also consider whether category should be Formal Languages.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\LL_3$ be the set of regular languages.


This article, or a section of it, needs explaining.In particular: Is it a set? Does this need to be proved? Intuition would suggest that it would be a class.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then the following holds:
$\forall L \in \LL_3: \exists n_0 \in \N_0: \forall z \in L: \card z > n_0 \implies \exists u, v, w$ such that:

$z = u \cdot v \cdot w$
$\card v > 0$
$\card {u v} < n_0$
$\forall i \in \N_0: u \cdot v^i \cdot w \in L$


Proof
For finite languages
For any finite regular language $L_{fin}$, the proof is simple.
Let $s_{maxlen} \in L_{fin}$.
Thus:

$\forall s \in L_{fin}: \card s \le \card {s_{maxlen} }$
Now choose $n_0 > \card {s_{maxlen} }$.
The implication now trivially holds because the premise:

$\paren {\card z > n_0}$
is false.
$\Box$


For infinite languages
For any one infinite regular language $L_{inf}$, the following holds:

$(1): \quad$ There exists a finite automaton:
$F = \struct {\Sigma, Q, q_0, A, \delta}$
such that:
$\map \LL F = L_{inf}$.
See Equivalence of Finite Automata and Regular Languages for a demonstration of this.


$(2): \quad$ There exists an infinite number of words $s \in L_{inf}$ with:
$\card s \ge \card Q$
Let $s \in L_{inf}$ be one of these words.
Let $n_0 = \card Q + 1$.
Consider all prefixes of this $s$.
We have:

$\card s > \card Q$
Thus from the Pigeonhole Principle, for at least two of them $F$ needs to end in the same state.
Let the first two indices in $s$ for which this is the case be $i$ and $j$.
The difference between $prefix_i$ and $prefix_j$ ($v$ in this formulation of the theorem) is a "loop" in $F$.
This loop can be traversed any number of times (including 0) and $F$ will still be in the same state immediately afterwards.
Hence:

$\forall i \N_0: u v^i w \in L_{inf}$
Furthermore:

$\card {u v} = j - 1 < n_0$
And since $i \ne j$ it follows that:

$\card v > 0$
$\Box$


General case
Since it could be shown that the theorem holds for both all finite and all infinite regular languages, it can be stated that it holds for all regular languages.
$\blacksquare$


Also see
Formal Language is not necessarily Regular, which follows from this result.




